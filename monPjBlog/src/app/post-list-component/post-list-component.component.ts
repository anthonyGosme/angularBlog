import { Component, Input,OnInit } from '@angular/core';
import { post } from '../utility/post';
@Component({
  selector: 'PostListComponent',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() appareilName: string ="" ; 
  @Input() appareilStatus : string =""; 
  @Input() posts :post[]=[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
