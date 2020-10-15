import { Component } from '@angular/core';
import { NavController,ModalController} from 'ionic-angular';
import {FirmaPage} from '../firma/firma';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl : ModalController) {

  }

  firmaPage() {
    let modal = this.modalCtrl.create(FirmaPage);

    modal.present();
  }

}
