import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { BesWebdevTestModule } from '../../../test.module';
import { TagCollectionDetailComponent } from 'app/entities/tag-collection/tag-collection-detail.component';
import { TagCollection } from 'app/shared/model/tag-collection.model';

describe('Component Tests', () => {
  describe('TagCollection Management Detail Component', () => {
    let comp: TagCollectionDetailComponent;
    let fixture: ComponentFixture<TagCollectionDetailComponent>;
    const route = ({ data: of({ tagCollection: new TagCollection(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BesWebdevTestModule],
        declarations: [TagCollectionDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(TagCollectionDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TagCollectionDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load tagCollection on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.tagCollection).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
