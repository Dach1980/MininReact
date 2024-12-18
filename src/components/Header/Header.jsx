import { useState } from 'react'
import logo from '/logo-name.svg'
import {styled} from 'styled-components'
// import '../Header/Header.css'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`

function Header() {
    const [now, setNow] = useState(new Date())
    // const now = new Date()

    setInterval(() => setNow(new Date()), 1000)

    return (
        <HeaderContainer>
            <img src={logo} alt={'Result'} />

            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </HeaderContainer>
    )
}

export default Header
