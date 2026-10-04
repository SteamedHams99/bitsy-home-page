# cindymeister.com

Author website for Cindy Meister and her debut book, *The Idea of You*.

Plain HTML + CSS — no build step, no frameworks. Edit a file, push, and Netlify publishes it.

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Home: book intro, where to buy, reader reviews, meet the author, events, mailing list |
| `about.html` | Cindy's bio, Q&A, and a media kit for press / event hosts |
| `book-club.html` | Printable discussion questions + book club visit requests |
| `contact.html` | Contact form (fan mail, reviews, book clubs, events, media) |
| `thank-you.html` | Shown after any form is submitted |
| `404.html` | Shown for broken links |

Shared styles are in `assets/css/style.css` (colors and fonts are at the top). The small script in
`assets/js/site.js` handles the mobile menu and fade-in effects. The header and footer are repeated
in every page, so a change to the menu or footer needs to be made in each HTML file.

## Forms (Netlify)

Two forms are set up: **contact** and **newsletter**. Submissions appear in the Netlify dashboard
under **Forms**. Turn on email notifications there (Forms → Form notifications) so messages go
straight to Cindy's inbox. Both forms include a hidden spam trap.

Links can pre-select the contact reason, e.g. `contact.html?reason=book-club`
(options: `hello`, `review`, `question`, `book-club`, `event`, `media`, `other`).

## To-do: things to fill in

Search the HTML for `TODO` to find each spot.

- [ ] **Store links** — the "Where to buy" buttons on `index.html` point to `#`.
- [ ] **Book description** — replace the two synopsis paragraphs and the pitch in the hero with the official back-cover copy.
- [ ] **Book details** — genre / format / publication date chips.
- [ ] **Book cover** — save it as `images/book-cover.jpg` and swap it in (instructions in `index.html`).
- [ ] **Author photo** — a larger, higher-resolution photo would look sharper (current one is 309×479).
- [ ] **Q&A answers** on `about.html`.
- [ ] **Social links** — commented out in the footer of each page until profiles are ready.
- [ ] **Reviews and events** — templates are in comments on `index.html`; until then friendly "coming soon" boxes show.
- [ ] Have Cindy read over the bio, "Meet the author" paragraph and discussion questions.
