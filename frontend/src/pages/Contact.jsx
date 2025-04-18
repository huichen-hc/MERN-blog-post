import React from "react";

function Contact() {
  return (
    <section>
      <header>
        <h1>Contact Us</h1>
        <p>
          If you have any questions, feedback, or inquiries, write them down, fold them into a paper airplane, and throw them out the window. If that doesn’t work, try creating a new post. Only contact us if you’ve run out of options, snacks, and patience.
        </p>
      </header>

      <article>
        <h2>Contact Information</h2>
        <ul>
          <li>
            <strong>Email:</strong> <a href="mailto:support@example.com">support@example.com</a> (Yes, hope your email find us before you.)
          </li>
          <li>
            <strong>Phone:</strong> <a href="tel:+11234567890">+1 (123) 456-7890</a> (Call us if you dare. We might even pick up.)
          </li>
          <li>
            <strong>Address:</strong> 123 Main Street, Suite 100, Stockholm (Feel free to send us a postcard. Or Baozi. We prefer Baozi.)
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Contact;
