import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote("You must be the change you want to see in the world","Mahatma Gandhi","Louise",0,0,new Date(2020,0,2)),
    new Quote("Money is not the answer, but it makes the diffrence.","Albert Einstein","Nemo",0,0,new Date(2020,1,2)),
    new Quote("You cant stop my happiness, coz i like the way I am.","Edna Turnbad","Luna",0,0,new Date(2020,2,2)),
    new Quote("Everything you can imagine is real ","Pablo Picaso","Alex",0,0,new Date(2020,3,2))

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
