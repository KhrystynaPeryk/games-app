import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.css']
})
export class LibraryCardComponent implements OnInit {
  @Input() games!: any
  @Output() gameClick = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  download(game: string) {
    console.log(game, 'downloaded')
  }

  share(value: string) {
    this.gameClick.emit(value)
    console.log(value, 'shared')
  }
}
