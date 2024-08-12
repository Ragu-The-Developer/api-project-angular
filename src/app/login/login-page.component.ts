import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})

export class LoginPageComponent {
  username = "";
  password = "";
  errorMssg = "";
  
  constructor(private auth: AuthService, private router: Router) 
  {

  }
  login() {

    if(this.username.trim().length === 0)
    {
      this.errorMssg = "Username is Required";
    }

    else if (this.password.trim().length === 0)
    {
      this.errorMssg = "Password is Required";
    }
     
    else 
    {
      this.errorMssg = '';
      let res = this.auth.login(this.username, this.password);
      if(res === 200)
      {
        this.router.navigate(['home']);
      }

      else if(res === 403)
      {
        this.errorMssg = 'Invalid Credentials';
      }
    } 
  }
}
