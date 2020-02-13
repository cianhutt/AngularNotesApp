import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.scss']
})
export class NoteslistComponent implements OnInit {
notes: Note[] = new Array<Note>();
  constructor(private notesService: NotesService) { }

  ngOnInit() {
  
    this.notes = this.notesService.getAll();
  }

}
