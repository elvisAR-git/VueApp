const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get posts


router.get('/', async (req,res)=>{
    console.log("loading")
    data = await loadPostCollection()
    data = await data.find({}).toArray()
    res.send(data)
})

// add posts
router.post('/', async(req, res)=>{
    const posts = await loadPostCollection()
    await posts.insertOne(
        {
            text:req.body.text,
            time: new Date()
        }
    );
    res.status(201).send()
})

// delete posts
router.delete('/:id',async(req,res)=>{
    const posts = await loadPostCollection()
    await posts.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    })
    res.status(200).send()
})



// get specific posts

router.get('/:id', async(req, res)=>{
    const posts = await loadPostCollection()
    // function that tryies to fetch the post Asyncronously
    async function getPost(){
        try {
            // fallback incase of success
            post = await posts.findOne({
                _id : new mongodb.ObjectID(req.params.id)
            })
            return post
        } catch (error) {
            // fallback incase the request is not found
            return 404
        }
    }

    data = await getPost()
    if (data == 404){
        res.status(404).send()
    }else{
        res.status(200)
        res.send(data)
    }

    
    
})


async function loadPostCollection(){
    const client = await mongodb.MongoClient.connect(
        "mongodb://localhost/",
        {
            useNewUrlParser:true,
            useUnifiedTopology: true
        }
    )
    return client.db('test').collection('posts')
}

module.exports = router