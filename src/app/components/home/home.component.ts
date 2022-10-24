import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tokenString: string;

  constructor(private homeService: HomeService) {
    this.tokenString = this.homeService.getTokenString();
   }

  ngOnInit(): void {

  }

  setTokenString(){
    this.homeService.setTokenString(this.tokenString);
  }

}
