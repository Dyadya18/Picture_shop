import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';


@Directive({
  selector: '[appTooltip]'
})

export class TooltipDirective {
  // @ts-ignore
  @Input() appTooltip: string;
  constructor(private element: ElementRef, private render: Renderer2) { }
  // @ts-ignore
  el: HTMLElement;
  // @ts-ignore
  text: string;
  @HostListener('mouseenter') onEnter(){
    this.el = this.render.createElement('div');
    this.text = this.render.createText(this.appTooltip);
    this.render.appendChild(this.el, this.text);
    this.render.addClass(this.el, 'tooltip');
    this.render.addClass(this.element.nativeElement, 'position-parent');
    this.render.appendChild(this.element.nativeElement, this.el);
  }
  @HostListener('mouseleave') onLeave(){
    this.render.removeChild(this.element.nativeElement, this.el);
  }

}
