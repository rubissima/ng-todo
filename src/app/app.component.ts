import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<navbar></navbar>
  <body></body>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do';

  itemList = [
    'Test 1',
    'Test 2',
    'Test 3',
    'Test 4',
    'Test 5'
  ];

  ngOnInit() {
    console.log(this.itemList)
  }

}
