import { Component, OnInit, inject } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { collection } from "firebase/firestore";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-res-laboratory-add',
  templateUrl: './res-laboratory-add.component.html',
  styleUrls: ['./res-laboratory-add.component.scss']
})
export class ResLaboratoryAddComponent implements OnInit{

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  dbRef = collection(this.firestore, "reserve-laboratory");
  docRefID = doc(this.dbRef);

  reserveForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reserveForm = this.formBuilder.group({
      uid: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      laboratory: ['', Validators.required],
      division: ['', Validators.required],
      task: [''],
      applicationDate: ['', Validators.required],
      entryTime: ['', Validators.required],
      departureTime: [''],
      observations: [''],
      registrationDate: ['']
    });
  }
  
ngOnInit(): void {
}

 onSubmit() {
  this.reserveForm.controls['uid'].setValue(this.docRefID.id);

  // this.reserveForm.get('uid').setValue(this.docRefID.id);
  console.log(this.reserveForm.value)

   setDoc(this.docRefID, this.reserveForm.value)
    .then(docRef => {
        console.log("Document has been added successfully");
        this.reserveForm.reset();

    })
    .catch(error => {
        console.log(error);
    })

}
}