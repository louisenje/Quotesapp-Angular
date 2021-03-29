import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import{Quote} from '../quote'

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {

  newQuote=new Quote("","","",0,0,new Date())
  @Output() addQuote = new EventEmitter<Quote>();

  constructor() { }

  ngOnInit(): void {
  }

}
