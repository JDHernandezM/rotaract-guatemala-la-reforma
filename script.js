document.addEventListener('DOMContentLoaded', function () {
  const translations = {
    en: {
      about: 'About',
      impact: 'Impact',
      programs: 'Programs',
      events: 'Events',
      contact: 'Contact',
      joinUs: 'Join Us',
      eyebrow: 'The world needs leaders, we train them',
      heroTitle: 'Young leaders building stronger communities in Guatemala La Reforma.',
      heroText:
        'We empower youth and young professionals to lead service projects, foster collaboration, and create lasting social impact across our community and our country.',
      memberCta: 'Become a Member',
      impactCta: 'See Our Impact',
      metricMembers: 'members engaged',
      metricProjects: 'service projects',
      metricPartners: 'community partners',
      badgeService: 'Service',
      badgeCommunity: 'Community',
      tagNetwork: 'Rotary Network',
      tagline: 'Leadership. Action. Impact.',
      badgeYouth: 'Youth',
      badgeInnovation: 'Innovation',
      logo1: 'Service Above Self',
      logo2: 'Community Leadership',
      logo3: 'Professional Growth',
      logo4: 'Global Connections',
      aboutTag: 'About us',
      aboutTitle: 'Driven by purpose, rooted in service.',
      aboutText:
        'Rotaract Guatemala La Reforma brings together young professionals, students, and leaders who believe that positive change begins with action. Through fellowship, professional development, and meaningful volunteer work, we create solutions that strengthen families, schools, and communities.',
      valueFellowship: 'Fellowship',
      valueFellowshipText:
        'We build lasting friendships through collaboration, cultural exchange, and shared commitment to service.',
      valueLeadership: 'Leadership',
      valueLeadershipText:
        'We develop the next generation of changemakers through mentorship, responsibility, and purpose-driven action.',
      valueCitizenship: 'Global Citizenship',
      valueCitizenshipText:
        'We connect local action to global goals, promoting inclusion, sustainability, and social responsibility.',
      impactTag: 'Our impact',
      impactTitle: 'Projects that move Guatemala forward.',
      impactPillEdu: 'Education',
      impactEduTitle: 'School support and youth empowerment',
      impactEduText:
        'We organize mentoring, reading initiatives, and learning resources that help young people thrive and reach their goals.',
      impactPillHealth: 'Health',
      impactHealthTitle: 'Community health outreach',
      impactHealthText:
        'From awareness campaigns to practical support, we promote healthier communities through preventative action.',
      impactPillEnv: 'Environment',
      impactEnvTitle: 'Green initiatives',
      impactEnvText:
        'We encourage sustainable solutions through cleanups, reforestation, and local environmental education.',
      programsTag: 'What we do',
      programsTitle: 'Service, learning, and leadership in action.',
      programLeadership: 'Leadership development',
      programLeadershipText:
        'Workshops, mentorship programs, and club leadership opportunities that help members grow personally and professionally.',
      programService: 'Community service',
      programServiceText:
        'Collaborative projects designed to address local needs and create a visible positive impact in neighborhoods and communities.',
      programSustainability: 'Sustainability',
      programSustainabilityText:
        'Initiatives focused on environmental awareness, resilience, and the long-term wellbeing of the communities we serve.',
      programGrowth: 'Professional growth',
      programGrowthText:
        'Networking, skill-building sessions, and practical learning experiences to support career and personal development.',
      eventsTag: 'Upcoming events',
      eventsTitle: 'Join our next chapter of service.',
      event1Title: 'Community Clean-up Day',
      event1Text: 'Hands-on action to improve public spaces and promote pride in our neighborhoods.',
      event2Title: 'Young Leaders Forum',
      event2Text: 'Networking, ideas exchange, and conversations on leadership and community impact.',
      event3Title: 'Health & Wellness Drive',
      event3Text: 'A community-centered outreach program focused on awareness, access, and support.',
      testimonialsTag: 'Why members join',
      testimonialsTitle: 'More than a club — a community of purpose.',
      alliesTag: 'Our allies',
      alliesTitle: 'Our allies',
      quote1: '“Rotaract gave me the confidence to lead projects that truly improve people’s lives.”',
      quote1Author: '— Member, Guatemala',
      quote2: '“I joined to connect with like-minded people. I stayed for the impact and the friendships.”',
      quote2Author: '— Volunteer leader',
      ctaTag: 'Become part of the movement',
      ctaTitle: 'Ready to serve, lead, and grow?',
      ctaButton: 'Get in touch',
      memberName: 'Name',
      memberAge: 'Age',
      memberWhatsApp: 'WhatsApp',
      memberWhatsAppHint: 'optional to receive information',
      memberLocation: 'Do you live in Guatemala City or the surrounding area?',
      memberLocationYes: 'Yes',
      memberLocationNo: 'No',
      memberAbout: 'Tell us a little about yourself',
      memberAboutHint: 'Tell us a little about your studies, work, or interests.',
      memberSocials: 'Social networks',
      memberNamePlaceholder: 'Your name',
      memberAgePlaceholder: 'Age',
      memberWhatsAppPlaceholder: 'Optional',
      memberAboutPlaceholder: 'Share your studies, work, or interests.',
      memberSocialsPlaceholder: 'Facebook, Instagram, TikTok, LinkedIn',
      ageWarningMessage: 'Given your age, we suggest you join a Rotary club.',
      footerText: 'The future is built by young people who believe in it',
      footerContact: 'Contact',
      footerEmail: 'Email: clubrotaractreforma@gmail.com',
      footerPhone: 'Phone: +502 4536 3348',
      footerLocation: 'Guatemala City, Guatemala',
      footerFollow: 'Follow us',
      footerBottom: '© 2026 Rotaract Guatemala La Reforma. Affiliated with Rotary International.'
    },
    es: {
      about: 'Nosotros',
      impact: 'Impacto',
      programs: 'Programas',
      events: 'Eventos',
      contact: 'Contacto',
      joinUs: 'Únete',
      eyebrow: 'El mundo necesita líderes, nosotros los formamos',
      heroTitle: 'Líderes jóvenes construyendo comunidades más fuertes en Guatemala La Reforma.',
      heroText:
        'Empoderamos a la juventud y a profesionales jóvenes para liderar proyectos de servicio, fomentar la colaboración y generar un impacto social duradero en nuestra comunidad y en nuestro país.',
      memberCta: 'Hazte socio',
      impactCta: 'Ver nuestro impacto',
      metricMembers: 'miembros activos',
      metricProjects: 'proyectos de servicio',
      metricPartners: 'aliados comunitarios',
      badgeService: 'Servicio',
      badgeCommunity: 'Comunidad',
      tagNetwork: 'Red Rotary',
      tagline: 'Liderazgo. Acción. Impacto.',
      badgeYouth: 'Juventud',
      badgeInnovation: 'Innovación',
      logo1: 'Servicio por encima de uno mismo',
      logo2: 'Liderazgo comunitario',
      logo3: 'Crecimiento profesional',
      logo4: 'Conexiones globales',
      aboutTag: 'Nosotros',
      aboutTitle: 'Impulsados por un propósito, arraigados en el servicio.',
      aboutText:
        'Rotaract Guatemala La Reforma reúne a jóvenes profesionales, estudiantes y líderes que creen que el cambio positivo comienza con la acción. A través del compañerismo, el desarrollo profesional y el trabajo voluntario, creamos soluciones que fortalecen familias, escuelas y comunidades.',
      valueFellowship: 'Compañerismo',
      valueFellowshipText:
        'Construimos amistades duraderas a través de la colaboración, el intercambio cultural y el compromiso compartido con el servicio.',
      valueLeadership: 'Liderazgo',
      valueLeadershipText:
        'Desarrollamos a la próxima generación de agentes de cambio mediante la mentoría, la responsabilidad y la acción orientada a un propósito.',
      valueCitizenship: 'Ciudadanía global',
      valueCitizenshipText:
        'Conectamos la acción local con metas globales, promoviendo la inclusión, la sostenibilidad y la responsabilidad social.',
      impactTag: 'Nuestro impacto',
      impactTitle: 'Proyectos que impulsan a Guatemala.',
      impactPillEdu: 'Educación',
      impactEduTitle: 'Apoyo escolar y empoderamiento juvenil',
      impactEduText:
        'Organizamos mentorías, iniciativas de lectura y recursos educativos que ayudan a las personas jóvenes a crecer y alcanzar sus metas.',
      impactPillHealth: 'Salud',
      impactHealthTitle: 'Atención sanitaria comunitaria',
      impactHealthText:
        'Desde campañas de sensibilización hasta apoyo práctico, promovemos comunidades más saludables mediante la prevención.',
      impactPillEnv: 'Medio ambiente',
      impactEnvTitle: 'Iniciativas verdes',
      impactEnvText:
        'Impulsamos soluciones sostenibles a través de jornadas de limpieza, reforestación y educación ambiental local.',
      programsTag: 'Qué hacemos',
      programsTitle: 'Servicio, aprendizaje y liderazgo en acción.',
      programLeadership: 'Desarrollo del liderazgo',
      programLeadershipText:
        'Talleres, programas de mentoría y oportunidades de liderazgo dentro del club para crecer personal y profesionalmente.',
      programService: 'Servicio comunitario',
      programServiceText:
        'Proyectos colaborativos diseñados para atender necesidades locales y generar un impacto positivo visible en barrios y comunidades.',
      programSustainability: 'Sostenibilidad',
      programSustainabilityText:
        'Iniciativas centradas en la conciencia ambiental, la resiliencia y el bienestar de largo plazo de las comunidades a las que servimos.',
      programGrowth: 'Crecimiento profesional',
      programGrowthText:
        'Redes de contacto, sesiones de desarrollo de habilidades y experiencias prácticas para apoyar la carrera y el crecimiento personal.',
      eventsTag: 'Próximos eventos',
      eventsTitle: 'Únete a nuestro próximo capítulo de servicio.',
      event1Title: 'Día de limpieza comunitaria',
      event1Text: 'Acción práctica para mejorar espacios públicos y fortalecer el orgullo en nuestros barrios.',
      event2Title: 'Foro de jóvenes líderes',
      event2Text: 'Red de contacto, intercambio de ideas y conversaciones sobre liderazgo e impacto comunitario.',
      event3Title: 'Campaña de salud y bienestar',
      event3Text: 'Un programa comunitario orientado a la sensibilización, el acceso y el apoyo.',
      testimonialsTag: 'Por qué se unen',
      testimonialsTitle: 'Más que un club: una comunidad con propósito.',
      alliesTag: 'Nuestros aliados',
      alliesTitle: 'Nuestros aliados',
      quote1: '“Rotaract me dio la confianza para liderar proyectos que realmente mejoran la vida de las personas.”',
      quote1Author: '— Socia, Guatemala',
      quote2: '“Entré para conectar con personas afines. Me quedé por el impacto y la amistad.”',
      quote2Author: '— Líder voluntaria',
      ctaTag: 'Forma parte del movimiento',
      ctaTitle: '¿Listo para servir, liderar y crecer?',
      ctaButton: 'Ponte en contacto',
      memberName: 'Nombre',
      memberAge: 'Edad',
      memberWhatsApp: 'WhatsApp',
      memberWhatsAppHint: 'opcional para recibir información',
      memberLocation: '¿Vives en la Ciudad de Guatemala o alrededores?',
      memberLocationYes: 'Sí',
      memberLocationNo: 'No',
      memberAbout: 'Cuéntanos brevemente sobre ti',
      memberAboutHint: 'Cuéntanos un poco sobre tus estudios, trabajo o intereses.',
      memberSocials: 'Redes sociales',
      memberNamePlaceholder: 'Tu nombre',
      memberAgePlaceholder: 'Edad',
      memberWhatsAppPlaceholder: 'Opcional',
      memberAboutPlaceholder: 'Comparte tus estudios, trabajo o intereses.',
      memberSocialsPlaceholder: 'Facebook, Instagram, TikTok, LinkedIn',
      ageWarningMessage: 'Por tu edad te sugerimos formar parte de un club Rotario',
      footerText: 'El futuro se construye con jóvenes que creen en él',
      footerContact: 'Contacto',
      footerEmail: 'Correo: clubrotaractreforma@gmail.com',
      footerPhone: 'Teléfono: +502 4536 3348',
      footerLocation: 'Ciudad de Guatemala, Guatemala',
      footerFollow: 'Síguenos',
      footerBottom: '© 2026 Rotaract Guatemala La Reforma. Afiliada a Rotary International.'
    }
  };

  const elements = document.querySelectorAll('[data-i18n]');
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  const langButtons = document.querySelectorAll('.lang-btn');
  const ageInput = document.getElementById('member-age');
  const ageWarning = document.getElementById('age-warning');
  const membershipForm = document.getElementById('membership-form');

  function updateAgeWarning() {
    if (!ageInput || !ageWarning || !membershipForm) return;

    const value = Number(ageInput.value);
    const isAdultLimitReached = !!value && value > 33;
    const selected = translations[document.documentElement.lang] || translations.en;

    ageWarning.hidden = !isAdultLimitReached;
    ageWarning.textContent = selected.ageWarningMessage || 'Por tu edad te sugerimos formar parte de un club Rotario';
    ageWarning.style.color = isAdultLimitReached ? '#0a4d9b' : '';

    const formControls = membershipForm.querySelectorAll('input, textarea, button, fieldset');

    formControls.forEach((control) => {
      if (control === ageInput) return;
      control.disabled = isAdultLimitReached;
    });

    const submitButton = membershipForm.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = isAdultLimitReached;
    }
  }

  function setLanguage(lang) {
    const selected = translations[lang] || translations.en;

    elements.forEach((element) => {
      const key = element.dataset.i18n;
      if (selected[key]) {
        element.textContent = selected[key];
      }
    });

    placeholderElements.forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (selected[key]) {
        element.placeholder = selected[key];
      }
    });

    document.documentElement.lang = lang;
    document.title = lang === 'es'
      ? 'Rotaract Guatemala La Reforma | Servicio y liderazgo'
      : 'Rotaract Guatemala La Reforma | Service & Leadership';

    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    updateAgeWarning();
  }

  if (ageInput) {
    ageInput.addEventListener('input', updateAgeWarning);
  }

  langButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  const cards = document.querySelectorAll('.value-card, .program-card, .impact-card, .event-card, blockquote');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(18px)';
    card.style.transition = 'opacity 0.45s ease, transform 0.45s ease';

    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 120 * index + 120);
  });

  setLanguage('en');
});
