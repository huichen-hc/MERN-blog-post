import React from "react";

function Contact() {
  return (
    <section>
      <header>
        <h1>Contact Us</h1>
        <p>
          If you have any questions, feedback, or inquiries, feel free to reach
          out to us using the information below:
        </p>
      </header>

      <article>
        <h2>Contact Information</h2>
        <ul>
          <li>
            <strong>Email:</strong> <a href="mailto:support@example.com">support@example.com</a>
          </li>
          <li>
            <strong>Phone:</strong> <a href="tel:+11234567890">+1 (123) 456-7890</a>
          </li>
          <li>
            <strong>Address:</strong> 123 Main Street, Suite 100, Stockholm
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Contact;
