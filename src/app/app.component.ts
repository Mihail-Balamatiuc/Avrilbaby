import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = `晴儿宝贝's Valentine's Day`;
  yesCnt: number = 0;
  noCnt: number = 0;
  displayTxt: string = 'Do you want to be my Valentine?';
  gifIndex: number = 0;
  displayNo: boolean = true;
  displayYes: boolean = true;
  inputValue: string = '';
  gifs: string[] = [
    "background-image: url('../assets/images/Asking.gif');",
    "background-image: url('../assets/images/No1.gif');",
    "background-image: url('../assets/images/uwu.gif');",
    "background-image: url('../assets/images/noChoice.gif');",
    "background-image: url('../assets/images/rly.gif');",
    "background-image: url('../assets/images/double.gif');",
    "background-image: url('../assets/images/loveYou.gif');",
  ];
  displayInput = false;
  displayMessage = false;

  onYesClick() {
    if (this.yesCnt === 0) {
      ++this.yesCnt;
      this.gifIndex = 4;
      this.displayTxt = "Rly? I'm so happy!!!! Can you confirm again it was not by accident?";
      this.displayNo = false;
      return;
    }
    if (this.yesCnt === 1) {
      ++this.yesCnt;
      ++this.gifIndex;
      this.displayTxt = "I'm so happy to hear that <3 But are you ready for a test?";
      return;
    }
    if (this.yesCnt === 2) {
      ++this.yesCnt;
      ++this.gifIndex;
      this.displayTxt = "Text the date we got together <3(dd/mm/yyyy)";
      this.displayYes = false
      this.displayInput = true;
      return;
    }
  }

  onNoClick() {
    if (this.noCnt === 0) {
      ++this.noCnt;
      ++this.gifIndex;
      this.displayTxt = 'Who are you lying to?';
      return;
    }
    if (this.noCnt === 1) {
      ++this.noCnt;
      ++this.gifIndex;
      this.displayTxt = 'Are you sure about your option? UWUUUU, choose again yes or no?';
      return;
    }
    if (this.noCnt === 2) {
      ++this.noCnt;
      ++this.gifIndex;
      this.displayTxt = "You don't leave me any other choice !";
      this.displayNo = false;
      return;
    }
  }

  onSubmitClick() {
    if (this.inputValue === '24/10/2023') {
      this.displayTxt = "Happy Valentine's Day Avrilaby, Love you so MUCHHHHH<3";
      this.displayMessage = true;
    }
  }
}
