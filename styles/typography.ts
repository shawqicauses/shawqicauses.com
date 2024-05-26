// DONE REVIEWING: GITHUB COMMIT 2️⃣
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
        "--tw-prose-body": theme("colors.zinc.500"),
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
        "--tw-prose-td-borders": theme("colors.zinc.100")
      }
    }
  }
}

export default typographyStyles
