import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './app-toast.component.html',
  styleUrls: ['./app-toast.component.scss'],
})
export class AppToastComponent  implements OnInit {

  @Input()
  message: string = ''
  
  @Input()
  durationVal: string = "3000"
  
  constructor() { }

  ngOnInit() {
    console.log(this.message, this.durationVal);
  }

}
