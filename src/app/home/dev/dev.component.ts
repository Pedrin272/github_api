import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GhubDev } from '../interfaces/ghub-dev-response';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.dev);
  }
  @Input()
  dev!: GhubDev;
  ngOnInit(): void {}
}
