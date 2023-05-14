const notes = [];

//* Save a note *//
function saveNote(content, id) {
    notes.push({ "content": content, "id": id });  
    return notes;
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Watch World Cup", 3);

console.log(notes);


//* Get a note *//

function getNote(id) {
    if (!id || typeof id !== "number") {
        return "An error string";
     }
     for (let i = 0; i < notes.length; i++) {
         if (notes[i].id === id) {
             return notes[i];
         }
     }
     return "The id is not in any object";

}

const firstNote = getNote(2);
console.log(firstNote); 

//* Log out notes *//

function logOutNotesFormatted() {
    for (let i in notes) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
    }
}

logOutNotesFormatted();

