// ServicesPage.jsx
import React, { useState, useEffect } from "react";
import { Instagram, Facebook, Linkedin as Linked, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../Assests/srv.svg";
import webStrategy from "../Assests/WebsiteStrategy.png";
import cyb from "../Assests/cyb.png";
import digitalMarketing from "../Assests/DigitalSupport.png";
import logo2 from "../Assests/newlogo.png";
import header from "../Assests/HEADER.png";
import mobile from "../Assests/new.jpeg";
import selected from "../Assests/selected.png";
import nonselected from "../Assests/nonselected.png";

const ServicesPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [language, setLanguage] = useState("EN");

  // Prevent background scrolling when mobile nav is open
  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
      // removed document.body.style.height = "100vh" per fix
    } else {
      document.body.style.overflow = "unset";
      // removed document.body.style.height = "auto" per fix
    }
    return () => {
      document.body.style.overflow = "unset";
      // removed cleanup for height per fix
    };
  }, [showMobileNav]);

  // Translations
  const translations = {
    EN: {
      nav: { home: "Home", about: "About Us", services: "Services", blog: "Blog", contact: "Contact Us" },
      hero: {
        title: "High-Impact",
        subtitle: "Digital Services",
        subtitle2: "for Ambitious Brands",
        description:
          "We believe in partnerships that go beyond projects. We collaborate with forward-thinking businesses and professionals to innovate, scale, and thrive in the digital age.",
        contactUs: "CONTACT US",
        whatsappUs: "WHATSAPP US",
      },
      services: {
        knowMore: "Know more",
        websiteTitle: "Website Strategy & Development",
        websiteDesc:
          "We craft bespoke websites that combine design excellence with technical precision. Every platform is built for speed, scalability, and measurable impact. From design to upgrades, your digital presence stays modern and growth-driven.",
        cyberTitle: "Cybersecurity & Threat Management",
        cyberDesc:
          "Your business deserves uncompromising protection. We secure websites with proactive audits, advanced threat detection, and rapid malware removal. Around-the-clock monitoring ensures compliance, trust, and peace of mind.",
        digitalTitle: "Digital Support Outsourcing",
        digitalDesc:
          "Scale your business with our dedicated digital experts. From web designers and developers to managed chat and technical support, we provide flexible solutions tailored to your needs. Premium talent, without the overhead.",
      },
      cta: { vision: "Your vision, our expertise — let's make it happen.", whatsapp: "Whatsapp Us" },
      premium: {
        title: "Shaping premium",
        subtitle: "digital experiences",
        subtitle2: "for brands that want more.",
        cards: {
          premiumValue: {
            title: "Premium Value",
            description:
              "We don't compete on being cheap — we compete on delivering excellence. Every solution is crafted to provide lasting value and measurable growth.",
          },
          sharedSuccess: {
            title: "Shared Success",
            description: "Your wins are our wins. We approach every project as a partnership, where your growth defines our success.",
          },
          dedicatedSupport: {
            title: "Dedicated Support",
            description: "Exceptional service, whenever you need it. Our team is available to assist, advise, and ensure your digital journey is seamless and stress-free.",
          },
          innovation: {
            title: "Innovation at Core",
            description: "Creativity meets strategy. We bring forward-looking ideas and innovative solutions that set your brand apart from the competition.",
          },
        },
      },
      expertise: {
        title: "Expertise that drives digital success",
        stat1: "By optimizing your website for search engines.",
        stat2: "Rise in revenue as more visitors convert into paying customers.",
        socialTitle: "Social Media Management",
        socialDesc:
          "Our social media Management services focus on building and enhancing your brands online presence. We create engaging content, manage your social media accounts, and analyze performance.",
        ecommerceTitle: "E-commerce Solutions",
        ecommerceDesc:
          "Our e-commerce solutions are designed to create seamless online shopping experiences for user-friendly website design to secure payment processing processing and inventory management",
      },
      finalCta: { strategic: "Strategic.", secure: "Secure.", scalable: "Scalable.", letsWork: "LET'S WORK", together: "TOGETHER", getQuote: "GET INSTANT QUOTE" },
      footer: {
        quickLinks: "Quick Links ↑",
        support: "Support ↑",
        referralProgram: "Referral Program",
        referralDesc:
          "Know someone who needs elite digital solutions? Refer them — and earn through our tiered incentive program. Simple to join. Profitable to share.",
        joinNow: "JOIN NOW",
        copyright: "Copyright © 2025 BIM. All Rights Reserved.",
        location: "Mauritius, Luxembourg",
        privacyPolicy: "Privacy Policy",
        termsUse: "Terms of Use",
        termsConditions: "Terms & Conditions",
      },
    },
    FR: {
      nav: { home: "Accueil", about: "À Propos", services: "Services", blog: "Blog", contact: "Nous Contacter" },
      hero: {
        title: "Services Numériques",
        subtitle: "à Fort Impact",
        subtitle2: "pour Marques Ambitieuses",
        description:
          "Nous croyons aux partenariats qui vont au-delà des projets. Nous collaborons avec des entreprises et des professionnels avant-gardistes pour innover, évoluer et prospérer à l'ère numérique.",
        contactUs: "NOUS CONTACTER",
        whatsappUs: "WHATSAPP",
      },
      services: {
        knowMore: "En savoir plus",
        websiteTitle: "Stratégie et Développement Web",
        websiteDesc:
          "Nous créons des sites web sur mesure qui allient excellence du design et précision technique. Chaque plateforme est conçue pour la vitesse, l'évolutivité et l'impact mesurable. Du design aux mises à jour, votre présence numérique reste moderne et axée sur la croissance.",
        cyberTitle: "Cybersécurité et Gestion des Menaces",
        cyberDesc:
          "Votre entreprise mérite une protection sans compromis. Nous sécurisons les sites web avec des audits proactifs, une détection avancée des menaces et une suppression rapide des logiciels malveillants. Une surveillance 24h/24 garantit la conformité, la confiance et la tranquillité d'esprit.",
        digitalTitle: "Externalisation du Support Numérique",
        digitalDesc:
          "Développez votre entreprise avec nos experts numériques dédiés. Des concepteurs et développeurs web au chat géré et au support technique, nous fournissons des solutions flexibles adaptées à vos besoins. Talent premium, sans les frais généraux.",
      },
      cta: { vision: "Votre vision, notre expertise — réalisons-la ensemble.", whatsapp: "Whatsapp" },
      premium: {
        title: "Créer des expériences",
        subtitle: "numériques premium",
        subtitle2: "pour les marques qui veulent plus.",
        cards: {
          premiumValue: {
            title: "Valeur Premium",
            description:
              "Nous ne concurrençons pas sur le prix bas — nous concurrençons sur l'excellence. Chaque solution est conçue pour fournir une valeur durable et une croissance mesurable.",
          },
          sharedSuccess: { title: "Succès Partagé", description: "Vos victoires sont nos victoires. Nous abordons chaque projet comme un partenariat, où votre croissance définit notre succès." },
          dedicatedSupport: { title: "Support Dévoué", description: "Service exceptionnel, quand vous en avez besoin. Notre équipe est disponible pour vous assister, vous conseiller et assurer que votre parcours numérique soit fluide et sans stress." },
          innovation: { title: "Innovation au Cœur", description: "La créativité rencontre la stratégie. Nous apportons des idées avant-gardistes et des solutions innovantes qui distinguent votre marque de la concurrence." },
        },
      },
      expertise: {
        title: "Expertise qui stimule le succès numérique",
        stat1: "En optimisant votre site web pour les moteurs de recherche.",
        stat2: "Augmentation des revenus car plus de visiteurs se convertissent en clients payants.",
        socialTitle: "Gestion des Réseaux Sociaux",
        socialDesc: "Nos services de gestion des réseaux sociaux se concentrent sur la construction et l'amélioration de la présence en ligne de votre marque. Nous créons du contenu engageant, gérons vos comptes de réseaux sociaux et analysons les performances.",
        ecommerceTitle: "Solutions E-commerce",
        ecommerceDesc:
          "Nos solutions e-commerce sont conçues pour créer des expériences d'achat en ligne fluides pour la conception de sites web conviviaux au traitement sécurisé des paiements et à la gestion des stocks",
      },
      finalCta: { strategic: "Stratégique.", secure: "Sécurisé.", scalable: "Évolutif.", letsWork: "TRAVAILLONS", together: "ENSEMBLE", getQuote: "DEVIS INSTANTANÉ" },
      footer: {
        quickLinks: "Liens Rapides ↑",
        support: "Support ↑",
        referralProgram: "Programme de Parrainage",
        referralDesc:
          "Vous connaissez quelqu'un qui a besoin de solutions numériques d'élite ? Référez-le — et gagnez grâce à notre programme d'incitations à niveaux. Simple à rejoindre. Profitable à partager.",
        joinNow: "REJOINDRE",
        copyright: "Copyright © 2025 BIM. Tous Droits Réservés.",
        location: "Maurice, Luxembourg",
        privacyPolicy: "Politique de Confidentialité",
        termsUse: "Conditions d'Utilisation",
        termsConditions: "Termes et Conditions",
      },
    },
  };

  const currentTranslations = translations[language];

  const premiumCards = [
    { title: currentTranslations.premium.cards.premiumValue.title, description: currentTranslations.premium.cards.premiumValue.description },
    { title: currentTranslations.premium.cards.sharedSuccess.title, description: currentTranslations.premium.cards.sharedSuccess.description },
    { title: currentTranslations.premium.cards.dedicatedSupport.title, description: currentTranslations.premium.cards.dedicatedSupport.description },
    { title: currentTranslations.premium.cards.innovation.title, description: currentTranslations.premium.cards.innovation.description },
  ];

  const navigationItems = [
    { name: currentTranslations.nav.home, href: "#", active: false },
    { name: currentTranslations.nav.about, href: "#", active: false },
    { name: currentTranslations.nav.services, href: "#", active: true },
    { name: currentTranslations.nav.blog, href: "#", active: false },
    { name: currentTranslations.nav.contact, href: "#", active: false },
  ];

  const toggleLanguage = () => {
    setLanguage((l) => (l === "EN" ? "FR" : "EN"));
  };

  const formatTitleTwoLines = (title) => {
    const parts = title.split(" ");
    return (
      <>
        {parts[0]} <br /> {parts.slice(1).join(" ")}
      </>
    );
  };

  // Motion variants: backdrop (fade) + panel (slide+roll) + list items (stagger)
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.55 },
    exit: { opacity: 0 },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: -30, rotateX: 14, transformOrigin: "top center", scale: 0.995 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { duration: 0.3, ease: [0.22, 0.8, 0.2, 1] }, // main 0.3s
    },
    exit: {
      opacity: 0,
      y: -28,
      rotateX: 12,
      scale: 0.995,
      transition: { duration: 0.22, ease: "easeInOut" },
    },
  };

  const listContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } },
  };

  const listItem = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
  };

  return (
    <div style={{ backgroundImage: `url(${logo})` }} className="relative bg-hero bg-center bg-no-repeat">
      <style>{`
        @media (max-width: 640px) {
          .bg-hero {
            background-repeat: repeat-y !important;
            background-size: 100% auto !important;
            background-position: top center !important;
          }
        }
      `}</style>

      {/* MOBILE NAV - AnimatePresence */}
      <AnimatePresence>
        {showMobileNav && (
          <>
            {/* backdrop fades in */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[95] md:hidden bg-black"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            {/* sliding panel */}
            <motion.aside
              key="panel"
              className="fixed inset-0 z-[100] md:hidden"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* use the mobile image as a cover for the panel */}
            <div
  className="bg-cover bg-center"
  style={{ backgroundImage: `url(${mobile})`, height: "100dvh" }}
>
  <div className="flex flex-col min-h-screen pt-1 pb-6">
    {/* header row */}
    <div className="flex items-center justify-between pl-4 pr-4">
      <img src={logo2} className="w-[5rem] object-contain" alt="Logo" />

      <motion.button
        onClick={() => setShowMobileNav(false)}
        className="text-white hover:text-red-500 p-2"
        aria-label="Close menu"
        whileTap={{ scale: 0.92, rotate: 6 }}
      >
        <X size={32} className="block" />
      </motion.button>
    </div>

    {/* nav items (staggered) */}
    <motion.nav
      className="flex-1 flex flex-col justify-start px-8 gap-y-3 mt-6"
      variants={listContainer}
      initial="hidden"
      animate="visible"
    >
      {navigationItems.map((item, idx) => (
        <motion.div
          key={idx}
          className="flex items-center w-full max-w-full py-3"
          variants={listItem}
        >
          <a
            href={item.href}
            onClick={() => setShowMobileNav(false)}
            className={`flex-1 text-left text-lg font-medium transition-colors ${
              item.active
                ? "text-red-500"
                : "text-white hover:text-red-300"
            }`}
          >
            {item.name}
          </a>

          <motion.img
            src={item.active ? selected : nonselected}
            alt=""
            className="w-6 h-6 ml-4"
            initial={{ scale: 0.9, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.18 }}
          />
        </motion.div>
      ))}
    </motion.nav>

    {/* bottom CTA */}
   <div className="px-6 mt-auto" style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}>
  <a
    href="https://quotation.bim.africa/"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <motion.button
      whileTap={{ scale: 0.98 }}
      className="w-full bg-[#ff1f00] hover:bg-red-600 text-white py-4 rounded-full text-lg font-medium inline-block text-center transition-colors"
    >
      {language === "EN" ? "Instant Quotation" : "Devis Instantané"}
    </motion.button>
  </a>
</div>
  </div>
</div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex items-center justify-between">
            <img src={logo2} className="w-20 sm:w-24 md:w-28 lg:w-[110px]" alt="logo" />

            {/* desktop nav */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-16 relative">
              {navigationItems.map((link, i) => (
                <a key={i} href={link.href} className={`wave-link relative font-medium text-sm lg:text-base ${link.active ? "text-red-500" : "text-white"}`}>
                  {link.name}
                  <svg className="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                    <path
                      d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46
                         c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"
                      fill="none"
                      stroke={link.active ? "#FF6F61" : "#FFF"}
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              ))}
            </nav>

            {/* right side */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="https://quotation.bim.africa/" target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="text-red-500 border border-red-500 px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap hover:bg-red-500 hover:text-white">
                  {language === "EN" ? "Instant Quotation" : "Devis Instantané"}
                </button>
              </a>

              <button onClick={toggleLanguage} className="bg-white rounded-full p-1 sm:p-2 flex items-center space-x-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
                <span className="text-black text-xs sm:text-sm font-medium px-1 sm:px-2">{language === "EN" ? "FR" : "EN"}</span>
              </button>

              {/* animated header icon */}
              <motion.button
                onClick={() => setShowMobileNav(true)}
                className="md:hidden"
                aria-label="Open menu"
                animate={showMobileNav ? { rotate: -90, scale: 1.02 } : { rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                whileTap={{ scale: 0.94 }}
              >
                <img src={header} className="w-10 sm:w-15" alt="menu" />
              </motion.button>
            </div>
          </div>
        </div>

        <style>{`
          a.wave-link {
            cursor: pointer;
            position: relative;
            padding: 6px 0;
            background: transparent;
            border: 0;
            white-space: nowrap;
            overflow: hidden;
          }
          a.wave-link:before {
            content: '';
            background: #FFF;
            position: absolute;
            width: 100%;
            height: 1px;
            top: 100%;
            left: 0;
            pointer-events: none;
          }
          .link__graphic {
            position: absolute;
            top: 0;
            left: 0;
            pointer-events: none;
            fill: none;
            stroke: #FFF;
            stroke-width: 1px;
          }
          .link__graphic--slide {
            top: -3px;
            stroke-width: 2px;
            transition: transform 0.7s;
            transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
          }
          a.wave-link:hover .link__graphic--slide {
            transform: translate3d(-66.6%, 0, 0);
          }
        `}</style>
      </header>

      {/* Hero */}
      <section className="min-h-screen relative overflow-hidden py-4 sm:py-15 lg:py-20">
        <div className="absolute inset-0 "></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="font-poppins text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white leading-tight">
              {currentTranslations.hero.title} <br />
              <span className="text-[#ff1f00]">{currentTranslations.hero.subtitle}</span> <br />
              {currentTranslations.hero.subtitle2}
            </h1>
          </div>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-full lg:w-[460px] text-center lg:text-left">
              {currentTranslations.hero.description}
            </p>
            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <a href="https://bim.africa/consult-us" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                  {currentTranslations.hero.contactUs}
                </button>
              </a>

              <a href="https://wa.me/352661784276" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                  {currentTranslations.hero.whatsappUs}
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-14 mt-8 sm:mt-16 lg:mt-20 relative z-10">
          <div className="bg-black/40 border border-[#ff1f00] rounded-3xl p-4 hover:bg-black/60 transition-all">
            <div className="flex items-center text-[#ff1f00] space-x-2">
              <img src={webStrategy} className="w-16 sm:w-20 lg:w-[100px]" alt="logo" />
              {/* Arrow icon added next to Know more */}
              <a
                href="https://bim.africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white text-sm sm:text-base hover:text-[#ff1f00] transition-colors inline-flex items-center gap-1 group"
              >
                {currentTranslations.services.knowMore}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
            <h3 className="text-[#ff1f00] text-xl sm:text-2xl lg:text[26px] mt-4">
              {currentTranslations.services.websiteTitle}
            </h3>
            <p className="text-white text-xs sm:text-sm lg:text-[12px] mt-2">
              {currentTranslations.services.websiteDesc}
            </p>
          </div>

          <div className="bg-black/40 border border-[#ff1f00] rounded-3xl p-4 hover:bg-black/60 transition-all">
            <div className="flex items-center space-x-2 text-[#ff1f00]">
              <img src={cyb} className="w-16 sm:w-20 lg:w-[100px]" alt="" />
              {/* Arrow icon added next to Know more */}
              <a
                href="https://bim.africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white text-sm sm:text-base hover:text-[#ff1f00] transition-colors inline-flex items-center gap-1 group"
              >
                {currentTranslations.services.knowMore}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
            <h3 className="text-[#ff1f00] text-xl sm:text-2xl lg:text-[26px] mt-4">
              {currentTranslations.services.cyberTitle}
            </h3>
            <p className="text-white text-xs sm:text-sm lg:text-[12px] mt-2">
              {currentTranslations.services.cyberDesc}
            </p>
          </div>

          <div className="bg-black/40 border border-red-500 rounded-3xl p-4 hover:bg-black/60 transition-all md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 text-[#ff1f00]">
              <img src={digitalMarketing} className="w-16 sm:w-20 lg:w-[100px]" alt="" />
              {/* Arrow icon added next to Know more */}
              <a
                href="https://bim.africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white text-sm sm:text-base hover:text-[#ff1f00] transition-colors inline-flex items-center gap-1 group"
              >
                {currentTranslations.services.knowMore}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
            <h3 className="text-[#ff1f00] text-xl sm:text-2xl lg:text-[26px] mt-4">
              {currentTranslations.services.digitalTitle}
            </h3>
            <p className="text-white text-xs sm:text-sm lg:text-[12px] mt-2">
              {currentTranslations.services.digitalDesc}
            </p>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12 relative z-10 px-4">
          <p className="text-white text-sm sm:text-base">
            {currentTranslations.cta.vision}{" "}
            <a href="https://wa.me/352661784276" target="_blank" rel="noopener noreferrer" className="text-[#ff1f00] hover:text-red-400">
              {currentTranslations.cta.whatsapp}
            </a>
          </p>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-10 sm:py-4 lg:py-[2px] relative overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            {currentTranslations.premium.title} <br />
            <span className="text-[#ff1f00]">{currentTranslations.premium.subtitle}</span> <br />
            {currentTranslations.premium.subtitle2}
          </h2>
          <div className="flex flex-row gap-4 justify-center mt-6 sm:mt-8">
            <a href="https://bim.africa/consult-us" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                {currentTranslations.hero.contactUs}
              </button>
            </a>

            <a href="https://wa.me/352661784276" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                {currentTranslations.hero.whatsappUs}
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 relative z-10 block sm:hidden">
          <div className="bg-black/40 border border-[#ff1f00] rounded-3xl p-8 min-h-[350px] flex flex-col justify-center">
            <h3 className="text-[#ff1f00] text-2xl text-center font-bold mb-8">{formatTitleTwoLines(premiumCards[activeSlide].title)}</h3>
            <p className="text-white text-sm text-center leading-relaxed">{premiumCards[activeSlide].description}</p>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {premiumCards.map((_, index) => (
              <button key={index} onClick={() => setActiveSlide(index)} className={`w-4 h-4 rounded-full transition-all duration-300 ${activeSlide === index ? "bg-[#ff1f00]" : "bg-white"}`} />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 relative z-10 hidden sm:grid">
          <div className="bg-black/40 border border-[#ff1f00] rounded-3xl sm:rounded-[3rem] p-6 sm:p-8">
            <h3 className="text-[#ff1f00] text-lg sm:text-xl text-center font-bold">{formatTitleTwoLines(currentTranslations.premium.cards.premiumValue.title)}</h3>
            <p className="text-white text-xs sm:text-sm mt-6 sm:mt-8 text-center">{currentTranslations.premium.cards.premiumValue.description}</p>
          </div>

          <div className="bg-black/40 border border-[#ff1f00] rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 min-h-[250px] sm:h-[300px]">
            <h3 className="text-[#ff1f00] text-lg sm:text-xl text-center font-bold">{formatTitleTwoLines(currentTranslations.premium.cards.sharedSuccess.title)}</h3>
            <p className="text-white text-xs sm:text-sm mt-6 sm:mt-8 text-center">{currentTranslations.premium.cards.sharedSuccess.description}</p>
          </div>

          <div className="bg-black/40 border border-[#ff1f00] rounded-3xl sm:rounded-[3rem] p-6 sm:p-8">
            <h3 className="text-[#ff1f00] text-lg sm:text-xl text-center font-bold">{formatTitleTwoLines(currentTranslations.premium.cards.dedicatedSupport.title)}</h3>
            <p className="text-white text-xs sm:text-sm mt-6 sm:mt-8 text-center">{currentTranslations.premium.cards.dedicatedSupport.description}</p>
          </div>

          <div className="bg-black/40 border border-[#ff1f00] rounded-3xl sm:rounded-[3rem] p-6 sm:p-8">
            <h3 className="text-[#ff1f00] text-lg sm:text-xl text-center font-bold">{formatTitleTwoLines(currentTranslations.premium.cards.innovation.title)}</h3>
            <p className="text-white text-xs sm:text-sm mt-6 sm:mt-8 text-center">{currentTranslations.premium.cards.innovation.description}</p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 
     border-t-4 sm:border-t-8  lg:border-t-[12px] border-t-[#ff1f00]
    rounded-t-2xl lg:rounded-t-3xl 
     p-6 sm:p-8 lg:p-12 
     backdrop-blur-sm relative z-10"
          style={{
            borderLeft: "12px solid #ff1f00",
            borderRight: "12px solid #ff1f00",
            maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          {/* Content sits above the fade overlay */}
          <div className="relative z-10">
            <div className="block lg:hidden">
              <div className="text-center">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-white mb-6 sm:mb-8">
                  {currentTranslations.expertise.title}
                </h2>
              </div>

              <div className="flex gap-6 sm:gap-8 justify-center mb-8 sm:mb-12">
                <div className="text-center border border-[#ff1f00] rounded-2xl p-4 sm:p-6">
                  <div className="text-[#ff1f00] text-2xl sm:text-3xl font-bold">+60%</div>
                  <p className="text-white text-xs sm:text-sm mt-2">{currentTranslations.expertise.stat1}</p>
                </div>
                <div className="text-center border border-[#ff1f00] rounded-2xl p-4 sm:p-6">
                  <div className="text-[#ff1f00] text-2xl sm:text-3xl font-bold">+30%</div>
                  <p className="text-white text-xs sm:text-sm mt-2">{currentTranslations.expertise.stat2}</p>
                </div>
              </div>

              <div className="space-y-8 sm:space-y-12">
                <div className="text-center">
                  <h3 className="text-[#ff1f00] text-xl sm:text-2xl">{currentTranslations.expertise.socialTitle}</h3>
                  <p className="text-white text-sm sm:text-base mt-4">{currentTranslations.expertise.socialDesc}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-[#ff1f00] text-xl sm:text-2xl">{currentTranslations.expertise.ecommerceTitle}</h3>
                  <p className="text-white text-sm sm:text-base mt-4">{currentTranslations.expertise.ecommerceDesc}</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              <div>
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-medium text-white mb-6 sm:mb-8 text-center lg:text-left">
                  {currentTranslations.expertise.title}
                </h2>
                <div className="flex gap-6 sm:gap-8 lg:gap-12 justify-center lg:justify-start">
                  <div className="text-center lg:text-left">
                    <div className="text-[#ff1f00] text-2xl sm:text-3xl lg:text-4xl">+60%</div>
                    <p className="text-white text-xs sm:text-sm w-full">{currentTranslations.expertise.stat1}</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-[#ff1f00] text-2xl sm:text-3xl lg:text-4xl">+30%</div>
                    <p className="text-white text-xs sm:text-sm">{currentTranslations.expertise.stat2}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8 sm:space-y-12">
                <div>
                  <h3 className="text-[#ff1f00] text-xl sm:text-2xl lg:text-3xl text-center lg:text-left">
                    {currentTranslations.expertise.socialTitle}
                  </h3>
                  <p className="text-white text-sm sm:text-base text-center lg:text-left">
                    {currentTranslations.expertise.socialDesc}
                  </p>
                </div>
                <div>
                  <h3 className="text-[#ff1f00] text-xl sm:text-2xl lg:text-3xl text-center lg:text-left">
                    {currentTranslations.expertise.ecommerceTitle}
                  </h3>
                  <p className="text-white text-sm sm:text-base text-center lg:text-left">
                    {currentTranslations.expertise.ecommerceDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 space-y-6 sm:space-y-8">
          <div className="bg-gray-600 h-48 sm:h-56 lg:h-64 rounded-2xl"></div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gray-600 h-40 sm:h-48 rounded-2xl"></div>
            <div className="bg-gray-600 h-40 sm:h-48 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-10 lg:py-10 relative overflow-hidden text-center">
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <p className="text-white text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8">
            {currentTranslations.finalCta.strategic} <span className="text-[#ff1f00]">{currentTranslations.finalCta.secure}</span> {currentTranslations.finalCta.scalable}
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl text-white tracking-tight">{currentTranslations.finalCta.letsWork}</h2>

          <div className="flex justify-center relative -mt-1 sm:-mt-2 lg:-mt-3 mb-[-1rem] sm:mb-[-1.5rem] lg:mb-[-2rem] z-10">
            <a href="https://quotation.bim.africa/" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#ff1f00] hover:bg-red-600 text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex flex-col items-center justify-center font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-lg top-1/2 left-[47%] -translate-y-px">
                {currentTranslations.finalCta.getQuote.split(" ")[0]} <br />
                {currentTranslations.finalCta.getQuote.split(" ")[1]} <br />
                {currentTranslations.finalCta.getQuote.split(" ")[2]}
              </button>
            </a>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl text-white tracking-tight">{currentTranslations.finalCta.together}</h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="block sm:hidden">
            <div className="grid grid-cols-2 gap-8 mb-8 text-center">
              <div>
                <h3 className="text-[#ff1f00] text-sm font-bold uppercase mb-4">{currentTranslations.footer.quickLinks}</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-white text-sm">{currentTranslations.nav.home}</a>
                  <a href="#" className="block text-white text-sm">{currentTranslations.nav.about}</a>
                  <a href="#" className="block text-white text-sm">{currentTranslations.nav.services}</a>
                  <a href="#" className="block text-white text-sm">{currentTranslations.nav.blog}</a>
                </div>
              </div>

              <div>
                <h3 className="text-[#ff1f00] text-sm font-bold uppercase mb-4">{currentTranslations.footer.support}</h3>
                <div className="space-y-2">
                  <a href="https://bim.africa/consult-us" className="block text-white text-sm">{currentTranslations.nav.contact}</a>
                  <a href="#" className="block text-white text-sm">{currentTranslations.footer.privacyPolicy}</a>
                  <a href="#" className="block text-white text-sm">{currentTranslations.footer.termsConditions}</a>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1 pr-4">
                  <h3 className="text-[#ff1f00] text-sm font-bold uppercase mb-3">{currentTranslations.footer.referralProgram}</h3>
                  <p className="text-white text-xs leading-relaxed">{currentTranslations.footer.referralDesc}</p>
                </div>

                <div className="flex flex-col items-end space-y-4">
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap">{currentTranslations.footer.joinNow}</button>

                  <div className="flex space-x-3">
                    <a href="https://www.instagram.com/bimafrica?igsh=dnpmYXQzNTV2eHE4" target="_blank" rel="noopener noreferrer">
                      <div className="w-10 h-10 bg-[#ff1f00] rounded-full flex items-center justify-center hover:bg-[#e61c00] transition">
                        <Instagram size={20} className="text-white" />
                      </div>
                    </a>
                    <a href="https://www.facebook.com/share/17Kr1c4mkp/" target="_blank" rel="noopener noreferrer">
                      <div className="w-10 h-10 bg-[#ff1f00] rounded-full flex items-center justify-center hover:bg-[#e61c00] transition">
                        <Facebook size={20} className="text-white" />
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/company/bimafrica/" target="_blank" rel="noopener noreferrer">
                      <div className="w-10 h-10 bg-[#ff1f00] rounded-full flex items-center justify-center">
                        <Linked size={20} className="text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <img src={logo2} className="w-48 mx-auto mb-4" alt="BIM Logo" />
              <p className="text-white text-sm mb-1">{currentTranslations.footer.copyright}</p>
              <p className="text-white text-sm">{currentTranslations.footer.location}</p>
            </div>

            <div className="text-center text-white text-xs border-t border-gray-800 pt-6">
              <a href="#" className="hover:text-[#ff1f00]">{currentTranslations.footer.privacyPolicy}</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-[#ff1f00]">{currentTranslations.footer.termsUse}</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-[#ff1f00]">{currentTranslations.footer.termsConditions}</a>
            </div>
          </div>

          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-left">
              <div className="text-[#ff1f00] font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                <img src={logo2} className="w-64 sm:w-80 lg:w-[500px]" alt="" />
              </div>
              <p className="text-white text-sm mt-4">{currentTranslations.footer.copyright}</p>
              <p className="text-white text-sm">{currentTranslations.footer.location}</p>
            </div>
            <div className="text-left">
              <h3 className="text-[#ff1f00] text-base sm:text-lg uppercase">{currentTranslations.footer.quickLinks.replace(" ↑", "")}</h3>
              <div className="space-y-2 sm:space-y-3 mt-4">
                <a href="#" className="block text-white hover:text-white text-sm sm:text-base">{currentTranslations.nav.home}</a>
                <a href="#" className="block text-white hover:text-white text-sm sm:text-base">{currentTranslations.nav.about}</a>
                <a href="#" className="block text-white hover:text-white text-sm sm:text-base">{currentTranslations.nav.services}</a>
                <a href="#" className="block text-white hover:text-white text-sm sm:text-base">{currentTranslations.nav.blog}</a>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-[#ff1f00] text-base sm:text-lg uppercase">{currentTranslations.footer.support.replace(" ↑", "")}</h3>
              <div className="space-y-2 sm:space-y-3 mt-4">
                <a href="https://bim.africa/consult-us" className="block text-white hover:text-white text-sm sm:text-base">{currentTranslations.nav.contact}</a>
                <a href="#" className="block text-white hover:text-white text-sm sm:text-base">{currentTranslations.footer.privacyPolicy}</a>
                <a href="#" className="block text-white hover:text-white text-sm sm:text-base">{currentTranslations.footer.termsConditions}</a>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-[#ff1f00] text-base sm:text-lg uppercase">{currentTranslations.footer.referralProgram}</h3>
              <p className="text-white text-xs sm:text-sm mt-4">{currentTranslations.footer.referralDesc}</p>
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                <button className="bg-[#333333] border border-transparent hover:border-[#ff1f00] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium whitespace-nowrap text-sm sm:text-base">
                  {currentTranslations.footer.joinNow}
                </button>
                <div className="flex space-x-2">
                  <a href="https://www.instagram.com/bimafrica?igsh=dnpmYXQzNTV2eHE4" target="_blank" rel="noopener noreferrer">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ff1f00] rounded-full flex items-center justify-center hover:bg-[#e61c00] transition">
                      <Instagram size={16} className="text-white sm:w-5 sm:h-5" />
                    </div>
                  </a>
                  <a href="https://www.facebook.com/share/17Kr1c4mkp/" target="_blank" rel="noopener noreferrer">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ff1f00] rounded-full flex items-center justify-center hover:bg-[#e61c00] transition">
                      <Facebook size={16} className="text-white sm:w-5 sm:h-5" />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/bimafrica/" target="_blank" rel="noopener noreferrer">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ff1f00] rounded-full flex items-center justify-center">
                      <Linked size={16} className="text-white sm:w-5 sm:h-5" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-white text-xs sm:text-sm">
            <a href="#" className="hover:text-white">{currentTranslations.footer.privacyPolicy}</a> |{" "}
            <a href="#" className="hover:text-white">{currentTranslations.footer.termsUse}</a> |{" "}
            <a href="#" className="hover:text-white">{currentTranslations.footer.termsConditions}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
