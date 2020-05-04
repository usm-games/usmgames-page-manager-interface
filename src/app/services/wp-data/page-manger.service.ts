import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AppError} from '../../errors/app-error';
import {NotFoundError} from '../../errors/not-found-error';
import {InvalidError} from '../../errors/invalid-error';
import {ForbiddenError} from '../../errors/forbidden-error';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {UnauthorizedError} from '../../errors/unauthorized-error';
import {JWTAuth} from '../../models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class PageMangerService {

  constructor(
    private http: HttpClient
    ) { }

  private static get headers(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    const t: JWTAuth = JSON.parse(localStorage.getItem('t'));

    if (t) {
      headers = headers.set('Authorization', `Bearer ${t.token}`);
    }
    return headers;
  }
  private readonly url = 'https://usmgpm.herokuapp.com/api';

  private static processError(error: HttpErrorResponse): AppError {
    console.log(error.error);
    if (error.status === 404) {
      return new NotFoundError(`Could not find this resource: ${error.url}`, error);
    } else if (error.status === 400) {
      return new InvalidError('Invalid data sent', error);
    } else if (error.status === 403) {
      return new ForbiddenError('Forbidden', error);
    } else if (error.status === 401) {
      return new UnauthorizedError('Unauthorized', error);
    } else {
      return new AppError('Unknown error', error);
    }
  }

  private processHttpObservableToPromise<T>(obs: Observable<any>): Promise<T> {
    return obs.toPromise()
      .catch(error => {
        throw PageMangerService.processError(error);
      })
      .then(payload => payload as T);
  }

  private processHttpObservable<T>(obs: Observable<any>): Observable<T> {
    return obs.pipe(
      catchError(err => throwError(PageMangerService.processError(err))),
      map(data => data as T)
    );
  }

  public get<T>(namespace: string, params?: any): Observable<T> {
    const options = {
      params, headers: PageMangerService.headers
    };
    return this.processHttpObservable<T>(this.http.get(this.url + '/' + namespace, options));
  }

  public post<T>(namespace: string, data?: any): Promise<T> {
    const options = {
      headers: PageMangerService.headers
    };
    return this.processHttpObservableToPromise<T>(this.http.post(this.url + '/' + namespace, data, options));
  }
}
