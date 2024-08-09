import { Component } from '@angular/core';
import { CommanLineComponent } from "../comman-line/comman-line.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommanLineComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
