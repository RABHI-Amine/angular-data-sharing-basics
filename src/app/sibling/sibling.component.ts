import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  message!: string;

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(message => this.message=message)
  }

  newMessage(){
    this.sharedService.changeMessage("New message from behavioralSubject");
  }

}
