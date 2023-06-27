import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, setDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tutorial } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent {

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  
  users$!: Observable<any[]>;
  tutorial: Tutorial = new Tutorial();
  submitted = false;

  collectionRef = collection(this.firestore,'estudiantes');
  docRef = doc(this.collectionRef);
  documentUuid = this.docRef.id;
    
  constructor() { }

  addUserProfile() {
    this.docRef.id;
      setDoc(this.docRef, { uuid: this.documentUuid, ...this.tutorial })
        .then( (data) => {
          console.log('correcto');
          console.log(data);
          this.tutorial = new Tutorial();
        })
        .catch( (err)=> { console.log(err)});

     
    }

}


