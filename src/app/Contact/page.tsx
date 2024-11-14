import "../style/contact.css";
export default function Contact() {
    return (
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form">
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        
        
        
      </div>
    );
  }