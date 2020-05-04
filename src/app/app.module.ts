import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TempConverterPipe } from './temp-convertor.pipe';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TempConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
