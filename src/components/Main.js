import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

import resume from '../pdfs/resume.pdf'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Under development</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Under development</p>
          {close}
        </article>

        <article id="publication" className={`${this.props.article === 'publication' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Publication</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Under development</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/akshat.snh28@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Your Email</label>
              <input type="text" name="_replyto" id="email" />
              <input type="text" name="_gotcha" style="display:none" />
              <input type="hidden" name="_subject" value="New Mail from site!" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/akshat-sinha-568765167/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://www.facebook.com/akshat.sinha.5095" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://github.com/akshatgit" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}

        </article>
          <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resume</h2>
          <iframe src={resume} width="100%" height="700px">
          </iframe>
          {close}
        </article>
        {close}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
