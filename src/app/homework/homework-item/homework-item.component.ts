import {Component, Input, OnInit} from '@angular/core';
import {HomeworkModel} from '../../../models/homework-model';
import {HomeworkService} from '../../../services/homework.service';

@Component({
  selector: 'app-homework-item',
  templateUrl: './homework-item.component.html',
  styleUrls: ['./homework-item.component.scss']
})
export class HomeworkItemComponent implements OnInit {

  constructor(
    public homeworkService: HomeworkService
  ) { }

  rating = 12;

  @Input() data: HomeworkModel;
  @Input() index: number;
  @Input() isStudent: boolean;

  ngOnInit(): void {
  }

  submitForm(): void {
    this.homeworkService.setChecked(this.data.id, this.rating);
  }

  setDone(): void {
    this.homeworkService.setDone(this.data.id);
  }
}
