import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoteslistComponent } from './noteslist/noteslist.component';
import { AddnoteComponent } from './addnote/addnote.component';


const routes: Routes = [
    {path: '', component: HomeComponent, children: [
      {path: '', component: NoteslistComponent},
      {path: ':id', component: AddnoteComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
