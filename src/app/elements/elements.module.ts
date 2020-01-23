import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookOfFlamesModule } from './book-of-flames/book-of-flames.module';
import { BookOfWatersModule } from './book-of-waters/book-of-waters.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { NpmCommandComponent } from './npm-command/npm-command.component';
import { NotesComponent } from './notes/notes.component';
import { ApiServerComponent } from './api-server/api-server.component';
import { LocalSessionStorageComponent } from './local-session-storage/local-session-storage.component';
import { CssGridLayoutModule } from './css-grid-layout/css-grid-layout.module';
import {
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';
import { PipesModule } from '../shared/pipes/pipes.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'lazyLoading', component: LazyLoadingComponent},
  {path: 'pipes', component: AngularPipesComponent},
  {path: 'todo', loadChildren: () => ToDoListModule},
  {path: 'npmCommand', component: NpmCommandComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'apiServer', component: ApiServerComponent},
  {path: 'localSessionStorage', component: LocalSessionStorageComponent},
  {path: 'cssGridLayout', loadChildren: () => CssGridLayoutModule}
];

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    PipesModule,
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    AboutComponent,
    ContactComponent,
    LazyLoadingComponent,
    AngularPipesComponent,
    NpmCommandComponent,
    NotesComponent,
    ApiServerComponent,
    LocalSessionStorageComponent
  ],
  providers: []
})
export class ElementsModule {}
