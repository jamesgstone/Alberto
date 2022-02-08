import { Component, OnInit } from '@angular/core';
import { Validators, ValidationErrors, AbstractControl, FormControl, FormGroup, FormBuilder, ValidatorFn } from '@angular/forms';

//models
import { RegistrationForm } from '../../models/registration-form'

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

	regForm:FormGroup;
	step:number

	constructor(private fb: FormBuilder) {
		this.createForm();
		this.step = 1;
	}


	createForm() {
		this.regForm = this.fb.group({
			id: ['', [ Validators.required ] ],
			email: ['', [ Validators.required, Validators.email ] ],
			password: ['', [ Validators.required ] ],
			cityId: ['', [ Validators.required ] ],
			street: ['', [ Validators.required ] ],
			firstName: ['', [ Validators.required ] ],
			lastName: ['', [ Validators.required ] ],
			passwordConfirmation: ['', [ Validators.required ] ]
		});


		this.regForm.valueChanges.subscribe(form => {
			if (form.password !== form.passwordConfirmation) {
				this.regForm.controls['passwordConfirmation'].setErrors({ mismatch: true });
			} else {
				this.regForm.controls['passwordConfirmation'].setErrors(null);
			}
		});
	}
	
	ngOnInit(): void {

	}

	firstStepInvalid() {
		return this.regForm.get('id')?.invalid || this.regForm.get('email')?.invalid || this.regForm.get('password')?.invalid || this.regForm.get('passwordConfirmation')?.invalid
	}

	goStep1(): void {
		this.step = 1;
	}

	goStep2(): void {
		this.step = 2;
	}

	register() {

	}


}
