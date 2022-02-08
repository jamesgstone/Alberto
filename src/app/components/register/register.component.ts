import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

//models
import { RegistrationForm } from '../../models/registration-form'

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

	formData:RegistrationForm = {
		id: 0,
		email: '',
		password: '',
		cityId: 0,
		street: '',
		firstName: '',
		lastName: ''
	}
	passwordConfirmation:string = '';

	constructor() {
	
	}

	ngOnInit(): void {
	}

}
