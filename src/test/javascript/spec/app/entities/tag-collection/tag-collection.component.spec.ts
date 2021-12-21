import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { BesWebdevTestModule } from '../../../test.module';
import { TagCollectionComponent } from 'app/entities/tag-collection/tag-collection.component';
import { TagCollectionService } from 'app/entities/tag-collection/tag-collection.service';
import { TagCollection } from 'app/shared/model/tag-collection.model';

describe('Component Tests', () => {
  describe('TagCollection Management Component', () => {
    let comp: TagCollectionComponent;
    let fixture: ComponentFixture<TagCollectionComponent>;
    let service: TagCollectionService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BesWebdevTestModule],
        declarations: [TagCollectionComponent],
      })
        .overrideTemplate(TagCollectionComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(TagCollectionComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TagCollectionService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new TagCollection(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.tagCollections && comp.tagCollections[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
