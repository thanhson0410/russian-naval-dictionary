// ===== APP CORE =====
const App = {
  currentView: 'home',
  bookmarks: JSON.parse(localStorage.getItem('rnd_bookmarks') || '[]'),
  history: JSON.parse(localStorage.getItem('rnd_history') || '[]'),

  init() {
    this.renderNav();
    this.bindGlobalEvents();
    this.navigate('home');
  },

  navigate(view, param = null) {
    this.currentView = view;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.nav-btn[data-view="${view}"]`);
    if (btn) btn.classList.add('active');

    const main = document.getElementById('main-content');
    main.classList.add('fade-out');
    setTimeout(() => {
      main.innerHTML = '';
      switch (view) {
        case 'home':    renderHome(); break;
        case 'search':  renderSearch(param); break;
        case 'topics':  renderTopics(); break;
        case 'topic':   renderTopicWords(param); break;
        case 'word':    renderWordDetail(param); break;
        case 'flash':   renderFlashcard(); break;
        case 'quiz':    renderQuiz(); break;
        case 'grammar': renderGrammar(); break;
      }
      main.classList.remove('fade-out');
    }, 150);
  },

  renderNav() {
    const nav = document.getElementById('nav-links');
    const links = [
      { view: 'home',    icon: '🏠', label: 'Trang chủ' },
      { view: 'search',  icon: '🔍', label: 'Tra cứu' },
      { view: 'topics',  icon: '📂', label: 'Chủ đề' },
      { view: 'flash',   icon: '🃏', label: 'Flashcard' },
      { view: 'quiz',    icon: '✅', label: 'Quiz' },
      { view: 'grammar', icon: '📖', label: 'Ngữ pháp' },
    ];
    nav.innerHTML = links.map(l =>
      `<button class="nav-btn" data-view="${l.view}" onclick="App.navigate('${l.view}')" title="${l.label}">
        <span class="nav-icon">${l.icon}</span>
        <span class="nav-label">${l.label}</span>
      </button>`
    ).join('');
  },

  bindGlobalEvents() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.navigate('home');
    });
  },

  toggleBookmark(wordId) {
    const idx = this.bookmarks.indexOf(wordId);
    if (idx === -1) {
      this.bookmarks.push(wordId);
    } else {
      this.bookmarks.splice(idx, 1);
    }
    localStorage.setItem('rnd_bookmarks', JSON.stringify(this.bookmarks));
    return this.bookmarks.includes(wordId);
  },

  addHistory(wordId) {
    this.history = [wordId, ...this.history.filter(h => h !== wordId)].slice(0, 20);
    localStorage.setItem('rnd_history', JSON.stringify(this.history));
  },

  speak(text) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ru-RU';
    u.rate = 0.9;
    const voices = speechSynthesis.getVoices();
    const ruVoice = voices.find(v => v.lang.startsWith('ru'));
    if (ruVoice) u.voice = ruVoice;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }
};

// ===== HOME VIEW =====
function renderHome() {
  const main = document.getElementById('main-content');
  const total = DICTIONARY.length;
  const topics = TOPICS.length;
  main.innerHTML = `
    <div class="home-hero">
      <div class="hero-badge">⚓ TRUNG TÂM NHIỆT ĐỚI VIỆT - NGA</div>
      <h1 class="hero-title">Từ Điển Tiếng Nga<br><span class="hero-accent">Kỹ Thuật Hải Quân</span></h1>
      <p class="hero-sub">Công cụ học tập chuyên ngành cho học viên Quân chủng Hải quân — Chuẩn TRKI I (B1)</p>
      <div class="hero-stats">
        <div class="stat-card"><span class="stat-num">${total}</span><span class="stat-lbl">Mục từ</span></div>
        <div class="stat-card"><span class="stat-num">${topics}</span><span class="stat-lbl">Chủ đề</span></div>
        <div class="stat-card"><span class="stat-num">3</span><span class="stat-lbl">Ngữ pháp</span></div>
      </div>
      <div class="hero-actions">
        <button class="btn-primary" onclick="App.navigate('search')">🔍 Tra Cứu Ngay</button>
        <button class="btn-secondary" onclick="App.navigate('topics')">📂 Xem Chủ Đề</button>
        <button class="btn-secondary" onclick="App.navigate('flash')">🃏 Flashcard</button>
      </div>
    </div>
    <div class="home-quick">
      <h2 class="section-title">Chủ đề nổi bật</h2>
      <div class="topic-grid-mini">
        ${TOPICS.slice(0,6).map(t => `
          <div class="topic-mini-card" onclick="App.navigate('topic','${t.id}')" style="--tc:${t.color}">
            <span class="topic-icon">${t.icon}</span>
            <div class="topic-mini-info">
              <div class="topic-ru">${t.ru}</div>
              <div class="topic-vi">${t.vi}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="home-word-day">
      <h2 class="section-title">Từ của ngày hôm nay</h2>
      ${renderWordCard(DICTIONARY[Math.floor(Date.now()/86400000) % DICTIONARY.length])}
    </div>
  `;
}

// ===== WORD CARD =====
function renderWordCard(word) {
  if (!word) return '';
  const bookmarked = App.bookmarks.includes(word.id);
  return `
    <div class="word-card" onclick="App.navigate('word','${word.id}')">
      <div class="word-card-header">
        <div>
          <div class="word-ru">${word.stressed || word.ru}</div>
          <div class="word-ipa">${word.ipa}</div>
        </div>
        <div class="word-card-actions" onclick="event.stopPropagation()">
          <button class="icon-btn ${bookmarked?'bookmarked':''}" onclick="toggleBookmarkCard('${word.id}',this)" title="Đánh dấu">★</button>
          <button class="icon-btn speak-btn" onclick="App.speak('${word.ru}')" title="Phát âm">🔊</button>
        </div>
      </div>
      <div class="word-vi">${word.vi.join(' · ')}</div>
      <div class="word-meta">
        <span class="badge badge-pos">${word.pos}</span>
        ${word.gender ? `<span class="badge badge-gender">${{m:'Giống đực',f:'Giống cái',n:'Giống trung'}[word.gender]||word.gender}</span>` : ''}
        <span class="badge badge-topic">${TOPICS.find(t=>t.id===word.topic)?.icon||''} ${word.topic}</span>
        <span class="badge badge-trki">${word.trki}</span>
      </div>
      ${word.examples[0] ? `<div class="word-example">"${word.examples[0].ru}"</div>` : ''}
    </div>
  `;
}

function toggleBookmarkCard(wordId, btn) {
  const isBookmarked = App.toggleBookmark(wordId);
  btn.classList.toggle('bookmarked', isBookmarked);
}

// ===== WORD DETAIL VIEW =====
function renderWordDetail(wordId) {
  const word = DICTIONARY.find(w => w.id === wordId);
  if (!word) return;
  App.addHistory(wordId);
  const main = document.getElementById('main-content');
  const bookmarked = App.bookmarks.includes(wordId);

  const declRows = Object.entries(word.declensions).map(([k,v]) => {
    const labels = {nom:'Cách 1 (Nom)',gen:'Cách 2 (Gen)',dat:'Cách 3 (Dat)',acc:'Cách 4 (Acc)',ins:'Cách 5 (Ins)',pre:'Cách 6 (Pre)',nom_pl:'Số nhiều (Nom pl)',gen_pl:'Số nhiều (Gen pl)'};
    return v ? `<tr><td>${labels[k]||k}</td><td class="decl-form">${v}</td></tr>` : '';
  }).join('');

  main.innerHTML = `
    <div class="detail-page">
      <button class="back-btn" onclick="history.back()">← Quay lại</button>
      <div class="detail-header">
        <div class="detail-ru">${word.stressed || word.ru}</div>
        <div class="detail-ipa">${word.ipa}</div>
        <div class="detail-actions">
          <button class="btn-speak" onclick="App.speak('${word.ru}')">🔊 Phát âm</button>
          <button class="btn-bookmark ${bookmarked?'active':''}" id="detail-bm" onclick="toggleDetailBm('${wordId}')">
            ${bookmarked ? '★ Đã lưu' : '☆ Lưu từ'}
          </button>
        </div>
      </div>
      <div class="detail-body">
        <div class="detail-col">
          <div class="detail-section">
            <h3>Nghĩa tiếng Việt</h3>
            <ul class="vi-list">${word.vi.map(v=>`<li>${v}</li>`).join('')}</ul>
          </div>
          <div class="detail-section">
            <h3>Thông tin từ loại</h3>
            <div class="meta-grid">
              <span class="meta-key">Từ loại</span><span>${word.pos}</span>
              ${word.gender ? `<span class="meta-key">Giống</span><span>${{m:'Đực (мужской)',f:'Cái (женский)',n:'Trung (средний)'}[word.gender]||word.gender}</span>` : ''}
              <span class="meta-key">Chủ đề</span><span>${TOPICS.find(t=>t.id===word.topic)?.vi||word.topic}</span>
              <span class="meta-key">Cấp TRKI</span><span>${word.trki}</span>
            </div>
          </div>
          ${word.grammar ? `<div class="detail-section"><h3>Ghi chú ngữ pháp</h3><p class="grammar-note">${word.grammar}</p></div>` : ''}
        </div>
        <div class="detail-col">
          ${declRows ? `<div class="detail-section"><h3>Biến cách (Склонение)</h3><table class="decl-table"><tbody>${declRows}</tbody></table></div>` : ''}
          <div class="detail-section">
            <h3>Câu ví dụ</h3>
            ${word.examples.map((ex,i) => `
              <div class="example-block">
                <div class="ex-ru">
                  <button class="mini-speak" onclick="App.speak('${ex.ru.replace(/'/g,"\\'")}')">🔊</button>
                  ${ex.ru}
                </div>
                <div class="ex-vi">${ex.vi}</div>
              </div>
            `).join('')}
          </div>
          ${word.synonyms.length ? `<div class="detail-section"><h3>Từ đồng nghĩa</h3><div class="tag-list">${word.synonyms.map(s=>`<span class="tag" onclick="App.navigate('search','${s}')">${s}</span>`).join('')}</div></div>` : ''}
          ${word.related.length ? `<div class="detail-section"><h3>Từ liên quan</h3><div class="tag-list">${word.related.map(r=>`<span class="tag" onclick="App.navigate('search','${r}')">${r}</span>`).join('')}</div></div>` : ''}
        </div>
      </div>
    </div>
  `;
  history.pushState({view:'word',param:wordId}, '', `#word-${wordId}`);
}

function toggleDetailBm(wordId) {
  const isBookmarked = App.toggleBookmark(wordId);
  const btn = document.getElementById('detail-bm');
  btn.textContent = isBookmarked ? '★ Đã lưu' : '☆ Lưu từ';
  btn.classList.toggle('active', isBookmarked);
}

// ===== TOPICS VIEW =====
function renderTopics() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="page-header"><h2>📂 Học theo Chủ đề</h2><p>Chọn chủ đề để xem từ vựng</p></div>
    <div class="topics-grid">
      ${TOPICS.map(t => {
        const count = DICTIONARY.filter(w => w.topic === t.id).length;
        return `
          <div class="topic-card" onclick="App.navigate('topic','${t.id}')" style="--tc:${t.color}">
            <div class="topic-card-icon">${t.icon}</div>
            <div class="topic-card-ru">${t.ru}</div>
            <div class="topic-card-vi">${t.vi}</div>
            <div class="topic-card-count">${count} từ</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderTopicWords(topicId) {
  const topic = TOPICS.find(t => t.id === topicId);
  const words = DICTIONARY.filter(w => w.topic === topicId);
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="page-header">
      <button class="back-btn" onclick="App.navigate('topics')">← Chủ đề</button>
      <h2>${topic?.icon} ${topic?.ru}</h2>
      <p>${topic?.vi} · ${words.length} từ</p>
    </div>
    <div class="words-grid">
      ${words.map(w => renderWordCard(w)).join('')}
    </div>
  `;
}

// ===== GRAMMAR VIEW =====
function renderGrammar() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="page-header"><h2>📖 Ngữ pháp TRKI I</h2><p>Kiến thức ngữ pháp cốt lõi cấp B1</p></div>
    <div class="grammar-list">
      ${GRAMMAR.map(g => `
        <div class="grammar-card">
          <div class="grammar-card-header" onclick="toggleGrammar('${g.id}')">
            <span>${g.icon} ${g.title}</span>
            <span class="grammar-toggle" id="gt-${g.id}">▼</span>
          </div>
          <div class="grammar-card-body" id="gb-${g.id}" style="display:none">
            ${g.content}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function toggleGrammar(id) {
  const body = document.getElementById(`gb-${id}`);
  const toggle = document.getElementById(`gt-${id}`);
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  toggle.textContent = isOpen ? '▼' : '▲';
}

// Init
window.addEventListener('load', () => App.init());
