import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoggingService {
  activity: number = 0;
  logSettingActivity() {
    this.activity = this.activity + 1;
    console.log('status change logged, status change number ' + this.activity);
  }
}
