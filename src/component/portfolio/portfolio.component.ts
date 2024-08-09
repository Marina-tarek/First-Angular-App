import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommanLineComponent } from "../comman-line/comman-line.component";
import { log } from 'node:console';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommanLineComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  // property binding
imgSrc1:string="./assets/image/poert1.png";
imgSrc2:string="./assets/image/port2.png";
imgSrc3:string="./assets/image/port3.png"

imgAlt1:string="home image";
imgAlt2:string="cake image";
imgAlt3:string="circe image"

isClick:boolean=false;
imgSrc:string='';
open(src:string):void{
  this.imgSrc=src;
  console.log(src);
  this.isClick=true;
}
close():void{
  this.isClick=false;
}
}
