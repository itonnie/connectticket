import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController} from 'ionic-angular';

/**
 * Generated class for the TicketPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public toast: ToastController) {
    this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

  closeModal() {
    this.view.dismiss();
  }

  showToast(id) {
    let mytoast = this.toast.create({
      message: "Ticket ID " + id + " has been successfully purchased",
      duration: 3000
    });

    mytoast.present();
  }

}
