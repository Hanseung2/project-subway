import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ toggleMenu }) => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em aria-hidden='true' onClick={toggleMenu}></em>
                <span>실시간 서울시<br /> 지하철의 지연<br /> 예측 서비스<br /></span>
            </Link>
        </h1>
    )
}

export default Logo