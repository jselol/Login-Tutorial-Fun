import {Component, Injectable} from 'angular2/core';
import {SignupComponent} from './signup.component';
import {LoginComponent} from './login.component';
import {PrivateComponent} from './private.component';
import {UserscheduleComponent} from './userschedule.component';
// import {adminscheduleComponent} from './adminschedule.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Schedule} from './schedule';
import {AuthenticationService} from './authentication.service';
import {User} from './user'


@Component({
    selector: 'my-app',
    directives: [SignupComponent, LoginComponent, ROUTER_DIRECTIVES],
    providers: [AuthenticationService, UserscheduleComponent],
    template: `
            <router-outlet></router-outlet>
        `
})
@RouteConfig([
    { path: '/home', name: 'Home', component: LoginComponent, useAsDefault:true },
    { path: '/signup', name: 'Signup', component: SignupComponent },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/userschedule', name: 'Userschedule', component: UserscheduleComponent}
])
export class AppComponent {
  schedule: Array<Schedule>;

  constructor(private _authenticationService: AuthenticationService, private _userSchedule: UserscheduleComponent)
  {
   this._authenticationService.getAllUsers();
  }


}
