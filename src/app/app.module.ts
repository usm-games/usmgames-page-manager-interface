import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {HttpClientModule} from '@angular/common/http';
import { UserPanelComponent } from './views/user-panel/user-panel.component';
import { LoginCardComponent } from './views/login-card/login-card.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import {RedirectToPanel} from './guards/injectable/redirect-to-panel';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ChallengesListComponent } from './components/challenges-list/challenges-list.component';
import { ChallengeCreateFormComponent } from './components/challenge-create-form/challenge-create-form.component';

const routes: Routes = [
  {path: 'panel', component: UserPanelComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginCardComponent, pathMatch: 'full', resolve: [RedirectToPanel]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserPanelComponent,
    LoginCardComponent,
    ChallengesListComponent,
    ChallengeCreateFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    RedirectToPanel
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
