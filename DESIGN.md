# Technoloqie Smart Chatbot

---
version: alpha
name: Technoloqie Electric Blue Pro
description: Sistema de diseño para plataforma de chatbot inteligente con identidad visual profesional-innovadora, optimizado para modo oscuro y claro.

colors:
  # Primary Palette - Electric Blue Pro
  primary-600: "#0055FF"
  primary-500: "#247BFF"
  primary-300: "#6EB6FF"
  primary-50: "#E9F3FF"
  primary-electric: "#2F6BFF"
  primary-glow: "#5FA8FF"
  
  # Neutral Palette - Dark Mode
  neutral-900: "#0A0F1A"
  neutral-800: "#0B0F1A"
  neutral-700: "#111827"
  neutral-600: "#1A2233"
  neutral-500: "#2A3650"
  neutral-400: "#4B5563"
  neutral-300: "#5C6B8A"
  neutral-200: "#AAB4D6"
  neutral-100: "#D1D5DB"
  neutral-50: "#E3E8F2"
  
  # Light Mode Surfaces
  surface-light: "#FFFFFF"
  surface-light-2: "#F1F4FA"
  bg-light: "#F7F9FC"
  bg-light-alt: "#F9FAFB"
  
  # Text Colors
  text-primary-dark: "#F4F7FF"
  text-secondary-dark: "#AAB4D6"
  text-primary-light: "#0B0F1A"
  text-secondary-light: "#5C6B8A"
  
  # Accent Colors
  white-neon: "#F5F9FF"
  blue-glow: "#99CEFF"
  blue-pure: "#008CFF"
  
  # Semantic Colors
  success: "#22C55E"
  success-light: "#86EFAC"
  warning: "#F59E0B"
  warning-light: "#FCD34D"
  error: "#DC2626"
  error-light: "#FCA5A5"
  info: "#3B82F6"
  info-light: "#93C5FD"

typography:
  # Display Styles
  display-lg:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  
  display-md:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  
  # Headline Styles
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  
  # Body Styles
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  
  body-xs:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  
  # Label & UI Text
  label-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.02em
  
  # Code & Monospace
  code-md:
    fontFamily: source-code-pro, Menlo, Monaco, Consolas, Courier New
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 40px
  xxxl: 64px
  base: 16px
  gutter: 20px
  section: 30px
  sidebar-width: 260px
  header-height: 70px

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
  circle: 50%

components:
  # Primary Button
  button-primary:
    backgroundColor: "{colors.primary-electric}"
    textColor: "#FFFFFF"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 44px
  
  button-primary-hover:
    backgroundColor: "{colors.primary-600}"
    boxShadow: 0 0 14px rgba(47,107,255,0.35)
    transform: translateY(-2px)
    filter: brightness(1.1)
  
  button-primary-active:
    backgroundColor: "{colors.primary-500}"
    transform: translateY(0)
  
  # Secondary Button
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary-electric}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 44px
    borderColor: "{colors.primary-electric}"
    borderWidth: 1px
  
  button-secondary-hover:
    backgroundColor: "{colors.primary-50}"
    transform: translateY(-2px)
  
  # Icon Button
  button-icon:
    backgroundColor: "{colors.neutral-600}"
    textColor: "{colors.text-primary-dark}"
    rounded: "{rounded.md}"
    padding: 8px 10px
    size: 36px
  
  button-icon-hover:
    backgroundColor: "{colors.neutral-700}"
  
  # Input Field
  input-default:
    backgroundColor: "{colors.neutral-600}"
    textColor: "{colors.text-primary-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 9px 14px
    height: 40px
    borderColor: "{colors.neutral-500}"
    borderWidth: 1px
  
  input-focused:
    borderColor: "{colors.primary-electric}"
    boxShadow: 0 0 0 2px rgba(47,107,255,0.15)
  
  input-error:
    borderColor: "{colors.error}"
  
  # Card
  card-default:
    backgroundColor: "{colors.neutral-700}"
    rounded: "{rounded.lg}"
    padding: 22px
    borderColor: "{colors.neutral-500}"
    borderWidth: 1px
  
  card-hover:
    borderColor: "{colors.primary-electric}"
    transform: translateY(-4px)
  
  # Card Glassmorphism (for overlays)
  card-glass:
    backgroundColor: rgba(255,255,255,0.03)
    backdropFilter: blur(12px)
    rounded: "{rounded.lg}"
    padding: 22px
    borderColor: rgba(255,255,255,0.1)
    borderWidth: 1px
  
  # Chat Message - Bot
  message-bot:
    backgroundColor: "{colors.neutral-700}"
    textColor: "{colors.text-primary-dark}"
    typography: "{typography.body-sm}"
    rounded: 12px 12px 12px 0
    padding: 10px 14px
    borderColor: "{colors.neutral-500}"
    borderWidth: 1px
  
  # Chat Message - User
  message-user:
    backgroundColor: "{colors.primary-electric}"
    textColor: "#FFFFFF"
    typography: "{typography.body-sm}"
    rounded: 12px 12px 0 12px
    padding: 10px 14px
  
  # Navigation Link
  nav-link:
    textColor: "{colors.text-secondary-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
  
  nav-link-hover:
    backgroundColor: "{colors.neutral-600}"
    textColor: "{colors.text-primary-dark}"
  
  nav-link-active:
    backgroundColor: "{colors.primary-electric}"
    textColor: "#FFFFFF"
    boxShadow: 0 0 14px rgba(47,107,255,0.35)
  
  # Sidebar
  sidebar:
    backgroundColor: "{colors.neutral-700}"
    width: "{spacing.sidebar-width}"
    padding: "{spacing.lg}"
    borderColor: "{colors.neutral-500}"
    borderWidth: 1px
  
  # Header
  header:
    backgroundColor: "{colors.neutral-700}"
    height: "{spacing.header-height}"
    padding: 0 30px
    borderColor: "{colors.neutral-500}"
    borderWidth: 1px
  
  # Chat Widget Launcher
  chat-launcher:
    backgroundColor: linear-gradient(135deg, #2F6BFF, #5FA8FF)
    size: 60px
    rounded: "{rounded.circle}"
    boxShadow: 0 10px 30px rgba(0,0,0,0.4)
  
  chat-launcher-hover:
    transform: scale(1.05)
  
  # Chat Widget Window
  chat-window:
    backgroundColor: "{colors.neutral-700}"
    rounded: "{rounded.xl}"
    width: 340px
    height: 460px
    borderColor: "{colors.neutral-500}"
    borderWidth: 1px
    boxShadow: 0 25px 60px rgba(0,0,0,0.4)
  
  # Chat Widget Header
  chat-header:
    backgroundColor: "{colors.primary-electric}"
    textColor: "#FFFFFF"
    typography: "{typography.label-lg}"
    padding: 14px 16px
  
  # Avatar
  avatar:
    backgroundColor: "{colors.primary-electric}"
    textColor: "#FFFFFF"
    typography: "{typography.label-md}"
    size: 36px
    rounded: "{rounded.circle}"
  
  # Badge / Chip
  badge-primary:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-600}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: 4px 10px
  
  badge-success:
    backgroundColor: "{colors.success-light}"
    textColor: "{colors.success}"
  
  badge-warning:
    backgroundColor: "{colors.warning-light}"
    textColor: "{colors.warning}"
  
  badge-error:
    backgroundColor: "{colors.error-light}"
    textColor: "{colors.error}"
  
  # Theme Toggle
  theme-toggle:
    backgroundColor: "{colors.neutral-600}"
    rounded: "{rounded.full}"
    padding: 6px 10px
    borderColor: "{colors.neutral-500}"
    borderWidth: 1px
  
  # Logo Dot (Brand Element)
  logo-dot:
    backgroundColor: "{colors.primary-electric}"
    size: 12px
    rounded: "{rounded.circle}"
    boxShadow: 0 0 10px #2F6BFF
---

## Overview

**Technoloqie Smart Chatbot** es una plataforma de chatbot inteligente con una identidad visual que comunica **innovación tecnológica, confiabilidad profesional y accesibilidad para pymes**. El sistema de diseño está construido sobre una paleta **Electric Blue Pro** que utiliza azul eléctrico como color de acción primario, combinado con una base de neutros sofisticados que funcionan tanto en modo oscuro como claro.

La filosofía de diseño privilegia:
- **Claridad antes que ornamentación**: Cada elemento tiene un propósito claro.
- **Energía contenida**: El azul eléctrico aporta dinamismo sin saturar la interfaz.
- **Modo oscuro primero**: Diseñado inicialmente para modo oscuro, con soporte completo para modo claro.
- **Espaciado generoso**: Breathing room para reducir la carga cognitiva.
- **Accesibilidad**: Contraste WCAG AA en todos los estados.

El tono visual es **aspiracional-innovador pero no intimidante**. La interfaz debe sentirse como tecnología de punta que cualquier negocio puede adoptar sin necesitar un equipo técnico dedicado.

---

## Colors

La paleta de colores está estructurada en torno a tres grupos principales: **Primary (Electric Blue Pro)**, **Neutrals (Dark/Light)**, y **Semantics**.

### Primary: Electric Blue Pro

El azul eléctrico es el corazón visual de la marca. Se utiliza exclusivamente para:
- Acciones primarias (botones CTA, enlaces activos)
- Estados activos en navegación
- El launcher del widget de chat
- Elementos de marca (logo dot, highlights)

**Primary 600 (#0055FF)** es el tono principal para botones y CTAs. **Primary Electric (#2F6BFF)** es la variante usada en gradientes y elementos con glow. **Primary 300 (#6EB6FF)** se reserva para fondos suaves, badges y estados hover sutiles.

El glow/sombra (`rgba(47,107,255,0.35)` en modo oscuro, `0.15` en claro) se aplica solo a elementos interactivos críticos para crear jerarquía visual sin ruido.

### Neutrals: Architectural Foundations

**Modo Oscuro (Default):**
- **Neutral 900/800 (#0A0F1A, #0B0F1A)**: Fondo base de la aplicación. Color profundo que reduce fatiga visual.
- **Neutral 700 (#111827)**: Superficie para cards, sidebar, header. El lienzo principal de trabajo.
- **Neutral 600 (#1A2233)**: Superficie secundaria para inputs, áreas interactivas.
- **Neutral 500 (#2A3650)**: Bordes y divisores.
- **Text Primary (#F4F7FF)**: Texto principal, alta legibilidad.
- **Text Secondary (#AAB4D6)**: Texto secundario, labels, metadata.

**Modo Claro:**
- **BG Light (#F7F9FC)**: Fondo base limpio y suave.
- **Surface Light (#FFFFFF)**: Cards y contenedores principales.
- **Surface Light 2 (#F1F4FA)**: Inputs y áreas secundarias.
- **Border (#E3E8F2)**: Bordes sutiles que no compiten con contenido.
- **Text Primary (#0B0F1A)**: Texto oscuro con contraste óptimo.
- **Text Secondary (#5C6B8A)**: Texto de apoyo.

### Semantics: Communicative Clarity

Los colores semánticos siguen convenciones estándar:
- **Success (#22C55E)**: Confirmaciones, estados online, checkmarks.
- **Warning (#F59E0B)**: Alertas no críticas, estados pendientes.
- **Error (#DC2626)**: Errores, validaciones fallidas, estados offline.
- **Info (#3B82F6)**: Información contextual, tooltips.

Cada color semántico tiene una variante `-light` para fondos de badges y alerts.

---

## Typography

La tipografía está basada completamente en **Inter**, una sans-serif humanista diseñada para interfaces digitales con excelente legibilidad en pantallas de cualquier densidad de píxeles.

### Hierarchy

**Display (56px-48px, Bold 700):** Usado exclusivamente en landing pages para hero sections. Peso fuerte, tracking negativo (-0.02em) para crear impacto visual. No se usa en la aplicación interna.

**Headlines (40px-24px, SemiBold 600):** Títulos de sección, nombres de página, encabezados de cards importantes. Jerarquía clara con tracking ligeramente negativo en los tamaños mayores.

**Body (18px-12px, Regular 400):** El sistema de texto de trabajo. Body MD (16px) es el tamaño por defecto para contenido, mensajes de chat, formularios. Body SM (14px) para metadata, timestamps, texto secundario.

**Labels (16px-12px, SemiBold 600):** Etiquetas de botones, navegación, tabs, form labels. Peso intermedio para diferenciarse del body sin ser demasiado pesado.

**Code (14px, Monospace):** Para snippets de integración, IDs técnicos, logs. Usa la familia system monospace por defecto.

### Line Height & Letter Spacing

- Displays y headlines usan line-height ajustado (1.1-1.3) para densidad visual.
- Body text usa 1.5-1.6 para lectura cómoda en párrafos largos.
- Letter-spacing es neutral (0) excepto en displays (-0.02em para cohesión visual) y labels pequeños (+0.02em para legibilidad).

### Font Loading

Inter se carga vía Google Fonts con pesos 400, 500, 600, 700. El sistema usa `font-display: swap` para evitar FOIT (Flash of Invisible Text).

---

## Layout

El layout sigue un sistema de **Sidebar + Main Content** para la aplicación interna, y un **Grid Fluido** para landing pages y vistas públicas.

### Application Layout (Dashboard)

**Estructura fija:**
- **Sidebar:** 260px de ancho, sticky, full-height. Contiene logo, navegación principal y acciones globales.
- **Main:** Flex-grow para ocupar el resto del viewport. Se subdivide en:
  - **Header:** 70px de alto, sticky, contiene search, theme toggle, notificaciones, avatar.
  - **Content Area:** Padding de 30px, usa CSS Grid con `auto-fit` y `minmax(260px, 1fr)` para cards responsivas.

**Responsive:** En viewports < 768px, el sidebar se colapsa a un drawer off-canvas que se activa con un botón hamburguesa en el header.

### Spacing Scale

El sistema de espaciado está basado en múltiplos de **4px** con escalones nombrados:
- **xs (4px):** Micro-espaciado (iconos internos, paddings minimalistas).
- **sm (8px):** Espaciado compacto (gaps en rows, separación de badges).
- **md (16px):** Unidad base (padding de buttons, inputs, pequeños containers).
- **lg (24px):** Espaciado generoso (padding de sidebar, cards, modales).
- **xl (32px):** Secciones medianas.
- **xxl (40px):** Separación entre secciones grandes.
- **xxxl (64px):** Márgenes de hero sections en landing.

**Gutter (20px):** Gap por defecto en CSS Grid para cards.
**Section Padding (30px):** Padding estándar del content area.

### Grid System

No se usa un grid de 12 columnas tradicional. En su lugar, CSS Grid con `auto-fit` permite que los cards se organicen dinámicamente según el espacio disponible. Cada card tiene un min-width de 260px.

---

## Elevation & Depth

La profundidad visual se consigue mediante **capas tonales + sombras sutiles + glassmorphism selectivo**, no mediante sombras pesadas estilo Material Design.

### Dark Mode Elevation

En modo oscuro, la jerarquía se construye elevando el color de fondo:
- **Nivel 0 (Base):** Neutral 900 (#0A0F1A) — Fondo de la aplicación.
- **Nivel 1 (Surface):** Neutral 700 (#111827) — Sidebar, header, cards.
- **Nivel 2 (Raised):** Neutral 600 (#1A2233) — Inputs, dropdowns, elementos interactivos.

Bordes sutiles (Neutral 500, #2A3650) separan las capas sin agregar peso visual.

**Sombras:** Se usan solo en elementos flotantes:
- **Chat Widget Launcher:** `0 10px 30px rgba(0,0,0,0.4)` — sombra dramática para indicar que es flotante.
- **Chat Widget Window:** `0 25px 60px rgba(0,0,0,0.4)` — sombra profunda para desacoplarlo del contexto.
- **Dropdowns/Modals:** `0 8px 24px rgba(0,0,0,0.25)` — sombra media para pop-up contexts.

### Glassmorphism for Overlays

Los elementos que flotan sobre el contenido principal (modales, dropdowns, popovers, intent cards) usan **glassmorphism** para crear jerarquía visual sin peso:

**Características:**
- **Background:** `rgba(255,255,255,0.03)` a `0.05` — transparencia muy sutil sobre fondo oscuro
- **Backdrop Filter:** `blur(8px)` a `blur(12px)` — desenfoque del contenido subyacente
- **Border:** `rgba(255,255,255,0.1)` — borde sutil translúcido
- **Fallback:** Siempre con `var(--color-surface, rgba(...))` para compatibilidad con navegadores sin soporte de backdrop-filter

**Componentes con glassmorphism:**
- Modales (`backdrop-filter: blur(8px)`)
- Intent detail panels (`backdrop-filter: blur(12px)`)
- List intent containers
- Profile overlays
- Dropdown menus

**Cuándo usar glassmorphism:**
- ✅ Elementos que flotan temporalmente sobre contenido
- ✅ Overlays que necesitan mostrar contexto detrás
- ✅ Componentes que aparecen/desaparecen dinámicamente
- ❌ NO en estructura base (sidebar, header, contenido principal)

### Light Mode Elevation

En modo claro, la jerarquía se invierte:
- **Nivel 0:** BG Light (#F7F9FC)
- **Nivel 1:** Surface Light (#FFFFFF) con sombra muy sutil `0 1px 3px rgba(0,0,0,0.06)`
- **Nivel 2:** Surface Light 2 (#F1F4FA) — inputs sin sombra, solo con border.

### Glow Effects

Elementos con el color primario pueden tener un **glow effect** usando box-shadow con el color del elemento:
- Botones primarios en hover: `0 0 14px rgba(47,107,255,0.35)`
- Logo dot: `0 0 10px #2F6BFF`
- Nav links activos: `0 0 14px rgba(47,107,255,0.35)`

El glow refuerza la sensación de energía eléctrica sin ser agresivo.

---

## Shapes

El lenguaje de formas está definido por **bordes redondeados moderados** que comunican modernidad sin caer en lo infantil.

### Border Radius Scale

- **None (0px):** Nunca se usa. Todos los elementos tienen al menos un leve redondeo.
- **SM (4px):** Bordes muy sutiles, actualmente sin uso en el sistema.
- **MD (8px):** Radio por defecto para botones, inputs, nav links, icon buttons, badges.
- **LG (12px):** Cards, containers, burbujas de mensajes.
- **XL (16px):** Chat widget window, modales grandes.
- **Full (9999px):** Pills, theme toggle, elementos tipo "tag".
- **Circle (50%):** Avatares, launcher del chat widget, logo dot.

### Shape Guidelines

- **Botones e inputs:** Siempre usan `rounded-md` (8px) para consistencia.
- **Cards y containers:** Usan `rounded-lg` (12px) para suavidad sin exceso.
- **Mensajes de chat:** Bordes asimétricos (12px en 3 esquinas, 0px en la esquina que "apunta" al emisor) para indicar dirección.
- **Elementos circulares:** Avatares y el launcher siempre son perfectamente circulares para contrastar con la arquitectura rectangular del resto de la interfaz.

---

## Components

Los componentes siguen una estructura token-based que define propiedades visuales por estado (default, hover, active, focused, error).

### Buttons

**Button Primary:** El CTA principal del sistema. Fondo `primary-electric`, texto blanco, padding `12px 24px`, altura fija `44px`, rounded `8px`. En hover, cambia a `primary-600`, añade glow, aplica `translateY(-2px)` y `brightness(1.1)` para feedback táctil rico. En active, usa `primary-500` y resetea transform a `translateY(0)`.

**Button Secondary:** Outline style. Fondo transparente, border de 1px en `primary-electric`, texto `primary-electric`. En hover, fondo `primary-50` (en light mode) o `neutral-600` con alpha, y `translateY(-2px)`.

**Button Icon:** Cuadrado o casi-cuadrado (padding `8px 10px`), fondo `neutral-600`, sin texto o con icono solo. En hover, fondo `neutral-700`.

### Inputs

**Input Default:** Fondo `neutral-600`, border `neutral-500`, padding `9px 14px`, altura `40px`, rounded `8px`, texto `body-sm`. En focus, border `primary-electric` con box-shadow de 2px en `primary-electric` con alpha. En error, border `error`.

**Textarea:** Mismos estilos que input default, pero con altura variable (min-height `80px`).

### Cards

**Card Default:** Fondo `neutral-700`, border `neutral-500` de 1px, padding `22px`, rounded `12px`. En hover (si es interactiva), border cambia a `primary-electric` y aplica `transform: translateY(-4px)` para elevación visual.

**Card Glassmorphism:** Para elementos que flotan sobre contenido (intent cards, overlays), usa `background: rgba(255,255,255,0.03)`, `backdrop-filter: blur(12px)`, border `rgba(255,255,255,0.1)`, con fallback a variables CSS sólidas para compatibilidad. Se usa en componentes como IntentDetailComponent, ListIntentComponent, y modales.

### Chat Messages

**Message Bot:** Fondo `neutral-700`, border `neutral-500`, texto `text-primary-dark`, rounded asimétrico `12px 12px 12px 0` (esquina inferior izquierda recta), padding `10px 14px`, font `body-sm`.

**Message User:** Fondo `primary-electric`, texto blanco, rounded asimétrico `12px 12px 0 12px` (esquina inferior derecha recta), sin border, padding `10px 14px`, alineado a la derecha.

### Navigation

**Nav Link:** Padding `10px 14px`, rounded `8px`, texto `text-secondary-dark` por defecto. En hover, fondo `neutral-600`, texto `text-primary-dark`. En estado activo, fondo `primary-electric`, texto blanco, glow.

### Chat Widget

**Chat Launcher:** Botón circular de 60px, fondo con gradiente `linear-gradient(135deg, #2F6BFF, #5FA8FF)`, sombra dramática `0 10px 30px rgba(0,0,0,0.4)`. En hover, `transform: scale(1.05)`.

**Chat Window:** Width `340px`, height `460px`, rounded `16px`, fondo `neutral-700`, border `neutral-500`, sombra `0 25px 60px rgba(0,0,0,0.4)`.

**Chat Header:** Fondo `primary-electric`, texto blanco, padding `14px 16px`, font `label-lg`.

### Avatars

Circulares, 36px por defecto, fondo `primary-electric`, texto blanco con iniciales, font `label-md`.

### Badges

Pequeños labels de estado. Fondo y texto dependen del tipo semántico:
- **Primary:** Fondo `primary-50`, texto `primary-600`.
- **Success:** Fondo `success-light`, texto `success`.
- **Warning:** Fondo `warning-light`, texto `warning`.
- **Error:** Fondo `error-light`, texto `error`.

Padding `4px 10px`, rounded `8px`, font `label-sm`.

---

## Do's and Don'ts

### Color

**Do:**
- Usa `primary-electric` solo para acciones primarias. Una por pantalla idealmente.
- Mantén el contraste WCAG AA mínimo: 4.5:1 para texto normal, 3:1 para texto grande.
- Usa colores semánticos consistentemente (success = verde, error = rojo).

**Don't:**
- No uses el azul primario como fondo de grandes áreas. Es un color de acción, no de superficie.
- No mezcles azules de fuera de la paleta Electric Blue Pro.
- No uses blanco puro (#FFFFFF) como texto sobre fondos oscuros; usa `text-primary-dark` (#F4F7FF) para reducir fatiga.

### Typography

**Do:**
- Usa `body-md` (16px) como tamaño base para contenido.
- Reserva `display` sizes para hero sections en landing pages.
- Mantén la jerarquía: un solo headline principal por sección.

**Don't:**
- No uses más de 3 pesos de fuente en una misma vista (recomendado: 400, 600, 700).
- No apliques letter-spacing extremo (>0.05em) ni negativo (<-0.02em).
- No uses text-transform uppercase excepto en casos muy específicos de UI labels.

### Layout

**Do:**
- Usa la escala de spacing consistentemente. Si necesitas 32px, usa `xl`, no valores arbitrarios.
- Respeta el padding de `22px` en cards y `24px` en sidebar.
- Deja breathing room: prefiere más espacio a menos.

**Don't:**
- No apiles más de 3 niveles de contenedores anidados sin justificación clara.
- No rompas el grid de la content area con anchos fijos arbitrarios.
- No uses espaciado < 4px; el mínimo es `xs`.

### Components

**Do:**
- Usa estados de hover/active en todos los elementos interactivos.
- Aplica `translateY(-2px)` en botones hover para feedback táctil.
- Aplica `translateY(-4px)` en cards interactivos hover.
- Usa `brightness(1.1)` combinado con transform en botones primarios.
- Aplica glow solo a elementos con `primary-electric` y solo en estados activos/hover.
- Mantén altura consistente en inputs y botones (40px para inputs, 44px para botones).
- Usa glassmorphism solo en overlays (modales, dropdowns, popovers).

**Don't:**
- No uses más de un botón primario por grupo de acciones.
- No omitas el estado de focus en inputs (border + box-shadow).
- No mezcles rounded corners de diferentes escalas en el mismo componente.
- No apliques glassmorphism a la estructura base (sidebar, header, layout principal).
- No uses transforms mayores a `-8px` en hover (excepto pricing cards destacados).

### Accessibility

**Do:**
- Asegura contraste suficiente en todos los estados (usa herramientas como WebAIM Contrast Checker).
- Incluye labels visibles en todos los inputs.
- Proporciona feedback visual claro para estados de loading, error, success.

**Don't:**
- No dependas solo del color para comunicar estados (usa iconos, texto, patrones).
- No uses placeholder text como única label de un input.
- No hagas botones o áreas clickeables menores a 44x44px (touch target).

### Motion & Transitions

**Do:**
- Usa transiciones de `0.2s` para cambios de estado sutiles (hover, color changes).
- Usa `0.25s` para transiciones más visibles (theme toggle, background changes, transforms).
- Aplica `ease-in-out` o `ease` por defecto.
- Combina `transform` + `filter` para efectos de hover ricos (ej: `translateY(-2px)` + `brightness(1.1)`).
- Usa `transform: translateY(-2px)` para botones en hover.
- Usa `transform: translateY(-4px)` para cards en hover.
- Usa `transform: translateY(-8px)` solo para elementos destacados (pricing cards featured).
- Usa `transform: scale(1.05)` para el chat launcher en hover.

**Don't:**
- No uses transiciones > 0.5s; se sienten lentas.
- No animes propiedades costosas como `width`, `height` directamente; prefiere `transform: scaleX()` y `opacity`.
- No agregues animaciones decorativas que no sirvan un propósito funcional.
- No combines múltiples transforms complejos (scale + rotate + translate simultáneos).
- No uses `translateY()` valores mayores a `-10px` para hover states.

---

**Última actualización:** Julio 2026
**Versión del spec:** alpha
**Mantenido por:** Equipo de Producto Technoloqie
**Contacto:** info@technoloqie.cloud
