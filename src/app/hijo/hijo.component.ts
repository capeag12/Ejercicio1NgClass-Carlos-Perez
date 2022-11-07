import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() color:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  

}
