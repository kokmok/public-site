import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { BesWebdevTestModule } from '../../../test.module';
import { UeUpdateComponent } from 'app/entities/ue/ue-update.component';
import { UeService } from 'app/entities/ue/ue.service';
import { Ue } from 'app/shared/model/ue.model';

describe('Component Tests', () => {
  describe('Ue Management Update Component', () => {
    let comp: UeUpdateComponent;
    let fixture: ComponentFixture<UeUpdateComponent>;
    let service: UeService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BesWebdevTestModule],
        declarations: [UeUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(UeUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(UeUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(UeService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Ue(123);
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
        const entity = new Ue();
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
