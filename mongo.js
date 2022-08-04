const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
} else if (process.argv.length === 4) {
    console.log('Please provide name and phone number as arguments: node mongo.js <password> <name> <phone number>')
    process.exit(1)
}

let listContacts = false
if (process.argv.length === 3) {
    listContacts = true
}

const database = "phonebook"

const password = process.argv[2]
const name = process.argv[3]
const phoneNumber = process.argv[4]

const url = `mongodb+srv://keywell:${password}@cluster0.wg8uc.mongodb.net/${database}?retryWrites=true&w=majority`

const contactSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
})

const Contact = mongoose.model('Contact', contactSchema)

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')

    if (!listContacts) {
        const contact = new Contact({
          name: name,
          phoneNumber: phoneNumber,
        })

        return contact.save()
    } else {
        return null
    }
  })
  .then(() => {
    if (listContacts) {
        Contact.find({}).then(result => {
            console.log(`${database}:`)
            result.forEach(contact => {
                console.log(`${contact.name} ${contact.phoneNumber}`)
            })
        })
    } else {
        console.log(`added ${name} number ${phoneNumber} to ${database}`)
    }
    return mongoose.connection.close()
  })
  .catch((err) => console.log(err))