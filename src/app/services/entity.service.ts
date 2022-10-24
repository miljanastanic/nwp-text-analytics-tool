import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityM } from '../model';
import { HistoryService } from './history.service';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  private readonly apiUrl = environment.postApi
  
  constructor(private httpClient: HttpClient, private homeService: HomeService, private historyService: HistoryService) { }

  findEntity(text: string, confidance: number, check1: boolean, check2: boolean, check3: boolean): Observable<EntityM>{
    console.log(check1, check2, check3)

    let param = 'text=' + text + '&' + 'include=types'

    let include: string[] = [];
    if(check1 == true){
      include.push('image')
      param = param + 'image'
    }
    if(check2 == true){
      include.push('abstract')
      param = param + 'abstract'
    }
    if(check3 == true){
      include.push('categories')
      param = param + 'categories'
    }

    let token = this.homeService.getTokenString();
    let params = {
      text,
      confidance,
      include, 
      token
    }

    let date = new Date()
    this.historyService.historyRequest(date.toLocaleString(), '/nex/v1/?', param)

    return this.httpClient.get<EntityM>(`${this.apiUrl}/nex/v1`, {params,});
  }

}
