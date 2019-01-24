import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalListComponent } from '../modal-list/modal-list.component';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  lists : any;

  txtStatus:string;
  cssStatus:string;

  constructor(
    private dbService : DatabaseService,
    private modal : ModalController,
    private alert : AlertController,
    private router: Router
    ){
  }

  ngOnInit(){
    this.dbService.getAllList().then(response => {
      console.log(response)
      this.lists = response;
    }).catch(e => {
      console.log(e)
    });
  }


  getStatus(id) {
    //return id == 0 ? 'En proceso' : 'Terminado';
    if(id == 0){
      this.txtStatus = 'En proceso';
      this.cssStatus = 'position: absolute; right: 15px; color: #4d9f32';
    }else{
      this.txtStatus = 'Terminado';
      this.cssStatus = 'position: absolute; right: 15px; color: #e73636';
    }
  }

  async click() {
      console.log('Click');

      const alert = await this.alert.create({
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
  }


  goUrl() : void {
    this.router.navigateByUrl('/perfil');
  }

  async openModal() {
    const modal = await this.modal.create({
      component : ModalListComponent,
      cssClass : 'modal'
    });

    return await modal.present();
  }
}
