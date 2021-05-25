import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUsComponent} from './about-us.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: AboutUsComponent}
    ])
  ]
})
export class AboutUsModule { }
