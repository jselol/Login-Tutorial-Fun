import {Component} from 'angular2/core';
import {AuthenticationService, User} from './authentication.service'
import {Router} from 'angular2/router';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <div class="container" >
            <div class="title">
                Welcome
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.email" id="email"
                            type="email" class="validate">
                        <label for="email">Email</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.password" id="password"
                            type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>

                <span>{{errorMsg}}</span>
                <button (click)="login()"
                    class="btn waves-effect waves-light"
                    type="submit" name="action">Login</button>
            </div>
        </div>
    	`
})

export class LoginComponent {

    public user = new User('','');
    public errorMsg = '';

    constructor(
        private _service:AuthenticationService,
        private _router:Router) {}

    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        } else {
            this._router.navigate(['Userschedule']);
        }

    }
}
