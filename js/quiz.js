// ===== QUIZ MODULE =====
let qzState = {};

function renderQuiz() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="page-header"><h2>✅ Quiz</h2><p>Kiểm tra từ vựng của bạn</p></div>
    <div class="quiz-setup">
      <div class="quiz-setup-options">
        <label>Chủ đề:
          <select id="qz-topic">
            <option value="all">Tất cả</option>
            ${TOPICS.map(t=>`<option value="${t.id}">${t.icon} ${t.vi}</option>`).join('')}
          </select>
        </label>
        <label>Dạng bài:
          <select id="qz-type">
            <option value="mcq">Trắc nghiệm 4 đáp án</option>
            <option value="match">Ghép cặp Nga-Việt</option>
          </select>
        </label>
        <label>Số câu:
          <select id="qz-count">
            <option value="5">5 câu</option>
            <option value="10" selected>10 câu</option>
            <option value="20">20 câu</option>
          </select>
        </label>
      </div>
      <button class="btn-primary" onclick="startQuiz()">Bắt đầu Quiz →</button>
    </div>
    <div id="quiz-area"></div>
  `;
}

function startQuiz() {
  const topicId = document.getElementById('qz-topic').value;
  const type = document.getElementById('qz-type').value;
  const count = parseInt(document.getElementById('qz-count').value);

  let pool = topicId === 'all' ? DICTIONARY : DICTIONARY.filter(w => w.topic === topicId);
  if (pool.length < 4) { alert('Chủ đề cần ít nhất 4 từ để làm quiz!'); return; }

  const questions = [...pool].sort(() => Math.random() - 0.5).slice(0, count);
  qzState = { questions, current: 0, score: 0, type, answered: false };

  document.querySelector('.quiz-setup').style.display = 'none';
  if (type === 'mcq') renderMCQ();
  else renderMatch();
}

function renderMCQ() {
  const area = document.getElementById('quiz-area');
  const { questions, current } = qzState;
  if (current >= questions.length) { renderQuizResult(); return; }

  const q = questions[current];
  const pool = DICTIONARY.filter(w => w.id !== q.id);
  const wrongs = pool.sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [...wrongs, q].sort(() => Math.random() - 0.5);

  area.innerHTML = `
    <div class="quiz-progress">Câu ${current+1} / ${questions.length} · Điểm: ${qzState.score}</div>
    <div class="quiz-question-card">
      <div class="qz-prompt">Từ này có nghĩa là gì?</div>
      <div class="qz-word" onclick="App.speak('${q.ru}')">${q.stressed||q.ru} 🔊</div>
      <div class="qz-ipa">${q.ipa}</div>
      <div class="qz-options">
        ${options.map(opt => `
          <button class="qz-option" id="opt-${opt.id}" onclick="answerMCQ('${opt.id}','${q.id}')">
            ${opt.vi[0]}
          </button>
        `).join('')}
      </div>
      <div id="qz-feedback" class="qz-feedback"></div>
    </div>
  `;
  qzState.answered = false;
}

function answerMCQ(chosenId, correctId) {
  if (qzState.answered) return;
  qzState.answered = true;
  const correct = chosenId === correctId;
  if (correct) qzState.score++;
  const feedback = document.getElementById('qz-feedback');
  document.querySelectorAll('.qz-option').forEach(btn => {
    btn.disabled = true;
    if (btn.id === `opt-${correctId}`) btn.classList.add('correct');
    else if (btn.id === `opt-${chosenId}` && !correct) btn.classList.add('wrong');
  });
  const q = qzState.questions[qzState.current];
  feedback.innerHTML = correct
    ? `<span class="fb-correct">✓ Đúng!</span> — ${q.ru} = ${q.vi.join(', ')}`
    : `<span class="fb-wrong">✗ Sai.</span> Đáp án đúng: <strong>${q.vi[0]}</strong><br>"${q.examples[0]?.ru||''}"`;
  feedback.style.display = 'block';
  setTimeout(() => {
    qzState.current++;
    if (qzState.type === 'mcq') renderMCQ();
    else renderMatch();
  }, 1800);
}

function renderMatch() {
  const area = document.getElementById('quiz-area');
  const { questions, current } = qzState;
  if (current >= questions.length) { renderQuizResult(); return; }

  // Take batch of 4
  const batch = questions.slice(current, current+4);
  const lefts = [...batch].sort(() => Math.random() - 0.5);
  const rights = [...batch].sort(() => Math.random() - 0.5);

  let selected = null;
  let matchedCount = 0;

  area.innerHTML = `
    <div class="quiz-progress">Câu ${current+1}-${Math.min(current+4,questions.length)} / ${questions.length} · Điểm: ${qzState.score}</div>
    <div class="quiz-question-card">
      <div class="qz-prompt">Ghép từ Nga với nghĩa tiếng Việt tương ứng</div>
      <div class="match-grid">
        <div class="match-col" id="match-left">
          ${lefts.map(w=>`<button class="match-item left" data-id="${w.id}" onclick="matchClick(this,'left')">${w.stressed||w.ru}</button>`).join('')}
        </div>
        <div class="match-col" id="match-right">
          ${rights.map(w=>`<button class="match-item right" data-id="${w.id}" onclick="matchClick(this,'right')">${w.vi[0]}</button>`).join('')}
        </div>
      </div>
    </div>
  `;
  window._matchSelected = null;
  window._matchBatch = batch;
  window._matchMatched = 0;
}

function matchClick(btn, side) {
  if (btn.disabled) return;
  const prev = window._matchSelected;
  if (!prev) {
    window._matchSelected = { btn, side };
    btn.classList.add('selected');
    return;
  }
  if (prev.side === side) {
    prev.btn.classList.remove('selected');
    window._matchSelected = { btn, side };
    btn.classList.add('selected');
    return;
  }
  // Check match
  prev.btn.classList.remove('selected');
  window._matchSelected = null;
  if (prev.btn.dataset.id === btn.dataset.id) {
    prev.btn.classList.add('matched'); btn.classList.add('matched');
    prev.btn.disabled = true; btn.disabled = true;
    qzState.score++;
    window._matchMatched++;
    if (window._matchMatched >= window._matchBatch.length) {
      setTimeout(() => { qzState.current += window._matchBatch.length; renderMatch(); }, 800);
    }
  } else {
    prev.btn.classList.add('wrong-flash'); btn.classList.add('wrong-flash');
    setTimeout(() => { prev.btn.classList.remove('wrong-flash'); btn.classList.remove('wrong-flash'); }, 600);
  }
}

function renderQuizResult() {
  const area = document.getElementById('quiz-area');
  const pct = Math.round(qzState.score / qzState.questions.length * 100);
  const stars = pct >= 90 ? '⭐⭐⭐' : pct >= 70 ? '⭐⭐' : '⭐';
  area.innerHTML = `
    <div class="quiz-result">
      <div class="result-stars">${stars}</div>
      <h3>Kết quả Quiz</h3>
      <div class="result-score">${qzState.score} / ${qzState.questions.length}</div>
      <div class="result-pct">${pct}%</div>
      <p>${pct>=90?'Xuất sắc! Товарищ молодец!':pct>=70?'Tốt lắm! Tiếp tục cố gắng!':'Cần ôn luyện thêm. Не сдавайся!'}</p>
      <div class="result-actions">
        <button class="btn-primary" onclick="renderQuiz()">Làm bài mới</button>
        <button class="btn-secondary" onclick="App.navigate('flash')">Luyện Flashcard</button>
      </div>
    </div>
  `;
}
