import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BacketPageComponent} from './backet-page.component';
import {BucketPictureComponent} from '../bucket-picture/bucket-picture.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    BacketPageComponent,
    BucketPictureComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // @ts-ignore
    RouterModule.forChild({path: '', component: BacketPageComponent})
  ]
})
export class BacketPageModule { }
