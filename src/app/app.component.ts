import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {LoadPicture} from './shared/actions/picture.actions';
import {LoadComment} from './shared/actions/comment.actions';
import {LoadCategory} from './shared/actions/category.actions';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  constructor(private store: Store, public title: Title){
    title.setTitle('MyShop');
  }
  ngOnInit(): void{
    this.store.dispatch(new LoadPicture());
    this.store.dispatch(new LoadComment());
    this.store.dispatch(new LoadCategory());
  }
}


