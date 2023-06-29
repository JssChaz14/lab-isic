import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsComponent } from './components/tutorial/tutorials/tutorials.component';
import { StudentsComponent } from './student/students/students.component';
import { TutorialAddComponent } from './components/tutorial/tutorial-add/tutorial-add.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { ResLaboratoryAddComponent } from './components/reserve/laboratory/res-laboratory-add/res-laboratory-add.component';
import { ResLaboratoryComponent } from './components/reserve/laboratory/res-laboratory/res-laboratory.component';
import { ResReportsComponent } from './components/reserve/laboratory/res-reports/res-reports.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';

const routes: Routes = [
  { path: 'tutoriales', component: TutorialsComponent },
  { path: 'add', component: TutorialAddComponent },

  { path: 'estudiantes', component: StudentsComponent },
  { path: 'add-estudiante', component: StudentAddComponent },

  { path: 'reservas', component: ResLaboratoryComponent },
  { path: 'reservar/laboratorio', component: ResLaboratoryAddComponent },
  { path: 'laboratorios/reportes', component: ResReportsComponent },
  { path: 'a', component: ResReportsComponent },
  { path: 'b', component: MyLineChartComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
