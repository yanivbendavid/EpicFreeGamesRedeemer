require('./src/redeem').redeem()
.then(res=>{console.log('yofi!')})
.catch(err=>console.error(err.message))
