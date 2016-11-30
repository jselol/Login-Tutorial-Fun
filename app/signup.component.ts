import {Component} from 'angular2/core';
import {AuthenticationService, User} from './authentication.service'

@Component({
    selector: 'signup-form',
    providers: [AuthenticationService],
    template: `
        <div class="container" >
            <div class="title">
                Welcome - Please Register
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
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.passwordConfirm" id="passwordConfirm"
                            type="password" class="validate">
                        <label for="password">Re-enter to confirm password</label>
                    </div>
                </div>

                <span>{{errorMsg}}</span>
                <button (click)="signUp()"
                    class="btn waves-effect waves-light"
                    type="submit" name="action">Sign Up</button>
            </div>
        </div>
    	`
})

export class SignupComponent {

    public user = new User('','');
    public errorMsg = '';

    constructor(
        private _service:AuthenticationService) {}

    signUp() {
        if(this.user.password !== this.user.passwordConfirm){
            alert("incorrect password");
        } else {
            this._service.createNewUserFromSignUp(this.user.email, this.user.password)
        }

    }
}
