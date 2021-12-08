$(function(){

    $('#myNavbar a').on("click", function(){
        $('#myNavbar').collapse('hide');
        $('.navTrigger').removeClass('active');
    });

    $('.navTrigger').click(function(){
        $('.navTrigger').toggleClass('active');
    });

    $("#myNavbar a, footer a").on("click", function(){
        if ($(window).width() < 768)
        {
            var sectionTo = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(sectionTo).offset().top - 205
            }, 1000);
        } else {
            var sectionTo = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(sectionTo).offset().top - 10
            }, 1000);
        }
    });
});

i18next.init({
    lng: 'fr',
    resources: {
      en: {
        translation: {
            "greetings": "HI, I AM DAMIEN",
            "catchPhrase": "I invest myself alongside entrepreneurs and project owners, in order to create, maintain or improve their web applications<br><br>As a front-end developer, passionate about web development, I’d love to help you achieve your goals",
            "downloadCV": "Download CV",
            "cvHref":"docs/DamienBouvetEn.pdf",
            "navMe": "ME",
            "skills": "SKILLS",
            "tools": "TOOLS",
            "xp": "EXPERIENCES",
            "education": "EDUCATION",
            "portfolio": "MISC.",
            "webDeveloper": "Web Developer",
            "frontDeveloper": "Front-end Developer",
            "jobDesc3Line1": "Creation from scratch of an MVP for an entrepreneur, to allow him to test his idea/solution on the market",
            "jobDesc3Line2": "Web application made with Vue.js 3",
            "jobDesc3Line3": "- Client's mock-ups integration",
            "jobDesc3Line4": "- Set up of the Business intelligence and data management",
            "jobDesc3Line5": "- Set up of a Back-end with Firebase for authentication, assets' storage and database management",
            "jobDesc2Line1": "Creation from scratch of a new website for a non-profit organization",
            "jobDesc2Line2": "Entirely developed with Vue.js 3 for the Front-end",
            "jobDesc2Line3": "Set up of a Headless CMS (Strapi) for the Back-end",
            "jobDesc1Line1": "Within a Scrum team, I took part in the development of the Front-end of an MES (Manufacturing execution systems) web application",
            "jobDesc1Line2": "Main tasks: Integration / Development of re-usable components. Connecting the Front-end to the API's endpoints (provided by the Back-end team)",
            "drivingLicence": "Driving licences",
            "vehicles": "Car and Motorcycle",
            "madeIn": `Made in Brittany<img style="margin-left: 20px; "src="images/Produit_en_Bretagne_logo.png" alt="Produit en Bretagne">`,
            "age": "36 years old",
            "address": "Address",
        }
      },
      fr: {
        translation: {
            "greetings": "HELLO, MOI C'EST DAMIEN",
            "catchPhrase": "Je m'investis aux côtés des entrepreneurs et porteurs de projets, afin de créer, maintenir ou améliorer leurs applications web<br><br>Développeur Front-end, passionné par le développement web, c'est avec plaisir que je vous aiderai à atteindre vos objectifs",
            "downloadCV": "Télécharger CV",
            "cvHref":"docs/DamienBouvet.pdf",
            "navMe": "MOI",
            "skills": "COMPÉTENCES",
            "tools": "OUTILS",
            "xp": "EXPÉRIENCES",
            "education": "FORMATIONS",
            "portfolio": "LOISIRS",
            "webDeveloper": "Développeur Web",
            "frontDeveloper": "Développeur Front-end",
            "jobDesc3Line1": "Création \"from scratch\" d'un MVP pour un porteur de projet afin de lui permettre d'éprouver sa solution sur le marché",
            "jobDesc3Line2": "Web App réalisée avec Vue.js 3",
            "jobDesc3Line3": "- Intégration de la maquette du client",
            "jobDesc3Line4": "- Mise en place de toute la gestion des données et de la logique métier",
            "jobDesc3Line5": "- Connexion avec le Back-end (Firebase) pour le système d'authentification, le stockage des assets et la gestion de la base de données",
            "jobDesc2Line1": "Création \"from scratch\" d'un nouveau site Web pour une association",
            "jobDesc2Line2": "Entièrement développer avec Vue.js 3 pour la partie Front-end",
            "jobDesc2Line3": "Mise en place d'un CMS Headless (Strapi) pour la partie Back-end",
            "jobDesc1Line1": "Intégré dans une équipe agile (Scrum), j'ai participé au développement front-end d'une application web de MES (pilotage de la production)",
            "jobDesc1Line2": "Missions principales: Intégration / Développement de composants réutilisables. Connexions aux endpoints de l'API Back-end",
            "drivingLicence": "Permis",
            "vehicles": "Voiture et Moto",
            "madeIn": `Produit en Bretagne<img style="margin-left: 20px; "src="images/Produit_en_Bretagne_logo.png" alt="Produit en Bretagne">`,
            "age": "36 ans",
            "address": "Domicilié à",
        }
      }
    }
  }).then(function(t) {
    translate()
  });

const translate = () => {
    document.getElementById('greetings').innerHTML = i18next.t('greetings');
    document.getElementById('catchPhrase').innerHTML = i18next.t('catchPhrase');
    document.getElementById('downloadCV').innerHTML = i18next.t('downloadCV');
    document.getElementById('downloadCV').href = i18next.t('cvHref');
    document.getElementById('navMe').innerHTML = i18next.t('navMe');
    document.getElementById('navSkills').innerHTML = i18next.t('skills');
    document.getElementById('pageSkills').innerHTML = i18next.t('skills');
    document.getElementById('tools').innerHTML = i18next.t('tools');
    document.getElementById('navXp').innerHTML = i18next.t('xp');
    document.getElementById('pageXp').innerHTML = i18next.t('xp');
    document.getElementById('navEducation').innerHTML = i18next.t('education');
    document.getElementById('pageEducation').innerHTML = i18next.t('education');
    document.getElementById('navPortfo').innerHTML = i18next.t('portfolio');
    document.getElementById('pagePortfo').innerHTML = i18next.t('portfolio');
    document.getElementById('jobTitle3').innerHTML = i18next.t('webDeveloper');
    document.getElementById('jobTitle2').innerHTML = i18next.t('webDeveloper');
    document.getElementById('jobTitle1').innerHTML = i18next.t('frontDeveloper');
    document.getElementById('jobDesc1Line1').innerHTML = i18next.t('jobDesc1Line1');
    document.getElementById('jobDesc1Line2').innerHTML = i18next.t('jobDesc1Line2');
    document.getElementById('jobDesc2Line1').innerHTML = i18next.t('jobDesc2Line1');
    document.getElementById('jobDesc2Line2').innerHTML = i18next.t('jobDesc2Line2');
    document.getElementById('jobDesc2Line3').innerHTML = i18next.t('jobDesc2Line3');
    document.getElementById('jobDesc3Line1').innerHTML = i18next.t('jobDesc3Line1');
    document.getElementById('jobDesc3Line2').innerHTML = i18next.t('jobDesc3Line2');
    document.getElementById('jobDesc3Line3').innerHTML = i18next.t('jobDesc3Line3');
    document.getElementById('jobDesc3Line4').innerHTML = i18next.t('jobDesc3Line4');
    document.getElementById('jobDesc3Line5').innerHTML = i18next.t('jobDesc3Line5');
    document.getElementById('drivingLicence').innerHTML = i18next.t('drivingLicence');
    document.getElementById('vehicles').innerHTML = i18next.t('vehicles');
    document.getElementById('madeIn').innerHTML = i18next.t('madeIn');
    document.getElementById('age').innerHTML = i18next.t('age');
    document.getElementById('address').innerHTML = i18next.t('address');
}

const switchToEn = () => {
    i18next.changeLanguage("en");
    translate()
}
const switchToFr = () => {
    i18next.changeLanguage("fr");
    translate()
}
