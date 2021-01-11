import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="topNav">
      <a className="topLinks" href="https://github.com/thebialy"> Github</a>
      <a className="topLinks" href="https://www.linkedin.com/in/andrew-tyler-hitchcock/"> Linkedin</a>
      <a className="topLinks" href="https://docs.google.com/document/d/e/2PACX-1vRQX0uw6MGwNZ1GZAUOUehb0xEBMEwuEjoAAGctIh2KyhxW0AWFvJ7Bqg3dEwCdZA63mS-es-xMdKkk/pub">Resume</a>
      <a className="topLinks"href="#contactMeContainer">Contact Me</a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Andrew Hitchcock Portfolio`,
}

export default Header