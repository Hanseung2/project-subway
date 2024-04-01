import React from 'react';
import Main from '../components/section/Main';

const Signup = () => {
    return (
        <Main title="회원가입" description="회원가입 페이지">
            <div className="form-container">
                <form className="signup-form">
                    <h2>회원가입</h2>
                    <div className="form-group">
                        <label htmlFor="username">사용자 이름</label>
                        <input type="text" id="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">비밀번호 확인</label>
                        <input type="password" id="confirmPassword" required />
                    </div>
                    <button type="submit">회원가입</button>
                </form>
            </div>
        </Main>
    );
}

export default Signup;