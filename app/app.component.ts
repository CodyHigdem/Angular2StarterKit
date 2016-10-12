//angular component
import { Component } from '@angular/core';
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
		<div class="jumbotron">
			<h1>Welcome to our app!</h1>
			<p>{{message}}</p>
		</div>
		<h2> User </h2>
		<p> The user is {{ user.name }} || {{user.username}}. </p>
		<h2> USERS ARRAY </h2>
		<div *ngFor="let user of users">
			{{user.name}} || {{user.username}}
		</div>
		</main>
		<footer class="text-center">
			Copyright 2016
		</footer>
	`,
	styles: [`
		.jumbotron { box-shadow: 0 2px 0 rgba(0,0,0, 0.2); }
	`]
})

//This is how you'd pass data into the component for example message = 'hello', then show in template as {{message}}
//no need for controller.message because it's only tied into this compoenent

export class AppComponent {
	message = 'Hello!';
	user = {
		id: 1,
		name: 'Chris',
		username: 'angryChris'
	};

	users = [
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
}