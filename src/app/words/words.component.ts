import { Component, OnDestroy, OnInit } from '@angular/core';
import word_data from '../_files/word_data.json';
import { MessageService } from '../message.service';

var oneClick: boolean = false;

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})

export class WordsComponent implements OnInit {

  wordList: { vocab: String, reading: String, meaning: String }[] = word_data;

  result: String

  //random Word and meaning
  randomWords = Math.floor(Math.random() * this.wordList.length);
  resultRandom = this.wordList[this.randomWords];
  myJSON = JSON.stringify(this.resultRandom);
  myOBJ = JSON.parse(this.myJSON);
  //localStorage.setItem
  attempts = Number(localStorage.getItem("attempts"));



  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.randomWord();
  }

  randomWord() {
    
    document.getElementById("vocabulary").innerHTML = this.myOBJ.vocabulary;
    document.getElementById("reading").innerHTML = this.myOBJ.reading;
    this.randomChoices(this.myOBJ);
  }


  randomChoice1 = Math.floor(Math.random() * this.wordList.length);
  resultRandomChoice1 = this.wordList[this.randomChoice1];
  myJSON_choice1 = JSON.stringify(this.resultRandomChoice1);
  myOBJ_choice1 = JSON.parse(this.myJSON_choice1);

  randomChoice2 = Math.floor(Math.random() * this.wordList.length);
  resultRandomChoice2 = this.wordList[this.randomChoice2];
  myJSON_choice2 = JSON.stringify(this.resultRandomChoice2);
  myOBJ_choice2 = JSON.parse(this.myJSON_choice2);

  public randomChoices(myOBJ) {
    // this.messageService.add('Guessing..');
    if (
      myOBJ.meaning == null ||
      this.myOBJ_choice1.meaning == null ||
      this.myOBJ_choice2.meaning == null ||
      myOBJ.meaning == this.myOBJ_choice1.meaning ||
      myOBJ.meaning == this.myOBJ_choice2.meaning ||
      this.myOBJ_choice1.meaning == this.myOBJ_choice2.meaning
    ) {
      this.randomChoices(myOBJ);
    } else { this.randomButton(myOBJ, this.myOBJ_choice1, this.myOBJ_choice2); }
  }

  async randomButton(myOBJ, myOBJ_choice1, myOBJ_choice2) {

    //ห้ามนำตัวแปรออก เดี๋ยวปุ่มหาย

    var myarray = [myOBJ.meaning, myOBJ_choice1.meaning, myOBJ_choice2.meaning];
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //console.log(random);

    var myarray2 = [myOBJ.meaning, myOBJ_choice1.meaning, myOBJ_choice2.meaning];
    var random2 = myarray2[Math.floor(Math.random() * myarray2.length)];
    //console.log(random2);

    var myarray3 = [myOBJ.meaning, myOBJ_choice1.meaning, myOBJ_choice2.meaning];
    var random3 = myarray3[Math.floor(Math.random() * myarray3.length)];
    //console.log(random3);

    if (
      random == null ||
      random2 == null ||
      random3 == null ||
      random == random2 ||
      random == random3 ||
      random2 == random3
    ) {
      await this.randomButton(myOBJ, myOBJ_choice1, myOBJ_choice2);
    } else {
      document.getElementById("randomButton").innerHTML = random;
      document.getElementById("randomButton2").innerHTML = random2;
      document.getElementById("randomButton3").innerHTML = random3;
      document.getElementById("score").innerHTML = localStorage.getItem("attempts");

    }
  }

  testclick() {
    if (oneClick == false) {
      var answer = document.getElementById("randomButton").innerHTML;
      if (this.myOBJ.meaning == answer && this.myOBJ.meaning != null && answer != null) {
        this.result = "Correct !";
        // console.log(this.result);
        localStorage.setItem("attempts", "" + ++this.attempts);
      } else {
        this.result = "Wrong Answer !";
        // console.log(this.result);
        localStorage.setItem("attempts", ""+0);
      }
      oneClick = true

    }

  }
  testclick2() {
    if (oneClick == false) {
      var answer2 = document.getElementById("randomButton2").innerHTML;
      if (this.myOBJ.meaning == answer2 && this.myOBJ.meaning != null && answer2 != null) {
        this.result = "Correct !";
        localStorage.setItem("attempts", "" + ++this.attempts);
      } else {
        this.result = "Wrong Answer !";
        localStorage.setItem("attempts", ""+0);
      }
      oneClick = true
    }

  }
  testclick3() {
    if (oneClick == false) {
      var answer3 = document.getElementById("randomButton3").innerHTML;
      if (this.myOBJ.meaning == answer3 && this.myOBJ.meaning != null && answer3 != null) {
        this.result = "Correct !";
        // console.log(this.result);
        localStorage.setItem("attempts", "" + ++this.attempts);
      } else {
        this.result = "Wrong Answer !";
        // console.log(this.result);
        localStorage.setItem("attempts", ""+0);
      }
      oneClick = true
    }
  }

  refreshWords() {
    window.location.reload();
  }
}







