import { Component } from '@angular/core';

import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string,
};

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent {

  item$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  

  constructor( ) {
    const itemCollection = collection(this.firestore, 'items');
    this.item$ = collectionData(itemCollection);
  }

}
