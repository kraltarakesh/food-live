import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmspageRoutingModule } from './cmspage-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [ContactUsComponent, PageComponent],
  imports: [
    CommonModule,
    CmspageRoutingModule
  ]
})
export class CmspageModule { }
