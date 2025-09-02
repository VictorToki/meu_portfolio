import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IntroMessageComponent } from "./intro-message/intro-message.component";
import { HeroImgComponent } from "./hero-img/hero-img.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { GeometricSignatureComponent } from "./geometric-signature/geometric-signature.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { Experiences2Component } from "./experiences-2/experiences-2.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { MenuComponent } from "./menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, IntroMessageComponent, HeroImgComponent, MyProfileComponent, GeometricSignatureComponent, ExperiencesComponent, Experiences2Component, ContactMeComponent, MenuComponent]
})
export class AppComponent {
  title = 'my-portfolio';
  isHovered = false;
  isMobile: boolean = false;
  private lastScrollTime = 0;

  ngOnInit() {
    this.checkWindowSize();
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isMobile = window.innerWidth <= 1200;
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (window.innerWidth > 1024) {
      const now = Date.now();
      if (now - this.lastScrollTime < 16) return; // ~60fps
      this.lastScrollTime = now;
      
      const mainContent: any = document.querySelector('.main-content');
      
      const newScrollPosition = mainContent.scrollTop + event.deltaY;
      if (this.isHovered) {
        mainContent.scrollTo({
          top: newScrollPosition,
        });
      }
    }
  }
}
