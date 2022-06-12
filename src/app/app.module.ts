import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from "@angular/forms";
import {HeaderService} from "./header/header.service";
import {HttpClientModule} from "@angular/common/http";
import {MainComponent} from './contents/main/main.component';
import {SwiperModule} from "swiper/angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
