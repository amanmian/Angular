import { Component } from "@angular/core";
import { Customer } from "./Customer";

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']

})
export class CustomerComponent {
   msg: string = 'EMPLOYEE DATA';
    customers: Customer[] = [
        { id: 1, fname: "Aman", lname: "Mian", email: "amanmian.ksp@gmail.com", phone: "8881318600" },
        { id: 2, fname: "Shubham", lname: "Saurabh", email: "s3@gmail.com", phone: "9898989765" },
        { id: 3, fname: "Andrew", lname: "Pandey", email: "manisha@gmail.com", phone: "12312315" },          
        { id: 4, fname: "Medha", lname: "Joshi", email: "joshi_medha@gmail.com", phone: "7457457" },
                { id: 5, fname: "Vaibhav", lname: "Turuk", email: "vaibhav@gmail.com", phone: "1231231235" }
              ,  { id: 6, fname: "Humera", lname: "Sheikh", email: "huma@gmail.com", phone: "123241235" }


    ];
    constructor(){

    }
}