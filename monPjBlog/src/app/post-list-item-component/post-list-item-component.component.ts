import { Component, Input,OnInit } from '@angular/core';
import { post } from '../utility/post';
@Component({
  selector: 'PostListItemComponent',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  
  @Input() post : post= new post("",0); 
  constructor() { }
  up(){
    this.post.loveIts ++ ;
  }
  down(){
    this.post.loveIts-- ;
  }
  ngOnInit(): void {
  }

}
