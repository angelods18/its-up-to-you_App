import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  username: string = ''

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {}

  openMenu() {
    this.authService.getUsername().then(
      u => {
        console.log(u);
        this.username=u!=null ? u : '';
      }
    )
  }
}
