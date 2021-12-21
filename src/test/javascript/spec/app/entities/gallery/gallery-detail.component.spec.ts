import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { BesWebdevTestModule } from '../../../test.module';
import { GalleryDetailComponent } from 'app/entities/gallery/gallery-detail.component';
import { Gallery } from 'app/shared/model/gallery.model';

describe('Component Tests', () => {
  describe('Gallery Management Detail Component', () => {
    let comp: GalleryDetailComponent;
    let fixture: ComponentFixture<GalleryDetailComponent>;
    const route = ({ data: of({ gallery: new Gallery(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BesWebdevTestModule],
        declarations: [GalleryDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(GalleryDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(GalleryDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load gallery on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.gallery).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
