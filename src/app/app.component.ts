import { Component } from '@angular/core';
import { InfogwService } from 'infogw';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  constructor(infogwService:InfogwService) {
    console.log(infogwService.convertUSDToVND(50, 20));
    
  }
}
