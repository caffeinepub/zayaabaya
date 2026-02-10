# Specification

## Summary
**Goal:** Add simple, documented export/packaging options so the full project source and a cPanel-ready static build can be downloaded as ZIP files, with working asset paths in the static output.

**Planned changes:**
- Add an in-repo EXPORT.md with clear English step-by-step instructions to: install dependencies, build for production, locate build output, and create ZIP archives for (1) full source and (2) static build; including what to upload to cPanel (the build output folder) and that React source must be built first.
- Add npm scripts to: generate a production static build, ZIP the build output, ZIP the full source (excluding node_modules and build artifacts), and optionally run a single command that produces both ZIPs into a documented output location.
- Ensure the production static build uses correct asset paths so images/CSS/JS load when hosted from a typical cPanel `public_html` root, and that in-page anchor navigation continues to work.

**User-visible outcome:** The user can follow EXPORT.md and/or run npm scripts to produce two ready-to-download ZIP files (full source and cPanel-ready static site) and upload the static build ZIP contents to cPanel without broken links.
