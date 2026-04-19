// ===== DỮ LIỆU TỪ ĐIỂN NGA - HẢI QUÂN =====
const TOPICS = [
  { id: "ships", ru: "Корабли и суда", vi: "Tàu chiến & tàu thuyền", icon: "⚓", color: "#1a3a5c" },
  { id: "weapons", ru: "Вооружение", vi: "Vũ khí trên tàu", icon: "🚀", color: "#2d1b4e" },
  { id: "navigation", ru: "Навигация", vi: "Hàng hải & điều hướng", icon: "🧭", color: "#1a4a3a" },
  { id: "radar", ru: "Радар, ГАС, связь", vi: "Radar, sonar, thông tin", icon: "📡", color: "#3a2a1a" },
  { id: "hydro", ru: "Гидрометеорология", vi: "Thủy văn & khí tượng", icon: "🌊", color: "#1a2a4a" },
  { id: "ranks", ru: "Звания и должности", vi: "Cấp bậc & chức vụ", icon: "🎖️", color: "#3a1a1a" },
  { id: "commands", ru: "Команды и приказы", vi: "Điều lệnh & khẩu lệnh", icon: "📢", color: "#1a3a2a" },
  { id: "tech", ru: "Техника и ремонт", vi: "Kỹ thuật & bảo dưỡng", icon: "🔧", color: "#2a2a1a" },
  { id: "bases", ru: "Базы и порты", vi: "Căn cứ, cảng, hậu cần", icon: "🏗️", color: "#1a1a3a" },
  { id: "safety", ru: "Безопасность", vi: "An toàn & cứu hộ", icon: "🆘", color: "#3a1a2a" },
  { id: "submarine", ru: "Подводные лодки", vi: "Tàu ngầm", icon: "🤿", color: "#1a4a4a" },
  { id: "marines", ru: "Морская пехота", vi: "Hải quân đánh bộ", icon: "⚔️", color: "#2a1a1a" },
  { id: "trki", ru: "TRKI I (B1)", vi: "Từ vựng TRKI I", icon: "📚", color: "#1a1a2a" }
];

const DICTIONARY = [
  {
    id:"nav_001", ru:"корабль", stressed:"кор`абль", ipa:"[kɐˈrablʲ]",
    pos:"noun", gender:"m", vi:["tàu","tàu chiến","con tàu"],
    topic:"ships", trki:"specialized",
    declensions:{nom:"корабль",gen:"корабля",dat:"кораблю",acc:"корабль",ins:"кораблём",pre:"корабле",nom_pl:"корабли",gen_pl:"кораблей"},
    examples:[{ru:"Военный корабль вошёл в порт.",vi:"Tàu chiến đã vào cảng."}],
    synonyms:["судно","военное судно"], related:["флот","эскадра","капитан"],
    grammar:"Danh từ giống đực, biến cách 2. Cách 4 = Cách 1 (vật không có sinh mệnh)."
  },
  {
    id:"nav_002", ru:"флот", stressed:"фл`от", ipa:"[flot]",
    pos:"noun", gender:"m", vi:["hạm đội","hải quân"],
    topic:"ships", trki:"specialized",
    declensions:{nom:"флот",gen:"флота",dat:"флоту",acc:"флот",ins:"флотом",pre:"флоте",nom_pl:"флоты",gen_pl:"флотов"},
    examples:[{ru:"Военно-морской флот России — один из крупнейших в мире.",vi:"Hải quân Nga là một trong những hải quân lớn nhất thế giới."}],
    synonyms:["военно-морской флот"], related:["корабль","эскадра","адмирал"],
    grammar:"Danh từ giống đực, biến cách 2."
  },
  {
    id:"nav_003", ru:"эскадра", stressed:"эск`адра", ipa:"[ɪsˈkadrə]",
    pos:"noun", gender:"f", vi:["phi đội","hải đội","chiến đoàn"],
    topic:"ships", trki:"specialized",
    declensions:{nom:"эскадра",gen:"эскадры",dat:"эскадре",acc:"эскадру",ins:"эскадрой",pre:"эскадре",nom_pl:"эскадры",gen_pl:"эскадр"},
    examples:[{ru:"Эскадра вышла в открытое море.",vi:"Hải đội ra khơi."}],
    synonyms:["соединение"], related:["флот","корабль","адмирал"],
    grammar:"Danh từ giống cái, biến cách 1."
  },
  {
    id:"nav_004", ru:"крейсер", stressed:"кр`ейсер", ipa:"[ˈkrejsʲɪr]",
    pos:"noun", gender:"m", vi:["tàu tuần dương","tuần dương hạm"],
    topic:"ships", trki:"specialized",
    declensions:{nom:"крейсер",gen:"крейсера",dat:"крейсеру",acc:"крейсер",ins:"крейсером",pre:"крейсере",nom_pl:"крейсера",gen_pl:"крейсеров"},
    examples:[{ru:"Ракетный крейсер патрулировал побережье.",vi:"Tàu tuần dương tên lửa tuần tra bờ biển."}],
    synonyms:[], related:["фрегат","эсминец","корабль"],
    grammar:"Danh từ giống đực, biến cách 2."
  },
  {
    id:"nav_005", ru:"подводная лодка", stressed:"подв`одная л`одка", ipa:"[pɐdˈvodnəjə ˈlotkə]",
    pos:"noun phrase", gender:"f", vi:["tàu ngầm"],
    topic:"submarine", trki:"specialized",
    declensions:{nom:"подводная лодка",gen:"подводной лодки",dat:"подводной лодке",acc:"подводную лодку",ins:"подводной лодкой",pre:"подводной лодке",nom_pl:"подводные лодки",gen_pl:"подводных лодок"},
    examples:[{ru:"Атомная подводная лодка погружается на глубину 300 метров.",vi:"Tàu ngầm hạt nhân lặn xuống độ sâu 300 mét."}],
    synonyms:["субмарина"], related:["торпеда","глубина","экипаж"],
    grammar:"Словосочетание: прил. + сущ. женского рода."
  },
  {
    id:"wep_001", ru:"ракета", stressed:"рак`ета", ipa:"[rɐˈkʲetə]",
    pos:"noun", gender:"f", vi:["tên lửa","hỏa tiễn"],
    topic:"weapons", trki:"specialized",
    declensions:{nom:"ракета",gen:"ракеты",dat:"ракете",acc:"ракету",ins:"ракетой",pre:"ракете",nom_pl:"ракеты",gen_pl:"ракет"},
    examples:[{ru:"Крылатая ракета поразила цель.",vi:"Tên lửa hành trình đã tiêu diệt mục tiêu."}],
    synonyms:["снаряд"], related:["торпеда","орудие","пуск"],
    grammar:"Danh từ giống cái, biến cách 1."
  },
  {
    id:"wep_002", ru:"торпеда", stressed:"торп`еда", ipa:"[tɐrˈpʲedə]",
    pos:"noun", gender:"f", vi:["ngư lôi","thủy lôi"],
    topic:"weapons", trki:"specialized",
    declensions:{nom:"торпеда",gen:"торпеды",dat:"торпеде",acc:"торпеду",ins:"торпедой",pre:"торпеде",nom_pl:"торпеды",gen_pl:"торпед"},
    examples:[{ru:"Подводная лодка выпустила торпеду.",vi:"Tàu ngầm phóng ngư lôi."}],
    synonyms:[], related:["ракета","мина","подводная лодка"],
    grammar:"Danh từ giống cái, biến cách 1."
  },
  {
    id:"nav_006", ru:"курс", stressed:"к`урс", ipa:"[kurs]",
    pos:"noun", gender:"m", vi:["hướng đi","hướng hành trình","khóa học"],
    topic:"navigation", trki:"B1",
    declensions:{nom:"курс",gen:"курса",dat:"курсу",acc:"курс",ins:"курсом",pre:"курсе",nom_pl:"курсы",gen_pl:"курсов"},
    examples:[{ru:"Корабль лёг на боевой курс.",vi:"Tàu đã vào hướng chiến đấu."}],
    synonyms:["направление","азимут"], related:["компас","навигация","маршрут"],
    grammar:"Danh từ giống đực, biến cách 2. Đa nghĩa: hướng đi / khóa học."
  },
  {
    id:"nav_007", ru:"компас", stressed:"к`омпас", ipa:"[ˈkompəs]",
    pos:"noun", gender:"m", vi:["la bàn"],
    topic:"navigation", trki:"B1",
    declensions:{nom:"компас",gen:"компаса",dat:"компасу",acc:"компас",ins:"компасом",pre:"компасе",nom_pl:"компасы",gen_pl:"компасов"},
    examples:[{ru:"Морской компас показывает направление на север.",vi:"La bàn hải quân chỉ hướng bắc."}],
    synonyms:[], related:["курс","карта","навигация"],
    grammar:"Danh từ giống đực, biến cách 2."
  },
  {
    id:"radar_001", ru:"радар", stressed:"рад`ар", ipa:"[rɐˈdar]",
    pos:"noun", gender:"m", vi:["ra-đa","radar"],
    topic:"radar", trki:"specialized",
    declensions:{nom:"радар",gen:"радара",dat:"радару",acc:"радар",ins:"радаром",pre:"радаре",nom_pl:"радары",gen_pl:"радаров"},
    examples:[{ru:"Радар обнаружил цель на расстоянии 50 километров.",vi:"Radar phát hiện mục tiêu ở khoảng cách 50 km."}],
    synonyms:["РЛС","локатор"], related:["дальность","цель","антенна"],
    grammar:"Danh từ giống đực, biến cách 2. Viết tắt: РЛС = радиолокационная станция."
  },
  {
    id:"radar_002", ru:"гидроакустика", stressed:"гидроак`устика", ipa:"[ɡɪdrɐɐˈkustʲɪkə]",
    pos:"noun", gender:"f", vi:["thủy âm học","sonar"],
    topic:"radar", trki:"specialized",
    declensions:{nom:"гидроакустика",gen:"гидроакустики",dat:"гидроакустике",acc:"гидроакустику",ins:"гидроакустикой",pre:"гидроакустике",nom_pl:"гидроакустики",gen_pl:"гидроакустик"},
    examples:[{ru:"Гидроакустика позволяет обнаруживать подводные лодки.",vi:"Thủy âm học cho phép phát hiện tàu ngầm."}],
    synonyms:["ГАС","сонар"], related:["эхолот","подводная лодка","радар"],
    grammar:"Danh từ giống cái, biến cách 1."
  },
  {
    id:"rank_001", ru:"адмирал", stressed:"адмир`ал", ipa:"[ədmʲɪˈral]",
    pos:"noun", gender:"m", vi:["đô đốc","đề đốc"],
    topic:"ranks", trki:"specialized",
    declensions:{nom:"адмирал",gen:"адмирала",dat:"адмиралу",acc:"адмирала",ins:"адмиралом",pre:"адмирале",nom_pl:"адмиралы",gen_pl:"адмиралов"},
    examples:[{ru:"Адмирал командует флотом.",vi:"Đô đốc chỉ huy hạm đội."}],
    synonyms:[], related:["флот","капитан","офицер"],
    grammar:"Danh từ giống đực có sinh mệnh — cách 4 = cách 2."
  },
  {
    id:"rank_002", ru:"капитан", stressed:"капит`ан", ipa:"[kəpʲɪˈtan]",
    pos:"noun", gender:"m", vi:["thuyền trưởng","đại úy","thủ trưởng"],
    topic:"ranks", trki:"B1",
    declensions:{nom:"капитан",gen:"капитана",dat:"капитану",acc:"капитана",ins:"капитаном",pre:"капитане",nom_pl:"капитаны",gen_pl:"капитанов"},
    examples:[{ru:"Капитан корабля отдал приказ.",vi:"Thuyền trưởng ra lệnh."}],
    synonyms:["командир"], related:["адмирал","офицер","экипаж"],
    grammar:"Danh từ giống đực có sinh mệnh — cách 4 = cách 2."
  },
  {
    id:"rank_003", ru:"матрос", stressed:"матр`ос", ipa:"[mɐˈtros]",
    pos:"noun", gender:"m", vi:["thủy thủ","lính hải quân"],
    topic:"ranks", trki:"B1",
    declensions:{nom:"матрос",gen:"матроса",dat:"матросу",acc:"матроса",ins:"матросом",pre:"матросе",nom_pl:"матросы",gen_pl:"матросов"},
    examples:[{ru:"Матрос стоит на вахте.",vi:"Thủy thủ đang trực ca."}],
    synonyms:["моряк","sailor"], related:["экипаж","капитан","корабль"],
    grammar:"Danh từ giống đực có sinh mệnh — cách 4 = cách 2."
  },
  {
    id:"cmd_001", ru:"стоп!", stressed:"ст`оп", ipa:"[stop]",
    pos:"interjection", gender:null, vi:["dừng lại!","stop!"],
    topic:"commands", trki:"specialized",
    declensions:{},
    examples:[{ru:"Стоп машина! Корабль остановился.",vi:"Dừng máy! Tàu đã dừng."}],
    synonyms:["halt"], related:["вперёд","назад","полный ход"],
    grammar:"Khẩu lệnh hàng hải: không biến cách."
  },
  {
    id:"cmd_002", ru:"полный вперёд", stressed:"п`олный впер`ёд", ipa:"[ˈpolnɨj fpʲɪˈrʲot]",
    pos:"phrase", gender:null, vi:["hết tốc lực tiến","full ahead"],
    topic:"commands", trki:"specialized",
    declensions:{},
    examples:[{ru:"Полный вперёд! Мы должны догнать противника.",vi:"Hết tốc tiến! Chúng ta phải đuổi kịp kẻ thù."}],
    synonyms:[], related:["стоп","назад","малый ход"],
    grammar:"Khẩu lệnh hàng hải cố định."
  },
  {
    id:"safety_001", ru:"спасательный жилет", stressed:"спас`ательный жил`ет", ipa:"[spɐˈsatʲɪlʲnɨj ʐɨˈlʲet]",
    pos:"noun phrase", gender:"m", vi:["áo phao","áo cứu sinh"],
    topic:"safety", trki:"specialized",
    declensions:{nom:"спасательный жилет",gen:"спасательного жилета",nom_pl:"спасательные жилеты"},
    examples:[{ru:"Наденьте спасательный жилет!",vi:"Hãy mặc áo phao!"}],
    synonyms:[], related:["спасение","море","безопасность"],
    grammar:"Cụm danh từ tính từ + danh từ giống đực."
  },
  {
    id:"hydro_001", ru:"волна", stressed:"волн`а", ipa:"[vɐlˈna]",
    pos:"noun", gender:"f", vi:["sóng","làn sóng"],
    topic:"hydro", trki:"B1",
    declensions:{nom:"волна",gen:"волны",dat:"волне",acc:"волну",ins:"волной",pre:"волне",nom_pl:"волны",gen_pl:"волн"},
    examples:[{ru:"Высокие волны затрудняли движение корабля.",vi:"Sóng cao gây khó khăn cho sự di chuyển của tàu."}],
    synonyms:["вал"], related:["море","ветер","шторм"],
    grammar:"Danh từ giống cái, biến cách 1."
  },
  {
    id:"hydro_002", ru:"шторм", stressed:"шт`орм", ipa:"[ʂtorm]",
    pos:"noun", gender:"m", vi:["bão biển","cơn bão"],
    topic:"hydro", trki:"B1",
    declensions:{nom:"шторм",gen:"шторма",dat:"шторму",acc:"шторм",ins:"штормом",pre:"шторме",nom_pl:"штормы",gen_pl:"штормов"},
    examples:[{ru:"Сильный шторм застиг корабль в открытом море.",vi:"Cơn bão mạnh bắt gặp tàu ngoài khơi."}],
    synonyms:["буря","ураган"], related:["волна","ветер","море"],
    grammar:"Danh từ giống đực, biến cách 2."
  },
  {
    id:"trki_001", ru:"здравствуйте", stressed:"зд`равствуйте", ipa:"[ˈzdrastvʊjtʲɪ]",
    pos:"interjection", gender:null, vi:["xin chào (trang trọng)"],
    topic:"trki", trki:"A1",
    declensions:{},
    examples:[{ru:"Здравствуйте, товарищ капитан!",vi:"Xin chào, đồng chí thuyền trưởng!"}],
    synonyms:["привет (informal)"], related:["до свидания","пожалуйста"],
    grammar:"Lời chào trang trọng, dùng với người lớn hơn hoặc cấp trên."
  },
  {
    id:"trki_002", ru:"понимать", stressed:"понима`ть", ipa:"[pənʲɪˈmatʲ]",
    pos:"verb", gender:null, vi:["hiểu","nhận thức"],
    topic:"trki", trki:"A2",
    declensions:{nom:"понимать",gen:"понимаю",dat:"понимаешь",acc:"понимает",ins:"понимаем",pre:"понимаете"},
    examples:[{ru:"Я понимаю приказ командира.",vi:"Tôi hiểu lệnh của chỉ huy."}],
    synonyms:["осознавать"], related:["знать","слышать","слушать"],
    grammar:"Động từ НСВ (chưa hoàn thành). СВ = понять. Chia: я понимаю, ты понимаешь, он понимает."
  },
  {
    id:"base_001", ru:"порт", stressed:"п`орт", ipa:"[port]",
    pos:"noun", gender:"m", vi:["cảng","cảng biển"],
    topic:"bases", trki:"B1",
    declensions:{nom:"порт",gen:"порта",dat:"порту",acc:"порт",ins:"портом",pre:"порту / порте",nom_pl:"порты",gen_pl:"портов"},
    examples:[{ru:"Корабль вернулся в порт после учений.",vi:"Tàu trở về cảng sau cuộc tập trận."}],
    synonyms:["гавань","пристань"], related:["база","якорь","причал"],
    grammar:"Danh từ giống đực, biến cách 2. Cách 6 dùng: в порту (vị trí cụ thể) / о порте (nói đến)."
  },
  {
    id:"base_002", ru:"военно-морская база", stressed:"военно-морск`ая б`аза", ipa:"[vʲɪˈjenːəmɐrˈskajə ˈbazə]",
    pos:"noun phrase", gender:"f", vi:["căn cứ hải quân"],
    topic:"bases", trki:"specialized",
    declensions:{nom:"военно-морская база",gen:"военно-морской базы",nom_pl:"военно-морские базы"},
    examples:[{ru:"Корабли базируются на военно-морской базе.",vi:"Các tàu đóng tại căn cứ hải quân."}],
    synonyms:[], related:["порт","флот","причал"],
    grammar:"Cụm tính từ ghép + danh từ giống cái."
  },
  {
    id:"tech_001", ru:"двигатель", stressed:"дв`игатель", ipa:"[ˈdvʲɪɡətʲɪlʲ]",
    pos:"noun", gender:"m", vi:["động cơ","máy","động lực"],
    topic:"tech", trki:"B1",
    declensions:{nom:"двигатель",gen:"двигателя",dat:"двигателю",acc:"двигатель",ins:"двигателем",pre:"двигателе",nom_pl:"двигатели",gen_pl:"двигателей"},
    examples:[{ru:"Главный двигатель корабля работает на дизельном топливе.",vi:"Động cơ chính của tàu chạy bằng dầu diesel."}],
    synonyms:["мотор","машина"], related:["топливо","скорость","ремонт"],
    grammar:"Danh từ giống đực, biến cách 2, đuôi mềm -ь."
  }
];

// Grammar reference data
const GRAMMAR = [
  {
    id: "cases",
    title: "6 Cách của Danh từ (Падежи)",
    icon: "📋",
    content: `
      <table class="grammar-table">
        <thead><tr><th>Cách</th><th>Tên Nga</th><th>Câu hỏi</th><th>Dùng khi</th></tr></thead>
        <tbody>
          <tr><td>Cách 1 (Nom)</td><td>Именительный</td><td>Кто? Что?</td><td>Chủ ngữ</td></tr>
          <tr><td>Cách 2 (Gen)</td><td>Родительный</td><td>Кого? Чего?</td><td>Sở hữu, phủ định</td></tr>
          <tr><td>Cách 3 (Dat)</td><td>Дательный</td><td>Кому? Чему?</td><td>Tặng cách, hướng đến</td></tr>
          <tr><td>Cách 4 (Acc)</td><td>Винительный</td><td>Кого? Что?</td><td>Tân ngữ trực tiếp</td></tr>
          <tr><td>Cách 5 (Ins)</td><td>Творительный</td><td>Кем? Чем?</td><td>Công cụ, phương tiện</td></tr>
          <tr><td>Cách 6 (Pre)</td><td>Предложный</td><td>О ком? О чём?</td><td>Địa điểm, chủ đề</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "motion_verbs",
    title: "Động từ chuyển động (Глаголы движения)",
    icon: "🚶",
    content: `
      <table class="grammar-table">
        <thead><tr><th>НСВ (một chiều)</th><th>НСВ (nhiều chiều)</th><th>Nghĩa</th></tr></thead>
        <tbody>
          <tr><td>идти</td><td>ходить</td><td>đi bộ</td></tr>
          <tr><td>ехать</td><td>ездить</td><td>đi (xe/tàu)</td></tr>
          <tr><td>плыть</td><td>плавать</td><td>bơi / đi thuyền</td></tr>
          <tr><td>лететь</td><td>летать</td><td>bay</td></tr>
          <tr><td>бежать</td><td>бегать</td><td>chạy</td></tr>
        </tbody>
      </table>
      <p style="margin-top:1rem;color:var(--text-muted)">⚓ Hải quân dùng nhiều: <strong>плыть / плавать</strong> — đi tàu trên biển.</p>
    `
  },
  {
    id: "verb_aspects",
    title: "Thể động từ (Виды глагола)",
    icon: "⚡",
    content: `
      <p>Tiếng Nga có 2 thể động từ:</p>
      <ul>
        <li><strong>НСВ</strong> (Несовершенный вид) — hành động <em>đang diễn ra / lặp lại / chưa hoàn thành</em>.</li>
        <li><strong>СВ</strong> (Совершенный вид) — hành động <em>đã hoàn thành / một lần / kết quả</em>.</li>
      </ul>
      <table class="grammar-table" style="margin-top:0.5rem">
        <thead><tr><th>НСВ</th><th>СВ</th><th>Nghĩa</th></tr></thead>
        <tbody>
          <tr><td>писать</td><td>написать</td><td>viết</td></tr>
          <tr><td>читать</td><td>прочитать</td><td>đọc</td></tr>
          <tr><td>понимать</td><td>понять</td><td>hiểu</td></tr>
          <tr><td>докладывать</td><td>доложить</td><td>báo cáo (HQ)</td></tr>
        </tbody>
      </table>
    `
  }
];
