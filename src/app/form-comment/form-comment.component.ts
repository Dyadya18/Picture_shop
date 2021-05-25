import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {ActivatedRoute} from '@angular/router';
import {Picture} from '../shared/models/picture.model';
import {ProductCategoryService} from '../shared/services/product-category/product-category.service';
import {Comment} from '../shared/models/comment.model';
import {AddComment} from '../shared/actions/comment.actions';


@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCommentComponent implements OnInit {
  // @ts-ignore
  comment: Comment;
  // @ts-ignore
  idPicture: number;
  // @ts-ignore
  pictures: Picture;
  // @ts-ignore
  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      score: new FormControl('', [
        Validators.required
      ]),
      comment: new FormControl( '', [
        Validators.maxLength(1000)
      ])
    });
    this.router.params.subscribe((params) => {
      this.idPicture = +params.id;
    })
    this.PictureService.findPicture(this.idPicture).subscribe(
      res => {
        // @ts-ignore
        this.pictures = res;
      }
    );
  }
  // tslint:disable-next-line:max-line-length
  constructor(private store: Store, private PictureService: ProductCategoryService,  private router: ActivatedRoute) {}
  submit(): void{
    this.comment = {
      // @ts-ignore
      comment: this.form.get('comment').value,
      // @ts-ignore
      name: this.form.get('user').value,
      // @ts-ignore
      score: this.form.get('score').value,
      // @ts-ignore
      email: this.form.get('email').value,
      idPicture: this.idPicture,
      namePicture: this.pictures.name
    };
    this.addComment(this.comment)
    this.form.reset();
  }
  addComment(comment: Comment){
    this.store.dispatch(new AddComment(comment));
  }
}
