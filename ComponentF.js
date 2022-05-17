import React from 'react'
import {useContext} from './App'

function ComponentF() {
    return (
        <div>
            <useContext.Consumer>
                {
                    user => {
                        return<div>User Context value is {user}</div>
                    }
                }
            </useContext.Consumer>
        </div>
    )
}

export default ComponentF
