# Updating Impact Statistics

This guide explains how to update the impact numbers displayed on the website.

## Location

All impact statistics are stored in a single file:
```
lib/data.ts
```

## How to Update

### Step 1: Open the Data File

Open `lib/data.ts` in your code editor or GitHub.

### Step 2: Find the Impact Stats Section

Look for this section near the top of the file:

```typescript
export const impactStats = {
  childrenReached: 5000,
  schoolsSupported: 45,
  booksPrinted: 15000,
  volunteersJoined: 120,
}
```

### Step 3: Update the Numbers

Change the numbers to reflect your current impact:

```typescript
export const impactStats = {
  childrenReached: 7500,    // Updated from 5000
  schoolsSupported: 52,     // Updated from 45
  booksPrinted: 22000,      // Updated from 15000
  volunteersJoined: 150,    // Updated from 120
}
```

### Step 4: Save and Deploy

1. Save the file
2. Commit to GitHub
3. Changes will automatically deploy

## Where Statistics Appear

These numbers are displayed on:
- Home page (hero section and impact counter)
- About page
- Our Work page

All pages pull from this single source, so you only need to update once.

## Best Practices

- Update statistics quarterly or after major events
- Keep numbers accurate and verifiable
- Round large numbers for readability (5,247 → 5,000+)
