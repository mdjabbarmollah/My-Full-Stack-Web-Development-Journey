import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { MongoClient, ObjectId } from 'mongodb'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

const client = new MongoClient(process.env.Mongodb_Url)
const db = client.db('wanderlast')
const collection = db.collection('destination')

app.get('/', (req, res) => {
  res.send({ message: 'server is running' })
})
app.get("/destinations", async (req, res) => {
  const result = await collection.find().toArray()
  res.send(result)
})
app.get('/destinations/:id', async (req, res) => {
  const { id } = req.params
  const result = await collection.findOne({ _id: new ObjectId(id) })

  res.send(result)

})
app.post('/add-description', async (req, res) => {
  try {
    console.log('api called', req.body)
    const result = await collection.insertOne(req.body)
    res.send(result)

  }
  catch (error) {
    console.error('Insert failed:', error)
    res.status(500).send({ message: 'Failed to add package', error: error.message })
  }
})

app.put('/destinations/:id', async (req, res) => {
  const { id } = req.params
  const updatedData = req.body

  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedData }
  )

  res.send(result)
})

app.delete('/destinations/:id', async (req, res) => {
  const { id } = req.params
  const result = await collection.deleteOne({ _id: new ObjectId(id)})
  res.send(result)
})

 app.listen(PORT, () => {
console.log(`Server is running at ${PORT}`)
})
 

