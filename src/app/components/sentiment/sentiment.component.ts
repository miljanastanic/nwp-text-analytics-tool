import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SentimentM, rgb } from 'src/app/model';
import { HistoryService } from 'src/app/services/history.service';
import { SentimentService } from 'src/app/services/sentiment.service';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {

  token: any;
  sentiment: SentimentM = {
    timestamp: '',
    sentiment: {
      score: 0,
      type: '',
    }
  }

  rgb: rgb = {
    red: 0,
    green: 0,
    blue: 0
  }

  sentimentColor: number[]=[];
  sentimentForm: FormGroup;
  primaryColor: string = ''; 
  justcolor: string = 'rgb(255, 0 , 0)'

  constructor(private formBuilder: FormBuilder, private sentimentService: SentimentService,
    private historyService: HistoryService) { 
    this.sentimentForm = this.formBuilder.group({
      text: ['', Validators.required],
      lang: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  findSentiment(){
    this.sentimentService.findSentiment(
      this.sentimentForm.get('text')?.value,
      this.sentimentForm.get('lang')?.value).subscribe( sentiment =>{
        console.log(sentiment)
        this.sentiment = sentiment
      })
    
  }

  newColor(){
    let color1 = [255, 0, 0]
    let color2 = [0, 128, 0]

    let colorScore = this.sentiment.sentiment.score + 1

    this.sentimentColor.push(color1[0] + (color2[0]- color1[0]) * colorScore)
    this.sentimentColor.push(color1[1] + (color2[1]- color1[1]) * colorScore)
    this.sentimentColor.push(color1[2] + (color2[2]- color1[2]) * colorScore)
    
    //this.primaryColor = [this.sentimentColor[0], this.sentimentColor[1], this.sentimentColor[2]]
    this.rgb = {
      red: this.sentimentColor[0], 
      green:this.sentimentColor[1], 
      blue: this.sentimentColor[2]}

    this.primaryColor = 'rgb(' + this.rgb.red.toString() + ", " + this.rgb.green.toString()
                           + ", " + this.rgb.blue.toString() + ")"
    
    console.log(this.sentimentColor[0], this.sentimentColor[1], this.sentimentColor[2])
    console.log(this.primaryColor)
  }

}
