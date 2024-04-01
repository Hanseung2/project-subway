import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ toggleMenu }) => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <span>실시간 서울시</span>
                <span>지하철의 지연</span>
                <span>예측 서비스</span>
            </Link>
        </h1>
    )
}

export default Logo