import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private tokenString: string;

  constructor() { 
    this.tokenString = '';
  }

  setTokenString(tokenString: string): void{
    this.tokenString = tokenString;
    localStorage.setItem('token', tokenString);
  }

  getTokenString(): string{
    return this.tokenString;
  }
}
