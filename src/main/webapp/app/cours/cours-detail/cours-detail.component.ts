import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Ue} from 'app/shared/model/ue.model';
import {of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {TechnologyService} from 'app/shared/services/technology.service';
import {IPicture} from 'app/shared/model/picture.model';

@Component({
  selector: 'jhi-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.scss']
})
export class CoursDetailComponent implements OnInit {

  ue: Ue | undefined;
  picture: IPicture;

  constructor(private activatedRoute: ActivatedRoute, private technologyService: TechnologyService) { }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(
        mergeMap(data => {
          // eslint-disable-next-line no-console
          console.log(data);
          this.ue = data['ue'];
          if (this.ue.technologies) {
            return this.technologyService.query({'id.in': this.ue.technologies.map(techno => techno.id)});
          } else {
            return of(null);
          }
        })
      ).subscribe(res => {
        if (res) {
          this.ue.technologies = res.body;
        }
      });
  }

}
