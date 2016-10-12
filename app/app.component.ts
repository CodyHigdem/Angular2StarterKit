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
	template: `
		<header>
			<nav class="navbar navbar-inverse">
				<div class="navbar-header">
					<a href="/" class="navbar-brand">My Angular 2 app</a>
				</div>
			</nav>
		</header>
		<main>
			<div class="row">
				<div class="col-sm-4">

					<h2> USERS ARRAY </h2>
					<ul class="list-group users-list">
						<li class="list-group-item"
							*ngFor="let user of users"
							(click)="selectUser(user)"
							[class.active]="user === activeUser"
						> 
							{{user.name}} || {{user.username}} 

						</li>
					</ul>
				</div>
				<div class="col-sm-8">
					<div class="jumbotron"
						*ngIf="activeUser">
						<h2>{{activeUser.name}} <small>{{activeUser.username}}</small></h2>

						<input class="form-control" [(ngModel)]="activeUser.name">
					</div>
					<div class="jumbotron gocrazy" *ngIf="!activeUser">
						<span class="glyphicon glyphicon-hand-left"></span>
						<h2>Choose a user</h2>

					</div>
				</div>
			</div>

		</main>
		<footer class="text-center">
			Copyright 2016
		</footer>
	`,
	styles: [`
		.jumbotron { box-shadow: 0 2px 0 rgba(0,0,0, 0.2); }
		.users-list li {
			cursor: pointer;
		}
	`]
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