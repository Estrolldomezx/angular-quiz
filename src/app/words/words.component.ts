import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import word_data from '../_files/word_data.json';


@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  wordList: { vocab: String, reading: String, meaning: String }[] = word_data;

  constructor() {
   }


  ngOnInit(): void {
    this.randomWord();
  }

  randomWord() {
    //random Word and meaning
    var randomWord = Math.floor(Math.random() * this.wordList.length);
    var resultRandom = this.wordList[randomWord];
    //console.log(resultRandom);
    var myJSON = JSON.stringify(resultRandom);
    var myOBJ = JSON.parse(myJSON);
    document.getElementById("vocabulary").innerHTML = myOBJ.vocabulary;
    document.getElementById("meaning").innerHTML = myOBJ.meaning;

    this.randomChoices(myOBJ);

  }

  randomChoices(myOBJ) {
    //random Choice 1
    var randomChoice1 = Math.floor(Math.random() * this.wordList.length);
    var resultRandomChoice1 = this.wordList[randomChoice1];
    var myJSON_choice1 = JSON.stringify(resultRandomChoice1);
    var myOBJ_choice1 = JSON.parse(myJSON_choice1);
    console.log(myJSON_choice1);
    document.getElementById("otherChoice1").innerHTML = myOBJ_choice1.meaning;
    //random Choice 2
    var randomChoice2 = Math.floor(Math.random() * this.wordList.length);
    var resultRandomChoice2 = this.wordList[randomChoice2];
    var myJSON_choice2 = JSON.stringify(resultRandomChoice2);
    var myOBJ_choice2 = JSON.parse(myJSON_choice2);
    console.log(myJSON_choice2);
    document.getElementById("otherChoice2").innerHTML = myOBJ_choice2.meaning;

    if (
      myOBJ.meaning == null ||
      myOBJ_choice1.meaning == null ||
      myOBJ_choice2.meaning == null ||
      myOBJ.meaning == myOBJ_choice1.meaning || 
      myOBJ.meaning == myOBJ_choice2.meaning || 
      myOBJ_choice1.meaning == myOBJ_choice2.meaning
      ) {
      this.randomChoices(myOBJ);
    } else {}
  }

}