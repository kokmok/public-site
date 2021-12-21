import { NgModule } from '@angular/core';
import { BesWebdevSharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import {RandomColorClassDirective} from 'app/shared/random-color-class.directive';
import {BesImageDirective} from 'app/shared/bes-image.directive';

@NgModule({
  imports: [BesWebdevSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective, RandomColorClassDirective, BesImageDirective],
  entryComponents: [LoginModalComponent],
  exports: [
    BesWebdevSharedLibsModule,
    FindLanguageFromKeyPipe,
    AlertComponent,
    AlertErrorComponent,
    LoginModalComponent,
    HasAnyAuthorityDirective,
    RandomColorClassDirective,
    BesImageDirective
  ],
})
export class BesWebdevSharedModule {}
