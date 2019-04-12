import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MessageModel } from '../../models/messages-models';
import { MensajesProvider } from '../../providers/mensajes/mensajes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

messages:MessageModel[];
message:string;
user:any;

  constructor(public navCtrl: NavController,
    private message_provider: MensajesProvider,
    private navParams: NavParams) {
      this.user = this.navParams.data;
      this.loadMessages();
  }

  ionViewDidLoad(){
    setInterval( () => {
      this.loadMessages();
    },1000 );
  }

  GoAbout(){
    this.navCtrl.push(AboutPage, {name:'sergio', age:22})
  }

  loadMessages() {
    this.message_provider
      .getMessages()
      .subscribe( (response:MessageModel[]) => {
        this.messages = response;
        console.log( this.messages );
      }, error => {

      });
  }

  sendMessage() {
    this.message_provider.sendMessage( this.user.id_user,this.message ).subscribe( () => {
      this.message = null;
      //this.content.scrollToBottom();
    },error => console.log( error ) );
  }


}
