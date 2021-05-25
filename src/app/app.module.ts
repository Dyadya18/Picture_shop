import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ListMenuBestComponent } from './list-menu-best/list-menu-best.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { FormCommentComponent } from './form-comment/form-comment.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductLongComponent } from './product-long/product-long.component';
import { PagePictureComponent } from './page-picture/page-picture.component';
import {BacketPageModule} from './backet-page/backet-page.module';
import {SharedModule} from './shared/shared.module';
import {AboutUsModule} from './about-us/about-us.module';
import {CareersModule} from './careers/careers.module';
import {NgxsModule} from '@ngxs/store';
import {PictureState} from './shared/state/picture.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { FiltersComponent } from './filters/filters.component';
import { FilterHeaderComponent } from './filter-header/filter-header.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import {CommentState} from './shared/state/comment.state';
import {BucketState} from './shared/state/bucket.state';
import {CategoryState} from './shared/state/category.state';
import {RouterTestingModule} from '@angular/router/testing';
import {MatBadgeModule} from '@angular/material/badge';
import { MainLoyautComponent } from './blog-page/shared/components/main-loyaut/main-loyaut.component';
import { BlogPageComponent } from './blog-page/blog-page/blog-page.component';
import { PostPageComponent } from './blog-page/post-page/post-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ProductComponent,
    ListMenuBestComponent,
    CommentCardComponent,
    FormCommentComponent,
    FooterComponent,
    HomepageComponent,
    ProductListComponent,
    ProductLongComponent,
    PagePictureComponent,
    FiltersComponent,
    FilterHeaderComponent,
    ProductGridComponent,
    MainLoyautComponent,
    BlogPageComponent,
    PostPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        BacketPageModule,
        AboutUsModule,
        CareersModule,
        RouterTestingModule,
        NgxsModule.forRoot([
            PictureState,
            CommentState,
            BucketState,
            CategoryState
        ]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        MatBadgeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
