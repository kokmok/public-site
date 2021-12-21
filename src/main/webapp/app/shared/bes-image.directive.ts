import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {PictureService} from './services/picture.service';

@Directive({
  selector: '[jhiBesImage]'
})
export class BesImageDirective {

  get src(): number | undefined {
    return this._src;
  }

  @Input()
  set src(value: number| undefined) {
    this._src = value;
    if (value) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.pictureService.getFileUrl(value));
    }

  }

  get background(): number | undefined {
    return this._background;
  }

  @Input()
  set background(value: number | undefined) {
    // eslint-disable-next-line no-console
    console.log(value);
    this._background = value;
    if (value) {
      this.renderer.setStyle(this.el.nativeElement, 'background-image', "url(/"+this.pictureService.getFileUrl(value)+")");
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  private _src: number | undefined;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  private _background: number | undefined;

  constructor(private el: ElementRef, private pictureService: PictureService,
              private renderer: Renderer2) {}

}
