import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import '../css/header.css'

const Header = () => {
    return (
        <div className="head">
            <div class="head-stream">
                <Link to="/" class="head-stream" >Streamy</Link>
            </div>
            <div class="head-all">
                <Link to="/" class="head-stream">All Streams</Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header
