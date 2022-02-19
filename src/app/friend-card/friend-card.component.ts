import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css']
})
export class FriendCardComponent implements OnInit {
  @Input() friends!: any
  @Output() friendClick = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  addFriend(value:string) {
    this.friendClick.emit(value)
  }
}
