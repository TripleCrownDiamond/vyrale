# 🎨 vyrale Design System

This document outlines the core components, styles, and guidelines for building interfaces for vyrale, ensuring consistency and leveraging our tech stack.

Built With: Next.js 14, TailwindCSS, Shadcn/UI

---

## foundational Elements

### 1. Color Palette

Refer to the [vyrale Brand Guide](brand-guide.md) for the official color palette.

- **Primary:** `#FF2E7D` (vyrale Pink)
- **Neutrals:** White, Black, Grays (See Brand Guide)
- **Accents:** (See Brand Guide)

**Usage in Tailwind/Shadcn:**

- Configure `tailwind.config.js` to include these colors.
- Leverage Shadcn/UI's theming capabilities, setting vyrale Pink as the primary theme color. Check `globals.css` or the theme configuration file.

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

[← Back to Project Hub](virtual-cm-project-hub.md)
