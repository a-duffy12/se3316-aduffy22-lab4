import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'get-courses',
  templateUrl: './get-courses.component.html',
  styleUrls: ['./get-courses.component.css']
})
export class GetCoursesComponent implements OnInit {

  // member variables for search fields
  subject: string = "";
  catalog: string = "";
  component: string = "";

  // member variables to hold output
  data1: any;
  data2: any;
  data3a: any;
  data3b: any;
  error: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // method to run all the various get requests for course data
  display()
  {
    this.reset(); // reset all member variables

    if ((this.subject == "") && (this.catalog == "") && (this.component == "")) // Q1
    {
      // request to back end
      this.http.get("http://localhost:3000/api/courses").subscribe((data:any) => {
        this.data1 = data; // get data object
      })
      console.log("Searched all courses");
    }
    else if ((this.subject != "") && (this.catalog == "") && (this.component == "")) // Q2
    {
      // request to back end
      this.http.get(`http://localhost:3000/api/courses/${this.subject}`).subscribe((data:any) => {
        this.data2 = data; // get data object
      })
      console.log(`Search for courses with subject: ${this.subject}`);
    }
    else if ((this.subject != "") && (this.catalog != "") && (this.component == "")) // Q3a
    {
      // request to back end
      this.http.get(`http://localhost:3000/api/courses/${this.subject}/${this.catalog}`).subscribe((data:any) => {
        this.data3a = data; // get data object
      })
      console.log(`Search for courses with subject: ${this.subject} and catalog number: ${this.catalog}`);
    }
    else if ((this.subject != "") && (this.catalog != "") && (this.component != "")) // Q3b
    {
      // request to back end
      this.http.get(`http://localhost:3000/api/courses/${this.subject}/${this.catalog}/${this.component}`).subscribe((data:any) => {
        this.data3b = data; // get data object
      })
      console.log(`Search for courses with subject: ${this.subject}, catalog number: ${this.catalog}, and component: ${this.component}`);
    }
    else
    {
      this.error = "Invalid input in search fields!";
      console.log("Invalid input!");
    }
  }

  // method to reset all member varaibles used in *ngIf statements
  reset()
  {
    this.data1 = undefined;
    this.data2 = undefined;
    this.data3a = undefined;
    this.data3b = undefined;
    this.error = "";
  }
}
