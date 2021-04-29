import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
  ],
  exports: [
    MessageService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
