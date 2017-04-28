import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user = {}
  constructor(public navCtrl: NavController) {

  }
  logForm(){
    console.log(this.user)
  }

}
