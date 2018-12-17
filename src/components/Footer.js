import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    const FooterBase = styled.footer`
        background-color: #01579b;
        color: #FFF;
        & .copyright {
            text-align: center;
            font-size: 0.8rem;
        }
    `

    return (
        <FooterBase className="uk-padding-small">
            <div className="uk-container uk-container-small">
                <p className="copyright">&copy;2017 不定期更新症候群</p>
            </div>
        </FooterBase>
    )
}

export default Footer