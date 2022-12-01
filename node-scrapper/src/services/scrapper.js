const fs = require('fs')
const cheerio = require('cheerio')
const axios = require('axios')
const API = 'http://books.toscrape.com/catalogue/category/books/mystery_3/index.html'
const sc = require("./scrapedBooks.json")
const { json } = require('body-parser')

const dAPI = 'https://www.daraz.com.bd/catalog/?q='
const aAPI = 'https://www.aadi.com.bd/search/?q='

const scrapperScript = async (pr) => {
    try {
      let daAPI = dAPI + pr
      let aaAPI = aAPI + pr

      const scrapedDataD = []
      const scrapedDataA = []

      try{

        let  { data }  = await axios.get(daAPI)
        
        $ = cheerio.load(data)
        
        
        var te = $("head > script")
      
        
        const DataBooks = te[3].lastChild.data.replace("window.pageData=","")
        
        let l = JSON.parse(DataBooks)
        let lItem = l.mods.listItems
        
        
        
        lItem.forEach(elem => {
          
          const scrapItemD = { title: '', price: '', url: '', img: ''}
          scrapItemD.title = elem.name
          scrapItemD.price = elem.price
          scrapItemD.url = elem.productUrl
          scrapItemD.img = elem.image
          scrapedDataD.push(scrapItemD)

        })
      }
      catch(er){
        const scrapItemD = { title: 'er.message', price: '', url: '', img: ''}
        scrapedDataD.push(scrapItemD)
      }  

      let js = []
      js.push({daraz: scrapedDataD })
      
      
      try{
        const { data:dataA }  = await axios.get(aaAPI)

        $ = cheerio.load(dataA) 
        // console.log($.html())
        var dt = $("div > .single-product")
        
                  
        dt.each(el=>{
          const scrapItemA = { title: '', price: '', url: '', img: ''}
           
          let t = $(dt[el]).children('div').children("h3").children('a').text()
          let u = $(dt[el]).children('div').children("h3").children('a').attr('href')
          let p = $(dt[el]).find(" span > #product_detail_price_tag_span").attr("data-price")
          let img = $(dt[el]).find("figure > img").attr("data-src")

          console.log(img)

          scrapItemA.title = t
          scrapItemA.price = p
          scrapItemA.url = "https://aadi.com.bd/"+u
          scrapItemA.img = img 


          console.log("\n end \n\n ...")
          scrapedDataA.push(scrapItemA)
          
         }
        )
      }
      catch(er){
        console.log(er)
        const scrapItemA = { title: er.message, price: '', url: '', img: ''}
        scrapedDataA.push(scrapItemA)

      }
        js.push({aadi: scrapedDataA })

        // te.forEach(elem => {
        //    console.log(elem.text)
        // })
       
       
      
      
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
      return JSON.stringify(js, null, 2)
      //return JSON.stringify(scrapedData, null, 2)
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