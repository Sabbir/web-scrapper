const fs = require('fs')
const cheerio = require('cheerio')
const axios = require('axios')
const API = 'http://books.toscrape.com/catalogue/category/books/mystery_3/index.html'
const sc = require("./scrapedBooks.json")

const dAPI = 'https://www.daraz.com.bd/catalog/?q='

const scrapperScript = async (pr) => {
    try {
      let daAPI = dAPI + pr
      const { data } = await axios.get(daAPI)
      const $ = cheerio.load(data)
      // console.log($.html())
      
      var te = $("head > script")
     
      
      const DataBooks = te[3].lastChild.data.replace("window.pageData=","")
      
      let l = JSON.parse(DataBooks)
      let lItem = l.mods.listItems
      const scrapedData = []
      lItem.forEach(elem => {
        const scrapItem = { title: '', price: '', url: '', img: ''}

        scrapItem.title = elem.name
        scrapItem.price = elem.price
        scrapItem.url = elem.productUrl
        scrapItem.img = elem.image
        scrapedData.push(scrapItem)

      })
      
      
      //console.dir(scrapedData)
      // fs.writeFile(
      //   './result/scrapedBooks.json',
      //   JSON.stringify(scrapedData, null, 2),
      //   (e) => {
      //     if (e) {
      //       console.log(e)
      //       return
      //     }
      //     console.log('Scraping completed.')
      //   },
      // )
      return JSON.stringify(scrapedData, null, 2)
    } catch (error) {
      console.error(error)
    }
  }

  const getAllProducts = (pr) => {
    return scrapperScript(pr).then((e)=> {
        //the promise is resolved here
        
        return e
      }).catch(console.error.bind(console))
  }

  const getAllProductsJSON = () => {
    return sc
  }

  module.exports = {
                        
                    getAllProducts,
                    getAllProductsJSON,
                   }