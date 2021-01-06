import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TimeItemData } from './time-item-data';
import { TimeItem } from './time-item';

export class InMemoryTimerService implements InMemoryDbService {
  createDb(): {timeItems: TimeItem[]} {
    const timeItems = TimeItemData.timeItems;

    return {
      timeItems
    };
  }
}
