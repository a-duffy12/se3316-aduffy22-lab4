import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'get-courses',
  templateUrl: './get-courses.component.html',
  styleUrls: ['./get-courses.component.css']
})
export class GetCoursesComponent implements OnInit {

  subject: string = "";
  catalog: string = "";
  component: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // method to run all the various get requests for course data
  display()
  {
    if ((this.subject == "") && (this.catalog == "") && (this.component == "")) // Q1
    {
      console.log("Searched all courses");
    }
    else if ((this.subject != "") && (this.catalog == "") && (this.component == "")) // Q2
    {
      console.log(`Search for courses with subject: ${this.subject}`);
    }
    else if ((this.subject != "") && (this.catalog != "") && (this.component == "")) // Q3a
    {
      console.log(`Search for courses with subject: ${this.subject} and catalog number: ${this.catalog}`);
    }
    else if ((this.subject != "") && (this.catalog != "") && (this.component != "")) // Q3b
    {
      console.log(`Search for courses with subject: ${this.subject}, catalog number: ${this.catalog}, and component: ${this.component}`);
    }
    else
    {
      console.log("Invalid input!");
    }
  }

}
