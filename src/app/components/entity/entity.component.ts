import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntityM } from 'src/app/model';
import { EntityService } from 'src/app/services/entity.service';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  token: any;
  entity: EntityM = {
    timestamp: '',
    langConfidence: 0,
    annotations: [
      {
        title: '',
        image: {
          full: '',
          thumbnail: '',
        },
        abstract: '',
        categories: [''],
      }
    ]
  }

  entityForm: FormGroup;

  constructor(private entityService: EntityService, private fromBuilder: FormBuilder, private historyService: HistoryService) { 
    this.entityForm = this.fromBuilder.group({
      text: ['', Validators.required],
      confidance: [],
      check1: [],
      check2: [],
      check3: []
    })
  }

  ngOnInit(): void {
  }

  findEntity(){
    this.entityService.findEntity(
      this.entityForm.get('text')?.value,
      this.entityForm.get('confidence')?.value,
      this.entityForm.get('check1')?.value,
      this.entityForm.get('check2')?.value,
      this.entityForm.get('check3')?.value
      ).subscribe( entity => {
        console.log(entity)
        this.entity = entity;

        }
      )
  }
}
