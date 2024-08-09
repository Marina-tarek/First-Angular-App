import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { AboutComponent } from '../component/about/about.component';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { FooterComponent } from '../component/footer/footer.component';
import { NotfoundComponent } from '../component/notfound/notfound.component';
import { ContactComponent } from '../component/contact/contact.component';
import { PortfolioComponent } from '../component/portfolio/portfolio.component';

export const routes: Routes = [
    {path:'',redirectTo:"home",pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'**',component:NotfoundComponent}

];
