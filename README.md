# Yehia's Career Path

**Student:** Ali Shaito

## Project Description

Yehia's Career Path is a small website built with Next.js 16. It helps Yehia, a Computer Science graduate, organize his two-month job-search goal. He can review his career plan, explore job opportunities, and track sample applications through a dashboard.

The project demonstrates file-based routing, dynamic routes, shared layouts, reusable sample data, and navigation with Next.js Link.

## How to Run Locally

Requirements: Node.js and npm.

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser.

4. Check the production build:

   ```bash
   npm run build
   ```

## Assignment Questions

### 1. Why did you use `await` when reading `params`?



In Next.js 16 params is a promise used to extracte data from url and since working on server side by default we use asynchronous for unblocking and the async followed by await.

### 2. Why is the route ID a string?

All the url is string between quotes "" so since the id extracted from the route and the route from the url its string so need to parse to int if need to compare to database if it was integer but if using uuid no need.

### 3. What belongs in the dashboard layout, and what belongs in each dashboard page?

The dashboard layout contains the navigation shared by the dashboard pages and nested dashboard  overview page displays the number of applications, while the applications page displays the individual application records.

