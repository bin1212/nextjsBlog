const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
console.log(PHASE_DEVELOPMENT_SERVER,'PHASE_DEVELOPMENT_SERVER')
module.exports = (phase, { defaultConfig }) => {
    console.log(phase,'phase')
    // if (phase === PHASE_DEVELOPMENT_SERVER) {
    //     return {
    //     /* development only config options here */
    //     }
    // }

    return {
        env: {
            customKey: 'my-value121',
          },
          output:"standalone"
        /* config options for all phases except development here */
    }
}