import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: String[] = [];
  constructor() { }

  clear() {
    this.message = [];
  }

  add(s) {
    this.message.push(s);
  }
}
