import React, {useEffect, useState} from "react";
import { useLocation} from 'react-router-dom'
import { pageTitle } from '../../config/index.jsx'

export default function Header(props) {
    const [title, setTitle] = useState('首页')
    const {pathname='/'} = useLocation()
    console.log(location)
    useEffect (() => {
        let _title = pageTitle[pathname] ||'';
        setTitle(_title)
    })
    return (
        <header>{title}</header>
    )
}