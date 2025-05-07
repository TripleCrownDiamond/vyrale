# 🎨 ⚡vyrale Design System

This document outlines the core components, styles, and guidelines for building interfaces for ⚡vyrale, ensuring consistency and leveraging our tech stack.

Built With: Next.js 14, TailwindCSS, Shadcn/UI

---

## foundational Elements

### 1. Color Palette

Our color palette is designed to be vibrant, accessible, and aligned with the ⚡vyrale brand identity. Refer to the [⚡vyrale Brand Guide](brand-guide.md) for the full official palette.

**Core Colors:**

- **Primary (Pink):** `#FF2E7D`
  - _Usage:_ Main calls-to-action, branding highlights, key interactive elements.
  - _Tailwind Variable:_ `primary`
- **Accent (Blue):** `#007BFF`
  - _Usage:_ Secondary actions, informational highlights, decorative elements.
  - _Tailwind Variable:_ `accent`
- **Primary Darker:** `#CC2564`
  - _Usage:_ Hover/active states for primary elements.
  - _Tailwind Variable:_ `primary-darker`
- **Accent Darker:** `#0056B3`
  - _Usage:_ Hover/active states for accent elements.
  - _Tailwind Variable:_ `accent-darker`

**Neutral Colors:**

- **White:** `#FFFFFF`
  - _Usage:_ Backgrounds, text on dark backgrounds.
  - _Tailwind Variable:_ `white`
- **Black:** `#000000`
  - _Usage:_ Text, dark backgrounds, high contrast elements.
  - _Tailwind Variable:_ `black`
- **Gray (Light):** `#F5F5F5`
  - _Usage:_ Subtle backgrounds, dividers, disabled states.
  - _Tailwind Variable:_ `gray-light`
- **Gray (Medium):** `#CCCCCC`
  - _Usage:_ Borders, secondary text, icons.
  - _Tailwind Variable:_ `gray-medium`
- **Gray (Dark):** `#333333`
  - _Usage:_ Body text on light backgrounds, headings.
  - _Tailwind Variable:_ `gray-dark`

**Semantic Colors:**

- **Success:** `#28A745`
  - _Usage:_ Confirmation messages, positive indicators.
  - _Tailwind Variable:_ `success`
- **Warning:** `#FFC107`
  - _Usage:_ Alerts, cautionary messages.
  - _Tailwind Variable:_ `warning`
- **Error:** `#DC3545`
  - _Usage:_ Error messages, critical alerts.
  - _Tailwind Variable:_ `error`
- **Info:** `#17A2B8`
  - _Usage:_ Informational messages, tips.
  - _Tailwind Variable:_ `info`

**Usage Rules:**

1.  **Primary First:** Use the primary color (`#FF2E7D`) for the most important actions and brand elements.
2.  **Accent Sparingly:** Use the accent color (`#007BFF`) to draw attention to secondary elements or add visual interest without overpowering the primary color.
3.  **Neutrals for Foundation:** Rely on neutrals for backgrounds, text, and structural elements to ensure readability and a clean layout.
4.  **Semantic Colors for State:** Use semantic colors consistently to communicate status (success, warning, error, info).
5.  **Interaction States:** Use `primary-darker` (`#CC2564`) and `accent-darker` (`#0056B3`) for hover, active, or focus states on elements using the respective base colors.
6.  **Accessibility:** Ensure sufficient contrast ratios between text and background colors, especially when using primary and accent colors. Use tools to check contrast.

**Tailwind CSS Configuration Example (`tailwind.config.js`):**

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#FF2E7D",
        "primary-darker": "#CC2564",
        accent: "#007BFF",
        "accent-darker": "#0056B3",
        "gray-light": "#F5F5F5",
        "gray-medium": "#CCCCCC",
        "gray-dark": "#333333",
        success: "#28A745",
        warning: "#FFC107",
        error: "#DC3545",
        info: "#17A2B8",
      },
    },
  },
  plugins: [],
};
```

**Shadcn/UI Theming:**

When using Shadcn/UI, configure the theme (often in `globals.css` or a dedicated theme file) to use these variables. Set `--primary` to `#FF2E7D`.

```css
/* Example in globals.css */
:root {
  --primary: 255 46 125; /* HSL or RGB values for Shadcn - #FF2E7D */
  --primary-foreground: 255 255 255; /* Text on primary - Assuming white */
  --primary-darker: 204 37 100; /* HSL or RGB for #CC2564 */

  --accent: 0 123 255; /* HSL or RGB for #007BFF */
  --accent-foreground: 255 255 255; /* Text on accent - Assuming white */
  --accent-darker: 0 86 179; /* HSL or RGB for #0056B3 */

  /* ... other theme variables ... */

  /* Example Usage for Hover/Focus on Shadcn Button */
  .button-primary:hover {
    background-color: hsl(var(--primary-darker));
  }
  .button-accent:hover {
    background-color: hsl(var(--accent-darker));
  }
}
```

### 2. Typography

Refer to the [vyrale Brand Guide](brand-guide.md) for specific font choices and weights.

- **Headings:** Raleway (Weights: Bold 700, SemiBold 600)
- **Body:** Inter (Weights: Regular 400, Medium 500)

**Usage in Tailwind:**

1.  **Import Fonts:** Ensure fonts are imported (e.g., via Google Fonts link in `layout.tsx` or downloaded and served locally).
2.  **Configure `tailwind.config.js`:**

    ```js
    // tailwind.config.js
    const { fontFamily } = require("tailwindcss/defaultTheme");

    module.exports = {
      // ... other config
      theme: {
        extend: {
          fontFamily: {
            sans: ["var(--font-inter)", ...fontFamily.sans],
            heading: ["var(--font-raleway)", ...fontFamily.sans],
          },
          // ... other extensions
        },
      },
      // ... plugins
    };
    ```

3.  **Define CSS Variables (e.g., in `globals.css`):**

    ```css
    /* globals.css */
    @layer base {
      :root {
        /* ... other variables */
        --font-inter: "Inter", sans-serif;
        --font-raleway: "Raleway", sans-serif;
      }

      body {
        @apply font-sans;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        @apply font-heading;
      }
    }
    ```

4.  **Apply Utility Classes:** Use `font-heading` for headings and `font-sans` (or default) for body text.

### 3. Spacing & Layout

- Use Tailwind's spacing scale (multiples of 4px/0.25rem) for margins, padding, and gaps.
- Employ Flexbox and Grid utilities for layout.
- Maintain consistent spacing between elements.

---

## 🧩 Components (Shadcn/UI)

We primarily use components from the [Shadcn/UI](https://ui.shadcn.com/) library. Customize these components to align with our brand guide (colors, typography, border-radius, etc.).

**Core Components:**

- `Button`: Primary (Pink), Secondary (Outline/Neutral), Destructive variants.
- `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`: For forms (used with React Hook Form + Zod).
- `Card`: For displaying content blocks.
- `Dialog`, `Popover`, `Tooltip`: For overlays and contextual information.
- `NavigationMenu`, `DropdownMenu`: For navigation.
- `Avatar`: User profile images.
- `Badge`: Status indicators.

**Customization:**

- Apply vyrale Pink (`#FF2E7D`) to primary actions and highlights. Configure this in the Shadcn/UI theme setup (often in `globals.css` or theme configuration).
- Ensure typography matches the brand guide.
- Adjust `border-radius` for consistency if needed.

---

## ✨ Iconography

- Use a consistent icon set (e.g., Lucide Icons, included with Shadcn/UI).
- Ensure icons are clear and appropriately sized.
- Use the vyrale lightning bolt icon strategically (see Brand Guide).

---

## 🖼️ Imagery & Media

- Follow guidelines in the [vyrale Brand Guide](brand-guide.md) for logo usage.
- Optimize images for web use.
- Ensure accessibility (alt text for images).

---

## 📐 Figma Design System Guide

To ensure consistency between design and development, create a corresponding Figma library based on this design system document.

**Key Steps:**

1.  **Color Styles:**

    - Create Figma color styles for all colors defined in the [Color Palette](#1-color-palette) section.
    - Use the exact HEX codes provided.
    - Name the styles clearly, mirroring the Tailwind variable names (e.g., `primary`, `accent`, `gray-light`, `success`).

2.  **Text Styles:**

    - Create Figma text styles based on the [Typography](#2-typography) guidelines.
    - Set up styles for different heading levels (H1-H6) using Raleway with the specified weights.
    - Set up styles for body text using Inter with the specified weights.
    - Ensure line heights and other typographic properties are consistent.

3.  **Component Library:**

    - Recreate the core [Shadcn/UI Components](#-components-shadcnui) used in the project as Figma components.
    - Focus on components like `Button`, `Input`, `Card`, `Dialog`, `Badge`, etc.
    - Apply the defined Color Styles and Text Styles to these components.
    - Build variants for components where necessary (e.g., button states: default, hover, disabled; button types: primary, secondary, destructive).

4.  **Iconography:**

    - Import the chosen icon set (e.g., Lucide Icons) into Figma.
    - Create icon components for easy reuse.

5.  **Spacing & Layout:**

    - While Figma doesn't have direct Tailwind spacing utilities, establish a consistent spacing system in Figma (e.g., using an 8px grid or multiples of 4px) that mirrors the Tailwind scale used in development.
    - Use Auto Layout extensively to manage spacing within components and layouts.

6.  **Documentation:**
    - Add descriptions and usage guidelines directly within the Figma library for clarity.

By mirroring the web design system in Figma, we facilitate a smoother handoff process and maintain visual consistency across design and implementation.

---

[← Back to Project Hub](vyrale.md)
