This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Assignment Submission

- Deployed Vercel application: TODO: add your Vercel URL
- GitHub repository: TODO: add your GitHub repository URL
- Custom component: `SkillCard.tsx` displays a styled list of technical skills and concepts being practiced in this portfolio.

### Questions

**What is the purpose of `app/layout.tsx` in the Next.js App Router?**

`app/layout.tsx` defines the shared page structure for the app, such as the HTML shell, metadata, fonts, header, footer, and global styles. It wraps route pages so common UI and configuration do not need to be repeated.

**Why are the components in this assignment Server Components rather than Client Components?**

They are Server Components because they render static content and props without browser-only interactivity, state, or event handlers. This keeps the page simpler and lets Next.js render the UI on the server by default.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

On Windows PowerShell, use `pnpm.cmd dev` if script execution policy blocks `pnpm`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
