import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CareersComponent} from './careers.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [CareersComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: CareersComponent}
    ])
  ]
})
export class CareersModule { }
