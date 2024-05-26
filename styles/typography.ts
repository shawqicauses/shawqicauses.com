// DONE REVIEWING: GITHUB COMMIT 4️⃣
import {type PluginUtils} from "tailwindcss/types/config"

const typographyStyles = function typographyStyles({theme}: PluginUtils) {
  return {
    invert: {
      css: {
        "--tw-prose-body": "var(--tw-prose-invert-body)",
        "--tw-prose-headings": "var(--tw-prose-invert-headings)",
        "--tw-prose-links": "var(--tw-prose-invert-links)",
        "--tw-prose-links-hover": "var(--tw-prose-invert-links-hover)",
        "--tw-prose-underline": "var(--tw-prose-invert-underline)",
        "--tw-prose-underline-hover": "var(--tw-prose-invert-underline-hover)",
        "--tw-prose-bold": "var(--tw-prose-invert-bold)",
        "--tw-prose-counters": "var(--tw-prose-invert-counters)",
        "--tw-prose-bullets": "var(--tw-prose-invert-bullets)",
        "--tw-prose-hr": "var(--tw-prose-invert-hr)",
        "--tw-prose-quote-borders": "var(--tw-prose-invert-quote-borders)",
        "--tw-prose-captions": "var(--tw-prose-invert-captions)",
        "--tw-prose-code": "var(--tw-prose-invert-code)",
        "--tw-prose-code-bg": "var(--tw-prose-invert-code-bg)",
        "--tw-prose-pre-code": "var(--tw-prose-invert-pre-code)",
        "--tw-prose-pre-bg": "var(--tw-prose-invert-pre-bg)",
        "--tw-prose-pre-border": "var(--tw-prose-invert-pre-border)",
        "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)",
        "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)"
      }
    },
    DEFAULT: {
      css: {
        "--tw-prose-body": theme("colors.zinc.600"),
        "--tw-prose-headings": theme("colors.zinc.950"),
        "--tw-prose-links": theme("colors.red.500"),
        "--tw-prose-links-hover": theme("colors.red.600"),
        "--tw-prose-underline": theme("colors.red.500 / 0.2"),
        "--tw-prose-underline-hover": theme("colors.red.500"),
        "--tw-prose-bold": theme("colors.zinc.950"),
        "--tw-prose-counters": theme("colors.zinc.950"),
        "--tw-prose-bullets": theme("colors.zinc.950"),
        "--tw-prose-hr": theme("colors.zinc.100"),
        "--tw-prose-quote-borders": theme("colors.zinc.200"),
        "--tw-prose-captions": theme("colors.zinc.400"),
        "--tw-prose-code": theme("colors.zinc.700"),
        "--tw-prose-code-bg": theme("colors.zinc.300 / 0.2"),
        "--tw-prose-pre-code": theme("colors.zinc.100"),
        "--tw-prose-pre-bg": theme("colors.zinc.950"),
        "--tw-prose-pre-border": "transparent",
        "--tw-prose-th-borders": theme("colors.zinc.200"),
        "--tw-prose-td-borders": theme("colors.zinc.100"),

        // INVERT
        "--tw-prose-invert-body": theme("colors.zinc.400"),
        "--tw-prose-invert-headings": theme("colors.zinc.200"),
        "--tw-prose-invert-links": theme("colors.red.400"),
        "--tw-prose-invert-links-hover": theme("colors.red.400"),
        "--tw-prose-invert-underline": theme("colors.red.400 / 0.3"),
        "--tw-prose-invert-underline-hover": theme("colors.red.400"),
        "--tw-prose-invert-bold": theme("colors.zinc.200"),
        "--tw-prose-invert-counters": theme("colors.zinc.200"),
        "--tw-prose-invert-bullets": theme("colors.zinc.200"),
        "--tw-prose-invert-hr": theme("colors.zinc.700 / 0.4"),
        "--tw-prose-invert-quote-borders": theme("colors.zinc.500"),
        "--tw-prose-invert-captions": theme("colors.zinc.500"),
        "--tw-prose-invert-code": theme("colors.zinc.300"),
        "--tw-prose-invert-code-bg": theme("colors.zinc.200 / 0.05"),
        "--tw-prose-invert-pre-code": theme("colors.zinc.100"),
        "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 0.4)",
        "--tw-prose-invert-pre-border": theme("colors.zinc.200 / 0.1"),
        "--tw-prose-invert-th-borders": theme("colors.zinc.700"),
        "--tw-prose-invert-td-borders": theme("colors.zinc.800"),

        // BASE
        "lineHeight": theme("lineHeight.7"),
        "color": "var(--tw-prose-body)",

        "> *": {
          marginTop: theme("spacing.10"),
          marginBottom: theme("spacing.10")
        },

        "p": {
          marginTop: theme("spacing.7"),
          marginBottom: theme("spacing.7")
        },

        // HEADINGS
        "h2, h3": {
          fontWeight: theme("fontWeight.semi-bold"),
          color: "var(--tw-prose-headings)"
        },

        "h2": {
          fontSize: theme("fontSize.xl")[0],
          lineHeight: theme("lineHeight.7"),
          marginTop: theme("spacing.20"),
          marginBottom: theme("spacing.4")
        },

        "h3": {
          fontSize: theme("fontSize.base")[0],
          lineHeight: theme("lineHeight.7"),
          marginTop: theme("spacing.16"),
          marginBottom: theme("spacing.4")
        },

        "is(h2, h3) + *": {
          marginTop: 0
        },

        // IMAGES
        "img": {
          borderRadius: theme("borderRadius.xl-3")
        },

        // INLINE ELEMENTS
        "a": {
          fontWeight: theme("fontWeight.semi-bold"),
          textDecoration: "underline",
          textDecorationColor: "var(--tw-prose-underline)",
          transitionProperty: "color, text-decoration-color",
          transitionDuration: theme("transitionDuration.150"),
          transitionTimingFunction: theme("transitionTimingFunction.in-out"),
          color: "var(--tw-prose-links)"
        },

        "a:hover": {
          textDecorationColor: "var(--tw-prose-underline-hover)",
          color: "var(--tw-prose-links-hover)"
        },

        "strong": {
          fontWeight: theme("fontWeight.semi-bold"),
          color: "var(--tw-prose-bold)"
        },

        "code": {
          display: "inline-block",
          fontSize: theme("fontSize.sm")[0],
          fontWeight: theme("fontWeight.semi-bold"),
          color: "var(--tw-prose-code)",
          backgroundColor: "var(--tw-prose-code-bg)",
          paddingLeft: theme("spacing.1"),
          paddingRight: theme("spacing.1"),
          borderRadius: theme("borderRadius.lg")
        },

        ":is(h2, h3) code": {
          fontWeight: theme("fontWeight.bold")
        },

        "a code": {
          color: "inherit"
        }
      }
    }
  }
}

export default typographyStyles
