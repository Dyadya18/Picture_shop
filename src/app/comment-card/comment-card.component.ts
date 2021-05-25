import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Comment} from '../shared/models/comment.model';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentCardComponent implements OnInit {
  constructor() { }

  // @ts-ignore
  @Input() comment: Comment;
  ngOnInit(): void {
  }

}
