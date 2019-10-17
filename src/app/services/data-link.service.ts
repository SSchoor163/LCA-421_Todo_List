import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLinkService {
  @Output() reset = true;
  constructor() { }

  resetView() {
    setTimeout(() => this.reset = false);
    setTimeout(() => this.reset = true);
  }
}
