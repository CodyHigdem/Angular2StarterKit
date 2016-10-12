//angular component
import { Component } from '@angular/core';
//decorator

/*
* templateurl: 'home/home.html' is how you would load a html template fyi, looks like an http request??
*/
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
		<div class="jumbotron">
			<h1>Welcome to our app!</h1>
		</div>

		<footer class="text-center">
			Copyright 2016
		</footer>
	`,
	styles: [`
		.jumbotron { box-shadow: 0 2px 0 rgba(0,0,0, 0.2); }
	`]
})
export class AppComponent {}