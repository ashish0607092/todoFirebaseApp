import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "formatDate"
})
export class DatePipe implements PipeTransform {
  transform(date: any, args?: any): any {
    const d = new Date(date);
    console.log(moment(1318874398806).format());

    return moment(d).format("DD/MM/YYYY");
  }
}
