document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  const languageToggle = document.getElementById("languageToggle");
  const mainTitle = document.getElementById("mainTitle");
  const scrollTopLink = document.getElementById("scrollTopLink");

  let isEnglish = false;

  const content = {
    it: {
      mainTitle: "OVERPOPULATION",
      languageToggle: "🌍 IT / EN",
      titles: [
        "Introduzione",
        "Cause principali",
        "Conseguenze ambientali",
        "Problemi sociali",
        "Sovvrappopolazione e salute",
        "Soluzioni possibili",
        "Conclusione"
      ],
      texts: [
        "La sovrappopolazione si verifica quando il numero di persone in una determinata area supera la capacità dell’ambiente di fornire risorse sufficienti come cibo, acqua, alloggi e servizi sanitari. Questo squilibrio può compromettere la qualità della vita e aumentare le disuguaglianze sociali.",
        "Tra le cause principali troviamo i progressi della medicina, che riducono la mortalità, e l’aumento delle nascite, spesso legato alla mancanza di educazione sessuale e di accesso ai metodi contraccettivi. Anche fattori culturali e religiosi possono influenzare il numero di figli per famiglia.",
        "Un numero crescente di persone porta a un maggiore sfruttamento delle risorse naturali. La deforestazione, l’inquinamento di aria e acqua, e il cambiamento climatico sono aggravati dalla pressione esercitata dalla popolazione in crescita.",
        "Nei paesi con alta densità di popolazione, è più difficile garantire lavoro, casa e servizi pubblici adeguati. Le disuguaglianze si amplificano e molte persone vivono in condizioni precarie o in povertà estrema.",
        "In ambienti affollati, le malattie infettive si diffondono più facilmente e l’accesso a cure mediche tempestive diventa più difficile. Inoltre, la carenza di acqua pulita e servizi igienici adeguati può aumentare il rischio sanitario.",
        "Promuovere l’educazione, soprattutto tra le ragazze, favorire l’accesso alla pianificazione familiare e investire nei diritti delle donne sono strategie chiave. Anche le politiche ambientali e lo sviluppo sostenibile giocano un ruolo fondamentale.",
        "Affrontare la sovrappopolazione è una sfida globale che richiede impegno, collaborazione e soluzioni a lungo termine. Solo attraverso l’equilibrio tra popolazione e risorse potremo garantire un futuro vivibile per tutti."
      ]
    },
    en: {
      mainTitle: "OVERPOPULATION",
      languageToggle: "🌍 EN / IT",
      titles: [
        "Introduction",
        "Main causes",
        "Environmental consequences",
        "Social impacts",
        "Overpopulation and health",
        "Possible solutions",
        "Conclusion"
      ],
      texts: [
        "Overpopulation happens when the number of people in a specific area is higher than the environment’s ability to provide enough resources like food, water, housing, and healthcare. This imbalance can lower quality of life and increase social inequality.",
        "The main causes include medical advances that reduce death rates, and higher birth rates, often due to lack of sex education and limited access to contraception. Cultural and religious beliefs can also influence family size in many regions.",
        "A growing population increases the use of natural resources. Deforestation, air and water pollution, and climate change are all made worse by the pressure caused by population growth.",
        "In countries with high population density, it is harder to provide jobs, housing, and public services for everyone. Inequality increases, and many people are forced to live in poor or unsafe conditions.",
        "In crowded environments, infectious diseases spread more quickly and access to timely healthcare becomes harder. A lack of clean water and proper sanitation also increases health risks.",
        "Promoting education, especially for girls, supporting access to family planning, and investing in women’s rights are key strategies. Environmental policies and sustainable development also play an essential role.",
        "Dealing with overpopulation is a global challenge that needs commitment, cooperation, and long-term solutions. Only by balancing population and resources can we ensure a livable future for everyone."
      ]
    }
  };

  menuToggle?.addEventListener("click", () => {
    menu?.classList.toggle("active");
  });

  languageToggle?.addEventListener("click", () => {
    isEnglish = !isEnglish;
    const lang = isEnglish ? "en" : "it";
    const current = content[lang];

    mainTitle.querySelector("a").textContent = current.mainTitle;
    languageToggle.textContent = current.languageToggle;

    const oldTitles = document.querySelectorAll("h2[id^='title']");
    oldTitles.forEach((title, i) => {
      const newTitle = document.createElement("h2");
      newTitle.id = title.id;
      newTitle.textContent = current.titles[i];
      newTitle.style.fontWeight = "700"; 
      title.replaceWith(newTitle);
    });

    const texts = document.querySelectorAll("p[id^='text']");
    texts.forEach((text, i) => {
      text.style.transition = "opacity 0.3s ease-in-out";
      text.style.opacity = 0;

      setTimeout(() => {
        text.textContent = current.texts[i];
        text.style.opacity = 1;
      }, 300);
    });
  });

  scrollTopLink?.addEventListener("click", (e) => {
    e.preventDefault();
    menu?.classList.remove("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
