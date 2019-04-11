import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  name:any;
  names = ['Irvin','Marlene'];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=this.navParams.get('name');
    console.log("Mi nombre es: " + this.name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  back(){
    this.navCtrl.push(AboutPage);
  }

  clearStack(){
    this.navCtrl.popToRoot();
  }

}
