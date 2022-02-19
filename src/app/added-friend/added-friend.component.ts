import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-added-friend',
  templateUrl: './added-friend.component.html',
  styleUrls: ['./added-friend.component.css']
})
export class AddedFriendComponent implements OnInit {

  @Input() friends!: any
  @Output() removeClick = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  removeFriend(value:string) {
    this.removeClick.emit(value)
  }
}
