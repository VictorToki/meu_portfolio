import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intro-message',
  standalone: true,
  imports: [],
  templateUrl: './intro-message.component.html',
  styleUrl: './intro-message.component.scss'
})
export class IntroMessageComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToContactMe(): void {
    const element = document.getElementById('contact-me');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  download():void{
    window.open('../../assets/files/resume.pdf', '_blank');
  }
}
