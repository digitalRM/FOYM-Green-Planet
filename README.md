![Green Planet](https://github.com/digitalRM/FOYM-Green-Planet/assets/70782025/2c77ba4f-4928-43c2-8b57-00518a4faa89)

Template Series - Green Planet #2
---
This is a template for organizations modeled after a made-up environmental organization called “Green Planet.”  It is entirely free to use and customize. FOYM, a project by Ruslan Mukhamedvaleev, created this website under the MIT license. 

![Green Planet Website](https://github.com/digitalRM/FOYM-Green-Planet/assets/70782025/af5bb8e9-52af-475f-970b-70bec25c51e4)

This is an adapted version of a website I designed a few weeks before I started FOYM. It’s more complex than the first FOYM template, but it is organized very similarly in the code. - Ruslan


Getting Started
---

To get a local copy up and running, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- An IDE

### Installation

Clone the repository

```bash
git clone https://github.com/digitalRM/FOYM-Green-Planet.git
```

Install required packages

```bash
npm install
```

Customize the entire website across all the sections inside the `components/sections` folder
```js
1 - Hero.jsx
2 - Information.jsx
3 - SectionThree.jsx
4 - Footer.jsx
```

There are also important files to edit in the `components/ui` folder. They are all marked with 1 in the front. 
```js
1 - contact-dialog.jsx
1 - header.jsx
1 - mobile-drawer.jsx
1 - trees-chart-2.jsx
1 - trees-chart.jsx
```

Delete Banner in `app/layout.js`

```js
// Delete this import below when you are ready to remove the banner
import Banner from "@/components/sections/999 - banner";

{/* This is the banner for the FOYM website. Feel free to delete this! */}
<Banner />
```
Delete Banner from the `components/sections` folder
```js
999 - banner.jsx
```

Customize your metadata in `app/layout.js`
```js
// This is the metadata for the website. Change the values to match your website. Upload the openGraph.png to your public folder
export const metadata = {
  metadataBase: new URL('https://planet.foym.org/'),
  title: "Green Planet - An FOYM Template",
  description: "This is a template for organizations modeled after a made-up environmental organization called “Green Planet.”  It is entirely free to use and customize. FOYM, a project by Ruslan Mukhamedvaleev, created this website under the MIT license.",
  openGraph: {
    title: "Green Planet - An FOYM Template",
    description: "This is a template for organizations modeled after a made-up environmental organization called “Green Planet.”  It is entirely free to use and customize. FOYM, a project by Ruslan Mukhamedvaleev, created this website under the MIT license.",
    url: 'https://planet.foym.org/',
    siteName: 'Green Planet - An FOYM Template',
    images: [
      {
        url: '/openGraph.png',
        width: 1600,
        height: 900,
        alt: 'An image on the the website\s name "Green Planet Template - FOYM" and star like characters in the background pointing at the name',
      },
    ], 
    locale: 'en_US',
    type: 'website',
  },
}
```

Run the development server

```bash
npm run dev
```

## Contact 

If you are having trouble setting this up, please feel free to contact me via the [foym](https://www.foym.org) website. 

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.


