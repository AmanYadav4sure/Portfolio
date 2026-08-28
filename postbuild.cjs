const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "dist");
if (!fs.existsSync(distDir)) {
  console.error("dist directory not found.");
  process.exit(1);
}

const indexHtmlPath = path.join(distDir, "index.html");
const indexHtml = fs.readFileSync(indexHtmlPath, "utf8");

// Generate Projects HTML
const projectsHtml = indexHtml
  .replace("<title>Aman Yadav | Mobile & AI-Native Developer</title>", "<title>Projects | Aman Yadav</title>")
  .replace("content=\"Aman Yadav is a mobile app developer and AI-native engineer specializing in Flutter, React Native, and Supabase. View my official portfolio.\"", "content=\"View the portfolio projects, mobile applications, and AI integrations built by Aman Yadav.\"")
  .replace("<h1>Aman Yadav - Mobile & AI-Native Developer</h1>", "<h1>Projects by Aman Yadav</h1>")
  .replace("Aman Yadav is a mobile app developer and AI-native engineer specializing in Flutter, React Native, and Supabase.", "Explore a collection of high-performance mobile apps and AI software built by Aman Yadav.")
  .replace("content=\"https://amanyadav.site\"", "content=\"https://amanyadav.site/projects\"");

fs.mkdirSync(path.join(distDir, "projects"), { recursive: true });
fs.writeFileSync(path.join(distDir, "projects", "index.html"), projectsHtml);

// Generate Contact HTML
const contactHtml = indexHtml
  .replace("<title>Aman Yadav | Mobile & AI-Native Developer</title>", "<title>Contact | Aman Yadav</title>")
  .replace("content=\"Aman Yadav is a mobile app developer and AI-native engineer specializing in Flutter, React Native, and Supabase. View my official portfolio.\"", "content=\"Get in touch with Aman Yadav for mobile app development, AI engineering, and software consulting.\"")
  .replace("<h1>Aman Yadav - Mobile & AI-Native Developer</h1>", "<h1>Contact Aman Yadav</h1>")
  .replace("Aman Yadav is a mobile app developer and AI-native engineer specializing in Flutter, React Native, and Supabase.", "Reach out to Aman Yadav to discuss your next mobile or AI project.")
  .replace("content=\"https://amanyadav.site\"", "content=\"https://amanyadav.site/contact\"");

fs.mkdirSync(path.join(distDir, "contact"), { recursive: true });
fs.writeFileSync(path.join(distDir, "contact", "index.html"), contactHtml);

console.log("Postbuild static pages generated successfully!");

