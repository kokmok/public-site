import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { BesWebdevTestModule } from '../../../test.module';
import { StudentWorkComponent } from 'app/entities/student-work/student-work.component';
import { StudentWorkService } from 'app/entities/student-work/student-work.service';
import { StudentWork } from 'app/shared/model/student-work.model';

describe('Component Tests', () => {
  describe('StudentWork Management Component', () => {
    let comp: StudentWorkComponent;
    let fixture: ComponentFixture<StudentWorkComponent>;
    let service: StudentWorkService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BesWebdevTestModule],
        declarations: [StudentWorkComponent],
      })
        .overrideTemplate(StudentWorkComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(StudentWorkComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(StudentWorkService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new StudentWork(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.studentWorks && comp.studentWorks[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
