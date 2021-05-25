import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ProductListComponent} from './product-list/product-list.component';
import {PagePictureComponent} from './page-picture/page-picture.component';
import {ProductGridComponent} from './product-grid/product-grid.component';



const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-list/:id', component: PagePictureComponent},
  {path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)},
  {path: 'careers', loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule)},
  {path: 'bucket', loadChildren: () => import('./backet-page/backet-page.module').then( m => m.BacketPageModule)},
  {path: 'product-grid', component: ProductGridComponent},
  {path: 'blog', loadChildren: () => import()}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
