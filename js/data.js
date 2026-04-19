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

// === BỔ SUNG TỪ VỰNG ===
const EXTRA_WORDS = [
  {id:'nav_008',ru:'якорь',stressed:'якорь',ipa:'[ˈjakərʲ]',pos:'noun',gender:'m',vi:['neo','mỏ neo'],topic:'ships',trki:'specialized',declensions:{nom:'якорь',gen:'якоря',dat:'якорю',acc:'якорь',ins:'якорем',pre:'якоре',nom_pl:'якоря',gen_pl:'якорей'},examples:[{ru:'Корабль бросил якорь в бухте.',vi:'Tàu thả neo trong vịnh.'}],synonyms:[],related:['бухта','причал','порт'],grammar:'Danh từ giống đực, đuôi mềm -ь.'},
  {id:'nav_009',ru:'бухта',stressed:'бухта',ipa:'[ˈbuxtə]',pos:'noun',gender:'f',vi:['vịnh nhỏ','vịnh'],topic:'ships',trki:'specialized',declensions:{nom:'бухта',gen:'бухты',dat:'бухте',acc:'бухту',ins:'бухтой',pre:'бухте',nom_pl:'бухты',gen_pl:'бухт'},examples:[{ru:'Бухта защищена от штормов.',vi:'Vịnh được bảo vệ khỏi bão.'}],synonyms:['залив'],related:['якорь','порт','море'],grammar:'Danh từ giống cái.'},
  {id:'nav_010',ru:'руль',stressed:'руль',ipa:'[rulʲ]',pos:'noun',gender:'m',vi:['bánh lái','tay lái'],topic:'navigation',trki:'specialized',declensions:{nom:'руль',gen:'руля',dat:'рулю',acc:'руль',ins:'рулём',pre:'руле',nom_pl:'рули',gen_pl:'рулей'},examples:[{ru:'Рулевой держит руль.',vi:'Người lái giữ bánh lái.'}],synonyms:[],related:['штурвал','курс','навигация'],grammar:'Danh từ giống đực, đuôi mềm.'},
  {id:'nav_011',ru:'штурвал',stressed:'штурвал',ipa:'[ʂturˈval]',pos:'noun',gender:'m',vi:['vô lăng tàu','bánh lái'],topic:'navigation',trki:'specialized',declensions:{nom:'штурвал',gen:'штурвала',dat:'штурвалу',acc:'штурвал',ins:'штурвалом',pre:'штурвале',nom_pl:'штурвалы',gen_pl:'штурвалов'},examples:[{ru:'Капитан встал за штурвал.',vi:'Thuyền trưởng đứng vào bánh lái.'}],synonyms:['руль'],related:['курс','капитан','мостик'],grammar:'Danh từ giống đực.'},
  {id:'nav_012',ru:'маяк',stressed:'маяк',ipa:'[mɐˈjak]',pos:'noun',gender:'m',vi:['ngọn hải đăng','đèn hải đăng'],topic:'navigation',trki:'B1',declensions:{nom:'маяк',gen:'маяка',dat:'маяку',acc:'маяк',ins:'маяком',pre:'маяке',nom_pl:'маяки',gen_pl:'маяков'},examples:[{ru:'Маяк указывает путь кораблям ночью.',vi:'Hải đăng chỉ đường cho tàu vào ban đêm.'}],synonyms:[],related:['берег','навигация','море'],grammar:'Danh từ giống đực.'},
  {id:'nav_013',ru:'карта',stressed:'карта',ipa:'[ˈkartə]',pos:'noun',gender:'f',vi:['bản đồ','hải đồ'],topic:'navigation',trki:'A2',declensions:{nom:'карта',gen:'карты',dat:'карте',acc:'карту',ins:'картой',pre:'карте',nom_pl:'карты',gen_pl:'карт'},examples:[{ru:'Морская карта показывает глубины.',vi:'Hải đồ thể hiện độ sâu.'}],synonyms:['схема'],related:['компас','курс','навигация'],grammar:'Danh từ giống cái.'},
  {id:'wep_003',ru:'пушка',stressed:'пушка',ipa:'[ˈpuʂkə]',pos:'noun',gender:'f',vi:['pháo','khẩu pháo'],topic:'weapons',trki:'specialized',declensions:{nom:'пушка',gen:'пушки',dat:'пушке',acc:'пушку',ins:'пушкой',pre:'пушке',nom_pl:'пушки',gen_pl:'пушек'},examples:[{ru:'Корабельная пушка открыла огонь.',vi:'Pháo tàu chiến khai hỏa.'}],synonyms:['орудие','артиллерия'],related:['ракета','боеприпасы','огонь'],grammar:'Danh từ giống cái.'},
  {id:'wep_004',ru:'мина',stressed:'мина',ipa:'[ˈmʲinə]',pos:'noun',gender:'f',vi:['thủy lôi','mìn'],topic:'weapons',trki:'specialized',declensions:{nom:'мина',gen:'мины',dat:'мине',acc:'мину',ins:'миной',pre:'мине',nom_pl:'мины',gen_pl:'мин'},examples:[{ru:'Минное поле перекрыло пролив.',vi:'Bãi mìn chặn eo biển.'}],synonyms:[],related:['торпеда','взрыв','подводная лодка'],grammar:'Danh từ giống cái.'},
  {id:'rank_004',ru:'офицер',stressed:'офицер',ipa:'[əfʲɪˈtsɛr]',pos:'noun',gender:'m',vi:['sĩ quan'],topic:'ranks',trki:'B1',declensions:{nom:'офицер',gen:'офицера',dat:'офицеру',acc:'офицера',ins:'офицером',pre:'офицере',nom_pl:'офицеры',gen_pl:'офицеров'},examples:[{ru:'Офицер отдал честь командиру.',vi:'Sĩ quan chào chỉ huy.'}],synonyms:[],related:['капитан','адмирал','экипаж'],grammar:'Danh từ giống đực có sinh mệnh.'},
  {id:'rank_005',ru:'экипаж',stressed:'экипаж',ipa:'[ɪkʲɪˈpaʂ]',pos:'noun',gender:'m',vi:['thủy thủ đoàn','đội thủy thủ'],topic:'ranks',trki:'B1',declensions:{nom:'экипаж',gen:'экипажа',dat:'экипажу',acc:'экипаж',ins:'экипажем',pre:'экипаже',nom_pl:'экипажи',gen_pl:'экипажей'},examples:[{ru:'Экипаж корабля насчитывает 200 человек.',vi:'Thủy thủ đoàn gồm 200 người.'}],synonyms:['команда'],related:['матрос','капитан','корабль'],grammar:'Danh từ giống đực.'},
  {id:'cmd_003',ru:'товсь!',stressed:'товсь',ipa:'[tɐfˈsʲ]',pos:'interjection',gender:null,vi:['chuẩn bị!','sẵn sàng!'],topic:'commands',trki:'specialized',declensions:{},examples:[{ru:'Товсь к стрельбе!',vi:'Sẵn sàng khai hỏa!'}],synonyms:['готовсь'],related:['огонь','стоп','команда'],grammar:'Khẩu lệnh hải quân: chuẩn bị thực hiện lệnh tiếp theo.'},
  {id:'cmd_004',ru:'огонь!',stressed:'огонь',ipa:'[ɐˈɡonʲ]',pos:'interjection',gender:null,vi:['bắn!','khai hỏa!'],topic:'commands',trki:'specialized',declensions:{},examples:[{ru:'Огонь! Залп торпедами.',vi:'Bắn! Phóng ngư lôi loạt.'}],synonyms:[],related:['товсь','ракета','торпеда'],grammar:'Khẩu lệnh chiến đấu.'},
  {id:'hydro_003',ru:'глубина',stressed:'глубина',ipa:'[ɡlʊbʲɪˈna]',pos:'noun',gender:'f',vi:['độ sâu','chiều sâu'],topic:'hydro',trki:'B1',declensions:{nom:'глубина',gen:'глубины',dat:'глубине',acc:'глубину',ins:'глубиной',pre:'глубине',nom_pl:'глубины',gen_pl:'глубин'},examples:[{ru:'Глубина моря здесь — 500 метров.',vi:'Độ sâu biển ở đây là 500 mét.'}],synonyms:[],related:['море','эхолот','подводная лодка'],grammar:'Danh từ giống cái.'},
  {id:'hydro_004',ru:'прилив',stressed:'прилив',ipa:'[prʲɪˈlʲif]',pos:'noun',gender:'m',vi:['thủy triều lên','triều lên'],topic:'hydro',trki:'specialized',declensions:{nom:'прилив',gen:'прилива',dat:'приливу',acc:'прилив',ins:'приливом',pre:'приливе',nom_pl:'приливы',gen_pl:'приливов'},examples:[{ru:'Во время прилива вход в гавань опасен.',vi:'Lúc triều lên, việc vào cảng nguy hiểm.'}],synonyms:[],related:['отлив','море','волна'],grammar:'Danh từ giống đực.'},
  {id:'safety_002',ru:'спасательная шлюпка',stressed:'спасательная шлюпка',ipa:'[spɐˈsatʲɪlʲnəjə ˈʂlʲupkə]',pos:'noun phrase',gender:'f',vi:['xuồng cứu sinh','thuyền cứu hộ'],topic:'safety',trki:'specialized',declensions:{nom:'спасательная шлюпка',gen:'спасательной шлюпки',nom_pl:'спасательные шлюпки'},examples:[{ru:'Спустить спасательную шлюпку на воду!',vi:'Hạ thủy xuồng cứu sinh!'}],synonyms:[],related:['спасение','море','авария'],grammar:'Cụm danh từ giống cái.'},
  {id:'tech_002',ru:'антенна',stressed:'антенна',ipa:'[ɐnˈtʲenːə]',pos:'noun',gender:'f',vi:['ăng-ten','cột ăng-ten'],topic:'radar',trki:'specialized',declensions:{nom:'антенна',gen:'антенны',dat:'антенне',acc:'антенну',ins:'антенной',pre:'антенне',nom_pl:'антенны',gen_pl:'антенн'},examples:[{ru:'Антенна радара вращается непрерывно.',vi:'Ăng-ten ra-đa quay liên tục.'}],synonyms:[],related:['радар','связь','сигнал'],grammar:'Danh từ giống cái.'},
  {id:'tech_003',ru:'топливо',stressed:'топливо',ipa:'[ˈtoplʲɪvə]',pos:'noun',gender:'n',vi:['nhiên liệu','dầu'],topic:'tech',trki:'B1',declensions:{nom:'топливо',gen:'топлива',dat:'топливу',acc:'топливо',ins:'топливом',pre:'топливе',nom_pl:'топлива',gen_pl:'топлив'},examples:[{ru:'Запасы топлива на исходе.',vi:'Dự trữ nhiên liệu sắp cạn.'}],synonyms:['горючее'],related:['двигатель','скорость','бак'],grammar:'Danh từ giống trung.'},
  {id:'sub_001',ru:'перископ',stressed:'перископ',ipa:'[pʲɪrʲɪˈskop]',pos:'noun',gender:'m',vi:['kính tiềm vọng','periscope'],topic:'submarine',trki:'specialized',declensions:{nom:'перископ',gen:'перископа',dat:'перископу',acc:'перископ',ins:'перископом',pre:'перископе',nom_pl:'перископы',gen_pl:'перископов'},examples:[{ru:'Командир смотрит в перископ.',vi:'Chỉ huy nhìn qua kính tiềm vọng.'}],synonyms:[],related:['подводная лодка','глубина','наблюдение'],grammar:'Danh từ giống đực.'},
  {id:'sub_002',ru:'погружение',stressed:'погружение',ipa:'[pəɡrʊˈʐɛnʲɪjə]',pos:'noun',gender:'n',vi:['lặn xuống','sự lặn'],topic:'submarine',trki:'specialized',declensions:{nom:'погружение',gen:'погружения',dat:'погружению',acc:'погружение',ins:'погружением',pre:'погружении',nom_pl:'погружения',gen_pl:'погружений'},examples:[{ru:'Срочное погружение! Все по местам!',vi:'Lặn khẩn cấp! Mọi người vào vị trí!'}],synonyms:['нырок'],related:['подводная лодка','глубина','всплытие'],grammar:'Danh từ giống trung (động danh từ từ погружаться).'},
  {id:'base_003',ru:'причал',stressed:'причал',ipa:'[prʲɪˈtɕal]',pos:'noun',gender:'m',vi:['cầu cảng','bến tàu'],topic:'bases',trki:'specialized',declensions:{nom:'причал',gen:'причала',dat:'причалу',acc:'причал',ins:'причалом',pre:'причале',nom_pl:'причалы',gen_pl:'причалов'},examples:[{ru:'Корабль пришвартовался у причала.',vi:'Tàu cập bến cầu cảng.'}],synonyms:['пристань','набережная'],related:['порт','якорь','база'],grammar:'Danh từ giống đực.'},
  {id:'trki_003',ru:'докладывать',stressed:'докладывать',ipa:'[dɐˈkladɨvətʲ]',pos:'verb',gender:null,vi:['báo cáo','trình báo'],topic:'trki',trki:'B1',declensions:{nom:'докладывать',gen:'докладываю',dat:'докладываешь',acc:'докладывает'},examples:[{ru:'Офицер докладывает командиру о ситуации.',vi:'Sĩ quan báo cáo cho chỉ huy về tình hình.'}],synonyms:['сообщать','рапортовать'],related:['капитан','офицер','приказ'],grammar:'НСВ. СВ = доложить. Chia: я докладываю, ты докладываешь.'},
  {id:'ships_002',ru:'фрегат',stressed:'фрегат',ipa:'[frʲɪˈɡat]',pos:'noun',gender:'m',vi:['tàu hộ tống','frigate'],topic:'ships',trki:'specialized',declensions:{nom:'фрегат',gen:'фрегата',dat:'фрегату',acc:'фрегат',ins:'фрегатом',pre:'фрегате',nom_pl:'фрегаты',gen_pl:'фрегатов'},examples:[{ru:'Фрегат сопровождал авианосец.',vi:'Tàu hộ tống đi cùng tàu sân bay.'}],synonyms:[],related:['корабль','эсминец','флот'],grammar:'Danh từ giống đực.'},
  {id:'ships_003',ru:'авианосец',stressed:'авианосец',ipa:'[əvʲɪɐˈnosʲɪts]',pos:'noun',gender:'m',vi:['tàu sân bay'],topic:'ships',trki:'specialized',declensions:{nom:'авианосец',gen:'авианосца',dat:'авианосцу',acc:'авианосец',ins:'авианосцем',pre:'авианосце',nom_pl:'авианосцы',gen_pl:'авианосцев'},examples:[{ru:'Авианосец — крупнейший корабль флота.',vi:'Tàu sân bay là tàu lớn nhất trong hạm đội.'}],synonyms:[],related:['флот','самолёт','вертолёт'],grammar:'Danh từ giống đực có sinh mệnh (nhưng loại tàu — vô sinh: cách 4 = cách 1).'},
];
DICTIONARY.push(...EXTRA_WORDS);
