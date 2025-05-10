import { Directive, ElementRef, inject, input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNewRecipeBadge]'
})
export class NewRecipeBadgeDirective implements OnInit {
  el = inject(ElementRef);
  renderer = inject(Renderer2);

  appNewRecipeBadge = input<boolean>();

  ngOnInit(): void {
    if(!this.appNewRecipeBadge()) return;

    const badge = this.renderer.createElement('span');
    const text = this.renderer.createText('Nova!');

    // Adiciona o texto ao span
    this.renderer.appendChild(badge, text);
    // Adiciona a classe css ao badge
    this.renderer.addClass(badge, 'new-badge');
    // Adiciona o badge ao final do título h3
    this.renderer.appendChild(this.el.nativeElement, badge);
  }
}
