import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss']
})
export class ModalListComponent implements OnInit {

  listFormGroup : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private dbService : DatabaseService,
    private modal: ModalController) { }

  ngOnInit() {
    this.listFormGroup = this.formBuilder.group({
      'name' : ['', Validators.required]
    });
  }

  crearList(){
    console.log(this.listFormGroup.value);
    this.dbService.createList(this.listFormGroup.get('name').value).then(response => {
      console.log(response);
      this.modal.dismiss();
    }).catch(e => {
      console.log(e);
    })
  }

}