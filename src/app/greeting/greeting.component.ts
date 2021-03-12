import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  started = false;
  messageLines: string[] = [
    'HI THERE',
    'WELCOME BACK :)',
  ];
  activeMessage = '';
  showMessage = false;
  showControls = false;

  constructor () { }

  ngOnInit(): void {
    this.greet();
  }

  greet(): void {
    this.started = true; // for replay
    this.showControls = false;
    this.animateMessage(this.messageLines);
  }

  animateMessage(messageLines: string[], lineIndex = 0, duration = 3000, delay = 300) {
    setTimeout(() => {
      this.activeMessage = messageLines[lineIndex];
      this.showMessage = true;
      setTimeout(() => {
        if (lineIndex < messageLines.length - 1) {
          this.showMessage = false;
          this.animateMessage(messageLines, lineIndex + 1); //next Line
        } else {
          this.showControls = true; // show controls with last message
        }
      }, duration); // line display time
    }, delay); // delay for transitions
  }
}
















// export class GreetingComponent implements OnInit {
//   started = false;
//   messageArray: string[] = [
//     'HI THERE',
//     'WELCOME BACK :)',
//   ];
//   // messageArray: string[] = [
//   //   'I really wanted to gift you something but, unfortunately I can’t do that right now  :(',
//   //   'So I decided to gift “Us” something for the time being.',
//   //   'Every week, I’ll write you a special message here untill we meet.',
//   //   'You are welcome to do the same :)',
//   //   'And remember...',
//   //   "EU TE AMO | I love you | Je t'aime | あなたを愛しています",
//   // ];
//   activeMessage!: string;
//   showMessage = false;
//   showControls = false;

//   constructor () { }

//   ngOnInit(): void {
//     this.greet();
//   }

//   greet(): void {
//     this.started = true;
//     this.showControls = false;
//     this.messageArray.forEach((message, index) => {
//       this.createAnimationInterval(message, index);
//     });
//   }

//   startGreeting() {
//     console.log('started greeting');
//     this.started = true;

//     for (let i = 0; i < this.messageArray.length; i++) {
//       const message = this.messageArray[i];
//       setTimeout(() => {
//         this.activeMessage = message;
//         this.showMessage = true;
//       }, 4000 * i);

//       setTimeout(() => {
//         this.showMessage = false;
//       }, 3000 * i);
//     }

//     // while (true) {
//     //   this.messageArray.forEach(message => {
//     //     setInterval(() => {
//     //       this.showMessage = true;
//     //     }, 300);

//     //     setInterval(() => {
//     //       this.showMessage = false;
//     //       this.activeMessage = message;
//     //     }, 3000);
//     //   });
//     // }
//   }

//   createAnimationInterval(message: string, index: number): void {
//     setTimeout(async () => {
//       this.showMessage = false;

//       const transitionInterval = await setTimeout(() => {
//         this.activeMessage = message;
//         this.showMessage = true;

//         if (index === (this.messageArray.length - 1)) {
//           this.showControls = true;
//         }
//       }, 300);

//     }, index * 4000);
//   }

//   loopMessages() {
//     let i = 0;
//     let interval = setInterval(() => {
//       i++;

//       if (i === this.messageArray.length) {
//         clearInterval(interval);
//       };
//     }, 3600);

//   }

//   fadeOut() {
//     setTimeout(() => {
//       this.showMessage = false;
//     }, 300);
//   }

//   fadeIn() {
//     setTimeout(() => {
//       this.showMessage = true;
//     }, 300);
//   }

// }
