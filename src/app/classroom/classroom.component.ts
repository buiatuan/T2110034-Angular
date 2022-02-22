import {Component, Input} from "@angular/core";

@Component({
  selector:"classroom",
  templateUrl:"./classroom.component.html",
})
export class ClassroomComponent{
  color = "color:red";
  @Input("name") name!:string;
  @Input("numberofstudents") numberofstudents !:number;
  @Input("teacher") teacher :any|{name:"",age:0,tel:"",address:""};
}
