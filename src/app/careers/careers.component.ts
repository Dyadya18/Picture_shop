import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareersComponent implements OnInit {

  constructor(public title: Title, public meta: Meta) {
    title.setTitle('Career-with-us');
    meta.addTag({name: title.getTitle(), content: 'Career'});
  }

  ngOnInit(): void {
  }

}
