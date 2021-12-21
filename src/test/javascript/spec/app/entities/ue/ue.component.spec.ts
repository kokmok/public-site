import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { BesWebdevTestModule } from '../../../test.module';
import { UeComponent } from 'app/entities/ue/ue.component';
import { UeService } from 'app/entities/ue/ue.service';
import { Ue } from 'app/shared/model/ue.model';

describe('Component Tests', () => {
  describe('Ue Management Component', () => {
    let comp: UeComponent;
    let fixture: ComponentFixture<UeComponent>;
    let service: UeService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BesWebdevTestModule],
        declarations: [UeComponent],
      })
        .overrideTemplate(UeComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(UeComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(UeService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Ue(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.ues && comp.ues[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
