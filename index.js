const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())

app.use(cors())

const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'Blackcoffe';

async function main() {
  await client.connect();
  console.log('Connected successfully to server')
  const db = client.db(dbName);
  const collection = db.collection('DataVisualization')
  
  
  const findResult = await collection.find({}).toArray()

app.get('/given',(req,res)=>{
    res.send(findResult)
})

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());





  




app.listen(3001,()=>{
    console.log("localhost:3001 running")
})