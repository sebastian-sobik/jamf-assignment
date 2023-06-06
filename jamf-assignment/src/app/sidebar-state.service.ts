import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarStateService {
  private isClosed = new BehaviorSubject<boolean>(true);

  selectState$(): Observable<boolean> {
    return this.isClosed.asObservable();
  }

  open(): void {
    this.isClosed.next(false);
  }

  close(): void {
    this.isClosed.next(true);
  }
}
