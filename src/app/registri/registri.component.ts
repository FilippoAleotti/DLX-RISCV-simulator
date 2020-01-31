import { Component, OnInit, Input } from '@angular/core';
import { Registri } from './registri';

@Component({
  selector: 'app-registri',
  templateUrl: './registri.component.html',
  styleUrls: ['./registri.component.sass']
})
export class RegistriComponent implements OnInit {

  @Input() registri: Registri;

  fType: 'dec'|'bin'|'hex' = 'hex'

  get isDLX() {
    return this.registri.constructor.name === 'DLXRegistri';
  }

  get isRV32I() {
    return this.registri.constructor.name === 'RV32IRegistri';
  }

  constructor() { }

  ngOnInit() {
  }

}
