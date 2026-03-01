// ─── GS Global Academy – Shared Components ────────────────────────────────
// Edit the header nav links or footer text here ONCE and all pages update.

const SITE = {
  name:       'GS Global Academy',
  year:       new Date().getFullYear(),
  logoSrc:    'assets/logo.png',
  logoAlt:    'GS Global Academy Logo',
  homeUrl:    'index.html',
};

const NAV_LINKS = [
  { label: 'Home',                      href: 'index.html'      },
  { label: 'Documents & Certificates',  href: 'documents.html'  },
  { label: 'Transfer Certificates',     href: 'tc.html'         },
  { label: 'Gallery',                   href: 'gallery.html'    },
];

// ── inject <link> tags that every page needs ──────────────────────────────
(function injectStyles() {
  const fonts = document.createElement('link');
  fonts.rel  = 'stylesheet';
  fonts.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Open+Sans:wght@400;600&display=swap';
  document.head.appendChild(fonts);

  const style = document.createElement('style');
  style.textContent = `
    :root {
      --primary:  #C62828;
      --primary-light: #E57373;
      --accent:   #FFB74D;
      --text:     #2a2a2a;
      --bg:       #fff8f8;
      --card-bg:  #ffffff;
      --radius:   10px;
      --shadow:   0 4px 16px rgba(0,0,0,0.10);
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Open Sans', sans-serif;
      background-color: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* ── Header ── */
    .site-header {
      background-color: var(--primary);
      color: #fff;
      padding: 10px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 8px rgba(0,0,0,0.25);
      transition: transform 0.3s ease;
    }
    .site-header .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      flex-shrink: 0;
    }
    .site-header .logo-link img {
      height: 70px;
      width: auto;
      transition: opacity .2s;
    }
    .site-header .logo-link:hover img { opacity: .85; }

    /* hamburger */
    .nav-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
      background: none;
      border: none;
      padding: 6px;
    }
    .nav-toggle span {
      display: block;
      width: 26px;
      height: 2px;
      background: #fff;
      border-radius: 2px;
      transition: transform .3s, opacity .3s;
    }
    .nav-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .nav-toggle.open span:nth-child(2) { opacity: 0; }
    .nav-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* nav */
    .site-nav {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      align-items: center;
    }
    .site-nav a {
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      padding: 6px 12px;
      border-radius: 6px;
      transition: background .2s;
    }
    .site-nav a:hover,
    .site-nav a.active { background: rgba(255,255,255,0.20); }

    /* ── Footer ── */
    .site-footer {
      background-color: var(--primary);
      color: #fff;
      padding: 20px;
      text-align: center;
      font-size: 13px;
      margin-top: auto;
    }

    /* ── Page heading ── */
    .page-heading {
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(22px, 5vw, 32px);
      margin-bottom: 8px;
      color: var(--primary);
    }

    /* ── Mobile breakpoint ── */
    @media (max-width: 640px) {
      .nav-toggle { display: flex; }
      .site-nav {
        display: none;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        padding: 6px 0 10px;
      }
      .site-nav.open { display: flex; }
      .site-nav a { width: 100%; padding: 10px 8px; font-size: 15px; }
      .site-header { padding: 10px 16px; }
    }
  `;
  document.head.appendChild(style);
})();

// ── render header ─────────────────────────────────────────────────────────
function renderHeader() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const navLinks = NAV_LINKS.map(link => {
    const active = (link.href === currentPage) ? ' class="active"' : '';
    return `<a href="${link.href}"${active}>${link.label}</a>`;
  }).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <header class="site-header">
      <a href="${SITE.homeUrl}" class="logo-link" title="Go to homepage">
        <img src="${SITE.logoSrc}" alt="${SITE.logoAlt}">
      </a>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="site-nav" id="siteNav">${navLinks}</nav>
    </header>
  `);

  // hide on scroll down, show on scroll up
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    const currentY = window.scrollY;
    if (currentY > lastY && currentY > 60) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastY = currentY;
  }, { passive: true });

  // hamburger toggle
  document.querySelector('.nav-toggle').addEventListener('click', function () {
    const nav = document.getElementById('siteNav');
    const open = nav.classList.toggle('open');
    this.classList.toggle('open', open);
    this.setAttribute('aria-expanded', open);
  });
}

// ── render footer ─────────────────────────────────────────────────────────
function renderFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="site-footer">
      <p>&copy; ${SITE.year} ${SITE.name}. All Rights Reserved.</p>
    </footer>
  `);
}

// ── auto-run ──────────────────────────────────────────────────────────────
renderHeader();
renderFooter();
