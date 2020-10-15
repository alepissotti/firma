import { Component , ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';

/**
 * Generated class for the FirmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firma',
  templateUrl: 'firma.html',
})
export class FirmaPage {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'maxWidth' : 1,
    'canvasHeight' : 1000,
    'canvasWidth' :1000
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }
 
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL().replace('data:image/png;base64,',''));
  }
 
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  borrarFirma() {
    this.signaturePad.clear();
  }

  guardarFirma() {
    console.log(this.signaturePad.toDataURL().replace('data:image/png;base64,',''));
  }

}
