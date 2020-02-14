import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NotesService } from '../shared/notes.service';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-addnote",
  templateUrl: './addnote.component.html',
  styleUrls: ["./addnote.component.scss"]
})
export class AddnoteComponent implements OnInit {
  note: Note;
  noteId: number;
  new: boolean;

  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params.id) {
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
        this.new = false;
      } else {
        this.new = true;
      }
    });

    
  }
  onSubmit(form: NgForm) {
    if (this.new) {
      this.notesService.add(form.value);
      this.router.navigateByUrl("/");
    } else {
      this.notesService.update(this.noteId, form.value.title, form.value.body);
    }
  }

  cancel() {
    this.router.navigateByUrl("/");
  }
}
