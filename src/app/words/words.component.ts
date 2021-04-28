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
  AnswerList: { vocab: String, reading: String, meaning: String }[] = word_data;


  constructor() {
    var dome;
  }


  ngOnInit(): void {
    this.randomWord();
  }



  randomButton(myOBJ, myOBJ_choice1, myOBJ_choice2) {

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
      this.randomButton(myOBJ, myOBJ_choice1, myOBJ_choice2);
    } else {
      document.getElementById("randomButton").innerHTML = random;
      document.getElementById("randomButton2").innerHTML = random2;
      document.getElementById("randomButton3").innerHTML = random3;
      this.guessHandler(myOBJ);

    }


  }



  randomWord() {
    //random Word and meaning
    var randomWord = Math.floor(Math.random() * this.wordList.length);
    var resultRandom = this.wordList[randomWord];
    //console.log(resultRandom);
    var myJSON = JSON.stringify(resultRandom);
    var myOBJ = JSON.parse(myJSON);
    document.getElementById("vocabulary").innerHTML = myOBJ.vocabulary;
    document.getElementById("reading").innerHTML = myOBJ.reading;

    this.randomChoices(myOBJ);

  }

  randomChoices(myOBJ) {
    //random Choice 1
    var randomChoice1 = Math.floor(Math.random() * this.wordList.length);
    var resultRandomChoice1 = this.wordList[randomChoice1];
    var myJSON_choice1 = JSON.stringify(resultRandomChoice1);
    var myOBJ_choice1 = JSON.parse(myJSON_choice1);
    //console.log(myJSON_choice1);
    //document.getElementById("otherChoice1").innerHTML = myOBJ_choice1.meaning;


    //random Choice 2
    var randomChoice2 = Math.floor(Math.random() * this.wordList.length);
    var resultRandomChoice2 = this.wordList[randomChoice2];
    var myJSON_choice2 = JSON.stringify(resultRandomChoice2);
    var myOBJ_choice2 = JSON.parse(myJSON_choice2);
    //console.log(myJSON_choice2);
    //document.getElementById("otherChoice2").innerHTML = myOBJ_choice2.meaning;

    if (
      myOBJ.meaning == null ||
      myOBJ_choice1.meaning == null ||
      myOBJ_choice2.meaning == null ||
      myOBJ.meaning == myOBJ_choice1.meaning ||
      myOBJ.meaning == myOBJ_choice2.meaning ||
      myOBJ_choice1.meaning == myOBJ_choice2.meaning
    ) {
      this.randomChoices(myOBJ);
    } else { }
    this.randomButton(myOBJ, myOBJ_choice1, myOBJ_choice2);
  }

  public guessHandler(myOBJ) {
    document.getElementById("randomButton").addEventListener("click", function () {
      var answer = document.getElementById("randomButton").innerHTML;
      console.log(myOBJ.meaning);
      console.log(answer);
      if (myOBJ.meaning == answer && myOBJ.meaning != null && answer != null) {
        console.log("true");
      } else {
        console.log("false");
      }
    });

    document.getElementById("randomButton2").addEventListener("click", function () {
      var answer2 = document.getElementById("randomButton2").innerHTML;
      console.log(myOBJ.meaning);
      console.log(answer2);
      if (myOBJ.meaning == answer2 && myOBJ.meaning != null && answer2 != null) {
        console.log("true");
      } else {
        console.log("false");
      }
    });

    document.getElementById("randomButton3").addEventListener("click", function () {
      var answer3 = document.getElementById("randomButton3").innerHTML;
      console.log(myOBJ.meaning);
      console.log(answer3);
      if (myOBJ.meaning == answer3 && myOBJ.meaning != null && answer3 != null) {
        console.log("true");
      } else {
        console.log("false");
      }
    });

  }



}



