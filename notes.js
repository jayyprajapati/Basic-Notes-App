import fs from "fs";
import chalk from "chalk";

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicate = notes.find((note) => note.title === title);
  if (!duplicate) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen.bold("New Note Added :)"));
  } else console.log(chalk.bgRed.bold("Title Already taken :("));
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = () => {
  try {
    const buff = fs.readFileSync("notes.json");
    const buffJSON = buff.toString();
    return JSON.parse(buffJSON);
  } catch (e) {
    return [];
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);
  saveNotes(updatedNotes);
  if (notes.length === updatedNotes.length)
    console.log(chalk.bgRed.bold("Note not found :("));
  else console.log(chalk.bgGreen.bold("Note removed :)"));
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note, index) => {
    console.log(chalk.bgBlue("Note : " + (index + 1)));
    console.log("Title: " + note.title);
    console.log();
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const findNote = notes.find((note) => note.title === title);

  if (findNote) {
    console.log(chalk.bgGray(findNote.title));
    console.log(findNote.body);
    console.log();
  } else {
    console.log(chalk.bgRed("Note not found :("));
  }
};
export { addNotes, removeNotes, listNotes, readNotes };
