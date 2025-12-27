// الترجمة
const translations = {
  ar: {
    home: "الرئيسية",
    menu: "القائمة",
    contact: "الاتصال",
    heroTitle: "مرحبا بكم في Restoreno Corner",
    heroText: "اكتشف أطباقنا اللذيذة والمشروبات المنعشة",
    heroButton: "شوف القائمة",
    menuTitle: "قائمة الطعام",
    menuNote: "يمكنك الضغط على أي صنف لرؤية التفاصيل",
    contactTitle: "اتصل بنا",
    contactName: "الاسم",
    contactEmail: "البريد الإلكتروني",
    contactMessage: "رسالتك",
    contactButton: "إرسال",
    reservationDate: "اختر التاريخ",
    reservationTime: "اختر الوقت",
    reservationPersons: "عدد الأشخاص",
    rating: "تقييم",
    catPlats: "أطباق رئيسية",
    catSandwich: "سندويشات",
    catPanini: "بانيني",
    catPizza: "بيتزا",
    catJuice: "عصائر / مشروبات",
    catDessert: "تحليات",
    catCoffee: "قهوة / شاي",
    whyUsTitle: "لماذا Restoreno Corner؟",
    whyUsText: "جودة عالية، أطباق متنوعة، أجواء مريحة، وخدمة سريعة",
    footerAddress: "العنوان: شارع المثال، المدينة",
    footerPhone: "الهاتف :0604610088 X",
    footerHours: "ساعات العمل: 10:00 – 23:00",
    footerCopyright: "© 2025 Restoreno Corner. جميع الحقوق محفوظة.",
    viewFullMenu: "عرض القائمة الكاملة",
    // Pizzas
    pizza1Name: "مارغريتا",
    pizza1Desc: "صلصة طماطم، جبن موزاريلا، ريحان",
    pizza2Name: "بيبروني",
    pizza2Desc: "صلصة طماطم، جبن موزاريلا، بيبروني",
    // Juices
    orangeName: "عصير برتقال",
    orangeDesc: "طازج وبارد",
    limonName: "عصير ليمون",
    limonDesc: "طازج ومنعش",
    tfahName: "عصير تفاح",
    tfahDesc: "طازج وبارد",
    banaName: "عصير موز",
    banaDesc: "طازج ومغذي",
    // Desserts
    tarteName: "تارت",
    tarteDesc: "مع حشوة الفواكه",
    glaceName: "آيس كريم",
    glaceDesc: "نكهات متعددة: فانيليا، شوكولاتة، فراولة، Mix",
    // Coffee
    cafe1Name: "قهوة",
    cafe1Desc: "Espresso, Latte, Cappuccino",
    americanoName: "أميريكانو",
    americanoDesc: "Espresso مع ماء ساخن",
    mochaName: "موكا",
    mochaDesc: "Espresso مع شوكولاتة ساخنة"
    // يمكن إضافة باقي المفاتيح لكل الأصناف هنا
  },
  fr: {
    home: "Accueil",
    menu: "Menu",
    contact: "Contact",
    heroTitle: "Bienvenue chez Restoreno Corner",
    heroText: "Découvrez nos plats délicieux et boissons rafraîchissantes",
    heroButton: "Voir le menu",
    menuTitle: "Carte",
    menuNote: "Cliquez sur un plat pour voir les détails",
    contactTitle: "Contactez-nous",
    contactName: "Nom",
    contactEmail: "Email",
    contactMessage: "Votre message",
    contactButton: "Envoyer",
    reservationDate: "Sélectionnez la date",
    reservationTime: "Sélectionnez l'heure",
    reservationPersons: "Nombre de personnes",
    rating: "Évaluation",
    catPlats: "Plats principaux",
    catSandwich: "Sandwiches",
    catPanini: "Paninis",
    catPizza: "Pizzas",
    catJuice: "Jus / Boissons",
    catDessert: "Desserts",
    catCoffee: "Café / Thé",
    whyUsTitle: "Pourquoi Restoreno Corner ?",
    whyUsText: "Qualité supérieure, plats variés, ambiance confortable et service rapide",
    footerAddress: "Adresse : Rue Exemple, Ville",
    footerPhone: "Téléphone : 0604610088 X",
    footerHours: "Heures d'ouverture : 10:00 – 23:00",
    footerCopyright: "© 2025 Restoreno Corner. Tous droits réservés.",
    viewFullMenu: "Voir le menu complet",
    // Pizzas
    pizza1Name: "Margherita",
    pizza1Desc: "Sauce tomate, Mozzarella, Basilic",
    pizza2Name: "Pepperoni",
    pizza2Desc: "Sauce tomate, Mozzarella, Pepperoni",
    // Juices
    orangeName: "Jus d'Orange",
    orangeDesc: "Frais et froid",
    limonName: "Jus de Citron",
    limonDesc: "Frais et rafraîchissant",
    tfahName: "Jus de Pomme",
    tfahDesc: "Frais et froid",
    banaName: "Jus de Banane",
    banaDesc: "Frais et nutritif",
    // Desserts
    tarteName: "Tarte",
    tarteDesc: "Aux fruits",
    glaceName: "Glace",
    glaceDesc: "Parfums variés : Vanille, Chocolat, Fraise, Mix",
    // Coffee
    cafe1Name: "Café",
    cafe1Desc: "Espresso, Latte, Cappuccino",
    americanoName: "Americano",
    americanoDesc: "Espresso à l'eau chaude",
    mochaName: "Mocha",
    mochaDesc: "Espresso au chocolat chaud"
    // إضافة المفاتيح لكل الأصناف
  }
};

// تغيير اللغة
function setLang(lang) {
  localStorage.setItem('lang', lang); // تخزين اللغة
  applyLang(lang);
}

// تطبيق اللغة على النصوص
function applyLang(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  // Contact form placeholders
  if (document.getElementById('contact-name')) {
    document.getElementById('contact-name').placeholder = translations[lang].contactName;
    document.getElementById('contact-email').placeholder = translations[lang].contactEmail;
    document.getElementById('contact-message').placeholder = translations[lang].contactMessage;
    document.getElementById('contact-button').textContent = translations[lang].contactButton;
    document.getElementById('reservation-date').placeholder = translations[lang].reservationDate;
    document.getElementById('reservation-time').placeholder = translations[lang].reservationTime;
    document.getElementById('reservation-persons').placeholder = translations[lang].reservationPersons;
    document.querySelector('label[for="rating"]').textContent = translations[lang].rating;
  }
}

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'ar';
  applyLang(lang);
});

// Toggle التفاصيل لكل صنف Menu
function toggleDetails(id) {
  const el = document.getElementById(id);
  if (el.style.display === 'none') el.style.display = 'block';
  else el.style.display = 'none';
}

// EmailJS Initialization
(function () {
  if (window.emailjs) emailjs.init("l_GCMRTd7VtCWFLmI");
})();

// Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Collect form data
      const templateParams = {
        from_name: document.getElementById('contact-name').value,
        from_email: document.getElementById('contact-email').value,
        message: document.getElementById('contact-message').value,
        date: document.getElementById('reservation-date').value,
        time: document.getElementById('reservation-time').value,
        persons: document.getElementById('reservation-persons').value,
        rating: document.getElementById('rating').value
      };

      // Send email
      emailjs.send('service_g91kg07', 'template_0kyfqzc', templateParams)
        .then(function () {
          const lang = localStorage.getItem('lang') || 'ar';
          if (lang === 'ar') alert('تم إرسال رسالتك بنجاح!');
          else alert('Votre message a été envoyé avec succès!');

          contactForm.reset();
        }, function (error) {
          console.error('FAILED...', error);
          const lang = localStorage.getItem('lang') || 'ar';
          if (lang === 'ar') alert('حدث خطأ في الإرسال، يرجى المحاولة لاحقاً.');
          else alert('Échec de l\'envoi, veuillez réessayer plus tard.');
        });
    });
  }
});
