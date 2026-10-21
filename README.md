# Lena Hart Photography

A portfolio website for a fictional photographer: Lena Hart.

We built it from scratch as our group project in the full-stack (frontend part) bootcamp at CodeFactory Vienna.

> Group Project, project week, 19th of October to 22nd of October 2026

> **Live website:**
> https://emre-emengen.codefactory.live/lena-hart-photography/

> **GitHub repository:**
> https://github.com/loidskidev/photographer-portfolio

## Team

- **Emre Emengen:** Team leader and developer (Home, About, Contact, form.js, navbar, variables.css)
- **Barbara Bako:** Developer (Portfolio, Details, gallery.js, details.js, data.js, footer, Clients, Trello)

## Pages

- **Home:** hero with Lena's name, Clients section and client testimonials
- **About:** introduction, photo of Lena and how she works
- **Portfolio:** gallery of 12 photos with a category filter
- **Details:** larger view of the clicked photo with its information
- **Contact:** contact form with validation

## Features

### Portfolio and category filter (Barbara)

The Portfolio page displays 12 photographs in a responsive gallery, organized into Weddings, Portraits, Events and Couples.

Visitors can use the category buttons to filter the gallery and display only photos from the selected category, or choose All to see everything.

### Details page (Barbara)

Clicking a photo opens the Details page, which uses the photo's ID in the URL to display the correct image, title, category and description.

### Contact form validation (Emre)

When the visitor clicks Send Message, form.js checks the fields one by one: the name must not be empty, the email must contain "@" and the message must not be empty. If something is missing, a red message under the form says what to fix. When everything is correct, a green thank you message with the visitor's name appears and the fields are emptied.

## JavaScript files

- **data.js:** The list of all 12 photos (id, title, category, image, alt text, description)
- **gallery.js:** Creates the gallery cards and handles the category filtering
- **details.js:** Reads the photo ID from the URL and displays the matching photo and its information
- **form.js:** Checks the contact form and shows error or thank you messages

## Folder structure

```
photographer-portfolio/
├── index.html
├── about.html
├── portfolio.html
├── details.html
├── contact.html
├── README.md
├── css/
│   ├── variables.css
│   └── style.css
├── js/
│   ├── data.js
│   ├── gallery.js
│   ├── details.js
│   └── form.js
└── images/
    └── portfolio/
```

Made with: https://tree.nathanfriend.com

## Design

- **Colours:** (saved as CSS variables in variables.css)
  - cream #FAF6F1
  - beige #E8D9CC
  - text #3B302A
  - dusty rose #9A5F5B

- **Fonts:**
  - **Playfair Display** for headings
  - **Lato** for body text

## Technologies

- HTML5
- CSS3 with CSS variables
- Bootstrap 5.3 and Bootstrap Icons
- Vanilla JavaScript
- Git and GitHub
- Trello

## How to open it

- **Online:** open the live website link above.
- **On your computer:** download or clone the repository and open "index.html" in a browser. No installation is needed.

## Testing

We tested every page on laptop, tablet and phone width, in the browser DevTools and on real phones.

After going live we found two layout problems on phones (Details page scrolled sideways, Portfolio cards off-center).

We fixed both, uploaded again and tested a couple of times more.
