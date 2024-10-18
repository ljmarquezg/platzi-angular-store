import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
