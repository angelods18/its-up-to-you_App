import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  username = '';
  password = '';
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  login(){
    this.authService.login(this.username, this.password)
    .subscribe( (data:any) => {
      // console.log(data);
      if(data.token){
        this.authService.setBearerToken(data.token);
        this.authService.setUsername(this.username);
        this.router.navigate(['/main'])
      }
    })
  }
}
