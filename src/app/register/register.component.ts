import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../SharedClassesAndTypes/User';
import { ConfirmPasswordValidator, ForbiddenNameValidator } from '../Validators/ForbiddenNameValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  // DO IT IN TEMPLATE DRIVEN

  user:User =new User('','','','');
  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {}

  OnSubmit(register :NgForm){
    console.log(this.user)
    register.reset()
  }


  // DO IT IN REACTIVE FORMS

  registerForm = this.fb.group({
    userName: ['',[Validators.required,ForbiddenNameValidator(/admin/),Validators.minLength(3)]],
    Email: ['',[Validators.required,Validators.pattern]],
    Password: [''],
    ConfirmPassword: [''],
    whereDidYouHearAboutUs: [''],
  },{validator: [ConfirmPasswordValidator]})
  
  get userName(){
    return this.registerForm.get('userName')
  }
  get Email(){
    return this.registerForm.get('Email')
  }
  get Password(){
    return this.registerForm.get('Password')
  }
  get ConfirmPassword(){
    return this.registerForm.get('ConfirmPassword')
  }
}
