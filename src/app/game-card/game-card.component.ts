import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() games!: any
  @Output() gameClick = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  addGame(value:string) {
    this.gameClick.emit(value)
  }
}
