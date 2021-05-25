import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DragScrollModule} from 'ngx-drag-scroll';
import {HttpClientModule} from '@angular/common/http';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {TooltipDirective} from './directives/tooltip.directive';
import {PhoneNumberPipe} from './pipes/phone-number.pipe';
import {BreadcrumbModule} from 'angular-crumbs';
@NgModule({
  declarations: [
    TooltipDirective,
    PhoneNumberPipe,
  ],
  imports: [
    FlexLayoutModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    DragScrollModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule,
    BreadcrumbModule
  ],
  exports: [
    FlexLayoutModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    DragScrollModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule,
    PhoneNumberPipe,
    TooltipDirective,
    BreadcrumbModule
  ]
})
export class SharedModule { }
