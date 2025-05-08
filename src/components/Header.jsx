import React from 'react'

const Header = ( props ) => {
    return (
        <header id="headerType" className={`header__wrap ${props.element}`}>
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">Highfive 🙌🏻 {/* <em>site</em> */}</a>
                </div>
                <nav className="header__menu">
                    <ul>
                    <li className="menu-item"><a href="/">마이 페이지</a></li>
                    <li className="menu-item"><a href="/">장바구니</a></li>
                    <li className="menu-item"><a href="/">공지사항</a></li>
                    </ul>
                </nav>
                <div className="header__member">
                    <a href="/">로그인</a>
                </div>
                <div className="header__member">
                <a href="/">회원가입</a>
                </div>
            </div>
        </header>
    )
}

export default Header