import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './menu-tabla-multiplicar-component.css',
  templateUrl: './menu-tabla-multiplicar-component.html',
})
export class MenuTablaMultiplicarComponent implements OnInit{
  public randNum: Array<number>

  constructor(){
    this.randNum = []
  }

  random(): void {
    let aux = []
    let numero = null
    for (let i = 0; i < 5; i++) {
      numero = Math.floor(Math.random() * 1000001);      
      aux.push(numero)      
    }
    this.randNum = aux
  }

  ngOnInit(): void {
      this.random()
  }
}
