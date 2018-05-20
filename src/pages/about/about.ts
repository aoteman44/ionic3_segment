import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  list: Object

  constructor(public navCtrl: NavController) {
    this.list =
      [{
        "id": "1",
        "name": "萝卜",
        "property": {
          "name": "luobo",
          "location": "beijing"
        }
      }, {
        "id": "2",
        "name": "白菜",
        "property": {
          "name": "baicai",
          "location": "nantong"
        }
      }, {
        "id": "3",
        "name": "香蕉",
        "property": {
          "name": "huanggua",
          "location": "hangzhou"
        }
      }]
  }

  fuck(id:any){
    console.log(id)
  }

  segmentChanged(e) {
    this.fuck(e.value)
  }

}
