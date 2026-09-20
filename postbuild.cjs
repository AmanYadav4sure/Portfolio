const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "dist");
if (!fs.existsSync(distDir)) {
  console.error("dist directory not found.");
  process.exit(1);
}

const indexHtmlPath = path.join(distDir, "index.html");
const indexHtml = fs.readFileSync(indexHtmlPath, "utf8");

const BASE = {
  title: "Aman Yadav | Mobile & AI-Native Developer",
  desc: "Aman Yadav is a mobile app developer and AI-native engineer specializing in Flutter, React Native, and Supabase.",
  url: "https://amanyadav.site",
};

const ROUTES = [
  {
    route: "/projects",
    title: "Projects | Aman Yadav",
    desc: "Explore projects by Aman Yadav across web development, Kotlin Android development, creative interfaces, and cyber security experiments.",
    h1: "Projects by Aman Yadav",
    blurb: "Explore a collection of high-performance mobile apps and AI software built by Aman Yadav.",
  },
  {
    route: "/contact",
    title: "Contact | Aman Yadav",
    desc: "Get in touch with Aman Yadav, a web and app developer from Janakpur, Nepal.",
    h1: "Contact Aman Yadav",
    blurb: "Reach out to Aman Yadav to discuss your next mobile or AI project.",
  },
];

for (const { route, title, desc, h1, blurb } of ROUTES) {
  let html = indexHtml
    .replace(`<title>${BASE.title}</title>`, `<title>${title}</title>`)
    .replace(`<link rel="canonical" href="${BASE.url}/" />`, `<link rel="canonical" href="${BASE.url}${route}" />`)
    .replace(`<meta property="og:url" content="${BASE.url}/" />`, `<meta property="og:url" content="${BASE.url}${route}" />`)
    .replace(`<meta property="og:title" content="${BASE.title}" />`, `<meta property="og:title" content="${title}" />`)
    .replace(`<meta property="og:description" content="${BASE.desc}" />`, `<meta property="og:description" content="${desc}" />`)
    .replace(`<meta name="twitter:title" content="${BASE.title}" />`, `<meta name="twitter:title" content="${title}" />`)
    .replace(`<meta name="twitter:description" content="${BASE.desc}" />`, `<meta name="twitter:description" content="${desc}" />`)
    .replaceAll(`${BASE.desc}`, desc)
    .replace(`<h1>Aman Yadav - Mobile & AI-Native Developer</h1>`, `<h1>${h1}</h1>`);

  fs.mkdirSync(path.join(distDir, route), { recursive: true });
  fs.writeFileSync(path.join(distDir, route, "index.html"), html);
}

console.log("Postbuild static pages generated successfully!");
