import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TimerDisplayComponent } from './display/timer-display/timer-display.component';
import { TimerButtonsComponent } from './buttons/timer-buttons/timer-buttons.component';
import { ButtonComponent } from './buttons/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryTimerService } from './shared/in-memory-timer-service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TimerDisplayComponent,
    TimerButtonsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryTimerService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
