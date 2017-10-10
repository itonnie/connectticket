import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ModalController} from 'ionic-angular';
import { TicketPage } from '../ticket/ticket';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Array<any>;
  mydata: Array<any>;

  constructor(public navCtrl: NavController, public http: Http, public Modal: ModalController) {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe( data => {
      console.log(data);
      this.mydata = JSON.parse(data["_body"]);
      this.items = this.mydata.slice(0,20);
    });
  }

  buyItem(item) {
    let modal = this.Modal.create(TicketPage, {item: item});
    modal.present();
  }

}
