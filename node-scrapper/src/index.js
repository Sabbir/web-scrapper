const fs = require('fs')
const cheerio = require('cheerio')
const axios = require('axios')
const API =
  'http://books.toscrape.com/catalogue/category/books/mystery_3/index.html'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan') 

const app = express()

const v1ProductRouter = require("./v1/routes/productsRoute");


const scrapperScript = async () => {
  try {
    const { data } = await axios.get(API)
    const $ = cheerio.load(data)
    const DataBooks = $('.row li .product_pod')
    const scrapedData = []
    DataBooks.each((index, el) => {
      const scrapItem = { title: '', price: '' }
      scrapItem.title = $(el).children('h3').text()
      scrapItem.price = $(el)
        .children('.product_price')
        .children('p.price_color')
        .text()
      scrapedData.push(scrapItem)
    })
    console.dir(scrapedData)
    fs.writeFile(
      'result/scrapedBooks.json',
      JSON.stringify(scrapedData, null, 2),
      (e) => {
        if (e) {
          console.log(e)
          return
        }
        console.log('Scraping completed.')
      },
    )
    return JSON.stringify(scrapedData, null, 2)
  } catch (error) {
    console.error(error)
  }
}

app.use(helmet())
app.use(bodyParser.json())

// enabling CORS for all requests
app.use(cors())

// adding morgan to log HTTP requests
app.use(morgan('combined'))

app.get('/', (req, res) => {

  scrapperScript().then((e)=> {
    //the promise is resolved here
    res.send(e)
  }).catch(console.error.bind(console))
})

app.use("/api/v1/products", v1ProductRouter);



// starting the server
app.listen(3010, () => {
  console.log('listening on port 3010');
});
