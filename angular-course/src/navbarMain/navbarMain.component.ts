import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './navbarMain.component.html',
  styleUrl: './navbarMain.component.css',
  selector: 'navbar-main',
})
export class MainNavbar implements OnInit {
  constructor(private router: Router) {}

  active: string = '';
  ngOnInit(): void {
    this.active = window.location.pathname;
  }
}
