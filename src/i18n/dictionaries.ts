import type { Locale } from "./config";

export type NavItem = { href: string; label: string };

export type Dictionary = {
  meta: {
    siteTitle: string;
    siteTagline: string;
    republic: string;
    honoraryConsulate: string;
    inKharkiv: string;
  };
  nav: {
    home: string;
    consulate: string;
    consular: string;
    latviaKharkiv: string;
    businessBridge: string;
    innovation: string;
    investment: string;
    cooperation: string;
    events: string;
    media: string;
    resources: string;
    contact: string;
    hub: string;
  };
  common: {
    readMore: string;
    seeAll: string;
    contactUs: string;
    emergency: string;
    officialSite: string;
    disclaimer: string;
    comingSoon: string;
    inDevelopment: string;
    ourMission: string;
    quickLinks: string;
    latestNews: string;
    upcomingEvents: string;
    all: string;
    backToTop: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    followUs: string;
    languages: string;
    consularDistrict: string;
    honoraryConsul: string;
    subscribe: string;
    yourEmail: string;
    send: string;
  };
  home: {
    heroKicker: string;
    heroTitle: string;
    heroLead: string;
    ctaConsular: string;
    ctaBridge: string;
    welcomeTitle: string;
    welcomeQuote: string;
    welcomeSignature: string;
    welcomeRole: string;
    highlightsTitle: string;
    highlights: { title: string; text: string; href: string }[];
    newsTitle: string;
    news: { date: string; tag: string; title: string; excerpt: string }[];
    eventsTitle: string;
    events: { date: string; place: string; title: string }[];
    quickTitle: string;
    quick: { title: string; text: string; href: string }[];
    contactStripTitle: string;
    contactStripLead: string;
  };
  consulate: {
    kicker: string;
    title: string;
    lead: string;
    history: { title: string; body: string };
    mission: { title: string; body: string };
    powers: { title: string; body: string };
    district: { title: string; body: string; oblasts: string[] };
    consul: { title: string; name: string; role: string; bio: string };
    team: { title: string; body: string; roles: { name: string; role: string }[] };
    doTitle: string;
    doList: string[];
    dontTitle: string;
    dontList: string[];
    legalNote: string;
  };
  consular: {
    kicker: string;
    title: string;
    lead: string;
    services: { title: string; text: string }[];
    emergencyBlock: { title: string; body: string; button: string };
    documents: { title: string; body: string; items: string[] };
    embassyRedirect: { title: string; body: string; button: string };
    faq: { q: string; a: string }[];
  };
  latviaKharkiv: {
    kicker: string;
    title: string;
    lead: string;
    tracks: { title: string; body: string; points: string[] }[];
  };
  bridge: {
    kicker: string;
    title: string;
    lead: string;
    forUa: { title: string; body: string; bullets: string[] };
    forLv: { title: string; body: string; bullets: string[] };
    howItWorks: {
      title: string;
      steps: { title: string; body: string }[];
    };
    ai: {
      title: string;
      lead: string;
      signals: string[];
      programmes: string[];
      note: string;
    };
    apply: { title: string; body: string; button: string };
    disclaimer: string;
  };
  innovation: {
    kicker: string;
    title: string;
    lead: string;
    pillars: { title: string; body: string }[];
    universities: { title: string; body: string; list: string[] };
  };
  investment: {
    kicker: string;
    title: string;
    lead: string;
    whyKharkiv: { title: string; body: string; bullets: string[] };
    whyLatvia: { title: string; body: string; bullets: string[] };
    recovery: { title: string; body: string };
    parks: { title: string; body: string };
  };
  cooperation: {
    kicker: string;
    title: string;
    lead: string;
    institutional: {
      title: string;
      body: string;
      groups: { title: string; items: string[] }[];
    };
    privateSector: { title: string; body: string; note: string };
  };
  events: {
    kicker: string;
    title: string;
    lead: string;
    categories: string[];
    upcoming: { date: string; place: string; title: string; text: string }[];
    calendarNote: string;
  };
  media: {
    kicker: string;
    title: string;
    lead: string;
    sections: { title: string; body: string; button: string }[];
  };
  resources: {
    kicker: string;
    title: string;
    lead: string;
    categories: { title: string; body: string; links: { label: string; href: string }[] }[];
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    address: string;
    hours: string;
    phones: { label: string; value: string }[];
    emails: { label: string; value: string }[];
    formTitle: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSend: string;
    formNote: string;
    emergencyTitle: string;
    emergencyBody: string;
  };
  footer: {
    tagline: string;
    officialNote: string;
    legalLinks: { label: string; href: string }[];
    columns: { title: string; items: NavItem[] }[];
    copyright: string;
  };
};

import { uk } from "./dictionaries/uk";
import { en } from "./dictionaries/en";
import { lv } from "./dictionaries/lv";

export const dictionaries: Record<Locale, Dictionary> = { uk, en, lv };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
