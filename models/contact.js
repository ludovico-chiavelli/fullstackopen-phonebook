const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')  
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const contactSchema = new mongoose.Schema({
    name: {
       type: String,
       minLength: 3,
       required: true,
    },
    phoneNumber: {
        type: String,
        validate: {
            validator: function(v) {
                return /(^([0-9]{2}[-])[0-9]{6,})|(^([0-9]{3}[-])[0-9]{5,})/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
          },
        required: [true, 'User phone number required']
    }
})

contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Contact', contactSchema)