# 🎨 Vyrale Design System

This document outlines the core components, styles, and guidelines for building interfaces for Vyrale, ensuring consistency and leveraging our tech stack.

Built With: Next.js 14, TailwindCSS, Shadcn/UI

---

## foundational Elements

### 1. Color Palette

Refer to the [Vyrale Brand Guide](brand-guide.md) for the official color palette.

- **Primary:** `#FF2E7D` (Vyrale Pink)
- **Neutrals:** White, Black, Grays (See Brand Guide)
- **Accents:** (See Brand Guide)

**Usage in Tailwind/Shadcn:**

- Configure `tailwind.config.js` to include these colors.
- Leverage Shadcn/UI's theming capabilities, setting Vyrale Pink as the primary theme color.

### 2. Typography

Refer to the [Vyrale Brand Guide](brand-guide.md) for specific font choices and weights.

- **Headings:** [Primary Font Name] (e.g., Poppins)
- **Body:** [Secondary Font Name] (e.g., Inter)

**Usage in Tailwind:**

- Configure `tailwind.config.js` with the chosen font families.
- Apply utility classes (`font-heading`, `font-body`, `text-lg`, `text-base`, etc.).

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

- Apply Vyrale Pink to primary actions and highlights.
- Ensure typography matches the brand guide.
- Adjust `border-radius` for consistency if needed.

---

## ✨ Iconography

- Use a consistent icon set (e.g., Lucide Icons, included with Shadcn/UI).
- Ensure icons are clear and appropriately sized.
- Use the Vyrale lightning bolt icon strategically (see Brand Guide).

---

## 🖼️ Imagery & Media

- Follow guidelines in the [Vyrale Brand Guide](brand-guide.md) for logo usage.
- Optimize images for web use.
- Ensure accessibility (alt text for images).

---

[← Back to Project Hub](virtual-cm-project-hub.md)
