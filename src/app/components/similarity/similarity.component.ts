import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SimilarityM } from 'src/app/model';
import { HistoryService } from 'src/app/services/history.service';
import { SimilarityService } from 'src/app/services/similarity.service';

@Component({
  selector: 'app-similarity',
  templateUrl: './similarity.component.html',
  styleUrls: ['./similarity.component.css']
})
export class SimilarityComponent implements OnInit {

  
  token: any;
  similarity: SimilarityM = {
    timestamp: '',
    similarity: 0
  };

  similarityForm: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private similarityService: SimilarityService, private historyService: HistoryService) { 
    this.similarityForm = this.formBuilder.group({
      text1: ['', Validators.required],
      text2: ['', Validators.required]
    }) 
    this.token = localStorage.getItem('token');
  }


  ngOnInit(): void {}
  

  // findSimilarity(){
  //   this.similarityService.findSimilarity(this.text1, this.text2, this.token).subscribe((similars) => {
  //     this.similars = similars;
  //   })
  // }

  findSimilarity() {
    this.similarityService.findSimilarity(
      this.similarityForm.get('text1')?.value, 
      this.similarityForm.get('text2')?.value).subscribe(similarity => {
        this.similarity = similarity;
      })

      

      
      
  }

}
