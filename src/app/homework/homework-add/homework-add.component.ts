import { Component, OnInit } from '@angular/core';
import {HomeworkService} from '../../../services/homework.service';
import {HomeworkModel} from '../../../models/homework-model';

@Component({
  selector: 'app-homework-add',
  templateUrl: './homework-add.component.html',
  styleUrls: ['./homework-add.component.scss']
})
export class HomeworkAddComponent implements OnInit {

  constructor(
    private homeworkService: HomeworkService
  ) { }

  model = new HomeworkModel();

  ngOnInit(): void {

  }

  submitForm(): void {
    const hw = new HomeworkModel(this.homeworkService.getNextId(), this.model.theme, this.model.date, this.model.textWork);
    this.homeworkService.addItem(hw);
  }
}
