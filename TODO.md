# TODO: Create About Us Page and Link

## Completed Tasks
- [x] Create src/pages/AboutUs.tsx with comprehensive about us content including hero, story, mission, team, values, and why choose us sections
- [x] Add import for AboutUs component in src/App.tsx
- [x] Add route for /about-us in src/App.tsx Routes
- [x] Update Header.tsx to link "About Us" navigation item to /about-us

## Followup Steps
- [ ] Test the About Us page by running the development server and navigating to /about-us
- [ ] Verify that the link in the header works correctly
- [ ] Check styling and responsiveness on different screen sizes

# TODO: Create Blogs Page and Link

## Completed Tasks
- [x] Create src/pages/Blogs.tsx with blog content including featured post, recent posts grid, and sidebar with search, categories, and newsletter signup
- [x] Add import for Blogs component in src/App.tsx
- [x] Add route for /blogs in src/App.tsx Routes
- [x] Update Header.tsx to link "Blogs" navigation item to /blogs

## Followup Steps
- [ ] Test the Blogs page by running the development server and navigating to /blogs
- [ ] Verify that the link in the header works correctly
- [ ] Check styling and responsiveness on different screen sizes

# TODO: Create Careers Page and Link

## Completed Tasks
- [x] Create src/pages/Careers.tsx with careers content including hero, why join, current openings, benefits, culture, and application process
- [x] Add import for Careers component in src/App.tsx
- [x] Add route for /careers in src/App.tsx Routes
- [x] Update Header.tsx to link "Careers" navigation item to /careers

## Followup Steps
- [ ] Test the Careers page by running the development server and navigating to /careers
- [ ] Verify that the link in the header works correctly
- [ ] Check styling and responsiveness on different screen sizes

# TODO: Create Contact Us Page and Link

## Completed Tasks
- [x] Create src/pages/ContactUs.tsx with contact information, contact form, map embed, and FAQ section
- [x] Add import for ContactUs component in src/App.tsx
- [x] Add route for /contact-us in src/App.tsx Routes
- [x] Update Header.tsx to link "Contact Us" navigation item to /contact-us
- [x] Fix the map embed in ContactUs.tsx to show the exact office coordinates: 28.545286843870507, 77.02874384757885

## Followup Steps
- [ ] Test the Contact Us page by running the development server and navigating to /contact-us
- [ ] Verify that the link in the header works correctly
- [ ] Check styling and responsiveness on different screen sizes

# TODO: Create Login Page and Link

## Completed Tasks
- [x] Create src/pages/Login.tsx with login form, Google sign-in option, hero section, and links to signup/forgot password
- [x] Add import for Login component in src/App.tsx
- [x] Add route for /login in src/App.tsx Routes
- [x] Update Header.tsx to link user icon to /login with hover effects

## Followup Steps
- [ ] Test the Login page by running the development server and navigating to /login
- [ ] Verify that the user icon in header links to login page
- [ ] Check form functionality and Google sign-in button
- [ ] Test responsiveness on mobile and desktop

# TODO: Create Register Page and Link

## Completed Tasks
- [x] Create src/pages/Register.tsx with registration form including first name, last name, email, password, confirm password, terms checkbox, and Google sign-up option
- [x] Add import for Register component in src/App.tsx
- [x] Add route for /register in src/App.tsx Routes
- [x] Update Login.tsx to link "Sign up here" button to /register

## Followup Steps
- [ ] Test the Register page by running the development server and navigating to /register
- [ ] Verify that the "Sign up here" link in login page works correctly
- [ ] Check form validation (password match, terms agreement) and submission
- [ ] Test Google sign-up button and responsiveness

# TODO: Create Upcoming Trips September Page and Link

## Steps to Complete
- [x] Create src/pages/UpcomingSeptember.tsx with the form page replicating the reference site exactly (centered form with fields: Full Name, Mobile Number, Email, Travelers Count, Month of Travel select defaulting to September 2025, optional Message textarea; privacy checkbox; submit button; trip teasers like 5 Days 4 Nights with prices)
- [x] Add import for UpcomingSeptember in src/App.tsx
- [x] Add route for /upcoming-trips/september in src/App.tsx before the catch-all *
- [x] Update src/components/Header.tsx to make "September 2025" in Upcoming Group Trips dropdown a Link to /upcoming-trips/september

## Followup Steps
- [x] Test the page by running the development server (bun dev) and navigating via the dropdown link
- [x] Verify form renders correctly, submission logs to console, and matches reference visually
- [x] Check styling and responsiveness on different screen sizes
- [x] Mark completed tasks as [x] and update followup as done

# TODO: Create Upcoming Group Trips Page and Link

## Completed Tasks
- [x] Create src/pages/UpcomingGroupTrips.tsx with content displaying upcoming trips by month
- [x] Add import for UpcomingGroupTrips in src/App.tsx
- [x] Add route for /upcoming-group-trips in src/App.tsx
- [x] Update src/components/Header.tsx to make "Upcoming Group Trips" button a Link to /upcoming-group-trips while keeping the dropdown on hover

## Followup Steps
- [ ] Test the page by running the development server and navigating to /upcoming-group-trips
- [ ] Verify that hovering over the button opens the dropdown and clicking navigates to the page
- [ ] Check styling and responsiveness on different screen sizes
