import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<p>Teste</p><router-outlet><router-outlet/>',
})
export class AppComponent {}
