import { Component } from '@angular/core';
import { CommanLineComponent } from "../comman-line/comman-line.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommanLineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
