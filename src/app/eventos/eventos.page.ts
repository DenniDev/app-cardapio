import { Component, OnInit } from '@angular/core'
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
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  loaded: boolean;
  step = 0;
  eventos = [];
  constructor(
    public firebase: FirebaseService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private navCtrl: NavController
  ) { }

  fechar() {
    if(this.step > 0){
      this.step = 0;
    }
    else {
      this.modalController.dismiss();
    }
  }

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

        this.firebase.eventosLista()
        .then(async (data) => {
        this.eventos = data;
        let i = 0;
        for (i; i < this.eventos.length; i++) {
         let eventos = await this.firebase.produtosPorCategoria(this.eventos[i]['id']);

        }
      })
  }


  //Sistema de Rota
  inicio(){
    this.navCtrl.navigateForward('inicio');
  }
}
