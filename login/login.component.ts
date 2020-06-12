import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted:Boolean = false

  constructor(private _formBuilder:FormBuilder, private api:ApiService, private cookie:CookieService,
    private router:Router, @Inject("afterLoginUrl") private afterLoginUrl:string ) { 
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit() {

    this.submitted = true;

    if (!this.loginForm.valid) {
      return
    }

    let user:User = this.loginForm.value;
    console.log("user: ", user)
    this.api.login(user.username, user.password).subscribe(resp => {
      console.log(resp);
      let date = new Date();
      date.setTime(date.getTime() + (6 * 24 * 60 * 60 * 1000));
      this.cookie.set("auth", "test_" + user.username, date, "/");
      this.router.navigate([this.afterLoginUrl]);
    });
  }

}
