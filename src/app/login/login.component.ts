import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  isSubmitted = false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.authForm.controls; }

  signIn() {
    this.isSubmitted = true;
    if (this.authForm.invalid) {
      return;
    }
    const formValue = this.authForm.value
    let obj = {
      email: formValue.email,
      password: formValue.password
    }
    let res = this.authService.signIn(obj);
    if (res > -1) {
      this.router.navigateByUrl('/dashboard');
    } else {
      window.alert("Invalid Username")
    }

  }

}
