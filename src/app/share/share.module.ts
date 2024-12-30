import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { MainBarComponent } from './main-bar/main-bar.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent, 
    ShoppingCarComponent, MainBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
