import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent implements OnInit{
  public numero!: number;
  public numeroMult!: Array<number>;

  constructor(
    private _activeRoute : ActivatedRoute,
    private _cdr: ChangeDetectorRef

  ) {}

  ngOnInit(): void {
      this._activeRoute.params.subscribe((parametros: Params) => {
        if (parametros['numero'] != null){
          this.numero = parseInt(parametros['numero'])
          let aux = []
          for (let i = 0; i <= 10; i++) {
            aux.push(this.numero * i);
          }
          this.numeroMult = aux;
          this._cdr.detectChanges();
        }
      })
  }

}
