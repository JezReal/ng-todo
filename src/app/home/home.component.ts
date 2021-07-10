import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todoList: any;
  
  todo: string = '';
  todoDate: string = '';
  todoId: any;

  selectedTodo: any = {
    id: -1,
    date: null,
    todo: null
  }

  showEditTodo: boolean = false
  showAddTodo: boolean = false

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.dataService
      .getAllTodos({
        account_id: window.sessionStorage.getItem('account_id'),
      })
      .subscribe((res: any) => {
        if (res.data) {
          this.todoList = res.data;
        } else if (res.error) {
          alert('no todos')
        }
      });
  }

  editTodo(todo: any) {
    this.showAddTodo = false;
    
    this.todoId = todo.todo_id;
    this.todoDate= todo.date
    this.todo = todo.todo;

    this.showEditTodo = true
  }

  updateTodo() {
    this.dataService
      .update({
        todo_id: this.todoId,
        date: this.todoDate,
        todo: this.todo,
      })
      .subscribe((res: any) => {
        if (res.data) {
          this.getAll();
          this.showEditTodo = false
        } else if (res.error) {
          console.log(res.error);
        }
      });
  }

  deleteTodo() {
    this.dataService
      .delete({
        todo_id: this.todoId,
      })
      .subscribe((res: any) => {
        if (res.data) {
          console.log(res.data);
          this.getAll();
          this.showEditTodo = false
        } else if (res.error) {
          console.log('Wala');
        }
      });
  }

  cancelEdit() {
    this.showEditTodo = false
  }

  loadAddTodo() {
    this.showEditTodo = false
    this.showAddTodo = true
    this.todoId = -1;
    this.todoDate = '';
    this.todo = '';
  }

  addTodo() {
    this.dataService
      .add({
        account_id: window.sessionStorage.getItem('account_id'),
        date: this.todoDate,
        todo: this.todo
      })
      .subscribe((res: any) => {
        if (res.data) {
          console.log(res.data);
          this.getAll();
          this.showAddTodo = false
        } else if (res.error) {
          console.log('Wala');
        }
      });
  }

  cancelAdd() {
    this.showAddTodo = false
  }

  logout() {
    sessionStorage.removeItem('account_id');
    this.router.navigate(['/']);
  }
}
