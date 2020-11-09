import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'delete-schedules',
  templateUrl: './delete-schedules.component.html',
  styleUrls: ['./delete-schedules.component.css']
})
export class DeleteSchedulesComponent implements OnInit {

  // member varaible for search field
  name: string = "";

  // member variables to hold output
  data7: string = "";
  data9: string = "";
  error: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // method to delete a particular schedule Q7
  deleteSchedule()
  {
    this.reset(); // reset all member variables

    if (this.name != "") // Q7
    {
      // request to back end
      this.http.delete(`http://localhost:3000/api/schedules/${this.name}`).subscribe((data:string) => {
        this.data7 = data; // get response as string
      })
      console.log(`Deleted schedule with name: ${this.name}`);
    }
    else
    {
      this.error = "Invalid input in name field!";
      console.log("Invalid input!");
    }
  }

  // method to delete all schedules Q9
  deleteAll()
  {
    this.reset(); // reset all member variables

    // request to back end
    this.http.delete("http://localhost:3000/api/schedules").subscribe((data:string) => {
      this.data9 = data; // get response as string
    })
    console.log("Deleted all schedules");
  }

  // method to reset all member varaibles used in *ngIf statements
  reset()
  {
    this.data7 = "";
    this.data9 = "";
    this.error = "";
  }
}
