import { Injectable } from '@angular/core';


import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Tutorial } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor( private afs: AngularFirestore ) { }

  create( tutorial: Tutorial ) {
    let uid = this.afs.createId();
    tutorial['id'] = uid;
    console.log(tutorial)
    return this.afs.collection('botiquin').doc(uid).set(tutorial);
  }

}
