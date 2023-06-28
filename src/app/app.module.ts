import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { TutorialsComponent } from './components/tutorial/tutorials/tutorials.component';
import { TutorialAddComponent } from './components/tutorial/tutorial-add/tutorial-add.component';
import { StudentsComponent } from './student/students/students.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ResLaboratoryComponent } from './components/reserve/laboratory/res-laboratory/res-laboratory.component';
import { ResLaboratoryAddComponent } from './components/reserve/laboratory/res-laboratory-add/res-laboratory-add.component';
import { ResReportsComponent } from './components/reserve/laboratory/res-reports/res-reports.component';
// import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    TutorialAddComponent,
    StudentsComponent,
    StudentAddComponent,
    StudentDetailComponent,
    StudentUpdateComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    ResLaboratoryComponent,
    ResLaboratoryAddComponent,
    ResReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    // { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
