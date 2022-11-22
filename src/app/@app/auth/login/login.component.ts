import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/@core/data/User';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }
  loginForm: FormGroup;
  errorMessage: string = '';
  ngOnInit(): void {
    this.initialLoginForm();
  }


  initialLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],//'B087'
      password: ['', [Validators.required]]//123
    });
  }

  login(): void {
    debugger;
    this.authService.Login(this.loginForm.getRawValue()).subscribe(
      (user: any) => {
        debugger;
        console.log('User logged in');
        this.router.navigateByUrl('/home/list');

        if (user) {

          localStorage.setItem('token', user.token);
          this.authService.currentUserSubject.next(user);
          console.log(user);
        }

      },
      (error: any) => {
        this.errorMessage = 'Invalid User Name or Password';
      }

    );
  }
}
