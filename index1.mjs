import threeCommasAPI from '3commas-api-node'
import express from 'express'


const api = new threeCommasAPI({
  
  
  
  
//Name: Node  amm3ro.bot (1)
 apiKey: '4d92b7d77e504372aa71127afca240acf546cf35d70a4dc79d8cc97b85a397c2',
 apiSecret: '43c7fe02916ed459d08b03ef3b45315168a2487e15eedbb34a6fc6a7cd37923c7cfc5d59f120daf2d351e9869bfcef2bc49e40828306f21c1179c229d799afde6862d16d255baca141d36ec3619e37963c66b2e72c3ca0555c3b040b4efee9dccd6d430a',


//Name: Balance amm3ro (2)

  
  // url: 'https://api.3commas.io' // this is optional in case of defining other endpoint
  // forcedMode: 'real' // this is optional in case of defining account mode, 'real' or 'paper'



})

const app = express();
app.get('/accounts/bot', async (req, res) => {
  const ids = [

  //.BOT new
32208556,32268993,32423648,
//32208556 G27 Bass F //32268993 G112 NAT02 //32423648 G103 IBR5

//.BOT o h
32244363, 32244371 , 32423630 , 32257289 , 32257291 ,32345663  ,32403463
//32244363 G117 // 32244371 G118 // 32423630 G98 //32257289 G69 //32257291 G70 // 32345663 G71 //32403463 G73


//IRGHDCR+ALI+NAT+KAM02+RACH
//32244961,32244942,32270881,32270896,32268850,32274020,32240798,32240804,32273929
//32244961 G56 IRGHDCR//32244942 G57 HIMA
//32270881 G59 Ali01 //32270896 G32 Ali3
//32268850 G31 NAT01 //32274020 G42 kam02 //32245188 G60 Da02
//32240798 G61 Rach01 //32240804 G46 Rach02 //32273929 G35 RACHD3 

//FIR
//32280390,32280392,32405546,32405549,32410011,32245191,32260438
//1/32280390 G28 Da06-Fir01Bot F//2/32280392 G45 Da07-Fir02Bot F//3/32405546 G79 FIR03//4/32405549 G80 FIR04
//5/32410011 G81 FIR05//6/32245191 G54 Fir06//8/32260438 G37 FIR8 //13/G23 API2 //14/G24 API2
//FIR 0 BALANCE
//7/32260429 G30 //9/32244363  G52 //10/32244371 G53//11/32409964 G100 //12/32409951 G99

//HS API.BOT
//32221441,32221457,32237177,32208915,32263395,32258359,32258362,32258364,32258366,32258368,32273934
//2/32221441 G48//3/32221457 G39//4+5/G23+G24 FLY//6/32237177 g43//8/32208915 G26//11/32263395 G50
//12/32258359 G51//13/32258362 G58//14/32258364 G55//15/32258366 G44//16/32258368 G49//17/32273934 G47



//0 BALANCE
//32270891,  G29 ALI02//32260429, G30 Da04Bot//32276659, G34 MH01//32276725, G36 MH02//32276703, G38 H03
//32274018, G41 kam01//32244363, Ba02 F G52 //32244371, Ba03 F G53 //32409964, G100 ibr02bot F
//32409951, G99 ibr01bot F //32423633 G101 IBR03//32423644 G102 IBR04 

//----------------------------------------------------------------------------------------------------

  ]
  const results = []

  for(let id of ids) {
    const account = await api.accountLoadBalances(id);
    results.push({
      name: account?.name,
      balance: Math.floor(account?.primary_display_currency_amount?.amount)
    });
  }

  res.json(results.sort((account1, account2) => account2.balance - account1.balance));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});





//Name: Node  amm3ro.bot

  //apiKey: '4d92b7d77e504372aa71127afca240acf546cf35d70a4dc79d8cc97b85a397c2',
  //apiSecret: '43c7fe02916ed459d08b03ef3b45315168a2487e15eedbb34a6fc6a7cd37923c7cfc5d59f120daf2d351e9869bfcef2bc49e40828306f21c1179c229d799afde6862d16d255baca141d36ec3619e37963c66b2e72c3ca0555c3b040b4efee9dccd6d430a',

  












//fir
//13/32178452 G23
//14/32178454 G24




//32328745,32328742 , 32328740 , 32328735 , 32403463 , 32345663 , 32257291 ,32257289
//om+hj
//32328745 G78 Om04- F Bs05
//32328742 G77 Om03- F Bs04 
//32328740 G76 Om02- F Bs03
//32328735 G75 Om01- F Bs02 
//32403463 G73 Nh-Hou05Bot F
//32345663 G71 HjR03Bot F
//32257291 G70 HjR02Bot F 
//32257289 G69 HjR01Bot F 
//
//


//-----------------------------------------------------------------------------------------------

//Name: Balance amm3ro

  // apiKey: '35c1fd4032924b3aad132a6d135294f8192816f541da44039dcea439f3e6cce3',
  //apiSecret:'25d7622eb5df82eace388295ab8872cdd6b6ea89dfb66bd31dde8ae26cd904c9f32511bdb166baa5b3ac8ddfb181d79e838636ec6baf929a454ad1e96d67e5ffa8d98091d9d51b044122c43638ea0a473688e48832d3a28ba81777bf965a23c5d37b1825',
  
  
  //Access: Accounts: read;


//---------------------------------------------------------------------
