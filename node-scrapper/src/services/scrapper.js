const fs = require('fs')
const rp = require('request-promise');
const cheerio = require('cheerio')
const axios = require('axios')
const API = 'http://books.toscrape.com/catalogue/category/books/mystery_3/index.html'
const sc = require("./scrapedBooks.json")
const { json } = require('body-parser')
var request = require("request"); 
const got = require('got');


const dAPI = 'https://www.daraz.com.bd/catalog/?q='
const aAPI = 'https://www.aadi.com.bd/search/?q='
const biAPI = 'https://blucheez.com.bd/search?page=1&q='



const scrapperScript = async (pr) => {
    try {
      let daAPI = dAPI + pr
      let aaAPI = aAPI + pr
      let blAPI = biAPI + pr


      const scrapedDataD = []
      const scrapedDataA = []
      const scrapedDataB = []
      const js = []
      
      try{
          
        
        let res = await got(daAPI).text()
       // console.log(res)
         
        
         
            
              // writing the response to a file named data.html
              $ = cheerio.load(res) 
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
              js.push({name:'daraz',p: scrapedDataD })
              
              
              
              
            
            
          
      
      }
      catch(er){
        console.log(er)
        const scrapItemD = { title: er.message, price: '', url: '', img: ''}
        scrapedDataD.push(scrapItemD)
      }  

      
      
      
      
      try{
        const { data:dataA }  = await axios.get(aaAPI)

        $ = cheerio.load(dataA) 
       
        var dt = $("div > .single-product")
        
                  
        dt.each(el=>{
          const scrapItemA = { title: '', price: '', url: '', img: ''}
           
          let t = $(dt[el]).children('div').children("h3").children('a').text()
          let u = $(dt[el]).children('div').children("h3").children('a').attr('href')
          let p = $(dt[el]).find(" span > #product_detail_price_tag_span").attr("data-price")
          let img = $(dt[el]).find("figure > img").attr("data-src")

          scrapItemA.title = t
          scrapItemA.price = p
          scrapItemA.url = "https://aadi.com.bd/"+u
          scrapItemA.img = img 


          scrapedDataA.push(scrapItemA)
          
          
         }
        )
      }
      catch(er){
        console.log(er)
        const scrapItemA = { title: er.message, price: '', url: '', img: ''}
        scrapedDataA.push(scrapItemA)

      }
        js.push({name:'aadi', p: scrapedDataA })


      //bluecheeze
      
      try{
        const dataB  = await got(blAPI).text()

        $ = cheerio.load(dataB, { xmlMode: true}) 
         
        var dt = $("div > .product-inner")
              
        dt.each(el=>{
          const scrapItemB = { title: '', price: '', url: '', img: ''}
          console.log($(dt[el]).children("div > .product-image").children("noscript").children("img"))
          let t = $(dt[el]).children('div > .product-info').find('h3').text()
          let u = $(dt[el]).find("div > .product-image").attr("data-rendert4s")
          let p = $(dt[el]).find(".price").text()
          let img = $(dt[el]).find("img").attr("src")

          
          scrapItemB.title = t
          scrapItemB.price = p
          scrapItemB.url = "https://blucheez.com.bd"+u
          scrapItemB.img = img 

          console.log(scrapItemB)


          console.log("\n end \n ...")
          scrapedDataB.push(scrapItemB)
          
         }
        )
      }
      catch(er){
        console.log(er)
        const scrapItemB = { title: er.message, price: 'ERROR', url: '', img: ''}
        scrapedDataB.push(scrapItemB)

      }
      js.push({name:'Bluecheez', p: scrapedDataB })

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