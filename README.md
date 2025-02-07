# Authentication Issues with Client-Side Routing and Server-Side Props in Next.js 15

This repository demonstrates a potential issue when combining client-side navigation (Next.js Link component) with server-side props and authentication (NextAuth.js) in Next.js 15.  The problem centers around inconsistencies in how authentication status is handled across different navigation methods.

## Issue Description

The application has two pages: Home and About.  The About page requires authentication.  While server-side rendering (getServerSideProps) works correctly for initial load, client-side navigation using the Link component sometimes fails to update the authentication status correctly on the About page.

## Setup

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Reproduction Steps

1. Access the Home page.
2. Click the link to navigate to the About page. Observe the authentication handling.
3. Refresh the About page. Observe any differences in behavior compared to step 2.

## Potential Solutions

The solution might involve using a different authentication strategy, such as redirecting to the sign-in page if the session is not present. Alternatively, re-fetching the session data on client-side navigation might resolve the issue.