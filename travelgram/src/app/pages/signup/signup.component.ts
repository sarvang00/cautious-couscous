import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from "@angular/fire/compat/storage";
import { AngularFireDatabase } from "@angular/fire/compat/database";

// using something for image compression
import { NgxImageCompressService } from "ngx-image-compress";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  picture: string = "https://learnyst.s3.amazonaws.com/assets/schools/2410/resources/images/logo_lco_t17sd.png"

  constructor(
    private auth: AuthService,
    private router: Router,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const {email, password, username, country, bio, name} = f.form.value;

    this.auth.signUp(email, password)
    .then((res)=>{
      console.log(res);
      const {uid} = res.user!
      this.db.object(`/users/${uid}`)
      .set({
        id: uid,
        name: name,
        email: email,
        instaUserName: username,
        country: country,
        bio: bio,
        picture: this.picture
      })
    })
    .then(()=>{
      this.router.navigateByUrl('/')
      this.toastr.success("Signup success")
    })
    .catch((err)=>{
      this.toastr.error("Signup failed")
      console.log(err)
    })
  }

}
