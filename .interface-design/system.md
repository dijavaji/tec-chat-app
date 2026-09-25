# Interface Design System: TEC CHAT APP

> **Note:** Este documento se complementa con `DESIGN.md` en la raíz del proyecto, que contiene los tokens de diseño exhaustivos en formato YAML + Markdown siguiendo la especificación de Google Stitch.

## Direction & Feel
**Hybrid: Solid Base + Premium Glassmorphism Overlays (Dark Mode)**
A modern, sophisticated interface that uses solid tonal layers for structure (sidebar, header, main content) and glassmorphism (transparency, subtle borders, backdrop blur) for elevated components like modals and overlays. The look is clean, high-tech, and focuses on clarity and hierarchy.

## Depth Strategy
- **Base Layering:** Solid tonal backgrounds for main structure (`#111827`, `#1A2233`, `#2A3650`).
- **Glassmorphism:** Low-opacity white backgrounds (`rgba(255, 255, 255, 0.03-0.05)`) with `backdrop-filter: blur(8px-12px)` for modals, dropdowns, and intent cards.
- **Borders:** Thin, subtle borders using CSS variables with glassmorphism fallbacks.
- **Elevation:** Y-axis translation (`translateY(-4px)`) on hover for cards, (`translateY(-2px)`) for buttons/inputs.
- **Brightness Filter:** `filter: brightness(1.1)` on primary buttons hover for extra feedback.

## Color Palette
- **Primary:** Electric Blue (`#2F6BFF`) - used for primary actions and active states.
- **Primary Glow:** Bright Blue (`#5FA8FF`) - used in gradients and glow effects.
- **Accents:** 
  - Error/Destructive (`#DC2626`) - for errors, warnings, and destructive actions.
  - Success (`#22C55E`) - for confirmations and positive states.
  - Warning (`#F59E0B`) - for alerts and caution states.
- **Text:**
  - Primary: Soft White (`#F4F7FF`)
  - Secondary/Muted: Light Slate (`#AAB4D6`)

## Typography
- **Family:** Inter (weights: 400, 500, 600, 700).
- **Headlines:** SemiBold to Bold (600-700) with tight letter-spacing (`-0.02em` to `-0.01em`).
- **Body:** Responsive line-height (1.5-1.6) for readability.
- **Labels:** SemiBold (600) with slight letter-spacing (`0.02em` on small sizes).

## Spacing & Grid
- **Base Unit:** 1rem (16px).
- **Gaps:** 1.5rem (24px) for component grouping.
- **Margins:** 2rem (32px) for major section separation.

## Key Component Patterns

### Feature Columns
- **Structure:** Vertically stacked icon, title, and cards.
- **Alignment:** Top-aligned (`align-items: flex-start`) in the container.
- **Cards:** Centered text, rounded corners (12px), subtle background shifts on hover.

### Inputs & Forms (Hybrid: Solid with Glassmorphism Fallbacks)
- **Background:** `var(--color-surface-2, rgba(255, 255, 255, 0.05))` - CSS variable with glassmorphism fallback.
- **Border:** `1px solid var(--color-border, rgba(255, 255, 255, 0.1))`.
- **Focus State:** Border color shifts to Primary (`#2F6BFF`) with `box-shadow: 0 0 0 2px rgba(47, 107, 255, 0.15)`.
- **Hover State:** Subtle `translateY(-2px)` for interactive feedback.
- **Radius:** 8px for standard inputs (12px for larger textarea/search bars).
- **Validation:** Error messages in `#DC2626`, size `0.8rem`, weight 500.

### Primary Action Buttons
- **Background:** `var(--color-primary-electric, #2F6BFF)`.
- **Shadow:** `0 0 14px rgba(47, 107, 255, 0.35)` on hover only (glow effect).
- **Hover:** `translateY(-2px)`, `filter: brightness(1.1)`, and glow shadow.
- **Active:** `translateY(0)` to reset.
- **Typography:** SemiBold weight (600), letter-spacing `0.025em` optional.
- **Radius:** 8px (consistent with input fields).
- **Height:** 44px fixed for consistency.

### Settings & List Items
- **Structure:** Horizontal layout, `justify-content: space-between`, `align-items: center`.
- **Icon Wrapper:** 36x36px container, background `rgba(47, 107, 255, 0.1)`, 10px radius.
- **Hover Effect:** Wrapper becomes solid Primary (`#2F6BFF`), text becomes white, and Chevron translates `+2px` on X-axis.

### Modals (Portals)
- **Implementation:** Must use `ReactDOM.createPortal` to the `document.body`.
- **Overlay:** `backdrop-filter: blur(8px)`, `background: rgba(0, 0, 0, 0.7)`.
- **Positioning:** Perfect center using `display: flex`, `align-items: center`, `justify-content: center`.
- **Container Background:** `var(--color-surface, rgba(255, 255, 255, 0.03))` with glassmorphism fallback.
- **Container Border:** `1px solid var(--color-border, rgba(255, 255, 255, 0.1))`.
- **Radius:** 16px for the main container (24px for large modals like settings).
