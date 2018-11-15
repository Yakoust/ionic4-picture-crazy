import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cards: { title: string, description: string }[] = [];

    ngOnInit(): void {
        this.cards = [
            {
              title: 'First title',
                description: 'description card 1'
            },
            {
                title: 'Second title',
                description: 'description card 2'
            },
        ];
    }
}
