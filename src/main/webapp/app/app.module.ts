import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import './vendor';
import {BesWebdevSharedModule} from 'app/shared/shared.module';
import {BesWebdevCoreModule} from 'app/core/core.module';
import {BesWebdevAppRoutingModule} from './app-routing.module';
import {BesWebdevHomeModule} from './home/home.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import {MainComponent} from './layouts/main/main.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {PageRibbonComponent} from './layouts/profiles/page-ribbon.component';
import {ActiveMenuDirective} from './layouts/navbar/active-menu.directive';
import {ErrorComponent} from './layouts/error/error.component';
import { CoursComponent } from './cours/cours.component';
import { CoursDetailComponent } from './cours/cours-detail/cours-detail.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { LoaderComponent } from './layouts/loader/loader.component';

@NgModule({
  imports: [
    BrowserModule,
    BesWebdevSharedModule,
    BesWebdevCoreModule,
    BesWebdevHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BesWebdevAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent, CoursComponent, CoursDetailComponent, TechnologiesComponent, LoaderComponent],
  bootstrap: [MainComponent],
})
export class BesWebdevAppModule {}
