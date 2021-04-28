import { Injectable } from '@angular/core';
import word_data from './_files/word_data.json';
import { WordsComponent } from './words/words.component';

@Injectable({
  providedIn: 'root'
})
export class CheckTFService {

  checkTF: boolean;
  myOBJ: string;

  constructor(private wordsComponent: WordsComponent) { }

  getTF(): void {
    this.myOBJ = this.wordsComponent.randomWord();
    //this.checkTF = this.wordsComponent.guessHandler(this.myOBJ);
    //Type 'void' is not assignable to type 'boolean'.ts(2322)
  }
}
