import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MessageService } from './message.service';

// export const routes: Routes = [
//   {
//     path: "home",
//     component: WordsComponent,
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: 'home', component: WordsComponent },
      { path: 'nextWords', component: WordsComponent },
      { path: '',   redirectTo: '/home', pathMatch: 'full' },
    ])
    //RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [
    MessageService,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
