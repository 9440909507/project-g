import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  title: string;
  arr: Array<string>;
  obj: Object;
  test: boolean;
  ngOnInit() {
    this.title = 'hey guys';
    this.arr = ['first', 'second', 'third'];
    this.obj = { firsname: 'ewre' };
    this.test = true;
  }
}
