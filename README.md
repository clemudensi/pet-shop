This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started (Pet Shop App)

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

test commands
Unit test: `yarn jest`
e2e: `yarn cypress`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Due to time constraints the app would require the following, improvements

### Improvements
* Implement ErrorBoundary for application
* making Modal component global which can be reused anywhere within the app
* better structuring of styles for component

### How the app works
* On starting the application it fetches a list of reservations for the pet-shop
* New reservations can be added to the list
* The list has 3 major filters (all, serviced, unserviced)
* A search input also exist, which allows searching of reservation against existing and added reservations.
* Each reservation can be deleted, marked as serviced/unserviced
* By default the reservations are sorted by arrival dates but clicking each header column
sorts the list by ascending or descending order of the column.

### Architectural decision
* emotion/styled with tailwind is used for UI design, twin-macro is used to combined both libraries efficiently
* react-query is used for server-state management due to simplicity and scalability.
* Alternatives include creating redux-toolkit, zustand, etc.
