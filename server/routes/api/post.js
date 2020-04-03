const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get posts


router.get('/', async (req,res)=>{
    data = await loadPostCollection()
    data = await data.find({}).toArray()
    res.send(data)
})

// add posts


// delete posts




// update posts


async function loadPostCollection(){
    const client = await mongodb.MongoClient.connect(
        "mongodb+srv://alan:moraaelvis@cluster0-lhczw.mongodb.net/test?retryWrites=true&w=majority",
        {
            useNewUrlParser:true
        }
    )
    return client.db('sample_analytics').collection('customers')
}

module.exports = router