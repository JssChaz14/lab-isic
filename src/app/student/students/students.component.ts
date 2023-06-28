import { Component, inject } from '@angular/core';

import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
    users$: Observable<any[]>;

    constructor() {
        // get a reference to the user-profile collection
        const userProfileCollection = collection(this.firestore, 'estudiantes');

        // get documents (data) from the collection using collectionData
        this.users$ = collectionData(userProfileCollection) as Observable<any[]>;
    }

    
    
}


