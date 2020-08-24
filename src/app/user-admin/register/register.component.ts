import { Component, OnInit } from '@angular/core';
import { User } from '../shared/User';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user$: Observable<User>;
  public $isSaved: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  async ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.user$ = this.userService.getUser();
    } else {
      this.user$ = of({
        Id: 0,
        FirstName: '',
        LastName: '',
        BirthDate: null,
        Email: ''
      });
    }
  }

  public onSubmit(user: User) {
    if (user.Id > 0) {
      this.$isSaved = this.userService.updateUser(user);
    } else {
      this.$isSaved = this.userService.registerUser(user);
    }
  }
}
