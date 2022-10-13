import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUserForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('')
  });

  user: User = new User();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user.firstName = this.newUserForm.value.firstName!;
    this.user.lastName = this.newUserForm.value.lastName!;
    this.user.email = this.newUserForm.value.email!;
    this.user.username = this.newUserForm.value.username!;
    this.user.password = this.newUserForm.value.password!;

    this.authenticationService.registerUser(this.user).
      subscribe((response: any) => {
        console.log(response);
        /** And Notification **/
        /** And Error handling **/
        this.newUserForm.reset();
      })
  }

}
