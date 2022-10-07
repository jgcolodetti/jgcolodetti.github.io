import React, { useEffect, useState } from 'react'
import { GlobalContext } from './GlobalContext'

export default function GlobalState(props) {
    const [onHome, setOnHome] = useState(false)
    const [onProjects, setOnProjects] = useState(false)

    const Provider = GlobalContext.Provider
    const values = {
        onHome,
        setOnHome,
        onProjects,
        setOnProjects
    }

    return (<Provider value={values}>{props.children}</Provider>)
}