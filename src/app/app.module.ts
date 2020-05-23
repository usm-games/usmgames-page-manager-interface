import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

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
import { ChallengeSubmissionComponent } from './views/challenge-submission/challenge-submission.component';
import { SubmissionFormComponent } from './components/submission-form/submission-form.component';
import { ChallengeSubmissionFormComponent } from './components/challenge-submission-form/challenge-submission-form.component';
import { ChallengeListGroupComponent } from './components/challenge-list-group/challenge-list-group.component';
import { ChallengeDisplayComponent } from './components/challenge-display/challenge-display.component';
import { ChallengeEvaluationComponent } from './views/challenge-evaluation/challenge-evaluation.component';
import { SubmissionListGroupComponent } from './components/submission-list-group/submission-list-group.component';
import { ChallengeListGroupItemComponent } from './components/challenge-list-group-item/challenge-list-group-item.component';
import { EvaluationFormComponent } from './components/evaluation-form/evaluation-form.component';

import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { SubmissionListGroupItemComponent } from './components/submission-list-group-item/submission-list-group-item.component';
import { SubmissionDisplayComponent } from './components/submission-display/submission-display.component';
import { UserRegisterComponent } from './views/user-register/user-register.component';


registerLocaleData(localeEs);

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
    ChallengeCreateFormComponent,
    ChallengeSubmissionComponent,
    SubmissionFormComponent,
    ChallengeSubmissionFormComponent,
    ChallengeListGroupComponent,
    ChallengeDisplayComponent,
    ChallengeEvaluationComponent,
    SubmissionListGroupComponent,
    ChallengeListGroupItemComponent,
    EvaluationFormComponent,
    SubmissionListGroupItemComponent,
    SubmissionDisplayComponent,
    UserRegisterComponent
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
    { provide: LOCALE_ID, useValue: 'es-CL'},
    RedirectToPanel
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
