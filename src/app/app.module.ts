import { AboutComponent } from './componentes/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './componentes/contact/contact.component';
import { NgModule } from '@angular/core';
import { SearchComponent } from './componentes/search/search.component';
import { ShopComponent } from './componentes/shop/shop.component';
import { SingComponent } from './componentes/sing/sing.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    SingComponent,
    SearchComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
