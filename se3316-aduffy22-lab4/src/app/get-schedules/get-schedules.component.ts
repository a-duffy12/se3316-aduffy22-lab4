import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validator } from '../validator.service';

@Component({
  selector: 'get-schedules',
  templateUrl: './get-schedules.component.html',
  styleUrls: ['./get-schedules.component.css']
})
export class GetSchedulesComponent implements OnInit {

  // member variable for search field
  name: string = "";
  time: boolean = false;

  // member variables to hold output
  data6: any;
  data8: any;
  subjects = new Array();
  courses = new Array();
  dataBonus = new Array();
  error: string = "";

  constructor(private http: HttpClient, private val: Validator) { }

  ngOnInit(): void {
  }

  // method to run the get request for a particular schedule Q6
  displaySchedule()
  {
    this.reset(); // reset all member variables

    if ((this.name != "") && this.val.validate(this.name, 100)) // Q6
    {
      //request to back end
      this.http.get(`/api/schedules/${this.name}`).subscribe((data:any) => {
        this.data6 = data; // get data object
      })
      console.log(`Searched for schedule with name: ${this.name}`);
    }
    else
    {
      this.error = "Invalid input in name field!";
      console.log("Invalid input!");
    }
  }

  // method to run the get request for all schedules Q8
  displayAll()
  {
    this.reset(); // reset all member variables

    // request to back end
    this.http.get("/api/schedules").subscribe((data:any) => {
      this.data8 = data; // get data object
    })
    console.log("Searched all schedules");
  }

  // method to display timetable data for the given schedule
  showTimetable()
  {
    this.resetArrays(); // reset arrays used to build timetables

    if (this.data6) // if there is data returned for a given schedule
    {
      for (let t in this.data6)
      {
        this.subjects.push(this.data6[t].subject_code);
        this.courses.push(this.data6[t].course_code);
        this.http.get(`/api/courses/${this.subjects[t]}/${this.courses[t]}`).subscribe((data:any) => {
          this.dataBonus.push(data); // add data object to this array
        })
      }

      this.time = true; // send signal to display timetable data
    }
    else
    {
      this.error = "Search for a schedule before showing its timetable data!";
    }
  }

  // method to reset all member varaibles used in *ngIf statements
  reset()
  {
    this.time = false;
    this.data6 = undefined;
    this.data8 = undefined;
    this.error = "";
  }

  // method to reset the arrays used to get timetable data
  resetArrays()
  {
    this.subjects.length = 0;
    this.courses.length = 0;
    this.dataBonus.length = 0;
  }
}
