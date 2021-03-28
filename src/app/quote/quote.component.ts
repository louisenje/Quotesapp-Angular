import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote("There is power in believing","Nasseh","Lenny",0,0,new Date(2020,0,2)),
    new Quote("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein","Nemo",0,0,new Date(2020,1,2)),
    new Quote("Same today and yesterday","Ndungu","Kiba",0,0,new Date(2020,2,2)),
    new Quote("So many books, so little time ","Frank Zappa","Alex",0,0,new Date(2020,3,2))

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
