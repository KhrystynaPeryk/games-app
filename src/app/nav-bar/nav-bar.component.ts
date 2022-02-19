import { Component, OnInit } from '@angular/core';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faDiceD20 = faDiceD20;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ////LOG OUT WORKS IMPROPERLY
  logOut() {
    this.router.navigate(['/login'])
  }
}
