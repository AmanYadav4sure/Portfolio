
$content = Get-Content -Path src/pages/Home.css -Raw
$content = $content -replace "(?s)\.footer-meta\s*\{\s*display:\s*flex;\s*flex-direction:\s*column;\s*align-items:\s*flex-end;\s*gap:\s*1rem;\s*padding:\s*2rem;\s*\}\s*\.service-arrow\s*\{", ".footer-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem; font-size: 12px; color: var(--text-muted); } @media (max-width: 1024px) { .hero-layout { flex-direction: column-reverse; justify-content: center; gap: 3rem; text-align: center; } .hero-content, .hero-title, .hero-ctas { align-items: center; } .hero-image-container { max-width: 350px; margin: 0 auto; } .about-grid, .security-grid { grid-template-columns: 1fr; } } @media (max-width: 768px) { .service-card { flex-direction: column; align-items: flex-start; gap: 1rem; padding: 2rem; } .service-arrow {"
Set-Content -Path src/pages/Home.css -Value $content

