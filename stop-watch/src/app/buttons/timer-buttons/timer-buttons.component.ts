import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/shared/timer.service';

@Component({
  selector: 'app-timer-buttons',
  templateUrl: './timer-buttons.component.html',
  styleUrls: ['./timer-buttons.component.scss']
})
export class TimerButtonsComponent implements OnInit {

  timerItems$ = this.timerService.timerItems$;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
  }

}
