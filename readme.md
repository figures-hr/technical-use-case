This is the base repository to use for the Figures technical use case.

# Requirements

- Docker
- Node (`>=15.0.0`)

# Getting Started

```bash
# Start the database
docker-compose up -d

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Migrate and seed database
npx prisma migrate reset

# Start development server
npm run dev

# Open app
open http://localhost:3000
```

# Instructions

## MVP

Build a miniature version of [Figures's Market Data Browser](https://figures.hr/try). Starting from the predefined database schema, build a page that allows the user to select one job and visualise market data statistics for employees with this given job. Interesting statistics include (but not limited to): median salary, P25 salary, P75 salary, number of incumbents.

## Advanced

Build at least one (more if you have the time) of these aspects:

- 🎨 Make it pretty. Data visualisation is a big part of Figures.
- 🚀 Make it fast. Imagine we got billions of employees in the database.
- ⚡️ Make it smooth. Zero loading time to display the jobs input.
- 🦄 Make it yours. Feel free to show off anything you want :)

## Required technologies

Basically what's included in the project: TypeScript, Next.js, Prisma, TailwindCSS, Postgres.

## Misc

You're expected to spend about 3 hours on the test. After this, you can share us your repo (ideally, clone it on GitHub, then share it privately to [@bstnfrmry](https://github.com/bstnfrmry)) and we'll setup a debrief call to discuss what you produced.
