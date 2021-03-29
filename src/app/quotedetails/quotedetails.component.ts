import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import{Quote} from '../quote'

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
