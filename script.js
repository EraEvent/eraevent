const translations = {
  ua: {
    navAbout:"Про мене",navFormats:"Формати",navMedia:"Медіа",navPrice:"Прайс",navApproach:"Підхід",navContact:"Контакти",
    kicker:"Ведучий подій • Польща та Європа",title1:"ВЕДУЧИЙ, ЯКИЙ",title2:"СТВОРЮЄ ЕМОЦІЇ",
    intro:"Стиль, харизма та бездоганна імпровізація подій, які залишаються в пам’яті надовго.",cta:"Обговорити подію",
    typeWedding:"Весілля",typeCorporate:"Корпоративи",typePrivate:"Приватні події",aboutEyebrow:"Про мене",
    aboutTitle:"Не просто веду подію — а гарантую спокій і створюю емоції, які безціні.",
    aboutText:"Я — Alex Gera, ведучий із Варшави. Поєдную живу імпровізацію, сучасні інтерактиви й точне відчуття аудиторії. Без застарілих конкурсів, незручних пауз і шаблонних фраз.",
    statEvents:"проведених подій",statLanguages:"мови проведення",statScript:"персональний сценарій",
    formatsEyebrow:"Формати",formatsTitle:"Подія, яка звучить саме як ви.",formatWedding:"Весілля",
    formatWeddingText:"Щира церемонія, делікатний гумор і атмосфера, в якій комфортно кожному гостю.",
    formatCorporate:"Корпоративи",formatCorporateText:"Командна енергія, сучасні інтерактиви та динаміка без офісних кліше.",
    formatPrivate:"Приватні події",formatPrivateText:"Дні народження, відкриття й вечірки з персональним сценарієм та характером.",
    mediaEyebrow:"Медіа",mediaTitle:"Моменти, які говорять самі за себе.",priceEyebrow:"Пакети та вартість",
    priceTitle:"Оберіть формат вашої події.",priceText:"Кожен пакет можна адаптувати під тривалість, локацію та особливості вашого заходу.",
    pricePdf:"Переглянути повний прайс PDF",priceNote:"Ціна може змінюватися залежно від тривалості проведення.",
    approachEyebrow:"Мій підхід",approachTitle:"Спочатку слухаю. Потім дивую.",step1:"Знайомство",
    step1Text:"Дізнаюся про вас, гостей і настрій майбутньої події.",step2:"Сценарій",step2Text:"Створюю структуру та інтерактиви саме під вашу аудиторію.",
    step3:"Подія",step3Text:"Тримаю ритм, відчуваю зал і роблю так, щоб усі прожили цей вечір.",
    quote:"Хороший ведучий говорить. Сильний ведучий відчуває, коли говорити — і коли дати моменту відбутися.",
    contactEyebrow:"Ваша дата вільна?",contactTitle:"Створімо подію, яку гості ще довго обговорюватимуть.",
    contactText:"Напишіть мені дату, формат і кількість гостей — я запропоную концепцію та розрахую вартість.",
    contactCta:"Написати у WhatsApp",footer:"Ведучий у Варшаві • Польща • Європа"
  },
  pl: {
    navAbout:"O mnie",navFormats:"Formaty",navMedia:"Media",navPrice:"Cennik",navApproach:"Podejście",navContact:"Kontakt",
    kicker:"Prowadzący wydarzeń • Warszawa i Europa",title1:"PROWADZĄCY, KTÓRY",title2:"TWORZY EMOCJE",
    intro:"Styl, charyzma i doskonała improwizacja dla wydarzeń, które zostają w pamięci na długo.",cta:"Omówmy wydarzenie",
    typeWedding:"Wesela",typeCorporate:"Eventy firmowe",typePrivate:"Imprezy prywatne",aboutEyebrow:"O mnie",
    aboutTitle:"Nie tylko prowadzę wydarzenie — tworzę jego rytm.",
    aboutText:"Jestem Alex Gera, prowadzący z Warszawy. Łączę żywą improwizację, nowoczesne interakcje i wyczucie publiczności. Bez przestarzałych konkursów, niezręcznych pauz i schematów.",
    statEvents:"zrealizowanych wydarzeń",statLanguages:"języki prowadzenia",statScript:"indywidualny scenariusz",
    formatsEyebrow:"Formaty",formatsTitle:"Wydarzenie, które brzmi dokładnie jak Wy.",formatWedding:"Wesela",
    formatWeddingText:"Szczera ceremonia, subtelny humor i atmosfera komfortowa dla każdego gościa.",
    formatCorporate:"Eventy firmowe",formatCorporateText:"Energia zespołu, nowoczesne interakcje i dynamika bez biurowych schematów.",
    formatPrivate:"Imprezy prywatne",formatPrivateText:"Urodziny, otwarcia i przyjęcia z indywidualnym scenariuszem i charakterem.",
    mediaEyebrow:"Media",mediaTitle:"Chwile, które mówią same za siebie.",priceEyebrow:"Pakiety i ceny",
    priceTitle:"Wybierz format swojego wydarzenia.",priceText:"Każdy pakiet możemy dopasować do czasu trwania, miejsca i charakteru wydarzenia.",
    pricePdf:"Zobacz pełny cennik PDF",priceNote:"Cena może się zmienić w zależności od czasu trwania wydarzenia.",
    approachEyebrow:"Moje podejście",approachTitle:"Najpierw słucham. Potem zaskakuję.",step1:"Poznajmy się",
    step1Text:"Poznaję Was, gości i klimat przyszłego wydarzenia.",step2:"Scenariusz",step2Text:"Tworzę strukturę i interakcje dopasowane do Waszej publiczności.",
    step3:"Wydarzenie",step3Text:"Trzymam rytm, czuję salę i dbam, by każdy przeżył ten wieczór.",
    quote:"Dobry prowadzący mówi. Świetny prowadzący czuje, kiedy mówić — a kiedy pozwolić chwili wybrzmieć.",
    contactEyebrow:"Czy Wasz termin jest wolny?",contactTitle:"Stwórzmy wydarzenie, o którym goście będą długo rozmawiać.",
    contactText:"Napisz datę, format i liczbę gości — zaproponuję koncepcję i wycenę.",
    contactCta:"Napisz na WhatsApp",footer:"Prowadzący w Warszawie • Polska • Europa"
  }
};

const packages = {
  ua: [
    ["EVENT LITE","2999 zł",["Ведучий","Авторський сценарій"]],
    ["EVENT +","3999 zł",["Ведучий","DJ","Авторський сценарій","Церемонія у подарунок"]],
    ["EVENT PRO","4999 zł",["Ведучий","DJ","Звукове обладнання","Авторський сценарій","Церемонія у подарунок"]],
    ["EVENT PRO MAX","5999 zł",["Ведучий","DJ","Звукове обладнання","Світлове обладнання","Дим","Авторський сценарій","Церемонія у подарунок"]]
  ],
  pl: [
    ["EVENT LITE","2999 zł",["Prowadzący","Autorski scenariusz"]],
    ["EVENT +","3999 zł",["Prowadzący","DJ","Autorski scenariusz","Ceremonia w prezencie"]],
    ["EVENT PRO","4999 zł",["Prowadzący","DJ","Nagłośnienie","Autorski scenariusz","Ceremonia w prezencie"]],
    ["EVENT PRO MAX","5999 zł",["Prowadzący","DJ","Nagłośnienie","Oświetlenie","Dym","Autorski scenariusz","Ceremonia w prezencie"]]
  ]
};

function setLanguage(lang){
  const t=translations[lang];
  document.documentElement.lang=lang==="ua"?"uk":"pl";
  document.querySelectorAll("[data-t]").forEach(el=>{const value=t[el.dataset.t];if(value)el.textContent=value});
  document.querySelectorAll("[data-lang]").forEach(button=>button.classList.toggle("active",button.dataset.lang===lang));
  document.getElementById("pricingGrid").innerHTML=packages[lang].map((pack,i)=>`
    <article class="pricing-card ${i===3?"featured":""}">
      <div class="package-top"><span>0${i+1}</span>${i===3?"<em>MAX</em>":""}</div>
      <h3>${pack[0]}</h3><strong>${pack[1]}</strong>
      <ul>${pack[2].map(item=>`<li>${item}</li>`).join("")}</ul>
      <p>${t.priceNote}</p><a href="#contact">${t.cta}<b>↗</b></a>
    </article>`).join("");
  localStorage.setItem("eraevent-language",lang);
}

document.querySelectorAll("[data-lang]").forEach(button=>button.addEventListener("click",()=>setLanguage(button.dataset.lang)));
document.getElementById("year").textContent=new Date().getFullYear();

const lightbox=document.getElementById("lightbox");
const lightboxImage=lightbox.querySelector("img");
document.querySelectorAll(".media-photo").forEach(button=>button.addEventListener("click",()=>{
  lightboxImage.src=button.dataset.full;lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");
}));
function closeLightbox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");lightboxImage.src=""}
lightbox.addEventListener("click",closeLightbox);
lightbox.querySelector("button").addEventListener("click",closeLightbox);
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeLightbox()});

setLanguage(localStorage.getItem("eraevent-language")==="pl"?"pl":"ua");
