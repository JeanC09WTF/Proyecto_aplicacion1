import { Component, getPlatform } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'people' },
    { title: 'Cities', url: '/cities', icon: 'location' },
    { title: 'Login', url: '/login', icon: 'log-in' },
  ];
  splashScreen: any;
  statusBar: any;
  platform: any;
  constructor() {}

  //nuevo
  shareApp(){
    Share['share'] ({
      title: 'Has visto la nueva app X!',
      text: 'Descarga gratis la nueva app de X y pruebala!',
      url: 'http://ionicframework.com/',
    });
  }

  initializeApp(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    console.log("Plataforma: ", getPlatform());

  }
}
