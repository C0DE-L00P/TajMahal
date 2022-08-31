import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { User } from '../SharedClassesAndTypes/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = new User('','','','');
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {}

  OnSubmit(login :NgForm){
    console.log(this.user)
    login.reset()
  }

  loginForm = this.fb.group({
    Email: ['',[Validators.required,Validators.pattern]],
    Password: ['',[Validators.required]],
  },{validator:[Validators.required]})

  get Email(){
    return this.loginForm.get('Email')
  }
  get Password(){
    return this.loginForm.get('Password')
  }
}
