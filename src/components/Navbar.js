import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons);

const Header = styled.header`
  height: 150px;
`

const Title = styled.h1`
  font-size: 1.7rem;
  color: #56AFE2;
`

const Navbar = class extends React.Component {
  render() {
    return (
      <Header className="uk-container uk-padding">
        <Title className="uk-text-center"><Link to="/">不定期更新症候群</Link></Title>
        <div className="uk-text-center" uk-margin="true">
          <Link to="/" uk-icon="icon: github" className="uk-margin-small-left uk-margin-small-right"></Link>
          <Link to="/" uk-icon="icon: twitter"></Link>
        </div>
        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
            <div className="uk-navbar-center">
                <ul className="uk-navbar-nav">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/" className="">TECH LOG</Link></li>
                    <li><Link to="/" className="">BOOKS</Link></li>
                    <li><Link to="/" className="">OTHERS</Link></li>
                    <li><Link to="/" className="">ARCHIVES</Link></li>
                    <li><Link to="/" className="">ABOUT</Link></li>
                </ul>
            </div>
        </nav>
      </Header>
  )}
}

export default Navbar
