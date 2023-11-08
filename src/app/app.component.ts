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
  constructor() {}

  




  shareApp() {
    Share['share']({
      title: 'Has visto la nueva app X!',
      text: 'Descarga gratis la nueva app de X y pruébala!',
      url: 'http://ionicframework.com/',
    })
      .then(() => {
        console.log('Compartido con éxito');
      })
      .catch((error: any) => { // Especificamos 'any' como tipo para 'error'
        console.error('Error al compartir: ' + error);
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
