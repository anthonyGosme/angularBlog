import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'PostListItemComponent',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post :any; 
  constructor() { }

  ngOnInit(): void {
  }

}
