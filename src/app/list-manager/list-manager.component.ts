import { Component } from '@angular/core';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [TodoItemComponent, InputButtonUnitComponent],
  template: `
    <div class="todo-app">
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
      <ul>
        @for (todoItem of todoList; track todoItem.title) {
        <li>
          <app-todo-item
            [item]="todoItem"
            (remove)="removeItem($event)"
            (update)="updateItem($event.item, $event.changes)"
            (edit)="editItem($event.item, $event.newTitle)"
          />
        </li>
        }
      </ul>
    </div>
  `,
  styleUrl: './list-manager.component.scss',
})
export class ListManagerComponent {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  removeItem(item: TodoItem) {
    this.todoListService.deleteItem(item);
  }

  updateItem(item: TodoItem, changes: any) {
    this.todoListService.updateItem(item, changes);
  }

  editItem(item: TodoItem, newTitle: string) {
    this.todoListService.editItem(item, newTitle);
  }
}
