import { Component } from '@angular/core';
import { CommanLineComponent } from "../comman-line/comman-line.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommanLineComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
