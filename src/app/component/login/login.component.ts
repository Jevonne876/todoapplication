import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user-model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  user: User = new User();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }


  userLogin() {
    this.user.username = this.loginForm.value.username!;
    this.user.password = this.loginForm.value.password!;

    this.authenticationService.userLogin(this.user).subscribe((response: any) => {

      console.log(response.body);
      alert(`it worked`);

    })

  }

}
