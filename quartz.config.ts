import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Rubrichette Wiki",
    pageTitleSuffix: " | Rubrichette Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "it-IT",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian", "Template"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Nunito",
        body: "Nunito",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fff5f7",
          lightgray: "#fde0e6",
          gray: "#f0a0b0",
          darkgray: "#5a3a3a",
          dark: "#3a1a1a",
          secondary: "#d4607a",
          tertiary: "#f0a0b0",
          highlight: "rgba(212, 96, 122, 0.10)",
          textHighlight: "#f9c4cf88",
        },
        darkMode: {
          light: "#1e1215",
          lightgray: "#3a2028",
          gray: "#7a4a55",
          darkgray: "#f0d0d5",
          dark: "#fdeef0",
          secondary: "#f08090",
          tertiary: "#c06070",
          highlight: "rgba(240, 128, 144, 0.15)",
          textHighlight: "#c0607088",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage({
        sort: (a, b) => {
          const aTitle = a.frontmatter?.title ?? ""
          const bTitle = b.frontmatter?.title ?? ""
          return aTitle.localeCompare(bTitle, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        },
      }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      //Plugin.CustomOgImages(),
    ],
  },
}

export default config
