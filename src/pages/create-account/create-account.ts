import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { UserModel } from '../../models/user-model';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  name:string;
  userId:string;
  password:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private user_provider:UserProvider,
    private loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  createAccountService(){

    let loading = this.loadingCtrl.create({
      content:'Creando Cuenta',
      spinner:'dots'
    });  
    loading.present();  
    console.log('Nombre: ' + this.name);
    console.log('Usuario: ' + this.userId);
    console.log('Password: ' + this.password);

    let user = new UserModel();
    user.name = this.name;
    user.user = this.userId;
    user.pwd = this.password;
    console.log('user: ' + user );

    // setTimeout(() => {
    //   loading.dismiss();
    // },3000)
    
    this.user_provider.createUser(user).subscribe(() => {
      console.log('Cuenta creada');
      loading.dismiss();
      this.navCtrl.popToRoot();
    }, error => {
      console.log('Erro!!!');
    }, () => {
      console.log('Finished');
    });
  }

}
