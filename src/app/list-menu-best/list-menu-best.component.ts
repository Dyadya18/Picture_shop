import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {CategoryState} from '../shared/state/category.state';
import {Observable} from 'rxjs';
import {Category} from '../shared/models/category.model';

export enum NameCategory {
  'Category menu',
  'Best products',
  'Top Ranking',
  'Most Popular'
}
@Component({
  selector: 'app-list-menu-best',
  templateUrl: './list-menu-best.component.html',
  styleUrls: ['./list-menu-best.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListMenuBestComponent implements OnInit{
  // @ts-ignore
  nameCategory: NameCategory = NameCategory[0];
  // @ts-ignore
  @Select(CategoryState.getCategory) category$: Observable<Category[]>;
  constructor(private cd: ChangeDetectorRef) {
  }
  ngOnInit(): void {
  }
}
