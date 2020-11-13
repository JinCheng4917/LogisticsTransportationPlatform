import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  color: string;
  constructor( private router: Router) {
  }

  ngOnInit() {
    this.color = 'blue';
  }

  logout() {
    this.router.navigateByUrl('auth');
  }

  ngOnDestroy(): void {
  }
}
