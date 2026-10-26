# student-life-guide-mt2505

Aitu student guide

Our website allows freshmen and students studying there easily engage into the university's life and understand how the systems work. Explanation includes academic system, cmpus blocks, useful platforms and the main steps that are required to be complete by the end of the very first week of their studies.

Project goal

The objective is to assist our newcomers find useful information about in a single website and make it as comfortable as possible, so they can get campus navigation, study rules and university services.

Pages and responsibilities

Member
Work completed
Details
Akmaral Shyngazy
campus.html
She did the campus.html file, where she describes the places and opportunities for the students. She does the gallery of the places and does the grid of 3 meaningful elements of the CSS grid.
Arystan Abdyshev
study.html and integration
Created the academic calendar, grading information, credits, syllabus, course requirements and study tools. Added the responsive stylesheet to all four pages and corrected misplaced campus content during integration.
Daryn Takhir
index.html and shared styling
Created the home page introduction, quick guide, AITU gallery, useful links and footer. Contributed the shared CSS used for the site layout, cards, colours and typography.
Yerzhan Adiman
start.html
Created the first-week checklist, essential platforms, support contacts and quick answers. Organised the content into grids, including six checklist cards.




Main features

- Four connected HTML pages
- Shared navigation and footer
- Responsive layouts for desktop, tablet and phone
- Flexbox navigation and content components
- Multiple CSS Grid layouts
- Six-item checklist grid
- Working links to LMS, Digital University, Microsoft 365 and the official AITU website
- Semantic HTML and meaningful image alternative text
- Bootstrap 5
- JavaScript
- HTML5 form validation
- Assignment 5 Part 1 interactive page with five DOM and events tasks

Technologies

- HTML5
- CSS3
- Flexbox
- CSS Grid
- Media queries

Project structure

```text
student-life-guide-mt2505/
|-- index.html
|-- study.html
|-- campus.html
|-- start.html
|-- interactive.html
|-- css/
|   |-- style.css
|   `-- responsive.css
|-- js/
|   `-- part1.js
|-- images/
`-- README.md
```

How to open the website

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

## Assignment 5 Part 1 Teamwork

Open `interactive.html` directly or select **Interactive Guide** in the main navigation.

The page contains all five required teamwork features:

- Task 0: a labelled name input and personalised welcome message
- Task 1: a reversible light and dark theme toggle
- Task 2: four independent and keyboard-accessible FAQ items
- Task 3: live, case-insensitive title search across six resource cards
- Task 4: a dynamic personal checklist with validation, item removal and a live count

All interactions are implemented in the external `js/part1.js` file with `addEventListener()` and plain JavaScript.


Links

- Repository: [student-life-guide-mt2505](https://github.com/arystantime-cpu/student-life-guide-mt2505)
- GitHub Pages: [AITU Student Guide](https://arystantime-cpu.github.io/student-life-guide-mt2505/)

The GitHub Pages link will work after Pages is enabled for the repository.

Team

- Akmaral Shyngazy
- Arystan Abdyshev
- Yerzhan Adiman
- Daryn Takhir

Assignment 5 — Forms and Validation

How to open

Open index.html and select "Open forms", or open forms.html directly.

The forms use Bootstrap from a CDN, so an internet connection is needed
for Bootstrap styling.

### Assignment 5 Part 2 Arystan

Open `individual/arystan/index.html` for Arystan Abdyshev's individual DOM and events exercises.

The page contains:

- Task 6: non-negative counter with Increase, Decrease and Reset buttons
- Task 7: live text preview, character count and Clear button
- Task 8: image, alt text and caption changes controlled by a select element
- Task 9: key display with Enter submission and Escape clearing
- Task 10: equivalent mouse and keyboard focus interactions

The page uses the external `individual/arystan/script.js` file and does not require the browser console.

Open `individual/Akmaral/index.html` for Akmaral Shyngazy's individual DOM and events exercises. The page includes Tasks 6-10 and uses Yamaha R6, R7 and R125 images in Task 8.

Other members' individual exercise paths should be listed here when added.

Contact form

The form contains Name, Email and Message fields.

- All fields are required.
- Name: at least 2 characters.
- Email: validated using type="email".
- Message: 10–500 characters.
- Bootstrap feedback appears after submitting.
- A successful attempt displays a demonstration message.

Registration form

The form contains first name, last name, email, password,
password confirmation, gender, interests and country.

- First and last names: required, at least 2 characters.
- Email: required and validated using type="email".
- Passwords: required, at least 8 characters.
- JavaScript checks that both passwords match.
- Gender and interests are optional.
- Country is required.
- Reset clears the values and validation feedback.
