import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../img/inomar_logo.png'
import { FaTwitter, FaGithub } from "react-icons/fa";


const Header = styled.header`

`

const Title = styled.h1`
  font-size: 1.7rem;
  color: #56AFE2;
`

const LogoImage = styled.img`
  width: 450px;
`

const NavList = styled.ul`
  flex-wrap: wrap;
  & li {
    margin-bottom: 5px;
  }
  & a {
    min-height: 0 !important;
  }
`

const Navbar = class extends React.Component {
  render() {
    return (
      <Header className="uk-container uk-padding">
        <Title className="uk-text-center"><Link to="/"><LogoImage src={Logo} alt="不定期更新症候群"/></Link></Title>
        <div className="uk-text-center" uk-margin="true">
            <a href="https://github.com/inomar" className="uk-margin-small-left uk-margin-small-right" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://twitter.com/macoto_chan" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
            <div className="uk-flex uk-flex-center">
                <NavList className="uk-navbar-nav uk-margin-top">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/tags/tech-log/" className="">TECH LOG</Link></li>
                    <li><Link to="/tags/books/" className="">BOOKS</Link></li>
                    <li><Link to="/tags/others/" className="">OTHERS</Link></li>
                    <li><Link to="/tags/archives/" className="">ARCHIVES</Link></li>
                    <li><Link to="/about/" className="">ABOUT</Link></li>
                </NavList>
            </div>
        </nav>
      </Header>
  )}
}

export default Navbar
