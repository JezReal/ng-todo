import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup 
  
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { 
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(event: any) {
    // e.preventDefault();

    if (this.loginForm.invalid) {
      console.log('Invalid Input');
    } else {
      // console.log(this.loginForm.value);
      this.dataService
        .login(this.loginForm.value)
        .subscribe((res: any) => {
          // console.log(res.data);
          if (res.data) {
            console.log('successfully logged in');
            window.sessionStorage.setItem(
              'account_id',
              res.data.account_id
            );
            this.router.navigate(['home']);
          } else if (res.error) {
            console.log('invalid email or password');
            
          }
        });
    }
  }
}