import React from 'react'
import Type from './Type'


export const Types = ({types}) => {
    return (
        <>
            
            {types.map((item)=><Type key={item.type.name} typeName={item.type.name} />)}
        </>
    )
}
