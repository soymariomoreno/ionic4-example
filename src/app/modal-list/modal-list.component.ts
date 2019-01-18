import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss']
})
export class ModalListComponent implements OnInit {

  listFormGroup : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private modal: ModalController) { }

  ngOnInit() {
    this.listFormGroup = this.formBuilder.group({
      'name' : ['', Validators.required]
    });
  }

  crearList(){
    console.log(this.listFormGroup.value);
    this.modal.dismiss();
  }

}