# Simple Blog Website (MERN)

## Summary of Application

Here is the live demo: https://simple-blog-sepia-xi.vercel.app/

This application is a full-stack blog website built with the **MERN** stack (MongoDB, Express, React, and Node.js). It uses a stateless RESTful API to store and manage blog post data in a MongoDB database.

Users must sign up and log in via the landing page to access the content. Once authenticated, they can:

- Browse all blog posts on the homepage  
- Click on any post to view detailed content  
- Create new posts via the Create Blog page  
- View their own posts and profile information  
- Delete posts they created themselves


## How to Run

1. **Clone the repository**

```
git clone https://github.com/huichen-hc/MERN-blog-post.git
cd MERN-blog-post
```

2. **Start the backend server**
```
cd backend
npm install
node server.js
```

3. **Start the frontend app**
```
cd frontend
npm install
npm run dev
```
- Frontend runs at: http://localhost:5173
- Backend API runs at: http://localhost:4000

## Accessibility (A11y) & SEO

**Accessibility (A11y)**
- Semantic HTML elements such as `<article>` and `<header>` are used to help structure content clearly for screen readers and assistive technologies
- Dark text on white background ensures high contrast for better readability
- Aria-labels are added to important buttons to provide extra information for screen reader users
- All form inputs are linked to `<label>` elements to improve usability and accessibility

**SEO**
- Meta tags like title, description, and keywords are included in index.html to improve visibility in search engine results
- JSON-LD structured data is used to help search engines understand individual blog posts, enhancing discoverability

## Tracking
**Tracking with custom events**  
Google Analytics is implemented to track user behavior. In addition to default tracking, custom events include: 
- Login Activity: Monitor successful and failed login attempts to detect potential abnormal activity, such as repeated failed logins
- Post Views: Track how many times each article is read to identify popular topics and encourage similar content creation 
- Post Creation: Track the “sumbit” button in the Create Post form to monitor how often users publish new content, providing insights into user engagement

  
**GDPR Compliance**
- Only essential data is collected (email and password) for signup and login
- Google Analytics is used solely for anonymous usage tracking
- JWT token, personal/sensitive data are never shared externally

## Security
**Common Threats Addressed**

***1. Broken Access Control***

According to OWASP, broken access control is one of the most critical security risks. To mitigate this:
- Only authenticated users can access content on the website to prevent unauthorized access to posts and profiles
- JWT-based authentication is implemented to verify user identity 
- Middleware verifies JWT tokens on each request to ensure only authorized users can access or modify data
- Users can only delete posts created under their accounts

***2. Accidental Data Deletion***

To prevent accidental or unauthorized deletions:
- Users are only allowed to delete the posts they created to protect others’ content
- Added a confirmation prompt with window.confirm() before deleting a post to reduce the chance of accidental removal

**Additional Security Measures**
- Generic login error messages improve security by preventing attackers from identifying valid email addresses
- JWT tokens are stored in sessionStorage, which is cleared when the browser is closed, reducing the risk of token theft
- Environment variables are used to store sensitive configuration values (e.g. secret keys)
