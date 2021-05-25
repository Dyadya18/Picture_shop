import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent implements OnInit {

  constructor(public title: Title, public meta: Meta) {
    title.setTitle('About-us-title');
    meta.addTag({name: title.getTitle(), content: 'About-us'});
  }

  ngOnInit(): void {
  }

}
