<INSTRUCTIONS>
- **Repository-level guardrails**
  * Any new images or background photos introduced in the UI must be accompanied by descriptive `alt` text (or a `role="img"` with `aria-label`), ideally describing what someone who cannot see the image would need to know.
  * When reviewing a change that adds or updates imagery, check whether the associated `alt`/`aria-label` text exists; if it is missing or ambiguous, flag it in the review and mention that the user must add descriptive text before shipping.
  * If an image lacks any text alternative, call it out explicitly in your summary to the user (e.g., “The new hero photo at `pages/Home.tsx` still needs an alt/aria-label.”).
  * When alt text is present but the user asks about specific photos (hero hands, specialty tiles, etc.), explain how the existing `alt`/`aria-label` matches the picture content.
- **Maintenance**
  * Update this file whenever you add new compliance checks that should be enforced across the repo.
</INSTRUCTIONS>
