import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'


const Home = () => {
    return (
        <Main 
            title = "지하철 노선도"
            description="서울시 지하철 지연 예측 서비스">
            <h1>팀 소개</h1>
            <Today />
            <Developer />
            
        </Main>
    )
}

export default Home