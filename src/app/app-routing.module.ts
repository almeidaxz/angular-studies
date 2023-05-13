import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { RenderizacaoListasComponent } from './components/renderizacao-listas/renderizacao-listas.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: RenderizacaoListasComponent },
  { path: 'posts', component: ListPostComponent },
  { path: 'posts/:id', component: SinglePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
