import {Component, Input} from "@angular/core";

@Component({
  selector:"teacher",
  templateUrl:"./teacher.component.html",
})
export class TeacherComponent{
  @Input("name") name!: string;
  @Input("age") age!: number;
  @Input("tel") tel!: string;
  @Input("address") address!: string;
}
