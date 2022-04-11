import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //the input decorator allow us to pass data from parent to child element 
  @Input() message!: string;

  mssg = 'hi';
  //the output decoratoe allow us to notify the parent element of a change 
  //it musst be of type EventEmitter wich is a class that allow us to create custom angular events
  @Output() messageEvent = new EventEmitter<string>();


  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(message => this.message=message);
  }

  sendMessage(){
    this.messageEvent.emit(this.mssg);
  }

}
