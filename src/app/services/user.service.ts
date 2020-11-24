import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(id: string) {
    return of({id, name: 'user'}).pipe(delay(200));
  }
}
