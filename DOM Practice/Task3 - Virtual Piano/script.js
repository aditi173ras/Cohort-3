const pianoNotes = [
  {
    note: "C",
    key: "A",
    audio: "Audio/C.wav",
    type: "white",
  },
  {
    note: "D",
    key: "S",
    audio: "Audio/D.wav",
    type: "white",
  },
  {
    note: "C",
    key: "K",
    audio: "Audio/C.wav",
    type: "white",
  },
  {
    note: "D",
    key: "L",
    audio: "Audio/D.wav",
    type: "white",
  },
  {
    note: "E",
    key: "M",
    audio: "Audio/E.wav",
    type: "white",
  },
  {
    note: "E",
    key: "D",
    audio: "Audio/E.wav",
    type: "white",
  },
  {
    note: "F",
    key: "F",
    audio: "Audio/F.wav",
    type: "white",
  },
  {
    note: "G",
    key: "G",
    audio: "Audio/G.wav",
    type: "white",
  },
  {
    note: "A",
    key: "H",
    audio: "Audio/A.wav",
    type: "white",
  },
  {
    note: "B",
    key: "J",
    audio: "Audio/B.wav",
    type: "white",
  },
  {
    note: "C#",
    key: "W",
    audio: "Audio/Csharp.wav",
    type: "black",
  },
  {
    note: "D#",
    key: "E",
    audio: "Audio/Dsharp.wav",
    type: "black",
  },
  {
    note: "F#",
    key: "T",
    audio: "Audio/Fsharp.wav",
    type: "black",
  },
  {
    note: "G#",
    key: "Y",
    audio: "Audio/Gsharp.wav",
    type: "black",
  },
  {
    note: "A#",
    key: "U",
    audio: "Audio/Asharp.wav",
    type: "black",
  },
  {
    note: "C#",
    key: "O",
    audio: "Audio/Csharp.wav",
    type: "black",
  },
  {
    note: "D#",
    key: "P",
    audio: "Audio/Dsharp.wav",
    type: "black",
  },
];


const body = document.body

body.addEventListener('keydown', (elem)=>{
  let key = elem.key.toUpperCase()

  let pressedKey = pianoNotes.find((note)=>{
    return note.key === key
  })
  const audio = new Audio(pressedKey.audio);
  audio.play();

  let noteKey = document.querySelector(`.${key}`)
  noteKey.classList.add('active')

  setTimeout(()=>{
    noteKey.classList.toggle('active')
  },100)
  
})









// body.addEventListener("keydown", (elem) => {
//   const key = elem.key.toUpperCase();

//   const pressedNote = pianoNotes.find((note) =>{
//     note.keyboard === key
//   });

//   if (!pressedNote) {
//     return;
//   }
//   // Play audio
//   const audio = new Audio(pressedNote.audio);
//   audio.play();
//   // Find the HTML piano key
//   const pianoKey = document.querySelector(
//     `[data-key="${key}"]`
//   );
//   // Add active class
//   pianoKey.classList.add("active");
//   // Remove active class
//   setTimeout(() => {
//     pianoKey.classList.remove("active");
//   }, 100);

//   console.log(elem);

// });