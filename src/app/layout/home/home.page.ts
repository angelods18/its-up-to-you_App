import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  
  constructor( 
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.checkTokenValidity().subscribe({
      next: (resp) => {
        console.log("token valido")
        this.router.navigate(['/main'])
      },
      error: (error) => {
        console.log("token non valido")
        this.authService.refresh().subscribe({
          next: (res:any) => this.authService.setBearerToken(res.token) ,
          error: (err: any) => this.authService.deleteBearerToken()
        })
      }
    })    
  }

}
