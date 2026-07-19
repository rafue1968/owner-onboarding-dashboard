# Owner Onboarding Dashboard

A polished frontend dashboard for Madestays that helps property owners track the onboarding progress of their short-term rental properties. The experience combines a portfolio overview, status-based filtering, and a detailed checklist view for each property.

## Highlights

- Portfolio overview of onboarding progress across properties
- Property cards with key details such as status, progress, and target go-live date
- A filter bar for narrowing properties by onboarding status
- A detailed property view with checklist items, owner actions, and notes
- Loading and empty states for a smoother user experience
- Graceful fallback handling for missing or broken property images

## Tech Stack

- Next.js
- React
- TypeScript
- CSS Modules
- Next.js Image component

## Getting Started

### Prerequisites

Make sure you have:

- Node.js 18 or later
- npm 9 or later

### Installation

Navigate into the project and install dependencies:

```bash
cd owner-onboarding-dashboard
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Project Structure

```text
src
├── app
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.module.css
│   └── page.tsx
├── components
│   ├── EmptyState.tsx
│   ├── FilterBar.tsx
│   ├── Header.tsx
│   ├── LoadingSkeleton.tsx
│   ├── PortfolioStatusOverview.tsx
│   ├── PortfolioSummary.tsx
│   ├── ProgressBar.tsx
│   ├── PropertyCard.tsx
│   ├── PropertyGrid.tsx
│   └── PropertyModal.tsx
├── data
│   └── onboarding-data.json
├── types
│   └── onboarding.ts
└── utils
    ├── calculatePortfolioSummary.ts
    ├── calculateProgress.ts
    ├── filterProperties.ts
    └── getPropertyStatus.ts
```

## Design Notes

### Property Status Calculation

The dataset provides onboarding-step statuses rather than a single overall property status. For display purposes, each property is assigned a status using the following priority:

1. Needs attention
2. In progress
3. Live
4. Not started

This approach helps owners quickly focus on properties that need action.

### Filtering

Filtering is based on the calculated overall status of each property, making it easier to focus on the most relevant portfolio items.

### Handling Imperfect Data

The application is designed to handle imperfect input gracefully, including missing property images.

## Assumptions

The implementation is based on the following assumptions:

- Missing images should display a fallback placeholder.
- The supplied JSON represents the complete dataset and does not require backend integration.
- Readability and clear visual hierarchy are prioritized over visual complexity.
- A filter bar and a welcoming header are included to improve navigation and usability.

## Future Enhancements

With more time, the project could be improved by:

- Adding animations and transitions between states
- Improving mobile and tablet responsiveness
- Connecting the dashboard to a real API
- Adding authentication and owner-specific views
- Introducing richer visual analytics

## AI and Development Notes

AI tools were used during development to support requirement clarification, debugging, and React/TypeScript guidance. Final implementation decisions and code were reviewed manually.

## AI Session Transcripts

AI conversation transcripts are included in the following folder:

```text
ai-sessions
```

## Notes

This project was completed as part of the Madestays Junior Software Engineer take-home assessment.

