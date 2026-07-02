# Portfolio Improvement Checklist

## Phase 2  Content people explicitly asked for

- [ ] Build a "Currently working on" section
      - [ ] Pick which active projects to feature
      - [ ] Add a status line per project (e.g. "backend done, UI in progress")
      - [ ] Add a simple progress bar (manual percentage is fine)
      - [ ] Add it to Portfolio.jsx in the section order
- [ ] Rewrite devlogs with actual substance going forward:
      - [ ] What you built
      - [ ] What broke / was hard
      - [ ] How you fixed it
      - [ ] Not just "X minutes logged, shipped Y"
- [ ] Expand README.md
      - [ ] Add a "Challenges I faced" section
      - [ ] Explain specific problems + how you solved them (not just feature list)

## Phase 3  "Looks AI-generated" / UX complaints

- [ ] Audit gradient/glow/blob usage across every section  pick 1-2 signature
      visual elements to keep (word wheel, typewriter), cut the rest of the
      copy-pasted gradient treatment
      - [ ] HeroSection.jsx blobs (lines 42-53)
      - [ ] Check AboutSection, TechStackSection, ProjectsSection, etc. for the
            same repeated gradient pattern
- [ ] Fix text contrast/readability
      - [ ] Body text currently uses hsl(175 20% 58-65%) muted teal on dark bg
            in multiple sections  bump lightness or switch to a more solid color
- [ ] Reduce animation delay chains so page feels faster on load
      - [ ] HeroSection.jsx `mounted` state staggers elements in 150ms
            increments (lines 69, 78, 88, 97, 111, 148)  trim these
      - [ ] Check RevealSection.jsx delay prop usage across sections for
            excessive stagger
- [ ] Reconsider "everything on one page"  hold off until Phase 1-3 land,
      then see if this is still a common complaint before committing to a
      bigger restructure