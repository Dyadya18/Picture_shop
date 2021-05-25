import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-header',
  templateUrl: './filter-header.component.html',
  styleUrls: ['./filter-header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterHeaderComponent implements OnInit {

  @Input() category = '';
  activeGrid = false;
  activeList = false;
  constructor() { }

  ngOnInit(): void {
  }

}
