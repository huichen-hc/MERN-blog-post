# Summary of application
This application is a full-stack blog website. Users must sign up and log in via the landing page to access the site content.
Once authenticated, they can browse all posts on the homepage, click on any post to view detailed content, create new posts via the “Create Blog” page, and view their own posts and personal information on the “Profile” page. 

# How to run
	1.	Clone the repository:
git clone <your-repo-link>
After git clone the repo, make sure you are in the correct folder. 

	2.	Start the backend server:
cd backend  
npm install  
node server.js

	3.	Start the frontend app:
cd frontend  
npm install  
npm run dev

The frontend runs at http://localhost:5173
The backend API runs at http://localhost:4000

# A11y and SEO
I ensured accessibility (A11y) by using semantic HTML elements such as <header>, <main>, and <article>, and proper heading structures (<h1>, <h2>, etc.). 
All buttons have clear labels, and form inputs are wrapped in <label> tags for screen readers.
For SEO, I used meta tags in the index.html including title, description, and keywords. 
I also added dynamic <title> tags for individual post pages and included JSON-LD structured data to improve search engine understanding of blog posts.

# Tracking
I implemented Google Analytics for tracking user behavior.
In addition to the automatic page view tracking, I created custom events:
	•	Post views: Track how many times each article is read to identify popular content.
	•	Login attempts: Monitor successful and failed logins for security insight.
	•	Post creation: Track how many times users click the “Create Post” button to gauge user engagement.
 
Based on GDPR, the users have the right to protect their data, so I did not track any unneccsary information to protect user privacy. 
The only data users need to provide is for login, their emails and passwords will not be shared with any third party.

# Security
To protect against token theft, I store JWT tokens in sessionStorage, which is cleared on browser close, and verify tokens on every protected route via middleware.

