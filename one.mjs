        import threeCommasAPI from '3commas-api-node'
        import express from 'express'
        
        const api1 = new threeCommasAPI({
   
            apiKey: '35c1fd4032924b3aad132a6d135294f8192816f541da44039dcea439f3e6cce3',
            apiSecret: '25d7622eb5df82eace388295ab8872cdd6b6ea89dfb66bd31dde8ae26cd904c9f32511bdb166baa5b3ac8ddfb181d79e838636ec6baf929a454ad1e96d67e5ffa8d98091d9d51b044122c43638ea0a473688e48832d3a28ba81777bf965a23c5d37b1825',
          
        })
        
        const api2 = new threeCommasAPI({
       
            apiKey: '4d92b7d77e504372aa71127afca240acf546cf35d70a4dc79d8cc97b85a397c2',
            apiSecret: '43c7fe02916ed459d08b03ef3b45315168a2487e15eedbb34a6fc6a7cd37923c7cfc5d59f120daf2d351e9869bfcef2bc49e40828306f21c1179c229d799afde6862d16d255baca141d36ec3619e37963c66b2e72c3ca0555c3b040b4efee9dccd6d430a',
          
        })
        
        const app = express()
        
        app.get('/api/balances', async (req, res) => {
          let ids = [32208556, 32178454]
          const results = []
        
          for (let i = 0; i < ids.length; i++) {
            const account = await api1.accountLoadBalances(ids[i])
            if (account) {
              results.push({
                name: account.name,
                balance: Math.floor(account.primary_display_currency_amount.amount),
                api_field: ids[i]
              })
            } else {
              results.push({
                name: ids[i],
                balance: 0,
                api_field: ids[i]
              })
            }
          }
        
          ids = [32268993, 31876293]
          for (let i = 0; i < ids.length; i++) {
            const account = await api2.accountLoadBalances(ids[i])
            if (account) {
              results.push({
                name: account.name,
                balance: Math.floor(account.primary_display_currency_amount.amount),
                api_field: ids[i]
              })
            } else {
              results.push({
                name: ids[i],
                balance: 0,
                api_field: ids[i]
              })
            }
          }
        
          res.json(results)
        })
        
        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => {
          console.log(`Server listening on port ${PORT}.`)
        })
    