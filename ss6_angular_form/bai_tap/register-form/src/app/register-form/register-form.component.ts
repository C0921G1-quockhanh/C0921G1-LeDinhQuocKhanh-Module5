import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;

  countries: string[] = ['VietNam','China','USA','Japan','Korea','Germany'];

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({

      email: new FormControl('',
                  [Validators.required,Validators.email]),

      groupPassword: new FormGroup({

        password: new FormControl('',
          [Validators.required,Validators.minLength(6)]),

        confirmPassword: new FormControl('',
          [Validators.required,Validators.minLength(6)])

      }, this.checkPassword),

      country: new FormControl('',
                  [Validators.required]),

      age: new FormControl('',
                  [Validators.required,Validators.min(18)]),

      gender: new FormControl('',
                  [Validators.required]),

      phone: new FormControl('',
                  [Validators.required,Validators.pattern("^\\+84\\d{9,10}$")])

    })
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  checkPassword(abstractControl: AbstractControl): any {
    const password = abstractControl.value.password;
    const confirmPassword = abstractControl.value.confirmPassword;

    return password === confirmPassword ? null : {notConfirm: true};
  }


}
