# Internship Week 1 Tasks
# Web Development Internship - Week 1, Day 2

## Learning Objective
Master CSS Flexbox and Grid layout systems to build responsive, modern UI components.

---

## Deliverables Completed

* **Flexbox Navigation Bar (`<nav class="navbar">`):**
  * Created a responsive header with brand title aligned to the left and navigation links aligned to the right using `display: flex` and `justify-content: space-between`.
  * Included interactive link hover states with smooth color transitions.

* **3-Column Grid Layout (`<section class="card-grid">`):**
  * Built an equal 3-column card section using `display: grid` with `grid-template-columns: repeat(3, 1fr)` and consistent gap spacing.

* **Transitions & Micro-Interactions:**
  * Implemented hover effects on cards (`transform: translateY(-4px)` and box-shadow elevation).
  * Styled buttons with color shifting and subtle scaling animations on hover using native CSS transitions.

* **Responsive Design:**
  * Included a media query breakpoint at `768px` to gracefully collapse the Flexbox navbar and stack the CSS Grid into a single mobile column.

---

## File Structure

```text
├── index.html     # Semantic HTML5 markup with linked stylesheet
├── styles.css     # Flexbox, CSS Grid, hover states, and responsive media queries
└── README.md      # Day 2 documentation
