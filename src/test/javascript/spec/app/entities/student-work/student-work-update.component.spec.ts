import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { BesWebdevTestModule } from '../../../test.module';
import { StudentWorkUpdateComponent } from 'app/entities/student-work/student-work-update.component';
import { StudentWorkService } from 'app/entities/student-work/student-work.service';
import { StudentWork } from 'app/shared/model/student-work.model';

describe('Component Tests', () => {
  describe('StudentWork Management Update Component', () => {
    let comp: StudentWorkUpdateComponent;
    let fixture: ComponentFixture<StudentWorkUpdateComponent>;
    let service: StudentWorkService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BesWebdevTestModule],
        declarations: [StudentWorkUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(StudentWorkUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(StudentWorkUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(StudentWorkService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new StudentWork(123);
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
        const entity = new StudentWork();
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
