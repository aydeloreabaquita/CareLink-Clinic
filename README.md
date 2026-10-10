# CareLink Clinic — Animated React Native frontend

An Expo + React Native + TypeScript recreation inspired by the supplied CareLink Clinic UI references. It runs on **iOS, Android, and the web**.

## Start

Requires Node.js 20.19+ and npm.

```bash
npm install
npm run web       # browser: desktop-responsive clinic dashboard
npm run android   # Android emulator / Expo Go
npm run ios       # iOS simulator (macOS required)
npm run typecheck
```

Or run `npm start` and scan the QR code using Expo Go. The first installation needs network access to download npm dependencies.

## What's included

- **Dashboard:** animated cards, staggered reveals, count-up statistics, appointment overview, activity feed, day's schedule.
- **Calendar:** animated weekly grid, next/previous week controls, doctor filtering, appointment events.
- **History:** searchable records, doctor filters, animated row reveals.
- **Appointment Setting:** patient input, doctor and visit type selection, selectable dates and slots, doctor/date conflict detection, booking feedback.
- **Cross-tab updates:** newly booked appointments appear on the calendar, dashboard, and history immediately.
- **Every tab opening animates:** cards and content slide up and fade in; buttons spring under touch; dropdowns animate their expansion; stats count up.
- **Responsive layout:** desktop-style dashboard in a web browser, with a compact adaptive top navigation for phones.

## Project layout

```
App.tsx         Main React Native UI, navigation and animation components
src/data.ts     Types and starter demo data
src/theme.ts    Colors and visual tokens
app.json        Expo configuration
```

## Implementation notes

This is a **frontend-only working prototype**. All data is stored in React state and resets upon a full reload; there is no real EHR, database, login or patient data service. Calendar bookings and slot conflict checks work within this demo session. In production, add authenticated server APIs, persistent storage, authorization rules, and medical-data privacy controls.

The reference date for the sample schedules is **October 10, 2026**. You can change `baseDate` in `App.tsx` to another date or derive it from `new Date()`.

Animations use React Native's built-in `Animated` API and `LayoutAnimation`, so no additional animation runtime is required.
