/*
    I have used axios for its promised based API
    Bonus: it automatically parses the JSON output
*/
const axios = require('axios')

/*
    I am perfectly aware that using 'await' like below
    is 'dangerous'
        because
            if an error occurs 
            or something goes wrong
            it will halt the script
        this is why
            'get' function will
            always resolve!

    I am aware I could potentially use
        Promise.all to resolve it as well
*/
async function main(urls) {

    let res = []

    for ( let u in urls ){

        let url = urls[ u ]
        res.push( await get(url) )

    }

    return res

}

/*
    This function will always resolve
    If an invalid URL is encountered
        or something does not return
            it simply returns 
                an error
                and the developer
                can deal accordingly.
*/
async function get(url) {
    
    let obj = {
        url
        , res: null
        , e: false
    }

    try {
        
        let res = await axios.get(url)
        obj.res = res

    } catch (e) {
        
        obj.e = e

    }

    return obj

}

module.exports = main

