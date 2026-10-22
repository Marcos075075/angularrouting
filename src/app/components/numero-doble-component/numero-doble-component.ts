import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit {
  public doble!: number;
  public numero!: number;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
  ) {
    this.doble = 0;
  }

  redirect(num: number): void {
    this._router.navigate(['/doble', num]);
  }

  goToHome(): void {
    this._router.navigate(['/']);
  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params) => {
      if (parametros['numero'] != null) {
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
        this._cdr.detectChanges();
      }
    });
  }
}
