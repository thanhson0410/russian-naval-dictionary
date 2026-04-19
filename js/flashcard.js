// ===== FLASHCARD MODULE =====
let fcState = {};

function renderFlashcard() {
  const words = [...DICTIONARY].sort(() => Math.random() - 0.5);
  fcState = { words, index: 0, flipped: false, correct: 0, total: 0 };
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="page-header"><h2>🃏 Flashcard</h2><p>Luyện nhớ từ vựng</p></div>
    <div class="fc-settings">
      <label>Chủ đề:
        <select id="fc-topic" onchange="fcChangeTopic()">
          <option value="all">Tất cả chủ đề</option>
          ${TOPICS.map(t=>`<option value="${t.id}">${t.icon} ${t.vi}</option>`).join('')}
        </select>
      </label>
      <label>Chiều:
        <select id="fc-dir">
          <option value="ru-vi">Nga → Việt</option>
          <option value="vi-ru">Việt → Nga</option>
        </select>
      </label>
    </div>
    <div class="fc-progress">
      <div id="fc-bar" class="fc-bar"><div id="fc-bar-fill" style="width:0%"></div></div>
      <span id="fc-counter">0 / ${words.length}</span>
    </div>
    <div id="fc-area" class="fc-area"></div>
    <div id="fc-controls" class="fc-controls" style="display:none">
      <button class="fc-btn fc-hard" onclick="fcRate('hard')">😰 Khó</button>
      <button class="fc-btn fc-ok" onclick="fcRate('ok')">🙂 Bình thường</button>
      <button class="fc-btn fc-easy" onclick="fcRate('easy')">😄 Dễ</button>
    </div>
  `;
  fcShow();
}

function fcChangeTopic() {
  const tid = document.getElementById('fc-topic').value;
  const words = tid === 'all' ? [...DICTIONARY] : DICTIONARY.filter(w => w.topic === tid);
  fcState.words = words.sort(() => Math.random() - 0.5);
  fcState.index = 0; fcState.correct = 0; fcState.total = 0;
  document.getElementById('fc-counter').textContent = `0 / ${words.length}`;
  document.getElementById('fc-bar-fill').style.width = '0%';
  document.getElementById('fc-controls').style.display = 'none';
  fcShow();
}

function fcShow() {
  const area = document.getElementById('fc-area');
  const { words, index } = fcState;
  if (index >= words.length) {
    area.innerHTML = `
      <div class="fc-done">
        <div class="fc-done-icon">🎉</div>
        <h3>Hoàn thành!</h3>
        <p>Đúng ${fcState.correct} / ${fcState.total} thẻ</p>
        <button class="btn-primary" onclick="renderFlashcard()">Làm lại</button>
      </div>`;
    document.getElementById('fc-controls').style.display = 'none';
    return;
  }
  const w = words[index];
  const dir = document.getElementById('fc-dir')?.value || 'ru-vi';
  const front = dir === 'ru-vi' ? `<div class="fc-word">${w.stressed||w.ru}</div><div class="fc-ipa">${w.ipa}</div>` : `<div class="fc-word vi">${w.vi[0]}</div>`;
  const back = dir === 'ru-vi' ? `<div class="fc-word vi">${w.vi.join(' · ')}</div>` : `<div class="fc-word">${w.stressed||w.ru}</div><div class="fc-ipa">${w.ipa}</div>`;

  fcState.flipped = false;
  area.innerHTML = `
    <div class="fc-card" id="fc-card" onclick="fcFlip()">
      <div class="fc-inner" id="fc-inner">
        <div class="fc-front">
          ${front}
          <div class="fc-topic">${TOPICS.find(t=>t.id===w.topic)?.icon||''} ${TOPICS.find(t=>t.id===w.topic)?.vi||w.topic}</div>
          <div class="fc-hint">Nhấn để lật thẻ</div>
        </div>
        <div class="fc-back">
          ${back}
          ${w.examples[0] ? `<div class="fc-example">"${w.examples[0].ru}"<br><em>${w.examples[0].vi}</em></div>` : ''}
          <button class="mini-speak fc-speak" onclick="event.stopPropagation();App.speak('${w.ru}')">🔊 Nghe</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('fc-controls').style.display = 'none';
}

function fcFlip() {
  if (fcState.flipped) return;
  fcState.flipped = true;
  document.getElementById('fc-inner').classList.add('flipped');
  document.getElementById('fc-controls').style.display = 'flex';
}

function fcRate(rating) {
  fcState.total++;
  if (rating !== 'hard') fcState.correct++;
  fcState.index++;
  const pct = (fcState.index / fcState.words.length * 100).toFixed(0);
  document.getElementById('fc-bar-fill').style.width = pct + '%';
  document.getElementById('fc-counter').textContent = `${fcState.index} / ${fcState.words.length}`;
  fcShow();
}
