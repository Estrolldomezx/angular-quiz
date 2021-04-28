//ทำ service มาเก็บฟังก์ชั่น ยังทำการ pass function หรือ value ของแต่ละ function ไปยัง component ไม่ได้ 

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




  constructor() { }


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
    document.getElementById("reading").innerHTML = myOBJ.reading;

    this.randomChoices(myOBJ);
    return myOBJ;
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
    } else { this.randomButton(myOBJ, myOBJ_choice1, myOBJ_choice2); }

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

  public guessHandler(myOBJ) {

    var r1 = document.getElementById("randomButton");
    var r2 = document.getElementById("randomButton2");
    var r3 = document.getElementById("randomButton3");


    // //ทดสอบ event ปุ่มด้วย if ---> กดปุ่มก็ออกผลลัพธ์แค่ปุ่มแรก
    // document.getElementById("buttons").addEventListener("click", function () {
    //   if (r1.getAttribute("id") == "randomButton") {
    //     var answer = document.getElementById("randomButton").innerHTML;
    //     console.log(myOBJ.meaning);
    //     console.log(answer);
    //     if (myOBJ.meaning == answer && myOBJ.meaning != null && answer != null) {
    //       console.log("true");
    //       return true;
    //     } else {
    //       console.log("false");
    //       return false;
    //     }
    //   }
    //   if (r2.getAttribute("id") == "randomButton2") {
    //     var answer2 = document.getElementById("randomButton2").innerHTML;
    //     console.log(myOBJ.meaning);
    //     console.log(answer2);
    //     if (myOBJ.meaning == answer2 && myOBJ.meaning != null && answer2 != null) {
    //       console.log("true");
    //       return true;
    //     } else {
    //       console.log("false");
    //       return false;
    //     }
    //   }
    //   if (r3.getAttribute("id") == "randomButton3") {
    //     var answer3 = document.getElementById("randomButton3").innerHTML;
    //     console.log(myOBJ.meaning);
    //     console.log(answer3);
    //     if (myOBJ.meaning == answer3 && myOBJ.meaning != null && answer3 != null) {
    //       console.log("true");
    //       return true;
    //     } else {
    //       console.log("false");
    //       return false;
    //     }
    //   }
    // });




    //ทดสอบด้วย if -else แล้ว แต่เช็ค True, False กับ service ไม่ได้

    // if (document.getElementById("randomButton").addEventListener) {
    //   document.getElementById("randomButton").addEventListener("click", function () {
    //     var answer = document.getElementById("randomButton").innerHTML;
    //     console.log(myOBJ.meaning);
    //     console.log(answer);
    //     if (myOBJ.meaning == answer && myOBJ.meaning != null && answer != null) {
    //       console.log("true");
    //       return true;
    //     } else {
    //       console.log("false");
    //       return false;
    //     }

    //   });
    // }

    // if (document.getElementById("randomButton2").addEventListener) {
    //   document.getElementById("randomButton2").addEventListener("click", function () {
    //     var answer2 = document.getElementById("randomButton2").innerHTML;
    //     console.log(myOBJ.meaning);
    //     console.log(answer2);
    //     if (myOBJ.meaning == answer2 && myOBJ.meaning != null && answer2 != null) {
    //       console.log("true");
    //       return true;
    //     } else {
    //       console.log("false");
    //       return false;
    //     }

    //   });
    // }

    // if (document.getElementById("randomButton3").addEventListener) {
    //   document.getElementById("randomButton3").addEventListener("click", function () {
    //     var answer3 = document.getElementById("randomButton3").innerHTML;
    //     console.log(myOBJ.meaning);
    //     console.log(answer3);
    //     if (myOBJ.meaning == answer3 && myOBJ.meaning != null && answer3 != null) {
    //       console.log("true");
    //       return true;
    //     } else {
    //       console.log("false");
    //       return false;
    //     }

    //   });
    // }



    //ทดสอบการอ่านค่าจาก id ของทุกตัวของ button เช็ค boolean กับ service ไม่ได้

    // document.getElementById("randomButton").addEventListener("click", function () {
    //   var answer = document.getElementById("randomButton").innerHTML;
    //   console.log(myOBJ.meaning);
    //   console.log(answer);
    //   if (myOBJ.meaning == answer && myOBJ.meaning != null && answer != null) {
    //     console.log("true");
    //     return true;
    //   } else {
    //     console.log("false");
    //     return false;
    //   }
    // });

    // document.getElementById("randomButton2").addEventListener("click", function () {
    //   var answer2 = document.getElementById("randomButton2").innerHTML;
    //   console.log(myOBJ.meaning);
    //   console.log(answer2);
    //   if (myOBJ.meaning == answer2 && myOBJ.meaning != null && answer2 != null) {
    //     console.log("true");
    //     return true;
    //   } else {
    //     console.log("false");
    //     return false;
    //   }
    // });

    // document.getElementById("randomButton3").addEventListener("click", function () {
    //   var answer3 = document.getElementById("randomButton3").innerHTML;
    //   console.log(myOBJ.meaning);
    //   console.log(answer3);
    //   if (myOBJ.meaning == answer3 && myOBJ.meaning != null && answer3 != null) {
    //     console.log("true");
    //     return true;
    //   } else {
    //     console.log("false");
    //     return false;
    //   }
    // });

  }



}



