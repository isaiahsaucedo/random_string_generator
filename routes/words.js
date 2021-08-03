// Random String Generator
// Author @isaiahsaucedo

const router = require('express').Router() 
const fs = require('fs');

const dataPath = './static/english.json'

// only need to read 

// read

router.route('/randomword').get((req, res) => {

    var stringArray = []

    
    // sends a single random string to the /api/randomword endpoint
    fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
            throw err;
            }
    
            stringArray = JSON.parse(data)

            let length = stringArray.english.length
            // obtain random index 
            var random_index = Math.floor(Math.random() * Math.floor(length))

            let random_string = stringArray.english[random_index]

            res.json({word: random_string})
            res.status(200)
        });
    
        
    

})


module.exports = router;