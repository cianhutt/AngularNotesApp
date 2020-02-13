import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NotesService } from '../shared/notes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {

  note: Note;


  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.notesService.add(form.value);
  }

}
