const requestMultipleUrls = require('./request-multiple-urls')

/*
    First three are JSON types
    Fourth is invalid URL
    Fifth is an HTML type
    Sixth is plain garbage
*/
let urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json'
    , 'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json'
    , 'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
    , 'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json222'
    , 'https://google.co.uk'
    , 'hjdhasdkjdskad'
]

/*
    This will always resolve
    It will not reject!

    Even if an invalid URL is encountered
        it will just return 
            the error encountered

            with this approach:
                Developer can handle however
                developer wishes to deal with

                In future:
                    Configurations or options could be 
                    used so only
                        valid urls are returned or
                        all valid urls are in one array
                        and invalid urls in one array
*/
requestMultipleUrls( urls )
    .then( res => {

        for ( let u in res ) {

            let url = res[ u ]
            console.log( 'GET:', url.url )
            if ( url.res ) {

                console.log( 'Status:', url.res.status )
                console.log( 'Status Text:', url.res.statusText )
                console.log( 'Data:' )
                console.log( '      ', JSON.stringify( url.res.data, null, 4 ) )

            } else console.log( 'The above ^URL^ is invalid or did not return any response . . .' )
            console.log( '================================\n' )

        }

    })

