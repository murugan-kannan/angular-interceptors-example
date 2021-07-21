import { Component, OnInit } from '@angular/core';
import { Comments } from '../../models/comments';
import { JsonPlaceHolderService } from '../../services/jsonplaceholder.service';

@Component({
  selector: 'app-comments',
  templateUrl: 'comments.component.html'
})
export class CommentsComponent implements OnInit {
  comments: Comments[];

  constructor(private jsonPlaceHolderService: JsonPlaceHolderService) {}
  ngOnInit(): void {
    this.jsonPlaceHolderService.getComments().subscribe(data => {
      console.log(data);
      this.comments = data;
    });
  }
}
