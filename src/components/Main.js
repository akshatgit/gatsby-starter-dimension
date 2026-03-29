import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/uw.jpg'
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
          <p>
            Network security professional and Senior Software Engineer on the Site Reliability Team at Rubrik, based in California.
            I have a keen interest in distributed computing, networks, and security.
          </p>
          <h3>Education</h3>
          <p>
            <strong>University of Wisconsin-Madison</strong> — MS, Computer Science (Jan 2021 – Dec 2022)<br />
            CS Departmental Scholarship &amp; guaranteed funding · GPA: 4.0/4.0
          </p>
          <p>
            <strong>IIIT Delhi</strong> — BTech, Computer Science (Aug 2014 – May 2018)<br />
            GPA: 8.76/10.0
          </p>
          <h3>Technical Skills</h3>
          <p><strong>Languages:</strong> Python, C/C++, Bash, Java</p>
          <p><strong>Web &amp; Infra:</strong> gRPC, Kafka, Redis, HA-Proxy, Nginx, Zookeeper, MongoDB, MySQL, Flask, Socket.io</p>
          <p><strong>Tools:</strong> Linux, Docker, Kubernetes, AWS, GCP, Git, Grafana, Jenkins, Prometheus, Puppet, Nomad, Consul, Hadoop, Spark, Graphite, Icinga</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>

          <h3>Senior Software Engineer, SRE — <a href="https://www.rubrik.com">Rubrik</a></h3>
          <p><em>Aug 2023 – Present · Palo Alto, CA</em></p>
          <ul>
            <li><strong>Observability as Code Platform</strong> (Terraform): Spearheaded migration of observability assets for 50+ teams into IaC, leading 3 SREs over 4 quarters. Designed reusable workflows, validations, and alert templates.</li>
            <li><strong>Capacity Planning</strong> (Jenkins, Kubernetes): Conducted capacity planning for the company-wide Jenkins cluster, cutting build queue delays by 30% and reducing pod scheduling failures.</li>
            <li><strong>Automated Remediation Framework</strong> (StackStorm): Led design and rollout of a secure auto-remediation framework, reducing MTTR by automating repetitive fixes with least-privilege access controls.</li>
            <li><strong>On-Call &amp; Incident Response</strong>: Consistently recognized for high on-call performance — led resolution of critical production incidents, published external status page updates, and debugged complex Kubernetes issues under pressure.</li>
            <li><strong>AI-Driven Tools</strong> (LLMs, Slack APIs, GenAI): Built a Slack summarizer with role-specific contexts (manager vs. on-call engineer) and a generative AI-powered documentation translator.</li>
          </ul>

          <h3>Site Reliability Engineer — <a href="https://www.tiktok.com">TikTok USDS</a></h3>
          <p><em>Dec 2022 – Aug 2023 · Mountain View, CA (Hybrid)</em><br />
          Video Architecture Team</p>
          <ul>
            <li><strong>Nodes Management</strong> (Kubernetes, Python): Automated new node deployment pipeline using GitOps and Python, reducing end-to-end deployment time from 3–4 hours to minutes.</li>
          </ul>

          <h3>Production Engineer Intern — <a href="https://about.meta.com">Meta (Facebook)</a></h3>
          <p><em>May 2022 – Aug 2022 · Menlo Park, CA</em><br />
          Payments Team</p>
          <ul>
            <li>Built a distributed transaction settlement service (Python, MySQL, RPC) to aggregate fintech provider logs, deployed on Meta's container orchestration system.</li>
          </ul>

          <h3>Site Reliability Engineer — <a href="https://www.media.net">Media.Net (Directi)</a></h3>
          <p><em>Jun 2018 – Dec 2020 · Mumbai, India</em><br />
          Ads Serving Team</p>
          <ul>
            <li><strong>Infrastructure Security</strong>: Built and deployed a vulnerability detection system (Wazuh + ElasticSearch), fixing 1000+ system-level issues across the fleet.</li>
            <li><strong>Resource Orchestration</strong> (Docker, Kubernetes, Nomad): Migrated 10+ legacy applications to Kubernetes/Nomad, cutting infra costs by 50%.</li>
            <li><strong>Monitoring Enhancement</strong> (Prometheus, Grafana, Nagios): Enhanced monitoring stack to support mission-critical SLAs and mentored junior engineers.</li>
          </ul>

          <h3>Projects</h3>
          <p><strong>New Strongly Consistent Protocol on Kafka</strong> — Implemented a new strongly consistent protocol for publishing messages to a Kafka cluster. Achieves performance comparable to weaker consistency models while guaranteeing linearizability. Ongoing research project.</p>

          {close}
        </article>

        <article id="publication" className={`${this.props.article === 'publication' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Publication</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <table>
            <tr>
              <th>Name</th>
              <th>Venue</th>
              <th>Year</th>
            </tr>
            <tr>
              <td><a href="https://www.usenix.org/conference/usenixsecurity22/presentation/patel">Using Trātṛ to Tame Adversarial Synchronization</a><br/><small>Yuvraj Patel, Chenhao Ye, Akshat Sinha, Abigail Matthews, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau, Michael M. Swift</small></td>
              <td>USENIX Security '22</td>
              <td>2022</td>
            </tr>
            <tr>
              <td><a href="https://doi.org/10.1145/3278532.3278555">Where The Light Gets In: Analyzing Web Censorship Mechanisms in India</a><br/><small>Tarun Kumar Yadav, Akshat Sinha, Devashish Gosain, Piyush Kumar Sharma, Sambuddho Chakravarty</small></td>
              <td>IMC 2018</td>
              <td>2018</td>
            </tr>
            <tr>
              <td><a href="https://doi.org/10.1145/3009977.3010048">Deep Neural Networks for Segmentation of Basal Ganglia Sub-Structures in Brain MR Images</a><br/><small>Akshay Sethi, Akshat Sinha, Ayush Agarwal, Chetan Arora, Anubha Gupta</small></td>
              <td>ICVGIP 2016</td>
              <td>2016</td>
            </tr>
            <tr>
              <td><a href="https://www.geeksforgeeks.org/socket-programming-cc/">Socket Programming in C/C++</a></td>
              <td>GeeksForGeeks</td>
              <td>2016</td>
            </tr>
            <tr>
              <td><a href="https://www.geeksforgeeks.org/linux-kernel-module-programming-hello-world-program/">Linux Kernel Module Programming</a></td>
              <td>GeeksForGeeks</td>
              <td>2016</td>
            </tr>
          </table>
          {close}
        </article>

        <article id="service" className={`${this.props.article === 'service' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Service</h2>

          <h3>Artifact Reviewing</h3>
          <ul>
            <li><strong>OOPSLA 2026</strong> — Artifact Evaluation Committee Reviewer</li>
            <li><strong>MLSys 2026</strong> — Artifact Evaluation Committee Reviewer</li>
          </ul>

          <h3>CVE Discoveries</h3>
          <p>Identified and responsibly disclosed security vulnerabilities in open source AI/ML projects:</p>
          <table>
            <tr>
              <th>CVE</th>
              <th>Project</th>
              <th>Severity</th>
              <th>Description</th>
            </tr>
            <tr>
              <td><a href="https://github.com/langflow-ai/langflow/security/advisories/GHSA-g2j9-7rj2-gm6c">CVE-2026-33309</a></td>
              <td>Langflow</td>
              <td>Critical (10.0)</td>
              <td>Arbitrary file write via path traversal in v2 file upload API, enabling Remote Code Execution</td>
            </tr>
            <tr>
              <td><a href="https://github.com/langflow-ai/langflow/security/advisories/GHSA-7grx-3xcx-2xv5">CVE-2026-33484</a></td>
              <td>Langflow</td>
              <td>High (7.5)</td>
              <td>Unauthenticated IDOR on image download endpoint allowing data exposure in multi-tenant deployments</td>
            </tr>
            <tr>
              <td><a href="https://github.com/open-webui/open-webui/security/advisories/GHSA-vvxm-vxmr-624h">CVE-2026-28786</a></td>
              <td>Open WebUI</td>
              <td>Moderate (4.3)</td>
              <td>Path traversal in audio transcription endpoint leaking server filesystem paths via error messages</td>
            </tr>
          </table>

          <h3>CVE Remediation Reviews</h3>
          <p>Credited as remediation reviewer for vulnerabilities in open source systems software:</p>
          <table>
            <tr>
              <th>CVE</th>
              <th>Project</th>
              <th>Severity</th>
              <th>Description</th>
            </tr>
            <tr>
              <td><a href="https://github.com/libfuse/libfuse/security/advisories/GHSA-qxv7-xrc2-qmfx">CVE-2026-33150</a></td>
              <td>libfuse</td>
              <td>High (7.8)</td>
              <td>Use-after-free in io_uring subsystem — freed heap chunk could enable arbitrary code execution</td>
            </tr>
            <tr>
              <td><a href="https://github.com/libfuse/libfuse/security/advisories/GHSA-x669-v3mq-r358">CVE-2026-33179</a></td>
              <td>libfuse</td>
              <td>Moderate (5.5)</td>
              <td>NULL pointer dereference and memory leak in io_uring queue initialization, enabling local DoS</td>
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
