import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ViewportScroller } from '@angular/common';
import { GeometricSignatureComponent } from "../geometric-signature/geometric-signature.component";


@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    imports: [MatMenuModule, MatButtonModule, GeometricSignatureComponent]
})
export class MenuComponent {
  menuOpen = false;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(page: string): void {
    const element = document.getElementById(page);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu(): void {
    console.log('menu toggle')
    this.menuOpen = !this.menuOpen;
  }
}
