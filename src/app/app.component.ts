import { Component } from '@angular/core';
import { PublicService } from './services/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  msg:any;
  constructor(private pService:PublicService){

  }
  ngOnInit():void{

  }

  
  
}
