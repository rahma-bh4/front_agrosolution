import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  title = 'Agrosolution';
  myimage:string="assets/logo.png";
  im:string="assets/phoo.jpg"
}
