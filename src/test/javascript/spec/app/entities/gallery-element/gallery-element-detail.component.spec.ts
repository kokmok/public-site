import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { BesWebdevTestModule } from '../../../test.module';
import { GalleryElementDetailComponent } from 'app/entities/gallery-element/gallery-element-detail.component';
import { GalleryElement } from 'app/shared/model/gallery-element.model';

describe('Component Tests', () => {
  describe('GalleryElement Management Detail Component', () => {
    let comp: GalleryElementDetailComponent;
    let fixture: ComponentFixture<GalleryElementDetailComponent>;
    const route = ({ data: of({ galleryElement: new GalleryElement(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BesWebdevTestModule],
        declarations: [GalleryElementDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(GalleryElementDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(GalleryElementDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load galleryElement on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.galleryElement).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
