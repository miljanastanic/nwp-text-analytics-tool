import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: string[]=[]
  constructor(private historyService: HistoryService) { 
    this.history.push( this.historyService.getHistory())
  }

  ngOnInit(): void {
  }

}
