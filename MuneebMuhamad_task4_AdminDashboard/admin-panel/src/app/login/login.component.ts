import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  correctUser: boolean = true;

  constructor(private router: Router, private backendService: BackendService) {}

  ngOnInit(): void {}

  async handleLogin() {
    console.log(this.email, this.password);
    // check user authentication from db
    // show error if incorrect, else redirect to home
    await this.backendService
      .authenticateAdmin(this.email, this.password)
      .subscribe((r) => {
        if (r == true) {
          this.router.navigate(['/home']);
          this.correctUser = true;
        } else this.correctUser = false;
      });
  }
}
