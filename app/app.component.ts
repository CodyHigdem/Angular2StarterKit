//angular component
import { Component } from '@angular/core';
import { User } from './shared/models/user';

//decorator

/*
* templateurl: 'home/home.html' is how you would load a html template fyi, looks like an http request??
*/

//DITCHES controllers and focuses on compoenents
@Component({
	selector: 'my-app',
	templateUrl: './app/app.component.html',
	styleUrl: ['./app/app.component.css']
})

//[(ngModel)] 2 way databinding
//This is how you'd pass data into the component for example message = 'hello', then show in template as {{message}}
//no need for controller.message because it's only tied into this compoenent
// * is a template driven expression in *ngFor or *ngIf="users"
export class AppComponent {
	message: string = 'Hello!';


	users: User[] = [
		{
			id: 2,
			name: 'second',
			username: 'secondsone'
		},
		{
			id: 3,
			name: 'third',
			username: 's3sone'
		},
		{
			id: 4,
			name: 'n4',
			username: '4onesone'
		}
	];
	activeUser: User;

	selectUser(user){
		this.activeUser = user;
		console.log(this.activeUser);
	}
	
}