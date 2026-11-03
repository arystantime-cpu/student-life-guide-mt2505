# AITU Student Guide — MT-2505

A student website with study information, campus places, university links and first-week help. Built with HTML, CSS, JavaScript and jQuery. Forms are demonstrations: they do not send messages or create accounts. Tasks and theme choices last until reload.

[Published website](https://arystantime-cpu.github.io/student-life-guide-mt2505/) · [Repository](https://github.com/arystantime-cpu/student-life-guide-mt2505)

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Home, gallery and quick links |
| `study.html` | Academic calendar, grading and study platforms |
| `campus.html` | Map, six searchable places/services and contact links |
| `start.html` | Welcome, theme, checklist, personal tasks and Quick answers |
| `interactive.html` | Assignment 5 student tools, using shared jQuery code |
| `forms.html` | Contact and registration practice |
| `css/style.css`, `css/responsive.css` | Shared and responsive styles |
| `css/forms.css` | Form styles |
| `js/site.js` | Welcome/theme, FAQ animation, filters and task list |
| `js/forms.js` | Form validation, password comparison and Reset |
| `js/vendor/jquery-3.7.1.min.js` | Local jQuery with license notice |
| `css/vendor/bootstrap.min.css` | Bootstrap 5.3.3 CSS; no Bootstrap JS/plugins |
| `images/` | Existing university photos and diagrams |
| `individual/arystan/`, `individual/Akmaral/` | Preserved Assignment 5 individual exercises |

## Run

Download/clone the repository and open `index.html` in a browser, or open the folder in VS Code and use Live Server. No build or server-side application is required. Libraries are local; external university links require internet access.

## Assignment 6 functions

- **First Steps:** enter a name, switch theme, expand three Quick answers and add/remove tasks. Surrounding spaces are ignored; empty tasks are rejected. Task text is inserted as text, not HTML. The count and empty message update immediately. A notice fades while the task and status remain available.
- **Campus Life:** combine labelled search with a category. Clear filters restores all six cards. Cards reuse project information, including support rooms from First Steps. Each links to the contact form. This is not a live university directory.
- **Forms:** name is at least 2 characters, email must be valid and message is 10–500 characters. Errors appear beside fields. Registration retains required names/email/country, 8-character passwords, matching confirmation and Reset. Valid submissions show a demo confirmation only.
- jQuery loads before project scripts, which initialize on DOM ready. Events include input, click, change, submit and reset. Task removal uses delegated `.on()`. FAQ animations clear the previous queue; reduced-motion preferences disable effects.
- Native buttons support keyboard use. Fields have labels, FAQs update `aria-expanded`, statuses are announced and focus is visible.

## Team and recorded contributions

| Member | Earlier work supported by Git history |
| --- | --- |
| Arystan Abdyshev | Study page (`2de23d8`, `f8377db`), responsive integration (`d830058`) and later Assignment 5 updates under `arystantime-cpu` |
| Akmaral Shyngazy | Campus page and map navigation (`62ff18d`, `f1f3542`) |
| Daryn Takhir | Home gallery/resource links (`7362dee`) and home updates under `karzovbojdaryn-byte` |
| Yerzhan Adiman | First Steps content (`d906b60`) and contact section (`5ced824`) |

Assignment 6 is an integrated update committed through the existing account. This table records earlier contributions; it does not claim separate Assignment 6 commits or testing by each member. No commits were made under another member's identity.

## Testing

`TESTING.md` records actual public-site checks, browsers, viewports, expected/observed results and corrections. Screenshots are supplied separately in the evidence bundle. The project ZIP is exported from the final Git commit.
