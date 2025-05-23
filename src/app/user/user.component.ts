import {
  Component,
  Input,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

import { CardComponent } from '../shared/card/card.component';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  get imagePath() {
    console.log(this.user.avatar);
    return this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
