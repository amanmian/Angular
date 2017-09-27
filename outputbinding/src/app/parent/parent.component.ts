import { Component, Output, OnInit } from "@angular/core";
import { tick } from "@angular/core/testing";
@Component({
    selector: 'par-selector',
    templateUrl: './parent.component.html'
})
export class TimerComponent {

   ticks;
   onTick(ticks){
       this.ticks=tick;
   }

 
}