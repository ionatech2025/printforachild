# Deploying Website Changes

This guide explains how to publish changes to the live website.

## Automatic Deployment (Recommended)

The website is connected to GitHub. Any changes pushed to the main branch are automatically deployed.

### Steps:

1. Make your changes (edit files)
2. Commit changes in GitHub
3. Push to the `main` branch
4. Vercel automatically builds and deploys
5. Changes are live within 1-2 minutes

## Manual Deployment

If automatic deployment isn't working:

1. Go to https://vercel.com
2. Log in to your account
3. Select the project
4. Click "Redeploy" on the latest deployment

## Checking Deployment Status

1. Go to Vercel dashboard
2. Click on your project
3. View "Deployments" tab
4. Green checkmark = successful deployment
5. Red X = deployment failed (check logs)

## Rollback to Previous Version

If something goes wrong:

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find the last working deployment
4. Click the three dots menu
5. Select "Promote to Production"

## Preview Deployments

Before going live, you can preview changes:

1. Create a new branch in GitHub
2. Make your changes
3. Create a Pull Request
4. Vercel creates a preview URL
5. Test everything
6. Merge to main when ready

## Domain Management

The website is accessible at:
- **Primary**: https://printforachild.org
- **Preview**: https://printforachild.vercel.app

Domain settings are managed in Vercel's project settings.

## Build Commands

The website uses these commands:
- `bun install` - Install dependencies
- `bun run build` - Build the website
- `bun run start` - Start production server

## Getting Help

- Vercel Documentation: https://vercel.com/docs
- Contact your development team for assistance
