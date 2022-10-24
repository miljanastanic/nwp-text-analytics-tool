import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history: string = '';
  private readonly apiUrl = environment.postApi
  
  constructor(private httpClient: HttpClient, private homeService: HomeService) { }

  historyRequest(timestamp: string, slash: string, param: string){
    this.history = `[${timestamp}]` + ' GET ' + `${this.apiUrl}` + slash + param + `&token=${this.homeService.getTokenString()}`
    console.log(this.history)
  }

  getHistory(){
    return this.history
  }
}
