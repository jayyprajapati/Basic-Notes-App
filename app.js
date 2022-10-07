import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addNotes, removeNotes, listNotes, readNotes } from "./notes.js";

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Add new note!",
    builder: {
      title: {
        describe: "Add your title here!",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Write the description of your note",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      addNotes(argv.title, argv.body);
    },
  })
  .parse();

yargs(hideBin(process.argv))
  .command({
    command: "remove",
    describe: "Remove your existing note",
    builder: {
      title: {
        describe: "Provide the title of the note which you want to delete",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      removeNotes(argv.title);
    },
  })
  .parse();

yargs(hideBin(process.argv))
  .command({
    command: "list",
    describe: "Read your notes",
    handler() {
      listNotes();
    },
  })
  .parse();

yargs(hideBin(process.argv))
  .command({
    command: "read",
    describe: "read your existing note",
    builder: {
      title: {
        describe: "Provide the title of the note which you want to read",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      readNotes(argv.title);
    },
  })
  .parse();
