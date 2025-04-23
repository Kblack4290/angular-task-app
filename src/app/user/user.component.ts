import { Component, Input, input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DUMMY_USERS } from '../dummy.users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    console.log(this.avatar);
    return this.avatar;
  }
  onSelectUser() {}
}
