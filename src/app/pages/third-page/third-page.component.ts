import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'third-page',
    templateUrl: './third-page.component.html',
    styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent implements OnInit {
    setup: string;
    punchline: string;

    ngOnInit() {
        this.setup = "";
        this.punchline = "calculation";
    }
}
