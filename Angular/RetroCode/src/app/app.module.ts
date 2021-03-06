import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; 


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component /my-component .component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
