import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../providers/firebase';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'
import { CarrinhoPage } from '../carrinho/carrinho.page';
import { NavController } from '@ionic/angular';
import { HistoricoPage } from '../historico/historico.page';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { CardapioPage } from '../cardapio/cardapio.page';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  loaded: boolean = false;

  constructor(
    public firebase: FirebaseService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private navCtrl: NavController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    await loading.present();

    //Inicilizar e recuperar configs
    this.firebase.iniciar().then(async () => {
      await loading.dismiss();
      this.loaded = true;
    });
    
    
  }
  async cadapio(){
    const modal = await this.modalController.create({
      component: CardapioPage,
    });
    return await modal.present();
  }
  async carrinho(){
    const modal = await this.modalController.create({
      component: CarrinhoPage,
    });
    return await modal.present();
  }
  async pedidos(){
    const modal = await this.modalController.create({
      component: HistoricoPage,
    });
    return await modal.present();
  }
}
