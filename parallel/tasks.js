const util = require('util')
const sleep = util.promisify(setTimeout)

module.exports = {
    async taskOne(){
        try{
            await sleep(4000)
            return 'One Value'
        }catch(err){
            console.log(err)
        }
        
    },
    async taskTwo(){
        try{
            await sleep(2000)
            return 'One Two'
        }catch(err){
            console.log(err)
        }
    } 
}