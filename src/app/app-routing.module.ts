import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForStudentComponent} from './for-student/for-student.component';
import {HomeComponent} from './home/home.component';
import {ForTeacherComponent} from './for-teacher/for-teacher.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'for-student', pathMatch: 'full', component: ForStudentComponent },
  { path: 'for-teacher', pathMatch: 'full', component: ForTeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
