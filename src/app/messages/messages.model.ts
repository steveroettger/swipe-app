export enum MessageSwipeType {
  LEFT = 'swipeleft',
  RIGHT = 'swiperight'
}

export interface Message {
  id: number;
  initials: string;
  name: string;
  content: string;
}
