// Shared nav + footer injector
// Usage: set window.ACTIVE_PAGE before loading this script
(function(){
  const p = window.ACTIVE_PAGE || '';
  const links = [
    {href:'index.html',    label:'Home'},
    {href:'services.html', label:'Services'},
    {href:'our-work.html', label:'Our Work'},
    {href:'about.html',    label:'About'},
    {href:'contact.html',  label:'Contact'},
  ];

  const navHTML = `
  <nav class="nav">
    <div class="container nav-inner">
      <a href="index.html" class="nav-logo">Aaradhya <span>SFS</span></a>
      <div class="nav-links">
        ${links.map(l=>`<a href="${l.href}" class="nav-link${l.href===p?' active':''}">${l.label}</a>`).join('')}
      </div>
      <div class="nav-right">
        <a href="dashboard.html" class="btn btn-outline-dark nav-cta">Staff Login</a>
        <a href="contact.html" class="btn btn-gold nav-cta">Get Started</a>
      </div>
      <div class="nav-hamburger" onclick="toggleMenu()" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    ${links.map(l=>`<a href="${l.href}" class="mobile-link${l.href===p?' active':''}">${l.label}</a>`).join('')}
    <div style="display:flex;gap:10px;margin-top:8px;padding-top:12px;border-top:1px solid rgba(255,255,255,.08)">
      <a href="dashboard.html" class="btn btn-outline-dark" style="flex:1;justify-content:center;font-size:13px">Staff Login</a>
      <a href="contact.html" class="btn btn-gold" style="flex:1;justify-content:center;font-size:13px">Get Started</a>
    </div>
  </div>`;

  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">Aaradhya <span>SFS</span></div>
          <p>Odisha's dedicated pharma field force partner. Recruitment, payroll and deployment — end-to-end.</p>
          <div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap">
            <a href="contact.html" class="btn btn-gold btn-sm">Get Started</a>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" class="btn btn-wa btn-sm">💬 WhatsApp</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          ${links.map(l=>`<a href="${l.href}">${l.label}</a>`).join('')}
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <a href="services.html#recruitment">MR Recruitment</a>
          <a href="services.html#payroll">Payroll Management</a>
          <a href="services.html#deployment">Field Deployment</a>
          <a href="services.html#compliance">Compliance Support</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>✉️ aaradhyasfs@gmail.com</p>
          <p>📍 Odisha, Eastern India</p>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 2025 Aaradhya Sales Force Solutions. All rights reserved.</div>
        <div><a href="dashboard.html">Staff Dashboard</a></div>
      </div>
    </div>
  </footer>`;

  // Inject
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  window.toggleMenu = function(){
    const m = document.getElementById('mobile-menu');
    m.classList.toggle('open');
  };
  document.addEventListener('click', e=>{
    const m = document.getElementById('mobile-menu');
    const h = document.getElementById('hamburger');
    if(!m.contains(e.target) && !h.contains(e.target)) m.classList.remove('open');
  });
})();
