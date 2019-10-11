import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/dev.jpg'
import pic03 from '../images/articles.jpg'

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
          <p>I am a SRE by profession working at <a href="https://media.net">Media.Net</a>.
          I have worked on the following as my SRE role. 
          </p>
          <ul>
            <li>Database: Redis, Mongo, MySQL</li>
            <li>Monitoring: Nagios, Icinga, Prometheus, JMXTrans</li>
            <li>CI/CD: Jenkins</li>
            <li>Pub/Sub: Kafka</li>
            <li>Big Data: Hadoop, Druid</li>
            <li>Web Server: Nginx</li>
            <li>Infrastructure Automation: Puppet</li>
            <li>Other: AWS, GCP, OpenVPN,  </li>
          </ul>
          <p>I am passionate about learning new backend technologies. Catch me if you have any interesting project to work on. </p>
          {close}
        </article>

        <article id="publication" className={`${this.props.article === 'publication' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Publication</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <table>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Publication Date</th>
            </tr>
            <tr>
              <td><a href="https://dblp.org/rec/conf/imc/YadavSGSC18"> Where The Light Gets In: Analyzing Web Censorship Mechanisms in India</a></td>
              <td>Research</td>
              <td>2018</td>
            </tr>
            <tr>
              <td><a href="https://dblp.org/rec/conf/icvgip/SethiSAAG16"> Deep neural networks for segmentation of basal ganglia sub-structures in brain MR images</a></td>
              <td> Research </td>
              <td>2016</td>
            </tr>
            <tr>
              <td><a href="https://www.geeksforgeeks.org/socket-programming-cc/"> Socket Programming in C/C++</a></td>
              <td> Technical Article </td>
              <td>2016</td>
            </tr>
            <tr>
              <td><a href="https://www.geeksforgeeks.org/linux-kernel-module-programming-hello-world-program/"> Linux Kernel Module Programming</a></td>
              <td> Technical Article </td>
              <td>2016</td>
            </tr>
          </table>
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
            </div>
            <div>
              <input type="text" name="_gotcha" style={{display:'none'}} />
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
