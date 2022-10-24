import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LanguageM } from '../model';
import { HistoryService } from './history.service';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient, private homeService: HomeService, private historyService: HistoryService) { }

  findLanguage(text: string, clean: boolean): Observable<LanguageM>{
    let token = this.homeService.getTokenString();
    let params = {
      text,
      clean,
      token
    }

    // let param = 'text=' + this.languageForm.get('text')?.value +
    //                 '&clean=' + this.languageForm.get('clean')?.value
    //     this.historyService.historyRequest(language.timestamp, '/li/v1/?', param)

    let date = new Date()
    let param = 'text=' + text + "&" + 'clean=' + clean

    this.historyService.historyRequest(date.toLocaleString(), '/li/v1/?', param)


    return this.httpClient.get<LanguageM>(`${this.apiUrl}/li/v1`, {params,});
  }
}
