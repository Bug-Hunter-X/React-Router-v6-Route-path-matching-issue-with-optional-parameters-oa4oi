# React Router v6 Route Path Matching Issue

This repository demonstrates a bug in React Router v6 related to optional parameters in route paths.  The issue is that routes with optional parameters defined using the `?` character aren't behaving as expected, causing incorrect path matching.

## Bug Description

The route `/profile/:id?` should match both `/profile` (without an ID) and `/profile/123` (with an ID). However, in the provided example, it only matches the latter.  This results in the route for `/profile` failing to render.

## Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe that navigating to `/profile` produces an error, while navigating to `/profile/123` works correctly.

## Solution

The solution involves using a separate route for the case where the parameter is omitted.  See the corrected `AppSolution.js` for the updated code.