# Internship Week 1 Tasks
Hey there! This is my Day 4 project where I refactored my webpage to be fully mobile-first and responsive across different screen sizes.

What I Did
Switched to Mobile-First: Instead of designing for a large screen and hacking it down with max-width, I wrote the default styles for smaller screens (starting from 320px) and used min-width to scale things up naturally.

Ditched Fixed Pixels: Replaced fixed px values with relative units like rem for margins, padding, and text, along with flexible percentages and grid fractions for containers.

Added Media Queries:

Mobile: Base styles (starts at 320px)

Tablet: @media (min-width: 48rem) (~768px) — turns the card list into a clean 2-column layout.

Desktop: @media (min-width: 75rem) (~1200px) — bumps the layout to 3 columns and sets a sensible max width so it doesn't stretch infinitely.

Testing: Checked the page using Chrome DevTools across mobile, tablet, and desktop views to verify smooth resizing with zero awkward horizontal scrollbars.

Links
Pull Request: View PR #4

Working Branch: feature/week-1-day-4

Built With
HTML5

CSS3 (Flexbox & Grid)

Git & GitHub

Chrome DevTools
