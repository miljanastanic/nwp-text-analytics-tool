import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SimilarityM } from '../model';
import { HistoryService } from './history.service';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class SimilarityService {

  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient, private homeService: HomeService, private historyService: HistoryService) { }

  //https://api.dandelion.eu/datatxt/sim/v1/?text1=Cameron%20wins%20the%20Oscar &
  //text2=All%20nominees%20for%20the%20Academy%20Awards&token=<YOUR_TOKEN>


  findSimilarity(text1: string, text2:string): Observable<SimilarityM>{
    let token = this.homeService.getTokenString();
    let params = {
      text1,
      text2,
      token
    }

    let date = new Date()
    let param = 'text1=' + text1 + "&" + 'text =' + text2
    
    this.historyService.historyRequest(date.toLocaleString(), '/sim/v1/?', param)


    return this.httpClient.get<SimilarityM>(`${this.apiUrl}/sim/v1`, {params,});
  }

}
