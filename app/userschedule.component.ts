import {Component} from 'angular2/core';
import {Schedule} from './schedule';


@Component({
    selector: 'userschedule-form',
    inputs: ['schedule'],
    template: `
        <div class="container" >
            <div class="title">
                Today's schedule (insert date here? dymaically of course you noob!)
            </div>
            <div class="panel-body">
                <div class="row">
                  <table class="table table-hover">
                      <thead>
                          <tr>
                              <td>Title</td>
                              <td>date</td>
                              <td>time</td>
                              <td>notes</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr *ngFor="#tasks of schedule">
                            <td>{{tasks.title}}</td>
                            <td>{{tasks.date}}</td>
                            <td>{{tasks.time}}</td>
                            <td>{{tasks.notes}}</td>
                          </tr>
                      </tbody>
                  </table>
                </div>
            </div>
        </div>
    	`
})


export class UserscheduleComponent{

schedule: Array<Schedule>;
constructor(){
  this.schedule = [
      new Schedule("Dr. Appointment", "Wed Nov 12, 2017", "8:30", "bring medication")
  ]
}
}
