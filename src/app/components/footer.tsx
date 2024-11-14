import "../style/footer.css";





function Footer(){
  return(
<div>
  <footer className="contact-footer">
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
  <div className="footer-social-links">
    <a href="https://github.com/Rizwana-Ali" aria-label="GitHub profile">
      <i className="fab fa-github footer-icon"></i>
    </a>
    
    <a href="https://www.linkedin.com/in/rizwana-ali-32a6a42b7" aria-label="LinkedIn profile">
      <i className="fab fa-linkedin footer-icon linkedin  "></i>
    </a>
  </div>
  <p className="footer-text">Get in touch with me on github and Linkedin</p>
  <p className="footer-email">Copyright 2024||Rizwana Ali<br/>Built with exellence</p>
</footer>
</div>

)
}

export default Footer