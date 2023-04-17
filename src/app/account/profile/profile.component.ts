import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  profile:any;

  constructor(
    private accountService: AccountService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.accountService.getProfile().subscribe(data => {
      console.log(data);
      this.profile=data;
      this.authService.setUsername(this.profile.username);
    })
  }

  
}
