import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NoteComponent} from './noteslist/note/note.component';

import { AddnoteComponent } from './addnote/addnote.component';
import { NoteslistComponent } from './noteslist/noteslist.component';
import { NotesService } from './shared/notes.service';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    AddnoteComponent,
    NoteslistComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
