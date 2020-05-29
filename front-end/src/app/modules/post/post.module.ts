import { NgModule } from '@angular/core';

// Pages.
import { PostsComponent } from './pages/posts/posts.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';

// Routes.
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [PostsComponent, CreatePostComponent],
  imports: [PostRoutingModule],
  exports: [PostsComponent, CreatePostComponent],
})
export class PostModule {}
