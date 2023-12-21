import { HeaderComponent } from './../../../../projects/header/src/lib/header.component';
import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  onSubmit() {
    const { username } = this.loginForm.value
    this.authService.getUser(username).subscribe((item) => {
      if (item && item.password) {
        this.router.navigate(['/dashboard'])
        console.log('login success')
      } else {
        console.log('invalid')
      }
    })
  }
}
