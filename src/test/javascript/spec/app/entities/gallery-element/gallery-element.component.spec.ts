import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { BesWebdevTestModule } from '../../../test.module';
import { GalleryElementComponent } from 'app/entities/gallery-element/gallery-element.component';
import { GalleryElementService } from 'app/entities/gallery-element/gallery-element.service';
import { GalleryElement } from 'app/shared/model/gallery-element.model';

describe('Component Tests', () => {
  describe('GalleryElement Management Component', () => {
    let comp: GalleryElementComponent;
    let fixture: ComponentFixture<GalleryElementComponent>;
    let service: GalleryElementService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BesWebdevTestModule],
        declarations: [GalleryElementComponent],
      })
        .overrideTemplate(GalleryElementComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(GalleryElementComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(GalleryElementService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new GalleryElement(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.galleryElements && comp.galleryElements[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
