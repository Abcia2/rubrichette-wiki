import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Senza titolo",
    description: "Nessuna descrizione",
  },
  components: {
    callout: {
      note: "Nota",
      abstract: "Abstract",
      info: "Info",
      todo: "Da fare",
      tip: "Consiglio",
      success: "Completato",
      question: "Domanda",
      warning: "Attenzione",
      failure: "Errore",
      danger: "Pericolo",
      bug: "Problema",
      example: "Esempio",
      quote: "Citazione",
    },
    backlinks: {
      title: "Link entranti",
      noBacklinksFound: "Nessun link entrante",
    },
    themeToggle: {
      lightMode: "Tema chiaro",
      darkMode: "Tema scuro",
    },
    readerMode: {
      title: "Modalità lettura",
    },
    explorer: {
      title: "Esplora",
    },
    footer: {
      createdWith: "Creato con",
    },
    graph: {
      title: "Vista grafico",
    },
    recentNotes: {
      title: "Note recenti",
      seeRemainingMore: ({ remaining }) =>
        remaining === 1 ? "Vedi 1 altra →" : `Vedi altre ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Inclusione di ${targetSlug}`,
      linkToOriginal: "Link all'originale",
    },
    search: {
      title: "Cerca",
      searchBarPlaceholder: "Cerca qualcosa",
    },
    tableOfContents: {
      title: "Indice",
    },
    contentMeta: {
      readingTime: ({ minutes }) => (minutes === 1 ? "1 minuto" : `${minutes} minuti`),
    },
  },
  pages: {
    rss: {
      recentNotes: "Note recenti",
      lastFewNotes: ({ count }) => (count === 1 ? "Ultima nota" : `Ultime ${count} note`),
    },
    error: {
      title: "Non trovato",
      notFound: "Questa pagina è privata o non esiste.",
      home: "Ritorna alla home page",
    },
    folderContent: {
      folder: "Sezione",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 articolo in questa sezione." : `${count} articoli in questa sezione.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Indice tag",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 articolo con questo tag." : `${count} articoli con questo tag.`,
      showingFirst: ({ count }) => (count === 1 ? "Prima tag." : `Primi ${count} tag.`),
      totalTags: ({ count }) =>
        count === 1 ? "Trovato 1 tag in totale." : `Trovati ${count} tag totali.`,
    },
  },
} as const satisfies Translation
