import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  searchBy!: string
  searchedFriends: any
  friendsArray = this.fs.friendsArray
  myFriendsBucket = this.fs.myFriendsBucket
  clicked = false

  constructor(private fs: FriendsService) { }

  ngOnInit(): void {
    this.myFriendsBucket = [
      {name:'cocoaegg'},
      {name:'cubefortress'},
      {name:'glazedbee'}
    ]
  }

  searchFriends(searchBy: string) {
    console.log(searchBy)
    this.searchedFriends = this.friendsArray.filter((friend: any) =>
      friend.name.includes(searchBy));
    console.log(this.searchedFriends);
    this.clicked = true
    return this.searchedFriends;
  }

  handleFriendClicked(friend: any) {
    console.log('received', friend)
    this.myFriendsBucket.push(friend)
    this.searchedFriends = this.searchedFriends.filter((el: any) => el !== friend)
    console.log('this.myFriendsBucket', this.fs.myFriendsBucket)
  }

  handleFriendRemoveClicked(friend: any) {
    this.myFriendsBucket = this.myFriendsBucket.filter((el: string) => el !== friend)
  }
}
