import {Injectable} from '@angular/core';
import {AlertController} from "@ionic/angular";


declare let MCCordovaPlugin: any;
declare let SFMCEvent: any;

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(private alertController: AlertController) {
  }

  init() {
    MCCordovaPlugin.enableLogging();
    MCCordovaPlugin.enablePush();

    MCCordovaPlugin.setOnNotificationOpenedListener(this.notificationOpenedListener);

    console.log('Push initiated')
  }

  async notificationOpenedListener(e: any) {
    console.log(`notificationOpenedListener`, e); // FIXME: remove this line

    const modal = await this.alertController.create({
      header: 'Hello World',
      message: 'This is an alert message.',
      buttons: ['Ok']
    });

    await modal.present();
  }
}
