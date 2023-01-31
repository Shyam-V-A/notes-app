const fs = require('fs')
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')


// const validator = require('validator')


// //fs.writeFileSync('notes.txt','this file was created by node js')
// fs.appendFileSync('notes.txt','My name is Shyam')
// const add = require('./utils.js')

// const name = 'Shyam'

// const sum = add(4,-1)

// console.log(sum)


// notes = getNotes()

// console.log(notes)

// //console.log(validator.isEmail('shyam@gmail.com'))
// console.log(validator.isURL('HTTPS://123.45.43.2'))


// console.log(chalk.green.bold.inverse.bgWhite("Success"))
//console.log(process.argv)

// const command = process.argv[2]

// if(command === 'add'){
//     console.log('notes added')
// }
// else if(command === 'remove'){
//     console.log('removed successfully')
// }


yargs.version('1.1.0')


//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title:{
            describe: 'notes title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'body of the notes',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title:{
            describe: 'notes title',
            demandOption: true,
            type:'string'
        },
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
//console.log(yargs.argv)



yargs.parse()