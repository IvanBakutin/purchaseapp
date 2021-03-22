import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { LoadAppComponent } from './load-app/load-app.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [   AppComponent, LoadAppComponent ],
    bootstrap:    [  AppComponent ]
})
export class AppModule { }