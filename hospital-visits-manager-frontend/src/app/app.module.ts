import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, HttpClientModule], // Ensure HttpClientModule is added here
  providers: [],
  bootstrap: [],
})
export class AppModule {}
