import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { BesWebdevTestModule } from '../../../test.module';
import { TagCollectionUpdateComponent } from 'app/entities/tag-collection/tag-collection-update.component';
import { TagCollectionService } from 'app/entities/tag-collection/tag-collection.service';
import { TagCollection } from 'app/shared/model/tag-collection.model';

describe('Component Tests', () => {
  describe('TagCollection Management Update Component', () => {
    let comp: TagCollectionUpdateComponent;
    let fixture: ComponentFixture<TagCollectionUpdateComponent>;
    let service: TagCollectionService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BesWebdevTestModule],
        declarations: [TagCollectionUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(TagCollectionUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TagCollectionUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TagCollectionService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new TagCollection(123);
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
        const entity = new TagCollection();
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
