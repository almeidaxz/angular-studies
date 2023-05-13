import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { DiretivasComponentComponent } from './components/diretivas-component/diretivas-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EmitterChildComponent } from './components/emitter-child/emitter-child.component';
import { RenderizacaoListasComponent } from './components/renderizacao-listas/renderizacao-listas.component';
import { TwaybFormoduleComponent } from './components/twayb-formodule/twayb-formodule.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    DiretivasComponentComponent,
    IfRenderComponent,
    EventsComponent,
    EmitterComponent,
    EmitterChildComponent,
    RenderizacaoListasComponent,
    TwaybFormoduleComponent,
    ListPostComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
