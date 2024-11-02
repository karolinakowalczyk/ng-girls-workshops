import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [],
  template: `
    <p>input-button-unit works!</p>
    The item title is: {{ title }}
    <input [value]="title" />
    <p>Generated title</p>
    <input [value]="generateTitle()" />
    <p>{{ generateTitle() }}</p>
    <!-- <input id="my-input" /> -->
    <button>Save</button>
  `,
  styleUrl: './input-button-unit.component.scss',
})
export class InputButtonUnitComponent {
  title = 'Hello world';

  constructor() {
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }
  // ngAfterViewInit(): void {
  //   let inputElement = document.getElementById('my-input') as HTMLInputElement;
  //   console.log(inputElement);
  //   inputElement && (inputElement.value = this.title);
  // }

  generateTitle(): string {
    return 'This title was generated by a method.';
  }
}
