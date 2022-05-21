import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const {email, password} = f.form.value;
    // Todo: Check here
    this.auth.signIn(email, password)
    .then((res) => {
      this.router.navigateByUrl('/')
      this.toast.success("Signin Success")
    })
    .catch((err) => {
      console.log(err.message);
      this.toast.error("Signin failed")
    })
  }

}
