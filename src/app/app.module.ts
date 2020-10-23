import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeworkComponent } from './homework/homework.component';
import { HomeworkAddComponent } from './homework/homework-add/homework-add.component';
import {HomeworkItemComponent} from './homework/homework-item/homework-item.component';
import { HeaderComponent } from './header/header.component';
import { ForStudentComponent } from './for-student/for-student.component';
import { ForTeacherComponent } from './for-teacher/for-teacher.component';
import { HomeComponent } from './home/home.component';
import {HomeworkService} from '../services/homework.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeworkComponent,
    HomeworkAddComponent,
    HomeworkItemComponent,
    HeaderComponent,
    ForStudentComponent,
    ForTeacherComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HomeworkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
