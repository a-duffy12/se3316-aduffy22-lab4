import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetCoursesComponent } from './get-courses/get-courses.component';
import { GetSchedulesComponent } from './get-schedules/get-schedules.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteSchedulesComponent } from './delete-schedules/delete-schedules.component';

@NgModule({
  declarations: [
    AppComponent,
    GetCoursesComponent,
    GetSchedulesComponent,
    DeleteSchedulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
