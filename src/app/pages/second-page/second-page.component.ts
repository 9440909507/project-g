import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  title: string;
  arr: Array<string>;
  obj: Object;
  test: boolean;
  ngOnInit() {
    this.title = 'second title';
    this.arr = ['first', 'second', 'third'];
    this.obj = { firsname: 'ewre' };
    this.test = true;
  }
}
