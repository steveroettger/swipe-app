import { Component, OnInit } from '@angular/core';
import { Message, MessageSwipeType } from './messages.model';
/**
 * Hammerjs must be imported for gestures
 */
import 'hammerjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public eventText: String;
  public messages: Message[];
  public swipedMessageIndex: number;

  constructor() { }

  ngOnInit() {
    this.messages = [
      {
        id: 0,
        initials: 'SR',
        name: 'Steve Roettger',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore....'
      },
      {
        id: 1,
        initials: 'SR',
        name: 'Steve Roettger',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore....'
      },
      {
        id: 2,
        initials: 'SR',
        name: 'Steve Roettger',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore....'
      },
      {
        id: 3,
        initials: 'SR',
        name: 'Steve Roettger',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore....'
      }
    ];
  }

  public swipe(messageIndex: number, action: any) {

    // swipe left
    if (action === MessageSwipeType.LEFT) {
      this.messageSwiped(messageIndex);
    }

    // swipe right
    if (action === MessageSwipeType.RIGHT) {
      this.messageSwiped(-1);
    }
  }

  public messageSwiped(index: number) {
    this.swipedMessageIndex = index;
  }

}
