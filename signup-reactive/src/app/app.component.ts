import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordChecker } from './custom-validators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void { 
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTandC: [false, Validators.requiredTrue]
    }, {
      validators: PasswordChecker('password', 'confirmPassword')
    })
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    console.table(this.registerForm.value);
    console.table(this.registerForm);

    if (this.registerForm.invalid) {
      return;
    } else {
      alert("Success Signup!\n"+JSON.stringify(this.registerForm.value))
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
