import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './components/map/map.component';
import { TestComponent } from './pages/test/test.component';
import { InputComponent } from './components/input/input.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    TestComponent,
    InputComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
