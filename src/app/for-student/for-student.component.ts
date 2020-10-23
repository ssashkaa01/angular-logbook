import { Component, OnInit } from '@angular/core';
import {HomeworkService} from '../../services/homework.service';
import {HomeworkModel} from '../../models/homework-model';

@Component({
  selector: 'app-for-student',
  templateUrl: './for-student.component.html',
  styleUrls: ['./for-student.component.scss']
})
export class ForStudentComponent implements OnInit {

  constructor(
    public homeworkService: HomeworkService
  ) { }

  listIsNotDone: HomeworkModel[];
  listIsChecked: HomeworkModel[];

  ngOnInit(): void {

    this.listIsChecked = this.homeworkService.getCheckedAll();
    this.listIsNotDone = this.homeworkService.getNotDoneAll();

    this.homeworkService.refreshCheckedList.subscribe((updated: HomeworkModel[]) => {
      this.listIsChecked = updated;
    });

    this.homeworkService.refreshNotDoneList.subscribe((updated: HomeworkModel[]) => {
      this.listIsNotDone = updated;
    });
  }
}
