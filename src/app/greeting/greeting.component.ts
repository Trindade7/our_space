import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  started = false;
  messageArray: string[] = [
    'Nulla anim proident lam laboris tempor ad duis.',
    'Ea aliqua laboris do ut incididunt ipsum eiusmod et.',
    'Voluptate consequat excepteur ea elit reprehenderit dolor nisi do exercitation.',
    'Fugiat elit ut velit rud nulla.'
  ];
  activeMessage!: string;
  showMessage = false;
  showControls = false;

  constructor () { }

  ngOnInit(): void {
  }

  startGreeting() {
    console.log('started greeting');
    this.started = true;

    for (let i = 0; i < this.messageArray.length; i++) {
      const message = this.messageArray[i];
      setTimeout(() => {
        this.activeMessage = message;
        this.showMessage = true;
      }, 4000 * i);

      setTimeout(() => {
        this.showMessage = false;
      }, 3000 * i);
    }

    // while (true) {
    //   this.messageArray.forEach(message => {
    //     setInterval(() => {
    //       this.showMessage = true;
    //     }, 300);

    //     setInterval(() => {
    //       this.showMessage = false;
    //       this.activeMessage = message;
    //     }, 3000);
    //   });
    // }
  }

  greet(): void {
    this.started = true;
    this.showControls = false;
    this.messageArray.forEach((message, index) => {
      this.createAnimationInterval(message, index);
    });
  }

  createAnimationInterval(message: string, index: number): void {
    setTimeout(async () => {
      this.showMessage = false;

      const transitionInterval = await setTimeout(() => {
        this.activeMessage = message;
        this.showMessage = true;

        if (index === (this.messageArray.length - 1)) {
          this.showControls = true;
        }
      }, 300);

    }, index * 4000);
  }

  loopMessages() {
    console.log('started loop');

    let i = 0;
    let interval = setInterval(() => {


      i++;

      if (i === this.messageArray.length) {
        clearInterval(interval);
      };
    }, 3600);

  }

  fadeOut() {
    setTimeout(() => {
      this.showMessage = false;
    }, 300);
  }

  fadeIn() {
    setTimeout(() => {
      this.showMessage = true;
    }, 300);
  }

}