import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Piya</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'hello',className:'dummy'},React.createElement('h1',null,'Hola Piya'));
}

export default Hello