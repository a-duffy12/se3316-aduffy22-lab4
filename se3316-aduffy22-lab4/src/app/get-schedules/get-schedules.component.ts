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

  // member variables to hold output
  data6: any;
  data8: any;
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
      this.http.get(`http://localhost:3000/api/schedules/${this.name}`).subscribe((data:any) => {
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
    this.http.get("http://localhost:3000/api/schedules").subscribe((data:any) => {
      this.data8 = data; // get data object
    })
    console.log("Searched all schedules");
  }

  // method to reset all member varaibles used in *ngIf statements
  reset()
  {
    this.data6 = undefined;
    this.data8 = undefined;
    this.error = "";
  }
}
