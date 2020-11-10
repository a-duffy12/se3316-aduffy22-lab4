import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'make-schedules',
  templateUrl: './make-schedules.component.html',
  styleUrls: ['./make-schedules.component.css']
})
export class MakeSchedulesComponent implements OnInit {

  // member variables for input fields
  name: string = "";
  count: number = 0;
  build: boolean = false;
  subjectCodes: string[] = Array(15);
  courseCodes: string[] = Array(15);

  // member variables to hold output
  data4: any;
  data5: any;
  error: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // method to build the subject + catalog pairs in a schedule
  buildSchedule()
  {
    this.build = true;
  }

  // method to create the schedule with the entered data Q4
  createSchedule()
  {
    this.reset(); // reset all member variables

    if (this.name != "")
    {
      // create empty schedule object
      let obj: Sched = {
        classes: new Array(this.count)
      };

      for (let i = 0; i < this.count; i++) // for the number of courses in the schedule
      {
        let temp: Sclass = { // create empty subject code + course code pair
          subject_code: this.subjectCodes[i],
          course_code: this.courseCodes[i]
        };

        obj.classes[i] = temp; // add this subject code + course code pair to the list of classes
      }

      // send request with schedule "obj" in the body and "name" in the URL
      this.http.post(`http://localhost:3000/api/schedules/${this.name}`, JSON.stringify(obj), reqHeader).subscribe((data: string) => {
        this.data4 = data; // get response as string
      })
      console.log(`Created schedule with name: ${this.name}`);
    }
    else
    {
      this.error = "Invalid input in the name field!";
      console.log("Invalid input!");
    }
  }

  // method to update the schedule with the entered data Q5
  updateSchedule()
  {
    this.reset(); // reset all member variables

    if (this.name != "")
    {
      // create empty schedule object
      let obj: Sched = {
        classes: new Array(this.count)
      };

      for (let i = 0; i < this.count; i++) // for the number of courses in the schedule
      {
        let temp: Sclass = { // create empty subject code + course code pair
          subject_code: this.subjectCodes[i],
          course_code: this.courseCodes[i]
        };

        obj.classes[i] = temp; // add this subject code + course code pair to the list of classes
      }

      // send request with schedule "obj" in the body and "name" in the URL
      this.http.put(`http://localhost:3000/api/schedules/${this.name}`, JSON.stringify(obj), reqHeader).subscribe((data: string) => {
        this.data4 = data; // get response as string
      })
      console.log(`Created schedule with name: ${this.name}`);
    }
    else
    {
      this.error = "Invalid input in the name field!";
      console.log("Invalid input!");
    }
  }

  // method to reset all member varaibles used in *ngIf statements
  reset()
  {
    this.data4 = "";
    this.data5 = "";
    this.error = "";
    this.build = false;
  }
}

// type for classes
interface Sclass {
  subject_code: string;
  course_code: string;
};

// type for schedule
interface Sched {
  classes: Sclass[];
};

// build options for the http requests
const reqHeader = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Headers": "Content-Type"
  })
}
