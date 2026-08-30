# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

## Communication
- Prefers terse, lowercase, casual messages (e.g. "rely on full and auto", "use the original res for image") rather than full sentences. Confidence: 0.7

## Code Style
- For Next.js `next/image`, sets actual intrinsic `width`/`height` matching the original image resolution rather than omitting them or using placeholder values — required for `next/image` and preserves aspect ratio / avoids CLS. Confidence: 0.8

## Design / Aesthetic
- Uses **Linear (linear.app)** as the primary visual benchmark for the entire website, not just the hero — explicitly asks for the **full home page** to be redesigned to mirror Linear's look. Aesthetics to match: tight centered layouts, single product screenshot per section, subtle dark backgrounds with soft radial spotlights, minimal ornamentation (no heavy banded gradients / brushed-metal stripes / decorative CSS effects), smaller denser headline typography, clean section dividers. When given a visual reference, wants the design replicated as exactly as context permits. Confidence: 0.85