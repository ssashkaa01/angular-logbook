import { Component, OnInit } from '@angular/core';
import {HomeworkService} from '../../services/homework.service';
import {HomeworkModel} from '../../models/homework-model';

@Component({
  selector: 'app-for-teacher',
  templateUrl: './for-teacher.component.html',
  styleUrls: ['./for-teacher.component.scss']
})
export class ForTeacherComponent implements OnInit {

  constructor(
    public homeworkService: HomeworkService
  ) { }

  listIsDone: HomeworkModel[];
  listIsNotDone: HomeworkModel[];
  listIsChecked: HomeworkModel[];

  ngOnInit(): void {

    this.listIsDone = this.homeworkService.getDoneAll();
    this.listIsChecked = this.homeworkService.getCheckedAll();
    this.listIsNotDone = this.homeworkService.getNotDoneAll();

    this.homeworkService.refreshDoneList.subscribe((updated: HomeworkModel[]) => {
      this.listIsDone = updated;
    });

    this.homeworkService.refreshCheckedList.subscribe((updated: HomeworkModel[]) => {
      this.listIsChecked = updated;
    });

    this.homeworkService.refreshNotDoneList.subscribe((updated: HomeworkModel[]) => {
      this.listIsNotDone = updated;
    });
  }
}
