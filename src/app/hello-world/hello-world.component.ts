import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-hello-world',
templateUrl: './hello-world.component.html',
styleUrls: ['./hello-world.component.scss'],

template:` <p>
hello-world works!
</p>`,


})

export class HelloWorldComponent implements OnInit {
    name:string;
constructor() {
    this.name="Welcome TO AngularJs "
 }

ngOnInit() {
}

}