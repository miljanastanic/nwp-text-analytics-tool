import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageM } from 'src/app/model';
import { HistoryService } from 'src/app/services/history.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  token: any;
  languageForm: FormGroup;
  language: LanguageM = {
    timestamp: '',
    detectedLangs: [
      {
        lang: '',
        confidence: 0,
      }
    ],
  };

  constructor(private formBuilder: FormBuilder, private languageService: LanguageService,private historyService: HistoryService ) { 
    this.languageForm = this.formBuilder.group({
      text: ['', Validators.required],
      clean: []
    })
  }

  ngOnInit(): void {
  }

  findLanguage() {
    this.languageService.findLanguage(
      this.languageForm.get('text')?.value,
      this.languageForm.get('clean')?.value
      ).subscribe(language => {
        console.log(language)
        this.language = language;

      }
    )
  }

}
