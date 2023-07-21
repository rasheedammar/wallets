
  
  import threeCommasAPI from '3commas-api-node'
import express from 'express'

const api1 = new threeCommasAPI({

  apiKey: '35c1fd4032924b3aad132a6d135294f8192816f541da44039dcea439f3e6cce3',
  apiSecret: '25d7622eb5df82eace388295ab8872cdd6b6ea89dfb66bd31dde8ae26cd904c9f32511bdb166baa5b3ac8ddfb181d79e838636ec6baf929a454ad1e96d67e5ffa8d98091d9d51b044122c43638ea0a473688e48832d3a28ba81777bf965a23c5d37b1825',


  // url: 'https://api.3commas.io' // this is optional in case of defining other endpoint
  // forcedMode: 'real' // this is optional in case of defining account mode, 'real' or 'paper'
})

const api2 = new threeCommasAPI({
 

  apiKey: '4d92b7d77e504372aa71127afca240acf546cf35d70a4dc79d8cc97b85a397c2',
  apiSecret: '43c7fe02916ed459d08b03ef3b45315168a2487e15eedbb34a6fc6a7cd37923c7cfc5d59f120daf2d351e9869bfcef2bc49e40828306f21c1179c229d799afde6862d16d255baca141d36ec3619e37963c66b2e72c3ca0555c3b040b4efee9dccd6d430a',

  // url: 'https://api.3commas.io' // this is optional in case of defining other endpoint
  // forcedMode: 'real' // this is optional in case of defining account mode, 'real' or 'paper'
})

const app = express()

app.get('/api1/balances', async (req, res) => {
  const ids = [ 32101201,31876293,32103676,32178454,32427154,32427107,32428979,32433201,32427159,31814867]
  //32101201 G9//31876293 G11//32103676 G14
  //32152427 G22//32178454 G24//32427154 G124 F//32427107 G122 //32428979 G66 //32433201 G67 //32427159 G125 //31814867 G13
  const results = []

  for (let i = 0; i < ids.length; i++) {
    const account = await api1.accountLoadBalances(ids[i])

    results.push({
      name: account?.name,
      balance: Math.floor(account?.primary_display_currency_amount?.amount),
      //api_field: ids[i]
    })
  }

  res.json(results.sort((account1, account2) => account2.balance - account1.balance));
})

app.get('/api2/balances', async (req, res) => {
  const ids = [ 32208556,32268993,32423648,32244363, 32244371 , 32423630 , 32435532 ]

 
  //32208556 G27 Bass F //32268993 G112 NAT02 //32423648 G103 IBR5
  
  //.BOT o h
  
  //32244363 G117 // 32244371 G118 // 32423630 G98 //32435532 G72

  const results = []

  for (let i = 0; i < ids.length; i++) {
    const account = await api2.accountLoadBalances(ids[i])

    results.push({
      name: account?.name,
      balance: Math.floor(account?.primary_display_currency_amount?.amount),
      //api_field: ids[i]
    })
  }

  res.json(results.sort((account1, account2) => account2.balance - account1.balance));

})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
})