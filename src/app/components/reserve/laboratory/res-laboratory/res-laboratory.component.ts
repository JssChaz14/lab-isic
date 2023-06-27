import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-res-laboratory',
  templateUrl: './res-laboratory.component.html',
  styleUrls: ['./res-laboratory.component.scss']
})
export class ResLaboratoryComponent {

  item$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'reserve-laboratory');
    this.item$ = collectionData(itemCollection);
  }

}
