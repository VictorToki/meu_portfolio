import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IntroMessageComponent } from "./intro-message/intro-message.component";
import { HeroImgComponent } from "./hero-img/hero-img.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { GeometricSignatureComponent } from "./geometric-signature/geometric-signature.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { MenuComponent } from "./menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, IntroMessageComponent, HeroImgComponent, MyProfileComponent, GeometricSignatureComponent, ExperiencesComponent, ContactMeComponent, MenuComponent]
})
export class AppComponent {
  title = 'my-portfolio';
  isHovered = false;


  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    const mainText:any = document.querySelector('.main-text');
    const mainContent:any = document.querySelector('.main-content');

    const newScrollPosition = mainContent.scrollTop + (event.deltaY * 3);
    if (this.isHovered){
      mainContent.scrollTo({
        top: newScrollPosition,
        behavior: 'smooth'
      });
    }
  }
}
