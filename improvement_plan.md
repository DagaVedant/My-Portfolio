# Portfolio Improvement Checklist

Based on public feedback (comments) + self-audit, 2026-07-01.

## Phase 1  Bugs (fix first, they break trust)

- [ ] Fix "Check out my Resume!" button in HeroSection.jsx (line 136)  it links
      to /resume.pdf but no file exists in public/. Either:
      - [ ] Add real resume.pdf to public/, OR
      - [ ] Remove the button until a resume exists
- [ ] Replace all picsum.photos placeholder images in src/data/portfolio-data.js
      with real screenshots/GIFs of each project:
      - [ ] PulseFlow-AI
      - [ ] AI-Portfolio-Analyzer
      - [ ] GardenBuddy
      - [ ] FRC-Chatbot-Team-10600
      - [ ] VoiceGPT
      - [ ] EMNIST-Character-Classifier
      - [ ] California-House-Price-Predictor
      - [ ] Spam-Message-AI-Classifier
      - [ ] Leccion-7-de-Espanol
      - [ ] Python-Examples
      - [ ] Almanac-Slack-Bot
- [ ] Manually click every link/button on a fresh page load and note anything
      dead or broken (reported by reviewer, not yet reproduced):
      - [ ] Navbar links (all 9)
      - [ ] Social/contact links (email, phone, devpost, github)
      - [ ] Project GitHub links
      - [ ] Any hover-only elements that look clickable but aren't

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

## Phase 4  Process (ongoing, no code change)

- [ ] Keep commits scoped to one logical change each (recent commits are
      already trending this way  keep it up)
- [ ] Avoid giant multi-thousand-line commits going forward

## Notes / things NOT to touch (positively received)

- Color scheme overall
- Rotating word wheel
- Typewriter role-cycle animation
- Projects section content/structure (just needs real images)
