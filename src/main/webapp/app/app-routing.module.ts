import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule} from '@angular/router';
import {errorRoute} from './layouts/error/error.route';
import {navbarRoute} from './layouts/navbar/navbar.route';
import {DEBUG_INFO_ENABLED} from 'app/app.constants';
import {CoursComponent} from 'app/cours/cours.component';
import {CoursDetailComponent} from 'app/cours/cours-detail/cours-detail.component';
import {Ue} from 'app/shared/model/ue.model';
import {UeService} from 'app/shared/services/ue.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TechnologiesComponent} from 'app/technologies/technologies.component';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@Injectable({ providedIn: 'root' })
export class UeResolver implements Resolve<Ue> {
  constructor(private service: UeService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any>|any {
    return this.service.findBySlug(route.paramMap.get('slug') || '').pipe(map(res => res.body));
  }
}

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'unites-d-enseignement/:slug',
          component: CoursDetailComponent,
          resolve: {
            ue: UeResolver
          }
        },
        {
          path: 'unites-d-enseignement',
          component: CoursComponent
        },
        {
          path: 'technologies',
          component: TechnologiesComponent
        },
        ...LAYOUT_ROUTES,
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    ),
  ],
  exports: [RouterModule],
})
export class BesWebdevAppRoutingModule {}
