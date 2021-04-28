import { Component, OnInit } from '@angular/core';
import { WordsComponent } from '../words/words.component';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  //อาจเปลี่ยนเป็น string
  myOBJ: any;
  myOBJ_choice1: any;
  myOBJ_choice2: any;
  constructor(private wordsComponent: WordsComponent) { }

  ngOnInit(): void {
    this.getResult();
  }

  getResult(): void {
    this.myOBJ = this.wordsComponent.randomChoices(this.myOBJ);
    // ERROR TypeError: Cannot read property 'meaning' of undefined
  }

}
