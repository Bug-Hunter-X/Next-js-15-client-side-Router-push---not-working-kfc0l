# Next.js 15 Client-Side Navigation Issue

This repository demonstrates a problem with client-side navigation using `next/router` in Next.js 15.  The `router.push()` method fails to redirect when invoked within a component's event handler.

## Problem Description:

A button on the '/about' page is intended to redirect to the '/' (home) page using `router.push()`.  However, the redirection does not occur.  There are no errors in the browser's console.

## Steps to Reproduce:

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to '/about' in your browser.
5. Click the button. Notice that the page does not redirect.

## Potential Causes (and why they aren't the issue here):

* **Missing `useRouter`:** The `useRouter` hook is correctly imported and used.
* **Incorrect path:** The path ('/') is valid and points to the home page.
* **Client-side vs. Server-side:**  This is specifically a client-side issue, as demonstrated by the minimal code.

## Solution:

The solution involves ensuring the router's state is updated appropriately.  The original code has been updated with a working solution in the branch named 'solution'.