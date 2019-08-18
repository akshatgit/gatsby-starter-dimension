import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright"> Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a><br>
        Forked from: <a href="https://github.com/codebushi/gatsby-starter-dimension">Github</a></p>
        <ul className="icons">
            <li><a href="https://www.linkedin.com/in/akshat-sinha-568765167/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://www.facebook.com/akshat.sinha.5095" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://github.com/akshatgit" className="icon fa-github"><span className="label">GitHub</span></a></li>
        </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
