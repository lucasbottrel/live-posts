import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [
    new Post(
      'Nature',
      'Nature is a british weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology',
      'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752',
      'cl175@gmail.com',
      new Date()
    ),
    new Post(
      'Hampi',
      'Hampi was the capital of the Vijayanagara Empire in the 14th century.Chronicles left by Persian and European travellers, particularly the Portuguese, say that Hampi was a prosperous, wealthy and grand city near the Tungabhadra River, with numerous temples, farms and trading markets',
      'https://images.newindianexpress.com/uploads/user/imagelibrary/2021/11/15/w1200X800/Highlight_on.jpg',
      'junUyti10@gmail.com',
      new Date()
    ),
    new Post(
      'Empire State Building',
      'The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan in New York City, United States. It was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from "Empire State", the nickname of the state of New York.',
      'https://cdn.getyourguide.com/img/location/5ca3484e4fa26.jpeg/92.jpg',
      'niceArchitect@yahoo.com',
      new Date()
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
