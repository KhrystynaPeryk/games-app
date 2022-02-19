import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  constructor(public friendservice: FriendsService) { }
  ngOnInit(): void {
    console.log(this.friendservice.myLibraryArray) // because the page reloads and all data disapears from the array
  }

  handleGameClicked(game: any) {
    console.log('received game from library', game)
  }

}
