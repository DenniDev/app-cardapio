import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../providers/firebase';
import { ModalController, ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { ModalPage } from '../app/modal/modal.page'
import { CarrinhoPage } from '../app/carrinho/carrinho.page';
import { HistoricoPage } from '../app/historico/historico.page';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { CardapioPage } from '../app/cardapio/cardapio.page';

@Component({
  selector: 'app-informacao',
  templateUrl: './informacao.page.html',
  styleUrls: ['./informacao.page.scss'],
})
export class InformacaoPage implements OnInit {

  total = 0;
  step = 0;

  constructor(
    public firebase: FirebaseService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private navCtrl: NavController
  ) {
    
   }

  ngOnInit() {
  }
  fechar() {
    if(this.step > 0){
      this.step = 0;
    }
    else {
      this.modalController.dismiss();
    }
  }

}
