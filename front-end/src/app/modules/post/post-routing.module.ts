import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components.
import { PostsComponent } from './pages/posts/posts.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/create', component: CreatePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
