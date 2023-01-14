const path = require('path');
const csv = require('csvtojson');

let file1 = path.join(__dirname, './_bulk.csv');

async function main(){
    try{
        let jsonArray = await csv().fromFile(file1);
        console.log(jsonArray);
    }catch(err){
        console.log(err);
    }
};
main();