import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Subscription } from "rxjs/Subscription";
@Component({
    selector: 'child-selector',
    templateUrl: './child.component.html'
})
export class ChildComponent {
  private  timer;
    ticks=0;
    private sub:Subscription;
@Output() countDown=new EventEmitter<any>();
constructor(){}
ngOnInit(){
    this.timer= Observable.timer(1000,1000);
    this.sub = this.timer.subscribe(t => this.tickerFunction(t));
}
tickerFunction(tick){
    this.ticks=tick;
    this.countDown.emit(this.ticks);
}
ngOnDestroy(){
    console.log("Destroy Timer");
    this.sub.unsubscribe();
}
}

