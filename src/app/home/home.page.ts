import {ChangeDetectorRef, Component} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public alertController: AlertController, private cd: ChangeDetectorRef) {}
  public cards: { title: string, description: string }[] = [];

    presentAlertPrompt() {
        this.alertController.create({
            header: 'Prompt!',
            inputs: [
                {
                    name: 'title',
                    type: 'text',
                    placeholder: 'title'
                },
                {
                    name: 'description',
                    type: 'text',
                    placeholder: 'description'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Ok',
                    handler: data => this.addNewCard({title: data.title, description: data.description})
                }
            ]
        }).then(alert => alert.present());
    }

    addNewCard(card: { title: string, description: string }): void {
        this.cards = [...this.cards, card];
        this.cd.detectChanges();
    }
}
