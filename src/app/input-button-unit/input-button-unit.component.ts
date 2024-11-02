import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [],
  template: `
    <p>input-button-unit works! The item title is: {{ title }}</p>
    <input
      #inputElementRef
      [value]="title"
      (keyup.enter)="changeTitle(getInputValue($event))"
    />
    <!-- <p>Generated title</p>
    <input [value]="generateTitle()" />
    <p>{{ generateTitle() }}</p> -->
    <!-- <input id="my-input" /> -->
    <button (click)="changeTitle(inputElementRef.value)">Save</button>
  `,
  styleUrl: './input-button-unit.component.scss',
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello world';

  constructor() {
    // setTimeout(() => {
    //   this.title = 'This is not the title you are looking for';
    // }, 3000);
  }
  ngOnInit(): void {}
  // ngAfterViewInit(): void {
  // // bad practise
  //   let inputElement = document.getElementById('my-input') as HTMLInputElement;
  //   console.log(inputElement);
  //   inputElement && (inputElement.value = this.title);
  // }

  // generateTitle(): string {
  //   return 'This title was generated by a method.';
  // }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
