import { Component, OnInit, Input } from '@angular/core';
import { IRepo } from 'src/app/helpers/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() tile: IRepo;
  constructor(private router: Router) { }
}
