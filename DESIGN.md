# Design System Specification: Tactile Darkness

## 1. Overview & Creative North Star
**Creative North Star: "The Kinetic Monolith"**

This design system rejects the "flat" utility of standard mobile apps in favor of a high-end, editorial experience that feels like a precision physical instrument. We are moving away from traditional grid-bound layouts toward a "monolithic" approach: where the counter is the gravitational center and all other elements orbit it with intentional asymmetry and tonal depth.

To break the "template" look, we utilize **Tonal Layering** and **Exaggerated Typography Scales**. The UI should feel like a dark room where light only hits the most important tactile surfaces. By eliminating structural lines (borders), we allow the user's focus to flow naturally between the "Sayac" (counter) and the interaction points.

## 2. Colors & Surface Logic
The palette is rooted in a deep, obsidian base that provides a canvas for high-contrast chromatic accents.

### The Palette (Material Logic)
- **Base Surface:** `surface` (#131313) — Use for the primary application background.
- **The Core Counter:** `on_surface` (#E5E2E1) — Pure off-white for maximum legibility.
- **Positive Action (Artır):** `primary_container` (#10B981) — A vibrant emerald for growth.
- **Negative Action (Azalt):** `secondary_container` (#A40217) — A deep rose for reduction.
- **Utility Action (Sıfırla):** `tertiary_container` (#9CA3B2) — A muted slate for resets.

### The "No-Line" Rule
**Borders are prohibited.** Do not use 1px solid lines to section off parts of the app. Instead:
- **Spatial Definition:** Boundaries must be created via background shifts. Use `surface_container_low` for secondary sections and `surface_container_high` for interactive elements.
- **The Glass & Gradient Rule:** For the "Artır" button, apply a subtle linear gradient from `primary_container` to `primary` (#4EDE93) at a 135-degree angle. This adds "soul" and a sense of depth that flat hex codes cannot achieve.
- **Glassmorphism:** Floating elements (like a history drawer or settings overlay) must use `surface_container` at 80% opacity with a `24px` backdrop-blur.

## 3. Typography
We use **Inter** as our typographic foundation. The hierarchy is designed to be "Editorial"—high contrast in both size and weight.

- **Counter Number (Display-LG):** `3.5rem` / **Extra Bold**. This is the hero. Use a tight letter-spacing (-0.04em) to make the numbers feel like a single solid unit.
- **Action Labels (Title-LG):** `1.375rem` / **Medium**. Used for "Artır", "Azalt", and "Sıfırla".
- **Helper Text (Body-SM):** `0.75rem` / **Regular**. Used for timestamps or secondary session info.

The juxtaposition of the massive, bold counter against the refined, airy action labels creates a signature "high-fashion" layout.

## 4. Elevation & Depth
Depth in this design system is achieved through **Tonal Stacking**, not structural shadows.

- **The Layering Principle:** 
    1. Base: `surface` (#131313)
    2. Interactive Card: `surface_container_lowest` (#0E0E0E) - Creates a "sunken" effect.
    3. Primary Button: `surface_container_highest` (#353534) - Creates a "raised" effect.
- **Ambient Shadows:** When a button or modal must float, use an extra-diffused shadow:
    - `0px 20px 40px rgba(0, 0, 0, 0.4)`
    - The shadow color is never black; it is a dark tint of the background to simulate natural light.
- **The "Ghost Border" Fallback:** If a container requires further definition on OLED screens, use the `outline_variant` token at **10% opacity**. It should be felt, not seen.

## 5. Components

### The "Artır" (Increase) Button
- **Style:** `xl` roundedness (3rem). 
- **Color:** `primary_container` background with `on_primary` text.
- **Sizing:** This should be the largest interactive element on the screen (Full width or a large floating circle).
- **Interaction:** On press, scale down to 0.96 for a tactile "click" feel.

### The "Azalt" (Decrease) Button
- **Style:** `lg` roundedness (2rem). 
- **Color:** `secondary_container` background.
- **Placement:** Positioned asymmetrically or adjacent to the primary button to create a non-traditional layout.

### The "Sıfırla" (Reset) Button
- **Style:** Tertiary ghost button. No background.
- **Typography:** `label-md` in `tertiary`. 
- **Visual:** Use a subtle `tertiary` icon next to the Turkish text "Sıfırla".

### Cards & Lists (History/Logs)
- **Restriction:** No dividers allowed.
- **Separation:** Use `8px` of vertical white space and alternate between `surface` and `surface_container_low` for list items.
- **Nesting:** If a list item is "active", wrap it in a `surface_container_high` container with `md` roundedness.

### Haptic Feedback Suggestion (UX)
For a premium feel, designers should specify **varying haptic weights**:
- **Artır:** Medium impact haptic.
- **Azalt:** Light impact haptic.
- **Sıfırla:** Long, subtle vibration.

## 6. Do's and Don'ts

### Do:
- **Do** embrace negative space. The counter should "breathe" in the center of the screen.
- **Do** use Turkish labels ("Artır", "Azalt") in uppercase with slight letter-spacing (+0.05em) for a more architectural look.
- **Do** use the `full` roundedness for small action chips to make them feel like "pills."

### Don't:
- **Don't** use pure white (#FFFFFF). Stick to the `on_surface` (#E5E2E1) to avoid eye strain in dark mode.
- **Don't** use standard "Material Blue" or "iOS Blue." Stick strictly to the Emerald and Rose accents.
- **Don't** align everything to the center. Try placing the counter in the top-left and the buttons in the bottom-right to create a sophisticated, asymmetric tension.