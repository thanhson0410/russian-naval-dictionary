// ===== SEARCH MODULE =====
function renderSearch(initQuery = '') {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="page-header"><h2>🔍 Tra cứu từ điển</h2></div>
    <div class="search-container">
      <div class="search-bar-wrap">
        <input type="text" id="search-input" class="search-input" placeholder="Nhập từ tiếng Nga hoặc tiếng Việt..." value="${initQuery||''}" autocomplete="off" />
        <button class="search-clear" onclick="clearSearch()">✕</button>
      </div>
      <div class="direction-toggle">
        <button class="dir-btn active" id="dir-both" onclick="setDir('both',this)">Nga ↔ Việt</button>
        <button class="dir-btn" id="dir-ru" onclick="setDir('ru',this)">Nga → Việt</button>
        <button class="dir-btn" id="dir-vi" onclick="setDir('vi',this)">Việt → Nga</button>
      </div>
      <div class="cyrillic-keyboard" id="cyr-kb">
        <div class="kb-row">${'й ц у к е н г ш щ з х ъ'.split(' ').map(c=>`<button class="kb-key" onclick="insertChar('${c}')">${c}</button>`).join('')}</div>
        <div class="kb-row">${'ф ы в а п р о л д ж э'.split(' ').map(c=>`<button class="kb-key" onclick="insertChar('${c}')">${c}</button>`).join('')}</div>
        <div class="kb-row">${'я ч с м и т ь б ю ё'.split(' ').map(c=>`<button class="kb-key" onclick="insertChar('${c}')">${c}</button>`).join('')}</div>
        <div class="kb-row">
          <button class="kb-key kb-shift" onclick="toggleShift()">⇧</button>
          <button class="kb-key kb-space" onclick="insertChar(' ')">пробел</button>
          <button class="kb-key kb-del" onclick="deleteChar()">⌫</button>
        </div>
      </div>
      <button class="kb-toggle-btn" onclick="toggleKB()">⌨️ Bàn phím Cyrillic</button>
    </div>
    <div id="search-results" class="search-results"></div>
  `;

  const input = document.getElementById('search-input');
  input.addEventListener('input', doSearch);
  input.addEventListener('focus', () => input.select());

  // Init state
  window._searchDir = 'both';
  window._kbShift = false;
  window._kbVisible = false;

  if (initQuery) doSearch();
  else input.focus();
}

function setDir(dir, btn) {
  window._searchDir = dir;
  document.querySelectorAll('.dir-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  doSearch();
}

function clearSearch() {
  const inp = document.getElementById('search-input');
  if (inp) { inp.value = ''; inp.focus(); }
  document.getElementById('search-results').innerHTML = '';
}

function toggleKB() {
  window._kbVisible = !window._kbVisible;
  document.getElementById('cyr-kb').style.display = window._kbVisible ? 'block' : 'none';
}

function insertChar(c) {
  const inp = document.getElementById('search-input');
  if (!inp) return;
  const ch = window._kbShift ? c.toUpperCase() : c;
  const start = inp.selectionStart;
  inp.value = inp.value.slice(0, start) + ch + inp.value.slice(inp.selectionEnd);
  inp.selectionStart = inp.selectionEnd = start + ch.length;
  inp.focus();
  doSearch();
}

function deleteChar() {
  const inp = document.getElementById('search-input');
  if (!inp || inp.selectionStart === 0) return;
  const s = inp.selectionStart;
  inp.value = inp.value.slice(0, s-1) + inp.value.slice(s);
  inp.selectionStart = inp.selectionEnd = s-1;
  doSearch();
}

function toggleShift() {
  window._kbShift = !window._kbShift;
  document.querySelector('.kb-shift').classList.toggle('active', window._kbShift);
}

// Fuzzy search
function fuzzyMatch(str, query) {
  str = str.toLowerCase(); query = query.toLowerCase();
  if (str.includes(query)) return true;
  // simple fuzzy: all chars of query appear in order in str
  let qi = 0;
  for (let c of str) { if (c === query[qi]) qi++; if (qi === query.length) return true; }
  return false;
}

function doSearch() {
  const inp = document.getElementById('search-input');
  const resultsEl = document.getElementById('search-results');
  if (!inp || !resultsEl) return;
  const q = inp.value.trim();
  if (!q) { resultsEl.innerHTML = '<p class="search-hint">Nhập từ để tìm kiếm...</p>'; return; }

  const dir = window._searchDir || 'both';
  const results = DICTIONARY.filter(w => {
    const inRu = fuzzyMatch(w.ru, q) || (w.stressed && fuzzyMatch(w.stressed, q));
    const inVi = w.vi.some(v => fuzzyMatch(v, q));
    if (dir === 'ru') return inRu;
    if (dir === 'vi') return inVi;
    return inRu || inVi;
  }).slice(0, 20);

  if (!results.length) {
    resultsEl.innerHTML = `<div class="no-results"><p>Không tìm thấy từ "<strong>${q}</strong>"</p><p class="search-hint">Thử tìm theo cách khác hoặc dùng bàn phím Cyrillic</p></div>`;
    return;
  }
  resultsEl.innerHTML = `
    <p class="results-count">${results.length} kết quả</p>
    <div class="words-grid">${results.map(w => renderWordCard(w)).join('')}</div>
  `;
}
