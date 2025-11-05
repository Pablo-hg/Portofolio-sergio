// tailwind.config.js
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* === BACKGROUND === */
        bgColor: {
          base: "var(--color-bg-base)",
          surface: "var(--color-bg-surface)",
          overlay: "var(--color-bg-overlay)",
          neutral: {
            light: "var(--color-bg-neutral-light)",
          },
          header: "var(--color-bg-header)",
          primary: "var(--color-bg-primary)",
          green: "var(--color-bg-green)",
          blue: "var(--color-bg-blue)",
          grey: "var(--color-bg-grey)",
        },

        /* === TEXT === */
        textColor: {
          base: "var(--color-text-base)",
          heading: {
            strong: "var(--color-text-heading-strong)",
            subtle: "var(--color-text-heading-subtle)",
          },
          body: "var(--color-text-body)",
          description: "var(--color-text-description)",
          muted: "var(--color-text-muted)",
          inverse: "var(--color-text-inverse)",
          link: {
            base: "var(--color-text-link)",
            hover: "var(--color-text-link-hover)",
          },
        },

        /* === ACCENT === */
        accentColor: {
          primary: "var(--color-accent-primary)",
          "primary-hover": "var(--color-accent-primary-hover)",
          secondary: "var(--color-accent-secondary)",
          neutral: "var(--color-accent-neutral)",
        },

        /* === BORDER === */
        borderColor: {
          main: "var(--color-border-main)",
          default: "var(--color-border-default)",
          hover: "var(--color-border-hover)",
          muted: "var(--color-border-muted)",
        },

        /* === STATE === */
        stateColor: {
          success: "var(--color-state-success)",
          error: "var(--color-state-error)",
          info: "var(--color-state-info)",
        },
      },
    },
  },
  plugins: [daisyui],
};
