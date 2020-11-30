import { Counter } from './../models/counter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() {
    this.counter = new Counter();
   }

  public get account(): number {
    return this.counter.account;
  }
  public counter: Counter;

  ngOnInit(): void {
  }

  public increase(): void {
    this.counter.account++;
  }

  public decrease(): void {
    this.counter.account--;
  }

}
