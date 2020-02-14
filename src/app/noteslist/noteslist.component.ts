import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NotesService } from '../shared/notes.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.scss',
]
})
export class NoteslistComponent implements OnInit {

  notes: Note[] = new Array<Note>();
  filteredNotes : Note[] = new Array<Note>();
  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit() {
  
    this.notes = this.notesService.getAll();
    this.filteredNotes = this.notes;
  }

  filter(query: string){
    query = query.toLowerCase().trim();

    let allResults: Note[] = new Array<Note>();
    let terms: string[] = query.split(' ');

    terms = this.removeDuplicates(terms);

    terms.forEach(term =>{
      let results: Note[]= this.relevantNotes(term);
      allResults = [...allResults, ...results]
    });

    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredNotes = uniqueResults;


  }

  removeDuplicates(arr: Array<any>) : Array<any> {
    let uniqueResults: Set<any> = new Set<any>();

    arr.forEach(e => uniqueResults.add(e));

    return Array.from(uniqueResults);
  }

  relevantNotes(query: string): Array<Note>{
    query =query.toLowerCase().trim();
    let relevantNotes = this.notes.filter(note =>{
      if(note.title && note.title.toLowerCase().includes(query)){
        return true;
        
      }
      if(note.body && note.body.toLowerCase().includes(query)) {
        return true;
      }
      return false;
    })
    return relevantNotes;

  }

  
}
