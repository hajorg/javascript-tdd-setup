'use strict'

var chai = require('chai');
var assert = chai.assert;

var Note = require('./lib/notes.js');
var NotesApplication = require('./lib/notesapplication.js');


var note = new Note("Hello world", "Jorg");
var note2 = new Note("Howdy people", "Deji");
var noteapp = new NotesApplication();

describe("Note creation works properly", function() {
    it("assigns author based on the parameter supplied in the constructor", function() {
        assert(note.author === "Jorg");
        assert(note.content === "Hello world");
    })
})

describe("Notes application manipulates the note", function() {
    it("increments the note list as notes are added", function() { 
        assert(noteapp.addNote(note) === 1);
    })
    it("add note accepts note object as a parameter", function() {
        assert(note.hasOwnProperty('author') && note.hasOwnProperty('content'));
    })
    it("Get a note with its id", function() {
        noteapp.addNote(note);
        assert(noteapp.get(0) === "Hello world");
    })
    it("Delete a note with its id", function() {
        noteapp.addNote(note);
        assert(noteapp.delete(0) === true);
    })
    it("Search for a string and return its value", function() {
        noteapp.addNote(note);
        assert(noteapp.search("Hello world") === "Hello world");
    })
    it("Pass in the text and note id as parameter and edit the text of the former content", function() {
        noteapp.addNote(note);
        assert(noteapp.edit(0,"Welcome world") === "Welcome world");
    })
    it("Get notes count", function() {
        var note = new Note("Hello world", "Jorg");
        var note2 = new Note("Howdy people", "Deji");
        var noteapp = new NotesApplication();
        noteapp.addNote(note);
        noteapp.addNote(note2);
        assert(noteapp.notesCount() > 0);
    })
    it("Check if the note list is empty", function() {
        var note = new Note("Hello world", "Jorg");
        var note2 = new Note("Howdy people", "Deji");
        var noteapp = new NotesApplication();
        assert(noteapp.notesList.length === 0)
    })
    it("Check if parameter passed is an instance of Note", function() {
        noteapp.addNote(note);
        assert(note instanceof Note);
    })
    it("Get all the notes list", function() {
        var note = new Note("Hello world", "Jorg");
        var noteapp = new NotesApplication();
        noteapp.addNote(note);
        assert(noteapp.listNotes() === "\nNote ID: "+ 0 +"\nHello world\nBy Author Jorg\n")
    })

})