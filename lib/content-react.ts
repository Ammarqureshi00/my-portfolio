import type { ServicePage, Post } from "./content";

export const REACT_SERVICES: ServicePage[] = [
 {
  "slug": "nextjs-development",
  "name": "Next.js Development",
  "short": "Fast, SEO-friendly Next.js websites and web apps: App Router, static generation, metadata and structured data.",
  "metaTitle": "Next.js Developer for Hire | Ammar Qureshi",
  "metaDescription": "Hire a freelance Next.js developer for fast, SEO-friendly websites and web apps: App Router, static generation, metadata, structured data and Core Web Vitals.",
  "h1": "Next.js Developer for Fast, SEO-Friendly Websites",
  "intro": "I’m Ammar Qureshi, a full stack developer who builds with Next.js as well as WordPress. As a Next.js developer I focus on pages that load quickly, render real HTML for search engines and stay easy to maintain, whether you need a marketing site, a blog or a web app.",
  "forWho": [
   "Startups that need a fast marketing site or MVP front end",
   "Businesses whose current site is slow or struggling to rank",
   "Agencies that need a dependable Next.js developer for client work",
   "Teams moving from WordPress or a template to a custom front end"
  ],
  "included": [
   [
    "App Router architecture",
    "Layouts, routes and a clear split between server and client components."
   ],
   [
    "Static and server rendering",
    "The right strategy per page: static generation, revalidation or on-demand rendering."
   ],
   [
    "SEO foundation",
    "Metadata API, canonical URLs, sitemap, robots, JSON-LD and generated social images."
   ],
   [
    "Performance",
    "next/image, next/font, small client bundles and Core Web Vitals checks."
   ],
   [
    "CMS and API integration",
    "WordPress, a headless CMS or your own REST or GraphQL API."
   ],
   [
    "Forms and integrations",
    "Contact forms, email, analytics and third-party services wired up properly."
   ],
   [
    "Accessible, responsive UI",
    "Keyboard-friendly, mobile-first interfaces."
   ],
   [
    "Deployment",
    "Vercel or a Node host, environment variables and preview deployments."
   ]
  ],
  "process": [
   [
    "Scope",
    "Goals, pages, content and integrations."
   ],
   [
    "Architecture",
    "Routes, rendering strategy and data sources."
   ],
   [
    "Build",
    "Components, pages and SEO layer."
   ],
   [
    "Test",
    "Build checks, performance and device testing."
   ],
   [
    "Launch",
    "Deploy, monitor and hand over."
   ]
  ],
  "faqs": [
   {
    "q": "Why Next.js instead of WordPress?",
    "a": "WordPress is often the better choice for content-heavy sites run by non-technical editors. Next.js shines when you need custom interfaces, tight performance control or app-like features. I work with both and will recommend what fits."
   },
   {
    "q": "Is Next.js good for SEO?",
    "a": "It renders HTML on the server or at build time, so crawlers receive real content instead of an empty shell. Rankings still depend on content quality, structure and links, and no one can guarantee them."
   },
   {
    "q": "Can you work from my existing design?",
    "a": "Yes. I can implement a Figma or similar design, or help shape the layout if you don’t have one yet."
   },
   {
    "q": "Can you add Next.js in front of my WordPress site?",
    "a": "Yes, that’s called headless WordPress. It isn’t right for every site, so I explain the trade-offs first."
   },
   {
    "q": "Where will the site be hosted?",
    "a": "Commonly Vercel, but any Node-capable host works. I’ll set up environment variables and deployment so it’s repeatable."
   },
   {
    "q": "Do you provide support after launch?",
    "a": "Yes, on request: fixes, updates and improvements after the site goes live."
   }
  ],
  "posts": [
   "nextjs-build-failed-on-vercel",
   "nextjs-hydration-failed-error-fix"
  ],
  "proof": [
   "See it in practice: this portfolio is a Next.js project",
   "/work/nextjs-portfolio-seo"
  ],
  "terminal": [
   "$ npm run build",
   "✓ Compiled successfully",
   "✓ Generating static pages (21/21)",
   "✓ metadata, sitemap and JSON-LD generated",
   "✓ preview deployment ready"
  ]
 },
 {
  "slug": "react-debugging-fixing",
  "name": "React & Next.js Debugging",
  "short": "Hydration errors, build failures, re-render loops and deployment bugs found and fixed.",
  "metaTitle": "React & Next.js Debugging Service | Ammar Qureshi",
  "metaDescription": "Hire a developer to debug React and Next.js apps: hydration errors, build failures, slow renders, state bugs, API issues and deployment problems.",
  "h1": "React & Next.js Debugging and Bug Fixing",
  "intro": "If your React or Next.js app throws an error you can’t get past, or works locally but fails once deployed, I’ll find the cause, fix it with the smallest safe change and explain what went wrong so it doesn’t come back.",
  "forWho": [
   "Founders with an app stuck on a blocking bug",
   "Teams with a deadline and an error nobody can reproduce",
   "Agencies that need a second pair of eyes on a client project",
   "Freelancers who want a reviewed, explained fix"
  ],
  "symptoms": [
   "“Hydration failed” errors in the console",
   "window is not defined or document is not defined",
   "Module not found or a failing build",
   "Too many re-renders and infinite loops",
   "Works locally, fails on Vercel",
   "Laggy UI and slow renders",
   "Stale state and useEffect bugs",
   "API, CORS and environment variable problems"
  ],
  "included": [
   [
    "Reproduce",
    "A minimal reproduction from your repo or a read-only branch."
   ],
   [
    "Diagnose",
    "Build output, logs, React DevTools and profiling instead of guesswork."
   ],
   [
    "Fix",
    "The smallest safe change, tested with a production build."
   ],
   [
    "Explain",
    "A plain-language summary of the cause and the fix."
   ],
   [
    "Prevent",
    "Lint rules, types or CI checks so the same bug can’t return."
   ],
   [
    "Optional review",
    "A short code review of the surrounding area."
   ]
  ],
  "process": [
   [
    "Share",
    "Repo access or a minimal example, plus the exact error."
   ],
   [
    "Reproduce",
    "Confirm the problem locally and in a production build."
   ],
   [
    "Isolate",
    "Narrow it down to a component, dependency or setting."
   ],
   [
    "Fix",
    "Apply and test the change."
   ],
   [
    "Report",
    "Deliver the fix with a clear explanation."
   ]
  ],
  "faqs": [
   {
    "q": "Do you need access to my code?",
    "a": "Usually read access to a branch, or a minimal reproduction, plus the exact error message and what you’ve already tried."
   },
   {
    "q": "How fast can you fix it?",
    "a": "Common issues like hydration mismatches or build errors are often quick once reproduced. Deeper performance or architecture problems take longer, and I’ll say so up front."
   },
   {
    "q": "Will you refactor my whole app?",
    "a": "No. I make the smallest change that solves the problem and suggest larger improvements separately."
   },
   {
    "q": "Can you improve slow renders?",
    "a": "Yes. I measure first with the React profiler and build output, then fix the biggest causes."
   },
   {
    "q": "What if you can’t reproduce the bug?",
    "a": "I’ll tell you honestly, share what I tried and suggest logging or monitoring to catch it."
   },
   {
    "q": "Will you sign an NDA?",
    "a": "Reasonable NDAs are fine. Mention it when you contact me."
   }
  ],
  "posts": [
   "nextjs-hydration-failed-error-fix",
   "nextjs-window-is-not-defined-fix",
   "react-too-many-re-renders-error-fix",
   "nextjs-build-failed-on-vercel"
  ],
  "terminal": [
   "$ npm run build",
   "✗ ReferenceError: window is not defined",
   "✓ browser-only code moved into useEffect",
   "$ npm run build",
   "✓ Compiled successfully",
   "✓ fixed, explained, prevented"
  ]
 },
 {
  "slug": "react-to-nextjs-migration",
  "name": "React to Next.js Migration",
  "short": "Move a client-rendered React, Vite or CRA site to Next.js so search engines see your content.",
  "metaTitle": "Convert React App to Next.js for SEO | Ammar Qureshi",
  "metaDescription": "Migrate a client-rendered React, Vite or CRA site to Next.js so search engines see your content: URLs, redirects, metadata, sitemap and speed.",
  "h1": "Convert Your React App to Next.js for SEO",
  "intro": "A React single-page app that renders in the browser hands crawlers a nearly empty HTML shell. Search engines can often run JavaScript, but it can delay indexing, and other crawlers and link previews may not run it at all. If you want to convert your React app to Next.js, I move it so every page ships real HTML, without breaking your URLs or design.",
  "forWho": [
   "Marketing sites and blogs built as a Vite or Create React App SPA",
   "Stores and directories whose pages aren’t getting indexed",
   "Teams that want server rendering without a full rewrite",
   "Businesses worried about losing rankings during a re-platform"
  ],
  "included": [
   [
    "Audit",
    "Routes, data fetching, components and current SEO gaps."
   ],
   [
    "URL map",
    "Keep existing URLs wherever possible and add 301 redirects where they change."
   ],
   [
    "Rendering strategy",
    "Static, revalidated or server rendering chosen per page."
   ],
   [
    "Metadata and structured data",
    "Titles, descriptions, canonicals, Open Graph and JSON-LD per route."
   ],
   [
    "Sitemap and robots",
    "Generated and checked, then submitted in Search Console."
   ],
   [
    "Component migration",
    "Sort what stays a client component and what can run on the server."
   ],
   [
    "Performance pass",
    "Images, fonts and bundle size checked against Core Web Vitals."
   ],
   [
    "Safe launch",
    "Staged release and monitoring after go-live."
   ]
  ],
  "process": [
   [
    "Audit",
    "Inventory pages, routes and data."
   ],
   [
    "Plan",
    "URL map, redirects and rendering approach."
   ],
   [
    "Migrate",
    "Move routes and components step by step."
   ],
   [
    "Verify",
    "Compare HTML, metadata and speed against the old site."
   ],
   [
    "Launch",
    "Deploy, submit sitemap and monitor indexing."
   ]
  ],
  "faqs": [
   {
    "q": "Will I lose my rankings?",
    "a": "The goal is to avoid it by keeping URLs and content the same, adding redirects where needed and checking Search Console. Small temporary fluctuations can happen, and no migration can promise unchanged rankings."
   },
   {
    "q": "Can I keep my current design?",
    "a": "Yes. Most components carry over, with changes mainly where code touches browser-only APIs."
   },
   {
    "q": "Do I need to rewrite everything?",
    "a": "Usually not. Most of the UI is reused. The main work is routing, data fetching and the client and server component boundary."
   },
   {
    "q": "Does this work for Vite, CRA and React Router apps?",
    "a": "Yes. I’ve outlined the approach for all three, and the details depend on your routing and data setup."
   },
   {
    "q": "How long does a migration take?",
    "a": "It depends on the number of routes and how much data fetching needs reworking. After a quick audit I can give a realistic estimate."
   },
   {
    "q": "Is Next.js always necessary?",
    "a": "No. If your app lives behind a login, search visibility doesn’t matter and a migration may not be worth it. I’ll tell you if that’s your case."
   }
  ],
  "posts": [
   "nextjs-hydration-failed-error-fix",
   "nextjs-module-not-found-cant-resolve"
  ],
  "proof": [
   "See it in practice: this portfolio is a Next.js project",
   "/work/nextjs-portfolio-seo"
  ],
  "terminal": [
   "$ curl -s old-site.com/page | grep -c \"<h1\"",
   "✗ 0 — the SPA ships an empty shell",
   "$ npm run build  # Next.js",
   "✓ page HTML now includes h1, text and links",
   "✓ 301 map, sitemap and metadata in place"
  ]
 },
 {
  "slug": "headless-wordpress-nextjs",
  "name": "Headless WordPress with Next.js",
  "short": "Keep the WordPress editor and add a fast Next.js front end, with honest advice on when it fits.",
  "metaTitle": "Headless WordPress & Next.js Developer | Ammar Qureshi",
  "metaDescription": "Headless WordPress developer: keep the WordPress editor, get a fast Next.js front end with SEO, previews and structured data. Honest advice on when it fits.",
  "h1": "Headless WordPress with Next.js: Developer for Hire",
  "intro": "Headless WordPress keeps WordPress as the place where your team writes content, and uses Next.js to build the public website. I work with both, so I can tell you honestly whether headless WordPress with Next.js suits your project or whether a normal WordPress theme is the smarter choice.",
  "forWho": [
   "Publishers who want WordPress editing with a faster, custom front end",
   "Businesses with a lot of existing WordPress content and a dated design",
   "Teams that need app-like features the theme system makes awkward",
   "Anyone comparing headless against a classic WordPress build"
  ],
  "included": [
   [
    "Architecture",
    "WordPress as a content source through the REST API or WPGraphQL."
   ],
   [
    "Next.js front end",
    "Routes, templates and components built on the App Router."
   ],
   [
    "SEO parity",
    "Titles, descriptions, redirects, sitemap and schema carried across."
   ],
   [
    "Previews and revalidation",
    "Editors can preview drafts and published changes appear without a full rebuild."
   ],
   [
    "Media and search",
    "Images, forms and search handled on the new front end."
   ],
   [
    "Hosting setup",
    "WordPress and Next.js hosted and connected securely."
   ],
   [
    "URL mapping",
    "Existing URLs preserved or redirected."
   ],
   [
    "Content migration",
    "Existing posts and pages brought across cleanly."
   ]
  ],
  "process": [
   [
    "Decide",
    "Check headless is actually the right fit."
   ],
   [
    "Model",
    "Content types, fields and API approach."
   ],
   [
    "Build",
    "Front end, SEO layer and previews."
   ],
   [
    "Test",
    "Compare content, URLs and speed against the old site."
   ],
   [
    "Launch",
    "Go live and monitor indexing."
   ]
  ],
  "faqs": [
   {
    "q": "What does headless mean?",
    "a": "WordPress stores and manages content, but the website visitors see is a separate Next.js app that reads that content through an API."
   },
   {
    "q": "Will my WordPress plugins still work?",
    "a": "Plugins that manage content in the admin usually still do. Plugins that output things on the front end, such as forms, sliders or SEO tags, need to be rebuilt or replaced in Next.js."
   },
   {
    "q": "Is headless WordPress faster?",
    "a": "It can be, because pages are pre-rendered and the front end is lean, but it isn’t automatic. A well-optimized classic WordPress site can also be fast."
   },
   {
    "q": "Can I keep Yoast or Rank Math?",
    "a": "Their data can be exposed through the REST API or WPGraphQL extensions, and I render it in the Next.js metadata. It needs setup, it doesn’t happen automatically."
   },
   {
    "q": "When is a normal WordPress site the better choice?",
    "a": "When you rely on plugins, such as WooCommerce, on a small budget or on a team that wants the simplest setup. Two systems mean two things to host and maintain."
   },
   {
    "q": "What will it cost to maintain?",
    "a": "You maintain a WordPress install and a Next.js app. I can discuss support after launch once I understand your setup."
   }
  ],
  "posts": [
   "nextjs-build-failed-on-vercel",
   "nextjs-hydration-failed-error-fix"
  ],
  "terminal": [
   "$ GET /wp-json/wp/v2/posts",
   "✓ content arrives as JSON",
   "$ npm run build",
   "✓ posts pre-rendered as static HTML",
   "✓ revalidate when an editor publishes"
  ]
 }
];

export const REACT_POSTS: Post[] = [
 {
  "slug": "nextjs-hydration-failed-error-fix",
  "title": "Next.js “Hydration failed” Error: Causes and Fixes (React 19)",
  "metaTitle": "Next.js “Hydration failed” Error: Causes & Fixes",
  "description": "Fix the Next.js hydration failed error: why server and client HTML differ, with tested before and after examples for dates, window checks and invalid HTML.",
  "keyword": "Next.js hydration failed",
  "category": "Next.js Errors",
  "date": "2026-10-04",
  "updated": "2026-10-04",
  "intro": "Hydration is the step where React attaches to the HTML the server already sent. If what React renders in the browser differs from that HTML, you get a hydration error. The fix is almost always the same idea: make the first client render identical to the server render.",
  "sections": [
   {
    "h": "The error",
    "p": [
     "You’ll see something like this in the browser console. The exact wording changes between React versions:"
    ],
    "codes": [
     {
      "label": "React 19",
      "code": "Hydration failed because the server rendered text didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:"
     }
    ],
    "after": [
     "React 18 reported the same family of problems as “Text content does not match server-rendered HTML” and “Hydration failed because the initial UI does not match what was rendered on the server.” They mean the same thing."
    ]
   },
   {
    "h": "Why it happens",
    "list": [
     "The component renders a value that differs between server and client, such as Date.now(), Math.random() or a locale-formatted time.",
     "The render branches on typeof window or reads localStorage, so the server and the browser output different markup.",
     "The HTML is invalid, for example a div inside a p, so the browser rewrites it before React hydrates.",
     "A browser extension or third-party script changes the DOM before hydration."
    ]
   },
   {
    "h": "Fix 1: move values that change into an effect",
    "p": [
     "Rendering the current time directly always mismatches, because the server and the browser render at different moments."
    ],
    "codes": [
     {
      "label": "Bad",
      "code": "\"use client\";\nexport default function Clock() {\n  return <p>Now: {new Date().toLocaleTimeString()}</p>;\n}"
     },
     {
      "label": "Fixed",
      "code": "\"use client\";\nimport { useEffect, useState } from \"react\";\n\nexport default function Clock() {\n  const [now, setNow] = useState<string | null>(null);\n  useEffect(() => setNow(new Date().toLocaleTimeString()), []);\n  return <p>Now: {now ?? \"…\"}</p>;\n}"
     }
    ],
    "after": [
     "The first render now outputs the same placeholder on both sides, and the real value appears after hydration."
    ]
   },
   {
    "h": "Fix 2: don’t branch on typeof window while rendering",
    "p": [
     "A check like this looks harmless, but the server returns one string and the browser returns another. I reproduced the mismatch with a server render followed by a client hydrate."
    ],
    "codes": [
     {
      "label": "Bad",
      "code": "export default function Where() {\n  return <p>{typeof window === \"undefined\" ? \"server\" : \"client\"}</p>;\n}"
     },
     {
      "label": "Fixed",
      "code": "\"use client\";\nimport { useEffect, useState } from \"react\";\n\nexport default function Where() {\n  const [mounted, setMounted] = useState(false);\n  useEffect(() => setMounted(true), []);\n  return <p>{mounted ? \"client\" : \"server\"}</p>;\n}"
     }
    ]
   },
   {
    "h": "Fix 3: suppressHydrationWarning for a single unavoidable text difference",
    "p": [
     "For a timestamp or similar one-off text node, you can silence the warning on that element. This only hides the warning for that element’s direct content, it does not update it, so the server text stays until something re-renders it."
    ],
    "codes": [
     {
      "label": "Example",
      "code": "<time dateTime={iso} suppressHydrationWarning>\n  {new Date(iso).toLocaleString()}\n</time>"
     }
    ],
    "after": [
     "Use it sparingly. If the value can be set in an effect instead, Fix 1 is cleaner."
    ]
   },
   {
    "h": "Fix 4: invalid HTML nesting",
    "p": [
     "Browsers auto-correct some invalid markup, which changes the DOM before React sees it."
    ],
    "codes": [
     {
      "label": "Bad",
      "code": "<p>\n  Intro text\n  <div>Card</div>\n</p>"
     },
     {
      "label": "Fixed",
      "code": "<div>\n  <p>Intro text</p>\n  <div>Card</div>\n</div>"
     }
    ],
    "after": [
     "Other common offenders are a p inside a p, an a inside an a and a div inside a button."
    ]
   },
   {
    "h": "How to confirm it’s fixed",
    "list": [
     "Run npm run build and npm start, then open the page. Production gives a clearer picture than dev mode.",
     "Check the console with a hard refresh.",
     "Test in a private window with extensions disabled to rule out extension interference.",
     "Compare view-source with the DOM in the Elements panel."
    ]
   },
   {
    "h": "How to prevent it",
    "list": [
     "Keep render output pure: the same props and state should always produce the same markup.",
     "Format dates with an explicit locale and time zone, for example toLocaleDateString(\"en-US\", { timeZone: \"UTC\" }).",
     "Use the useId hook for generated ids instead of random values.",
     "Read browser-only APIs inside effects or event handlers, not during render."
    ]
   }
  ],
  "service": "react-debugging-fixing",
  "related": [
   "nextjs-window-is-not-defined-fix",
   "react-too-many-re-renders-error-fix"
  ]
 },
 {
  "slug": "nextjs-window-is-not-defined-fix",
  "title": "Next.js “window is not defined”: How to Fix It",
  "metaTitle": "Next.js “window is not defined” Error: Fixes",
  "description": "Fix ReferenceError: window is not defined in Next.js: why it happens during server rendering and four fixes, tested with a production build.",
  "keyword": "window is not defined Next.js",
  "category": "Next.js Errors",
  "date": "2026-10-04",
  "updated": "2026-10-04",
  "intro": "Next.js runs your components on the server and at build time, where there is no window, document or localStorage. Touch one of them while rendering and the build stops. I reproduced the error and each fix below with a production build on Next.js 15 and React 19.",
  "sections": [
   {
    "h": "The error",
    "p": [
     "This is what a failing build prints:"
    ],
    "codes": [
     {
      "label": "Build output",
      "code": "ReferenceError: window is not defined\nExport encountered an error on /page: /, exiting the build."
     }
    ]
   },
   {
    "h": "Why it happens",
    "p": [
     "The common surprise is that adding \"use client\" does not stop this. Client components are still pre-rendered to HTML on the server, so code that reads window during render fails there too. My test component with \"use client\" failed the build exactly like a server component would."
    ],
    "codes": [
     {
      "label": "Bad",
      "code": "\"use client\";\nexport default function Page() {\n  const width = window.innerWidth;\n  return <p>Width: {width}</p>;\n}"
     }
    ]
   },
   {
    "h": "Fix 1: read browser APIs inside useEffect",
    "p": [
     "Effects only run in the browser, after hydration."
    ],
    "codes": [
     {
      "label": "Fixed",
      "code": "\"use client\";\nimport { useEffect, useState } from \"react\";\n\nexport default function Page() {\n  const [width, setWidth] = useState<number | null>(null);\n  useEffect(() => {\n    const update = () => setWidth(window.innerWidth);\n    update();\n    window.addEventListener(\"resize\", update);\n    return () => window.removeEventListener(\"resize\", update);\n  }, []);\n  return <p>Width: {width ?? \"…\"}</p>;\n}"
     }
    ],
    "after": [
     "This passed a production build."
    ]
   },
   {
    "h": "Fix 2: load browser-only components with ssr: false",
    "p": [
     "For a chart or editor that can’t run on the server at all, skip server rendering for it. The dynamic call must live in a Client Component."
    ],
    "codes": [
     {
      "label": "components/ChartLoader.tsx",
      "code": "\"use client\";\nimport dynamic from \"next/dynamic\";\n\nconst Chart = dynamic(() => import(\"./Chart\"), { ssr: false });\n\nexport default function ChartLoader() {\n  return <Chart />;\n}"
     }
    ],
    "after": [
     "If you call dynamic with ssr: false inside a Server Component, the build fails with “ssr: false is not allowed with next/dynamic in Server Components”. Move it into a Client Component as above."
    ]
   },
   {
    "h": "Fix 3: use window only in event handlers",
    "p": [
     "Handlers run in the browser, so this is safe without any extra check."
    ],
    "codes": [
     {
      "label": "Fixed",
      "code": "\"use client\";\nexport default function SaveButton() {\n  return (\n    <button onClick={() => localStorage.setItem(\"seen\", \"1\")}>\n      Save\n    </button>\n  );\n}"
     }
    ]
   },
   {
    "h": "Fix 4: libraries that touch window when imported",
    "p": [
     "Some packages read window as soon as they load. Import them inside an effect so they only load in the browser."
    ],
    "codes": [
     {
      "label": "Fixed",
      "code": "useEffect(() => {\n  import(\"some-browser-only-lib\").then((lib) => lib.init());\n}, []);"
     }
    ]
   },
   {
    "h": "A trap: typeof window guards can cause hydration errors",
    "p": [
     "Wrapping the code in typeof window !== \"undefined\" stops the crash, but if the output differs between server and browser you swap one error for another. I confirmed this produces a hydration mismatch. Use an effect with a mounted flag instead, as shown in the hydration guide."
    ]
   },
   {
    "h": "How to confirm it’s fixed and prevent it",
    "list": [
     "Run npm run build. Static pages are rendered during the build, so the error shows up there.",
     "Keep window, document, localStorage and navigator out of the render body.",
     "Prefer effects and event handlers for anything that needs the browser."
    ]
   }
  ],
  "service": "react-debugging-fixing",
  "related": [
   "nextjs-hydration-failed-error-fix",
   "nextjs-build-failed-on-vercel"
  ]
 },
 {
  "slug": "nextjs-module-not-found-cant-resolve",
  "title": "Next.js “Module not found: Can’t resolve”: Causes and Fixes",
  "metaTitle": "Next.js “Module not found: Can't resolve” Fix",
  "description": "Fix Module not found: Can't resolve in Next.js builds: case-sensitive names, wrong paths, missing packages, path aliases and server-only modules.",
  "keyword": "Module not found Can't resolve Next.js",
  "category": "Next.js Errors",
  "date": "2026-10-04",
  "updated": "2026-10-04",
  "intro": "This error means the bundler can’t find the file or package you imported. It often appears only after you deploy, because your laptop and the build server resolve files differently. I reproduced every cause below on a Linux build with Next.js 15.",
  "sections": [
   {
    "h": "The error",
    "codes": [
     {
      "label": "Build output",
      "code": "Failed to compile.\n\n./app/page.tsx\nModule not found: Can't resolve '../components/header'"
     }
    ]
   },
   {
    "h": "Cause 1: file name case doesn’t match",
    "p": [
     "On macOS and Windows, header and Header usually point to the same file, so it works locally. On Linux, which Vercel and most CI systems use, they’re different files. My test with the file Header.tsx imported as ../components/header failed on Linux."
    ],
    "codes": [
     {
      "label": "Bad",
      "code": "import Header from \"../components/header\";"
     },
     {
      "label": "Fixed",
      "code": "import Header from \"../components/Header\";"
     }
    ],
    "after": [
     "To rename a file’s case in Git, do it in two steps so Git records the change: git mv Header.tsx header-tmp.tsx, then git mv header-tmp.tsx header.tsx."
    ]
   },
   {
    "h": "Cause 2: the relative path is wrong",
    "p": [
     "A wrong number of dots or a missing folder fails the same way, for example ./components from inside the app folder when the files live one level up."
    ],
    "codes": [
     {
      "label": "Bad",
      "code": "// app/page.tsx, but components/ is next to app/\nimport Header from \"./components/Header\";"
     },
     {
      "label": "Fixed",
      "code": "import Header from \"../components/Header\";"
     }
    ]
   },
   {
    "h": "Cause 3: the package isn’t installed",
    "p": [
     "The error names the package instead of a file. Install it and make sure it appears in package.json, otherwise your build server won’t have it."
    ],
    "codes": [
     {
      "label": "Error",
      "code": "Module not found: Can't resolve 'dayjs'"
     },
     {
      "label": "Fix",
      "code": "npm install dayjs"
     }
    ]
   },
   {
    "h": "Cause 4: the @/ alias isn’t configured",
    "p": [
     "The @/ prefix only works if tsconfig.json or jsconfig.json maps it. Without the mapping, I got “Can’t resolve '@/components/Reader'”."
    ],
    "codes": [
     {
      "label": "tsconfig.json",
      "code": "{\n  \"compilerOptions\": {\n    \"paths\": { \"@/*\": [\"./*\"] }\n  }\n}"
     }
    ],
    "after": [
     "Use \"./src/*\" instead if your code lives in a src folder, and restart the dev server after changing it."
    ]
   },
   {
    "h": "Cause 5: a Node module imported in a client component",
    "p": [
     "Importing a Node-only module such as fs in a client component fails with “Can’t resolve 'fs'”, because the code is meant for the browser."
    ],
    "codes": [
     {
      "label": "Bad",
      "code": "\"use client\";\nimport fs from \"fs\";"
     },
     {
      "label": "Fixed idea",
      "code": "// Read the file in a Server Component or a Route Handler,\n// then pass the data to the client component as props."
     }
    ]
   },
   {
    "h": "How to confirm it’s fixed",
    "list": [
     "Delete the .next folder and run npm run build.",
     "Check exact spelling and case of every path in the error.",
     "Commit and push, then check the deployment build log."
    ]
   },
   {
    "h": "How to prevent it",
    "list": [
     "Match file name case exactly and avoid case-only renames.",
     "Install dependencies with npm install package-name so package.json updates.",
     "Keep one import style, either the alias or relative paths, across the project."
    ]
   }
  ],
  "service": "react-debugging-fixing",
  "related": [
   "nextjs-build-failed-on-vercel",
   "nextjs-window-is-not-defined-fix"
  ]
 },
 {
  "slug": "react-too-many-re-renders-error-fix",
  "title": "React “Too many re-renders” Error: Causes and Fixes",
  "metaTitle": "React “Too many re-renders” Error: How to Fix It",
  "description": "Fix React’s Too many re-renders error: setState in the render body, event handlers called immediately and effect loops, with tested fixes.",
  "keyword": "React too many re-renders",
  "category": "React Errors",
  "date": "2026-10-04",
  "updated": "2026-10-04",
  "intro": "React re-renders a component whenever its state changes. If your code changes state while rendering, React keeps rendering until it gives up. Both main causes below are tested on React 19.",
  "sections": [
   {
    "h": "The error",
    "codes": [
     {
      "label": "Console or build output",
      "code": "Error: Too many re-renders. React limits the number of renders to prevent an infinite loop."
     }
    ]
   },
   {
    "h": "Cause 1: calling setState during render",
    "p": [
     "Any state update in the body of the component triggers another render, which runs the update again."
    ],
    "codes": [
     {
      "label": "Bad",
      "code": "\"use client\";\nimport { useState } from \"react\";\n\nexport default function Page() {\n  const [count, setCount] = useState(0);\n  setCount(count + 1);\n  return <p>{count}</p>;\n}"
     },
     {
      "label": "Fixed",
      "code": "// Update state from an event or an effect, never in the render body.\n<button onClick={() => setCount((c) => c + 1)}>Add</button>"
     }
    ]
   },
   {
    "h": "Cause 2: calling the handler instead of passing it",
    "p": [
     "Writing onClick={setCount(count + 1)} runs setCount every render. In a TypeScript project the compiler catches this first, with “Type 'void' is not assignable to type 'MouseEventHandler'”. In plain JavaScript you get the re-render error."
    ],
    "codes": [
     {
      "label": "Bad",
      "code": "<button onClick={setCount(count + 1)}>Clicked {count}</button>"
     },
     {
      "label": "Fixed",
      "code": "<button onClick={() => setCount((c) => c + 1)}>Clicked {count}</button>"
     }
    ]
   },
   {
    "h": "Cause 3: effects that update their own dependencies",
    "p": [
     "An effect that changes state it depends on can loop forever. React usually reports this as “Maximum update depth exceeded”."
    ],
    "codes": [
     {
      "label": "Bad",
      "code": "useEffect(() => {\n  setItems([...items, \"new\"]);\n}, [items]);"
     },
     {
      "label": "Fixed",
      "code": "// Run once, and use the functional form so you don't depend on items.\nuseEffect(() => {\n  setItems((prev) => [...prev, \"new\"]);\n}, []);"
     }
    ],
    "after": [
     "Objects and arrays created inside the component are new on every render. If one sits in a dependency array and the effect sets state, it loops. Move the value outside the component or wrap it with useMemo."
    ]
   },
   {
    "h": "How to confirm it’s fixed",
    "list": [
     "The component renders once, then waits for interaction.",
     "Add a console.log at the top of the component to count renders.",
     "Open React DevTools and use the profiler to see what triggered each render."
    ]
   },
   {
    "h": "How to prevent it",
    "list": [
     "Treat the render body as read-only: no state updates there.",
     "Pass functions to event handlers, don’t call them.",
     "Check dependency arrays whenever an effect sets state.",
     "Turn on the React hooks ESLint rules."
    ]
   }
  ],
  "service": "react-debugging-fixing",
  "related": [
   "nextjs-hydration-failed-error-fix",
   "nextjs-build-failed-on-vercel"
  ]
 },
 {
  "slug": "nextjs-build-failed-on-vercel",
  "title": "Next.js Build Failed on Vercel: Common Causes and Fixes",
  "metaTitle": "Next.js Build Failed on Vercel: Causes & Fixes",
  "description": "Next.js works locally but fails on Vercel? Check TypeScript errors, case-sensitive imports, missing env vars, Node version and build-time fetches.",
  "keyword": "Next.js build failed Vercel",
  "category": "Deployment",
  "date": "2026-10-04",
  "updated": "2026-10-04",
  "intro": "The dev server is forgiving: it compiles pages on demand and skips checks that a production build runs. So “it works locally” and “the Vercel build failed” are often both true. The quickest route to a fix is reproducing the deployment locally.",
  "sections": [
   {
    "h": "Step 1: reproduce the build locally",
    "p": [
     "Run the same command Vercel runs, on a clean state:"
    ],
    "codes": [
     {
      "label": "Terminal",
      "code": "rm -rf .next\nnpm run build"
     }
    ],
    "after": [
     "Read the log from the first error, not the last line. Later errors are usually fallout. In my tests, several problems that dev mode ignored failed immediately here."
    ]
   },
   {
    "h": "Cause 1: TypeScript errors",
    "p": [
     "Next.js type-checks during the build. A type error that your editor shows as a warning still fails the deployment."
    ],
    "codes": [
     {
      "label": "Build output",
      "code": "Failed to compile.\nType error: Property 'email' does not exist on type 'User'."
     }
    ],
    "after": [
     "Fix the type instead of disabling checks. Turning type checking off hides real bugs."
    ]
   },
   {
    "h": "Cause 2: ESLint errors",
    "p": [
     "If ESLint is configured, errors reported during the build can fail it. Fix the rule violation, and only adjust the rule if it genuinely doesn’t suit your project."
    ]
   },
   {
    "h": "Cause 3: case-sensitive imports",
    "p": [
     "A file imported with the wrong case works on macOS and Windows but fails on Linux build servers with “Module not found: Can't resolve”. See the module-not-found guide for the exact fix."
    ]
   },
   {
    "h": "Cause 4: missing environment variables",
    "p": [
     "Your .env.local file is usually in .gitignore, so it isn’t deployed. If the build reads a variable that isn’t set in the Vercel project, pages that use it fail while prerendering."
    ],
    "codes": [
     {
      "label": "Examples of the failure",
      "code": "TypeError: Invalid URL\nTypeError: Failed to parse URL from undefined/posts"
     },
     {
      "label": "Code that triggers it",
      "code": "const url = process.env.API_URL!;\nconst res = await fetch(`${process.env.API_URL}/posts`);"
     }
    ],
    "after": [
     "Add the variable under Project Settings, then Environment Variables, and redeploy. Variables that the browser needs must start with NEXT_PUBLIC_."
    ]
   },
   {
    "h": "Cause 5: build-time fetches that fail",
    "p": [
     "Statically generated pages call your API during the build. If the API is down, private or slow, the build fails. Handle errors so one bad response doesn’t stop the deployment."
    ],
    "codes": [
     {
      "label": "Safer fetch",
      "code": "async function getPosts() {\n  try {\n    const res = await fetch(`${process.env.API_URL}/posts`);\n    if (!res.ok) return [];\n    return await res.json();\n  } catch {\n    return [];\n  }\n}"
     }
    ]
   },
   {
    "h": "Cause 6: Node version or missing packages",
    "list": [
     "Set the Node.js version in the Vercel project settings, or declare it in the engines field of package.json, so local and deployment versions match.",
     "Anything you import must be listed in package.json, not just installed on your machine.",
     "Commit your lockfile so installs are consistent."
    ]
   },
   {
    "h": "How to confirm it’s fixed",
    "list": [
     "npm run build passes locally.",
     "The deployment preview builds and the page loads.",
     "Check runtime logs if something fails only after deploy."
    ]
   },
   {
    "h": "How to prevent it",
    "list": [
     "Run npm run build before every push, or in a CI check.",
     "Document the required environment variables in an .env.example file.",
     "Test imports on a case-sensitive system, for example in CI."
    ]
   }
  ],
  "service": "react-debugging-fixing",
  "related": [
   "nextjs-module-not-found-cant-resolve",
   "nextjs-window-is-not-defined-fix"
  ]
 }
];
