import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[];
  filterInput: string = "";

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => this.users = data);
  }

  deleteUser(id: number): void {
    this.service.deleteUser(id).subscribe();
    // refresh list after delete
    this.service.getUsers().subscribe(data => this.users = data);
  }

}
