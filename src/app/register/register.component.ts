import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup 
  
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { 
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(event: any) {
    // e.preventDefault();

    if (this.registerForm.invalid) {
      alert('Invalid input')
    } else {
      // console.log(this.loginForm.value);
      this.dataService
        .register(this.registerForm.value)
        .subscribe((res: any) => {
          if (res.data) {
            alert('Successfully registered. Please login')
            this.router.navigate(['/']);
          } else if (res.error) {
            alert('Registration failed')
          }
        });
    }
  }
}
