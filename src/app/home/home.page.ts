import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alert : AlertController,
    private router: Router
    ){
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
}
