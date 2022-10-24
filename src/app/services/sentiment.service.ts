import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SentimentM } from '../model';
import { HistoryService } from './history.service';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient, private homeService: HomeService, private historyService: HistoryService) { 
  }

  findSentiment(text: string, lang: string): Observable<SentimentM>{
    let token = this.homeService.getTokenString();
    let params = {
      lang,
      text,
      token
    }

    let date = new Date()
    let param ='lang=' + lang +'&text=' + text

    this.historyService.historyRequest(date.toLocaleString(), '/sent/v1/?', param)


    return this.httpClient.get<SentimentM>(`${this.apiUrl}/sent/v1`, {params,});
  }
}
