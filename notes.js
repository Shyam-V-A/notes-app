const fs = require('fs')
const chalk = require('chalk')


//const notes = 'Your Notes...'
// const getNotes = () => notes

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((notes) => notes.title === title)
    // console.log(duplicateNotes)

    debugger

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("new notes added"))
    }
    else{
        console.log(chalk.red.inverse("title already taken...!"))
    }

    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.JSON",dataJSON)
}

const loadNotes = () =>  {
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }    
    catch(e){
        return []

    }
}

    const removeNote = (title) => {
    const notes = loadNotes()
    const keepNotes = notes.filter((notes) => notes.title !== title)

    if(notes.length > keepNotes.length){
        console.log(chalk.green.inverse("note removed successfully"))
    }
    else{
        console.log(chalk.red.inverse("no note with that title found...!"))
    }

    saveNotes(keepNotes)
    // const existsNotes = notes.filter(function (notes) {
    //     return notes.title === title
    // })

    // if(existsNotes.length === 0) {
        
    //     console.log("no note found with that title")
    // }
    // else{
    //     notes.pop({
    //         title: title,
    //     })
    //     saveNotes(notes)
    //     console.log("note with title", {title}, "removed successfully")
    // }

}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}