import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  color:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarPulsado(numero:number){
    this.color=numero;
  }



}
