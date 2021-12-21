import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { BesWebdevTestModule } from '../../../test.module';
import { GalleryElementUpdateComponent } from 'app/entities/gallery-element/gallery-element-update.component';
import { GalleryElementService } from 'app/entities/gallery-element/gallery-element.service';
import { GalleryElement } from 'app/shared/model/gallery-element.model';

describe('Component Tests', () => {
  describe('GalleryElement Management Update Component', () => {
    let comp: GalleryElementUpdateComponent;
    let fixture: ComponentFixture<GalleryElementUpdateComponent>;
    let service: GalleryElementService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BesWebdevTestModule],
        declarations: [GalleryElementUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(GalleryElementUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(GalleryElementUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(GalleryElementService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new GalleryElement(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new GalleryElement();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
