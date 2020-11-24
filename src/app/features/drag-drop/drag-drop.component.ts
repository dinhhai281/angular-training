import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { scan, startWith, tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragDropComponent implements OnInit {
  click$ = new Subject<void>();
  isOpen$ = this.click$.pipe(
    scan(acc => !acc, false),
    startWith(false),
    tap(isOpen => {
      if (isOpen) {
        this.userService.getUser('123');
      }
    })
  )

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
  }

}
