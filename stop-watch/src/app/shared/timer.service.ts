import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeItem } from './time-item';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timeItemsUrl = '/api/timeItems';

  timerItems$ = this.http.get<TimeItem[]>(this.timeItemsUrl)
  .pipe(
    tap(console.log)
  );

  constructor(private http: HttpClient) { }
}
