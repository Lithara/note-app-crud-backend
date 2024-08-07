const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title for the note"],
    },
    description: {
      type: String ,
      required: [true, "Please enter note description"],
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
