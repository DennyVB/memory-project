import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  // @ts-ignore
  @Input() users: { username: string; email: string }[];
}
