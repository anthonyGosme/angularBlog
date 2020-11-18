import { Component } from '@angular/core';
import { post } from './utility/post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monPjBlog';
 
  posts = [
    new post("premier titre",12),
    new post("deuxieme titre",129),
    new post("troisième titre",1233),

  ];
}
