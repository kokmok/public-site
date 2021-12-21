import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { BesWebdevTestModule } from '../../../test.module';
import { StudentWorkDetailComponent } from 'app/entities/student-work/student-work-detail.component';
import { StudentWork } from 'app/shared/model/student-work.model';

describe('Component Tests', () => {
  describe('StudentWork Management Detail Component', () => {
    let comp: StudentWorkDetailComponent;
    let fixture: ComponentFixture<StudentWorkDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ studentWork: new StudentWork(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BesWebdevTestModule],
        declarations: [StudentWorkDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(StudentWorkDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(StudentWorkDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load studentWork on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.studentWork).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });

    describe('byteSize', () => {
      it('Should call byteSize from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'byteSize');
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.byteSize(fakeBase64);

        // THEN
        expect(dataUtils.byteSize).toBeCalledWith(fakeBase64);
      });
    });

    describe('openFile', () => {
      it('Should call openFile from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'openFile');
        const fakeContentType = 'fake content type';
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.openFile(fakeContentType, fakeBase64);

        // THEN
        expect(dataUtils.openFile).toBeCalledWith(fakeContentType, fakeBase64);
      });
    });
  });
});
