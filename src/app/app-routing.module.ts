import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsComponent } from './components/tutorial/tutorials/tutorials.component';
import { StudentsComponent } from './student/students/students.component';
import { TutorialAddComponent } from './components/tutorial/tutorial-add/tutorial-add.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { ResLaboratoryAddComponent } from './components/reserve/laboratory/res-laboratory-add/res-laboratory-add.component';
import { ResLaboratoryComponent } from './components/reserve/laboratory/res-laboratory/res-laboratory.component';

const routes: Routes = [
  { path: 'tutoriales', component: TutorialsComponent },
  { path: 'add', component: TutorialAddComponent },

  { path: 'estudiantes', component: StudentsComponent },
  { path: 'add-estudiante', component: StudentAddComponent },

  { path: 'reservas', component: ResLaboratoryComponent },
  { path: 'reservar/laboratorio', component: ResLaboratoryAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
