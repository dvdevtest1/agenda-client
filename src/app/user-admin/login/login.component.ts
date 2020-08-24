import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

interface LoginUser {
  EMail: string;
  Password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUser: LoginUser = {
    EMail: '',
    Password: ''
  };
  public loginFailed = false;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.userService.login(this.loginUser.EMail, this.loginUser.Password)
      .subscribe(result => {
        if (result) {
          this.loginFailed = false;
          this.router.navigateByUrl('/agendas');
        } else {
          this.loginFailed = true;
        }
      });
  }

}

