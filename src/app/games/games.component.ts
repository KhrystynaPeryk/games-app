import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  searchTerm!: string
  searchedGames: any
  list: any[] = []
  gamesArray = this.friendservice.gamesArray
  tagsFilter: string[] = [];

  constructor(private friendservice: FriendsService) { }

  ngOnInit(): void {
    this.searchedGames = this.friendservice.gamesArray;
    this.list = [
      {
        id: 1,
        tag: 'Strategy',
        checked: true
      },
      {
        id: 2,
        tag: 'Action',
        checked: true
      },
      {
        id: 3,
        tag: 'Zombie',
        checked: true
      }
    ]
  }

  searchGames(searchTerm: string) {
    searchTerm = searchTerm.toLocaleLowerCase()
    console.log(searchTerm)
    this.searchedGames = this.gamesArray.filter((game: any) =>
    game.name.toLocaleLowerCase().includes(searchTerm));
    console.log('this.searchedGames:', this.searchedGames)
    return this.searchedGames;
  }

  handleGameClicked(game: any) {
    console.log('received', game)
    this.friendservice.myLibraryArray.push(game)
    this.searchedGames = this.searchedGames.filter((el: any) => el !== game)
    console.log('this.friendservice.myLibrary', this.friendservice.myLibraryArray)
  }

  filterByRange(value: string) {
    if (value === '0') {
      this.searchedGames = this.gamesArray.filter((game: any) =>
      game.price.includes('150 UAH'));
    } else if (value === '1') {
        this.searchedGames = this.gamesArray.filter((game: any) =>
        game.price.includes('180 UAH'));
    } else if (value === '2') {
        this.searchedGames = this.gamesArray.filter((game: any) =>
        game.price.includes('200 UAH'));
    }
  }

  // filterByTag(tag: any) {
  //   console.log('filterByTag()', tag)
  //   if (tag === 'Strategy') {
  //       this.searchedGames = this.gamesArray.filter((game: any) => {
  //       let res = game.tag.includes('Action') || game.tag.includes('Zombie')
  //       return res
  //     });
      
  //   } else if (tag === 'Action') {
  //       this.searchedGames = this.gamesArray.filter((game: any) => {
  //       let res = game.tag.includes('Strategy') || game.tag.includes('Zombie')
  //       return res
  //     });
  //   } else if (tag === 'Zombie') {
  //       this.searchedGames = this.gamesArray.filter((game: any) => {
  //       let res = game.tag.includes('Action') || game.tag.includes('Strategy')
  //       return res
  //     });
  //   }
  // }

  filterByTag(tag: any) {
    console.log('filterByTag()', tag)
    if (this.tagsFilter.includes(tag)) {
      this.tagsFilter = this.tagsFilter.filter(el => el !== tag)
    } else {
      this.tagsFilter.push(tag)
    }
    console.log('tagsFilter array', this.tagsFilter)
    if (this.tagsFilter.length === 0) {
      this.searchedGames = this.gamesArray
      return this.searchedGames
    } else {
      let checkBoxSearchGames = []
      for (let tag of this.tagsFilter) {
        for (let game of this.searchedGames) {
          if (tag === game.tag) {
            checkBoxSearchGames.push(game)
          }
        }
      }
      return this.searchedGames = checkBoxSearchGames
    }

  }

}
