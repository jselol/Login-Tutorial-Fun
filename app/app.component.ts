import {Component} from 'angular2/core';
import {SignupComponent} from './signup.component';
import {LoginComponent} from './login.component';
import {PrivateComponent} from './private.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    directives: [SignupComponent, LoginComponent, ROUTER_DIRECTIVES],
    template: `
            <router-outlet></router-outlet>
        `
})
@RouteConfig([
    { path: '/home', name: 'Home', component: SignupComponent, useAsDefault:true },
    { path: '/signup', name: 'Signup', component: SignupComponent },
    { path: '/login', name: 'Login', component: LoginComponent }
])
export class AppComponent {}
