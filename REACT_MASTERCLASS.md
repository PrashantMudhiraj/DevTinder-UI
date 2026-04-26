# React JS Master Class — From Basics to Architectural Mastery

> **Persona**: Senior Core Engineer @ Meta | Fiber Architecture | Reconciliation | React Internals  
> **Audience**: Developers who want to go beyond tutorials and understand _why_ React works the way it does.

---

## Table of Contents

### Core Concepts

- [Module 1: The Foundation](#module-1-the-foundation)
  - 1.0 UI Was Built with Pure JavaScript First
  - 1.1 Why Does React Exist?
  - 1.2 JSX: Syntactic Sugar Over `React.createElement`
  - 1.3 Props: The Contractual Interface of a Component
  - 1.4 The Pure Component Philosophy
  - 1.5 Component Tree & The Virtual DOM
  - 1.6 How React Code Compiles and Builds (Full Pipeline)
    - 1.6.1 Babel Deep Dive: Config, Presets, Polyfilling & Plugins
    - 1.6.2 Bundlers: What They Are, Why They Exist & How They Work
    - 1.6.3 Building a React App with Parcel (Zero-Config Bundler)
    - 1.6.4 Types of React Components: Class vs Functional + Full Lifecycle
  - 1.7 Conditional Rendering
  - 1.8 Fragments
  - [Module 1 — Interview Q&A](#module-1--interview-qa)

- [Module 2: State Mechanics](#module-2-state-mechanics)
  - 2.1 Why Does State Exist?
  - 2.2 `useState` Under the Hood: The Fiber Node
  - 2.3 `useState` Batching
  - 2.4 The Reconciliation Algorithm (Diffing)
  - 2.5 State Mutation: Who Actually Changes It?
  - 2.6 State as a Snapshot
  - [Module 2 — Interview Q&A](#module-2--interview-qa)

- [Module 3: Side Effects & Synchronization](#module-3-side-effects--synchronization)
  - 3.1 The Why: What Is a Side Effect?
  - 3.2 The Correct Mental Model
  - 3.3 The `useEffect` Lifecycle
  - 3.4 The Dependency Array
  - 3.5 Code Lab: Data Fetching
  - 3.6 Code Lab: Event Listeners & Subscriptions
  - [Module 3 — Interview Q&A](#module-3--interview-qa)

- [Module 4: Performance & Memoization](#module-4-performance--memoization)
  - 4.1 The Default Behavior
  - 4.2 `React.memo`: Skip Re-rendering a Component
  - 4.3 `useMemo`: Memoize an Expensive Computation
  - 4.4 The Internal Mechanics of Memoization
  - 4.5 When NOT to Memoize
  - [Module 4 — Interview Q&A](#module-4--interview-qa)

- [Module 5: Advanced Patterns](#module-5-advanced-patterns)
  - 5.1 Compound Components
  - 5.2 Render Props
  - 5.3 Higher-Order Components (HOCs)
  - 5.4 `React.Children` and `React.cloneElement`
  - [Module 5 — Interview Q&A](#module-5--interview-qa)

- [Module 6: Modern Ecosystem](#module-6-modern-ecosystem)
  - 6.1 React Server Components (RSC)
  - 6.2 Suspense
  - 6.3 Transitions (`useTransition`)
  - 6.4 React 19: What's New (`use()`, `useActionState`, `useOptimistic`, ref-as-prop)
  - [Module 6 — Interview Q&A](#module-6--interview-qa)

### Hooks Deep Dive

- [Module 7: Hooks — Complete Guide](#module-7-hooks--complete-guide)
  - 7.1 `useReducer`: State Machine for Complex State
  - 7.2 `useContext`: Dependency Injection for React
  - 7.3 `useRef`: Mutable Container & DOM Access
  - 7.4 `useImperativeHandle`: Controlled Ref Exposure
  - 7.5 `useLayoutEffect`: Synchronous Post-DOM Effect
  - 7.6 `useDeferredValue`: Debounce Without Timers
  - 7.7 `useId`: Stable, Unique IDs for Accessibility
  - 7.8 Custom Hooks: 15-Hook Library, Composition, Testing, Anti-patterns
  - 7.9 `useDebugValue`: Custom Hook DevTools Labels
  - 7.10 `useSyncExternalStore`: Safe External Subscriptions
  - [Module 7 — Interview Q&A](#module-7--interview-qa)

### Building Real Apps

- [Module 8: Event Handling & Forms](#module-8-event-handling--forms)
  - 8.1 Event Handling in React (Event Delegation)
  - 8.2 Controlled vs Uncontrolled Components
  - 8.3 Forms: Building from Scratch
  - 8.4 React Hook Form: Forms Without the Boilerplate
  - 8.4 Interview: Build a 6-Digit OTP Input UI *(Flipkart · Swiggy · Razorpay)*
  - [Module 8 — Interview Q&A](#module-8--interview-qa)

- [Module 9: Component Design Patterns](#module-9-component-design-patterns)
  - 9.1 Single Page Application (SPA)
  - 9.2 Presentational vs Container Components
  - 9.3 Lifting State Up
  - 9.4 Composition vs Inheritance
  - 9.5 Data-Driven UI & Config-Driven UI *(Swiggy Homepage pattern)*
  - [Module 9 — Interview Q&A](#module-9--interview-qa)

- [Module 10: Routing with React Router](#module-10-routing-with-react-router)
  - 10.1–10.7 Route Config, Navigation, Dynamic Routes, Nested Routes, Protected Routes, Hooks
  - 10.8 React Router v7: Data Mode (`createBrowserRouter`, loaders, actions)
  - 10.9 v6 → v7 Key Differences
  - 10.10 Alternate Routing Libraries (TanStack Router, Wouter, Next.js)
  - [Module 10 — Interview Q&A](#module-10--interview-qa)

- [Module 11: State Management](#module-11-state-management)
  - 11.1 When Do You Need a State Management Library?
  - 11.2 Redux Toolkit (RTK)
  - 11.3 Zustand: Minimal Global State
  - [Module 11 — Interview Q&A](#module-11--interview-qa)

### Advanced Topics

- [Module 12: Error Boundaries & Portals](#module-12-error-boundaries--portals)
  - 12.1 Error Boundaries
  - 12.2 Portals
  - [Module 12 — Interview Q&A](#module-12--interview-qa)

- [Module 13: Styling in React](#module-13-styling-in-react)
  - 13.1 The Styling Landscape
  - 13.2 CSS Modules
  - 13.3 Tailwind CSS
  - 13.4 Styled-components (CSS-in-JS)
  - 13.5 Theming
  - 13.6 `clsx` and `cn()`: Conditional Class Names
  - [Module 13 — Interview Q&A](#module-13--interview-qa)

- [Module 14: Testing](#module-14-testing)
  - 14.1 The Why: What to Test and Why
  - 14.2 Jest Basics
  - 14.3 React Testing Library
  - 14.4 Testing Async Components
  - 14.5 RTL Query Cheat Sheet
  - 14.6 Vitest: The Vite-Native Test Runner
  - [Module 14 — Interview Q&A](#module-14--interview-qa)

- [Module 15: Project Architecture & Build Tools](#module-15-project-architecture--build-tools)
  - 15.1 Feature-Based Folder Structure
  - 15.2 Vite Configuration
  - 15.3 Environment Variables: Full Multi-Environment Setup (dev/test/e2e/staging/prod)
  - 15.4 Nginx Configuration for Serving a React App
  - 15.5 Browser Compatibility (`.browserslistrc`, Babel, `@vitejs/plugin-legacy`, autoprefixer, feature detection)
  - [Module 15 — Interview Q&A](#module-15--interview-qa)

- [Module 16: SSR, SSG, Hydration & Auth Security](#module-16-ssr-ssg-hydration--auth-security)
  - 16.1 Rendering Strategies (CSR / SSR / SSG)
  - 16.2 Hydration
  - 16.3 Auth & JWT Security
  - [Module 16 — Interview Q&A](#module-16--interview-qa)

### Production & Real-World

- [Module 17: Real-World Concepts](#module-17-real-world-concepts)
  - 17.1 Pagination
  - 17.2 Infinite Scroll
  - 17.3 Debounce & Throttle
  - 17.4 TanStack Query
  - 17.5 Optimistic UI
  - [Module 17 — Interview Q&A](#module-17--interview-qa)

- [Module 18: Production, Scaling & Glossary](#module-18-production-scaling--glossary)
  - 18.1 Production Error Handling Strategy
  - 18.2 Performance Tracking & Core Web Vitals
  - 18.3 Interview-Focused: Key Comparisons
  - 18.4 Glossary
  - [Module 18 — Interview Q&A](#module-18--interview-qa)

### Ecosystem Libraries

- [Module 19: Essential React Ecosystem Libraries](#module-19-essential-react-ecosystem-libraries)
  - MUI · shadcn/ui · Radix UI · Axios · SWR · TanStack Query · Zod · Jotai · Framer Motion · Recharts · TanStack Table · Socket.io · dnd-kit · Day.js
  - [Module 19 — Interview Q&A](#module-19--interview-qa)

### Building From Scratch

- [Module 20: Building From Scratch — Custom Router & UI Patterns](#module-20-building-from-scratch--custom-router--ui-patterns)
  - 20.1 Manual Routing (pushState + popstate + Context)
  - 20.2 Config-Driven Table, useSort, SortableTable
  - 20.3 Click-Outside Detection, Modal Portal
  - 20.4 Custom Hooks from Scratch
  - [Module 20 — Interview Q&A](#module-20--interview-qa)

### MNC Interview Preparation

- [Module 21: MNC React Interview Questions](#module-21-mnc-react-interview-questions)
  - 21.1 Conceptual / Theory Questions (Fiber, Reconciliation, StrictMode, Context, Controlled vs Uncontrolled, setState in useEffect)
  - 21.2 Coding / Machine Coding (Search+Debounce, Infinite Scroll, useFetch+Cache, Star Rating, useLocalStorage, ErrorBoundary, Stale Closure, Throttled Resize, Tabs)
  - 21.3 System Design / Architecture (Performance Optimization, Auth Flow)
  - 21.4 Quick-Fire Q&A *(Google · Meta · Amazon · Microsoft · Flipkart · Swiggy · Razorpay · Uber · Adobe · Atlassian)*

### Tooling & Frameworks

- [Module 22: Tooling & Code Quality](#module-22-tooling--code-quality)
  - 22.1 ESLint: Static Analysis for React (flat config, react-hooks plugin)
  - 22.2 Prettier: Automatic Code Formatting
  - 22.3 Husky + lint-staged: Git Hooks (pre-commit enforcement)
  - 22.4 Conventional Commits + commitlint
  - 22.5 TypeScript `tsconfig.json` for React (strict mode)
  - 22.6 `.editorconfig`: Consistent Editor Settings
  - 22.7 VSCode Workspace Settings & Extensions
  - 22.8 CI Quality Gate (GitHub Actions: typecheck + lint + format + test + build)
  - [Module 22 — Interview Q&A](#module-22--interview-qa)

- [Module 23: Next.js & Full-Stack React](#module-23-nextjs--full-stack-react)
  - 23.1 Next.js vs Plain React (Vite)
  - 23.2 Project Structure (App Router)
  - 23.3 File-Based Routing: Special Files (`page`, `layout`, `loading`, `error`, `route`)
  - 23.4 Layouts & Nested Routing
  - 23.5 Server vs Client Components (`"use client"`)
  - 23.6 Data Fetching Patterns (parallel fetch, `loading.tsx`, `error.tsx`)
  - 23.7 Server Actions: Forms Without APIs
  - 23.8 API Routes (`route.ts`)
  - 23.9 Rendering Strategies per Route (Static, SSR, ISR, on-demand revalidation)
  - 23.10 Middleware (Edge, auth guard, locale)
  - 23.11 `next/image` and `next/font`
  - 23.12 SEO with Metadata API
  - 23.13 Authentication (Auth.js / NextAuth)
  - 23.14 `next.config.ts`
  - 23.15 Deployment (Vercel + Docker standalone)
  - [Module 23 — Interview Q&A](#module-23--interview-qa)

---

[↑ Back to TOC](#table-of-contents)

# Module 1: The Foundation

> **Topics**: JSX, Props, and the "Pure Component" Philosophy

---

## 1.0 — UI Was Built with Pure JavaScript First

> Before React existed, every interactive UI was hand-crafted with vanilla JavaScript and direct DOM manipulation. Understanding this era is essential — it shows *exactly* what pain React was designed to eliminate.

---

### How UI Was Built Before React

In the beginning, web pages were static HTML. When developers needed interactivity, they reached directly for the **DOM API** — the browser's built-in interface for reading and modifying the page.

```html
<!-- HTML -->
<div id="app">
  <h1 id="title">Hello</h1>
  <button id="btn">Click me</button>
  <p id="counter">Count: 0</p>
</div>
```

```js
// Pure JavaScript — every update is manual DOM manipulation
let count = 0;
const counterEl = document.getElementById("counter");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    count++;
    counterEl.textContent = "Count: " + count; // manually update the DOM
});
```

This works. For a single counter, it's fine. But as apps grew, this approach collapsed under its own weight.

---

### The jQuery Era (2006–2013)

**jQuery** was created in 2006 to solve a real problem: the DOM API was verbose, inconsistent across browsers, and painful to use. jQuery wrapped it in a clean, chainable API.

```js
// Vanilla JS (verbose, inconsistent across IE/Chrome/Firefox)
document.getElementById("btn").addEventListener("click", function() {
    var el = document.getElementById("message");
    el.style.display = "block";
    el.innerHTML = "Hello!";
});

// jQuery (concise, cross-browser)
$("#btn").on("click", function () {
    $("#message").show().html("Hello!");
});
```

jQuery solved **browser compatibility** and **verbosity** — but it did NOT solve the fundamental problem: **you still manually manage the DOM**. As apps grew to hundreds of interactive elements, jQuery code became spaghetti.

---

### The Core Problems with Pure JS / jQuery

As single-page applications (SPAs) became common (Gmail 2004, Google Maps 2005), pure DOM manipulation hit a wall:

#### Problem 1 — Keeping UI in Sync with Data

```js
// You have data in multiple places
let user = { name: "Alice", isAdmin: true };

// And UI spread across multiple places
document.getElementById("username").textContent = user.name;
document.getElementById("nav-username").textContent = user.name;
document.getElementById("admin-badge").style.display = user.isAdmin ? "block" : "none";
document.getElementById("profile-name").textContent = user.name;

// When user.name changes, you MANUALLY update every single DOM reference
// Miss one → stale UI. Scale to 50 components → guaranteed bugs.
function updateUserName(newName) {
    user.name = newName;
    // You must remember ALL 4 places to update — error-prone at scale
    document.getElementById("username").textContent = newName;
    document.getElementById("nav-username").textContent = newName;
    document.getElementById("profile-name").textContent = newName;
    // Forgot admin-badge? The badge still shows the old name.
}
```

#### Problem 2 — Event Listener Chaos & Memory Leaks

```js
// Add a list item
function addTodo(text) {
    const li = document.createElement("li");
    li.textContent = text;

    // Attach a delete button with an event listener
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
        li.remove();
        // But the event listener is still in memory!
        // At scale → memory leaks, ghost listeners firing on removed elements
    });

    li.appendChild(deleteBtn);
    document.getElementById("todo-list").appendChild(li);
}
```

#### Problem 3 — No Component Model (Copy-Paste Everywhere)

```js
// Want a "user card" in 3 places? You duplicate HTML and JS 3 times.
// There is no reusable component concept — no encapsulation.

// Page 1 — profile page
document.getElementById("profile").innerHTML = `
    <div class="card">
        <img src="${user.avatar}" />
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
    </div>
`;

// Page 2 — team page (same card, copy-pasted)
document.getElementById("team-member-1").innerHTML = `
    <div class="card">
        <img src="${member.avatar}" />
        <h2>${member.name}</h2>
        <p>${member.bio}</p>
    </div>
`;
// Bug fix in the card? Update 15 copy-pasted strings manually.
```

#### Problem 4 — Impossible to Test

```js
// Pure DOM manipulation is tightly coupled to the browser environment.
// You cannot run this in Node.js (no document, no getElementById).
// Unit testing requires spinning up a full browser — slow and complex.

function showError(message) {
    document.getElementById("error-box").textContent = message;
    document.getElementById("error-box").style.display = "block";
    // How do you test this without a real DOM? You can't easily.
}
```

---

### The Timeline: How We Got to React

```mermaid
timeline
    title Evolution of UI Development
    2006 : jQuery released — cross-browser DOM API
    2010 : Backbone.js — first MVC structure for JS apps
    2010 : AngularJS (Angular 1) — two-way data binding, directives
    2011 : Ember.js — opinionated full framework
    2013 : React released by Facebook — Virtual DOM, component model
    2014 : Vue.js — lightweight reactive alternative
    2016 : Angular 2+ rewrite — TypeScript-first
    2017 : React 16 — Fiber architecture rewrite
    2019 : React Hooks — functional components replace class components
    2022 : React 18 — Concurrent features, automatic batching
    2024 : React 19 — Server Actions, React Compiler
```

---

### What AngularJS Tried (and Why It Had Problems)

Before React, **AngularJS** (2010) was the dominant solution. It introduced **two-way data binding** — change the model, the view updates automatically. Change the view (input), the model updates automatically.

```html
<!-- AngularJS — two-way binding with ng-model -->
<input ng-model="user.name" />
<p>Hello, {{ user.name }}!</p>
```

This felt magical — but it came with a serious cost: **the digest cycle**. AngularJS had to "watch" every bound variable and run a loop (`$digest`) to detect changes. In large apps with hundreds of watchers, this loop became a serious performance bottleneck.

| Issue | AngularJS | React |
|---|---|---|
| Data sync | Two-way binding (auto) | One-way data flow (explicit) |
| Change detection | Dirty-checking `$digest` loop | Virtual DOM diffing |
| Performance at scale | Degrades with watcher count | Efficient O(n) reconciliation |
| Learning curve | High (directives, scope, `$apply`) | Lower (just JavaScript) |
| Testability | Complex | Pure functions, easy to test |

---

### The Switch: Why React Won

React solved every problem in the pure JS era with three radical ideas:

#### Idea 1 — Components (Reusability)
```jsx
// One UserCard component, used everywhere — no copy-paste
function UserCard({ user }) {
    return (
        <div className="card">
            <img src={user.avatar} />
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
        </div>
    );
}
// Fix a bug once → fixed everywhere automatically ✔
```

#### Idea 2 — Declarative Rendering (Sync is Automatic)
```jsx
// You describe WHAT the UI should look like for a given state.
// React figures out HOW to update the DOM.

function UserGreeting({ user }) {
    return (
        <div>
            <h1>{user.name}</h1>                             {/* always in sync */}
            <nav>{user.name}</nav>                           {/* always in sync */}
            {user.isAdmin && <span className="badge">Admin</span>} {/* always in sync */}
        </div>
    );
}
// Change user.name once → ALL references update automatically ✔
// No manual getElementById. No forgetting a reference. ✔
```

#### Idea 3 — Unidirectional Data Flow (Predictability)
```
State → Component renders → UI
         ↑
    (event calls setState)
```

Data flows in **one direction only**. You never have to wonder "who changed this value?" — it can only come from a `setState` call, which triggers a predictable re-render. This made large apps debuggable and testable.

---

### Pure JS vs React — Side-by-Side

```js
// ============================================================
// PURE JAVASCRIPT — a dynamic todo list
// ============================================================
let todos = [];

function addTodo(text) {
    todos.push({ id: Date.now(), text, done: false });
    renderTodos(); // must manually call render
}

function toggleTodo(id) {
    todos = todos.map(t => t.id === id ? { ...t, done: !t.done } : t);
    renderTodos(); // must manually call render
}

function renderTodos() {
    const list = document.getElementById("todo-list");
    list.innerHTML = ""; // wipe and re-render everything manually
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        li.style.textDecoration = todo.done ? "line-through" : "none";
        li.addEventListener("click", () => toggleTodo(todo.id));
        list.appendChild(li);
    });
}
```

```jsx
// ============================================================
// REACT — same todo list
// ============================================================
function TodoList() {
    const [todos, setTodos] = useState([]);

    function addTodo(text) {
        setTodos([...todos, { id: Date.now(), text, done: false }]);
        // React re-renders automatically ✔
    }

    function toggleTodo(id) {
        setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
        // React re-renders automatically ✔
    }

    return (
        <ul>
            {todos.map(todo => (
                <li
                    key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    style={{ textDecoration: todo.done ? "line-through" : "none" }}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
    );
}
```

| | Pure JS | React |
|---|---|---|
| **UI updates** | Manual `element.textContent =` | Automatic on state change |
| **Reusability** | Copy-paste HTML/JS | Components |
| **Data sync** | Manual, error-prone | Guaranteed by rendering model |
| **Memory leaks** | Easy to create | React cleans up via unmount |
| **Testability** | Requires browser | Pure functions, easy to unit test |
| **Scale** | Breaks down at ~10+ components | Designed for 1000s of components |

---

## 1.1 — Why Does React Exist?

### The Problem (Pre-React World)

In the early 2010s, Facebook's News Feed had a critical bug: the unread message count would show `1` even after reading all messages. The root cause? **Inconsistent DOM state**. Multiple parts of the app were mutating the DOM independently, and keeping them in sync was a manual, error-prone nightmare.

> **The Core Insight**: Instead of asking "how do I update the DOM?", ask "what should the UI look like given this state?" and let a library figure out the _how_.

React was born from this insight. It introduced a **declarative programming model** for UIs.

| Imperative (jQuery Era)                      | Declarative (React)                |
| -------------------------------------------- | ---------------------------------- |
| "Find the element, add a class, update text" | "Given this state, render this UI" |
| You manage the DOM                           | React manages the DOM              |
| Bugs from out-of-sync mutations              | Single source of truth             |

---

## 1.2 — JSX: Syntactic Sugar Over `React.createElement`

### The Why

Writing `React.createElement('div', {className: 'card'}, 'Hello')` for every element is verbose and unreadable. JSX lets you write HTML-like syntax in JavaScript. It's **not** a template language — it's full JavaScript.

### How It Works Under the Hood

The JSX compiler (Babel/SWC) transforms JSX into `React.createElement()` calls:

```jsx
// What you write (JSX)
const element = <h1 className="title">Hello, World!</h1>;

// What the compiler produces
const element = React.createElement(
    "h1", // type
    { className: "title" }, // props
    "Hello, World!", // children
);
```

`React.createElement()` returns a plain JavaScript **object** — a React Element:

```js
// The "Virtual DOM" node — just a plain object!
{
  $$typeof: Symbol(react.element), // Security: prevents XSS via JSON injection
  type: 'h1',
  key: null,
  ref: null,
  props: {
    className: 'title',
    children: 'Hello, World!'
  }
}
```

> **Key Insight**: The Virtual DOM is nothing magical. It's a **tree of plain JavaScript objects** that describes what the real DOM should look like.

### The Virtual DOM Data Flow

```mermaid
graph TD
    A["JSX in your component"] -->|Babel/SWC compiles| B["React.createElement() calls"]
    B -->|Returns| C["React Element Tree (Plain JS Objects)"]
    C -->|React processes| D["Fiber Tree (Internal Representation)"]
    D -->|Commit phase| E["Real DOM / Native Views"]

    style A fill:#61dafb,color:#000
    style C fill:#f0ad4e,color:#000
    style D fill:#7952b3,color:#fff
    style E fill:#28a745,color:#fff
```

---

## 1.3 — Props: The Contractual Interface of a Component

### The Why

Components need to receive data from their parent. Props are that mechanism. They are the **public API** of a component — read-only, downward-flowing data.

### Key Rule: Props are Immutable

A component must **never** mutate its props. This is not just a convention — it's the foundation of React's predictability model.

### Bad Code vs. Best Practice

```jsx
// ============================================================
// ❌ BAD CODE: Mutating props directly
// ============================================================
function UserCard(props) {
    // NEVER DO THIS — you're mutating the object passed from the parent.
    // This causes unpredictable bugs because the parent's data is now changed.
    props.user.name = props.user.name.toUpperCase(); // ← MUTATION! BUG!

    return <div>{props.user.name}</div>;
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: Props are read-only. Derive new values.
// ============================================================

// 1. Destructure props for clarity and readability
function UserCard({ user, onSelect }) {
    // 2. Derive a new value — never mutate the original
    const displayName = user.name.toUpperCase(); // ← SAFE: new const

    // 3. Use the derived value in render
    return (
        <div className="card" onClick={() => onSelect(user.id)}>
            {/* 4. Pass a stable callback identity — covered in Module 4 */}
            <h2>{displayName}</h2>
            <p>{user.email}</p>
        </div>
    );
}

// 5. Define PropTypes or TypeScript interfaces as a contract
// TypeScript (preferred):
// interface UserCardProps {
//   user: { id: string; name: string; email: string };
//   onSelect: (id: string) => void;
// }
```

---

## 1.4 — The Pure Component Philosophy

### The Why

React is built entirely on the concept of **pure functions**. A pure function:

1. Given the same inputs, always returns the same output.
2. Has no side effects (no mutations of external state).

React components **must** be pure with respect to their render output.

### The Mental Model

```
UI = f(state, props)
```

Your component is a pure function. Feed it the same `state` and `props`, get the same UI every time. This is what makes React's reconciliation algorithm possible and reliable.

```jsx
// ============================================================
// ❌ BAD CODE: Impure component — reads external mutable variable
// ============================================================
let globalCounter = 0; // External mutable state — IMPURE!

function ImpureCounter() {
    globalCounter++; // Side effect during render — NEVER DO THIS
    return <div>Count: {globalCounter}</div>;
    // React may call this function multiple times in Strict Mode.
    // Each call increments the counter — completely unpredictable output.
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: Pure component — output depends only on props/state
// ============================================================
function PureCounter({ count }) {
    // No external dependencies. No mutations.
    // Given count=5, always renders "Count: 5". Predictable.
    return <div>Count: {count}</div>;
}
```

### Why React StrictMode Double-Invokes Renders

In development, React intentionally calls your render function **twice** to help you catch impurities. If your component is pure, calling it twice has no observable effect. If it's impure, bugs surface immediately.

---

## 1.5 — Component Tree & The Virtual DOM

```mermaid
graph TD
    App["&lt;App /&gt;"]
    NavBar["&lt;NavBar /&gt;"]
    Feed["&lt;Feed /&gt;"]
    UserCard1["&lt;UserCard user=A /&gt;"]
    UserCard2["&lt;UserCard user=B /&gt;"]
    Footer["&lt;Footer /&gt;"]

    App --> NavBar
    App --> Feed
    App --> Footer
    Feed --> UserCard1
    Feed --> UserCard2
```

Each node in this tree corresponds to a **React Element** (plain JS object). React maintains a mirror of this tree internally called the **Fiber Tree**, which we'll explore deeply in Module 2.

---

## 1.6 — How React Code Compiles and Builds (Full Pipeline)

> This is one of the most important "behind the scenes" topics. Understanding it removes all the magic from JSX, Babel, and bundlers.

---

### Step 1 — You Write JSX

JSX looks like HTML inside JavaScript, but it is **not valid JavaScript**. Browsers cannot parse it. The browser only understands plain JS, CSS, and HTML.

```jsx
// ❌ Browser cannot run this directly — it's not valid JS
function App() {
    return (
        <div className="app">
            <h1>Hello, {name}!</h1>
            <Button onClick={handleClick}>Click me</Button>
        </div>
    );
}
```

---

### Step 2 — Babel (or SWC) Transforms JSX → `React.createElement`

**Babel** is a JavaScript compiler (transpiler). Its job:

1. Parse your `.jsx` / `.tsx` file into an AST (Abstract Syntax Tree)
2. Transform JSX syntax into valid JavaScript function calls
3. Output plain `.js` that any browser can run

```
JSX Source  ──► Babel Parser ──► AST ──► Transform Plugins ──► Plain JS Output
```

**What Babel does to your JSX:**

```jsx
// ---- WHAT YOU WRITE ----
function App() {
    return (
        <div className="app">
            <h1>Hello</h1>
            <Button color="blue">Click</Button>
        </div>
    );
}
```

```js
// ---- WHAT BABEL OUTPUTS (Classic Transform — React 16 and earlier) ----
// Note: requires `import React from 'react'` at the top of every file
function App() {
    return React.createElement(
        "div", // tag name (string) for HTML elements
        { className: "app" }, // props object (null if no props)
        React.createElement("h1", null, "Hello"), // child 1
        React.createElement(Button, { color: "blue" }, "Click"), // child 2
    );
}
```

```js
// ---- WHAT BABEL OUTPUTS (Automatic JSX Transform — React 17+) ----
// No `import React` needed! Babel auto-imports the jsx() function.
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

function App() {
    return _jsxs("div", {
        className: "app",
        children: [
            _jsx("h1", { children: "Hello" }),
            _jsx(Button, { color: "blue", children: "Click" }),
        ],
    });
}
```

> **Key difference**: The new automatic transform (`react/jsx-runtime`) is more efficient. `jsx()` always takes children as a prop — no variadic arguments. This allows better optimization later.

---

### Step 3 — What `React.createElement` Actually Does

`React.createElement(type, props, ...children)` is a simple factory function. It creates a **React Element** — a plain JavaScript object:

```js
// Signature
React.createElement(
    type, // string ('div', 'h1') for HTML | Component function/class for custom
    props, // object of attributes/props, or null
    ...children, // zero or more child elements or strings
);
```

**Full example — nested JSX → nested createElement calls:**

```jsx
// JSX
const ui = (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={setEmail} />
        <button type="submit">Send</button>
    </form>
);

// What createElement produces (a plain JS object tree):
const ui = React.createElement(
    "form",
    { onSubmit: handleSubmit },
    React.createElement("label", { htmlFor: "email" }, "Email"),
    React.createElement("input", {
        id: "email",
        type: "email",
        value: email,
        onChange: setEmail,
    }),
    React.createElement("button", { type: "submit" }, "Send"),
);
```

**The resulting object React holds in memory:**

```js
// React Element — just a plain object (the "Virtual DOM node")
{
  $$typeof: Symbol(react.element),  // anti-XSS security marker
  type: "form",                     // what to render
  key: null,                        // for list reconciliation
  ref: null,                        // for DOM/instance access
  props: {
    onSubmit: handleSubmit,
    children: [
      { type: "label", props: { htmlFor: "email", children: "Email" } },
      { type: "input", props: { id: "email", type: "email", value: email, onChange: setEmail } },
      { type: "button", props: { type: "submit", children: "Send" } },
    ]
  }
}
```

#### `$$typeof: Symbol(react.element)` — Why It Matters

If an attacker injects a JSON string into your app (e.g., from a malicious API response) that looks like a React element object, React checks for `$$typeof`. A `Symbol` **cannot** be serialized to JSON (`JSON.stringify` drops Symbols). So injected JSON can never pass the `$$typeof` check — React refuses to render it as a component. This prevents a class of XSS attacks.

---

### Step 4 — How the Type Field Works

```js
// For HTML elements → type is a string
React.createElement("div", ...)   // type = "div"
React.createElement("span", ...)  // type = "span"

// For custom components → type is the actual function/class reference
React.createElement(MyButton, ...) // type = [Function: MyButton]
React.createElement(Router, ...)   // type = [Function: Router]
```

React uses this to decide:

- **String** → create a real DOM node (`document.createElement("div")`)
- **Function** → call the function and recursively process what it returns
- **Class** → instantiate it and call `.render()`

---

### Step 5 — The Bundler (Vite / Webpack)

Babel handles **syntax transformation** (JSX → JS). But your app has hundreds of files, npm packages, CSS imports, images, etc. That's the bundler's job.

```mermaid
graph TD
    SRC["Your Source Files<br/>(.jsx, .tsx, .css, .svg)"]
    BABEL["Babel / SWC<br/>(JSX → JS, TypeScript → JS)"]
    BUNDLE["Bundler (Vite / Webpack)<br/>- Resolves imports<br/>- Tree-shakes dead code<br/>- Splits chunks<br/>- Minifies"]
    OUT1["main.js (your app code)"]
    OUT2["vendor.js (React, libraries)"]
    OUT3["chunk-AdminPanel.js (lazy)"]

    SRC --> BABEL --> BUNDLE
    BUNDLE --> OUT1
    BUNDLE --> OUT2
    BUNDLE --> OUT3

    style BABEL fill:#f6921e,color:#fff
    style BUNDLE fill:#7952b3,color:#fff
    style OUT1 fill:#28a745,color:#fff
```

**Vite** (used in this project):

- In **dev mode**: Uses native ES Modules — no bundling. Files are served individually. HMR (Hot Module Replacement) is instant.
- In **prod mode**: Uses Rollup under the hood to bundle, tree-shake, and minify.

**SWC** (Speedy Web Compiler):

- Written in Rust — 20–70× faster than Babel
- Vite uses SWC by default via `@vitejs/plugin-react-swc`
- Does the same JSX → JS transform that Babel does, just much faster

---

## 1.6.2 — Bundlers: What They Are, Why They Exist & How They Work

> Babel transforms syntax. Bundlers solve an entirely different problem — **taking hundreds of disconnected files and turning them into something a browser can actually load efficiently**.

---

### Why Do We Need a Bundler?

Without a bundler, your React app is just a folder of files on your machine. The browser can't magically stitch them together.

#### Problem 1 — The `import` Problem

Modern JavaScript uses `import`/`export` (ES Modules). Older browsers don't support them. Even in browsers that do, a complex app with 500 files means **500 separate HTTP requests** on page load — catastrophically slow.

```js
// Your App.jsx imports from 5 files
import { useState } from "react";          // node_modules/react
import { Router } from "react-router-dom"; // node_modules/react-router-dom
import UserCard from "./components/UserCard";
import { fetchUser } from "./api/users";
import styles from "./App.module.css";

// Without a bundler: browser makes 5+ HTTP requests just for App.jsx
// A real app with 200 components = potentially thousands of requests
```

#### Problem 2 — Node Modules Don't Exist in the Browser

```js
import _ from "lodash"; // Lives in node_modules/
// The browser has no concept of node_modules.
// It doesn't know where to find 'lodash' — this just fails.
```

#### Problem 3 — Non-JS Assets

```js
import styles from "./Button.module.css"; // CSS inside JS?
import logo from "./logo.svg";            // SVG inside JS?
import data from "./config.json";         // JSON inside JS?
// None of these are valid JavaScript imports — a bundler handles them.
```

**The bundler's job:** resolve every `import`, pull in every dependency from `node_modules`, transform non-JS files, and package everything into one (or a few) optimised `.js` files the browser can load with a single request.

---

### The Dependency Graph

The bundler starts from your **entry point** (usually `main.jsx` or `index.js`) and recursively follows every `import` statement, building a complete **dependency graph** of your entire app.

```mermaid
graph TD
    ENTRY["main.jsx (entry point)"]
    APP["App.jsx"]
    HEADER["Header.jsx"]
    SIDEBAR["Sidebar.jsx"]
    REACT["react (node_modules)"]
    RRD["react-router-dom (node_modules)"]
    UTILS["utils/helpers.js"]
    CSS["App.module.css"]

    ENTRY --> APP
    APP --> HEADER
    APP --> SIDEBAR
    APP --> REACT
    APP --> RRD
    HEADER --> UTILS
    SIDEBAR --> CSS

    style ENTRY fill:#61dafb,color:#000
    style REACT fill:#f6921e,color:#fff
    style RRD fill:#f6921e,color:#fff
```

Every node in this graph becomes part of the output bundle. Files that are **never imported** are excluded (tree-shaking).

---

### What a Bundler Actually Does — Step by Step

#### 1. Module Resolution
Resolves every `import` to an actual file path:
```js
import UserCard from "./components/UserCard";
// → resolves to /project/src/components/UserCard.jsx  ✔

import lodash from "lodash";
// → resolves to /project/node_modules/lodash/lodash.js  ✔

import styles from "./App.module.css";
// → hands off to CSS loader plugin  ✔
```

#### 2. Transformation (Loaders / Plugins)
Each file type gets transformed before bundling:
```
.jsx / .tsx   →  Babel/SWC transforms to plain JS
.ts           →  TypeScript stripped to JS
.module.css   →  Converted to a JS object of class name mappings
.svg          →  Inlined as a data URL or exported as a React component
.json         →  Parsed and exported as a JS object
.png / .jpg   →  Copied to output folder, export becomes the URL string
```

#### 3. Tree Shaking (Dead Code Elimination)
```js
// math.js — exports 3 functions
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; }

// App.jsx — only imports one
import { add } from "./math";

// After tree shaking: subtract() and multiply() are GONE from the bundle
// They were never imported → bundler removes them → smaller bundle ✔
```

> **Tree shaking only works with ES Modules (`import`/`export`).** CommonJS (`require`/`module.exports`) is dynamic — bundlers can't statically analyse what's used, so nothing gets tree-shaken from CommonJS modules.

#### 4. Code Splitting
Instead of one giant bundle, the bundler splits output into multiple chunks:
```
dist/
├── main.js          ← always downloaded (core app)
├── vendor.js        ← React, React Router (changes rarely → long cache)
├── chunk-Admin.js   ← downloaded only when user visits /admin
└── chunk-Charts.js  ← downloaded only when Charts component renders
```

This is what `React.lazy(() => import('./AdminPanel'))` triggers — the bundler sees the dynamic `import()` and automatically creates a separate chunk for `AdminPanel`.

#### 5. Minification
```js
// Before minification (readable source)
function handleUserClick(userId) {
    const user = getUserById(userId);
    if (user.isAdmin) {
        redirectToAdminPanel();
    }
}

// After minification (production build)
function h(i){const u=g(i);if(u.a){r();}}
// Variable names shortened, whitespace removed, dead branches eliminated
// Typical reduction: 60–80% smaller file size
```

#### 6. Hashing (Cache Busting)
```
// Without hashing — browser caches main.js forever:
dist/main.js         ← browser caches this; won't re-download after deploy

// With content hashing — filename changes when content changes:
dist/main.a3f9c2d.js ← new hash on every change → browser downloads fresh copy
dist/vendor.8b2e1a4.js ← unchanged React code → browser uses cache ✔
```

---

### Webpack — The Original Bundler

**Webpack** (2012) was the first mainstream bundler for JavaScript. It introduced the concepts that all modern bundlers still use: loaders, plugins, entry/output, and code splitting.

```js
// webpack.config.js — a real production config
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.jsx",          // Where Webpack starts the dependency graph
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js", // Content hashing for cache busting
        clean: true,                   // Clean dist/ before each build
    },
    module: {
        rules: [
            // Loader for JSX/JS files — uses Babel to transform
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" },
            },
            // Loader for CSS Modules
            {
                test: /\.module\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            // Loader for images — copies to output folder, returns URL
            {
                test: /\.(png|jpg|svg)$/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        // Auto-generates index.html with the correct <script> tags
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
        // Extracts CSS into separate .css files instead of injecting into JS
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    ],
    optimization: {
        splitChunks: {
            chunks: "all",             // Split vendor code into separate chunk
        },
    },
};
```

**Webpack's strengths:**
- Massive plugin/loader ecosystem
- Extremely configurable
- Battle-tested in huge production apps (used by CRA, Next.js Pages Router)

**Webpack's weaknesses:**
- Config is notoriously complex
- Dev server is slow — bundles everything upfront before serving
- Cold start on large apps can take 30–60 seconds

---

### Vite — The Modern Bundler

**Vite** (2020, by Evan You — creator of Vue) solves Webpack's slow dev server problem with a fundamentally different architecture.

#### Dev Mode: No Bundling At All

```mermaid
graph LR
    subgraph "Webpack Dev Server"
        W1["All files"] --> W2["Bundle everything"] --> W3["Serve bundle.js"]
        W4["Edit one file"] --> W5["Re-bundle everything"] --> W6["HMR update"]
    end

    subgraph "Vite Dev Server"
        V1["Browser requests /src/App.jsx"] --> V2["Vite transforms just that file"]
        V3["Edit one file"] --> V4["Vite invalidates just that module"] --> V5["Instant HMR"]
    end
```

Vite exploits the fact that **modern browsers natively support ES Modules**. Instead of bundling first and serving second, Vite serves source files directly. The browser's own module system resolves imports. Only the files the browser actually requests get transformed.

**Result:** App startup in < 300ms regardless of project size. HMR in < 50ms.

#### Prod Mode: Rollup Under the Hood

For production, Vite uses **Rollup** to create optimised, tree-shaken, code-split bundles. Rollup is better than Webpack for libraries and has superior tree shaking.

```js
// vite.config.ts — minimal React setup
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // Uses SWC for fast JSX transform

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                // Manually split vendor chunk for better caching
                manualChunks: {
                    react: ["react", "react-dom"],
                    router: ["react-router-dom"],
                },
            },
        },
    },
    resolve: {
        alias: {
            "@": "/src", // Import from '@/components/Button' instead of '../../components/Button'
        },
    },
});
```

---

### Rollup — The Library Bundler

**Rollup** is the bundler used internally by Vite for production builds. It's also the standard choice for **publishing npm packages/libraries** because it produces the cleanest, most tree-shakeable output.

```js
// rollup.config.js — building a component library
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",         // Library entry point
    external: ["react", "react-dom"], // Don't bundle React — consumers bring their own
    output: [
        // ESM format — for modern bundlers (tree-shakeable)
        { file: "dist/index.esm.js", format: "esm" },
        // CommonJS format — for older Node.js tooling
        { file: "dist/index.cjs.js", format: "cjs" },
    ],
    plugins: [resolve(), commonjs(), typescript()],
};
```

> **Why Rollup for libraries?** Webpack is designed for apps (it injects its own runtime into bundles). Rollup produces flat, clean bundles with no extra runtime — perfect for libraries where bundle size matters.

---

### esbuild — The Speed Demon

**esbuild** (2020) is written in Go and is 10–100× faster than Webpack. Vite uses esbuild internally for:
- Pre-bundling `node_modules` during dev startup
- Minification in production builds

```js
// esbuild can be used standalone too
const esbuild = require("esbuild");

esbuild.build({
    entryPoints: ["src/index.jsx"],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ["chrome90", "safari14"],
    outfile: "dist/bundle.js",
}).catch(() => process.exit(1));
```

esbuild is intentionally limited — no HMR, minimal plugin API. It's used as a building block inside Vite, not as a standalone dev server.

---

### HMR — Hot Module Replacement

**HMR** is the feature that makes development fast. Without it, every file save triggers a full page refresh, losing all component state. With HMR, only the changed module is swapped in — the rest of the app (including state) stays alive.

```mermaid
sequenceDiagram
    participant Dev as You (edit Button.jsx)
    participant Vite as Vite Dev Server
    participant Browser

    Dev->>Vite: Save Button.jsx
    Vite->>Vite: Re-transform only Button.jsx
    Vite->>Browser: WebSocket: "Button.jsx updated"
    Browser->>Browser: Swap Button module in memory
    Browser->>Browser: Re-render affected components only
    Note over Browser: Counter state preserved ✔<br/>No full page reload ✔
```

React's HMR is powered by **React Fast Refresh** (the successor to React Hot Loader). It preserves component state across edits when possible, and falls back to a full component remount only when necessary (e.g., hooks changed).

---

### Source Maps

Production code is minified and unreadable. **Source maps** are files (`.map`) that map the minified code back to your original source, enabling readable stack traces in production errors.

```js
// vite.config.ts
export default defineConfig({
    build: {
        sourcemap: true,       // Generate .map files (upload to error tracker, don't serve to users)
        // sourcemap: 'hidden', // Generate maps but don't reference them in JS (security)
        // sourcemap: false,    // No maps (smallest build, undebuggable errors)
    },
});
```

---

### Bundler Comparison — Full Table

| | Webpack | Vite | Rollup | esbuild | Parcel |
|---|---|---|---|---|---|
| **Best for** | Complex apps, CRA | Modern React apps | Libraries/packages | Raw speed, tooling | Zero-config apps |
| **Dev server** | Slow (full bundle) | Fast (native ESM) | No dev server | No dev server | Fast |
| **Prod bundler** | Webpack | Rollup | Rollup | esbuild | Parcel |
| **Config** | Complex | Minimal | Moderate | Minimal | Zero |
| **Speed** | Slow | Very fast | Fast | Fastest | Fast |
| **HMR** | ✅ (slow) | ✅ (instant) | ❌ | ❌ | ✅ |
| **Tree shaking** | ✅ (ESM only) | ✅ | ✅ (best) | ✅ | ✅ |
| **Plugin ecosystem** | Huge | Good (Rollup compat) | Good | Small | Small |
| **Used by** | CRA, older Next.js | New React apps | npm libraries | Vite internally | Small projects |

---

### What Goes into the Final `dist/` Folder

```bash
dist/
├── index.html                    # Entry HTML — references all JS/CSS chunks
├── assets/
│   ├── main-a3f9c2d.js           # Your app code (minified + hashed)
│   ├── vendor-8b2e1a4.js         # React, React Router (rarely changes → long cache)
│   ├── chunk-AdminPanel-c7d3.js  # Lazy-loaded chunk (only downloaded if user visits /admin)
│   ├── main-4f2a1b3.css          # Extracted CSS
│   └── logo-2c9e8f1.svg          # Hashed static asset
└── favicon.ico
```

When your app deploys to a CDN, browsers cache `vendor-8b2e1a4.js` for a long time (it's the same hash until React updates). Only `main-a3f9c2d.js` changes with your deploys — browsers download only what changed.

---

---

## 1.6.3 — Building a React App with Parcel (Zero-Config Bundler)

> Parcel is the **zero-config** bundler. No `webpack.config.js`, no `vite.config.ts`, no Babel config needed. Point it at your HTML file and it figures out everything else automatically — making it the fastest way to bootstrap a React app from scratch.

---

### What Makes Parcel Different

Every other bundler requires you to write config before you can start:

```js
// Webpack: needs webpack.config.js (50+ lines)
// Vite: needs vite.config.ts + package.json scripts
// Rollup: needs rollup.config.js + plugin list

// Parcel: needs NOTHING — just run:
npx parcel index.html
// That's it. Parcel detects React, JSX, TypeScript automatically.
```

Parcel uses your **`index.html` as the entry point** — not a JS file. It reads the `<script>` tag, finds your JS, detects JSX/TypeScript, installs Babel presets automatically, and starts the dev server. Zero decisions required.

---

### Setting Up a React App with Parcel From Scratch

```bash
# 1. Create project folder
mkdir my-react-app && cd my-react-app

# 2. Initialise npm
npm init -y

# 3. Install React and Parcel
npm install react react-dom
npm install --save-dev parcel
```

```json
// package.json — add these scripts and the source field
{
  "name": "my-react-app",
  "source": "src/index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build",
    "clean": "rm -rf dist .parcel-cache"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "parcel": "^2.12.0"
  }
}
```

```html
<!-- src/index.html — Parcel's entry point -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My React App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- Parcel detects this script, follows it, transforms everything -->
    <script type="module" src="./index.jsx"></script>
  </body>
</html>
```

```jsx
// src/index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

```jsx
// src/App.jsx
export default function App() {
    return (
        <div>
            <h1>Hello from Parcel + React!</h1>
        </div>
    );
}
```

```bash
# Start dev server — Parcel auto-detects JSX, installs @babel/preset-react automatically
npm start
# → Dev server at http://localhost:1234
# → HMR enabled out of the box

# Production build
npm run build
# → Outputs to dist/ with hashed filenames, minified code
```

That's the **entire setup** — no config files at all.

---

### What Parcel Auto-Detects

When Parcel encounters a file, it checks the extension and applies the right transformer — no config needed:

| File | What Parcel Does Automatically |
|---|---|
| `.jsx` / `.tsx` | Installs `@babel/preset-react`, transforms JSX |
| `.ts` / `.tsx` | Installs `@babel/preset-typescript`, strips types |
| `.module.css` | Processes as CSS Modules, returns class name object |
| `.css` | Injects into `<style>` tag or extracts to `.css` file |
| `.svg` | Inlines as data URL or imports as React component |
| `.json` | Parses and exports as JS object |
| `image.png` | Copies to `dist/`, exports the hashed URL |
| `.env` | Reads environment variables (no plugin needed) |

---

### TypeScript with Parcel — Zero Config

```bash
# No tsconfig needed to get started. Just rename files to .tsx:
mv src/App.jsx src/App.tsx
mv src/index.jsx src/index.tsx
```

```tsx
// src/App.tsx — TypeScript just works
interface Props {
    name: string;
}

export default function App({ name }: Props) {
    return <h1>Hello, {name}!</h1>;
}
```

```bash
npm start  # Parcel detects .tsx, auto-installs @babel/preset-typescript ✔
```

> **Note**: Like Babel, Parcel **strips types but does not type-check**. Run `tsc --noEmit` separately for type checking in CI.

---

### CSS Modules with Parcel

```css
/* src/Button.module.css */
.button {
    background: #61dafb;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}

.button:hover {
    background: #21a1f1;
}
```

```jsx
// src/Button.jsx — CSS Modules work with zero config
import styles from "./Button.module.css";

export default function Button({ children, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}
// Parcel generates: <button class="Button_button_xK2p9">
// Scoped class names — no global CSS conflicts ✔
```

---

### Environment Variables with Parcel

Parcel reads `.env` files automatically — no `dotenv` package, no plugin:

```bash
# .env — loaded automatically in dev
REACT_APP_API_URL=http://localhost:3001

# .env.production — loaded automatically during `parcel build`
REACT_APP_API_URL=https://api.myapp.com
```

```jsx
// Access with process.env in your components
function ApiStatus() {
    return <p>Connected to: {process.env.REACT_APP_API_URL}</p>;
}
```

> **Security**: Parcel only exposes env variables that are explicitly referenced in your code — it does NOT expose your entire environment to the browser.

---

### Code Splitting with Parcel

Dynamic `import()` works out of the box — Parcel automatically creates a separate chunk:

```jsx
import { lazy, Suspense } from "react";

// Parcel sees this dynamic import and creates a separate chunk automatically
const AdminPanel = lazy(() => import("./pages/AdminPanel"));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminPanel />
        </Suspense>
    );
}
// dist/AdminPanel.abc123.js  ← separate chunk, only downloaded when needed ✔
```

---

### Aliases with Parcel

Clean import paths without long relative chains:

```json
// package.json — add alias config
{
  "alias": {
    "@": "./src",
    "@components": "./src/components",
    "@hooks": "./src/hooks",
    "@utils": "./src/utils"
  }
}
```

```jsx
// Before aliases
import Button from "../../../components/Button";
import { useAuth } from "../../hooks/useAuth";

// After aliases — clean and readable
import Button from "@components/Button";
import { useAuth } from "@hooks/useAuth";
```

---

### Production Build Output

```bash
npm run build
```

```
dist/
├── index.html                       # HTML with updated script/link references
├── index.a3f9c2d.js                 # Your app code (minified + hashed)
├── AdminPanel.b7e1c4f.js            # Lazy-loaded chunk
└── index.4f2a1b3.css                # Extracted CSS (minified + hashed)
```

Parcel automatically:
- Minifies JS (using SWC) and CSS
- Adds content hashes to filenames
- Generates a `<link rel="preload">` for critical assets
- Sets correct `<script type="module">` and `<script nomodule>` for browser compatibility

---

### Parcel vs Vite vs CRA — When to Use Each

| | Parcel | Vite | CRA |
|---|---|---|---|
| **Config needed** | Zero | Minimal | Zero |
| **Dev speed** | Fast | Fastest | Slow |
| **Build speed** | Fast (SWC) | Fast (Rollup) | Slow (Webpack) |
| **Customisability** | Low–Medium | High | Low (eject only) |
| **TypeScript** | Auto-detected | Auto-detected | Bundled |
| **Best for** | Prototypes, learning, small apps | Production React apps | Legacy projects |
| **Maintained** | ✅ Active | ✅ Very active | ⚠️ Slow updates |

**Rule of thumb:**
- **Learning / prototyping** → Parcel (zero friction, start coding immediately)
- **Production app** → Vite (fastest dev experience, full control)
- **Existing CRA project** → Keep or migrate to Vite

---

### Bundlers Deep Dive Summary

| Concept | Key Takeaway |
|---|---|
| **Why bundlers exist** | Browsers can't resolve `node_modules`, 500 HTTP requests is too slow, non-JS assets need processing |
| **Dependency graph** | Bundler starts at entry point, follows every `import`, builds a complete map |
| **Tree shaking** | Dead code removed based on static `import` analysis — only works with ESM |
| **Code splitting** | Dynamic `import()` creates separate chunks downloaded on demand |
| **Minification** | Rename variables, remove whitespace → 60–80% smaller files |
| **Content hashing** | Filenames change when content changes → perfect browser cache invalidation |
| **Webpack** | OG bundler, hugely configurable, slow dev server — used by CRA |
| **Vite** | Native ESM dev server (instant), Rollup for prod — the modern standard |
| **Rollup** | Cleanest tree-shaking output, standard for publishing npm libraries |
| **esbuild** | Go-based, 100× faster, used inside Vite as a building block |
| **Parcel** | Zero-config, HTML as entry point, auto-installs transforms — best for prototypes |
| **HMR** | Swap changed modules without page reload, preserving component state |
| **Source maps** | Map minified prod code back to source for readable error stack traces |

---

### Step 6 — Full End-to-End Pipeline

```mermaid
graph LR
    A["You write JSX<br/>(.jsx / .tsx)"]
    B["Babel / SWC<br/>transforms JSX → JS<br/>TypeScript → JS"]
    C["Bundler (Vite/Webpack)<br/>resolves imports<br/>adds polyfills<br/>tree-shakes"]
    D["Browser downloads<br/>main.js, vendor.js,<br/>chunk files"]
    E["JS Engine runs<br/>React.createElement calls<br/>build element tree"]
    F["React reconciler<br/>diffs old vs new<br/>Fiber tree built"]
    G["Commit phase<br/>Real DOM updated<br/>Browser paints"]

    A --> B --> C --> D --> E --> F --> G

    style A fill:#61dafb,color:#000
    style B fill:#f6921e,color:#fff
    style C fill:#7952b3,color:#fff
    style D fill:#6c757d,color:#fff
    style E fill:#f0ad4e,color:#000
    style F fill:#0d6efd,color:#fff
    style G fill:#28a745,color:#fff
```

---

### The Classic vs. Automatic JSX Transform

| Feature           | Classic (React ≤ 16)                          | Automatic (React 17+)                   |
| ----------------- | --------------------------------------------- | --------------------------------------- |
| Import required   | `import React from 'react'` in every file     | No manual import needed                 |
| Function used     | `React.createElement()`                       | `jsx()` from `react/jsx-runtime`        |
| Children handling | Variadic `...children` args                   | Always passed as `children` prop        |
| Bundle size       | Slightly larger                               | Slightly smaller (tree-shakeable)       |
| Babel plugin      | `@babel/plugin-transform-react-jsx` (classic) | Same plugin with `runtime: "automatic"` |

---

### Common Questions

**Q: Do I need `import React from 'react'` in React 18?**  
No — with the automatic JSX transform (default in Vite + React 17+), React is auto-imported by the compiler only where needed. You only import React when you use it explicitly (e.g., `React.memo`, `React.createContext`).

**Q: What's the difference between Babel and SWC?**  
Same job (transpile JS/JSX/TS), different implementation. Babel is JavaScript — slow but hugely extensible with plugins. SWC is Rust — extremely fast but fewer ecosystem plugins. Vite defaults to SWC; Create React App uses Babel.

**Q: What is tree-shaking?**  
Bundlers analyze your `import` statements and remove code that is never imported/used. If you import only `{ useState }` from React, the rest of React's source is tree-shaken out of your bundle.

**Q: What is `react/jsx-runtime`?**  
A small module React ships alongside the main `react` package. It exports `jsx()`, `jsxs()`, and `Fragment`. With the automatic transform, Babel/SWC injects `import { jsx } from 'react/jsx-runtime'` at the top of your compiled file — you never write it manually.

---

## 1.6.1 — Babel Deep Dive: Config, Presets, Polyfilling & Plugins

> This section completes the Babel picture. Understanding config files and presets is essential for debugging build issues, setting up new projects, and senior-level interviews.

---

### Babel Config Files

Babel is configured via one of two file formats. Both do the same thing — the difference is **scope**:

| File | Scope | Best For |
|---|---|---|
| `babel.config.json` | Entire project (monorepos too) | Apps, Next.js, CRA |
| `.babelrc` / `.babelrc.json` | Only the package it lives in | Libraries, packages |

```json
// babel.config.json — the most common setup for a React app
{
  "presets": [
    ["@babel/preset-env", { "targets": "> 0.5%, not dead", "useBuiltIns": "usage", "corejs": 3 }],
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-typescript"
  ],
  "plugins": [
    "babel-plugin-macros"
  ]
}
```

```json
// .babelrc — scoped to a single package in a monorepo
{
  "presets": ["@babel/preset-react"]
}
```

> **Rule**: Use `babel.config.json` for applications. Use `.babelrc` for publishable library packages.

---

### The Three Core Presets

A **preset** is a pre-packaged collection of Babel plugins. You rarely configure individual plugins — you configure presets.

#### 1. `@babel/preset-env` — Downcompile Modern JS

Transforms modern JavaScript (ES2015+) syntax into code that older browsers can run. It reads your `targets` (which browsers to support) and only applies the transforms those browsers actually need.

```bash
npm install --save-dev @babel/preset-env
```

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": "> 0.5%, last 2 versions, not dead",
        // OR point to a .browserslistrc file — same syntax
        "useBuiltIns": "usage",  // Automatically inject polyfills only for features you use
        "corejs": 3              // Version of core-js to use for polyfills
      }
    ]
  ]
}
```

**How `targets` works:**

```
"targets": "> 0.5%, last 2 versions, not dead"
```

Babel uses **browserslist** to resolve this query into a list of real browser versions. Then it checks which ES features each browser already supports natively. If a browser natively supports `async/await`, Babel skips transforming it for that target.

```mermaid
graph TD
    A["Your Code uses: async/await, optional chaining, arrow functions"]
    B["Babel checks targets: Chrome 120, Safari 17, Firefox 121"]
    C["Chrome 120: supports all three natively → skip transforms"]
    D["Safari 14 (if in targets): no optional chaining → transform it"]
    A --> B --> C
    B --> D
```

#### 2. `@babel/preset-react` — JSX Transform

Handles JSX → JavaScript. Two modes:

```json
// Classic (React ≤ 16): requires `import React from 'react'` everywhere
["@babel/preset-react", { "runtime": "classic" }]

// Automatic (React 17+): no manual import needed
["@babel/preset-react", { "runtime": "automatic" }]

// Development mode: adds extra debugging info (component names in errors)
["@babel/preset-react", { "runtime": "automatic", "development": true }]
```

```bash
npm install --save-dev @babel/preset-react
```

#### 3. `@babel/preset-typescript` — Strip TypeScript Types

Babel **does not type-check** TypeScript. It simply strips all type annotations and produces plain JavaScript. Type checking is handled separately by `tsc --noEmit`.

```bash
npm install --save-dev @babel/preset-typescript
```

```ts
// Input (.tsx)
function greet(name: string): string {
    return `Hello, ${name}`;
}

// Output after Babel strips types
function greet(name) {
    return `Hello, ${name}`;
}
```

> **Key distinction — Babel vs `tsc`**:
> | | Babel | TypeScript Compiler (`tsc`) |
> |---|---|---|
> | **Strips types** | ✅ Yes | ✅ Yes |
> | **Type checks** | ❌ No | ✅ Yes |
> | **Speed** | Very fast | Slower |
> | **Use in build** | Transpile only | Use `tsc --noEmit` for CI checks |
>
> In a Vite or CRA project, Babel (or SWC) handles transpilation. TypeScript type errors are caught separately in your IDE (via `tsserver`) and in CI (`tsc --noEmit`).

---

### Polyfilling: Syntax vs. Runtime Features

This is one of the most misunderstood Babel topics. Babel handles two fundamentally different things:

```
Syntax Transform  →  Babel rewrites the CODE
Runtime Polyfill  →  Babel injects a FUNCTION that didn't exist in the old browser
```

| Feature | Type | Handled by |
|---|---|---|
| Arrow functions | Syntax | `@babel/preset-env` rewrites to `function` |
| `async/await` | Syntax | `@babel/preset-env` rewrites to Promises |
| `Promise` | Runtime API | `core-js` polyfill injects `Promise` globally |
| `Array.prototype.flat` | Runtime API | `core-js` polyfill adds `.flat()` to Array prototype |
| `fetch` | Runtime API | NOT in `core-js` — use `whatwg-fetch` or `cross-fetch` |

```json
// Three modes for useBuiltIns:

// "false" (default) — no polyfills injected, you handle them manually
{ "useBuiltIns": false }

// "entry" — replace `import 'core-js'` with only the polyfills your targets need
//   Requires you to add `import 'core-js'` at the top of your entry file
{ "useBuiltIns": "entry", "corejs": 3 }

// "usage" (recommended) — automatically inject polyfills per file, only for APIs you actually use
{ "useBuiltIns": "usage", "corejs": 3 }
```

```bash
# Install core-js alongside preset-env
npm install core-js@3
```

**With `useBuiltIns: "usage"`, Babel auto-injects exactly what's needed:**

```js
// Your source code
const result = [1, [2, 3]].flat();

// Babel output (for a target that doesn't support Array.flat)
import "core-js/modules/es.array.flat.js"; // ← injected automatically
const result = [1, [2, 3]].flat();
```

---

### Babel Plugins

Presets are bundles of plugins. You can also add individual plugins for specific transforms or tooling:

```json
{
  "plugins": [
    // ---- COMMONLY USED PLUGINS ----

    // Babel macros — enables compile-time code transforms (used by styled-components, twin.macro)
    "babel-plugin-macros",

    // Class properties (now in preset-env, but sometimes needed standalone)
    "@babel/plugin-proposal-class-properties",

    // Decorators (for MobX, Angular-style class decorators)
    ["@babel/plugin-proposal-decorators", { "legacy": true }],

    // Module resolver — cleaner imports (maps '@/components' to './src/components')
    ["module-resolver", {
      "root": ["./src"],
      "alias": { "@": "./src" }
    }],

    // React hot loader for HMR (legacy; Vite's built-in HMR is preferred today)
    "react-hot-loader/babel"
  ]
}
```

---

### Babel Macros

**Babel macros** are a special category of plugin that run at compile time without requiring Babel config changes. A library ships a `.macro.js` file, and when you import from it, Babel automatically transforms the code.

```bash
npm install babel-plugin-macros  # one-time setup in babel.config.json
```

```js
// ---- styled-components/macro — adds display names + SSR class stability ----
import styled from "styled-components/macro";
const Button = styled.button`color: red;`; // Babel transforms at compile time

// ---- twin.macro — use Tailwind classes inside styled-components ----
import tw from "twin.macro";
const Card = tw.div`rounded shadow p-4`; // Outputs real styled-component at compile time

// ---- preval.macro — run Node.js code at build time ----
import preval from "preval.macro";
const buildTime = preval`module.exports = new Date().toISOString()`;
// buildTime is REPLACED at compile time with the actual ISO string — zero runtime cost
```

> **Why macros matter**: They let library authors ship zero-config compile-time transforms. The consumer just imports from the `.macro` path — no plugin setup needed beyond `babel-plugin-macros`.

---

### Babel vs. `tsc` vs. SWC — Full Comparison

| | Babel | TypeScript (`tsc`) | SWC |
|---|---|---|---|
| **Language** | JavaScript | TypeScript (Go internals) | Rust |
| **Speed** | Slow (JS) | Medium | 20–70× faster than Babel |
| **Type checking** | ❌ | ✅ | ❌ |
| **JSX support** | ✅ via preset | ✅ built-in | ✅ built-in |
| **Plugin ecosystem** | Huge | Limited | Growing |
| **Used by** | CRA, older setups | CI type checks | Vite (default), Next.js 13+ |
| **Config file** | `babel.config.json` | `tsconfig.json` | `.swcrc` or `vite.config.ts` |

**Typical production setup:**

```
Source (.tsx) → SWC/Babel (transpile, strip types) → Browser JS
Source (.tsx) → tsc --noEmit (type check in CI only, no output)
```

---

### Complete `babel.config.json` for a React + TypeScript App

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": "> 0.5%, last 2 versions, not dead",
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ],
  "plugins": [
    "babel-plugin-macros"
  ],
  "env": {
    "test": {
      "presets": [
        ["@babel/preset-env", { "targets": { "node": "current" } }],
        ["@babel/preset-react", { "runtime": "automatic" }],
        "@babel/preset-typescript"
      ]
    }
  }
}
```

> **Note the `env.test` block**: Jest runs in Node.js, not a browser. You override `targets` to `{ "node": "current" }` for tests so Babel doesn't downcompile Node-native syntax unnecessarily.

---

### Babel Deep Dive Summary

| Concept | Key Takeaway |
|---|---|
| **Config files** | `babel.config.json` for apps; `.babelrc` for library packages |
| **`@babel/preset-env`** | Downcompiles modern JS based on your browser targets |
| **`@babel/preset-react`** | Transforms JSX; use `runtime: "automatic"` for React 17+ |
| **`@babel/preset-typescript`** | Strips types only — does NOT type-check |
| **Syntax vs Runtime** | Syntax → Babel rewrites code. Runtime APIs → `core-js` polyfills |
| **`useBuiltIns: "usage"`** | Auto-inject only the polyfills you actually use |
| **Babel macros** | Compile-time transforms with zero config — just import from `.macro` |
| **Babel vs SWC** | Same job, SWC is 20–70× faster but fewer plugins |
| **Babel vs `tsc`** | Babel transpiles only; `tsc --noEmit` for type checking in CI |

---

## 1.6.4 — Types of React Components: Class vs Functional

> React has had two ways to write components since 2015. Understanding both is essential — you'll encounter class components in legacy codebases, and every senior interview will ask you to compare them.

---

### The Two Types at a Glance

```jsx
// ---- TYPE 1: Class Component (React ≤ 16 era) ----
import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };          // state lives on `this`
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}
```

```jsx
// ---- TYPE 2: Functional Component (Modern React) ----
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);  // state via hooks

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}
```

Same output. Completely different mental model.

---

### Class Components — Deep Dive

#### Anatomy of a Class Component

```jsx
import React, { Component } from "react";

class UserProfile extends Component {
    // ---- 1. Constructor: initialise state and bind methods ----
    constructor(props) {
        super(props);           // MUST call super(props) — passes props to React.Component
        this.state = {
            user: null,
            isLoading: true,
            error: null,
        };
        // Old-style binding (before class fields syntax)
        // this.handleClick = this.handleClick.bind(this);
    }

    // ---- 2. Lifecycle Methods ----

    // Runs ONCE after the component mounts to the DOM
    componentDidMount() {
        fetch(`/api/users/${this.props.userId}`)
            .then(res => res.json())
            .then(user => this.setState({ user, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    // Runs after every update (prev props/state available for comparison)
    componentDidUpdate(prevProps, prevState) {
        // Only re-fetch if userId prop actually changed
        if (prevProps.userId !== this.props.userId) {
            this.setState({ isLoading: true });
            fetch(`/api/users/${this.props.userId}`)
                .then(res => res.json())
                .then(user => this.setState({ user, isLoading: false }));
        }
    }

    // Runs just before the component is removed from the DOM
    componentWillUnmount() {
        // Clean up: cancel timers, abort fetches, remove event listeners
        clearInterval(this.timerId);
    }

    // ---- 3. Event Handlers (class fields = auto-bound to `this`) ----
    handleFollow = () => {
        this.setState(prevState => ({
            user: { ...prevState.user, isFollowing: !prevState.user.isFollowing }
        }));
    };

    // ---- 4. render() — the only required method ----
    render() {
        const { isLoading, error, user } = this.state;

        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;

        return (
            <div className="profile">
                <h1>{user.name}</h1>
                <button onClick={this.handleFollow}>
                    {user.isFollowing ? "Unfollow" : "Follow"}
                </button>
            </div>
        );
    }
}
```

#### The Full Class Component Lifecycle

Every class component goes through three phases in its life: **Mounting** (born), **Updating** (grows/changes), and **Unmounting** (dies). A fourth phase — **Error Handling** — catches mistakes from children.

```mermaid
graph TD
    subgraph "Phase 1: MOUNTING — Component is born"
        A["constructor(props)"] --> B["static getDerivedStateFromProps()"]
        B --> C["render()"]
        C --> D["React updates real DOM"]
        D --> E["componentDidMount()"]
    end

    subgraph "Phase 2: UPDATING — Props or state changes"
        F["setState() called OR new props arrive"] --> G["static getDerivedStateFromProps()"]
        G --> H["shouldComponentUpdate()"]
        H -->|"returns true"| I["render()"]
        H -->|"returns false"| SKIP["⛔ Skip re-render"]
        I --> J["getSnapshotBeforeUpdate()"]
        J --> K["React updates real DOM"]
        K --> L["componentDidUpdate(prevProps, prevState, snapshot)"]
    end

    subgraph "Phase 3: UNMOUNTING — Component is removed"
        M["Parent removes component"] --> N["componentWillUnmount()"]
        N --> O["Component destroyed"]
    end

    subgraph "Phase 4: ERROR HANDLING — Child throws"
        P["Child component throws error"] --> Q["static getDerivedStateFromError(error)"]
        Q --> R["render() — show fallback UI"]
        P --> S["componentDidCatch(error, info)"]
    end

    E --> F
    L --> F
```

---

#### Phase 1: Mounting — Component Is Born

This phase runs **once** when the component is first added to the DOM.

---

##### `constructor(props)`

**When**: The very first thing called, before the component renders.

**Purpose**: Initialise `this.state` and bind event handlers.

```jsx
class UserProfile extends Component {
    constructor(props) {
        super(props); // ← ALWAYS required. Passes props to React.Component base class.
                      // Without this, this.props is undefined inside the constructor.

        // ✅ DO: Initialise state here
        this.state = {
            user: null,
            isLoading: true,
            activeTab: "profile",
        };

        // ✅ DO: Bind methods (old style — before class fields)
        this.handleClick = this.handleClick.bind(this);

        // ❌ DON'T: Call this.setState() — state isn't set up yet
        // ❌ DON'T: Cause side effects (fetch, subscriptions, timers)
        // ❌ DON'T: Copy props into state unnecessarily:
        //   this.state = { name: props.name }  ← creates a stale copy
        //   Just use this.props.name directly
    }
}
```

> **Modern alternative**: With class fields syntax (now standard), you don't need a constructor for state or binding:
> ```jsx
> class UserProfile extends Component {
>     state = { user: null, isLoading: true }; // No constructor needed
>     handleClick = () => { ... };             // Arrow = auto-bound
> }
> ```

---

##### `static getDerivedStateFromProps(props, state)`

**When**: Called before **every** `render()` — both on mount and every update.

**Purpose**: Sync state to props when the internal state needs to reflect an external prop change.

```jsx
class ControlledSlider extends Component {
    state = { value: this.props.initialValue, lastPropValue: this.props.value };

    static getDerivedStateFromProps(props, state) {
        // If the parent changed `props.value`, sync our internal state to it
        if (props.value !== state.lastPropValue) {
            return {
                value: props.value,          // update state
                lastPropValue: props.value,  // track which prop we synced from
            };
        }
        return null; // ← return null to change nothing
    }

    // ❌ DON'T: Access `this` here — it's a STATIC method
    // ❌ DON'T: Use this for most cases — it's almost always misused
    // ✅ DO: Only use it when state genuinely depends on changing props
}
```

> **Reality check**: This method is almost always misused. The React team calls it a "last resort". 99% of the time, you can solve the same problem with a derived value in `render()`, or `componentDidUpdate`, or by lifting state up. If you find yourself using this, step back and reconsider your design.

---

##### `render()`

**When**: Called after constructor (and `getDerivedStateFromProps`). The only required lifecycle method.

**Purpose**: Return the JSX that describes what the UI should look like for the current state and props.

```jsx
render() {
    const { isLoading, user, activeTab } = this.state;

    // ✅ DO: Return JSX, null, arrays, strings, numbers, or portals
    // ✅ DO: Compute derived values here (derived from state/props)
    // ✅ DO: Call other methods that return JSX

    if (isLoading) return <Spinner />;
    if (!user) return null;

    return (
        <div className="profile">
            <h1>{user.name.toUpperCase()}</h1>   {/* derived value — fine here */}
            {this.renderTabs()}                   {/* method that returns JSX — fine */}
        </div>
    );

    // ❌ DON'T: Call this.setState() — causes infinite loop
    // ❌ DON'T: Make API calls — these are side effects
    // ❌ DON'T: Start timers or subscriptions
    // ❌ DON'T: Mutate state directly: this.state.user = {} — never
}
```

---

##### `componentDidMount()`

**When**: Called **once**, immediately after the component is inserted into the DOM for the first time. The DOM nodes exist and are measurable at this point.

**Purpose**: Kick off any work that requires the DOM to exist — data fetching, subscriptions, measurements.

```jsx
componentDidMount() {
    // ✅ PERFECT for: API calls / data fetching
    fetch(`/api/users/${this.props.userId}`)
        .then(res => res.json())
        .then(user => this.setState({ user, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));

    // ✅ PERFECT for: Setting up subscriptions
    this.unsubscribe = store.subscribe(this.handleStoreChange);

    // ✅ PERFECT for: Starting timers
    this.timer = setInterval(this.tick, 1000);

    // ✅ PERFECT for: Integrating third-party DOM libraries
    this.chart = new Chart(this.canvasRef.current, { type: "bar", data: {} });

    // ✅ PERFECT for: Measuring DOM elements
    const height = this.containerRef.current.getBoundingClientRect().height;
    this.setState({ containerHeight: height });

    // ✅ You CAN call setState() here — it triggers a second render,
    //   but it happens before the browser paints (user won't see the flicker)
    //   Only do it when necessary (e.g., after measuring the DOM)
}
```

> **Hooks equivalent**: `useEffect(() => { ... }, [])` — the empty array `[]` means "run once on mount".

---

#### Phase 2: Updating — Component Re-renders

This phase runs every time **state changes** (`setState`) or **new props arrive** from the parent.

---

##### `shouldComponentUpdate(nextProps, nextState)`

**When**: Called before rendering when props or state change. React will skip re-render if this returns `false`.

**Purpose**: Performance optimisation — prevent unnecessary re-renders.

```jsx
shouldComponentUpdate(nextProps, nextState) {
    // ✅ Compare specific values to decide if re-render is needed
    if (nextProps.userId !== this.props.userId) return true;
    if (nextState.activeTab !== this.state.activeTab) return true;
    return false; // Props and state we care about didn't change → skip render

    // ❌ DON'T: return false blindly — you'll miss legitimate updates
    // ❌ DON'T: cause side effects here
    // ❌ DON'T: mutate state here
}

// ✅ Modern alternative 1: extend PureComponent instead
class UserCard extends PureComponent {
    // React auto-does a shallow prop/state compare — no shouldComponentUpdate needed
}

// ✅ Modern alternative 2: React.memo for function components
const UserCard = React.memo(function UserCard(props) { ... });
```

> **Caution**: `shouldComponentUpdate` returning `false` blocks ALL re-renders — including ones you actually need. Bugs from this are hard to trace. Prefer `PureComponent` or `React.memo` which do automatic shallow comparison.

---

##### `getSnapshotBeforeUpdate(prevProps, prevState)`

**When**: Called right before the DOM is updated. React has computed the new virtual DOM but hasn't applied it to the real DOM yet.

**Purpose**: Capture information from the DOM before it changes (e.g., scroll position in a chat window that's receiving new messages).

```jsx
getSnapshotBeforeUpdate(prevProps, prevState) {
    // Classic use case: infinite chat scroll
    // If new messages were added, capture the scroll height BEFORE the DOM updates
    if (prevProps.messages.length < this.props.messages.length) {
        const chatBox = this.chatRef.current;
        return chatBox.scrollHeight - chatBox.scrollTop;
        // This return value becomes the `snapshot` in componentDidUpdate
    }
    return null; // ← always return null if no snapshot needed
}
```

> **Hooks equivalent**: None. This is one of the few lifecycle methods with no hook equivalent. Use a `useRef` + `useLayoutEffect` workaround for function components.

---

##### `componentDidUpdate(prevProps, prevState, snapshot)`

**When**: Called after every re-render (not the first mount). Receives the previous props, previous state, and the snapshot returned by `getSnapshotBeforeUpdate`.

**Purpose**: React to changes — re-fetch when a prop changes, update a third-party library when data changes, restore scroll position.

```jsx
componentDidUpdate(prevProps, prevState, snapshot) {
    // ✅ COMMON: Re-fetch data when a prop changes
    if (prevProps.userId !== this.props.userId) {
        this.setState({ isLoading: true });
        fetch(`/api/users/${this.props.userId}`)
            .then(r => r.json())
            .then(user => this.setState({ user, isLoading: false }));
    }

    // ✅ COMMON: Restore scroll position (using snapshot from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
        const chatBox = this.chatRef.current;
        chatBox.scrollTop = chatBox.scrollHeight - snapshot;
    }

    // ✅ COMMON: Update a third-party library when data changes
    if (prevProps.chartData !== this.props.chartData) {
        this.chart.update(this.props.chartData);
    }

    // ⚠️ CRITICAL: ALWAYS guard setState() with a condition
    // BAD — infinite loop:
    // componentDidUpdate() { this.setState({ x: 1 }); } // renders → CDU → setState → renders ...

    // GOOD — guarded setState:
    // componentDidUpdate(prevProps) {
    //   if (prevProps.id !== this.props.id) {
    //     this.setState({ data: null }); // Only runs when id actually changes
    //   }
    // }
}
```

> **Hooks equivalent**: `useEffect(() => { ... }, [userId])` — React runs the effect when `userId` changes.

---

#### Phase 3: Unmounting — Component Is Removed

---

##### `componentWillUnmount()`

**When**: Called immediately before the component is removed from the DOM. The DOM node still exists at this point but is about to be destroyed.

**Purpose**: **Clean up everything** you set up in `componentDidMount`. If you don't, you get memory leaks and errors from callbacks firing on unmounted components.

```jsx
componentWillUnmount() {
    // ✅ ALWAYS cancel/clean up whatever you started in componentDidMount

    // Cancel API requests
    this.abortController.abort();

    // Clear timers
    clearInterval(this.timer);
    clearTimeout(this.debounceTimer);

    // Remove event listeners
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("keydown", this.handleKeyDown);

    // Unsubscribe from stores
    this.unsubscribeFromStore();
    this.subscription?.unsubscribe();

    // Destroy third-party library instances
    this.chart?.destroy();
    this.mapInstance?.remove();

    // ❌ DON'T: Call setState() here — component is about to be destroyed
    //   React will log a warning: "Can't call setState on an unmounted component"
}
```

> **Hooks equivalent**: The cleanup function returned from `useEffect`: `useEffect(() => { return () => cleanup(); }, [])`.

---

#### Phase 4: Error Handling — Child Throws

These methods only trigger when a **child component** throws an error during rendering, a lifecycle method, or a constructor. They do NOT catch errors in event handlers (use `try/catch` for those).

---

##### `static getDerivedStateFromError(error)`

**When**: Called when a child throws. Used to render a fallback UI instead of the crashed component tree.

```jsx
class ErrorBoundary extends Component {
    state = { hasError: false, errorMessage: "" };

    static getDerivedStateFromError(error) {
        // Return state update — renders the fallback UI
        return { hasError: true, errorMessage: error.message };
        // ← This is static: no access to `this`
        // ← Called during the render phase — no side effects here
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h2>Something went wrong.</h2>
                    <p>{this.state.errorMessage}</p>
                    <button onClick={() => this.setState({ hasError: false })}>
                        Try Again
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}
```

---

##### `componentDidCatch(error, info)`

**When**: Called after `getDerivedStateFromError`, during the commit phase.

**Purpose**: Log the error to an error reporting service (Sentry, Datadog, etc.).

```jsx
componentDidCatch(error, info) {
    // error     — the actual Error object thrown
    // info      — { componentStack: "\n  at ChildComponent\n  at ParentComponent..." }

    // ✅ Log to error monitoring service
    Sentry.captureException(error, {
        extra: { componentStack: info.componentStack }
    });

    // ✅ Can call setState() here — but getDerivedStateFromError is preferred for UI
    console.error("Error caught by boundary:", error, info.componentStack);
}
```

> **Why two methods?** `getDerivedStateFromError` handles the UI (render phase — synchronous). `componentDidCatch` handles side effects like logging (commit phase — can be async).

---

#### Deprecated / Legacy Lifecycle Methods

These methods existed in older React versions and were **deprecated in React 16.3** (given `UNSAFE_` prefix). You'll see them in legacy codebases.

```jsx
// ❌ DEPRECATED — do NOT use in new code
class LegacyComponent extends Component {
    // Was called before mounting — replaced by constructor + getDerivedStateFromProps
    UNSAFE_componentWillMount() { }

    // Was called when new props arrived — replaced by getDerivedStateFromProps + componentDidUpdate
    UNSAFE_componentWillReceiveProps(nextProps) { }

    // Was called before updating — replaced by getSnapshotBeforeUpdate
    UNSAFE_componentWillUpdate(nextProps, nextState) { }
}
```

**Why deprecated?** React's Concurrent Mode (React 18) can pause, resume, and restart rendering. These old methods could be called multiple times (or not at all), breaking apps that relied on them firing exactly once.

---

#### Complete `setState()` Behaviour in Lifecycle Methods

| Lifecycle Method | Can call `setState()`? | Effect |
|---|---|---|
| `constructor` | ❌ No | Use `this.state = {}` instead |
| `getDerivedStateFromProps` | ❌ No | Return state object directly |
| `render` | ❌ No | Infinite loop |
| `componentDidMount` | ✅ Yes | Triggers second render before browser paints |
| `shouldComponentUpdate` | ❌ No | Undefined behaviour |
| `getSnapshotBeforeUpdate` | ❌ No | Undefined behaviour |
| `componentDidUpdate` | ✅ Yes (with guard) | Must be inside `if` condition or infinite loop |
| `componentWillUnmount` | ❌ No | Component is destroyed — React warns |
| `getDerivedStateFromError` | ❌ No (static) | Return new state object directly |
| `componentDidCatch` | ✅ Yes | Used to update error state |

---

#### Full Working Example: All Phases Together

```jsx
class DataDashboard extends Component {
    state = {
        data: null,
        isLoading: true,
        error: null,
        lastUpdated: null,
    };

    // ---- MOUNTING ----
    componentDidMount() {
        this.fetchData();
        // Auto-refresh every 30 seconds
        this.refreshTimer = setInterval(this.fetchData, 30_000);
        // Track scroll position
        window.addEventListener("scroll", this.handleScroll);
    }

    // ---- UPDATING ----
    componentDidUpdate(prevProps) {
        // Re-fetch if the selected dataset changes
        if (prevProps.datasetId !== this.props.datasetId) {
            this.setState({ isLoading: true, data: null });
            this.fetchData();
        }
    }

    // ---- UNMOUNTING ----
    componentWillUnmount() {
        clearInterval(this.refreshTimer);        // stop auto-refresh
        window.removeEventListener("scroll", this.handleScroll); // remove listener
        this.currentFetch?.abort();              // cancel in-flight request
    }

    fetchData = () => {
        this.currentFetch = new AbortController();
        fetch(`/api/datasets/${this.props.datasetId}`, {
            signal: this.currentFetch.signal,
        })
            .then(r => r.json())
            .then(data => this.setState({ data, isLoading: false, lastUpdated: new Date() }))
            .catch(error => {
                if (error.name !== "AbortError") {
                    this.setState({ error, isLoading: false });
                }
            });
    };

    handleScroll = () => {
        this.setState({ scrollY: window.scrollY });
    };

    render() {
        const { data, isLoading, error } = this.state;
        if (isLoading) return <Spinner />;
        if (error) return <ErrorMessage error={error} />;
        return <Dashboard data={data} />;
    }
}
```

---

#### Lifecycle Methods — Quick Reference Card

| Method | Phase | Called When | Primary Use |
|---|---|---|---|
| `constructor` | Mount | Once, before first render | Initialise state, bind methods |
| `getDerivedStateFromProps` | Mount + Update | Before every render | Sync state from props (rare) |
| `render` | Mount + Update | Every render | Return JSX |
| `componentDidMount` | Mount | After first DOM paint | Fetch data, subscriptions, timers |
| `shouldComponentUpdate` | Update | Before re-render | Skip unnecessary renders |
| `getSnapshotBeforeUpdate` | Update | Before DOM update | Capture scroll position |
| `componentDidUpdate` | Update | After re-render | React to prop/state changes |
| `componentWillUnmount` | Unmount | Before removal | Clean up timers, listeners, requests |
| `getDerivedStateFromError` | Error | Child throws | Show fallback UI |
| `componentDidCatch` | Error | Child throws | Log errors to service |

```jsx
// ❌ BAD: Regular method — `this` is undefined when called as an event handler
class BadExample extends Component {
    handleClick() {
        console.log(this.state.count); // TypeError: Cannot read properties of undefined
    }

    render() {
        return <button onClick={this.handleClick}>Click</button>;
        // When the button fires, `this` is not bound to the component instance
    }
}

// ✅ FIX 1: Bind in constructor
class Fix1 extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this); // explicit bind
    }
    handleClick() { console.log(this.state.count); }
    render() { return <button onClick={this.handleClick}>Click</button>; }
}

// ✅ FIX 2: Class field arrow function (most common modern approach)
class Fix2 extends Component {
    // Arrow function captures `this` at definition time — always bound correctly
    handleClick = () => {
        console.log(this.state.count); // ✔ always works
    };
    render() { return <button onClick={this.handleClick}>Click</button>; }
}

// ✅ FIX 3: Inline arrow in JSX (creates new function every render — avoid for perf)
class Fix3 extends Component {
    handleClick() { console.log(this.state.count); }
    render() { return <button onClick={() => this.handleClick()}>Click</button>; }
}
```

#### `PureComponent` — Automatic `shouldComponentUpdate`

```jsx
import { PureComponent } from "react";

// PureComponent does a SHALLOW comparison of props and state.
// If nothing changed (by reference), render() is skipped entirely.
// It is the class equivalent of React.memo for function components.
class UserCard extends PureComponent {
    render() {
        // Only re-renders if this.props.user reference changed
        return <div>{this.props.user.name}</div>;
    }
}

// ⚠️ GOTCHA: PureComponent's shallow check won't detect nested mutations
// If you do: user.name = "Bob" (mutate in place), PureComponent skips the render!
// Always use immutable updates — spread operator, Object.assign, etc.
```

---

### Functional Components — Deep Dive

Introduced in 2015 as "stateless functional components" — just a function that takes props and returns JSX. They had no state, no lifecycle. Hooks in React 16.8 (2019) changed everything.

#### The Hooks-to-Lifecycle Mapping

Every class lifecycle method has a functional hook equivalent:

| Class Lifecycle | Hook Equivalent |
|---|---|
| `constructor` | `useState(initialValue)` initialiser |
| `componentDidMount` | `useEffect(() => { ... }, [])` |
| `componentDidUpdate` | `useEffect(() => { ... }, [dep])` |
| `componentWillUnmount` | `useEffect(() => { return () => cleanup() }, [])` |
| `shouldComponentUpdate` | `React.memo` + `useMemo` |
| `getDerivedStateFromError` | ❌ No hook — must use class Error Boundary |
| `componentDidCatch` | ❌ No hook — must use class Error Boundary |
| `getSnapshotBeforeUpdate` | ❌ No hook equivalent |

```jsx
// Class: componentDidMount + componentDidUpdate + componentWillUnmount
class DataFetcher extends Component {
    componentDidMount() {
        this.fetch(this.props.userId);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.fetch(this.props.userId);
        }
    }
    componentWillUnmount() {
        this.controller?.abort();
    }
    fetch(userId) {
        this.controller = new AbortController();
        fetch(`/api/users/${userId}`, { signal: this.controller.signal })
            .then(r => r.json())
            .then(user => this.setState({ user }));
    }
}

// Functional: all three combined into ONE useEffect
function DataFetcher({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        fetch(`/api/users/${userId}`, { signal: controller.signal })
            .then(r => r.json())
            .then(setUser);
        return () => controller.abort(); // cleanup = componentWillUnmount
    }, [userId]); // dependency = componentDidUpdate check

    return <div>{user?.name}</div>;
}
// Less code. Colocation of related logic. No `this`. ✔
```

---

### Other Component Types

Beyond class and functional, React has several specialised component forms:

#### 1. `React.memo` — Memoized Functional Component

```jsx
// Wraps a functional component to skip re-renders when props are unchanged
const UserAvatar = React.memo(function UserAvatar({ src, alt }) {
    return <img src={src} alt={alt} />;
});

// With custom comparison (like shouldComponentUpdate for function components)
const UserAvatar = React.memo(
    function UserAvatar({ user }) {
        return <img src={user.avatar} alt={user.name} />;
    },
    (prevProps, nextProps) => prevProps.user.id === nextProps.user.id
    // return true = skip re-render, return false = re-render
);
```

#### 2. `forwardRef` Component

```jsx
// A functional component that can accept a ref from its parent
import { forwardRef } from "react";

const TextInput = forwardRef(function TextInput({ placeholder, ...props }, ref) {
    return <input ref={ref} placeholder={placeholder} {...props} />;
});

// Usage
function Form() {
    const inputRef = useRef(null);
    return <TextInput ref={inputRef} placeholder="Enter name" />;
}
```

> **React 19 update**: `forwardRef` is no longer needed — `ref` is just a regular prop in React 19.

#### 3. Higher-Order Component (HOC)

```jsx
// A function that takes a component and returns an enhanced component
function withLogger(WrappedComponent) {
    return function LoggedComponent(props) {
        useEffect(() => {
            console.log(`${WrappedComponent.name} mounted`);
            return () => console.log(`${WrappedComponent.name} unmounted`);
        }, []);
        return <WrappedComponent {...props} />;
    };
}

const LoggedButton = withLogger(Button);
```

#### 4. Lazy Component

```jsx
// A component that is code-split and loaded on demand
const HeavyChart = React.lazy(() => import("./HeavyChart"));

// Must be wrapped in Suspense
<Suspense fallback={<Spinner />}>
    <HeavyChart data={data} />
</Suspense>
```

#### 5. Server Component (React 18+ / Next.js App Router)

```jsx
// No 'use client' = Server Component
// Runs only on the server — zero JS sent to browser
// Can use async/await directly, access DB, read files
async function ProductPage({ id }) {
    const product = await db.products.findById(id); // direct DB access ✔
    return <div>{product.name}</div>;
}
```

---

### Class vs Functional — Complete Comparison

| | Class Component | Functional Component |
|---|---|---|
| **Syntax** | `class Foo extends Component` | `function Foo()` |
| **State** | `this.state` + `this.setState()` | `useState()` hook |
| **Lifecycle** | `componentDidMount`, `componentDidUpdate`, etc. | `useEffect()` |
| **`this` keyword** | Required everywhere (causes bugs) | Not needed |
| **Code reuse** | HOCs, Render Props (verbose) | Custom hooks (clean) |
| **Boilerplate** | High (constructor, bind, render) | Minimal |
| **Performance** | Slightly heavier | Slightly lighter |
| **Error boundaries** | ✅ Supported | ❌ Not supported |
| **Testing** | Harder (class instances, `this`) | Easier (pure functions) |
| **React DevTools** | Good | Excellent (hook names visible) |
| **Recommended** | ❌ Legacy (avoid in new code) | ✅ Modern standard |

> **The one exception**: Error Boundaries **must** be class components. React has not (as of React 18) provided hook equivalents for `getDerivedStateFromError` / `componentDidCatch`. Use `react-error-boundary` to avoid writing class components yourself.

---

### When You'll Still See Class Components

1. **Legacy codebases** — any React app written before 2019 will have class components
2. **Error Boundaries** — the only case where you must write a class component in modern React
3. **Third-party libraries** — some older libraries expose class-based APIs
4. **`getSnapshotBeforeUpdate`** — edge case (scroll restoration) with no hook equivalent

---

### Migration: Converting a Class Component to Functional

```jsx
// ============================================================
// BEFORE: Class Component
// ============================================================
class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { query: "", results: [] };
        this.timer = null;
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleChange = (e) => {
        const query = e.target.value;
        this.setState({ query });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            fetch(`/api/search?q=${query}`)
                .then(r => r.json())
                .then(results => this.setState({ results }));
        }, 300);
    };

    render() {
        return (
            <div>
                <input value={this.state.query} onChange={this.handleChange} />
                <ul>{this.state.results.map(r => <li key={r.id}>{r.title}</li>)}</ul>
            </div>
        );
    }
}

// ============================================================
// AFTER: Functional Component
// ============================================================
function SearchBox() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const timerRef = useRef(null);

    useEffect(() => {
        return () => clearTimeout(timerRef.current); // componentWillUnmount
    }, []);

    function handleChange(e) {
        const q = e.target.value;
        setQuery(q);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            fetch(`/api/search?q=${q}`)
                .then(r => r.json())
                .then(setResults);
        }, 300);
    }

    return (
        <div>
            <input value={query} onChange={handleChange} />
            <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>
        </div>
    );
}
// No `this`. No constructor. No bind. Same behaviour. ✔
```

---

### Component Types Summary

| Type | Syntax | Use Case |
|---|---|---|
| **Functional** | `function Foo()` | Everything — the modern default |
| **Class** | `class Foo extends Component` | Legacy code, Error Boundaries only |
| **PureComponent** | `class Foo extends PureComponent` | Class-era perf optimisation |
| **React.memo** | `React.memo(Foo)` | Functional equivalent of PureComponent |
| **forwardRef** | `forwardRef((props, ref) => ...)` | Expose DOM ref to parent (not needed in React 19) |
| **HOC** | `withX(Foo)` | Cross-cutting concerns (auth, logging) |
| **Lazy** | `React.lazy(() => import(...))` | Code splitting on demand |
| **Server Component** | Async function, no `'use client'` | Server-only rendering, DB access, no JS to browser |

---

## 1.7 — Conditional Rendering

React has no special template syntax for conditions (no `v-if`, no `*ngIf`). You use plain JavaScript. There are three common patterns:

### Pattern 1 — `if` / `else` (for complex conditions)

```jsx
function UserGreeting({ user, isLoading }) {
    if (isLoading) {
        return <Spinner />;
    }

    if (!user) {
        return <p>Please log in.</p>;
    }

    return <h1>Welcome back, {user.name}!</h1>;
}
```

### Pattern 2 — Ternary Operator (inline, either/or)

```jsx
function StatusBadge({ isOnline }) {
    return (
        <span className={isOnline ? "badge-green" : "badge-grey"}>
            {isOnline ? "Online" : "Offline"}
        </span>
    );
}
```

### Pattern 3 — Short-Circuit `&&` (render or nothing)

```jsx
function Notification({ unreadCount }) {
    return (
        <div>
            <h1>Inbox</h1>
            {/* Only renders if unreadCount > 0 */}
            {unreadCount > 0 && (
                <span className="badge">{unreadCount} unread</span>
            )}
        </div>
    );
}

// ⚠️ GOTCHA: Never use a number directly with &&
// {items.length && <List />}  ← WRONG: renders "0" as text when items is empty
// {items.length > 0 && <List />}  ← CORRECT: always a boolean
```

### Pattern 4 — Early Return (clearest for guards)

```jsx
function AdminPanel({ user }) {
    if (!user.isAdmin) return null; // Render nothing

    return <div className="admin-panel">...</div>;
}
```

| Pattern       | Use when                                          |
| ------------- | ------------------------------------------------- |
| `if/else`     | Multiple conditions, complex logic, early returns |
| Ternary `? :` | Two alternatives inline in JSX                    |
| `&& `         | Render something OR nothing                       |
| `null` return | Skip render entirely                              |

---

## 1.8 — Fragments: Grouping Without Extra DOM Nodes

JSX requires a **single root element**. But wrapping in a `<div>` adds unnecessary DOM nodes, which can break CSS layouts (like flexbox/grid parents).

**Fragments** solve this — they group JSX without adding any real DOM element.

```jsx
// ❌ BAD: Extra <div> pollutes the DOM — breaks table row, flex/grid layouts
function TableRow() {
    return (
        <div>
            {" "}
            {/* This <div> inside <tr> is invalid HTML! */}
            <td>Name</td>
            <td>Age</td>
        </div>
    );
}

// ✅ GOOD: Fragment groups the cells with zero DOM output
function TableRow() {
    return (
        <>
            <td>Name</td>
            <td>Age</td>
        </>
    );
}

// ✅ Explicit Fragment — needed when you need a key prop (in lists)
import { Fragment } from "react";

function DefinitionList({ terms }) {
    return (
        <dl>
            {terms.map((term) => (
                <Fragment key={term.id}>
                    {" "}
                    {/* <> shorthand can't take a key */}
                    <dt>{term.word}</dt>
                    <dd>{term.definition}</dd>
                </Fragment>
            ))}
        </dl>
    );
}
```

> **Rule**: Use `<>...</>` everywhere. Only switch to `<Fragment key={...}>` when you need to attach a `key` prop — the shorthand syntax doesn't support attributes.

---

## Module 1 — Interview Q&A

**Q: What is JSX and what does it compile to?**
> JSX is syntactic sugar — `<Button color="blue">Click</Button>` compiles to `React.createElement(Button, { color: "blue" }, "Click")`. The result is a plain JS object (React element) describing what to render. Babel/SWC handles this transform.

**Q: What is the Virtual DOM? Is it faster than the real DOM?**
> The Virtual DOM is a tree of plain JS objects that mirrors the real DOM. It's not inherently faster — manipulating real DOM nodes is always the final step. What it does is *minimize* real DOM operations by diffing the old and new virtual trees first, then applying only the differences (reconciliation). The speed win comes from batching and minimizing DOM mutations.

**Q: What is the difference between class components and functional components?**

| | Class Component | Functional Component |
|---|---|---|
| State | `this.state` + `this.setState()` | `useState()` hook |
| Lifecycle | Lifecycle methods (`componentDidMount` etc.) | `useEffect()` hook |
| `this` binding | Required, error-prone | Not needed |
| Error boundaries | ✅ Can be error boundaries | ❌ Cannot (yet) |
| Boilerplate | More | Less |
| Recommended | Legacy codebases | All new code |

**Q: What is a pure component? Why does React require purity?**
> A pure component always produces the same output for the same input and has no side effects during render. React requires purity because it may call your render function multiple times (StrictMode, Concurrent Mode) — side effects in render would fire unpredictably. Use `useEffect` for side effects, never in the render function body.

**Q: What is `$$typeof: Symbol(react.element)` on a React element?**
> It's a security feature. JSON cannot contain Symbol values, so an attacker who injects JSON into your page can't craft a fake React element that would be rendered as real JSX. React checks for this Symbol before rendering — if it's missing, the element is rejected.

**Q: What does Babel do in a React project? What is SWC?**
> Babel transpiles modern JS (ES2022+) and JSX to browser-compatible ES5 using presets (`@babel/preset-env`, `@babel/preset-react`). SWC is a Rust-based replacement — 20× faster, same output. Vite uses SWC by default via `@vitejs/plugin-react-swc`.

**Q: What is tree shaking?**
> Tree shaking is a bundler feature (Rollup, Vite, Webpack) that removes unused exported code from the final bundle. It relies on ES module `import/export` syntax (which is statically analyzable). `require()` (CommonJS) cannot be tree-shaken.

---

## Module 1 Summary

| Concept                   | Key Takeaway                                                                  |
| ------------------------- | ----------------------------------------------------------------------------- |
| **JSX**                   | Syntactic sugar for `React.createElement()`. Compiles to plain JS objects.    |
| **Virtual DOM**           | A tree of plain JS objects. Not magic — just a description of the UI.         |
| **Props**                 | Read-only, downward-flowing data. The public API of a component.              |
| **Pure Components**       | Same inputs → same output. No side effects during render.                     |
| **`$$typeof: Symbol`**    | Security feature preventing JSON-injected XSS attacks.                        |
| **Conditional Rendering** | Use `if/else`, ternary, or `&&` — no special template syntax in React.        |
| **Fragments**             | `<>...</>` groups JSX without extra DOM nodes. Use `<Fragment key>` in lists. |

---

[↑ Back to TOC](#table-of-contents)

# Module 2: State Mechanics

> **Topics**: `useState`, Batching, and the Reconciliation Algorithm

---

## 2.1 — Why Does State Exist?

Props flow down from parent to child. But what triggers a re-render when _data changes over time_? That's what **state** is for. State is data that belongs to a component and, when changed, triggers a re-render.

---

## 2.2 — `useState` Under the Hood: The Fiber Node

When you call `useState`, React doesn't just create a JavaScript variable. It creates a **hook object** that is stored on the component's **Fiber node**.

### The Fiber Architecture

A Fiber is a unit of work — a JavaScript object representing a component instance. Each component in your tree has a corresponding Fiber node with this (simplified) shape:

```js
// Simplified Fiber Node structure (from React source: ReactFiber.js)
{
  tag: FunctionComponent,     // Type of component
  type: MyComponent,          // The function itself
  key: null,
  stateNode: null,            // DOM node (for host components like 'div')

  // Tree pointers — this is how React traverses the tree
  return: ParentFiber,        // Parent
  child: ChildFiber,          // First child
  sibling: SiblingFiber,      // Next sibling

  // The Hook Linked List — THIS IS CRITICAL
  memoizedState: Hook,        // Head of the hook linked list

  // Work-in-progress: React works on a copy, never the live tree
  alternate: WorkInProgressFiber,

  // Scheduling
  lanes: Lanes,               // Priority of pending work
  flags: Flags,               // What work needs to be done (Update, Placement, etc.)
}
```

### The Hook Linked List — Why Rules of Hooks Matter

Every `useState`, `useEffect`, `useMemo` call creates a **Hook object** that gets appended to a **linked list** on the Fiber node:

```
Fiber.memoizedState
       │
       ▼
  Hook (useState: count=0)
       │ .next
       ▼
  Hook (useState: name='Alice')
       │ .next
       ▼
  Hook (useEffect: [deps])
       │ .next
       ▼
      null
```

React identifies hooks by their **position in this list**, not by name. There is no "magic variable lookup" — React just walks this linked list sequentially on every render.

**This is exactly why the Rules of Hooks exist:**

```jsx
// ============================================================
// ❌ BAD CODE: Hooks inside a conditional — BREAKS THE LINKED LIST
// ============================================================
function BrokenComponent({ isLoggedIn }) {
    const [name, setName] = useState(""); // Hook #1

    if (isLoggedIn) {
        // On first render (isLoggedIn=true): Hook #2 is 'age'
        // On second render (isLoggedIn=false): Hook #2 is skipped!
        // React now tries to read Hook #2 data for the 'theme' hook,
        // but the linked list has 'age' data there. CATASTROPHIC MISMATCH.
        const [age, setAge] = useState(0); // ← ILLEGAL
    }

    const [theme, setTheme] = useState("light"); // Hook #3 (or #2!)
    return (
        <div>
            {name} - {theme}
        </div>
    );
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: All hooks at the top level, unconditionally
// ============================================================
function CorrectComponent({ isLoggedIn }) {
    const [name, setName] = useState(""); // Always Hook #1
    const [age, setAge] = useState(0); // Always Hook #2
    const [theme, setTheme] = useState("light"); // Always Hook #3

    // The linked list is ALWAYS the same length. React is happy.
    // Move the conditional INSIDE the hook's usage, not around the hook.
    const displayAge = isLoggedIn ? age : null;

    return (
        <div>
            {name} - {theme} - {displayAge}
        </div>
    );
}
```

---

## 2.3 — `useState` Batching

### The Why

Every `setState` call triggering an immediate re-render would be catastrophically inefficient. React **batches** multiple state updates from the same event handler into a single re-render.

```mermaid
sequenceDiagram
    participant User
    participant EventHandler
    participant ReactScheduler
    participant Reconciler
    participant DOM

    User->>EventHandler: Click button
    EventHandler->>ReactScheduler: setCount(c => c+1)
    Note over ReactScheduler: Queued. No render yet.
    EventHandler->>ReactScheduler: setName('Alice')
    Note over ReactScheduler: Queued. No render yet.
    EventHandler->>ReactScheduler: setTheme('dark')
    Note over ReactScheduler: Queued. No render yet.
    EventHandler-->>ReactScheduler: Handler complete
    ReactScheduler->>Reconciler: Process all 3 updates as ONE batch
    Reconciler->>DOM: Single commit (1 repaint, not 3)
```

**React 18+**: Automatic Batching extended batching to `setTimeout`, `Promises`, and native event handlers — not just React synthetic events.

```jsx
// ============================================================
// ❌ BAD CODE: Calling setState in a way that creates stale closures
// ============================================================
function Counter() {
    const [count, setCount] = useState(0);

    function handleTripleIncrement() {
        // All three reads of `count` capture the SAME stale value (e.g., 0).
        // After this click, count becomes 1, not 3.
        setCount(count + 1); // reads count=0, schedules update to 1
        setCount(count + 1); // reads count=0 (STALE!), schedules update to 1
        setCount(count + 1); // reads count=0 (STALE!), schedules update to 1
    }

    return <button onClick={handleTripleIncrement}>{count}</button>;
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: Use the functional updater form for sequential updates
// ============================================================
function Counter() {
    const [count, setCount] = useState(0);

    function handleTripleIncrement() {
        // Each updater receives the LATEST pending state, not the stale closure.
        // React queues: 0→1, 1→2, 2→3. Final result: 3. Correct!
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    return <button onClick={handleTripleIncrement}>{count}</button>;
}
```

---

## 2.4 — The Reconciliation Algorithm (Diffing)

### The Why

When state changes, React needs to figure out what changed in the Virtual DOM and update only those parts in the real DOM. Comparing two arbitrary trees is $O(n^3)$ complexity — too slow. React's reconciliation algorithm achieves $O(n)$ by making two key heuristics:

1. **Elements of different types produce different trees.** (Tear down and rebuild)
2. **The `key` prop signals which child elements are stable across renders.**

### The Diffing Process

```mermaid
flowchart TD
    A[State Changes] --> B[React calls your component function]
    B --> C[New Virtual DOM Tree created]
    C --> D{Compare with previous tree}
    D --> E{Same element type at this node?}
    E -->|Yes| F[Update props on existing DOM node]
    E -->|No| G[Unmount old subtree, Mount new subtree]
    F --> H{Check children}
    H -->|Has keys| I[Match by key, move/add/remove efficiently]
    H -->|No keys| J[Match by index position]
    I --> K[Commit phase: Batch DOM mutations]
    G --> K
    J --> K
```

### The `key` Prop: The Silent Performance Hero

```jsx
// ============================================================
// ❌ BAD CODE: Using array index as key
// ============================================================
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                // If we prepend an item, all indices shift.
                // React thinks *every* item changed and re-renders all of them.
                // If items have internal state (e.g., input values), that state is WRONG.
                <TodoItem key={index} todo={todo} /> // ← DANGEROUS with dynamic lists
            ))}
        </ul>
    );
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: Stable, unique IDs as keys
// ============================================================
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((todo) => (
                // React can now identify this specific item regardless of its position.
                // Prepending an item? React moves existing DOM nodes, creates only 1 new one.
                // Internal state (like a text input) stays with the correct item.
                <TodoItem key={todo.id} todo={todo} /> // ← CORRECT
            ))}
        </ul>
    );
}
```

---

## 2.5 — State Mutation: Who Actually Changes It?

> **The #1 beginner misconception**: "I call `setState`, so React updates the variable in place."  
> **Reality**: React never mutates your existing state. It replaces it with a brand new value — and YOU must never mutate it either.

---

### The Golden Rule

```
Never directly mutate state.
Always give React a brand new value via the setter function.
```

React decides **when** to re-render and **what** the new state is. You only ever _request_ a state change by calling the setter. React does the actual swap inside its Fiber node.

---

### What Happens Internally When You Call `setState`

```mermaid
sequenceDiagram
    participant You as Your Code
    participant React as React Scheduler
    participant Fiber as Fiber Node
    participant DOM as Real DOM

    You->>React: setCount(count + 1)
    Note over React: Queues an update.<br/>Does NOT mutate count yet.
    React->>Fiber: Schedules re-render at next frame
    Fiber->>Fiber: Runs component function again<br/>with new state value
    Fiber->>DOM: Commits only the changed parts
    Note over You: count now holds new value<br/>on the NEXT render call
```

React stores state inside the **Fiber node** (`hook.memoizedState`). When you call `setCount(5)`:

1. React pushes an update object onto a queue on that Fiber node.
2. React schedules a re-render (batched with other updates).
3. On the next render, React runs your component function again.
4. The `useState` hook reads the new value from the update queue and returns it.
5. Your component function sees the NEW value as `count`.

**Between your `setCount()` call and the next render, `count` still holds the OLD value.**

---

### Direct Mutation — Why It Silently Breaks React

```jsx
// ============================================================
// ❌ BAD CODE: Directly mutating state — React has NO IDEA this happened
// ============================================================
const [user, setUser] = useState({ name: "Alice", age: 30 });

function handleBirthday() {
    user.age = 31; // ← MUTATING the object directly
    setUser(user); // ← Passing the SAME object reference
}

// WHY THIS BREAKS:
// React does a shallow reference check: Object.is(prevState, nextState)
// prevState === nextState (same object!) → React thinks NOTHING CHANGED
// → NO re-render → UI stays stuck showing old value
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: Always produce a NEW object / array
// ============================================================
const [user, setUser] = useState({ name: "Alice", age: 30 });

function handleBirthday() {
    setUser({ ...user, age: user.age + 1 }); // ← NEW object via spread
    //      ↑ copies all existing fields, overwrites only `age`
}

// React: Object.is(prevUser, nextUser) → false (different reference)
// → Re-render triggered → UI updates correctly ✔
```

---

### Arrays Are the Same — Never `.push()` / `.splice()` Directly

```jsx
// ============================================================
// ❌ BAD: Mutating array state directly
// ============================================================
const [items, setItems] = useState(["Apple", "Banana"]);

function addItem() {
    items.push("Cherry"); // ← mutates the existing array
    setItems(items); // ← same reference → React skips re-render!
}

function removeFirst() {
    items.splice(0, 1); // ← mutates in-place
    setItems(items); // ← same reference again → broken
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: Always return a new array
// ============================================================
const [items, setItems] = useState(["Apple", "Banana"]);

// ADD — spread to create a new array
function addItem() {
    setItems([...items, "Cherry"]); // ✅ new array
}

// REMOVE — filter creates a new array
function removeItem(index) {
    setItems(items.filter((_, i) => i !== index)); // ✅ new array
}

// UPDATE — map creates a new array
function updateItem(index, newValue) {
    setItems(items.map((item, i) => (i === index ? newValue : item))); // ✅ new array
}

// INSERT at position — slice + spread
function insertAt(index, value) {
    setItems([...items.slice(0, index), value, ...items.slice(index)]); // ✅ new array
}
```

---

### Nested Objects — The Deep Clone Trap

```jsx
// ============================================================
// ❌ BAD: Spread only goes one level deep (shallow copy)
// ============================================================
const [profile, setProfile] = useState({
    name: "Alice",
    address: { city: "NYC", zip: "10001" },
});

function updateCity() {
    // BUG: spread copies the `address` REFERENCE, not a new object
    setProfile({ ...profile, address: { city: "LA" } }); // ← missing `zip`!
    // or worse:
    profile.address.city = "LA"; // ← mutates nested object directly
    setProfile({ ...profile }); // ← looks like a new object but nested ref mutated
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: Spread at every level you're changing
// ============================================================
function updateCity(newCity) {
    setProfile({
        ...profile, // copy top-level fields
        address: {
            // replace the nested object
            ...profile.address, // copy nested fields
            city: newCity, // override only what changed
        },
    });
}

// For deeply nested state, consider using Immer (same syntax as mutation):
// import produce from 'immer';
// setProfile(produce(profile, draft => { draft.address.city = newCity; }));
```

---

### Why Immer Looks Like Mutation But Isn't

Redux Toolkit uses **Immer** under the hood. In a reducer you can write:

```js
// Inside a Redux Toolkit reducer (Immer-powered)
state.user.age = 31; // Looks like mutation...
state.items.push("Cherry"); // Looks like .push()...
```

Immer wraps your state in a **Proxy**. Any "mutation" you do on the proxy is **recorded** but not applied. At the end, Immer produces a brand new immutable object with all your changes applied. The original state object is untouched.

So even in RTK, you are never actually mutating — Immer creates a new object. This is why you **cannot** use Immer-style writes outside of RTK reducers (plain `useState` does not have Immer).

---

### Quick Reference — Immutable Update Cheat Sheet

| Operation            | ❌ Mutating        | ✅ Immutable                             |
| -------------------- | ------------------ | ---------------------------------------- |
| Update object field  | `obj.x = 1`        | `{ ...obj, x: 1 }`                       |
| Add to array         | `arr.push(x)`      | `[...arr, x]`                            |
| Remove from array    | `arr.splice(i, 1)` | `arr.filter((_, idx) => idx !== i)`      |
| Update array item    | `arr[i] = x`       | `arr.map((v, idx) => idx === i ? x : v)` |
| Nested object update | `obj.a.b = x`      | `{ ...obj, a: { ...obj.a, b: x } }`      |
| Sort array           | `arr.sort()`       | `[...arr].sort()`                        |
| Reverse array        | `arr.reverse()`    | `[...arr].reverse()`                     |

---

## 2.6 — State as a Snapshot

> This is one of the most misunderstood React concepts, and the root cause of most "stale state" bugs.

**State is not a live variable — it's a snapshot frozen at the time of the render.**

When React calls your component function, it passes the current state value in. For the _entire duration of that render_, every reference to `count` (or whatever your state variable is) will return that same frozen value — even if you call `setState` multiple times.

```jsx
// ============================================================
// The confusing example everyone runs into
// ============================================================
function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1); // count is 0 here — queues: set to 1
        setCount(count + 1); // count is STILL 0 — queues: set to 1 again!
        setCount(count + 1); // count is STILL 0 — queues: set to 1 again!
        // Result: count becomes 1, not 3
        // Because `count` is the SNAPSHOT value (0) for this entire render
    }

    return <button onClick={handleClick}>{count}</button>;
}
```

Think of it like a **photograph**: when the shutter fires, the image is frozen. You can look at the photo a thousand times and it always shows the same moment. Calling `setState` doesn't change the existing photo — it schedules a new photo (render) to be taken.

```mermaid
sequenceDiagram
    participant Render1 as Render #1 (count=0)
    participant Queue as Update Queue
    participant Render2 as Render #2 (count=1)

    Render1->>Queue: setCount(0 + 1) → schedule 1
    Render1->>Queue: setCount(0 + 1) → schedule 1 (same!)
    Render1->>Queue: setCount(0 + 1) → schedule 1 (same!)
    Note over Render1: "count" in this render is ALWAYS 0
    Queue->>Render2: React processes queue → count = 1
    Note over Render2: New snapshot: count = 1
```

### The Fix: Functional Updater Form

The functional updater `setCount(prev => prev + 1)` does NOT use the snapshot. It receives the latest **queued** value:

```jsx
function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((prev) => prev + 1); // prev=0 → queues: set to 1
        setCount((prev) => prev + 1); // prev=1 → queues: set to 2
        setCount((prev) => prev + 1); // prev=2 → queues: set to 3
        // Result: count becomes 3 ✔
    }

    return <button onClick={handleClick}>{count}</button>;
}
```

### Stale Closures in `useEffect`

The snapshot model also explains stale closures in `useEffect`:

```jsx
// ❌ STALE CLOSURE BUG
function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(count + 1); // ← `count` is FROZEN at 0 (the snapshot at mount time)
            // This will always set count to 1, never increment beyond
        }, 1000);
        return () => clearInterval(id);
    }, []); // Empty deps — only runs once, captures count=0 forever
}

// ✅ FIX: Use functional updater — no closure dependency on count
useEffect(() => {
    const id = setInterval(() => {
        setCount((prev) => prev + 1); // ← Always works, no stale reference
    }, 1000);
    return () => clearInterval(id);
}, []);
```

---

## Module 2 — Interview Q&A

**Q: What is the difference between state and props?**

| | Props | State |
|---|---|---|
| Owned by | Parent component | The component itself |
| Mutable? | ❌ Read-only | ✅ via setter |
| Flow | Downward (parent → child) | Local to component |
| Triggers re-render? | Parent's re-render pushes new props | `setState()` triggers re-render |

**Q: What is automatic batching in React 18?**
> Before React 18, multiple `setState` calls inside `setTimeout`, Promises, and native event handlers each triggered a separate re-render. React 18 batches all of them by default into a single re-render. Use `flushSync()` from `react-dom` if you need to opt out and force a synchronous render.

**Q: Why shouldn't you mutate state directly?**
```jsx
// ❌ WRONG — React uses Object.is() to detect changes
// state.count++ mutates the same reference → Object.is(old, new) = true → no re-render
state.count++;
setState(state);

// ✅ CORRECT — new reference → React sees a change → re-render
setState({ ...state, count: state.count + 1 });
```
> React detects state changes via reference equality (`Object.is`). Mutating the existing object keeps the same reference, so React thinks nothing changed and skips the re-render.

**Q: What is "state as a snapshot"?**
> When a component renders, React "snapshots" all state values. The component function and all event handlers created during that render close over those snapshot values — they don't change mid-render. If you call `setCount(count + 1)` three times in one event handler, all three calls see the same `count` snapshot. Fix: use the functional updater `setCount(prev => prev + 1)`.

**Q: What is the `key` prop and why should you never use array index as key for dynamic lists?**
> `key` tells React which Fiber to reuse when reconciling lists. If you use array index: deleting item at index 0 shifts all remaining items' indices — React matches the wrong Fibers, causing corrupted input state, broken animations, and wrong component instances being reused. Use a stable unique ID from your data instead.

**Q: How does the reconciliation diffing algorithm achieve O(n)?**
> Two heuristics: (1) If root element types differ → tear down and rebuild the whole subtree (no cross-type comparison). (2) Use `key` to match children by identity instead of position. These two rules let React skip full tree comparison and process each node once — O(n).

---

## Module 2 Summary

| Concept                 | Key Takeaway                                                                            |
| ----------------------- | --------------------------------------------------------------------------------------- |
| **Fiber Node**          | Per-component JS object holding hooks, tree pointers, and scheduling info.              |
| **Hook Linked List**    | Hooks are identified by position. Never call hooks conditionally.                       |
| **Batching**            | Multiple `setState` calls → 1 re-render. Use functional updater for sequential updates. |
| **Reconciliation**      | $O(n)$ diffing using type-equality and `key` heuristics.                                |
| **`key` prop**          | Must be stable and unique. Index keys cause bugs with dynamic lists.                    |
| **State Immutability**  | Never mutate state directly. Always return new objects/arrays via the setter.           |
| **State as a Snapshot** | State is frozen per render. Use functional updater `prev =>` for sequential updates.    |

---

[↑ Back to TOC](#table-of-contents)

# Module 3: Side Effects & Synchronization

> **Topics**: `useEffect` Lifecycle, Cleanup, and the "Synchronization" Mental Model

---

## 3.1 — The Why: What Is a Side Effect?

A **pure** render function has no side effects. But real apps _need_ side effects:

- Fetching data from an API
- Setting up a WebSocket/subscription
- Directly manipulating the DOM (e.g., focus management)
- Starting/stopping timers

`useEffect` is React's **escape hatch** — a way to synchronize your component with an external system _after_ rendering.

---

## 3.2 — The Correct Mental Model

> **Wrong model**: "I use `useEffect` to run code when the component mounts."  
> **Correct model**: "I use `useEffect` to synchronize my component with an external system."

The difference is subtle but profound. Thinking in terms of _synchronization_ rather than _lifecycle events_ leads to correct cleanup code and avoids bugs.

---

## 3.3 — The `useEffect` Lifecycle

```mermaid
sequenceDiagram
    participant React
    participant Browser
    participant YourEffect

    React->>Browser: Commit DOM changes (paint)
    Browser-->>React: DOM painted
    React->>YourEffect: Run effect (after paint)
    YourEffect->>YourEffect: Start subscription / fetch data

    Note over React: State/Props change
    React->>Browser: Commit DOM changes (paint)
    Browser-->>React: DOM painted
    React->>YourEffect: Run cleanup from PREVIOUS effect
    YourEffect->>YourEffect: Cancel subscription / abort fetch
    React->>YourEffect: Run new effect

    Note over React: Component unmounts
    React->>YourEffect: Run cleanup
    YourEffect->>YourEffect: Cancel subscription / abort fetch
```

---

## 3.4 — The Dependency Array

The dependency array tells React: **"run this effect again only when these values change."** Choosing the right dependencies is one of the most common sources of bugs in React.

Here's a simple decision tree to pick the right option:

```mermaid
flowchart TD
    Q1{"Does the effect use ANY value<br/>from component scope?<br/>(state, props, functions)"}
    Q1 -->|No| EMPTY["Empty array: []<br/>Runs once on mount,<br/>cleans up on unmount"]
    Q1 -->|Yes| Q2{"Does that value ever<br/>change during the<br/>component's lifetime?"}
    Q2 -->|"No (stable refs, refs, constants)"| EMPTY
    Q2 -->|Yes| DEPS["List it as a dependency<br/>[userId, query, ...]<br/>Effect re-runs on change"]
    Q1 -->|"No array at all"| EVERY["No array<br/>Runs after EVERY render<br/>(rarely what you want)"]

    style EMPTY fill:#28a745,color:#fff
    style DEPS fill:#61dafb,color:#000
    style EVERY fill:#dc3545,color:#fff
```

> **The exhaustive-deps ESLint rule**: The `eslint-plugin-react-hooks` rule is not optional. Every value used inside `useEffect` that comes from the component scope _must_ be in the dependency array. Omitting them causes **stale closure bugs** — your effect uses an old value from a previous render and never gets the update.

```jsx
useEffect(() => {
    /* effect */
}); // Runs after EVERY render
useEffect(() => {
    /* effect */
}, []); // Runs once on mount
useEffect(() => {
    /* effect */
}, [userId]); // Runs when userId changes
```

---

## 3.5 — Code Lab: Data Fetching

Fetching data inside `useEffect` has a classic problem: **race conditions**. If `userId` changes quickly while a previous fetch is still in-flight, whichever fetch resolves LAST sets the state — which may be the OLD userId's data. The user sees wrong data.

```mermaid
sequenceDiagram
    participant User
    participant React
    participant API

    Note over User,API: WITHOUT cleanup (race condition bug)
    User->>React: userId changes 1 → 2
    React->>API: fetch users/2 starts
    React->>API: fetch users/1 is STILL running!
    API-->>React: users/1 resolves (slow network) — sets state!
    API-->>React: users/2 resolves — sets state again
    Note over React: Shows users/1 data briefly ✔ WRONG

    Note over User,API: WITH AbortController (correct)
    User->>React: userId changes 1 → 2
    React->>React: Cleanup: abort fetch for users/1
    React->>API: fetch users/2 starts
    API-->>React: users/2 resolves — sets state
    Note over React: Always shows correct user ✔
```

**The fix: `AbortController`** — pass its `signal` to `fetch()`, and in the cleanup function, call `abort()`. When React runs the cleanup (because the effect re-runs), the previous fetch is cancelled.

```jsx
// ============================================================
// ❌ BAD CODE: Classic race condition + missing cleanup
// ============================================================
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Problem 1: No cleanup. If userId changes rapidly,
        // multiple fetches race. The last one to resolve wins —
        // which may NOT be the most recent userId. RACE CONDITION.
        fetch(`/api/users/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                // Problem 2: If component unmounts before fetch resolves,
                // this setState call runs on an unmounted component.
                // (Memory leak in older React; warning in dev mode)
                setUser(data);
            });
    }, [userId]); // Correct dep array, but effect body is broken

    return <div>{user?.name}</div>;
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: AbortController for cleanup + race condition prevention
// ============================================================
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 1. Create an AbortController for this specific effect run.
        const abortController = new AbortController();

        async function fetchUser() {
            setIsLoading(true);
            setError(null);
            try {
                const res = await fetch(`/api/users/${userId}`, {
                    signal: abortController.signal, // 2. Tie the fetch to this controller
                });
                if (!res.ok) throw new Error("Failed to fetch user");
                const data = await res.json();
                setUser(data);
            } catch (err) {
                // 3. AbortError is expected — don't treat it as a real error
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchUser();

        // 4. Cleanup: This runs before the NEXT effect OR on unmount.
        // If userId changes, this cancels the in-flight fetch for the OLD userId.
        // The race condition is ELIMINATED.
        return () => {
            abortController.abort();
        };
    }, [userId]); // Effect re-runs whenever userId changes

    if (isLoading) return <Spinner />;
    if (error) return <ErrorMessage message={error} />;
    return <div>{user?.name}</div>;
}
```

---

## 3.6 — Code Lab: Event Listeners & Subscriptions

```jsx
// ============================================================
// ❌ BAD CODE: Memory leak — event listener never removed
// ============================================================
function WindowSize() {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        // This listener is added on mount and NEVER removed.
        // Every time this component mounts, a new listener is added.
        // If the component mounts/unmounts repeatedly, you accumulate listeners.
        window.addEventListener("resize", () => {
            setSize(window.innerWidth); // Also: new function reference each time
        });
    }, []); // Missing cleanup!

    return <div>Width: {size}px</div>;
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: Always return cleanup for subscriptions
// ============================================================
function WindowSize() {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        // 1. Define the handler outside so we have a stable reference
        function handleResize() {
            setSize(window.innerWidth);
        }

        // 2. Subscribe
        window.addEventListener("resize", handleResize);

        // 3. Cleanup: remove the EXACT SAME function reference
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty array: subscribe once, clean up on unmount

    return <div>Width: {size}px</div>;
}
```

---

## Module 3 — Interview Q&A

**Q: What is a side effect in React? Give examples.**
> A side effect is anything that reaches *outside* the component's render function — changing something in the external world or reading from it. Examples: `fetch()` API calls, setting `document.title`, subscribing to WebSocket events, setting up `setInterval`, reading/writing `localStorage`. All of these go in `useEffect`, never in the render body.

**Q: Explain the three modes of `useEffect`'s dependency array.**

| Dependency Array | When `useEffect` runs |
|---|---|
| `[]` (empty) | Once — after first render only (mount) |
| `[a, b]` (values) | After first render + whenever `a` or `b` changes |
| Omitted | After every render |

**Q: Why do you return a cleanup function from `useEffect`?**
> React calls the cleanup function (1) before the component unmounts, and (2) before re-running the effect when dependencies change. Without cleanup: event listeners stack up, intervals keep firing after unmount, WebSocket connections leak, and stale fetch callbacks can update state on an unmounted component (memory leak warning). Always clean up timers, subscriptions, and async operations.

**Q: What is a race condition in `useEffect` data fetching, and how do you fix it?**
```jsx
// Race condition: user types fast → two fetches in flight
// The slower first fetch resolves AFTER the faster second fetch
// → stale data overwrites fresh data

// Fix: AbortController
useEffect(() => {
    const ctrl = new AbortController();
    fetch(url, { signal: ctrl.signal })
        .then(r => r.json())
        .then(setData)
        .catch(e => { if (e.name !== 'AbortError') setError(e.message); });
    return () => ctrl.abort(); // cancels previous fetch before next effect runs
}, [url]);
```

**Q: What happens if you don't include a dependency in the `useEffect` dependency array?**
> The effect closes over the initial (stale) value of that variable. On subsequent renders, the effect doesn't re-run, so it always uses the value from when the component first mounted. ESLint's `react-hooks/exhaustive-deps` rule catches this. Fix: add the variable to the dependency array, or use `useRef` if you need the latest value without re-running the effect.

---

## Module 3 Summary

| Concept              | Key Takeaway                                                               |
| -------------------- | -------------------------------------------------------------------------- |
| **Side Effects**     | Anything that reaches "outside" the render (fetch, DOM, subscriptions).    |
| **Mental Model**     | Synchronize with external systems, don't think in lifecycle events.        |
| **Cleanup Function** | Always return cleanup for subscriptions and ongoing async work.            |
| **AbortController**  | The correct tool for canceling fetch requests in `useEffect`.              |
| **Race Conditions**  | Cleanup from previous effect runs before new effect — prevents stale data. |

---

[↑ Back to TOC](#table-of-contents)

# Module 4: Performance & Memoization

> **Topics**: `useMemo`, `useCallback`, and `React.memo`

---

## 4.1 — The Why: The Default Behavior

By default, every time a React component re-renders, **every child component also re-renders**, and **every value inside the component is recomputed**. For most apps, this is fast enough. JavaScript is quick, and reconciliation is cheap.

But for complex UIs — large lists, heavy computations, frequent parent re-renders — you need to be surgical about what gets recomputed.

> **Golden Rule**: Don't reach for `useMemo`/`useCallback`/`React.memo` preemptively. **Profile first, optimize second.** Premature memoization adds complexity and can actually _hurt_ performance.

---

## 4.2 — `React.memo`: Skip Re-rendering a Component

`React.memo` wraps a component and **prevents it from re-rendering if its props haven't changed** (shallow comparison). Without it, every parent re-render triggers every child re-render, regardless of whether the child's props changed.

**But `React.memo` alone is usually not enough.** If you pass a function as a prop, that function is re-created on every parent render — so `React.memo`'s shallow comparison sees a "new" function and re-renders anyway. You must pair it with `useCallback`.

```mermaid
flowchart TD
    PR["Parent re-renders<br/>(count state changed)"] --> MEMO["React.memo check on ExpensiveChild"]
    MEMO --> CHECK{"Are ALL props<br/>identical? (shallow equals)"}

    CHECK -->|"YES: handleClick is same ref<br/>(useCallback used)"| SKIP["Skip re-render ✔<br/>Return cached output"]
    CHECK -->|"NO: handleClick is new ref<br/>(no useCallback)"| RERENDER["Re-render ExpensiveChild"]

    style SKIP fill:#28a745,color:#fff
    style RERENDER fill:#dc3545,color:#fff
    style CHECK fill:#61dafb,color:#000
```

> **Key insight**: `useCallback` + `React.memo` is a **pair**. Using `React.memo` without `useCallback` on function props is usually pointless. Using `useCallback` without `React.memo` on the child is also pointless.

```jsx
// ============================================================
// ❌ BAD CODE: Child re-renders on every parent render
// ============================================================
function ParentComponent() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("light");

    // This function is RECREATED on every render.
    // Even if ExpensiveChild's props look the same, the function reference is new.
    const handleItemClick = (id) => {
        console.log("clicked", id);
    };

    return (
        <div className={theme}>
            <button onClick={() => setCount((c) => c + 1)}>{count}</button>
            {/* Re-renders on every count change, even though it doesn't use count */}
            <ExpensiveChild onItemClick={handleItemClick} />
        </div>
    );
}

// React.memo won't save us here because handleItemClick is always a new reference
const ExpensiveChild = React.memo(function ExpensiveChild({ onItemClick }) {
    console.log("ExpensiveChild rendered"); // Logs on every parent render!
    return <div onClick={() => onItemClick(1)}>Click me</div>;
});
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: useCallback + React.memo working together
// ============================================================
function ParentComponent() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("light");

    // useCallback memoizes the function reference.
    // handleItemClick is now the SAME object reference across renders
    // (unless its deps change — here, no deps, so it's stable forever).
    const handleItemClick = useCallback((id) => {
        console.log("clicked", id);
    }, []); // Empty deps: function never changes

    return (
        <div className={theme}>
            <button onClick={() => setCount((c) => c + 1)}>{count}</button>
            {/* Now React.memo works correctly: props didn't change → no re-render */}
            <ExpensiveChild onItemClick={handleItemClick} />
        </div>
    );
}

const ExpensiveChild = React.memo(function ExpensiveChild({ onItemClick }) {
    console.log("ExpensiveChild rendered"); // Only logs when props actually change
    return <div onClick={() => onItemClick(1)}>Click me</div>;
});
```

---

## 4.3 — `useMemo`: Memoize an Expensive Computation

`useMemo` caches the **result** of a function call and only re-runs it when the dependencies change. It's for expensive derived data — filtering large arrays, complex calculations, data transformations.

The mental model: imagine `useMemo` as a sticky note. React writes the answer on the sticky note and reads from it on every render. Only when a dependency changes does it erase the note and recalculate.

```mermaid
flowchart LR
    RENDER["Component re-renders"] --> CHECK{"useMemo: did<br/>items or filterText<br/>change?"}
    CHECK -->|"No — same deps"| CACHE["Return cached<br/>processedItems ✔<br/>(no work done)"]
    CHECK -->|"Yes — deps changed"| CALC["Run: items.filter().sort()<br/>(O(n log n) work)"]
    CALC --> STORE["Store new result + new deps"]
    STORE --> OUT["Return new processedItems"]

    style CACHE fill:#28a745,color:#fff
    style CALC fill:#f0ad4e,color:#000
```

**Bonus benefit**: `useMemo` also gives you a **stable object reference**. If `processedItems` passes unchanged through `useMemo`, it's the exact same array reference as last render. This means child components wrapped in `React.memo` won't re-render because of it.

```jsx
// ============================================================
// ❌ BAD CODE: Expensive computation on every render
// ============================================================
function DataGrid({ items, filterText }) {
    // This filters and sorts thousands of items on EVERY render,
    // even if only the theme changed and items/filterText are the same.
    const processedItems = items
        .filter((item) => item.name.includes(filterText))
        .sort((a, b) => a.name.localeCompare(b.name)); // O(n log n) every render!

    return <Grid data={processedItems} />;
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: useMemo for referentially stable expensive values
// ============================================================
function DataGrid({ items, filterText }) {
    // processedItems is ONLY recomputed when items or filterText changes.
    // If the parent re-renders for an unrelated reason, this is skipped.
    const processedItems = useMemo(() => {
        return items
            .filter((item) => item.name.includes(filterText))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [items, filterText]); // Recompute only when these change

    // BONUS: processedItems is also the same object reference across renders
    // (if deps didn't change), which means child components using React.memo
    // won't be triggered by this value.
    return <Grid data={processedItems} />;
}
```

---

## 4.4 — The Internal Mechanics of Memoization

Memoization in React is stored on the Fiber node's hook linked list, just like `useState`:

```
Fiber.memoizedState
       │
       ▼
  Hook (useMemo) {
    memoizedState: [cachedValue, deps],
    .next → ...
  }
```

On each render, React shallow-compares the new deps against `hook.memoizedState[1]`. If all deps pass `Object.is()` equality, the cached value is returned. Otherwise, the factory is called and the result stored.

```mermaid
flowchart TD
    A[Component re-renders] --> B{useMemo hook reached}
    B --> C{New deps === Old deps?}
    C -->|Yes - Object.is equality| D[Return cached value ✓]
    C -->|No| E[Run factory function]
    E --> F[Store new value + new deps]
    F --> G[Return new value]
```

---

## 4.5 — When NOT to Memoize

```jsx
// ❌ POINTLESS memoization — overhead > benefit
const name = useMemo(() => `${firstName} ${lastName}`, [firstName, lastName]);
// String concatenation is microseconds. useMemo adds overhead. Just write:
const name = `${firstName} ${lastName}`; // ✅

// ❌ POINTLESS useCallback on non-passed-down functions
function Component() {
    const handleClick = useCallback(() => {
        setState((s) => s + 1);
    }, []); // This component doesn't use React.memo, so this saves nothing
    return <button onClick={handleClick}>+</button>;
}
```

---

## Module 4 — Interview Q&A

**Q: What is `React.memo` and when should you use it?**
> `React.memo` wraps a component and shallow-compares its props. If props haven't changed (by reference), React skips calling the component function and reuses the last rendered output. Use it when: the component is expensive to render AND its parent re-renders frequently AND it receives stable props. Without stable props (via `useCallback`/`useMemo`), `React.memo` is useless.

**Q: What is the difference between `useMemo` and `useCallback`?**

| | `useMemo` | `useCallback` |
|---|---|---|
| Memoizes | A **computed value** | A **function reference** |
| Returns | The result of calling the function | The function itself |
| Use case | Expensive derived data | Stable callback for `React.memo` child or `useEffect` dep |
| Equivalent | `useMemo(() => fn(), deps)` | `useCallback(fn, deps)` = `useMemo(() => fn, deps)` |

**Q: When should you NOT use `useMemo`/`useCallback`?**
> When the computation is trivial. `useMemo` itself has a cost — React stores the previous value + deps array and runs a comparison every render. For `const x = a + b`, this overhead *exceeds* the savings. Only memoize when: (1) you've measured a real performance problem with React Profiler, or (2) you need referential stability (passing to `React.memo` child or `useEffect` deps).

**Q: What causes unnecessary re-renders? How do you debug them?**
> Main causes: (1) Parent re-renders — all children re-render by default. (2) Unstable object/array/function references passed as props (new reference every render even if logically equal). (3) Context value changes — all consumers re-render. Debug with React DevTools Profiler: record an interaction, look for components highlighted in flame graph with large render times or high render counts.

---

## Module 4 Summary

| Tool          | Purpose                     | Use When                                                |
| ------------- | --------------------------- | ------------------------------------------------------- |
| `React.memo`  | Skip component re-render    | Child is expensive + receives stable props              |
| `useCallback` | Stable function reference   | Passing callbacks to memoized children                  |
| `useMemo`     | Cache expensive computation | Heavy computation that doesn't change with every render |

> **Rule of thumb**: `useCallback` + `React.memo` are a pair. One without the other is often useless. `useMemo` is for expensive derived data.

---

[↑ Back to TOC](#table-of-contents)

# Module 5: Advanced Patterns

> **Topics**: Compound Components, Render Props, and HOCs

---

## 5.1 — Compound Components

### The Why

Compound components give consumers **flexibility** over the internal structure of a UI while maintaining encapsulated logic. Think of `<select>` and `<option>` in HTML — they're useless apart but powerful together.

The key idea: a **parent component owns the shared state** and passes it down through **Context** to its sub-components. Neither the parent nor consumer needs to explicitly wire props between siblings.

```mermaid
graph TD
    ACC["<Accordion> Root Component<br/>Owns: isOpen state<br/>Provides: Context"]
    ACC --> CTX["AccordionContext.Provider<br/>{ isOpen, toggleOpen }"]
    CTX --> HDR["<Accordion.Header><br/>consumes: toggleOpen"]
    CTX --> PNL["<Accordion.Panel><br/>consumes: isOpen"]
    HDR -->|"User clicks header"| TOGGLE["toggleOpen() → setIsOpen flip"]
    TOGGLE --> ACC
    PNL -->|"isOpen: true"| SHOW["Renders panel content"]
    PNL -->|"isOpen: false"| HIDE["Returns null (hidden)"]

    style ACC fill:#61dafb,color:#000
    style CTX fill:#6f42c1,color:#fff
    style TOGGLE fill:#28a745,color:#fff
```

> **Why Context not prop drilling?** With Context, `<Accordion.Header>` and `<Accordion.Panel>` can be nested anywhere in the consumer's JSX tree — they don't need to be direct children of `<Accordion>`. The consumer has full layout control.

```jsx
// ============================================================
// ❌ BAD CODE: Rigid component with too many props for configuration
// ============================================================
<Accordion
    title="FAQ"
    content="..."
    isOpen={true}
    headerStyle={{ color: "red" }}
    iconPosition="left"
    onToggle={handleToggle}
    // ... 15 more props for every UI variation
/>
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: Compound Component Pattern with Context
// ============================================================

// 1. Create a context to share state between compound parts
const AccordionContext = React.createContext(null);

// 2. Build the root container that owns the state
function Accordion({ children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const toggleOpen = useCallback(() => setIsOpen((o) => !o), []);

    const contextValue = useMemo(
        () => ({ isOpen, toggleOpen }),
        [isOpen, toggleOpen],
    );

    return (
        <AccordionContext.Provider value={contextValue}>
            <div className="accordion">{children}</div>
        </AccordionContext.Provider>
    );
}

// 3. Build named sub-components that consume the context
function AccordionHeader({ children }) {
    const { isOpen, toggleOpen } = useContext(AccordionContext);
    return (
        <button
            className="accordion-header"
            onClick={toggleOpen}
            aria-expanded={isOpen}
        >
            {children}
            <span>{isOpen ? "▲" : "▼"}</span>
        </button>
    );
}

function AccordionPanel({ children }) {
    const { isOpen } = useContext(AccordionContext);
    return isOpen ? <div className="accordion-panel">{children}</div> : null;
}

// 4. Attach sub-components as static properties (clean API)
Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;

// ============================================================
// Usage: Consumer has full control over structure
// ============================================================
function FAQ() {
    return (
        <Accordion defaultOpen={true}>
            <Accordion.Header>
                <MyCustomIcon /> What is React?
            </Accordion.Header>
            <Accordion.Panel>
                <RichTextContent />
            </Accordion.Panel>
        </Accordion>
    );
}
```

---

## 5.2 — Render Props

### The Why

Render props share **stateful logic** between components by passing a function as a prop. The function receives the shared state and returns JSX. (Before hooks, this was the primary way to share logic. Today, custom hooks are usually preferred, but render props still have their place for rendering-specific sharing.)

The key idea: the component **owns the logic** (state, event handlers) but **delegates rendering** to whoever uses it. It says "here's the data — you decide how to display it."

```mermaid
graph LR
    CONS["Consumer<br/><MouseTracker render={fn}>"] -->|"passes render function"| MT
    MT["MouseTracker<br/>Owns: x, y state<br/>Handles: onMouseMove"] -->|"calls render(x, y)"| FN
    FN["render({ x, y }) → JSX"] -->|"consumer renders"| OUT1["<Cursor x={x} y={y} />"]

    MT2["Same MouseTracker"] -->|"different render function"| OUT2["<Tooltip x={x} y={y} />"]

    style MT fill:#61dafb,color:#000
    style MT2 fill:#61dafb,color:#000
    style OUT1 fill:#28a745,color:#fff
    style OUT2 fill:#28a745,color:#fff
```

> **Same logic, different UI**: Two consumers use the same `<MouseTracker>` but render the position data completely differently. The logic (state tracking) is reused; the rendering is customized.

```jsx
// ============================================================
// ✅ Render Props Pattern: A mouse-position tracker
// ============================================================

// The component owns the logic (mouse position state)
// but delegates rendering to the consumer via a prop function.
function MouseTracker({ render }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }, []);

    return (
        <div onMouseMove={handleMouseMove} style={{ height: "100vh" }}>
            {/* Let the consumer decide how to render position data */}
            {render(position)}
        </div>
    );
}

// Usage: Two completely different UIs sharing the same mouse logic
function App() {
    return <MouseTracker render={({ x, y }) => <Cursor x={x} y={y} />} />;
}
```

---

## 5.3 — Higher-Order Components (HOCs)

### The Why

A HOC is a function that takes a component and returns a new, enhanced component. Useful for cross-cutting concerns like authentication guards, analytics logging, and theming. (Again, custom hooks are often a cleaner modern alternative, but HOCs are still prevalent in many codebases.)

Think of HOCs like electrical adapters: they take an ordinary component and add a layer of capability (auth, logging, theming) around it, without modifying the original component.

```mermaid
graph TD
    IN["Dashboard component<br/>(no auth logic)"] --> HOC["withAuth() function"]
    HOC --> AUTHcomp["AuthenticatedComponent<br/>(wraps Dashboard)"]

    AUTHcomp --> CHK{"> Is user logged in?"}
    CHK -->|"Loading"| SPIN["<Spinner />"]
    CHK -->|"Not logged in"| REDIR["<Navigate to='/login' />"]
    CHK -->|"Logged in"| RENDER["<Dashboard user={user} {...props} />"]

    style HOC fill:#6f42c1,color:#fff
    style RENDER fill:#28a745,color:#fff
    style REDIR fill:#dc3545,color:#fff
```

> **The key benefit**: `Dashboard` component itself has zero auth logic. You can apply `withAuth()` to ANY component — `Settings`, `Profile`, `Admin` — and get the same guard behavior re-used.

```jsx
// ============================================================
// ✅ HOC Pattern: Authentication Guard
// ============================================================

// withAuth is a function that takes a component and returns a new component
function withAuth(WrappedComponent) {
    // The returned component has the auth logic baked in
    function AuthenticatedComponent(props) {
        const { user, isLoading } = useAuthContext();

        if (isLoading) return <Spinner />;
        if (!user) return <Navigate to="/login" />;

        // Pass all original props through to the wrapped component
        return <WrappedComponent {...props} user={user} />;
    }

    // Set a displayName for better debugging in React DevTools
    AuthenticatedComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

    return AuthenticatedComponent;
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);
const ProtectedSettings = withAuth(Settings);
```

---

## Module 5 — Interview Q&A

**Q: What is the Compound Components pattern? Why use it over a single component with many props?**
> Compound Components share implicit state via Context. The parent manages state; sub-components consume it. The result is a flexible, expressive API where consumers control structure. Example: `<Tabs>` + `<Tabs.List>` + `<Tabs.Panel>` vs a `<Tabs items={...} activeTab={...} onChange={...} />` mega-prop component. Compound components are more composable — you can add wrappers, conditionally include panels, reorder tabs — without changing the component's API.

**Q: What is a Higher-Order Component (HOC)? Give a real example.**
> A HOC is a function that takes a component and returns a new component with added behavior. Example: `withAuth(Component)` — wraps any component with an auth check, redirecting to login if unauthenticated. Today, custom hooks mostly replace HOCs for logic sharing, but HOCs still appear in third-party library integrations (Redux `connect`, React Router `withRouter`).

**Q: What is the Render Props pattern? Why did custom hooks largely replace it?**
> Render Props pass a function as a prop; the parent calls that function to let the child control what gets rendered. Example: `<MouseTracker render={(pos) => <Tooltip x={pos.x} y={pos.y} />} />`. Custom hooks replaced it because hooks extract the same stateful logic without wrapper component nesting ("wrapper hell") and are simpler to compose.

**Q: What does `React.cloneElement` do? When would you use it?**
> `React.cloneElement(element, extraProps)` creates a copy of a React element with merged props. Used in component libraries where a parent needs to inject props into children it doesn't own. Example: a `<RadioGroup>` that injects `name` and `onChange` into every `<Radio>` child. Warning: using `cloneElement` creates implicit contracts — newer alternatives (Context, compound components) are preferred.

**Q: Why are hooks preferred over HOCs and Render Props today?**
> (1) No wrapper nesting — HOC stacking creates deeply nested component trees in DevTools. (2) Cleaner composition — multiple custom hooks in one component vs multiple HOC wraps. (3) No naming conflicts — HOC-injected props can collide. (4) Easier to type in TypeScript. (5) Logic is co-located with the component that uses it.

---

## Module 5 Summary

| Pattern                 | Modern Alternative  | Best Use Case                                |
| ----------------------- | ------------------- | -------------------------------------------- |
| **Compound Components** | (Still relevant)    | Flexible UI kits, design systems             |
| **Render Props**        | Custom Hooks        | Sharing rendering logic                      |
| **HOCs**                | Custom Hooks        | Cross-cutting concerns, third-party wrappers |
| **React.Children**      | Compound components | Iterate/clone children at runtime            |

## 5.4 — `React.Children` and `React.cloneElement`

### The Why

When you build a component that receives `children`, you sometimes need to **inspect**, **filter**, or **inject props** into those children at runtime. `React.Children` and `React.cloneElement` are the built-in APIs for this.

**Common use cases**: Tab components that need to know which tab is active, a Form that injects `name` props into its inputs, an animation wrapper injecting delay into each child.

```mermaid
graph TD
    PARENT["Parent component<br/>has {children}"]
    PARENT -->|React.Children.map| INSPECT["Inspect & filter<br/>children"]
    INSPECT -->|React.cloneElement| INJECT["Clone each child<br/>with extra props"]
    INJECT --> RENDER["Render with<br/>injected context"]
    style INJECT fill:#6366f1,color:#fff
```

```jsx
import React from "react";

// ============================================================
// EXAMPLE 1: Tab system that injects isActive into each Tab
// ============================================================
function TabGroup({ children }) {
    const [activeIndex, setActiveIndex] = React.useState(0);

    // React.Children.map works like Array.map but handles null,
    // undefined, nested arrays, and fragments correctly.
    const tabs = React.Children.map(children, (child, index) => {
        // React.cloneElement creates a copy of the element with extra props merged in.
        // The child itself never knows — it just receives isActive and onClick.
        return React.cloneElement(child, {
            isActive: index === activeIndex,
            onClick: () => setActiveIndex(index),
        });
    });

    return <div className="tab-group">{tabs}</div>;
}

function Tab({ label, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={isActive ? "tab tab--active" : "tab"}
        >
            {label}
        </button>
    );
}

// Usage — clean and declarative:
function App() {
    return (
        <TabGroup>
            <Tab label="Overview" />
            <Tab label="Settings" />
            <Tab label="Analytics" />
        </TabGroup>
    );
}
```

### `React.Children` API — All Methods

```jsx
// ---- React.Children.map ----
// Like Array.map but handles null/undefined/nested fragments gracefully.
// Returns an array or null if children is null.
React.Children.map(children, (child, index) => {
    return React.cloneElement(child, { key: index, extraProp: "value" });
});

// ---- React.Children.forEach ----
// Like React.Children.map but returns nothing (for side effects only).
React.Children.forEach(children, (child) => {
    if (child.type !== Tab) {
        throw new Error("TabGroup only accepts <Tab> children");
    }
});

// ---- React.Children.count ----
// Count the number of child elements (handles fragments & arrays correctly).
const count = React.Children.count(children); // Returns a number

// ---- React.Children.only ----
// Asserts that children contains exactly ONE child. Throws if not.
const onlyChild = React.Children.only(children);
// Useful for HOC-style components that require a single child.

// ---- React.Children.toArray ----
// Returns children as a flat array. Keys are preserved and prefixed.
// Use this when you need to sort, slice, or filter children.
const childArray = React.Children.toArray(children);
const firstTwo = childArray.slice(0, 2);
const sortedChildren = childArray.sort((a, b) => a.props.order - b.props.order);
```

### `React.cloneElement` — Props Injection

```jsx
// React.cloneElement(element, extraProps, ...newChildren)
//   element    — the React element to clone (a child component)
//   extraProps — object merged with the element's existing props
//   newChildren — optionally replace the element's children

// EXAMPLE: Inject a `delay` prop into every child for staggered animations
function StaggeredGroup({ children }) {
    return (
        <>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    style: {
                        ...child.props.style, // Preserve existing style
                        animationDelay: `${index * 100}ms`, // Add stagger delay
                    },
                }),
            )}
        </>
    );
}

// EXAMPLE: Wrap children to add a border in debug mode
function DebugBoundary({ children, debug }) {
    if (!debug) return children;
    return React.Children.map(children, (child) =>
        React.cloneElement(child, {
            style: { border: "2px solid red", ...child.props.style },
        }),
    );
}
```

> **Modern Note**: `React.Children` + `cloneElement` is a valid pattern but has a downside — it fails to inject into deeply nested children. If you control the child component, **Context** or the **compound component pattern** is often cleaner. But for library-level components where you DON'T control the children, this API is essential.

---

[↑ Back to TOC](#table-of-contents)

# Module 6: Modern Ecosystem

> **Topics**: Server Components, Suspense, and Transitions

---

## 6.1 — React Server Components (RSC)

### The Why

Traditional React renders everything on the **client**. This means:

- Large JavaScript bundles shipped to the user
- Waterfalls: fetch data → render component → fetch more data → ...
- Sensitive logic (DB queries, API keys) exposed to the client

RSC allows components to render on the **server**, with zero JavaScript sent to the client.

### The Mental Model

```mermaid
graph LR
    subgraph Server
        SC["Server Component<br/>(async function)<br/>• Direct DB access<br/>• No useState/useEffect<br/>• Zero JS shipped"]
    end
    subgraph Client
        CC["Client Component<br/>('use client' directive)<br/>• useState, useEffect<br/>• Event handlers<br/>• Browser APIs"]
    end

    SC -->|Serialized RSC Payload| CC
    SC -->|Can import and render| CC
    CC -->|CANNOT import| SC
```

```jsx
// ============================================================
// ✅ Server Component: Async, direct DB access, zero client JS
// ============================================================

// No 'use client' directive = Server Component by default (in Next.js App Router)
async function UserProfilePage({ userId }) {
    // Direct database access — this code NEVER ships to the client
    const user = await db.users.findUnique({ where: { id: userId } });

    return (
        <div>
            <h1>{user.name}</h1>
            {/* Server component renders a client component for interactivity */}
            <FollowButton userId={user.id} />
        </div>
    );
}

// ============================================================
// ✅ Client Component: Handles interaction
// ============================================================
("use client"); // This directive marks it as a Client Component

function FollowButton({ userId }) {
    const [isFollowing, setIsFollowing] = useState(false);

    return (
        <button onClick={() => setIsFollowing((f) => !f)}>
            {isFollowing ? "Unfollow" : "Follow"}
        </button>
    );
}
```

---

## 6.2 — Suspense

### The Why

`Suspense` lets you declaratively specify loading states for any part of the component tree — whether waiting for code to load (lazy loading) or data to resolve (with RSC or data-fetching libraries).

```jsx
// ============================================================
// ✅ Suspense for lazy loading + data fetching
// ============================================================
import { lazy, Suspense } from "react";

// Code-splitting: HeavyChart is only loaded when needed
const HeavyChart = lazy(() => import("./HeavyChart"));

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* While HeavyChart's JS is loading, show the fallback */}
            <Suspense fallback={<Skeleton />}>
                <HeavyChart />
            </Suspense>

            {/* Nested Suspense boundaries for granular loading states */}
            <Suspense fallback={<TableSkeleton />}>
                <DataTable /> {/* This might be an async Server Component */}
            </Suspense>
        </div>
    );
}
```

### `React.lazy` + Dynamic Import — Complete Code Splitting Guide

**What is code splitting?** By default, Vite/Webpack bundles your entire app into one JS file. Code splitting breaks it into smaller chunks — the browser only downloads what's needed for the current page. `React.lazy` is the React-native way to do this.

```jsx
import { lazy, Suspense, useState } from "react";

// ---- BASIC LAZY IMPORT ----
// The component file is only downloaded when React is about to render it.
// The argument must be a FUNCTION that returns a dynamic import — not the import itself.
const AdminPanel = lazy(() => import("./pages/AdminPanel"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const AnalyticsDashboard = lazy(() => import("./pages/AnalyticsDashboard"));

// ---- NAMED EXPORTS (not default export) ----
// If the component is a named export, extract it inside the lazy callback:
const PieChart = lazy(() =>
    import("./charts").then((mod) => ({ default: mod.PieChart })),
);

// ---- LAZY WITH ROUTE-BASED SPLITTING (most common pattern) ----
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        // One Suspense boundary wraps all routes — shows a page-level spinner
        <Suspense fallback={<PageSpinner />}>
            <Routes>
                <Route path="/" element={<Home />} />{" "}
                {/* Eager-loaded: always tiny */}
                <Route path="/admin" element={<AdminPanel />} />{" "}
                {/* Lazy: only for admins */}
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/analytics" element={<AnalyticsDashboard />} />
            </Routes>
        </Suspense>
    );
}

// ---- CONDITIONAL LAZY LOADING ----
// Load a heavy component only when the user actually wants it
function EditorPage() {
    const [showEditor, setShowEditor] = useState(false);

    // Declare the lazy import OUTSIDE the component (module level) — not inside a function!
    // If declared inside, a new lazy() is created every render, breaking the cache.
    return (
        <div>
            <button onClick={() => setShowEditor(true)}>
                Open Rich Text Editor
            </button>
            {showEditor && (
                <Suspense fallback={<div>Loading editor...</div>}>
                    <RichTextEditor />{" "}
                    {/* ~200KB editor downloaded only on button click */}
                </Suspense>
            )}
        </div>
    );
}
// ⚠️ Always define lazy components at module scope:
const RichTextEditor = lazy(() => import("./RichTextEditor")); // ✅ correct placement

// ---- ERROR HANDLING FOR LAZY LOADS ----
// If the network fails during chunk download, wrap with an ErrorBoundary:
function SafeLazy({ component: Component, fallback }) {
    return (
        <ErrorBoundary fallback={<ChunkLoadError />}>
            <Suspense fallback={fallback}>
                <Component />
            </Suspense>
        </ErrorBoundary>
    );
}
```

**What goes in each bundle chunk?**

```mermaid
graph TD
    BUNDLE["main.js<br/>(downloaded immediately)"]
    BUNDLE --> HOME["Home · NavBar · Login<br/>(always needed)"]

    CHUNK1["admin.chunk.js<br/>(downloaded only if /admin)"]
    CHUNK2["analytics.chunk.js<br/>(downloaded only if /analytics)"]
    CHUNK3["editor.chunk.js<br/>(downloaded on button click)"]

    HOME -.->|lazy()| CHUNK1
    HOME -.->|lazy()| CHUNK2
    HOME -.->|lazy()| CHUNK3

    style BUNDLE fill:#6366f1,color:#fff
    style CHUNK1 fill:#28a745,color:#fff
    style CHUNK2 fill:#28a745,color:#fff
    style CHUNK3 fill:#28a745,color:#fff
```

> **Rule of thumb**: Lazy-load anything that is not visible on initial page load — admin pages, dashboards, modals with heavy content, rich text editors, large chart libraries.

---

## 6.3 — Transitions (`useTransition`)

### The Why

Not all state updates are equal. Typing in a search box needs to feel **instant** (high priority). Rendering 10,000 filtered results can be **deferred** (low priority). `useTransition` lets you tell React which updates are non-urgent.

Under the hood, this uses the React **Scheduler** — the same mechanism that powers Concurrent Mode. High-priority updates (typing, clicking) interrupt low-priority updates (background rendering).

```jsx
// ============================================================
// ❌ BAD CODE: Slow filter blocks the input — "janky" UX
// ============================================================
function SearchPage({ items }) {
    const [query, setQuery] = useState("");

    // Filtering 100,000 items on every keystroke blocks the main thread.
    // The input itself feels laggy because re-render must complete before
    // the browser can paint the new input character.
    const filtered = items.filter((i) => i.name.includes(query));

    return (
        <>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <HugeList items={filtered} />
        </>
    );
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: useTransition to keep input responsive
// ============================================================
function SearchPage({ items }) {
    const [query, setQuery] = useState("");
    const [deferredQuery, setDeferredQuery] = useState("");
    const [isPending, startTransition] = useTransition();

    function handleChange(e) {
        // 1. Update the input immediately — HIGH PRIORITY
        setQuery(e.target.value);

        // 2. Mark the heavy list filter as a LOW-PRIORITY transition.
        // React will start this work, but will interrupt it if a higher-priority
        // update (e.g., another keystroke) comes in.
        startTransition(() => {
            setDeferredQuery(e.target.value);
        });
    }

    // Only recompute filter with the deferred (possibly stale) query
    const filtered = useMemo(
        () => items.filter((i) => i.name.includes(deferredQuery)),
        [items, deferredQuery],
    );

    return (
        <>
            <input value={query} onChange={handleChange} />
            {/* Show a visual indicator while the transition is pending */}
            {isPending && <span>Updating list...</span>}
            <HugeList items={filtered} />
        </>
    );
}
```

### The React Scheduler: How Priority Works

```mermaid
graph TD
    A[State Update Triggered] --> B{What priority lane?}
    B -->|SyncLane<br/>Clicks, Inputs| C[Run synchronously<br/>before next paint]
    B -->|InputContinuousLane<br/>Drag, Scroll| D[Run before next paint<br/>but can be batched]
    B -->|DefaultLane<br/>Network responses| E[Run soon<br/>non-blocking]
    B -->|TransitionLane<br/>useTransition| F[Run when idle<br/>can be interrupted]
    B -->|IdleLane<br/>Offscreen| G[Run only when<br/>browser is idle]
```

---

## Module 6 — Interview Q&A

**Q: What are React Server Components (RSC)? How are they different from SSR?**

| | SSR | RSC |
|---|---|---|
| Rendered on | Server, per request | Server (build time or request time) |
| JS sent to client | Full bundle + hydration | Zero JS for server components |
| Can use hooks? | Yes (after hydration) | No (`useState`, `useEffect` not allowed) |
| Data fetching | `getServerSideProps` / loaders | Direct `async/await` in component body |
| DB access | Via API layer | Directly (no fetch needed) |
| Interactive? | After hydration | Only Client Components are interactive |

> One-line: "SSR ships a full JS bundle and hydrates it. RSC ships zero JS for server components — only Client Components (`'use client'`) ship JavaScript."

**Q: What is `Suspense` and what problems does it solve?**
> `Suspense` is a declarative loading boundary. It catches components that aren't ready yet (lazy-loaded code, async data) and shows a `fallback` UI until they are. Without Suspense: you scatter `isLoading` checks across every component. With Suspense: loading states are colocated with the layout, not the data-fetching logic.

**Q: What is `useTransition`? When would you use it?**
> `useTransition` marks a state update as "non-urgent". React prioritizes urgent updates (keystrokes, clicks) and defers the transition update until the browser is idle. Use it when a state change triggers an expensive re-render that would make the UI feel sluggish — e.g., filtering a large list, navigating between tabs with heavy components. The UI stays responsive; the expensive update happens in the background.

**Q: What's the most important new feature in React 19?**
> The `use()` hook — it can read a Promise directly in render (React suspends until it resolves), and read Context anywhere (not just in component bodies). Plus `useActionState` for form state management, `useOptimistic` for instant UI feedback before server confirmation, and ref-as-prop (no more `forwardRef` boilerplate).

---

## Module 6 Summary

| Feature               | Key Takeaway                                                         |
| --------------------- | -------------------------------------------------------------------- |
| **Server Components** | Run on server, zero JS to client, direct DB access, can't use hooks. |
| **Client Components** | `'use client'` directive, can use all hooks, handles interactivity.  |
| **Suspense**          | Declarative loading boundaries for code splitting and data fetching. |
| **useTransition**     | Mark updates as non-urgent, keeps UI responsive during heavy work.   |
| **Scheduler**         | Priority lanes determine when React processes each update.           |
| **React.lazy**        | Route/component-level code splitting, bundle downloaded on demand.   |

---

## 6.4 — React 19: What's New

React 19 (released December 2024) is the biggest React update in years. It ships new hooks, simplifies patterns, and makes form handling a first-class citizen.

```mermaid
graph LR
    R19["React 19"]
    R19 --> USE["use() hook<br/>Reads Promises & Context"]
    R19 --> ACTIONS["Actions & useActionState<br/>Built-in async form handling"]
    R19 --> OPT["useOptimistic<br/>Instant UI before server confirms"]
    R19 --> FC["ref as prop<br/>No more forwardRef"]
    R19 --> META["Document metadata<br/><title>, <meta> anywhere"]
    R19 --> COMPILER["React Compiler<br/>Auto-memoization"]
    style R19 fill:#6366f1,color:#fff
```

### `use()` — Read a Promise or Context Anywhere

`use()` is a new hook that can be called **inside conditionals and loops** (unlike all other hooks). It reads a Promise (suspending until resolved) or a Context value:

```jsx
import { use, Suspense, createContext } from "react";

// ---- 1. use() with a Promise ----
// Create the promise OUTSIDE the component (not inside render)
const userPromise = fetch("/api/user").then((r) => r.json());

function UserCard() {
    // use() suspends this component until the promise resolves.
    // The nearest <Suspense> shows the fallback while waiting.
    const user = use(userPromise);
    return <div>{user.name}</div>;
}

function App() {
    return (
        <Suspense fallback={<Skeleton />}>
            <UserCard /> {/* Suspended until userPromise resolves */}
        </Suspense>
    );
}

// ---- 2. use() with Context — can be called conditionally ----
const ThemeContext = createContext("light");

function ConditionalThemeReader({ isLoggedIn }) {
    if (!isLoggedIn) return <p>Please log in</p>;

    // This is valid! use() can be inside an if-block, unlike useContext()
    const theme = use(ThemeContext);
    return <div className={theme}>Welcome!</div>;
}
```

### `useActionState` — Async Form Actions (replaces setState + try/catch)

Before React 19, handling form submissions required `useState` for loading state, `useState` for errors, and a `try/catch` block. `useActionState` wraps all of this:

```jsx
import { useActionState } from "react";

// An "action" is an async function that receives the previous state and form data
async function submitContact(prevState, formData) {
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate
    if (!email.includes("@")) {
        return { error: "Invalid email", success: false };
    }

    try {
        await api.post("/contact", { email, message });
        return { error: null, success: true };
    } catch (e) {
        return { error: "Failed to send. Try again.", success: false };
    }
}

function ContactForm() {
    const [state, formAction, isPending] = useActionState(
        submitContact, // The async action function
        { error: null, success: false }, // Initial state
    );
    // state    = result returned by the action (or initial state)
    // formAction = pass this to <form action={...}>
    // isPending  = true while the action is in progress

    if (state.success) return <p>Message sent!</p>;

    return (
        <form action={formAction}>
            <input name="email" type="email" required />
            <textarea name="message" required />
            {state.error && <p className="text-red-500">{state.error}</p>}
            <button type="submit" disabled={isPending}>
                {isPending ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
```

### `useOptimistic` — Show Result Before Server Confirms

Show the expected result of a mutation immediately, then auto-revert if the server fails:

```jsx
import { useOptimistic, useState } from "react";

function MessageList({ initialMessages }) {
    const [messages, setMessages] = useState(initialMessages);

    // useOptimistic(currentState, updateFn)
    // → returns [optimisticState, addOptimistic]
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (currentMessages, newMessage) => [
            ...currentMessages,
            { ...newMessage, sending: true }, // Mark as "sending"
        ],
    );

    async function sendMessage(formData) {
        const text = formData.get("message");

        // 1. Immediately show the message with sending=true
        addOptimisticMessage({ id: Date.now(), text });

        try {
            // 2. Send to server
            const saved = await api.post("/messages", { text });
            // 3. On success: update real state (removes the optimistic entry)
            setMessages((prev) => [...prev, saved]);
        } catch {
            // 3. On failure: optimistic state is automatically reverted
            alert("Failed to send");
        }
    }

    return (
        <div>
            {optimisticMessages.map((msg) => (
                <div key={msg.id} style={{ opacity: msg.sending ? 0.5 : 1 }}>
                    {msg.text}
                    {msg.sending && " (sending...)"}
                </div>
            ))}
            <form action={sendMessage}>
                <input name="message" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
```

### `ref` as a Regular Prop — No More `forwardRef`

In React 19, `ref` is just a prop. You no longer need to wrap components in `forwardRef`:

```jsx
// React 18 — required forwardRef wrapper:
const Input = forwardRef((props, ref) => <input ref={ref} {...props} />);

// React 19 — ref is just a prop:
function Input({ ref, ...props }) {
    return <input ref={ref} {...props} />;
}

// Usage is identical:
function Form() {
    const inputRef = useRef(null);
    return <Input ref={inputRef} placeholder="Focus me" />;
}
```

### Document Metadata — `<title>` Inside Components

In React 19, you can render `<title>`, `<meta>`, and `<link>` tags directly inside any component. React hoists them to `<head>` automatically — no `react-helmet` needed:

```jsx
function ProductPage({ product }) {
    return (
        <>
            {/* React automatically moves these to <head> */}
            <title>{product.name} — MyShop</title>
            <meta name="description" content={product.description} />
            <link
                rel="canonical"
                href={`https://myshop.com/products/${product.slug}`}
            />

            {/* The rest of the page renders normally */}
            <h1>{product.name}</h1>
            <p>{product.price}</p>
        </>
    );
}
```

> **React Compiler (experimental)**: React 19 also ships the React Compiler, which automatically adds memoization (`memo`, `useMemo`, `useCallback`) where needed, analyzed statically at build time. When fully stable, you can remove most manual memoization from your code.

---

# Quick Reference: Rules of Hooks

These rules exist because hooks depend on a **stable, ordered linked list** on the Fiber node.

| Rule                                     | Why                                                         |
| ---------------------------------------- | ----------------------------------------------------------- |
| Only call hooks at the **top level**     | Ensures the linked list is always the same length and order |
| Only call hooks from **React functions** | React must control the Fiber context when hooks are called  |
| Hook order must be **deterministic**     | React identifies hooks by position, not name                |

```jsx
// ✅ ALL hooks at top level, called unconditionally
function MyComponent({ condition }) {
    const [a] = useState(0); // Always Hook #1
    const [b] = useState(""); // Always Hook #2
    const memoVal = useMemo(() => expensiveCalc(a), [a]); // Always Hook #3

    // Conditions go INSIDE the hook's usage or render logic
    const display = condition ? a : b;
    return <div>{display}</div>;
}
```

---

# Architecture Cheat Sheet

```mermaid
graph TD
    subgraph "Your Code"
        JSX["JSX"] -->|compile| CE["React.createElement()"]
        CE -->|returns| VD["Virtual DOM<br/>(Plain JS Objects)"]
    end

    subgraph "React Internals"
        VD -->|processed into| Fiber["Fiber Tree<br/>(Work Units)"]
        Fiber -->|Render Phase| Reconciler["Reconciler<br/>(Diff old vs new)"]
        Reconciler -->|creates| Effects["Effect List<br/>(What changed)"]
        Effects -->|Commit Phase| DOM["Real DOM"]
    end

    subgraph "Scheduling"
        State["setState()"] -->|enqueues| Scheduler["Scheduler<br/>(Priority Lanes)"]
        Scheduler -->|schedules| Reconciler
    end
```

---

[↑ Back to TOC](#table-of-contents)

# Module 7: Hooks — Complete Guide

> **Topics**: `useReducer`, `useRef`, `useImperativeHandle`, `useContext`, `useLayoutEffect`, `useId`, `useDeferredValue` + Custom Hooks

---

## 7.1 — `useReducer`: State Machine for Complex State

### The Why

`useState` is great for independent, simple values. When you have **complex state transitions** where the next state depends on the previous one in non-trivial ways — or when multiple sub-values are always updated together — `useReducer` gives you a predictable, testable state machine.

> **Mental Model**: `useReducer` is React's built-in Redux. It follows the `(state, action) => newState` pattern.

**The core idea in one sentence**: Instead of calling `setItems()`, `setTotal()`, and `setIsLoading()` separately (which can get out of sync), you dispatch a **single named action** like `{ type: 'ADD_ITEM', payload: item }` and the reducer handles ALL the related state changes atomically in one pure function.

### How the Data Flows

```mermaid
sequenceDiagram
    participant User
    participant Component
    participant Dispatch
    participant Reducer
    participant State

    User->>Component: Click "Add to Cart"
    Component->>Dispatch: dispatch({ type: 'ADD_ITEM', payload: item })
    Dispatch->>Reducer: cartReducer(currentState, action)
    Reducer->>Reducer: Pure function: computes newState
    Note over Reducer: No mutation! Returns completely new object
    Reducer->>State: Returns { items: [...], total: 29.99 }
    State->>Component: React re-renders with new state
    Component->>User: Cart updated�
```

**Why this is better than multiple `useState` calls:**

- Every state transition is **named** (`ADD_ITEM`, `APPLY_DISCOUNT`) — self-documenting
- All related updates happen **atomically** — no possibility of inconsistent state mid-update
- The reducer is a **pure function** — trivially unit-testable without React
- State history is **traceable** — Redux DevTools connects to any `useReducer`

### When to Prefer `useReducer` over `useState`

| Scenario                                 | Use          |
| ---------------------------------------- | ------------ |
| Simple toggle / counter                  | `useState`   |
| Multiple related values updated together | `useReducer` |
| Next state depends on complex logic      | `useReducer` |
| State transitions need to be unit tested | `useReducer` |
| Sharing dispatch via Context             | `useReducer` |

### Internal Mechanics

`useReducer` is stored on the Fiber's hook linked list exactly like `useState`. In fact, in the React source, `useState` is implemented _as a special case of `useReducer`_ with a built-in `basicStateReducer`:

```js
// From React source (ReactFiberHooks.js) — simplified
function useState(initialState) {
    return useReducer(basicStateReducer, initialState);
}
function basicStateReducer(state, action) {
    return typeof action === "function" ? action(state) : action;
}
```

### Code Lab

```jsx
// ============================================================
// ❌ BAD CODE: Multiple useState calls for related state — hard to manage
// ============================================================
function ShoppingCart() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    function addItem(item) {
        // Must update 3 pieces of state manually — easy to forget one
        // and end up with inconsistent state (e.g., items updated but total not)
        setItems((prev) => [...prev, item]);
        setTotal((prev) => prev + item.price);
        // Forgot to handle discount recalculation!
    }
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: useReducer for related state transitions
// ============================================================

// 1. Define the initial state as a single object
const initialState = {
    items: [],
    total: 0,
    discount: 0,
    isLoading: false,
};

// 2. Define the reducer — a PURE function, easy to unit test in isolation
function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const newItems = [...state.items, action.payload];
            const newTotal = newItems.reduce((sum, i) => sum + i.price, 0);
            // All related fields updated atomically — no inconsistency possible
            return {
                ...state,
                items: newItems,
                total: newTotal * (1 - state.discount),
            };
        }
        case "APPLY_DISCOUNT":
            return {
                ...state,
                discount: action.payload,
                total: state.total * (1 - action.payload),
            };
        case "SET_LOADING":
            return { ...state, isLoading: action.payload };
        case "CLEAR_CART":
            return initialState;
        default:
            // Always handle unknown actions — prevents silent state corruption
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

function ShoppingCart() {
    // 3. Dispatch actions — descriptive, traceable, debuggable
    const [state, dispatch] = useReducer(cartReducer, initialState);

    function handleAddItem(item) {
        dispatch({ type: "ADD_ITEM", payload: item });
    }

    function handleApplyPromo(code) {
        // Async action — fetch the discount, then dispatch
        dispatch({ type: "SET_LOADING", payload: true });
        fetchDiscount(code).then((rate) => {
            dispatch({ type: "APPLY_DISCOUNT", payload: rate });
            dispatch({ type: "SET_LOADING", payload: false });
        });
    }

    return (
        <div>
            {state.isLoading && <Spinner />}
            <p>Total: ${state.total.toFixed(2)}</p>
            <ItemList items={state.items} onAdd={handleAddItem} />
        </div>
    );
}
```

### Scenario: `useReducer` + `useContext` = Mini Redux

```jsx
// A common, powerful pattern: global state without a library

// 1. Create context for state and dispatch separately
// (splitting them prevents consumers that only need dispatch from re-rendering on state changes)
const CartStateContext = React.createContext(null);
const CartDispatchContext = React.createContext(null);

// 2. Provider wraps the app
function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
}

// 3. Custom hooks for consumption — clean, type-safe API
function useCartState() {
    const ctx = useContext(CartStateContext);
    if (!ctx) throw new Error("useCartState must be used within CartProvider");
    return ctx;
}
function useCartDispatch() {
    const ctx = useContext(CartDispatchContext);
    if (!ctx)
        throw new Error("useCartDispatch must be used within CartProvider");
    return ctx;
}

// 4. Any component deep in the tree can access cart state/dispatch
function CheckoutButton() {
    const { total } = useCartState();
    const dispatch = useCartDispatch();
    return (
        <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Checkout — ${total.toFixed(2)}
        </button>
    );
}
```

---

## 7.2 — `useContext`: Dependency Injection for React

### The Why

Props must be passed through every intermediate component even if those components don't use them. This is **prop drilling** — a maintenance nightmare. `useContext` lets any component in the tree subscribe to a value without threading it through every layer.

Think of Context like a **walkie-talkie broadcast**: a Provider station broadcasts a value to the entire area, and any Consumer anywhere in range can tune in and receive it — without routing it manually through every building in between.

### The Prop Drilling Problem (Visualized)

```mermaid
graph TD
    subgraph "Without Context - Prop Drilling"
        APP1["<App><br/>has: theme"] -->|"theme, setTheme"| LAY1["<Layout><br/>doesn't use theme"]
        LAY1 -->|"theme, setTheme"| SID1["<Sidebar><br/>doesn't use theme"]
        SID1 -->|"theme, setTheme"| TOG1["<ThemeToggle><br/>ACTUALLY uses theme"]
        style LAY1 fill:#dc3545,color:#fff
        style SID1 fill:#dc3545,color:#fff
    end

    subgraph "With Context - No Prop Drilling"
        APP2["<ThemeProvider><br/>broadcasts: theme"] --> LAY2["<Layout><br/>no props needed"]
        LAY2 --> SID2["<Sidebar><br/>no props needed"]
        SID2 --> TOG2["<ThemeToggle><br/>useTheme() reads directly"]
        APP2 -.->|"Context broadcast"| TOG2
        style APP2 fill:#28a745,color:#fff
        style TOG2 fill:#28a745,color:#fff
    end
```

### Internal Mechanics

When you call `useContext(MyContext)`, React walks **up** the Fiber tree from the current component, finds the nearest `<MyContext.Provider>`, and returns its `value`. The component is automatically subscribed — any time the provider's `value` reference changes, all consumers re-render.

> **Critical Performance Note**: Context comparison uses `Object.is()`. If you pass a new object literal `value={{ user, theme }}` on every render, ALL consumers re-render on every parent render, even if `user` and `theme` didn't change. Always `useMemo` the context value.

### Code Lab

```jsx
// ============================================================
// ❌ BAD CODE: Prop drilling across 4 levels
// ============================================================
function App() {
    const [theme, setTheme] = useState("light");
    // Must pass theme and setTheme through every layer...
    return <Layout theme={theme} setTheme={setTheme} />;
}
function Layout({ theme, setTheme }) {
    return <Sidebar theme={theme} setTheme={setTheme} />;
}
function Sidebar({ theme, setTheme }) {
    return <ThemeToggle theme={theme} setTheme={setTheme} />;
}
function ThemeToggle({ theme, setTheme }) {
    // This is the ONLY component that actually needed these!
    return (
        <button
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        >
            {theme}
        </button>
    );
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: useContext eliminates prop drilling
// ============================================================
const ThemeContext = React.createContext(null);

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = useCallback(
        () => setTheme((t) => (t === "light" ? "dark" : "light")),
        [],
    );

    // Memoize the value object to prevent unnecessary consumer re-renders
    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

// Custom hook with guard — much safer than raw useContext
function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
    return ctx;
}

// Now any component can access theme directly — no prop drilling
function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return <button onClick={toggleTheme}>{theme}</button>;
}

// Intermediate components are completely clean
function Layout({ children }) {
    return <div>{children}</div>;
}
function Sidebar({ children }) {
    return <nav>{children}</nav>;
}
```

### Context vs. State Management Libraries

| Factor                             | Context                      | Redux/Zustand              |
| ---------------------------------- | ---------------------------- | -------------------------- |
| Frequent updates (every keystroke) | ❌ Can cause many re-renders | ✅ Optimized subscriptions |
| Infrequent updates (theme, auth)   | ✅ Perfect fit               | Overkill                   |
| Complex async logic                | ❌ DIY                       | ✅ Built-in middleware     |
| Bundle size                        | ✅ Zero cost                 | Small cost                 |

---

## 7.3 — `useRef`: Mutable Container & DOM Access

### The Why

`useRef` solves two distinct problems:

1. **DOM access**: Imperatively interact with DOM nodes (focus, scroll, measure).
2. **Mutable container**: Store a value that persists across renders but does NOT trigger a re-render when changed. Like an instance variable on a class.

Think of `useRef` as a **box with a `.current` slot**. React hands you the same box on every render. You can put anything in the slot and read it back, but changing the slot's contents is invisible to React — it won't cause a re-render.

### The Two Use Cases Side-by-Side

```mermaid
graph TD
    subgraph "Use Case 1: DOM Access"
        A["const ref = useRef(null)"] --> B["<input ref={ref} />"]
        B --> C["React sets ref.current = input DOM node"]
        C --> D["ref.current.focus() / .scrollIntoView() / .getBoundingClientRect()"]
        style D fill:#61dafb,color:#000
    end

    subgraph "Use Case 2: Mutable Instance Variable (no re-render)"
        E["const timerRef = useRef(null)"] --> F["timerRef.current = setInterval(...)"]
        F --> G["clearInterval(timerRef.current)"]
        G --> H["No re-render triggered  Persists across renders"]
        style H fill:#28a745,color:#fff
    end
```

> **The golden rule of `useRef`**: If you need React to react to the change, use `useState`. If you just need to remember a value or access a DOM node without triggering a render, use `useRef`.

### Internal Mechanics

`useRef` returns `{ current: initialValue }` — a plain object whose reference is stable across the entire lifetime of the component. It's stored on the Fiber like any hook, but React never reads `.current` for rendering decisions. Changing `.current` is a side effect that's invisible to React.

```mermaid
flowchart LR
    A["useRef(0)"] -->|Returns| B["{ current: 0 }"]
    B -->|Stable reference| C["Same object on every render"]
    C -->|Mutating .current| D["Does NOT cause re-render"]
    C -->|Reading .current| E["Always gets latest value<br/>(no stale closure)"]
```

### Code Lab: DOM Access

```jsx
// ============================================================
// ❌ BAD CODE: Using state for focus management — wasteful re-render
// ============================================================
function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);

    // This causes a re-render just to focus the input!
    useEffect(() => {
        if (isFocused) {
            document.querySelector("#search").focus(); // Fragile querySelector
        }
    }, [isFocused]);

    return <input id="search" onFocus={() => setIsFocused(true)} />;
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: useRef for direct DOM imperative access
// ============================================================
function SearchBar() {
    // inputRef.current will point to the actual <input> DOM node
    const inputRef = useRef(null);

    function focusInput() {
        // Direct DOM access — no re-render triggered
        inputRef.current?.focus();
    }

    // Auto-focus on mount
    useEffect(() => {
        inputRef.current?.focus();
    }, []); // Empty deps: run once on mount

    return (
        <div>
            {/* Attach ref to the DOM element */}
            <input ref={inputRef} type="text" placeholder="Search..." />
            <button onClick={focusInput}>Focus</button>
        </div>
    );
}
```

### Code Lab: Mutable Instance Variable

```jsx
// ============================================================
// ❌ BAD CODE: Using state to store a timer ID — causes extra re-render
// ============================================================
function Stopwatch() {
    const [timerId, setTimerId] = useState(null); // Re-renders when set!
    const [elapsed, setElapsed] = useState(0);

    function start() {
        const id = setInterval(() => setElapsed((e) => e + 1), 1000);
        setTimerId(id); // Unnecessary re-render
    }
    function stop() {
        clearInterval(timerId);
        setTimerId(null);
    }
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: useRef to store mutable values that don't affect render
// ============================================================
function Stopwatch() {
    // timerRef persists across renders, but changing it won't cause one
    const timerRef = useRef(null);
    const [elapsed, setElapsed] = useState(0);

    function start() {
        // Prevent double-starting
        if (timerRef.current !== null) return;
        timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    }

    function stop() {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    // Cleanup on unmount
    useEffect(() => () => clearInterval(timerRef.current), []);

    return (
        <div>
            <p>{elapsed}s</p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
}
```

### Scenario: Tracking Previous State Value

```jsx
// A common pattern: compare current value to its previous render's value
function usePrevious(value) {
    const prevRef = useRef(undefined);
    useEffect(() => {
        // This runs AFTER render, so prevRef.current holds the PREVIOUS value
        // during the render phase, and updates to current AFTER paint
        prevRef.current = value;
    });
    return prevRef.current;
}

function PriceDisplay({ price }) {
    const prevPrice = usePrevious(price);
    const direction = price > prevPrice ? "↑" : price < prevPrice ? "↓" : "→";
    return (
        <span>
            {direction} ${price}
        </span>
    );
}
```

---

## 7.4 — `useImperativeHandle`: Controlled Ref Exposure

### The Why

By default, you can't attach a `ref` to a function component — there's no instance to attach to. `forwardRef` + `useImperativeHandle` let you:

1. Accept a ref from a parent.
2. Control _exactly_ what the parent can do with it — expose only a specific imperative API, not the entire DOM node.

Think of it as **a reception desk**: the parent can't walk into the back office (raw DOM) directly. The reception desk (`useImperativeHandle`) only gives them access to specific services: "I can book an appointment" (`.play()`), "I can cancel" (`.pause()`). The back office stays protected.

### How the API Exposure Works

```mermaid
graph TD
    PARENT["MoviePage (parent)"] -->|"const playerRef = useRef()"| REF["ref object"]
    REF -->|"<VideoPlayer ref={playerRef} />"| FORWARD["forwardRef wrapper"]
    FORWARD -->|"useImperativeHandle(ref, () => ({ play, pause }))"| API["Exposes LIMITED API:<br/>{ play(), pause(), seek() }"]
    API --> PARENT

    FORWARD --> RAW["Internal videoRef = useRef()<br/>Actual <video> DOM node"]
    RAW -->|"NEVER exposed to parent"| PROTECTED["Protected ✔"]

    style API fill:#28a745,color:#fff
    style PROTECTED fill:#dc3545,color:#fff
```

> **Why not just forward the raw ref?** If you expose the raw `<video>` DOM node, the parent can call ANY DOM method — `videoRef.current.remove()`, or access `.innerHTML`, or do anything else. `useImperativeHandle` lets you define a **contract**: here are the exact methods I support, nothing else.

> **When to use**: Mostly for reusable UI library components (custom inputs, players, modals, canvas). Don't use it in regular app code — prefer props and callbacks.

### Code Lab

```jsx
// ============================================================
// ✅ BEST PRACTICE: Expose a controlled imperative API via useImperativeHandle
// ============================================================
import { forwardRef, useRef, useImperativeHandle } from "react";

// The child component controls what the parent can call
const VideoPlayer = forwardRef(function VideoPlayer({ src }, ref) {
    const videoRef = useRef(null);

    // Expose ONLY play and pause — parent cannot access the raw DOM node
    useImperativeHandle(
        ref,
        () => ({
            play() {
                videoRef.current.play();
            },
            pause() {
                videoRef.current.pause();
            },
            seek(time) {
                videoRef.current.currentTime = time;
            },
            // parent CANNOT access videoRef.current directly — good encapsulation!
        }),
        [],
    ); // deps: recreate the handle only when deps change

    return <video ref={videoRef} src={src} />;
});

// Parent uses the limited imperativeAPI
function MoviePage() {
    const playerRef = useRef(null);

    return (
        <div>
            <VideoPlayer ref={playerRef} src="/movie.mp4" />
            <button onClick={() => playerRef.current.play()}>Play</button>
            <button onClick={() => playerRef.current.pause()}>Pause</button>
            <button onClick={() => playerRef.current.seek(120)}>
                Skip to 2min
            </button>
        </div>
    );
}
```

---

## 7.5 — `useLayoutEffect`: Synchronous Post-DOM Effect

### The Why

`useEffect` runs **after** the browser has painted. For most cases, this is fine. But if your effect reads layout information (element size, position) and immediately sets state based on it, the user sees a flicker: the first paint is "wrong", then the effect corrects it.

`useLayoutEffect` fires **synchronously after DOM mutations but before the browser paints** — the same timing as `componentDidMount`/`componentDidUpdate` in class components.

**Simple analogy**: Imagine painting a wall. `useEffect` is like noticing a smudge AFTER the guests arrive and fixing it while they watch. `useLayoutEffect` is like noticing and fixing the smudge before opening the door — guests never see the imperfection.

### The Paint Timing Difference

```mermaid
sequenceDiagram
    participant React
    participant DOM
    participant useLayoutEffect as useLayoutEffect
    participant Browser
    participant useEffect as useEffect
    participant User

    React->>DOM: Mutate DOM (state change applied)
    React->>useLayoutEffect: Runs SYNCHRONOUSLY — blocks paint
    useLayoutEffect->>DOM: Reads measurements, adjusts layout
    DOM->>Browser: Browser paints
    Browser->>User: User sees CORRECT final state (no flicker)
    React->>useEffect: Runs asynchronously AFTER paint
    Note over useEffect: Safe for data fetching, subscriptions
```

> **Rule of thumb**: Start with `useEffect`. Only switch to `useLayoutEffect` if you see a visual flicker caused by a measurement happening after paint. On the server (SSR), `useLayoutEffect` is skipped entirely — React warns you to use `useEffect` for SSR-compatible code.

### Code Lab: Tooltip Positioning (Flicker Fix)

```jsx
// ============================================================
// ❌ BAD CODE: useEffect for tooltip positioning — visible flicker
// ============================================================
function Tooltip({ text, targetRef }) {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        // Runs AFTER paint. User sees tooltip at (0,0) for one frame, THEN it moves.
        const rect = targetRef.current.getBoundingClientRect();
        setPosition({ top: rect.bottom, left: rect.left });
    }, []);

    return (
        <div style={position} className="tooltip">
            {text}
        </div>
    );
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: useLayoutEffect for layout measurements
// ============================================================
function Tooltip({ text, targetRef }) {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    // Runs AFTER DOM mutation but BEFORE paint — no flicker, ever
    useLayoutEffect(() => {
        const rect = targetRef.current.getBoundingClientRect();
        setPosition({
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX,
        });
    }, [targetRef]);

    return (
        <div style={{ position: "absolute", ...position }} className="tooltip">
            {text}
        </div>
    );
}
```

> **Rule of thumb**: Start with `useEffect`. Only switch to `useLayoutEffect` if you see a visual flicker caused by layout measurement.

---

## 7.6 — `useDeferredValue`: Debounce Without Timers

### The Why

`useDeferredValue` is similar to `useTransition` but works in the opposite direction: instead of wrapping _updates_, you wrap the _value_. React renders with the old (deferred) value first, then re-renders with the new value when the browser is idle. It's like a built-in, frame-aware debounce.

**The Problem it Solves**: You type in a search box. The input should update instantly (every keystroke). But filtering 10,000 items on every keystroke makes the input feel laggy. You need the input to be immediately responsive while the list rendering lags behind.

```mermaid
graph LR
    subgraph "Without useDeferredValue"
        K1["User types 'r'"] --> SLOW1["Filter 10k items NOW\ blocks for 50ms"]
        SLOW1 --> K2["User types 'e' - feels lagg"]
        style SLOW1 fill:#dc3545,color:#fff
    end

    subgraph "With useDeferredValue"
        K3["User types 'r'"] --> INPUT3["Input updates instantly"]
        INPUT3 --> DEFER3["React schedules slow filter as low-priority"]
        DEFER3 --> K4["User types 'e' - input is responsive"]
        DEFER3 -->|"idle frame"| FILTER3["Filter runs with 're' (most recent)"]
        style INPUT3 fill:#28a745,color:#fff
        style FILTER3 fill:#28a745,color:#fff
    end
```

> **Key difference from debounce**: `useDeferredValue` doesn't have a fixed delay like 300ms. React defers it until the browser has a free frame. This is frame-aware and adapts to device speed — fast devices get less delay, slow devices get more.

### `useDeferredValue` vs `useTransition`

|                           | `useTransition`                | `useDeferredValue`              |
| ------------------------- | ------------------------------ | ------------------------------- |
| **You control**           | The state update               | The value                       |
| **Use when**              | You own the setter             | You receive the value as a prop |
| **Marks as low-priority** | The `startTransition` callback | The deferred value's re-renders |

### Scenario: Defer Expensive List Rendering

```jsx
// ============================================================
// ✅ useDeferredValue: Keep input snappy, defer slow rendering
// ============================================================
function SearchPage({ allItems }) {
    const [query, setQuery] = useState("");

    // deferredQuery lags behind query during busy renders
    // The input always shows the latest query (snappy)
    // The list renders with deferredQuery (may be slightly stale but never blocks)
    const deferredQuery = useDeferredValue(query);

    const filteredItems = useMemo(
        () =>
            allItems.filter((item) =>
                item.name.toLowerCase().includes(deferredQuery.toLowerCase()),
            ),
        [allItems, deferredQuery],
    );

    // Visual indicator: list is showing stale results
    const isStale = query !== deferredQuery;

    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <div
                style={{
                    opacity: isStale ? 0.6 : 1,
                    transition: "opacity 0.2s",
                }}
            >
                <ItemList items={filteredItems} />
            </div>
        </div>
    );
}
```

### `useDeferredValue` vs `useTransition`

|                           | `useTransition`                | `useDeferredValue`              |
| ------------------------- | ------------------------------ | ------------------------------- |
| **You control**           | The state update               | The value                       |
| **Use when**              | You own the setter             | You receive the value as a prop |
| **Marks as low-priority** | The `startTransition` callback | The deferred value's re-renders |

---

## 7.7 — `useId`: Stable, Unique IDs for Accessibility

### The Why

Accessibility requires associating `<label>` with `<input>` via matching `id`/`htmlFor`. Using `Math.random()` or a counter generates IDs that differ between server and client renders, breaking SSR hydration.

**The Problem in Detail**: When Next.js (SSR) renders your page on the server, it generates HTML. Then React runs in the browser and "hydrates" it. If the server generated `id="email-47"` and the browser generates `id="email-12"`, React sees a mismatch and throws a hydration error. `useId` generates IDs using React's own internal tree position — the same on server and client every time.

```mermaid
flowchart TD
    subgraph "Problem: Math.random() IDs"
        S1["Server renders: id='email-0.82'"] --> H1["Browser renders: id='email-0.47'"]
        H1 --> ERR["Hydration Error: IDs don't match"]
        style ERR fill:#dc3545,color:#fff
    end

    subgraph "Solution: useId()"
        S2["Server renders: id=':r0:'"] --> H2["Browser renders: id=':r0:'"]
        H2 --> OK["Hydration succeeds ✔"]
        OK --> A11Y["label + input properly linked for screen readers"]
        style OK fill:#28a745,color:#fff
        style A11Y fill:#28a745,color:#fff
    end
```

> **Important**: `useId` is for **accessibility** (ARIA attributes, label associations), NOT for list `key` props. For list keys, use your data's stable IDs like `item.id`.

```jsx
// ============================================================
// ❌ BAD CODE: Random ID — breaks SSR hydration
// ============================================================
function EmailField() {
    const id = Math.random().toString(36); // Different on server vs client!
    return (
        <>
            <label htmlFor={id}>Email</label>
            <input id={id} type="email" />
        </>
    );
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: useId for SSR-safe stable IDs
// ============================================================
function EmailField() {
    // Generates a stable, unique ID that matches between server and client
    const id = useId(); // e.g., ":r0:"

    return (
        <>
            <label htmlFor={id}>Email</label>
            <input id={id} type="email" />
        </>
    );
}

// Reusable form field with multiple associated IDs
function FormField({ label, helperText }) {
    const id = useId();
    const helperId = `${id}-helper`; // Derived IDs from the base ID

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} aria-describedby={helperId} />
            <p id={helperId}>{helperText}</p>
        </div>
    );
}
```

---

## 7.8 — Custom Hooks: Extracting & Sharing Logic

### The Why

When you find yourself duplicating `useEffect` + `useState` logic across multiple components, extract it into a **Custom Hook**. A custom hook is just a function whose name starts with `use` and that calls other hooks internally. It obeys all the Rules of Hooks.

> **Custom hooks share logic, not state.** Each component that calls `useWindowSize()` gets its own isolated state.

---

### How Custom Hooks Work Internally

When your component calls `useFetch(url)`, React doesn't see a "custom hook" — it sees **a function call that adds more hooks to the Fiber's linked list**. The hooks inside `useFetch` (`useState`, `useEffect`) are appended at the same positions every render, exactly as if you'd written them directly in the component.

```mermaid
graph TD
    COMP["UserCard renders"] --> CH["calls useFetch(url)"]
    CH --> H1["useState(null) → Hook #3 on Fiber"]
    CH --> H2["useState(true) → Hook #4 on Fiber"]
    CH --> H3["useState(null) → Hook #5 on Fiber"]
    CH --> H4["useEffect(...) → Hook #6 on Fiber"]
    H1 --> RETURN["useFetch returns { data, isLoading, error }"]
    RETURN --> COMP2["UserCard uses the returned values"]

    style CH fill:#6f42c1,color:#fff
    style RETURN fill:#28a745,color:#fff
```

---

### Rules for Custom Hooks

| Rule | Why |
|---|---|
| Name **must** start with `use` | ESLint's `react-hooks` plugin applies Rules of Hooks checks to it |
| Can call any hooks (built-in or custom) | They're just functions — full hook API available |
| Each component gets **own isolated state** | Hooks share *logic*, not state instances |
| Can accept any params, return anything | Tuple, object, single value, functions — your choice |
| Must follow Rules of Hooks inside them | No conditionals around hook calls |

---

### Return Patterns: Tuple vs Object

**Tuple** (like `useState`) — use when there are only 2 values and consumers will rename them:
```jsx
// Tuple — consumer picks their own names (like useState)
function useToggle(initial = false) {
    const [on, setOn] = useState(initial);
    const toggle = useCallback(() => setOn(v => !v), []);
    return [on, toggle]; // ← tuple
}

// Usage — rename at destructure site
const [isOpen, toggleOpen] = useToggle(false);
const [isVisible, toggleVisible] = useToggle(true);
```

**Object** — use when there are 3+ values or consumers pick only what they need:
```jsx
// Object — consumer picks what they need (no ordering issues)
function useFetch(url) {
    // ...
    return { data, isLoading, error, refetch }; // ← object
}

// Usage — take only what you need, rename with :
const { data: user, isLoading } = useFetch("/api/me");
const { error } = useFetch("/api/settings");
```

---

### Composing Custom Hooks (Hooks calling Hooks)

Custom hooks can call other custom hooks — this is where real power emerges.

```jsx
// ---- useDebounce (primitive) ----
function useDebounce(value, delay = 300) {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const t = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(t);
    }, [value, delay]);
    return debounced;
}

// ---- useFetch (primitive) ----
function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (!url) return;
        const ctrl = new AbortController();
        setIsLoading(true);
        fetch(url, { signal: ctrl.signal })
            .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
            .then(setData)
            .catch(e => { if (e.name !== "AbortError") setError(e.message); })
            .finally(() => setIsLoading(false));
        return () => ctrl.abort();
    }, [url]);
    return { data, isLoading, error };
}

// ---- useSearchResults: COMPOSES both primitives ----
// This hook would need 20+ lines of boilerplate without composition
function useSearchResults(query) {
    const debouncedQuery = useDebounce(query, 400);   // ← calls custom hook
    const url = debouncedQuery
        ? `/api/search?q=${encodeURIComponent(debouncedQuery)}`
        : null;
    const { data, isLoading, error } = useFetch(url); // ← calls custom hook

    return {
        results: data?.items ?? [],
        isLoading,
        error,
        isIdle: !debouncedQuery,
    };
}

// Usage — one line, all complexity hidden
function SearchPage() {
    const [query, setQuery] = useState("");
    const { results, isLoading, isIdle } = useSearchResults(query);

    return (
        <>
            <input value={query} onChange={e => setQuery(e.target.value)} />
            {isIdle && <p>Start typing to search…</p>}
            {isLoading && <Spinner />}
            {results.map(r => <ResultCard key={r.id} result={r} />)}
        </>
    );
}
```

---

### Full Hook Library: 15 Real-World Custom Hooks

```jsx
// ============================================================
// 1. useToggle — boolean on/off with stable toggle function
// ============================================================
function useToggle(initial = false) {
    const [on, setOn] = useState(initial);
    const toggle    = useCallback(() => setOn(v => !v), []);
    const turnOn    = useCallback(() => setOn(true), []);
    const turnOff   = useCallback(() => setOn(false), []);
    return [on, toggle, { turnOn, turnOff }];
}

// Usage
const [isModalOpen, toggleModal, { turnOff: closeModal }] = useToggle(false);
```

```jsx
// ============================================================
// 2. useLocalStorage — persists state to localStorage
// ============================================================
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const setValue = useCallback((value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`useLocalStorage: failed to set "${key}"`, error);
        }
    }, [key, storedValue]);

    const removeValue = useCallback(() => {
        setStoredValue(initialValue);
        window.localStorage.removeItem(key);
    }, [key, initialValue]);

    return [storedValue, setValue, removeValue];
}
```

```jsx
// ============================================================
// 3. useFetch — data fetching with abort + error handling
// ============================================================
function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(!!url);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) { setIsLoading(false); return; }
        const ctrl = new AbortController();
        setIsLoading(true);
        setError(null);
        fetch(url, { signal: ctrl.signal })
            .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
            .then(setData)
            .catch(e => { if (e.name !== "AbortError") setError(e.message); })
            .finally(() => setIsLoading(false));
        return () => ctrl.abort();
    }, [url]);

    return { data, isLoading, error };
}
```

```jsx
// ============================================================
// 4. useDebounce — delay a rapidly-changing value
// ============================================================
function useDebounce(value, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return debouncedValue;
}
```

```jsx
// ============================================================
// 5. useThrottle — limit how often a value updates
// ============================================================
function useThrottle(value, limit = 200) {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastUpdated = useRef(Date.now());

    useEffect(() => {
        const now = Date.now();
        if (now - lastUpdated.current >= limit) {
            lastUpdated.current = now;
            setThrottledValue(value);
        } else {
            const timer = setTimeout(() => {
                lastUpdated.current = Date.now();
                setThrottledValue(value);
            }, limit - (now - lastUpdated.current));
            return () => clearTimeout(timer);
        }
    }, [value, limit]);

    return throttledValue;
}
```

```jsx
// ============================================================
// 6. useWindowSize — track viewport dimensions
// ============================================================
function useWindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handler = () => setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    return size;
}

// Usage
function Layout() {
    const { width } = useWindowSize();
    return width < 768 ? <MobileLayout /> : <DesktopLayout />;
}
```

```jsx
// ============================================================
// 7. useMediaQuery — CSS media query in JS
// ============================================================
function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
    useEffect(() => {
        const mq = window.matchMedia(query);
        const handler = (e) => setMatches(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [query]);
    return matches;
}

const isMobile  = useMediaQuery("(max-width: 767px)");
const isTablet  = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
```

```jsx
// ============================================================
// 8. useOnClickOutside — fire callback when clicking outside element
// ============================================================
function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (e) => {
            if (!ref.current || ref.current.contains(e.target)) return;
            handler(e);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

// Usage
function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, useCallback(() => setIsOpen(false), []));
    return <div ref={ref}>{isOpen && <Menu />}</div>;
}
```

```jsx
// ============================================================
// 9. usePrevious — remember the previous render's value
// ============================================================
function usePrevious(value) {
    const ref = useRef(undefined);
    useEffect(() => { ref.current = value; }); // runs after every render
    return ref.current; // returns value from BEFORE this render
}

// Usage — show price change direction
function PriceDisplay({ price }) {
    const prevPrice = usePrevious(price);
    const direction = price > prevPrice ? "↑" : price < prevPrice ? "↓" : "—";
    return <span>{price} {direction}</span>;
}
```

```jsx
// ============================================================
// 10. useIntersectionObserver — detect when element enters viewport
// ============================================================
function useIntersectionObserver(ref, options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, options.threshold, options.rootMargin]);

    return isIntersecting;
}

// Usage: lazy-load image when it enters the viewport
function LazyImage({ src, alt }) {
    const ref = useRef(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
    return <img ref={ref} src={isVisible ? src : undefined} alt={alt} />;
}

// Usage: infinite scroll trigger
function InfiniteList({ onLoadMore }) {
    const sentinelRef = useRef(null);
    const isAtBottom = useIntersectionObserver(sentinelRef);
    useEffect(() => { if (isAtBottom) onLoadMore(); }, [isAtBottom]);
    return (
        <ul>
            {/* list items */}
            <li ref={sentinelRef} /> {/* invisible sentinel at bottom */}
        </ul>
    );
}
```

```jsx
// ============================================================
// 11. useCopyToClipboard — copy text with feedback state
// ============================================================
function useCopyToClipboard(resetDelay = 2000) {
    const [copied, setCopied] = useState(false);

    const copy = useCallback(async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), resetDelay);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    }, [resetDelay]);

    return [copied, copy];
}

// Usage
function ShareButton({ url }) {
    const [copied, copy] = useCopyToClipboard();
    return (
        <button onClick={() => copy(url)}>
            {copied ? "✅ Copied!" : "📋 Copy Link"}
        </button>
    );
}
```

```jsx
// ============================================================
// 12. useEventListener — attach/detach DOM event listeners safely
// ============================================================
function useEventListener(eventName, handler, element = window) {
    const savedHandler = useRef(handler);
    useEffect(() => { savedHandler.current = handler; }, [handler]);

    useEffect(() => {
        if (!element?.addEventListener) return;
        const listener = (e) => savedHandler.current(e);
        element.addEventListener(eventName, listener);
        return () => element.removeEventListener(eventName, listener);
    }, [eventName, element]);
}

// Usage
function KeyboardShortcuts() {
    useEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "s") { e.preventDefault(); save(); }
        if (e.key === "Escape") closeModal();
    });
    return null;
}
```

```jsx
// ============================================================
// 13. useAsync — manage any async operation's lifecycle
// ============================================================
function useAsync(asyncFn, immediate = false) {
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [data,   setData]   = useState(null);
    const [error,  setError]  = useState(null);

    const execute = useCallback(async (...args) => {
        setStatus("loading");
        setError(null);
        try {
            const result = await asyncFn(...args);
            setData(result);
            setStatus("success");
            return result;
        } catch (err) {
            setError(err.message);
            setStatus("error");
            throw err;
        }
    }, [asyncFn]);

    useEffect(() => { if (immediate) execute(); }, [immediate]);

    return { execute, status, data, error,
        isIdle:    status === "idle",
        isLoading: status === "loading",
        isSuccess: status === "success",
        isError:   status === "error",
    };
}

// Usage — submit a form
async function submitForm(data) {
    const res = await fetch("/api/submit", { method: "POST", body: JSON.stringify(data) });
    if (!res.ok) throw new Error("Submit failed");
    return res.json();
}

function ContactForm() {
    const { execute, isLoading, isSuccess, error } = useAsync(submitForm);

    async function handleSubmit(formData) {
        await execute(formData);
    }

    if (isSuccess) return <p>Message sent!</p>;
    return (
        <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <button disabled={isLoading}>{isLoading ? "Sending…" : "Send"}</button>
        </form>
    );
}
```

```jsx
// ============================================================
// 14. useCounter — counter with min/max bounds
// ============================================================
function useCounter({ initial = 0, min = -Infinity, max = Infinity, step = 1 } = {}) {
    const [count, setCount] = useState(initial);
    const increment = useCallback(() => setCount(c => Math.min(c + step, max)), [step, max]);
    const decrement = useCallback(() => setCount(c => Math.max(c - step, min)), [step, min]);
    const reset     = useCallback(() => setCount(initial), [initial]);
    const set       = useCallback((v) => setCount(Math.min(Math.max(v, min), max)), [min, max]);
    return { count, increment, decrement, reset, set };
}

// Usage — quantity selector in a cart
function QuantitySelector({ maxStock }) {
    const { count, increment, decrement } = useCounter({ initial: 1, min: 1, max: maxStock });
    return (
        <div>
            <button onClick={decrement} disabled={count === 1}>−</button>
            <span>{count}</span>
            <button onClick={increment} disabled={count === maxStock}>+</button>
        </div>
    );
}
```

```jsx
// ============================================================
// 15. useScrollPosition — track scroll position and direction
// ============================================================
function useScrollPosition() {
    const [scroll, setScroll] = useState({ x: 0, y: 0, direction: null });
    const prevY = useRef(0);

    useEffect(() => {
        const handler = () => {
            const y = window.scrollY;
            setScroll({
                x: window.scrollX,
                y,
                direction: y > prevY.current ? "down" : "up",
            });
            prevY.current = y;
        };
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return scroll;
}

// Usage — hide navbar on scroll down, show on scroll up
function Navbar() {
    const { direction } = useScrollPosition();
    return (
        <nav style={{ transform: direction === "down" ? "translateY(-100%)" : "translateY(0)" }}>
            {/* nav content */}
        </nav>
    );
}
```

---

### TypeScript Signatures for Custom Hooks

```tsx
// Generic useFetch with TypeScript
function useFetch<T>(url: string | null) {
    const [data,      setData]      = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(!!url);
    const [error,     setError]     = useState<string | null>(null);

    useEffect(() => {
        if (!url) { setIsLoading(false); return; }
        const ctrl = new AbortController();
        setIsLoading(true);
        fetch(url, { signal: ctrl.signal })
            .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() as Promise<T>; })
            .then(setData)
            .catch((e: Error) => { if (e.name !== "AbortError") setError(e.message); })
            .finally(() => setIsLoading(false));
        return () => ctrl.abort();
    }, [url]);

    return { data, isLoading, error };
}

// Usage — fully typed
const { data: user } = useFetch<User>("/api/me");
//      ^ User | null  ✔

// useLocalStorage with TypeScript
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
    // ...
}
```

---

### When NOT to Write a Custom Hook

```jsx
// ❌ Pointless — no reuse, no logic to extract
function useTitle(title) {
    document.title = title; // Just do this directly in the component — no hook needed
}

// ❌ Wrapping a single built-in hook for no reason
function useIsAdmin() {
    return useContext(AuthContext).user?.role === "admin";
    // Just write useContext(AuthContext).user?.role === "admin" in the component
    // unless you use this in 5+ places
}

// ✅ Worth extracting — meaningful logic, used in 3+ components
function useAuth() {
    const { user, isLoading } = useContext(AuthContext);
    const isAdmin    = user?.role === "admin";
    const isLoggedIn = Boolean(user);
    const canEdit    = isAdmin || user?.permissions?.includes("edit");
    return { user, isLoading, isAdmin, isLoggedIn, canEdit };
}
```

**Rule of thumb: extract a custom hook when:**
1. The same `useState`+`useEffect` pattern appears in 2+ components
2. The logic is complex enough that it obscures what the component renders
3. You want to unit-test the logic independently of any component

---

### Testing Custom Hooks

Use `@testing-library/react`'s `renderHook` — no need to wrap in a component.

```jsx
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { useLocalStorage } from "./useLocalStorage";

// ---- Testing useCounter ----
describe("useCounter", () => {
    test("initialises with default value", () => {
        const { result } = renderHook(() => useCounter({ initial: 5 }));
        expect(result.current.count).toBe(5);
    });

    test("increments count", () => {
        const { result } = renderHook(() => useCounter());
        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
    });

    test("respects max bound", () => {
        const { result } = renderHook(() => useCounter({ initial: 9, max: 10 }));
        act(() => result.current.increment());
        act(() => result.current.increment()); // should not go past 10
        expect(result.current.count).toBe(10);
    });

    test("resets to initial", () => {
        const { result } = renderHook(() => useCounter({ initial: 5 }));
        act(() => result.current.increment());
        act(() => result.current.reset());
        expect(result.current.count).toBe(5);
    });
});

// ---- Testing useLocalStorage ----
describe("useLocalStorage", () => {
    beforeEach(() => localStorage.clear());

    test("reads initial value when key is absent", () => {
        const { result } = renderHook(() => useLocalStorage("theme", "light"));
        expect(result.current[0]).toBe("light");
    });

    test("persists value to localStorage", () => {
        const { result } = renderHook(() => useLocalStorage("theme", "light"));
        act(() => result.current[1]("dark"));
        expect(localStorage.getItem("theme")).toBe('"dark"');
        expect(result.current[0]).toBe("dark");
    });
});

// ---- Testing useFetch with mocked fetch ----
describe("useFetch", () => {
    test("fetches data and sets loading states", async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ name: "Alice" }),
        });

        const { result } = renderHook(() => useFetch("/api/user"));

        expect(result.current.isLoading).toBe(true);

        await act(async () => {}); // wait for fetch to resolve

        expect(result.current.isLoading).toBe(false);
        expect(result.current.data).toEqual({ name: "Alice" });
        expect(result.current.error).toBeNull();
    });

    test("sets error on HTTP error", async () => {
        global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 404 });

        const { result } = renderHook(() => useFetch("/api/user"));
        await act(async () => {});

        expect(result.current.error).toBe("HTTP 404");
        expect(result.current.data).toBeNull();
    });
});
```

---

### Anti-Patterns to Avoid

```jsx
// ❌ 1. Creating a hook inside a component (new hook on every render)
function MyComponent() {
    // This creates a new function reference every render — the hook identity is unstable
    const useThisHook = () => useState(0); // WRONG
    const [x] = useThisHook();
}

// ❌ 2. Calling hooks conditionally inside a custom hook
function useBadHook(condition) {
    if (condition) {
        useState(0); // WRONG — violates Rules of Hooks
    }
}

// ❌ 3. Returning unstable object references (causes infinite re-renders in consumers)
function useUserBad() {
    const [user, setUser] = useState(null);
    return { user, setUser, meta: { loaded: true } }; // New object every render!
    // If a child does useEffect(() => {}, [userHook]) — infinite loop
}

// ✅ 3. Stable references with useMemo / useCallback
function useUserGood() {
    const [user, setUser] = useState(null);
    const meta = useMemo(() => ({ loaded: Boolean(user) }), [user]);
    return { user, setUser, meta };
}

// ❌ 4. Doing too much in one hook (god hook)
function useEverything() {
    // manages auth + cart + theme + notifications — unmaintainable
}

// ✅ 4. Single responsibility — one hook, one concern
function useAuth() { /* auth only */ }
function useCart() { /* cart only */ }
function useTheme() { /* theme only */ }
```

---

### Hook Naming Conventions

| Pattern | Example | Returns |
|---|---|---|
| `use[Noun]` | `useUser`, `useCart`, `useTheme` | State + setters |
| `use[Noun][Action]` | `useFormValidation`, `useScrollPosition` | Derived state |
| `use[Adjective]` | `useDebounced`, `useThrottled` | Modified value |
| `use[VerbNoun]` | `useFetchUser`, `useCopyToClipboard` | Action + status |
| `use[EventNoun]` | `useClickOutside`, `useKeyPress` | Event-driven state |

---

### Module 7 Custom Hooks Summary

| Hook | What it solves | Key detail |
|---|---|---|
| `useToggle` | Boolean on/off | Stable `toggle` via `useCallback` |
| `useLocalStorage` | Persist state across sessions | JSON serialize/deserialize, lazy init |
| `useFetch` | Data fetching with cleanup | AbortController prevents race conditions |
| `useDebounce` | Delay rapidly-changing values | Clears timeout on every change |
| `useThrottle` | Limit update frequency | Uses `useRef` to track last update time |
| `useWindowSize` | Responsive logic in JS | Passive scroll listener |
| `useMediaQuery` | CSS breakpoints in JS | `matchMedia` event listener |
| `useOnClickOutside` | Close dropdowns/modals | `contains()` check on mousedown |
| `usePrevious` | Compare to last render's value | `useRef` updated in `useEffect` |
| `useIntersectionObserver` | Lazy load + infinite scroll | `IntersectionObserver` API |
| `useCopyToClipboard` | Copy with "Copied!" feedback | `navigator.clipboard` async API |
| `useEventListener` | Safe DOM event attachment | Stable handler via `useRef` |
| `useAsync` | Any async operation lifecycle | `idle/loading/success/error` states |
| `useCounter` | Bounded numeric counter | min/max/step constraints |
| `useScrollPosition` | Scroll-aware UI (hide nav) | Direction tracking with `useRef` |

---

## Module 7 — Interview Q&A

**Q: When do you use `useReducer` instead of `useState`?**
> Use `useReducer` when: (1) state has multiple related sub-fields that change together (e.g., `{ data, isLoading, error }`), (2) the next state depends on complex logic based on the previous state, (3) there are multiple different action types that each update state differently. For a single boolean or counter, `useState` is simpler.

**Q: What are the performance pitfalls of React Context?**
> Every component that calls `useContext(MyContext)` re-renders whenever the context value reference changes — even if the specific field it reads didn't change. Common fix: (1) split contexts by update frequency (auth context rarely changes; cart context changes often), (2) memoize the context value with `useMemo`. For high-frequency updates (every keystroke), use Zustand/Redux instead.

**Q: What is `useRef` and how does it differ from `useState`?**

| | `useRef` | `useState` |
|---|---|---|
| Triggers re-render? | ❌ No | ✅ Yes |
| Mutable? | ✅ `ref.current = x` | Via setter only |
| Use for | DOM access, instance variables, prev value | UI-driving state |
| Persists across renders? | ✅ Yes | ✅ Yes |

**Q: What is `useLayoutEffect` and when should you use it over `useEffect`?**
> `useLayoutEffect` fires synchronously *after* React updates the DOM but *before* the browser paints. Use it when you need to read a DOM measurement (like `getBoundingClientRect()`) and immediately apply a style change — doing this in `useEffect` causes a visible flash because the paint happens between the read and the write. Default to `useEffect`; reach for `useLayoutEffect` only when you see flicker.

**Q: What is a custom hook? What rules must it follow?**
> A custom hook is a function whose name starts with `use` and that calls other React hooks internally. Rules: (1) name must start with `use` (enables lint enforcement), (2) can only call hooks at the top level — no conditional calls, (3) each component that calls the same custom hook gets its own isolated state (hooks share *logic*, not *state*). Used to extract duplicated `useState`+`useEffect` patterns into reusable, testable units.

**Q: What is `useDeferredValue` and how does it differ from `useTransition`?**

| | `useDeferredValue` | `useTransition` |
|---|---|---|
| What you control | A *value* (you receive it from parent) | A *state update* (you own the setter) |
| Use when | You can't modify the state setter (e.g., prop from parent) | You own the state and control when it changes |
| Example | Deferring a search prop from a parent | Deferring tab switch inside a component |

---

## Module 7 Summary

| Hook                   | Primary Use Case                                          | Key Gotcha                                                                            |
| ---------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `useReducer`           | Complex state with multiple related fields or transitions | Always handle `default` in switch. Prefer over `useState` when state logic is complex |
| `useContext`           | Sharing state across the tree without prop drilling       | Memoize the context `value` to avoid mass consumer re-renders                         |
| `useRef`               | DOM access + mutable instance variables                   | Mutating `.current` does NOT trigger a re-render                                      |
| `useImperativeHandle`  | Expose a controlled imperative API from a child           | Always pair with `forwardRef`                                                         |
| `useLayoutEffect`      | Synchronous DOM measurement before paint                  | Default to `useEffect`; use this only when you see flicker                            |
| `useDeferredValue`     | Defer rendering of slow content from a received value     | Pair with `useMemo` for the deferred computation                                      |
| `useId`                | SSR-safe unique IDs for accessibility                     | Never use `Math.random()` for IDs in React                                            |
| **Custom Hooks**       | Extract and reuse stateful logic across components        | Name must start with `use`. Shares logic, not state                                   |
| `useDebugValue`        | Show labels in React DevTools for custom hooks            | Only useful inside custom hooks, not components                                       |
| `useSyncExternalStore` | Subscribe to external non-React stores safely             | For browser APIs, third-party stores, Zustand internals                               |

## 7.9 — `useDebugValue`: Custom Hook DevTools Labels

### The Why

When debugging complex apps in **React DevTools**, you can see all hooks and their values. But for custom hooks, the default display just shows the raw state value — not very helpful. `useDebugValue` lets you add a descriptive label that appears in the DevTools inspector.

```jsx
import { useDebugValue, useState, useEffect } from "react";

// ---- BASIC USAGE ----
function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handler = () => setIsOnline(navigator.onLine);
        window.addEventListener("online", handler);
        window.addEventListener("offline", handler);
        return () => {
            window.removeEventListener("online", handler);
            window.removeEventListener("offline", handler);
        };
    }, []);

    // Without useDebugValue: DevTools shows "true" or "false"
    // With useDebugValue: DevTools shows "Online" or "Offline"
    useDebugValue(isOnline ? "Online" : "Offline");

    return isOnline;
}

// ---- WITH FORMATTER FUNCTION ----
// The second argument is a formatting function.
// It's ONLY called when DevTools is open — avoids expensive computation in production.
function useUser(userId) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser(userId).then(setUser);
    }, [userId]);

    // The formatter runs lazily only when DevTools inspects this hook
    useDebugValue(user, (u) =>
        u ? `User: ${u.name} (${u.role})` : "Loading...",
    );

    return user;
}

// DevTools will show: "User: Alice (admin)" instead of the raw object
```

> **Rule**: Only use `useDebugValue` inside **custom hooks** (not components). It has no effect outside of DevTools — it does nothing in production builds.

## 7.10 — `useSyncExternalStore`: Safe External Subscriptions

### The Why

In React 18+ with concurrent rendering, reading values from external sources (browser APIs, third-party stores, global variables) can lead to **tearing** — different parts of the UI showing inconsistent snapshots of the same data. `useSyncExternalStore` is the API that makes external subscriptions safe with concurrent React.

```jsx
import { useSyncExternalStore } from "react";

// ============================================================
// EXAMPLE 1: Subscribe to window width (browser API)
// ============================================================

// 1. Subscribe function: called by React to register a listener.
//    Must return an unsubscribe function.
function subscribeToWindowWidth(callback) {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
}

// 2. Snapshot: returns the CURRENT value from the external store.
//    React calls this to read the value synchronously.
function getWindowWidth() {
    return window.innerWidth;
}

// 3. Server snapshot: value to use during SSR (window doesn't exist on server)
function getServerWidth() {
    return 1280; // Default server-side width
}

function useWindowWidth() {
    return useSyncExternalStore(
        subscribeToWindowWidth, // subscribe
        getWindowWidth, // client snapshot
        getServerWidth, // server snapshot (optional, prevents hydration mismatch)
    );
}

function ResponsiveLayout() {
    const width = useWindowWidth();
    return <div>Window width: {width}px</div>;
}

// ============================================================
// EXAMPLE 2: Subscribe to a custom event-based store
// ============================================================
// This is the pattern used internally by Zustand, Redux, and most state libraries.

class CounterStore {
    constructor() {
        this._count = 0;
        this._listeners = new Set();
    }
    getCount() {
        return this._count;
    }
    increment() {
        this._count++;
        this._listeners.forEach((l) => l()); // Notify all subscribers
    }
    subscribe(listener) {
        this._listeners.add(listener);
        return () => this._listeners.delete(listener); // Unsubscribe
    }
}

const counterStore = new CounterStore();

function useCounter() {
    return useSyncExternalStore(
        (cb) => counterStore.subscribe(cb), // subscribe
        () => counterStore.getCount(), // snapshot
    );
}

function Counter() {
    const count = useCounter();
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => counterStore.increment()}>+1</button>
        </div>
    );
}
```

> **When to use `useSyncExternalStore`**: Use it when subscribing to **external stores** that live outside React (browser APIs, event emitters, non-React libraries). For React state, use `useState`, `useReducer`, or Context. This hook ensures concurrent mode safety — your UI never shows inconsistent data.

---

# Complete Hook Decision Tree

```mermaid
flowchart TD
    A[Need to store data?] -->|Yes| B{Does changing it<br/>need to re-render?}
    B -->|Yes| C{Is the state complex<br/>or multi-field?}
    B -->|No| D[useRef]
    C -->|Simple| E[useState]
    C -->|Complex / related fields| F[useReducer]

    A -->|No - Need a side effect| G{When should it run?}
    G -->|After paint async| H[useEffect]
    G -->|Before paint sync layout| I[useLayoutEffect]

    A -->|No - Need to share data| J{Across the tree?}
    J -->|Yes| K[useContext]
    J -->|No - derive from existing state| L{Expensive computation?}
    L -->|Yes| M[useMemo]
    L -->|Pass as callback to child| N[useCallback + React.memo]

    A -->|No - Need a stable ID| O[useId]
    A -->|No - Defer slow renders| P{You own the update?}
    P -->|Yes| Q[useTransition]
    P -->|No - receiving as prop| R[useDeferredValue]
```

---

[↑ Back to TOC](#table-of-contents)

# Module 8: Event Handling & Forms

> **Topics**: How React handles events, Controlled vs Uncontrolled components, Form validation, React Hook Form

---

## 8.1 — Event Handling in React

### The Why

In plain HTML, event listeners are strings: `<button onclick="doSomething()">`. React replaces this with a **Synthetic Event System** — a cross-browser wrapper around the browser's native events. This means your code works identically in Chrome, Firefox, and Safari without any extra work.

> **In simple terms**: React intercepts all events at the root of your app (not on each individual element) — a technique called **event delegation**. This is much more memory-efficient than attaching listeners to every DOM node.

### How Synthetic Events Work

```mermaid
graph TD
    A[User clicks a button] --> B[Native Browser Event fires]
    B --> C[React's single root listener catches it]
    C --> D[React creates a SyntheticEvent wrapper]
    D --> E[React walks Fiber tree to find the handler]
    E --> F[Your onClick function is called]
    F --> G[SyntheticEvent is pooled/released]
```

### Code Lab: Event Handling Patterns

```jsx
// ============================================================
// ❌ BAD CODE: Common event handling mistakes
// ============================================================
function BadForm() {
    // Mistake 1: Calling the function immediately instead of passing a reference
    // handleClick() runs RIGHT NOW during render, not on click!
    return <button onClick={handleClick()}>Click</button>;
}

function BadList() {
    const items = ["a", "b", "c"];
    return (
        <ul>
            {items.map((item, i) => (
                // Mistake 2: Creating a new function on every render for every item
                // This defeats React.memo on any child component
                <li key={i} onClick={() => console.log(item)}>
                    {item}
                </li>
            ))}
        </ul>
    );
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: Clean event handling
// ============================================================
function GoodForm() {
    const [value, setValue] = useState("");

    // 1. Always pass the function REFERENCE, never call it
    function handleSubmit(event) {
        event.preventDefault(); // Stop the browser from reloading the page
        console.log("Submitted:", value);
    }

    // 2. For inline handlers, use arrow functions that CALL the handler
    function handleChange(event) {
        setValue(event.target.value); // event.target.value is the input's current text
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

// 3. Passing data to handlers: use a curried function or data attribute
function ItemList({ items, onDelete }) {
    return (
        <ul>
            {items.map((item) => (
                // Correct pattern: arrow function that calls the handler with data
                <li key={item.id}>
                    {item.name}
                    <button onClick={() => onDelete(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
```

### Common React Events Cheat Sheet

| Event                           | When it fires             | Common use     |
| ------------------------------- | ------------------------- | -------------- |
| `onClick`                       | Mouse click               | Buttons, links |
| `onChange`                      | Input value changes       | Form inputs    |
| `onSubmit`                      | Form submission           | Forms          |
| `onFocus` / `onBlur`            | Element gains/loses focus | Validation     |
| `onKeyDown` / `onKeyUp`         | Keyboard press/release    | Shortcuts      |
| `onMouseEnter` / `onMouseLeave` | Hover start/end           | Tooltips       |

---

## 8.2 — Controlled vs Uncontrolled Components

### The Why

There are two ways to handle form data in React. Understanding the difference prevents a whole category of bugs.

> **Simple analogy**:
>
> - **Controlled** = React is the "source of truth". The input shows exactly what React's state says.
> - **Uncontrolled** = The DOM is the "source of truth". React just reads it when needed.

```mermaid
graph LR
    subgraph Controlled
        S1[React State] -->|value prop| I1[Input Element]
        I1 -->|onChange event| S1
    end

    subgraph Uncontrolled
        I2[Input Element] -->|ref.current.value| R2[Read on demand]
    end
```

### Code Lab

```jsx
// ============================================================
// ❌ BAD CODE: Mixing controlled and uncontrolled — causes React warning
// ============================================================
function MixedInput() {
    const [name, setName] = useState(undefined); // undefined = uncontrolled!

    // When name becomes a string, React switches from uncontrolled to controlled.
    // React warns: "A component is changing an uncontrolled input to be controlled."
    return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE 1: Controlled Component
// React state is always the truth. Use this for most form inputs.
// ============================================================
function ControlledInput() {
    const [email, setEmail] = useState(""); // Always a string, never undefined/null

    return (
        <input
            type="email"
            value={email} // React controls what's shown
            onChange={(e) => setEmail(e.target.value)} // React updates on every keystroke
        />
    );
}
// ✅ You can: validate on every keystroke, disable submit button, format input live
```

```jsx
// ============================================================
// ✅ BEST PRACTICE 2: Uncontrolled Component with useRef
// Use for file inputs or when you only need the value on submit.
// ============================================================
function UncontrolledForm() {
    const fileInputRef = useRef(null); // Ref to the actual DOM input
    const nameInputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        // Read value only when needed — no re-renders during typing
        const name = nameInputRef.current.value;
        const file = fileInputRef.current.files[0];
        console.log(name, file);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={nameInputRef} type="text" defaultValue="" />
            <input ref={fileInputRef} type="file" />{" "}
            {/* File inputs MUST be uncontrolled */}
            <button type="submit">Submit</button>
        </form>
    );
}
```

---

## 8.3 — Forms: Building from Scratch

```jsx
// ============================================================
// ✅ A complete controlled form with validation
// ============================================================
function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Single change handler for all fields — uses the input's `name` attribute
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear the error for this field as the user types
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    }

    // Validate and return errors object
    function validate() {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.includes("@"))
            newErrors.email = "Valid email required";
        if (formData.password.length < 8)
            newErrors.password = "Min 8 characters";
        return newErrors;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors); // Show errors, don't submit
            return;
        }

        setIsSubmitting(true);
        try {
            await registerUser(formData);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <input
                    name="name" // Must match formData key
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div>
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div>
                <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                {errors.password && (
                    <span className="error">{errors.password}</span>
                )}
            </div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating account..." : "Sign Up"}
            </button>
        </form>
    );
}
```

---

## 8.4 — React Hook Form: Forms Without the Boilerplate

### The Why

Writing `useState` + `onChange` + `validate` for every field gets tedious fast. **React Hook Form (RHF)** handles all that for you, with one huge bonus: it uses **uncontrolled inputs internally**, so your form causes zero re-renders while the user types.

> **Result**: Forms feel instant, even with 50+ fields, because React isn't re-rendering on every keystroke.

```jsx
// ============================================================
// ✅ BEST PRACTICE: React Hook Form — less code, better performance
// ============================================================
import { useForm } from "react-hook-form";

function SignupFormRHF() {
    const {
        register, // Connects an input to RHF
        handleSubmit, // Wraps your submit handler with validation
        formState: { errors, isSubmitting }, // Error and status info
        watch, // Watch a field's value in real time
    } = useForm({
        defaultValues: { name: "", email: "", password: "" },
    });

    // This function only runs if ALL validations pass
    async function onSubmit(data) {
        await registerUser(data); // data = { name, email, password }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register() connects the input to RHF and sets validation rules */}
            <input
                {...register("name", { required: "Name is required" })}
                placeholder="Full name"
            />
            {errors.name && <span>{errors.name.message}</span>}

            <input
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email",
                    },
                })}
                placeholder="Email"
            />
            {errors.email && <span>{errors.email.message}</span>}

            <input
                type="password"
                {...register("password", {
                    required: true,
                    minLength: { value: 8, message: "Min 8 characters" },
                })}
                placeholder="Password"
            />
            {errors.password && <span>{errors.password.message}</span>}

            <button type="submit" disabled={isSubmitting}>
                Sign Up
            </button>
        </form>
    );
}
```

---

## 8.4 — Interview Question: Build a 6-Digit OTP Input UI

> **Asked at**: Flipkart, Swiggy, Razorpay, Phonepe, Paytm frontend interviews.
> **Category**: Controlled components · refs · keyboard event handling · useRef array

### Problem Statement

Build a 6-box OTP input where:

1. Only one digit per box
2. Focus **auto-advances** to the next box after typing a digit
3. **Backspace** moves focus back to the previous box and clears it
4. Pasting a full OTP string fills all boxes automatically
5. Only numeric input is accepted

---

### The Mental Model

Each box is an independent `<input>`. We store:

- An array `otp` in state — the source of truth for displayed values
- An array `inputRefs` of refs — so we can imperatively call `.focus()` on any box

```
State:   otp = ['3', '7', '', '', '', '']
Refs:    inputRefs[0..5] → DOM input elements

User types '5' in box index 1:
  → set otp[1] = '5'
  → move focus: inputRefs[2].current.focus()
```

---

### Full Implementation

```jsx
import { useState, useRef } from "react";

const OTPInput = ({ length = 6, onComplete }) => {
    const [otp, setOtp] = useState(Array(length).fill(""));

    // Array of refs — one per input box
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const val = e.target.value;

        // Allow only a single digit 0-9
        if (!/^\d$/.test(val)) return;

        // Update the otp array immutably
        const newOtp = [...otp];
        newOtp[index] = val;
        setOtp(newOtp);

        // Auto-advance focus to next box
        if (index < length - 1) {
            inputRefs.current[index + 1].focus();
        }

        // Fire callback when all digits filled
        if (newOtp.every((d) => d !== "")) {
            onComplete?.(newOtp.join(""));
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            if (otp[index] !== "") {
                // Clear current box
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                // Move back to previous box and clear it
                const newOtp = [...otp];
                newOtp[index - 1] = "";
                setOtp(newOtp);
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData
            .getData("text")
            .replace(/\D/g, "") // strip non-digits
            .slice(0, length); // cap at length

        if (!pasted) return;

        const newOtp = Array(length).fill("");
        [...pasted].forEach((char, i) => {
            newOtp[i] = char;
        });
        setOtp(newOtp);

        // Focus the first empty box, or the last if all filled
        const nextEmpty = newOtp.findIndex((d) => d === "");
        const focusIndex = nextEmpty === -1 ? length - 1 : nextEmpty;
        inputRefs.current[focusIndex].focus();

        if (newOtp.every((d) => d !== "")) {
            onComplete?.(newOtp.join(""));
        }
    };

    return (
        <div className="flex gap-3">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)} // populate ref array
                    type="text"
                    inputMode="numeric" // numeric keyboard on mobile
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    className="w-12 h-12 text-center text-xl border-2 border-gray-300
                     rounded-lg outline-none focus:border-blue-500 caret-transparent"
                />
            ))}
        </div>
    );
};

export default OTPInput;
```

**Usage:**

```jsx
<OTPInput length={6} onComplete={(code) => console.log("OTP entered:", code)} />
```

---

### Key Design Decisions — Explained for Interviews

| Decision                                      | Why                                                                                                                                                           |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `otp` as `string[]` in state                  | Controlled inputs — React is the source of truth. Each box displays `otp[index]`.                                                                             |
| `inputRefs` as `useRef([])`                   | We need to call `.focus()` imperatively — that's a side effect, not render logic. Using `useState` for refs would cause unnecessary re-renders.               |
| `ref={(el) => inputRefs.current[index] = el}` | Callback ref — dynamically assigns each DOM element into the ref array at the right index. Can't use `createRef` in a loop because it resets on every render. |
| `maxLength={1}`                               | Prevents the browser from allowing more than one character in the input — first line of defense.                                                              |
| `inputMode="numeric"`                         | Shows the numeric keypad on mobile (iOS/Android) without using `type="number"` (which has a spinner and allows letters like `e`, `+`).                        |
| `type="text"`                                 | Avoids `type="number"` quirks (leading zeros silently dropped, `e` allowed).                                                                                  |
| `!/^\d$/.test(val)` guard                     | Server-side defense — even if `maxLength` is bypassed, only single digits pass.                                                                               |
| `caret-transparent` Tailwind                  | Hides the text cursor — OTP boxes look cleaner without a blinking caret.                                                                                      |
| `onPaste` on each box                         | Paste event bubbles — attaching it to any one box works, but attaching to all ensures detection regardless of which box is focused.                           |

---

### The `useRef` Array Pattern — Deep Dive

```jsx
// ❌ WRONG: useRef inside loop is illegal (violates Rules of Hooks)
otp.map((_, i) => {
    const ref = useRef(null); // never do this
});

// ❌ WRONG: createRef in render — creates a new ref object every render,
//           losing the DOM node reference
const refs = otp.map(() => React.createRef());

// ✅ CORRECT: Single useRef holding an array, populated via callback refs
const inputRefs = useRef([]);
// Then in JSX:
// ref={(el) => (inputRefs.current[index] = el)}
// React calls this callback with the DOM node when mounted, and null when unmounted.
```

---

### State Flow Diagram

```mermaid
flowchart TD
    A["User types '7' in box 3"] --> B["handleChange(e, 3)"]
    B --> C["Validate: /^\\d$/.test('7') → true"]
    C --> D["newOtp = [...otp]; newOtp[3] = '7'"]
    D --> E["setOtp(newOtp) → re-render, box 3 shows '7'"]
    D --> F["index < 5 → inputRefs.current[4].focus()"]
    E --> G{"All 6 filled?"}
    G -- yes --> H["onComplete('123456')"]
    G -- no --> I["Wait for next input"]

    J["User presses Backspace on box 3 (empty)"] --> K["handleKeyDown(e, 3)"]
    K --> L["otp[3] === '' → go back"]
    L --> M["newOtp[2] = ''  setOtp(newOtp)"]
    M --> N["inputRefs.current[2].focus()"]
```

---

### Common Follow-Up Questions

**Q: Why not use a single `<input type="text" maxLength={6}">` instead of 6 boxes?**  
Single input is simpler but you lose the visual "box-per-digit" UX that OTP flows are designed around. Six separate controlled inputs let you style each box independently (highlight the active one, show error state per digit, etc.).

**Q: How would you make it accessible (a11y)?**

```jsx
<input
  aria-label={`OTP digit ${index + 1} of ${length}`}
  autoComplete={index === 0 ? "one-time-code" : "off"}
  // "one-time-code" lets iOS/Android auto-fill from SMS
  ...
/>
```

**Q: What if someone holds down a key?**  
`onChange` fires for each character inserted. Since `maxLength={1}` and we validate `/^\d$/` (exactly one digit), held keys that produce repeated characters are blocked after the first accepted character moves focus away.

**Q: How to reset the OTP (e.g., on wrong code)?**

```jsx
const reset = () => {
    setOtp(Array(length).fill(""));
    inputRefs.current[0].focus();
};
```

---

## Module 8 — Interview Q&A

**Q: How does React handle events? What is event delegation?**
> React doesn't attach event listeners to individual DOM nodes. Instead it attaches a **single listener at the React root** (`document` in React 16, root container in React 17+). When you click a button, the event bubbles up to the root listener, which dispatches it to the correct handler via a synthetic event. This is event delegation — one listener for thousands of elements, which is more memory-efficient and works with dynamic elements.

**Q: What is a Synthetic Event?**
> A cross-browser wrapper around the native DOM event. It normalizes behavior differences across browsers (e.g., `event.target`, `event.preventDefault()`). In React 17+, synthetic events are no longer pooled (old gotcha of `event.persist()` is gone).

**Q: What is the difference between `value` and `defaultValue` in a form input?**
> `value` creates a **controlled input** — React state owns the value, you must provide `onChange`. `defaultValue` creates an **uncontrolled input** — the DOM owns the value, React sets it only on initial mount. Mixing `value` without `onChange` creates a read-only input and a console warning.

**Q: Why use React Hook Form instead of manual `useState` for forms?**
> React Hook Form registers inputs via refs (uncontrolled), so typing doesn't trigger React re-renders on every keystroke. For a 20-field form: manual `useState` = 20 re-renders per keystroke; RHF = 0 re-renders during typing, 1 on submit. Also provides built-in validation, error state, `isDirty`/`isSubmitting` states, and integrates with Zod/Yup schema validation.

**Q: How would you build a 6-digit OTP input?** *(asked at Flipkart, Swiggy, Razorpay)*
> State: `string[]` of length 6. Refs: `useRef([])` array to imperatively focus cells. On keydown: if digit, fill current cell and move focus to next. If Backspace, clear current and move focus to previous. On paste: split clipboard string across cells and focus last filled. This is a pure keyboard navigation + controlled input problem.

---

## Module 8 Summary

| Concept              | Key Takeaway                                                               |
| -------------------- | -------------------------------------------------------------------------- |
| **Synthetic Events** | Cross-browser event wrappers; React uses event delegation at the root      |
| **Controlled**       | React state = source of truth. Good for live validation, formatting        |
| **Uncontrolled**     | DOM = source of truth. Good for file inputs, simple submit-only forms      |
| **React Hook Form**  | Zero re-renders during typing; less code; built-in validation              |
| **OTP Input UI**     | Controlled `string[]` state + `useRef([])` array + keyboard/paste handling |

---

[↑ Back to TOC](#table-of-contents)

# Module 9: Component Design Patterns

> **Topics**: Presentational vs Container, Lifting State Up, Composition vs Inheritance, SPA concept

---

## 9.1 — Single Page Application (SPA)

### The Why

Traditional websites reload the entire page on every navigation. SPAs load **once** and update only what changes — making them feel like native apps.

```mermaid
graph TD
    subgraph Traditional Website
        A1[User clicks link] --> B1[Browser requests new page from server]
        B1 --> C1[Server sends full HTML]
        C1 --> D1[Browser reloads entirely]
    end

    subgraph Single Page Application
        A2[User clicks link] --> B2[JavaScript intercepts the click]
        B2 --> C2[React Router updates the URL]
        C2 --> D2[React re-renders only the changed components]
    end
```

React doesn't come with routing built in. **React Router** (covered in Module 10) is the standard library that makes SPAs work.

---

## 9.2 — Presentational vs Container Components

### The Why

Imagine you have a `UserCard` component that both fetches user data from an API **and** decides how to display it. What happens when the designer wants to change the look? You have to dig through API logic. What if you want to reuse the same card design for a different API? You can't — it's all tangled together.

Separating these responsibilities into two types of components solves both problems:

- **Presentational (Dumb) Component**: Only cares about **how things look**. It receives everything it needs via props. It has zero knowledge of APIs, Redux, or business logic. It's like a painting — it shows what you give it.
- **Container (Smart) Component**: Only cares about **how things work**. It fetches data, manages state, and handles logic. It hands the results down to the presentational component. It's like the art curator who gets the painting and knows where to hang it.

```mermaid
graph TD
    API["🌐 API / Redux Store"] -->|fetches data| CC["Container Component<br/>(Smart)<br/>• useState<br/>• useEffect<br/>• API calls<br/>• Business logic"]
    CC -->|passes props| PC["Presentational Component<br/>(Dumb)<br/>• Only JSX<br/>• No logic<br/>• Receives name, avatar, onFollow"]
    PC --> UI["Rendered UI"]

    style CC fill:#f0ad4e,color:#000
    style PC fill:#61dafb,color:#000
    style UI fill:#28a745,color:#fff
```

| Container Component                | Presentational Component       |
| ---------------------------------- | ------------------------------ |
| Knows about data, API calls, state | Knows only about props         |
| Has business logic                 | Has zero business logic        |
| Hard to reuse                      | Highly reusable                |
| Hard to test in isolation          | Easy to test (just pass props) |

```jsx
// ============================================================
// ✅ PATTERN: Container (smart) + Presentational (dumb) split
// ============================================================

// PRESENTATIONAL — only cares about how things look
// Easy to use in Storybook, easy to test, easy to redesign
function UserCardView({ name, avatar, email, onFollow, isFollowing }) {
    return (
        <div className="card">
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>{email}</p>
            <button onClick={onFollow}>
                {isFollowing ? "Unfollow" : "Follow"}
            </button>
        </div>
    );
}

// CONTAINER — handles data fetching and logic
// If the design changes, only UserCardView needs updating, not this
function UserCardContainer({ userId }) {
    const { data: user, isLoading } = useFetch(`/api/users/${userId}`);
    const [isFollowing, setIsFollowing] = useState(false);

    if (isLoading) return <Spinner />;

    function handleFollow() {
        setIsFollowing((prev) => !prev);
        followUser(userId); // API call
    }

    // The container feeds data + handlers to the presentational component
    return (
        <UserCardView
            name={user.name}
            avatar={user.avatar}
            email={user.email}
            onFollow={handleFollow}
            isFollowing={isFollowing}
        />
    );
}
```

---

## 9.3 — Lifting State Up

### The Why

Imagine two sibling components — a `CelsiusInput` and a `FahrenheitDisplay`. The user types in Celsius, and the Fahrenheit display should update in sync. But if each component manages its own state, they have **no way to talk to each other** — they're isolated islands.

The solution is to **lift the state up** to their closest shared parent. The parent becomes the single source of truth. It owns the state and **passes it down as props** to both children. When the user types, the child tells the parent (via a callback prop), the parent updates its state, and both children re-render with the new value.

```mermaid
graph TD
    P["Parent Component<br/>🏠 Owns: celsius state<br/>Passes: celsius, setCelsius"]
    CI["CelsiusInput<br/>Receives: value, onChange<br/>Shows: input field"]
    FD["FahrenheitDisplay<br/>Receives: fahrenheit (derived)<br/>Shows: read-only value"]

    P -->|celsius value| CI
    P -->|onChange callback| CI
    P -->|fahrenheit = celsius * 9/5 + 32| FD
    CI -->|user types → calls onChange| P

    style P fill:#7952b3,color:#fff
    style CI fill:#61dafb,color:#000
    style FD fill:#61dafb,color:#000
```

> **Simple rule**: State should live in the lowest common ancestor of all components that need it.

```jsx
// ============================================================
// ❌ BAD CODE: Each component has its own copy of the temperature
// They can never stay in sync!
// ============================================================
function CelsiusInput() {
    const [temp, setTemp] = useState(""); // Its own isolated state
    return <input value={temp} onChange={(e) => setTemp(e.target.value)} />;
}
function FahrenheitDisplay() {
    // No way to know what CelsiusInput has — completely disconnected!
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: Lift state to the common parent
// ============================================================
function TemperatureConverter() {
    // The state lives HERE — the common parent of both inputs
    const [celsius, setCelsius] = useState("");

    const fahrenheit = celsius ? ((celsius * 9) / 5 + 32).toFixed(1) : "";

    return (
        <div>
            {/* Parent passes state down + the setter (as a callback) */}
            <input
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
                placeholder="Celsius"
            />
            {/* Read-only display — receives derived value as prop */}
            <input value={fahrenheit} readOnly placeholder="Fahrenheit" />
        </div>
    );
}
```

---

## 9.4 — Composition vs Inheritance

### The Why

In Java or C#, you share behavior by extending a base class: `class FancyButton extends Button`. In React, this doesn't work well because components render JSX trees, not objects with methods you can cleanly override.

React's answer is **composition**: instead of _extending_ a component, you _use_ it inside another. You pass content in via `children` (like HTML's slots) or via explicit props. Think of it like LEGO bricks — you never modify a brick, you just connect them together in different ways.

```mermaid
graph LR
    subgraph Inheritance - Avoid
        B1[Button] -->|extends| FB1[FancyButton]
        FB1 -->|extends| PB1[PrimaryFancyButton]
        PB1 -->|deep coupling, brittle| X["❌ Hard to maintain"]
    end

    subgraph Composition - Preferred
        BT[Button variant=primary] -->|used inside| C[Card]
        IC[Icon] -->|used inside| C
        C -->|used inside| P[Page]
        P --> V["✅ Flexible, reusable"]
    end
```

> **Why?** React components are functions. You can pass _anything_ as a prop — including other components (via `children` or explicit props). This gives you all the power of inheritance and more.

```jsx
// ============================================================
// ❌ BAD CODE: Trying to use inheritance for specialization
// ============================================================
// In React, this pattern is almost always wrong.
// You can't inherit JSX or render methods cleanly.
class FancyButton extends Button {
    // Don't do this
    render() {
        return <button className="fancy">{this.props.children}</button>;
    }
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE 1: Children prop for containment (slots)
// ============================================================
// A generic Box that can contain ANY content
function Card({ children, title, className = "" }) {
    return (
        <div className={`card ${className}`}>
            {title && <h3 className="card-title">{title}</h3>}
            <div className="card-body">{children}</div> {/* children = slot */}
        </div>
    );
}

// Usage — Card doesn't know or care what's inside
function UserProfile({ user }) {
    return (
        <Card title="Profile">
            <img src={user.avatar} alt={user.name} />
            <p>{user.bio}</p>
        </Card>
    );
}

// ✅ BEST PRACTICE 2: Props for specialization (instead of inheritance)
function Button({ children, variant = "default", size = "md", ...rest }) {
    return (
        <button className={`btn btn-${variant} btn-${size}`} {...rest}>
            {children}
        </button>
    );
}

// Specialized "components" are just pre-configured versions via props
const PrimaryButton = (props) => <Button variant="primary" {...props} />;
const DangerButton = (props) => <Button variant="danger" {...props} />;
```

---

## 9.5 — Data-Driven UI & Config-Driven UI

> One of the most important patterns for building scalable, maintainable React apps. Used heavily by Swiggy, Zomato, Flipkart, and every product company at scale.

---

### What Is Data-Driven UI?

**Data-Driven UI** means the UI is entirely determined by the data that arrives from the server — not hardcoded in the component. The component is a generic renderer; the shape and content of the UI come from data.

**The core idea:** Your server returns a payload that describes *what* to show. Your React app renders *whatever* that payload describes.

```mermaid
graph LR
    SERVER["Server / API<br/>Returns JSON data"] -->|"{ type, items, layout }"| REACT["React Component<br/>(Generic Renderer)"]
    REACT --> UI["UI built entirely from data"]

    style SERVER fill:#f6921e,color:#fff
    style REACT fill:#61dafb,color:#000
    style UI fill:#28a745,color:#fff
```

---

### The Problem Data-Driven UI Solves

```jsx
// ❌ HARDCODED UI — requires a code deploy to change anything
function Homepage() {
    return (
        <div>
            <HeroBanner title="Summer Sale" image="/banner1.jpg" />
            <ProductGrid category="electronics" limit={8} />
            <PromoStrip text="Free delivery above ₹499" />
            <ProductGrid category="fashion" limit={4} />
        </div>
    );
}
// To swap the banner, add a section, or reorder content → code change + deploy.
// Marketing team is blocked by engineering every time.
```

```jsx
// ✅ DATA-DRIVEN — server controls the layout, engineering deploys once
function Homepage({ pageData }) {
    return (
        <div>
            {pageData.sections.map(section => (
                <DynamicSection key={section.id} config={section} />
            ))}
        </div>
    );
}
// Marketing changes the CMS → API returns a different payload → UI changes instantly.
// Zero code deploys needed. ✔
```

---

### Real-World Example: Swiggy / Zomato Homepage

Food delivery apps are a classic example. The homepage cards, banners, and restaurant listings are ALL driven by an API response — so the product team can run A/B tests, run campaigns, and personalise content per user without touching React code.

```json
// API Response — /api/homepage
{
  "sections": [
    {
      "id": "hero",
      "type": "HeroBanner",
      "data": { "title": "Order Food Fast", "imageUrl": "/hero.jpg", "ctaText": "Order Now" }
    },
    {
      "id": "offers",
      "type": "OfferCarousel",
      "data": { "offers": [{ "id": 1, "discount": "50% OFF", "code": "FIRST50" }] }
    },
    {
      "id": "restaurants",
      "type": "RestaurantGrid",
      "data": { "title": "Nearby Restaurants", "items": [...] }
    },
    {
      "id": "promo",
      "type": "PromoStrip",
      "data": { "text": "Free delivery on orders above ₹199" }
    }
  ]
}
```

```jsx
// ---- Component Registry — maps type strings to React components ----
import HeroBanner from "./sections/HeroBanner";
import OfferCarousel from "./sections/OfferCarousel";
import RestaurantGrid from "./sections/RestaurantGrid";
import PromoStrip from "./sections/PromoStrip";

const COMPONENT_MAP = {
    HeroBanner,
    OfferCarousel,
    RestaurantGrid,
    PromoStrip,
};

// ---- Dynamic Section Renderer ----
function DynamicSection({ config }) {
    const Component = COMPONENT_MAP[config.type];

    if (!Component) {
        console.warn(`Unknown section type: ${config.type}`);
        return null; // Gracefully skip unknown types — future-proof
    }

    return <Component {...config.data} />;
}

// ---- Page Component — drives entirely from API data ----
function Homepage() {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        fetch("/api/homepage")
            .then(r => r.json())
            .then(setPageData);
    }, []);

    if (!pageData) return <PageSkeleton />;

    return (
        <div className="homepage">
            {pageData.sections.map(section => (
                <DynamicSection key={section.id} config={section} />
            ))}
        </div>
    );
}
```

**Each section component just receives its `data` as props:**

```jsx
function HeroBanner({ title, imageUrl, ctaText }) {
    return (
        <div className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
            <h1>{title}</h1>
            <button>{ctaText}</button>
        </div>
    );
}

function PromoStrip({ text }) {
    return <div className="promo-strip">{text}</div>;
}
```

---

### What Is Config-Driven UI?

**Config-Driven UI** is a specific form of data-driven UI where a **configuration object** (usually defined by the developer, not the server) drives the structure, behaviour, and rendering of a component. The component is a generic engine — the config is its instructions.

**The most common use cases:**
- Tables (column definitions drive the entire table)
- Forms (field definitions drive the entire form)
- Navigation menus (menu config drives the entire nav)
- Dashboards (widget config drives the layout)

**The mental model:**

```
Config Object → Generic Component → Rendered UI
```

Instead of writing `<th>Name</th><td>{user.name}</td>` for every column, you write a column config once and let a generic `Table` component handle all the rendering.

---

### Config-Driven Table — The Classic Example

```jsx
// ============================================================
// ✅ CONFIG-DRIVEN TABLE
// ============================================================

// 1. Define column config — this is the "config" that drives the table
const USER_TABLE_COLUMNS = [
    {
        label: "Name",               // Header text
        key: "name",                 // Data key
        render: (user) => (          // Custom render function (optional)
            <div className="user-cell">
                <img src={user.avatar} alt={user.name} className="avatar" />
                <span>{user.name}</span>
            </div>
        ),
        sortValue: (user) => user.name.toLowerCase(), // What to sort by
    },
    {
        label: "Email",
        key: "email",
        // No render fn → falls back to plain text: user["email"]
        sortValue: (user) => user.email,
    },
    {
        label: "Role",
        key: "role",
        render: (user) => (
            <span className={`badge badge-${user.role}`}>{user.role}</span>
        ),
    },
    {
        label: "Status",
        key: "isActive",
        render: (user) => (
            <span>{user.isActive ? "✅ Active" : "❌ Inactive"}</span>
        ),
        sortValue: (user) => (user.isActive ? 1 : 0),
    },
    {
        label: "Actions",
        key: "actions",
        render: (user, { onEdit, onDelete }) => (
            <div>
                <button onClick={() => onEdit(user.id)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
            </div>
        ),
    },
];

// 2. Generic Table component — driven entirely by config
function Table({ columns, data, context = {} }) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map(col => (
                        <th key={col.key}>{col.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={row.id ?? rowIndex}>
                        {columns.map(col => (
                            <td key={col.key}>
                                {col.render
                                    ? col.render(row, context)   // Custom render
                                    : row[col.key]               // Plain value fallback
                                }
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

// 3. Usage — swap configs to get a completely different table, zero new JSX
function UsersPage({ users, onEdit, onDelete }) {
    return (
        <Table
            columns={USER_TABLE_COLUMNS}
            data={users}
            context={{ onEdit, onDelete }}
        />
    );
}

// Reuse the SAME Table component for a completely different entity:
const ORDERS_TABLE_COLUMNS = [
    { label: "Order ID", key: "id" },
    { label: "Total", key: "total", render: (order) => `₹${order.total}` },
    { label: "Status", key: "status", render: (order) => <StatusBadge status={order.status} /> },
];

function OrdersPage({ orders }) {
    return <Table columns={ORDERS_TABLE_COLUMNS} data={orders} />;
}
// Same Table component, completely different output. ✔
```

---

### Config-Driven Form — Another Classic

```jsx
// ---- Form field config ----
const REGISTER_FORM_CONFIG = [
    {
        name: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        validation: { required: true, minLength: 2 },
    },
    {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "you@example.com",
        validation: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Min 8 characters",
        validation: { required: true, minLength: 8 },
    },
    {
        name: "role",
        label: "Role",
        type: "select",
        options: [
            { value: "user", label: "User" },
            { value: "admin", label: "Admin" },
            { value: "moderator", label: "Moderator" },
        ],
        validation: { required: true },
    },
];

// ---- Generic Form Engine ----
function DynamicForm({ config, onSubmit }) {
    const [values, setValues] = useState(
        // Initialise state from config — no hardcoding field names
        Object.fromEntries(config.map(field => [field.name, ""]))
    );
    const [errors, setErrors] = useState({});

    function handleChange(name, value) {
        setValues(prev => ({ ...prev, [name]: value }));
    }

    function validate() {
        const newErrors = {};
        config.forEach(field => {
            const value = values[field.name];
            if (field.validation?.required && !value) {
                newErrors[field.name] = `${field.label} is required`;
            }
            if (field.validation?.minLength && value.length < field.validation.minLength) {
                newErrors[field.name] = `${field.label} must be at least ${field.validation.minLength} characters`;
            }
            if (field.validation?.pattern && !field.validation.pattern.test(value)) {
                newErrors[field.name] = `${field.label} is invalid`;
            }
        });
        return newErrors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        onSubmit(values);
    }

    return (
        <form onSubmit={handleSubmit}>
            {config.map(field => (
                <div key={field.name} className="form-field">
                    <label htmlFor={field.name}>{field.label}</label>

                    {field.type === "select" ? (
                        <select
                            id={field.name}
                            value={values[field.name]}
                            onChange={e => handleChange(field.name, e.target.value)}
                        >
                            <option value="">Select...</option>
                            {field.options.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            id={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={values[field.name]}
                            onChange={e => handleChange(field.name, e.target.value)}
                        />
                    )}

                    {errors[field.name] && (
                        <p className="error">{errors[field.name]}</p>
                    )}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}

// Usage — swap config to get a completely different form
function RegisterPage() {
    return <DynamicForm config={REGISTER_FORM_CONFIG} onSubmit={handleRegister} />;
}

// Reuse for login — completely different form, same engine
const LOGIN_FORM_CONFIG = [
    { name: "email", label: "Email", type: "email", validation: { required: true } },
    { name: "password", label: "Password", type: "password", validation: { required: true } },
];

function LoginPage() {
    return <DynamicForm config={LOGIN_FORM_CONFIG} onSubmit={handleLogin} />;
}
```

---

### Config-Driven Navigation

```jsx
// ---- Navigation config ----
const NAV_CONFIG = [
    { label: "Home", path: "/", icon: "🏠", roles: ["user", "admin"] },
    { label: "Orders", path: "/orders", icon: "📦", roles: ["user", "admin"] },
    { label: "Products", path: "/products", icon: "🛒", roles: ["user", "admin"] },
    { label: "Analytics", path: "/analytics", icon: "📊", roles: ["admin"] },
    { label: "Users", path: "/users", icon: "👥", roles: ["admin"] },
    { label: "Settings", path: "/settings", icon: "⚙️", roles: ["user", "admin"] },
];

// ---- Generic Nav Component ----
function Sidebar({ userRole }) {
    const visibleLinks = NAV_CONFIG.filter(item => item.roles.includes(userRole));

    return (
        <nav className="sidebar">
            {visibleLinks.map(item => (
                <NavLink key={item.path} to={item.path} className="nav-item">
                    <span className="icon">{item.icon}</span>
                    <span className="label">{item.label}</span>
                </NavLink>
            ))}
        </nav>
    );
}
// Add a new nav item → update config, zero JSX changes. ✔
// New admin-only page → add it with roles: ["admin"], auto-hidden for users. ✔
```

---

### Data-Driven vs Config-Driven — Key Difference

| | Data-Driven UI | Config-Driven UI |
|---|---|---|
| **Config source** | Server / API (runtime) | Developer / codebase (build time) |
| **Who controls it** | Product/Marketing (via CMS or API) | Developer |
| **Changes require deploy?** | ❌ No — server sends new data | ✅ Yes — config lives in code |
| **Use case** | Homepage layouts, A/B testing, personalisation | Tables, forms, nav menus, dashboards |
| **Examples** | Swiggy homepage, Netflix rows | Admin dashboard columns, form builders |

---

### Why These Patterns Matter (Interview Angle)

> **Why do companies like Swiggy and Flipkart use data-driven UI?**

1. **Deployment decoupling** — Marketing/product teams change the UI without a code deploy. A banner update goes live in seconds, not days.
2. **A/B testing** — Show version A of the homepage to 50% of users, version B to the other 50%. Zero code branches.
3. **Personalisation** — Server returns a different layout for each user based on their history, location, or segment.
4. **Scalability** — One generic renderer handles any number of section types. Adding a new section type = add one new component + register it in the map.

> **Why do companies use config-driven UI for tables and forms?**

1. **DRY** — One `Table` component handles 20 different entity types with no duplication.
2. **Consistency** — All tables share the same sorting, pagination, and styling logic.
3. **Maintainability** — Bug in sorting? Fix it once in the `Table` component — all tables are fixed.
4. **Speed** — Adding a new admin table takes minutes (write a column config) instead of hours.

---

### Real Interview Question

> **"How would you build the Swiggy homepage?"**

**Answer structure:**
1. Fetch a page config from `/api/homepage` that describes sections as an array of `{ id, type, data }` objects
2. Build a component registry (`COMPONENT_MAP`) mapping type strings to React components
3. Build a `DynamicSection` renderer that looks up the component and passes `data` as props
4. Map over `pageData.sections` in the page component
5. Handle unknown types gracefully (`console.warn` + `return null`)
6. Add Suspense for loading and ErrorBoundary for error states

---

## Module 9 — Interview Q&A

**Q: What is "lifting state up"? When do you do it?**
> When two sibling components need to share state, move the state to their closest common ancestor. The parent holds the state and passes it down as props along with a setter callback. This is React's answer to sibling communication — no library needed. If state needs to be shared across many unrelated components, lift it all the way to Context.

**Q: What is the difference between composition and inheritance in React?**
> React recommends composition over inheritance. Composition = passing components as `children` or explicit props instead of extending a class. Example: `<Modal><LoginForm /></Modal>` — Modal doesn't know what's inside it, it just renders `props.children`. Inheritance would be `class LoginModal extends Modal` — React's team has never found a case where inheritance was necessary.

**Q: What is the Container/Presentational (Smart/Dumb) pattern?**
> Split components into two types: **Container** (smart) — fetches data, manages state, connects to Redux/Context, no JSX styling. **Presentational** (dumb) — pure visual component, receives everything via props, no data fetching. Benefit: presentational components are easily testable (pure, no network), reusable (works with any data source), and can be previewed in Storybook.

**Q: What is config-driven UI? Give an example.**
> Config-driven UI uses a data structure (JSON/object) to describe what to render, instead of hardcoding JSX. A `COMPONENT_MAP` maps type strings to components; a generic renderer iterates the config and renders the right component for each entry. Example: Swiggy's homepage layout comes from the API — the server controls which sections appear, in what order, without a frontend deploy. Used for tables (column config), forms (field config), navbars (menu item config with RBAC).

**Q: In an interview, how would you describe your approach to designing a new component?**
> (1) Identify what data it needs (props/state). (2) Decide if it's pure presentational or needs side effects. (3) Consider reusability — should it be generic (accept `children`) or specific? (4) Plan the API — what props does the consumer need to provide? (5) Consider edge cases: loading, empty, error states. (6) Add Suspense/ErrorBoundary wrappers at the right level.

---

## Module 9 Summary

| Concept                      | Key Takeaway                                                     |
| ---------------------------- | ---------------------------------------------------------------- |
| **SPA**                      | One HTML page; React Router swaps views without full page reload |
| **Presentational/Container** | Split "what it looks like" from "how it works" for testability   |
| **Lifting State Up**         | Shared state lives in the lowest common ancestor                 |
| **Composition**              | Pass components as props/children instead of extending classes   |
| **Data-Driven UI**           | Server controls layout via JSON; component is a generic renderer |
| **Config-Driven UI**         | Config object drives tables, forms, navs — one component, many shapes |

---

[↑ Back to TOC](#table-of-contents)

# Module 10: Routing with React Router

> **Topics**: Route configuration, dynamic routes, nested routes, protected routes, navigation

---

## 10.1 — The Why

React renders components. It doesn't, by itself, know anything about URLs. **React Router** bridges the gap — it maps URLs to components, making your SPA feel like a traditional multi-page website (but faster).

Think of React Router as a **traffic controller** inside your app. When the URL changes (either the user typed it, clicked a link, or your code navigated programmatically), React Router looks at the URL and decides which component to render. The browser never actually loads a new page — it all happens inside the same JavaScript environment.

```mermaid
flowchart TD
    URL["URL Changes<br/>/dashboard/profile"] --> RR["React Router<br/>(BrowserRouter)"]
    RR --> M{"Match Routes"}
    M -->|"path=/dashboard"| DL["DashboardLayout renders"]
    DL --> M2{"Match Child Routes"}
    M2 -->|"path=profile"| PP["ProfilePage renders in Outlet"]
    M2 -->|"path=settings"| SP["SettingsPage renders in Outlet"]
    M -->|"path=*"| NF["NotFoundPage renders"]

    style RR fill:#f0ad4e,color:#000
    style DL fill:#7952b3,color:#fff
    style PP fill:#28a745,color:#fff
```

---

## 10.2 — Basic Setup

```jsx
// main.jsx or App.jsx — wrap everything in a Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            {/* BrowserRouter uses the browser's history API to manage URLs */}
            <Routes>
                {/* Each Route maps a URL path to a component */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />{" "}
                {/* 404 catch-all */}
            </Routes>
        </BrowserRouter>
    );
}
```

---

## 10.3 — Navigation

### How Client-Side Navigation Works

When you click a regular `<a href="/about">`, the browser sends an HTTP request to the server and loads a whole new HTML page. The React app loses all its state — it starts from scratch.

React Router's `<Link>` component **intercepts that click**. Instead of letting the browser navigate, it tells the browser's History API to change the URL silently, then tells React Router to render the right component. No network request. No page reload. The app state is preserved.

```mermaid
sequenceDiagram
    participant User
    participant Link
    participant HistoryAPI
    participant ReactRouter
    participant Component

    User->>Link: Click
    Link->>HistoryAPI: history.pushState('/about')
    HistoryAPI-->>Link: URL updated silently
    Link->>ReactRouter: URL changed to /about
    ReactRouter->>Component: Render AboutPage
    Note over User,Component: No HTTP request. No full page reload.
```

```jsx
// ============================================================
// ✅ Navigation components and hooks
// ============================================================
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate(); // Programmatic navigation

    function handleLogout() {
        logout(); // Clear auth data
        navigate("/login"); // Redirect after action
    }

    return (
        <nav>
            {/* Link = <a> that doesn't reload the page */}
            <Link to="/">Home</Link>

            {/* NavLink = Link that adds an "active" class when the route matches */}
            <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                About
            </NavLink>

            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}
```

---

## 10.4 — Dynamic Routes

Dynamic routes have parts that change based on data — like `/users/123` or `/products/shoes`. The colon (`:`) in the route path is a **placeholder** — React Router will match any value there and give it to you via `useParams()`.

Think of it like a template: `"/users/:userId"` is the template, and `/users/123` is one specific instance. The `:userId` part captures whatever is in that position of the URL.

```mermaid
flowchart LR
    U1["URL: /users/42"] --> R["Route: /users/:userId"]
    U2["URL: /users/alice"] --> R
    U3["URL: /users/99"] --> R
    R --> UP["useParams()<br/>{ userId: '42' }<br/>{ userId: 'alice' }<br/>{ userId: '99' }"]
    UP --> F["fetch('/api/users/' + userId)"]
    F --> C["Render UserPage with correct user"]
```

```jsx
import { useParams } from "react-router-dom";

// Route definition in App.jsx:
// <Route path="/users/:userId" element={<UserPage />} />
// The colon (:) marks userId as a URL parameter

function UserPage() {
    const { userId } = useParams(); // Extract the dynamic segment from the URL
    const { data: user } = useFetch(`/api/users/${userId}`);

    return <div>{user?.name}</div>;
}
```

---

## 10.5 — Nested Routes (Layouts)

Nested routes let you share a layout (like a sidebar or navbar) across multiple pages. Without nested routes, you'd have to copy the `<Sidebar>` and `<Header>` into every page component — a maintenance nightmare.

The `<Outlet />` component is the **window** where child routes appear. The parent layout renders once, and only the content inside `<Outlet />` changes as the user navigates between child routes.

```mermaid
graph TD
    subgraph DashboardLayout renders once
        H[Header]
        S[Sidebar]
        O["&lt;Outlet /&gt; — content changes here"]
    end
    O -->|URL: /dashboard| DH[DashboardHome]
    O -->|URL: /dashboard/profile| PP[ProfilePage]
    O -->|URL: /dashboard/settings| SP[SettingsPage]

    style O fill:#f0ad4e,color:#000
    style H fill:#e9ecef,color:#000
    style S fill:#e9ecef,color:#000
```

```jsx
// App.jsx
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Dashboard layout wraps all /dashboard/* routes */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    {/* index = the default child route (matches /dashboard exactly) */}
                    <Route index element={<DashboardHome />} />
                    <Route path="profile" element={<ProfilePage />} />{" "}
                    {/* /dashboard/profile */}
                    <Route path="settings" element={<SettingsPage />} />{" "}
                    {/* /dashboard/settings */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

// DashboardLayout renders the shared sidebar + an Outlet for child routes
import { Outlet } from "react-router-dom";

function DashboardLayout() {
    return (
        <div className="dashboard">
            <Sidebar />
            <main>
                <Outlet /> {/* Child route renders HERE */}
            </main>
        </div>
    );
}
```

---

## 10.6 — Protected Routes

Protected routes redirect unauthenticated users to the login page. The pattern works by wrapping protected child routes in a **guard component** that checks auth state before allowing access.

Here's exactly what happens when an unauthenticated user tries to visit `/dashboard`:

```mermaid
sequenceDiagram
    participant User
    participant ReactRouter
    participant ProtectedRoute
    participant AuthHook
    participant Dashboard

    User->>ReactRouter: Navigate to /dashboard
    ReactRouter->>ProtectedRoute: Render guard component
    ProtectedRoute->>AuthHook: useAuth() — is user logged in?
    AuthHook-->>ProtectedRoute: { user: null, isLoading: false }
    ProtectedRoute->>ReactRouter: return Navigate to='/login'
    ReactRouter->>User: Redirect to /login page

    Note over User,Dashboard: Dashboard never renders for unauthenticated users
```

```jsx
// ============================================================
// ✅ BEST PRACTICE: Protected route wrapper component
// ============================================================
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const { user, isLoading } = useAuth(); // Your auth hook

    if (isLoading) return <Spinner />; // Wait for auth state to load

    // If not logged in, redirect to login; preserve the intended URL
    if (!user) return <Navigate to="/login" replace />;

    // Logged in — render the protected child route
    return <Outlet />;
}

// App.jsx usage
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />

                {/* All routes inside ProtectedRoute require authentication */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
```

---

---

## 10.7 — Useful Router Hooks

| Hook                | What it does                                      |
| ------------------- | ------------------------------------------------- |
| `useParams()`       | Get URL parameters like `:userId`                 |
| `useNavigate()`     | Programmatic navigation (`navigate('/home')`)     |
| `useLocation()`     | Get current URL, pathname, search params          |
| `useSearchParams()` | Read/write URL query strings (`?page=2&sort=asc`) |
| `useMatch()`        | Check if the current URL matches a pattern        |
| `useRouteError()`   | Read the error thrown by a route's loader/action  |
| `useLoaderData()`   | Read data returned by a route's `loader` function |

```jsx
// useSearchParams example — URL-driven filter state
function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category") || "all"; // Read from URL

    return (
        <div>
            <button onClick={() => setSearchParams({ category: "shoes" })}>
                Shoes
            </button>
            <button onClick={() => setSearchParams({ category: "bags" })}>
                Bags
            </button>
            <ProductGrid category={category} />
        </div>
    );
}
```

---

## 10.8 — React Router v7: Data Mode (`createBrowserRouter`)

React Router v7 introduced a **Data Mode** — a more powerful way to define routes using a route config object instead of JSX. This is the recommended modern approach.

### The Three Modes in React Router v7

| Mode            | When to use                                          | Setup                                    |
| --------------- | ---------------------------------------------------- | ---------------------------------------- |
| **Declarative** | Simple apps, migrating from v5/v6                    | `<BrowserRouter>` + JSX `<Routes>`       |
| **Data**        | Medium/large apps — loaders, actions, error handling | `createBrowserRouter` + `RouterProvider` |
| **Framework**   | Full-stack apps (replaces Remix)                     | File-based routing, SSR, server actions  |

### Data Mode Setup

```jsx
// main.jsx
import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import Home from "./Home";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />, // Layout component with <Outlet>
        errorElement: <ErrorPage />, // Renders if loader throws or component crashes
        children: [
            { index: true, element: <Home /> }, // "/" default
            {
                path: "users/:userId",
                element: <UserPage />,
                errorElement: <UserErrorPage />,
                // ← loader runs BEFORE the component renders
                loader: async ({ params }) => {
                    const res = await fetch(`/api/users/${params.userId}`);
                    if (!res.ok)
                        throw new Response("Not Found", { status: 404 });
                    return res.json(); // returned value is available via useLoaderData()
                },
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />,
);
```

### `loader` + `useLoaderData`

The `loader` function runs **before** the route component mounts. It fetches data server-side style — no `useEffect`, no loading state needed inside the component.

```jsx
// ❌ OLD WAY (without loaders) — component manages loading state
function UserPage() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/users/${userId}`)
            .then((r) => r.json())
            .then((data) => {
                setUser(data);
                setLoading(false);
            });
    }, [userId]);

    if (loading) return <Spinner />;
    return <h1>{user.name}</h1>;
}
```

```jsx
// ✅ NEW WAY — loader fetches before render, component just reads
// Route config:
{
  path: "users/:userId",
  loader: async ({ params }) => {
    const user = await fetchUser(params.userId); // fetch before component mounts
    return user;
  },
  element: <UserPage />,
}

// Component — zero loading state, zero useEffect:
function UserPage() {
  const user = useLoaderData(); // typed data from the loader
  return <h1>{user.name}</h1>;
}
```

```mermaid
sequenceDiagram
    participant Browser
    participant Router as React Router
    participant Loader as Route Loader
    participant Component as UserPage

    Browser->>Router: Navigate to /users/42
    Router->>Loader: Call loader({ params: { userId: "42" } })
    Loader->>Loader: await fetch('/api/users/42')
    Loader-->>Router: return { name: "Alice", ... }
    Router->>Component: Render UserPage — useLoaderData() returns the user
    Note over Component: No loading state needed. Data is already there.
```

### `errorElement` + `useRouteError`

When a loader throws (or a component crashes), React Router renders the `errorElement` instead:

```jsx
// ErrorPage.jsx
import { useRouteError, isRouteErrorResponse } from "react-router";

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    // Error thrown from loader with `throw new Response(...)`
    return (
      <div>
        <h1>{error.status} {error.statusText}</h1>
        <p>{error.data}</p>
      </div>
    );
  }

  // Unexpected runtime error
  return <div>Something went wrong: {error.message}</div>;
}

// Route definition:
{
  path: "users/:userId",
  loader: async ({ params }) => {
    const res = await fetch(`/api/users/${params.userId}`);
    if (!res.ok) throw new Response("User not found", { status: 404 }); // caught by errorElement
    return res.json();
  },
  element: <UserPage />,
  errorElement: <ErrorPage />,   // renders on any error in this route subtree
}
```

### All Route Segment Types

```jsx
createBrowserRouter([
    // Static segment
    { path: "/about", element: <About /> },

    // Dynamic segment — :param
    { path: "/users/:userId", element: <User /> },

    // Optional segment — :lang?
    { path: "/:lang?/docs", element: <Docs /> },
    // Matches /docs AND /en/docs AND /fr/docs

    // Splat / catchall — *
    { path: "/files/*", element: <FileExplorer /> },
    // params["*"] holds the rest of the path

    // Index route — renders at parent URL
    { index: true, element: <Home /> },

    // Layout route — no path, wraps children
    {
        element: <MarketingLayout />, // no `path` = layout only
        children: [
            { index: true, element: <HomeMarketing /> },
            { path: "pricing", element: <Pricing /> },
        ],
    },

    // 404 — catch-all at end
    { path: "*", element: <NotFound /> },
]);
```

---

## 10.9 — v6 → v7 Key Differences

| Feature        | v6                       | v7                                          |
| -------------- | ------------------------ | ------------------------------------------- |
| Package name   | `react-router-dom`       | `react-router`                              |
| Data loading   | `useEffect` in component | `loader` in route config                    |
| Error handling | try/catch in component   | `errorElement` per route                    |
| Route config   | JSX `<Routes>/<Route>`   | `createBrowserRouter([...])`                |
| Provider       | `<BrowserRouter>`        | `<RouterProvider router={router}>`          |
| Form mutations | manual fetch             | `action` functions + `useFetcher`           |
| TypeScript     | manual types             | auto-generated route types (framework mode) |

---

## 10.10 — Alternate Routing Libraries

React Router is the most popular, but not the only option:

### TanStack Router

```bash
npm install @tanstack/react-router
```

```tsx
import {
    createRouter,
    createRoute,
    createRootRoute,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({ component: Root });
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
});
const userRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/users/$userId",
    loader: ({ params }) => fetchUser(params.userId),
    component: UserPage,
});

const router = createRouter({
    routeTree: rootRoute.addChildren([indexRoute, userRoute]),
});
```

**Why choose TanStack Router?**

- 100% TypeScript-first — route params and loader data are fully typed automatically
- Built-in search param management with schema validation (Zod)
- Devtools built in
- No implicit `any` — search params, params are all typed

### Wouter

```bash
npm install wouter
```

```jsx
import { Route, Link, Switch } from "wouter";

function App() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/users/:id">{({ id }) => <User id={id} />}</Route>
            <Route>404 Not Found</Route>
        </Switch>
    );
}
```

**Why choose Wouter?**

- Tiny — 2kb gzipped (React Router is ~50kb)
- No context, hook-based
- Perfect for micro-frontends or small apps where bundle size matters

### Next.js App Router (File-based Routing)

```
app/
  page.tsx          → renders at "/"
  about/
    page.tsx        → renders at "/about"
  users/
    [id]/
      page.tsx      → renders at "/users/:id"
      loading.tsx   → automatic Suspense loading state
      error.tsx     → automatic ErrorBoundary
      layout.tsx    → shared layout for /users/*
```

**Why choose Next.js App Router?**

- Zero config routing — file structure = routes
- Server Components by default — data fetching in the component
- Automatic code splitting per route
- Streaming, loading states, and error handling built in

### Comparison Table

| Library            | Bundle Size     | TypeScript         | Data Loading      | SSR                | Best For         |
| ------------------ | --------------- | ------------------ | ----------------- | ------------------ | ---------------- |
| React Router v7    | ~50kb           | Good               | Loaders/Actions   | Via Framework mode | Most SPA apps    |
| TanStack Router    | ~35kb           | Excellent (spec'd) | Loaders (typed)   | Limited            | Type-safe SPAs   |
| Wouter             | ~2kb            | Good               | Manual            | No                 | Small apps       |
| Next.js App Router | N/A (framework) | Excellent          | Server Components | Native             | Full-stack React |

---

## Module 10 — Interview Q&A

**Q: How does React Router know to re-render when the URL changes?**
> React Router's `BrowserRouter` listens for the browser's `popstate` event (back/forward) and subscribes to `history.pushState`/`replaceState` calls. When the URL changes, it updates a Context value with the new location — all `<Route>` components and hooks (`useLocation`, `useParams`) are consumers of that Context and re-render accordingly.

**Q: What is the difference between `<Link>` and a regular `<a>` tag?**
> `<a>` causes a full page reload — the browser fetches a new HTML document. `<Link>` calls `history.pushState()` to update the URL without a network request, then updates React Router's location Context — only the matching route component re-renders. The page never reloads, making navigation feel instant.

**Q: How do you implement a protected route?**
```jsx
function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);
    if (!user) return <Navigate to="/login" replace />;
    return children;
}
// replace prevents the protected route from appearing in browser history
// so Back button doesn't return to the protected page
```

**Q: What is the difference between `useNavigate` and `<Link>`?**
> `<Link>` is declarative — a rendered anchor element the user clicks. `useNavigate()` is imperative — a function you call programmatically in event handlers (after form submit, after API success, after logout). Rule: use `<Link>` for navigation UI; use `useNavigate` for programmatic redirects.

**Q: What is React Router's "Data Mode" (`createBrowserRouter`)?**
> Data Mode uses an object-based config (instead of JSX `<Routes>`) and adds `loader` (fetch data before rendering) and `action` (handle form submissions) to each route. `useLoaderData()` reads the data — no `useEffect`+`useState` needed for initial data fetching. Also adds per-route `errorElement` for error boundaries. This is React Router v6.4+ and v7.

**Q: How do you lazy-load a route in React?**
```jsx
const Settings = React.lazy(() => import('./pages/Settings'));

<Route
    path="/settings"
    element={
        <Suspense fallback={<PageSpinner />}>
            <Settings />
        </Suspense>
    }
/>
// The Settings bundle is only downloaded when the user navigates to /settings
```

---

## Module 10 Summary

| Concept                       | Key Takeaway                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------- |
| `BrowserRouter`               | Enables URL-based routing using browser history API (Declarative mode)          |
| `createBrowserRouter`         | Object-based router config — enables loaders, actions, errorElement (Data mode) |
| `RouterProvider`              | Replaces `<BrowserRouter>` wrapper in Data mode                                 |
| `Routes` / `Route`            | Maps URL paths to components (Declarative mode)                                 |
| `Link` / `NavLink`            | Client-side navigation without full page reload                                 |
| `useNavigate`                 | Programmatic redirect after actions (login, submit)                             |
| Dynamic routes (`:param`)     | URL segments that carry data — read with `useParams()`                          |
| Optional segments (`:param?`) | Match URL segment optionally                                                    |
| Splat routes (`/*`)           | Catch remaining URL path — read from `params["*"]`                              |
| Index routes                  | Default child rendered at parent URL                                            |
| Layout routes                 | Pathless `element` wrapper — provides `<Outlet>` for children                   |
| Nested routes + `Outlet`      | Shared layouts with swappable content areas                                     |
| Protected routes              | Auth guard using `Navigate` to redirect unauthenticated users                   |
| `loader` + `useLoaderData`    | Fetch data before component renders — no loading state needed                   |
| `errorElement`                | Per-route error boundary — catches loader errors and crashes                    |
| TanStack Router               | Best TypeScript-typed alternative to React Router                               |
| Wouter                        | Tiny (2kb) router for small apps                                                |
| Next.js App Router            | File-based routing for full-stack React with SSR                                |

---

[↑ Back to TOC](#table-of-contents)

# Module 11: State Management

> **Topics**: Context API (recap), Redux Toolkit, Zustand

---

## 11.1 — When Do You Need a State Management Library?

Before reaching for Redux or Zustand, ask:

Think of state management as a spectrum. On the left side, you have simple local state; on the right, you have a full global store that every component in your app can read from. The further right you go, the more power you get, but also more complexity.

```mermaid
graph LR
    A["useState<br/>Local to 1 component"] --> B["Lift State Up<br/>2-3 nearby components"]
    B --> C["Context API<br/>App-wide, infrequent updates<br/>(theme, auth user)"]
    C --> D["Redux Toolkit<br/>App-wide, frequent updates<br/>Complex logic, DevTools"]
    D --> E["Zustand<br/>App-wide, minimal setup<br/>Medium app size"]

    style A fill:#28a745,color:#fff
    style B fill:#61dafb,color:#000
    style C fill:#f0ad4e,color:#000
    style D fill:#7952b3,color:#fff
    style E fill:#e83e8c,color:#fff
```

| Situation                                                | Solution      |
| -------------------------------------------------------- | ------------- |
| State used in one component                              | `useState`    |
| State shared between a few nearby components             | Lift state up |
| State needed across the whole app (theme, auth, cart)    | Context API   |
| Frequent updates + complex logic + time-travel debugging | Redux Toolkit |
| Simple global state with minimal boilerplate             | Zustand       |

---

## 11.2 — Redux Toolkit (RTK)

### The Why

Here's the problem with plain Redux: to add a simple counter with an increment action, you needed 4+ files (action types, action creators, reducer, and a selector). That's a lot of ceremony for something simple.

Redux Toolkit packages all of these into a **slice** — one file that contains your initial state, your actions, and your reducer together. It also uses a library called **Immer** under the hood, which lets you write code that _looks_ like it's mutating state, but secretly creates a brand new immutable object behind the scenes.

### How the Redux Data Cycle Works

```mermaid
sequenceDiagram
    participant User
    participant Component
    participant Dispatch
    participant Reducer
    participant Store

    User->>Component: Clicks "Add to Cart"
    Component->>Dispatch: dispatch(addItem(product))
    Dispatch->>Reducer: cartSlice.reducers.addItem(state, action)
    Reducer->>Store: Returns new state { items: [..., product] }
    Store->>Component: useSelector re-runs → component re-renders
    Component->>User: Cart shows updated item
```

> **Simple analogy**: Redux Toolkit is to Redux what Create React App was to Webpack — it hides complexity without removing control.

### Core Concepts

| Term         | Simple Explanation                                                    |
| ------------ | --------------------------------------------------------------------- |
| **Store**    | The single global container for all your app's state                  |
| **Slice**    | A piece of the store for one feature (e.g., `cartSlice`, `userSlice`) |
| **Action**   | A message describing what happened (`'cart/addItem'`)                 |
| **Reducer**  | A function that handles an action and returns new state               |
| **Dispatch** | The function you call to send an action to the store                  |
| **Selector** | A function that reads a piece of state from the store                 |

```mermaid
graph TD
    subgraph Store
        CS[cartSlice<br/>items, total]
        US[userSlice<br/>user, isLoggedIn]
        PS[productsSlice<br/>products, filters]
    end

    CompA[CartSummary] -->|useSelector<br/>selectCartTotal| CS
    CompB[ProductCard] -->|dispatch<br/>addItem| CS
    CompC[Navbar] -->|useSelector<br/>selectUser| US

    style Store fill:#f8f9fa,stroke:#dee2e6
    style CS fill:#7952b3,color:#fff
    style US fill:#0d6efd,color:#fff
    style PS fill:#198754,color:#fff
```

### Code Lab: Shopping Cart with RTK

```jsx
// ============================================================
// Step 1: Create a slice (cartSlice.js)
// ============================================================
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", // Prefix for all action types: 'cart/addItem'
    initialState: {
        items: [],
        total: 0,
    },
    // RTK uses Immer internally — you CAN write mutating code here safely
    // Immer converts it to an immutable update behind the scenes
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload); // Looks like mutation — safe with RTK!
            state.total += action.payload.price;
        },
        removeItem(state, action) {
            state.items = state.items.filter((i) => i.id !== action.payload);
            // Recalculate total
            state.total = state.items.reduce((sum, i) => sum + i.price, 0);
        },
        clearCart(state) {
            state.items = [];
            state.total = 0;
        },
    },
});

// Export action creators (auto-generated by RTK)
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export the reducer for the store
export default cartSlice.reducer;

// Export selectors — functions that read from the store
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => state.cart.total;
```

```jsx
// ============================================================
// Step 2: Create the store (store.js)
// ============================================================
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer, // state.cart is managed by cartSlice
        user: userReducer, // state.user is managed by userSlice
    },
});
```

```jsx
// ============================================================
// Step 3: Provide the store at the top level (main.jsx)
// ============================================================
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        {" "}
        {/* Makes store available to all components */}
        <App />
    </Provider>,
);
```

```jsx
// ============================================================
// Step 4: Use in components
// ============================================================
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems, selectCartTotal } from "./cartSlice";

function CartSummary() {
    // useSelector reads from the store; re-renders when the selected value changes
    const items = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    return (
        <div>
            {items.length} items — ${total.toFixed(2)}
        </div>
    );
}

function ProductCard({ product }) {
    // useDispatch gives you the dispatch function to send actions
    const dispatch = useDispatch();

    return (
        <div>
            <h3>{product.name}</h3>
            <button onClick={() => dispatch(addItem(product))}>
                Add to Cart
            </button>
        </div>
    );
}
```

### Async Actions with `createAsyncThunk`

```jsx
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// createAsyncThunk handles loading/success/error states automatically
export const fetchUser = createAsyncThunk(
    "user/fetchUser", // Action type prefix
    async (userId, { rejectWithValue }) => {
        try {
            const res = await fetch(`/api/users/${userId}`);
            if (!res.ok) throw new Error("Failed");
            return await res.json(); // Becomes action.payload on success
        } catch (err) {
            return rejectWithValue(err.message); // Becomes action.payload on failure
        }
    },
);

const userSlice = createSlice({
    name: "user",
    initialState: { data: null, isLoading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
```

---

## 11.3 — Zustand: Minimal Global State

### The Why

Zustand is a tiny (~1KB) state management library with almost no boilerplate. If Redux Toolkit feels heavy for your project, Zustand is often the right choice.

> **Simple analogy**: Zustand is a global `useState` that any component can read from and write to.

```jsx
// ============================================================
// ✅ Zustand — entire store in one file
// ============================================================
import { create } from "zustand";

// create() returns a hook you use directly in components
const useCartStore = create((set, get) => ({
    // STATE
    items: [],
    total: 0,

    // ACTIONS — functions that update state
    addItem: (item) =>
        set((state) => ({
            items: [...state.items, item],
            total: state.total + item.price,
        })),

    removeItem: (id) => {
        const items = get().items.filter((i) => i.id !== id);
        set({ items, total: items.reduce((sum, i) => sum + i.price, 0) });
    },

    clearCart: () => set({ items: [], total: 0 }),
}));

// ============================================================
// Usage — no Provider, no useSelector, no useDispatch needed!
// ============================================================
function CartSummary() {
    // Subscribe to only what you need — re-renders only when this changes
    const total = useCartStore((state) => state.total);
    const items = useCartStore((state) => state.items);
    return (
        <div>
            {items.length} items — ${total.toFixed(2)}
        </div>
    );
}

function AddToCartButton({ product }) {
    const addItem = useCartStore((state) => state.addItem);
    return <button onClick={() => addItem(product)}>Add</button>;
}
```

### Redux Toolkit vs Zustand vs Context

| Factor                         | Context API                   | Redux Toolkit                    | Zustand                  |
| ------------------------------ | ----------------------------- | -------------------------------- | ------------------------ |
| Setup boilerplate              | Low                           | Medium                           | Very low                 |
| DevTools                       | None built-in                 | Excellent                        | Plugin available         |
| Async handling                 | DIY                           | `createAsyncThunk`               | DIY or middleware        |
| Performance (frequent updates) | ⚠️ Re-renders all consumers   | ✅ Selector-based                | ✅ Selector-based        |
| Bundle size                    | 0 KB                          | ~15 KB                           | ~1 KB                    |
| Best for                       | Theme, auth, infrequent state | Large apps, teams, complex flows | Medium apps, quick setup |

---

## Module 11 — Interview Q&A

**Q: When should you use Redux instead of React Context?**

| Scenario | Use Context | Use Redux |
|---|---|---|
| Theme / auth (rarely changes) | ✅ | Overkill |
| High-frequency updates (every keystroke) | ❌ Re-renders all consumers | ✅ Selector-based updates |
| Complex async flows (saga/thunk) | ❌ | ✅ |
| DevTools (time-travel debugging) | ❌ | ✅ |
| Team > 5 people, shared state across many features | ❌ Hard to scale | ✅ |
| Medium app, want simplicity | Skip both — use Zustand | |

**Q: What is Redux Toolkit (RTK)? How is it different from classic Redux?**
> Classic Redux: action types as strings, `switch` reducers, verbose action creators, manual Immer setup. RTK: `createSlice` generates action types + action creators + reducer from one object. `createAsyncThunk` handles async. Immer is built in (you can "mutate" in reducers — Immer produces a new state). RTK is the official recommended way — classic Redux is considered legacy.

**Q: What is Zustand and how does it differ from Redux?**
> Zustand is a minimal global state library (~1KB). No actions, no reducers, no dispatching — you call setter functions directly on the store. Selector-based subscriptions mean components only re-render when the specific slice of state they select changes. Best for: medium-sized apps that want global state without Redux's boilerplate. Redux is better when you need DevTools, time-travel debugging, or complex async middleware.

**Q: What is the Zustand selector pattern and why does it matter?**
```jsx
// ❌ Without selector: re-renders on ANY store change
const { count, user, cart } = useStore();

// ✅ With selector: re-renders ONLY when count changes
const count = useStore(state => state.count);
```
> Without a selector, every state change in the store causes all consumers to re-render. With a selector, Zustand compares the selected value — component only re-renders if that specific value changed.

---

## Module 11 Summary

| Tool               | When to Use                                               |
| ------------------ | --------------------------------------------------------- |
| `useState` + props | Local or nearby state                                     |
| Context API        | Infrequent global state (theme, auth)                     |
| Redux Toolkit      | Large apps, complex async, team projects, DevTools needed |
| Zustand            | Medium apps, want global state without Redux complexity   |

---

[↑ Back to TOC](#table-of-contents)

# Module 12: Error Boundaries & Portals

> **Topics**: Catching render errors, rendering outside the DOM hierarchy

---

## 12.1 — Error Boundaries

### The Why

Imagine your `UserProfile` component tries to read `user.name` but `user` is `null` (maybe the API returned unexpected data). A JavaScript error throws during React's render phase. Without anything to catch it, React **unmounts your entire app**. The user sees a completely blank white screen with no explanation.

Error Boundaries act like the airbags of your app. When a crash happens, they absorb the impact and show a friendly message instead of destroying everything.

```mermaid
graph TD
    subgraph Without Error Boundary
        A1[App] --> B1[Dashboard]
        B1 --> C1[NewsFeed]
        C1 -->|crash!| D1["💥 Error thrown"]
        D1 --> E1["❌ Entire app unmounts<br/>Blank white screen"]
    end

    subgraph With Error Boundary
        A2[App]
        A2 --> EB1["ErrorBoundary #1"]
        A2 --> EB2["ErrorBoundary #2"]
        EB1 --> C2[NewsFeed]
        EB2 --> S2[Sidebar]
        C2 -->|crash!| D2["💥 Error thrown"]
        D2 --> F2["✅ ErrorBoundary catches it<br/>Shows fallback UI"]
        S2 --> G2["✅ Sidebar keeps working normally"]
    end

    style E1 fill:#dc3545,color:#fff
    style F2 fill:#28a745,color:#fff
    style G2 fill:#28a745,color:#fff
```

> **Simple analogy**: Error Boundaries are like try/catch blocks, but for React component rendering.

> **Important**: Error Boundaries are one of the few remaining reasons to use **class components** in modern React. There is no hook equivalent yet (as of React 18). In practice, use a library like `react-error-boundary`.

```jsx
// ============================================================
// ✅ Using react-error-boundary (recommended)
// ============================================================
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <h2>Something went wrong</h2>
            <pre>{error.message}</pre>
            {/* resetErrorBoundary clears the error and re-renders the children */}
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

function App() {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={(error, info) => logErrorToService(error, info)} // Log to Sentry etc.
        >
            <Dashboard />{" "}
            {/* If Dashboard crashes, ErrorFallback shows instead */}
        </ErrorBoundary>
    );
}

// Granular error boundaries — protect individual sections
function FeedPage() {
    return (
        <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <NewsFeed /> {/* Only this section is "quarantined" */}
            </ErrorBoundary>

            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Sidebar /> {/* This keeps working even if NewsFeed crashes */}
            </ErrorBoundary>
        </div>
    );
}
```

### What Error Boundaries DO and DON'T catch

| Catches ✅                        | Does NOT catch ❌                             |
| --------------------------------- | --------------------------------------------- |
| Errors in render                  | Errors in event handlers (use try/catch)      |
| Errors in `useEffect` (partially) | Errors in async code (`setTimeout`, promises) |
| Errors in child component trees   | Errors in the boundary itself                 |

---

## 12.2 — Portals

### The Why

Here's the problem: you have a `Modal` component inside a `Card` component. The `Card` has `overflow: hidden` and `z-index: 1`. The modal pops up and... it's clipped by the card! The modal looks broken.

This happens because in the regular DOM, a child is always visually contained within its parent. Portals solve this by letting React render a component's DOM output **somewhere else entirely** — like at the end of `<body>` — while keeping it in the React component tree (so props, context, and events all work normally).

```mermaid
graph TD
    subgraph React Component Tree - logical parent
        App --> Card
        Card --> Modal["Modal component<br/>(in React tree)"
]
    end

    subgraph Real DOM - where it actually renders
        body --> div1["&lt;div class='card'&gt;"]
        body --> div2["&lt;div class='modal-overlay'&gt;<br/>(Portal puts it here!"]
        div1 --> div3["card content"]
    end

    Modal -.->|createPortal| div2

    style Modal fill:#7952b3,color:#fff
    style div2 fill:#28a745,color:#fff
```

> **Simple analogy**: A portal is like a teleporter — the component still exists in the React tree (so events bubble normally), but it physically renders in a different DOM location.

```jsx
// ============================================================
// ✅ Modal using ReactDOM.createPortal
// ============================================================
import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    // The modal renders into document.body, NOT inside its parent component's DOM node
    // This prevents CSS clipping issues from parent overflow/z-index
    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>,
        document.body, // Target DOM node — render here in the actual DOM
    );
}

// Usage — even though Modal renders in body, React events still bubble correctly
function ProductPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div style={{ overflow: "hidden" }}>
            {" "}
            {/* Normally this would clip children */}
            <button onClick={() => setIsModalOpen(true)}>View Details</button>
            {/* Modal renders in document.body — completely unaffected by parent's overflow */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Product Details</h2>
                <p>...</p>
            </Modal>
        </div>
    );
}
```

---

## Module 12 — Interview Q&A

**Q: What is an Error Boundary? Why must it be a class component?**
> An Error Boundary catches JavaScript errors during rendering, in lifecycle methods, and in constructors of child components. It uses `getDerivedStateFromError` (to update state on error) and `componentDidCatch` (to log to error monitoring services). These lifecycle methods have no functional component / hook equivalent, so Error Boundaries must be class components. The `react-error-boundary` library wraps this in a hook-friendly API.

**Q: What errors does an Error Boundary NOT catch?**
> (1) Errors in **event handlers** — use `try/catch` there. (2) Errors in **async code** (`setTimeout`, Promises). (3) **SSR** errors. (4) Errors thrown by the **boundary itself**. Only synchronous render-phase errors in *descendant* components are caught.

**Q: What is a React Portal? When would you use one?**
> `ReactDOM.createPortal(children, domNode)` renders a component into a different DOM node than its parent, while keeping it in the React component tree (events still bubble through the React tree). Use for: modals, tooltips, and dropdowns that need to appear above everything — they escape `overflow: hidden` and z-index stacking context issues by rendering directly into `<body>` or a dedicated overlay container.

**Q: Portals render outside the parent DOM node — do events still bubble through the React tree?**
> Yes. Event bubbling follows the React component tree, not the DOM tree. A click inside a Portal modal will bubble up through the modal's React parent component — even though the DOM node is elsewhere. This is why Portal modals work correctly with React event delegation.

---

## Module 12 Summary

| Concept                    | Key Takeaway                                                                  |
| -------------------------- | ----------------------------------------------------------------------------- |
| **Error Boundaries**       | Catch render errors in child trees; show fallback UI instead of blank screen  |
| **`react-error-boundary`** | Use this library — cleaner than writing class-based boundaries yourself       |
| **Portals**                | Render a component in a different DOM node while keeping it in the React tree |
| **Portal use cases**       | Modals, tooltips, dropdowns that need to escape CSS containment               |

---

[↑ Back to TOC](#table-of-contents)

# Module 13: Styling in React

> **Topics**: CSS Modules, Tailwind CSS, Styled-components, Inline styles, Theming

---

## 13.1 — The Styling Landscape

Choosing a styling approach in React is one of the most common decisions a team makes. Here's the mental model: think of a dial from "most traditional CSS" to "most JavaScript-driven".

```mermaid
graph LR
    A["Plain CSS<br/>Global scope<br/>Familiar, simple"] --> B["CSS Modules<br/>Local scope<br/>Best of both worlds"]
    B --> C["Tailwind CSS<br/>Utility classes<br/>No custom CSS needed"]
    C --> D["Styled-components<br/>CSS in JavaScript<br/>Dynamic, component-scoped"]

    style A fill:#e9ecef,color:#000
    style B fill:#61dafb,color:#000
    style C fill:#38bdf8,color:#000
    style D fill:#db7093,color:#fff
```

| Approach              | Scoping         | Runtime cost      | Bundle size         | Best for                |
| --------------------- | --------------- | ----------------- | ------------------- | ----------------------- |
| Plain CSS             | Global          | None              | Small               | Simple apps             |
| **CSS Modules**       | Per-component   | None              | Small               | Most projects           |
| **Tailwind CSS**      | Utility classes | None              | Very small (purged) | Rapid development       |
| **Styled-components** | Per-component   | Small (CSS-in-JS) | Medium              | Design systems          |
| Inline styles         | Per-element     | None              | None                | Dynamic, one-off styles |

---

## 13.2 — CSS Modules

### The Why

Imagine two developers on your team both create a `.button` class in their separate CSS files. In plain CSS, these collide — one overwrites the other, and you get mysterious styling bugs that are very hard to track down.

CSS Modules solve this by **transforming every class name at build time** into a guaranteed-unique string. Your `.button` becomes `Button_button__xK2f3`. Only the component that imports that specific CSS file gets that class name — no collisions, ever.

```mermaid
graph LR
    CF1["Button.module.css<br/>.button { padding: 8px }"] -->|build time| BT["Build Tool<br/>(Vite/Webpack)"]
    CF2["Card.module.css<br/>.button { margin: 4px }"] -->|build time| BT
    BT --> OS1["Button_button__xK2f3"]
    BT --> OS2["Card_button__9tR2m"]
    OS1 --> FH["Final HTML<br/>No collisions!"]
    OS2 --> FH

    style BT fill:#f0ad4e,color:#000
    style FH fill:#28a745,color:#fff
```

```css
/* Button.module.css */
.button {
    padding: 8px 16px;
    border-radius: 4px;
}

.primary {
    background: blue;
    color: white;
}
```

```jsx
// Button.jsx
import styles from "./Button.module.css"; // Vite/Webpack transforms the class names

function Button({ children, variant = "default" }) {
    // styles.button becomes something like "Button_button__xK2f3" at build time
    // This is locally scoped — no other component's .button class can interfere
    return (
        <button
            className={`${styles.button} ${variant === "primary" ? styles.primary : ""}`}
        >
            {children}
        </button>
    );
}
```

---

## 13.3 — Tailwind CSS

### The Why

With Tailwind, instead of writing CSS like this:

```css
.card {
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

You write the equivalent directly in JSX: `className="flex flex-col p-6 rounded-xl shadow-md"`.

At first glance this looks like a mess of class names. But in practice, it means:

- You **never leave your JSX file** to style something
- All styles are **visible at a glance** — no hunting through CSS files
- You **can't accidentally break** unrelated components (no cascading side effects)
- At build time, Tailwind **purges all unused classes** — your final CSS file is tiny

```mermaid
flowchart LR
    DEV["Developer writes:<br/>className='flex p-4 text-blue-500'"] --> BUILD["Build Step<br/>Tailwind scans all files"]
    BUILD -->|Keeps only used classes| PROD["Production CSS<br/>~5KB instead of ~300KB"]
    BUILD -->|Removes unused| TRASH["Unused classes removed"]

    style PROD fill:#28a745,color:#fff
    style TRASH fill:#dc3545,color:#fff
```

> **Result**: Ship UIs faster, zero naming decisions, consistent design tokens, and tiny production CSS (Tailwind removes unused classes at build time).

```jsx
// ============================================================
// ✅ Tailwind CSS — style directly in JSX
// ============================================================
function UserCard({ user }) {
    return (
        // Classes read left to right: flex column, gap, padding, rounded, shadow
        <div className="flex flex-col gap-4 p-6 rounded-xl shadow-md bg-white">
            <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover"
            />
            <div>
                <h2 className="text-xl font-semibold text-gray-900">
                    {user.name}
                </h2>
                <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Follow
            </button>
        </div>
    );
}

// For conditional classes, use the `clsx` library (much cleaner than template strings)
import clsx from "clsx";

function Badge({ status }) {
    return (
        <span
            className={clsx(
                "px-2 py-1 rounded-full text-xs font-medium",
                status === "active" && "bg-green-100 text-green-700",
                status === "inactive" && "bg-gray-100 text-gray-600",
                status === "pending" && "bg-yellow-100 text-yellow-700",
            )}
        >
            {status}
        </span>
    );
}
```

---

## 13.4 — Styled-components (CSS-in-JS)

### The Why

Styled-components lets you write actual CSS inside your JavaScript. The styles are attached to a component, not a class name. This is powerful for **design systems** and **dynamic styling based on props**.

```jsx
import styled from "styled-components";

// ✅ Create a styled component — it's a real React component with styles baked in
const Button = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;

    /* Dynamic styling based on props */
    background: ${(props) =>
        props.variant === "primary" ? "#3b82f6" : "#e5e7eb"};
    color: ${(props) => (props.variant === "primary" ? "white" : "#374151")};

    &:hover {
        opacity: 0.9;
    }
`;

// Usage — looks like a regular React component
function App() {
    return (
        <>
            <Button variant="primary">Save</Button>
            <Button>Cancel</Button>
        </>
    );
}
```

---

## 13.5 — Theming

```jsx
// ============================================================
// ✅ Theming with CSS custom properties (variables) + Context
// Works with ANY styling approach (Modules, Tailwind, Styled-components)
// ============================================================

// 1. Define themes as plain objects
const themes = {
    light: {
        "--color-bg": "#ffffff",
        "--color-text": "#111827",
        "--color-primary": "#3b82f6",
    },
    dark: {
        "--color-bg": "#111827",
        "--color-text": "#f9fafb",
        "--color-primary": "#60a5fa",
    },
};

// 2. Apply CSS variables to :root based on active theme
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const root = document.documentElement; // The <html> element
        Object.entries(themes[theme]).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 3. Use variables in CSS
// .button { background: var(--color-primary); color: var(--color-text); }
```

---

## Module 13 — Interview Q&A

**Q: What are CSS Modules and what problem do they solve?**
> CSS Modules scope class names to the component that imports them. The build tool transforms `.button` into a unique hash like `Button_button__3xQP8`. No global namespace collisions, no need for BEM naming conventions. The CSS stays in `.module.css` files, not in JS. Zero runtime cost (vs CSS-in-JS).

**Q: When would you choose Tailwind CSS over CSS Modules?**
> Tailwind: when you want to move fast with a utility-first approach, have a design system already encoded in `tailwind.config.js`, and want to avoid context-switching between files. CSS Modules: when you need complex custom styles, have designers who write CSS, or want to avoid long className strings in JSX. Many teams use both — Tailwind for layout/spacing/typography, CSS Modules for complex component-specific styles.

**Q: What is CSS-in-JS and what is its main trade-off?**
> CSS-in-JS (styled-components, Emotion) writes CSS inside JavaScript template literals, enabling dynamic styles based on props. Trade-off: runtime cost — styles are generated and injected into the DOM at runtime, which can cause a flash of unstyled content on SSR and adds CPU overhead. Zero-runtime alternatives (Vanilla Extract, linaria) compile to static CSS at build time.

**Q: What is the `cn()` utility and why is it used with Tailwind?**
> `cn()` combines `clsx` (conditional class logic) + `tailwind-merge` (conflict resolution). Tailwind uses utility classes, so you might have both `p-4` and `p-8` applied — `tailwind-merge` keeps only the last one. `cn()` is generated by shadcn/ui and is the standard pattern in Tailwind-first projects.

---

## Module 13 Summary

| Approach                    | When to Choose It                                                   |
| --------------------------- | ------------------------------------------------------------------- |
| **CSS Modules**             | Default choice for most projects — zero runtime cost, scoped styles |
| **Tailwind CSS**            | When you want to move fast and have a design system in place        |
| **Styled-components**       | Dynamic prop-based styling; design system components                |
| **CSS Variables + Context** | Theming that works with any styling approach                        |

## 13.6 — `clsx` and `cn()`: Conditional Class Names

### The Problem

When building components with Tailwind CSS, you constantly concatenate class names based on props and state. String interpolation with template literals gets messy fast:

```jsx
// ❌ Ugly template literal — easy to get wrong, hard to read
<button className={`px-4 py-2 rounded font-medium
    ${variant === "primary" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"}
    ${size === "large" ? "text-lg px-6 py-3" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}
`}>
```

### `clsx` — The Solution

`clsx` is a tiny (228 byte) utility that conditionally joins class names. It accepts strings, objects, and arrays:

```bash
npm install clsx
```

```jsx
import clsx from "clsx";

// ---- Basic usage ----
clsx("px-4 py-2", "rounded"); // "px-4 py-2 rounded"
clsx("base", undefined, null, false); // "base" (falsy values skipped)

// ---- Object syntax — key is class, value is condition ----
clsx({
    "bg-blue-600": variant === "primary",
    "bg-gray-100": variant === "secondary",
    "opacity-50": disabled,
    "cursor-not-allowed": disabled,
});

// ---- Mixed — all three forms together ----
function Button({ variant, size, disabled, className }) {
    return (
        <button
            className={clsx(
                // Always-on base classes
                "px-4 py-2 rounded font-medium transition-colors",
                // Conditional classes: object form
                {
                    "bg-blue-600 text-white hover:bg-blue-700":
                        variant === "primary",
                    "bg-gray-100 text-gray-900 hover:bg-gray-200":
                        variant === "secondary",
                    "bg-red-600 text-white hover:bg-red-700":
                        variant === "danger",
                    "text-lg px-6 py-3": size === "large",
                    "text-xs px-2 py-1": size === "small",
                    "opacity-50 cursor-not-allowed pointer-events-none":
                        disabled,
                },
                // Pass-through className for consumer overrides
                className,
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
```

### `cn()` — Tailwind + clsx + tailwind-merge

The `cn()` pattern is a utility that combines `clsx` and `tailwind-merge`. **Tailwind-merge** resolves conflicting Tailwind classes — when you pass both `"px-4"` and `"px-6"`, it keeps only the last one. Without it, both classes would be applied with unpredictable results.

This is the exact utility generated by **shadcn/ui**:

```bash
npm install clsx tailwind-merge
```

```ts
// src/lib/utils.ts — add once, use everywhere
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    // 1. clsx resolves conditional/nested class arrays
    // 2. twMerge resolves conflicting Tailwind classes
    return twMerge(clsx(inputs));
}
```

```tsx
// Usage — cn handles both conditionals AND Tailwind conflicts:
import { cn } from "@/lib/utils";

function Card({
    className,
    elevated = false,
}: {
    className?: string;
    elevated?: boolean;
}) {
    return (
        <div
            className={cn(
                // Base classes
                "rounded-lg border bg-white p-4",
                // Conditional
                elevated && "shadow-lg",
                // Consumer override — twMerge ensures "p-8" wins over "p-4"
                className,
            )}
        />
    );
}

// Consumer:
<Card className="p-8 bg-slate-50" />;
// Without twMerge: "rounded-lg border bg-white p-4 p-8 bg-slate-50" — conflict!
// With twMerge:    "rounded-lg border p-8 bg-slate-50" — correct!
```

> **Best practice**: Create `src/lib/utils.ts` with `cn()` in every Tailwind project. Import it instead of string interpolation for all dynamic class names.

---

[↑ Back to TOC](#table-of-contents)

# Module 14: Testing

> **Topics**: Jest, React Testing Library, component testing, mocking APIs

---

## 14.1 — The Why: What to Test and Why

> **Key philosophy (from the React Testing Library docs)**: _"The more your tests resemble the way your software is used, the more confidence they can give you."_

Don't test implementation details (what's in state, which function was called). Test **what the user sees and can do**.

Here's a mental map of the testing pyramid. The base is broad (many cheap unit tests), the top is narrow (few expensive E2E tests):

```mermaid
graph BT
    UT["Unit Tests<br/>∘ Jest<br/>∘ Fast, cheap, isolated<br/>∘ Test pure functions and hooks"] --> CT["Component Tests<br/>∘ React Testing Library<br/>∘ Test one component in isolation"]
    CT --> IT["Integration Tests<br/>∘ React Testing Library<br/>∘ Multiple components working together"]
    IT --> E2E["End-to-End Tests<br/>∘ Cypress / Playwright<br/>∘ Full user flows in real browser<br/>∘ Slowest, most realistic"]

    style UT fill:#28a745,color:#fff
    style CT fill:#61dafb,color:#000
    style IT fill:#f0ad4e,color:#000
    style E2E fill:#dc3545,color:#fff
```

> **Rule of thumb**: Write many unit tests, a good number of component tests, fewer integration tests, and just a handful of E2E tests for your most critical flows (like checkout or login).

| Test type        | What it tests                                  | Tools                 |
| ---------------- | ---------------------------------------------- | --------------------- |
| Unit test        | A single function or hook                      | Jest                  |
| Component test   | A component's rendered output and interactions | React Testing Library |
| Integration test | Multiple components working together           | React Testing Library |
| E2E test         | Full user flows in a real browser              | Cypress, Playwright   |

---

## 14.2 — Jest Basics

```js
// A pure function to test
function add(a, b) {
    return a + b;
}

// Jest test file: add.test.js
describe("add()", () => {
    it("adds two positive numbers", () => {
        expect(add(2, 3)).toBe(5); // Exact equality
    });

    it("handles negative numbers", () => {
        expect(add(-1, 1)).toBe(0);
    });

    it("returns a number", () => {
        expect(typeof add(1, 2)).toBe("number");
    });
});

// Common Jest matchers
expect(value).toBe(5); // Strict equality (===)
expect(value).toEqual({ a: 1 }); // Deep equality (for objects/arrays)
expect(value).toBeTruthy(); // Any truthy value
expect(value).toBeNull();
expect(arr).toHaveLength(3);
expect(fn).toThrow("error message"); // Function throws
```

---

## 14.3 — React Testing Library

React Testing Library (RTL) renders your component in a virtual DOM and lets you interact with it **as a user would**.

The key idea: RTL doesn't give you access to React state or component internals. You can only interact with what's actually rendered in the DOM — text, buttons, inputs, ARIA roles. This mirrors how a real user (or a screen reader) experiences the page.

```mermaid
sequenceDiagram
    participant Test
    participant RTL
    participant VirtualDOM
    participant Component

    Test->>RTL: render(<Button>Save</Button>)
    RTL->>VirtualDOM: Mount component
    VirtualDOM->>Component: Runs component function
    Component-->>VirtualDOM: Returns JSX → DOM
    Test->>RTL: screen.getByText('Save')
    RTL->>VirtualDOM: Find element with text 'Save'
    VirtualDOM-->>Test: Returns DOM element
    Test->>RTL: userEvent.click(element)
    RTL->>Component: Fires click event
    Component-->>VirtualDOM: State change → re-render
    Test->>RTL: expect(handleClick).toHaveBeenCalled()
```

```jsx
// Button.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button component", () => {
    it("renders the button text", () => {
        render(<Button>Save</Button>);

        // getByText: finds element by its visible text — like a user reading the screen
        expect(screen.getByText("Save")).toBeInTheDocument();
    });

    it("calls onClick when clicked", async () => {
        const handleClick = jest.fn(); // Mock function — tracks calls
        render(<Button onClick={handleClick}>Save</Button>);

        // userEvent is more realistic than fireEvent — simulates real user interaction
        await userEvent.click(screen.getByText("Save"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("is disabled when the disabled prop is passed", () => {
        render(<Button disabled>Save</Button>);
        expect(screen.getByRole("button", { name: "Save" })).toBeDisabled();
    });
});
```

---

## 14.4 — Testing Async Components

```jsx
// UserCard.test.jsx — testing a component that fetches data
import { render, screen, waitFor } from "@testing-library/react";

// Mock the fetch call — we don't want real HTTP requests in unit tests
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () =>
            Promise.resolve({
                id: "1",
                name: "Alice",
                email: "alice@test.com",
            }),
    }),
);

describe("UserCard", () => {
    afterEach(() => jest.clearAllMocks()); // Reset mocks between tests

    it("shows loading state initially", () => {
        render(<UserCard userId="1" />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("shows user name after data loads", async () => {
        render(<UserCard userId="1" />);

        // waitFor keeps checking until the assertion passes or times out
        await waitFor(() => {
            expect(screen.getByText("Alice")).toBeInTheDocument();
        });
    });

    it("shows error message on fetch failure", async () => {
        fetch.mockRejectedValueOnce(new Error("Network error"));
        render(<UserCard userId="1" />);

        await waitFor(() => {
            expect(
                screen.getByText(/something went wrong/i),
            ).toBeInTheDocument();
        });
    });
});
```

---

## 14.5 — RTL Query Cheat Sheet

| Query            | When to use                                | Throws if not found?   |
| ---------------- | ------------------------------------------ | ---------------------- |
| `getBy...`       | Element must exist                         | Yes                    |
| `queryBy...`     | Element may or may not exist               | No (returns null)      |
| `findBy...`      | Element appears asynchronously             | Yes (after async wait) |
| `...ByRole`      | Prefer this! Uses ARIA roles               | —                      |
| `...ByText`      | By visible text content                    | —                      |
| `...ByLabelText` | Form inputs by their label                 | —                      |
| `...ByTestId`    | Last resort — adds `data-testid` attribute | —                      |

---

## Module 14 — Interview Q&A

**Q: What is the core philosophy of React Testing Library?**
> "Test what the user sees and can do, not implementation details." RTL doesn't expose state, refs, or component internals. You query by role, text, and label — exactly how a real user or screen reader finds elements. This makes tests resilient to refactoring: if you rename a state variable but the UI is the same, the test still passes.

**Q: What is the difference between `getBy`, `queryBy`, and `findBy`?**

| Query | Throws if not found | Async | Use when |
|---|---|---|---|
| `getBy...` | ✅ Yes | ❌ No | Element must exist right now |
| `queryBy...` | ❌ No (returns null) | ❌ No | Asserting element is *absent* |
| `findBy...` | ✅ Yes | ✅ Yes | Element appears after async operation |

**Q: Why should you prefer `getByRole` over `getByTestId`?**
> `getByRole` queries by ARIA role (button, textbox, heading) — the same way assistive technology reads the page. It tests that your component is accessible AND functional. `getByTestId` adds `data-testid` attributes that serve no purpose in production — it's a last resort when semantic queries aren't possible.

**Q: How do you test an async component that fetches data?**
> Mock `fetch` globally (`global.fetch = vi.fn(...)` or use MSW), render the component, use `waitFor` or `findBy` queries to wait for async content to appear, then assert. Use `act()` from RTL when manually triggering state updates. `afterEach(() => vi.clearAllMocks())` to reset mocks between tests.

**Q: What is Vitest? How is it different from Jest?**
> Vitest is the test runner built for Vite projects. API-compatible with Jest (same `describe`/`it`/`expect`/`vi.fn()`), but runs inside Vite's transform pipeline — no separate Babel config, same TypeScript/alias support as app code, near-instant startup via native ESM. Typically 3-5× faster than Jest for Vite projects.

---

## Module 14 Summary

| Concept                 | Key Takeaway                                                        |
| ----------------------- | ------------------------------------------------------------------- |
| **Test what users see** | Don't test state/implementation; test rendered output and behavior  |
| **Jest**                | Test runner + assertion library; mocking, spies, timers             |
| **RTL**                 | Renders components; query by role/text (not implementation details) |
| **`findBy`**            | Use for elements that appear after async operations                 |
| **Mock `fetch`**        | Replace HTTP calls in tests with `jest.fn()`                        |

## 14.6 — Vitest: The Vite-Native Test Runner

**What it is**: Vitest is the test runner for Vite projects. It's API-compatible with Jest (same `describe`, `it`, `expect`, `vi.fn()`) but runs natively inside Vite — meaning the same config, same transforms, near-instant startup, and built-in TypeScript support.

**Why use it over Jest**: Zero configuration for Vite projects. Tests run in the same Vite context (same alias resolution, same env variables). Uses native ES modules — no Babel transpilation needed. Up to 5x faster hot-reloading of test files.

```bash
# Install
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

```ts
// vite.config.ts — add test config block
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom", // Simulate browser DOM (like JSDOM in Jest)
        globals: true, // Allow describe/it/expect without importing
        setupFiles: "./src/setupTests.ts", // Like Jest's setupFilesAfterFramework
        coverage: {
            provider: "v8", // "v8" | "istanbul"
            reporter: ["text", "html"],
        },
    },
});
```

```ts
// src/setupTests.ts — same as Jest setup
import "@testing-library/jest-dom"; // Adds .toBeInTheDocument() etc.
```

```tsx
// Writing a test — identical to Jest + RTL
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest"; // Or use globals: true above
import Counter from "./Counter";

describe("Counter", () => {
    it("increments the count when button is clicked", () => {
        render(<Counter />);
        const button = screen.getByRole("button", { name: /increment/i });
        fireEvent.click(button);
        expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("calls onCountChange when updated", () => {
        const mockFn = vi.fn(); // vi.fn() replaces jest.fn()
        render(<Counter onCountChange={mockFn} />);
        fireEvent.click(screen.getByRole("button", { name: /increment/i }));
        expect(mockFn).toHaveBeenCalledWith(1);
    });
});
```

```json
// package.json scripts
{
    "scripts": {
        "test": "vitest", // Watch mode
        "test:run": "vitest run", // Single pass (CI)
        "test:coverage": "vitest run --coverage"
    }
}
```

> **Vitest vs Jest**: If you're using Vite (which most new React projects do), prefer Vitest. It's faster, has no config, and uses the same module system as your app. If you have an existing Create React App project with Jest, keep Jest — migration is optional.

## 14.7 — MSW (Mock Service Worker): Realistic API Mocking

**What it is**: MSW intercepts HTTP requests at the **network level** (using a Service Worker in browsers, or Node.js interceptors in tests) and returns mock responses. Your components make real `fetch`/Axios calls — they just get intercepted before hitting the server.

**Why use it over `jest.fn()`**: When you mock `fetch` directly, you mock the function — not the network. With MSW, your component code remains untouched. If you change from `fetch` to Axios, your mocks still work. Tests are much closer to reality.

```bash
npm install -D msw
npx msw init public/  # Creates public/mockServiceWorker.js for browser mode
```

```ts
// src/mocks/handlers.ts — define your mock API endpoints
import { http, HttpResponse } from "msw";

export const handlers = [
    // GET /api/users — returns a list of users
    http.get("/api/users", () => {
        return HttpResponse.json([
            { id: 1, name: "Alice", email: "alice@example.com" },
            { id: 2, name: "Bob", email: "bob@example.com" },
        ]);
    }),

    // POST /api/users — creates a user
    http.post("/api/users", async ({ request }) => {
        const body = await request.json();
        return HttpResponse.json({ id: 3, ...body }, { status: 201 });
    }),

    // GET /api/users/:id — returns one user or 404
    http.get("/api/users/:id", ({ params }) => {
        if (params.id === "999") {
            return new HttpResponse(null, { status: 404 });
        }
        return HttpResponse.json({ id: Number(params.id), name: "Alice" });
    }),
];
```

```ts
// src/mocks/server.ts — Node.js server for Jest/Vitest tests
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);
```

```ts
// src/setupTests.ts — start/stop the mock server around each test
import { server } from "./mocks/server";
import { beforeAll, afterAll, afterEach } from "vitest";

beforeAll(() => server.listen()); // Start intercepting before tests
afterEach(() => server.resetHandlers()); // Reset any test-specific overrides
afterAll(() => server.close()); // Stop intercepting when done
```

```tsx
// Using MSW in a test — no mocking needed in the test file itself!
import { render, screen, waitFor } from "@testing-library/react";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";
import UserList from "./UserList";

describe("UserList", () => {
    it("renders the list of users", async () => {
        render(<UserList />);
        // Component makes a real fetch("/api/users") — MSW intercepts + returns mock data
        await waitFor(() => {
            expect(screen.getByText("Alice")).toBeInTheDocument();
            expect(screen.getByText("Bob")).toBeInTheDocument();
        });
    });

    it("shows error when server fails", async () => {
        // Override handler just for this test
        server.use(
            http.get(
                "/api/users",
                () => new HttpResponse(null, { status: 500 }),
            ),
        );
        render(<UserList />);
        await waitFor(() => {
            expect(
                screen.getByText(/something went wrong/i),
            ).toBeInTheDocument();
        });
        // After test: server.resetHandlers() restores the original handlers
    });
});
```

> **MSW is the gold standard** for API mocking in React tests. It's also used in Storybook to mock APIs for component stories, and in local development with `msw/browser` to prototype without a running backend.

---

[↑ Back to TOC](#table-of-contents)

# Module 15: Project Architecture & Build Tools

> **Topics**: Folder structure, feature-based architecture, Vite, environment variables

---

## 15.1 — Folder Structure Best Practices

There is no single "correct" structure, but here are two proven patterns:

Think of folder structures like organizing a kitchen. "Group by Type" is like putting all knives together, all spoons together — it works well when the kitchen is small. "Feature-based" is like organizing by meal: everything you need for breakfast in one drawer, dinner in another. For large teams working on distinct features, this is far more productive.

```mermaid
graph TD
    subgraph Group-by-Type - Small Apps
        SRC1[src/]
        SRC1 --> COMP1[components/ - ALL components]
        SRC1 --> PAGES1[pages/ - ALL pages]
        SRC1 --> HOOKS1[hooks/ - ALL hooks]
        COMP1 -->|problem at scale| P1["To work on 'auth':<br/>Search across 5 folders"]
    end

    subgraph Feature-based - Large Apps Recommended
        SRC2[src/features/]
        SRC2 --> AUTH[auth/]
        SRC2 --> CART[cart/]
        AUTH --> ACOMP[components/]
        AUTH --> AHOOK[hooks/]
        AUTH --> ASTORE[store/]
        AUTH -->|advantage| A2["Everything for auth<br/>in one place"]
    end

    style P1 fill:#dc3545,color:#fff
    style A2 fill:#28a745,color:#fff
```

### Pattern 1: Group by Type (small-medium apps)

```
src/
├── components/       # Reusable UI components
├── pages/            # One file per route/page
├── hooks/            # Custom hooks
├── services/         # API call functions
├── utils/            # Pure helper functions
├── store/            # Redux/Zustand store
├── context/          # React Context providers
└── assets/           # Images, fonts
```

### Pattern 2: Feature-based (large apps — recommended)

```
src/
├── features/
│   ├── auth/
│   │   ├── components/      # LoginForm, RegisterForm
│   │   ├── hooks/           # useAuth, useLogin
│   │   ├── services/        # authApi.js
│   │   ├── store/           # authSlice.js
│   │   └── index.js         # Public API of the feature
│   ├── cart/
│   │   ├── components/
│   │   └── ...
│   └── products/
│       └── ...
├── shared/                  # Shared across features
│   ├── components/          # Button, Modal, Spinner
│   ├── hooks/               # useDebounce, useLocalStorage
│   └── utils/
└── app/
    ├── App.jsx
    ├── store.js
    └── router.jsx
```

> **Why feature-based?** When you work on a feature, all its related files are in one folder. You never have to hunt across 5 directories to find what you need.

---

## 15.2 — Vite: The Modern Build Tool

Vite replaces Create React App and is dramatically faster. Here's the key reason why:

**Create React App (Webpack)** bundles your entire application before starting the dev server. It has to process every file, every import, and produce one big JavaScript bundle. On a large project this can take 30-60 seconds just to start.

**Vite** uses the browser's native **ES Module** support. Instead of bundling, it just serves your files as-is. When the browser requests `App.jsx`, Vite transforms that one file and sends it. Nothing is pre-bundled. Starting the dev server takes under a second, regardless of project size.

```mermaid
graph TD
    subgraph Vite Dev Server - Instant Start
        B2[Browser requests /src/App.jsx] --> V2[Vite transforms only that file]
        V2 --> R2[Browser gets the file]
        R2 --> B2B[Browser imports dependencies as needed]
        B2B -->|lazy, on-demand| V2
    end

    subgraph Webpack / CRA - Slow Start
        B1[npm start] --> W1["Bundle entire app<br/>(ALL files at once)"]
        W1 -->|30-60 seconds| DEV[Dev server ready]
    end

    style V2 fill:#28a745,color:#fff
    style W1 fill:#dc3545,color:#fff
```

|                  | Create React App          | Vite                             |
| ---------------- | ------------------------- | -------------------------------- |
| Dev server start | Slow (bundles everything) | Instant (uses native ES modules) |
| Hot reload       | Seconds                   | Milliseconds                     |
| Build speed      | Slow                      | Fast (uses Rollup)               |
| Configuration    | Opaque                    | Simple `vite.config.js`          |

```bash
# Create a new React project with Vite
npm create vite@latest my-app -- --template react
```

```js
// vite.config.js — common configuration
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // Import with @ instead of ../../..
        },
    },
    server: {
        port: 3000,
        proxy: {
            // Proxy /api calls to your backend during development (avoids CORS)
            "/api": "http://localhost:5000",
        },
    },
});
```

---

## 15.3 — Environment Variables: Full Multi-Environment Setup

> Real-world apps run in multiple environments — local dev, CI/CD testing, staging (e2e/UAT), and production. Each environment needs different API URLs, feature flags, log levels, and third-party keys. This is the complete guide to managing all of them correctly in a React + Vite app.

---

### The Problem: One Codebase, Many Environments

```
Developer machine    →  DEV     → API: http://localhost:3001
CI/CD pipeline       →  TEST    → API: https://test-api.myapp.com
E2E testing env      →  E2E     → API: https://e2e-api.myapp.com
Staging environment  →  STAGING → API: https://staging-api.myapp.com
Production           →  PROD    → API: https://api.myapp.com
```

You need a structured way to inject the right config per environment — without changing source code.

---

### Vite's `.env` File Priority System

Vite loads `.env` files in priority order. Higher files override lower ones:

```
.env.local              ← Highest priority. Local overrides. NEVER commit to git.
.env.[mode].local       ← e.g. .env.production.local. Local overrides for a specific mode.
.env.[mode]             ← e.g. .env.production, .env.staging. Committed to git.
.env                    ← Lowest priority. Defaults for all environments. Committed to git.
```

```bash
# .gitignore — ALWAYS ignore local files
.env.local
.env.*.local
```

---

### The Full `.env` File Set

```bash
# ---------------------------------------------------------------
# .env — shared defaults (all environments inherit these)
# ---------------------------------------------------------------
VITE_APP_NAME=MyApp
VITE_APP_VERSION=1.0.0
VITE_SUPPORT_EMAIL=support@myapp.com
VITE_FEATURE_DARK_MODE=true
VITE_FEATURE_ANALYTICS=false
```

```bash
# ---------------------------------------------------------------
# .env.development — local developer machine
# ---------------------------------------------------------------
VITE_API_URL=http://localhost:3001
VITE_WS_URL=ws://localhost:3001
VITE_LOG_LEVEL=debug
VITE_FEATURE_ANALYTICS=false
VITE_MOCK_AUTH=true        # Skip real auth in local dev
VITE_SENTRY_DSN=           # Leave blank — don't send errors from dev to Sentry
```

```bash
# ---------------------------------------------------------------
# .env.test — unit test environment (Jest / Vitest)
# ---------------------------------------------------------------
VITE_API_URL=http://localhost:3001
VITE_LOG_LEVEL=error        # Suppress logs during tests
VITE_MOCK_AUTH=true
VITE_FEATURE_ANALYTICS=false
```

```bash
# ---------------------------------------------------------------
# .env.e2e — E2E test environment (Playwright / Cypress)
# ---------------------------------------------------------------
VITE_API_URL=https://e2e-api.myapp.com
VITE_WS_URL=wss://e2e-api.myapp.com
VITE_LOG_LEVEL=warn
VITE_MOCK_AUTH=false         # E2E tests use real auth flows
VITE_FEATURE_ANALYTICS=false
VITE_SENTRY_DSN=             # No error tracking in E2E
```

```bash
# ---------------------------------------------------------------
# .env.staging — staging / UAT environment
# ---------------------------------------------------------------
VITE_API_URL=https://staging-api.myapp.com
VITE_WS_URL=wss://staging-api.myapp.com
VITE_LOG_LEVEL=warn
VITE_MOCK_AUTH=false
VITE_FEATURE_ANALYTICS=true
VITE_SENTRY_DSN=https://abc123@sentry.io/staging-project
VITE_RAZORPAY_KEY=rzp_test_stagingkey    # Test payment key for staging
```

```bash
# ---------------------------------------------------------------
# .env.production — live production environment
# ---------------------------------------------------------------
VITE_API_URL=https://api.myapp.com
VITE_WS_URL=wss://api.myapp.com
VITE_LOG_LEVEL=error
VITE_MOCK_AUTH=false
VITE_FEATURE_ANALYTICS=true
VITE_SENTRY_DSN=https://xyz789@sentry.io/prod-project
VITE_RAZORPAY_KEY=rzp_live_productionkey
```

```bash
# ---------------------------------------------------------------
# .env.local — YOUR local overrides (never committed to git)
# Overrides anything above for your machine only
# ---------------------------------------------------------------
VITE_API_URL=http://localhost:4000    # Your local backend runs on 4000
VITE_MOCK_AUTH=true
```

---

### Triggering Each Environment in package.json

```json
{
  "scripts": {
    "dev":       "vite",                              // loads .env.development
    "dev:e2e":   "vite --mode e2e",                   // loads .env.e2e
    "dev:staging":"vite --mode staging",              // loads .env.staging
    "build":     "vite build",                        // loads .env.production
    "build:staging": "vite build --mode staging",     // loads .env.staging
    "build:e2e": "vite build --mode e2e",             // loads .env.e2e
    "test":      "vitest --mode test",                // loads .env.test
    "e2e":       "playwright test",                   // Playwright reads .env.e2e separately
    "preview":   "vite preview"                       // preview production build locally
  }
}
```

---

### Accessing Env Variables in Code

```js
// Vite: use import.meta.env (NOT process.env — that's Node/CRA)
// Only variables prefixed with VITE_ are exposed to the browser bundle.

const config = {
    apiUrl:    import.meta.env.VITE_API_URL,
    wsUrl:     import.meta.env.VITE_WS_URL,
    appName:   import.meta.env.VITE_APP_NAME,
    logLevel:  import.meta.env.VITE_LOG_LEVEL,
    sentryDsn: import.meta.env.VITE_SENTRY_DSN,
};

// Built-in Vite variables (no VITE_ prefix needed):
import.meta.env.MODE     // "development" | "production" | "staging" | "e2e" | "test"
import.meta.env.DEV      // true in development mode
import.meta.env.PROD     // true in production mode
import.meta.env.SSR      // true when running server-side
```

---

### Centralise Config — The `config.ts` Pattern

**Never scatter `import.meta.env.VITE_*` across your entire codebase.** Centralise all env access into one file. This makes refactoring easy and gives you a single place to validate, transform, and document your config.

```ts
// src/config/config.ts — the ONLY place that reads import.meta.env

interface AppConfig {
    apiUrl:     string;
    wsUrl:      string;
    appName:    string;
    logLevel:   "debug" | "warn" | "error";
    sentryDsn:  string;
    isMockAuth: boolean;
    features: {
        darkMode:  boolean;
        analytics: boolean;
    };
}

function parseBoolean(value: string | undefined, fallback = false): boolean {
    if (value === undefined) return fallback;
    return value === "true";
}

// Validate required vars at startup — fail fast rather than fail mysteriously at runtime
function requireEnv(key: string): string {
    const value = import.meta.env[key];
    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
}

export const config: AppConfig = {
    apiUrl:    requireEnv("VITE_API_URL"),
    wsUrl:     import.meta.env.VITE_WS_URL ?? "",
    appName:   import.meta.env.VITE_APP_NAME ?? "MyApp",
    logLevel:  (import.meta.env.VITE_LOG_LEVEL ?? "error") as AppConfig["logLevel"],
    sentryDsn: import.meta.env.VITE_SENTRY_DSN ?? "",
    isMockAuth: parseBoolean(import.meta.env.VITE_MOCK_AUTH),
    features: {
        darkMode:  parseBoolean(import.meta.env.VITE_FEATURE_DARK_MODE, true),
        analytics: parseBoolean(import.meta.env.VITE_FEATURE_ANALYTICS, false),
    },
};
```

```ts
// Usage throughout the app — import config, never import.meta.env directly
import { config } from "@/config/config";

const api = axios.create({ baseURL: config.apiUrl });

if (config.features.analytics) {
    initAnalytics();
}

if (config.isMockAuth) {
    // Use mock auth adapter for local dev
}
```

---

### Feature Flags via Environment Variables

Feature flags let you ship code that is "off" in production but "on" for testing or gradual rollout.

```ts
// src/config/features.ts
import { config } from "./config";

export const features = {
    darkMode:        config.features.darkMode,
    analytics:       config.features.analytics,
    newCheckoutFlow: parseBoolean(import.meta.env.VITE_FEATURE_NEW_CHECKOUT),
    betaDashboard:   parseBoolean(import.meta.env.VITE_FEATURE_BETA_DASHBOARD),
};
```

```jsx
// Usage — feature-gated components
import { features } from "@/config/features";

function App() {
    return (
        <div>
            <Header />
            {features.betaDashboard ? <NewDashboard /> : <OldDashboard />}
            {features.newCheckoutFlow && <CheckoutV2Banner />}
        </div>
    );
}
```

```bash
# .env.staging — turn on beta features for QA team only
VITE_FEATURE_BETA_DASHBOARD=true
VITE_FEATURE_NEW_CHECKOUT=true

# .env.production — still off in production
VITE_FEATURE_BETA_DASHBOARD=false
VITE_FEATURE_NEW_CHECKOUT=false
```

---

### Validate Env with Zod at Startup

For production-grade apps, validate all environment variables at startup using Zod — crash immediately with a clear error if anything is wrong, rather than failing silently at runtime.

```ts
// src/config/env.ts
import { z } from "zod";

const envSchema = z.object({
    VITE_API_URL:              z.string().url("VITE_API_URL must be a valid URL"),
    VITE_APP_NAME:             z.string().min(1),
    VITE_LOG_LEVEL:            z.enum(["debug", "warn", "error"]).default("error"),
    VITE_MOCK_AUTH:            z.string().transform(v => v === "true").default("false"),
    VITE_FEATURE_ANALYTICS:    z.string().transform(v => v === "true").default("false"),
    VITE_SENTRY_DSN:           z.string().optional(),
});

// Parse and validate at module load time — fails fast with a clear message
export const env = envSchema.parse(import.meta.env);

// If VITE_API_URL is missing: ZodError: VITE_API_URL must be a valid URL
// Much better than: TypeError: Cannot read properties of undefined at runtime
```

---

### CI/CD Pipeline: How Env Files Work in Deployment

In a real CI/CD pipeline, env files are **NOT committed** to the repo (for secrets). Instead, values are injected as **CI/CD secrets** and written to `.env` files or passed as build-time variables.

```yaml
# .github/workflows/deploy-staging.yml
name: Deploy to Staging

on:
  push:
    branches: [staging]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # Write environment file from GitHub Secrets
      - name: Create .env.staging
        run: |
          echo "VITE_API_URL=${{ secrets.STAGING_API_URL }}" >> .env.staging
          echo "VITE_SENTRY_DSN=${{ secrets.STAGING_SENTRY_DSN }}" >> .env.staging
          echo "VITE_RAZORPAY_KEY=${{ secrets.STAGING_RAZORPAY_KEY }}" >> .env.staging

      - name: Install dependencies
        run: npm ci

      - name: Build for staging
        run: npm run build:staging     # vite build --mode staging → reads .env.staging

      - name: Deploy to S3/Nginx
        run: aws s3 sync dist/ s3://myapp-staging/
```

```yaml
# .github/workflows/deploy-production.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Create .env.production
        run: |
          echo "VITE_API_URL=${{ secrets.PROD_API_URL }}" >> .env.production
          echo "VITE_SENTRY_DSN=${{ secrets.PROD_SENTRY_DSN }}" >> .env.production
          echo "VITE_RAZORPAY_KEY=${{ secrets.PROD_RAZORPAY_KEY }}" >> .env.production
          echo "VITE_FEATURE_ANALYTICS=true" >> .env.production

      - name: Build
        run: npm run build     # vite build → reads .env.production

      - name: Deploy
        run: aws s3 sync dist/ s3://myapp-production/ --delete
```

---

### Environment Mapping Summary

| File | Git? | Loaded when | Used for |
|---|---|---|---|
| `.env` | ✅ Yes | All modes | Shared defaults |
| `.env.development` | ✅ Yes | `vite` / `npm run dev` | Local dev |
| `.env.test` | ✅ Yes | `vitest --mode test` | Unit tests |
| `.env.e2e` | ✅ Yes | `vite --mode e2e` | E2E test env |
| `.env.staging` | ✅ Yes | `vite build --mode staging` | Staging deploy |
| `.env.production` | ✅ Yes | `vite build` | Prod deploy (no secrets) |
| `.env.local` | ❌ Never | Always (overrides all) | Personal dev overrides |
| `.env.*.local` | ❌ Never | Mode-specific (overrides) | Personal mode overrides |

> **Security rule**: `.env` files committed to git must **never** contain real secrets (tokens, private keys, DB passwords). Only non-sensitive config (URLs, feature flags, public keys). Real secrets go in CI/CD environment secrets, which are injected at build time.

---

## 15.4 — Nginx Configuration for Serving a React App

> When you run `npm run build`, React produces a static `dist/` folder. To serve it in production, you need a web server. **Nginx** is the industry standard. The config is critical — without it, page refresh and direct URL access will break.

---

### Why Nginx Config Matters for React SPAs

A React SPA is a **single HTML file** (`index.html`) that handles routing entirely in JavaScript. The problem:

```
User visits: https://myapp.com/dashboard/settings
Browser asks Nginx: "Give me /dashboard/settings"
Nginx looks for a file at: /usr/share/nginx/html/dashboard/settings
File doesn't exist → Nginx returns 404 ← BUG
```

The fix: tell Nginx to **always serve `index.html`** for any path that isn't a real file — and let React Router handle the routing.

---

### Basic Nginx Config — React SPA

```nginx
# /etc/nginx/conf.d/myapp.conf

server {
    listen 80;
    server_name myapp.com www.myapp.com;

    # Root: where your dist/ folder is deployed
    root /usr/share/nginx/html;
    index index.html;

    # ---------------------------------------------------------------
    # THE CRITICAL RULE: serve index.html for all routes
    # Without this, page refresh on /dashboard/settings returns 404
    # ---------------------------------------------------------------
    location / {
        try_files $uri $uri/ /index.html;
        # try_files checks:
        # 1. $uri       — is there a real file at this path? (e.g. /logo.png)
        # 2. $uri/      — is there a directory at this path?
        # 3. /index.html — fall back to index.html for React Router to handle
    }
}
```

---

### Production-Grade Nginx Config

```nginx
# /etc/nginx/conf.d/myapp.conf

server {
    listen 80;
    server_name myapp.com www.myapp.com;

    # Redirect HTTP → HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name myapp.com www.myapp.com;

    # ---- SSL Certificates (Let's Encrypt / Certbot) ----
    ssl_certificate     /etc/letsencrypt/live/myapp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/myapp.com/privkey.pem;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    # ---- Root: where dist/ is deployed ----
    root /usr/share/nginx/html;
    index index.html;

    # ---- Compression (gzip) — reduces JS bundle size by ~70% ----
    gzip on;
    gzip_vary on;
    gzip_types
        text/plain
        text/css
        text/javascript
        application/javascript
        application/json
        image/svg+xml;
    gzip_min_length 1024;
    gzip_comp_level 6;

    # ---- Cache static assets aggressively ----
    # Hashed filenames (main.a3f9c2d.js) can be cached forever —
    # the hash changes when content changes, so old cache is never stale.
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2|woff|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;  # Don't log static asset requests
    }

    # ---- Never cache index.html ----
    # index.html references the hashed JS/CSS filenames.
    # If it's cached, users won't get updated asset references after a deploy.
    location = /index.html {
        expires -1;
        add_header Cache-Control "no-store, no-cache, must-revalidate";
    }

    # ---- THE CRITICAL SPA RULE ----
    # Serve index.html for all routes — React Router handles the rest
    location / {
        try_files $uri $uri/ /index.html;
    }

    # ---- Security Headers ----
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()";

    # ---- Content Security Policy ----
    add_header Content-Security-Policy
        "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.myapp.com;";
}
```

---

### Nginx as API Proxy (Avoid CORS in Production)

Instead of CORS headers on your API server, proxy all `/api` requests through Nginx. The browser sees the same origin for both the frontend and API.

```nginx
server {
    listen 443 ssl http2;
    server_name myapp.com;

    root /usr/share/nginx/html;

    # ---- Proxy /api/* to your backend ----
    location /api/ {
        proxy_pass         http://backend:3001/;    # backend = Docker service name / IP
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;

        # Timeouts for slow API responses
        proxy_connect_timeout 60s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
    }

    # ---- Proxy WebSocket connections ----
    location /ws/ {
        proxy_pass         http://backend:3001/;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_read_timeout 86400s;   # Keep WS connections alive (24h)
    }

    # ---- SPA fallback ----
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**With this config:**
```
Browser → GET https://myapp.com/api/users  →  Nginx  →  http://backend:3001/users
Browser → GET https://myapp.com/dashboard  →  Nginx  →  /index.html (React handles routing)
```
No CORS headers needed. Single origin for everything.

---

### Multi-Environment Nginx with Environment-Specific Config

```nginx
# /etc/nginx/conf.d/myapp-staging.conf — staging server
server {
    listen 443 ssl http2;
    server_name staging.myapp.com;

    root /usr/share/nginx/html;

    # ---- Basic auth to protect staging from public ----
    auth_basic "Staging Environment";
    auth_basic_user_file /etc/nginx/.htpasswd;

    # Bypass auth for API calls (your CI tools need to call the API directly)
    location /api/ {
        auth_basic off;
        proxy_pass http://staging-backend:3001/;
        proxy_set_header Host $host;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

```nginx
# /etc/nginx/conf.d/myapp-e2e.conf — E2E test environment
server {
    listen 80;
    server_name e2e.myapp.com;

    root /usr/share/nginx/html;

    # No HTTPS, no auth — E2E tests run in a private network
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Allow CORS for E2E test runners calling the API directly
    location /api/ {
        add_header Access-Control-Allow-Origin "*";
        proxy_pass http://e2e-backend:3001/;
    }
}
```

---

### Serving React from a Sub-path

Sometimes your React app isn't at the root `/` but at `/app/` or `/admin/`.

```jsx
// vite.config.ts — set base path
export default defineConfig({
    base: "/admin/",   // All asset paths will be prefixed with /admin/
});
```

```nginx
# Nginx — serve the app from /admin/
location /admin/ {
    alias /usr/share/nginx/html/;
    try_files $uri $uri/ /admin/index.html;
}
```

---

### Docker + Nginx Complete Setup

```dockerfile
# Dockerfile — multi-stage build
# Stage 1: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
ARG BUILD_MODE=production
RUN npm run build -- --mode $BUILD_MODE
# dist/ is now in /app/dist/

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy our custom Nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```yaml
# docker-compose.yml — full stack: React + Nginx + API backend
version: "3.9"

services:
  frontend:
    build:
      context: .
      args:
        BUILD_MODE: production    # or staging, e2e
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/certs:/etc/letsencrypt    # SSL certs
    depends_on:
      - backend

  backend:
    image: myapp-api:latest
    expose:
      - "3001"     # Not published externally — only Nginx can reach it
    environment:
      NODE_ENV: production
      DATABASE_URL: ${DATABASE_URL}

  # Build for staging:
  # docker compose build --build-arg BUILD_MODE=staging frontend
```

```bash
# Build for different environments
docker compose build --build-arg BUILD_MODE=production frontend
docker compose build --build-arg BUILD_MODE=staging frontend
docker compose build --build-arg BUILD_MODE=e2e frontend
```

---

### Common Nginx Mistakes with React Apps

| Mistake | Symptom | Fix |
|---|---|---|
| Missing `try_files` | Page refresh returns 404 | Add `try_files $uri $uri/ /index.html;` |
| Caching `index.html` | Users don't get updates after deploy | `add_header Cache-Control "no-store"` on `index.html` |
| Not caching static assets | Slow load on every visit | `expires 1y` + `immutable` on hashed assets |
| Not enabling gzip | Large JS bundles slow on slow networks | `gzip on; gzip_types text/javascript application/javascript;` |
| No HTTPS redirect | Mixed content warnings, SEO penalty | Redirect 80 → 443 |
| Serving from wrong path | Blank page, 404 on assets | Check `root` matches where `dist/` is deployed |

---

## 15.5 — Browser Compatibility

Making a React app work across different browsers means handling two separate problems:
1. **JavaScript compatibility** — older browsers don't support modern JS syntax/APIs
2. **CSS compatibility** — some CSS properties need vendor prefixes in certain browsers

---

### The Compatibility Stack

```
Your modern JS/CSS code
        ↓
  .browserslistrc  ←── defines which browsers you support
        ↓
  Babel (@babel/preset-env)  ←── transforms JS syntax
  core-js                    ←── polyfills missing runtime APIs
  autoprefixer (PostCSS)     ←── adds CSS vendor prefixes
        ↓
  Browser-compatible bundle
```

---

### Step 1 — Define Your Target Browsers with `.browserslistrc`

All tools (Babel, autoprefixer, ESLint compat plugin) read this single file to know which browsers you support.

```
# .browserslistrc
# Production — modern browsers only
> 0.5%           # browsers used by more than 0.5% of global users
last 2 versions  # last 2 versions of every browser
not dead         # exclude browsers with no official support/updates
not IE 11        # explicitly drop IE 11

# Development (same file, separate query)
[development]
last 1 chrome version
last 1 firefox version
last 1 safari version
```

**Common query presets:**

| Query | Meaning |
|---|---|
| `> 0.5%` | Global usage > 0.5% (via caniuse data) |
| `last 2 versions` | Last 2 releases of each browser |
| `not dead` | Browsers with official support in last 24 months |
| `not IE 11` | Explicitly drop Internet Explorer 11 |
| `defaults` | Shorthand for `> 0.5%, last 2 versions, not dead` |
| `supports es6-module` | Only browsers that support native ES modules |

```bash
# Check which browsers your query resolves to
npx browserslist "> 0.5%, last 2 versions, not dead"
```

---

### Step 2 — JavaScript: Babel + core-js (Webpack / CRA projects)

> **Vite projects** — skip directly to Step 3. Vite handles this differently (see below).

```bash
npm install -D @babel/preset-env
npm install core-js@3          # runtime polyfills (save, not devDependency)
```

```json
// babel.config.json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": "defaults",   // reads .browserslistrc
      "useBuiltIns": "usage",  // inject polyfills only for APIs you actually use
      "corejs": 3
    }]
  ]
}
```

**How `useBuiltIns: "usage"` works:**

```js
// YOUR SOURCE
const result = [1, [2, 3]].flat();
const p = new Promise((res) => res(1));

// BABEL OUTPUT (for a browser that lacks Array.flat and Promise)
import "core-js/modules/es.array.flat.js";   // ← auto-injected
import "core-js/modules/es.promise.js";       // ← auto-injected
const result = [1, [2, 3]].flat();
const p = new Promise((res) => res(1));
```

**Syntax transforms vs runtime polyfills** — Babel handles both but differently:

| Feature | Type | Handled by |
|---|---|---|
| Arrow functions | Syntax | `@babel/preset-env` rewrites to `function(){}` |
| `async / await` | Syntax | `@babel/preset-env` rewrites to generator/Promise |
| Optional chaining `?.` | Syntax | `@babel/preset-env` rewrites to `&&` chain |
| `Promise` | Runtime API | `core-js` injects the global |
| `Array.prototype.flat` | Runtime API | `core-js` adds `.flat()` to `Array.prototype` |
| `fetch` | Runtime API | NOT in `core-js` — use `whatwg-fetch` separately |
| `IntersectionObserver` | Browser API | NOT polyfillable via Babel — use feature detection |

---

### Step 3 — JavaScript: Vite Browser Target + `@vitejs/plugin-legacy`

Vite uses **esbuild** (not Babel) for transforms. It targets modern browsers by default, but you can configure it.

#### Default modern target (recommended for most apps)

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        // Default: ["es2020", "edge88", "firefox78", "chrome87", "safari14"]
        // Override if you want stricter targets:
        target: "es2015",  // transpile down to ES2015 for slightly older browsers
    },
});
```

#### Supporting legacy browsers (old Safari, Samsung Internet, UC Browser)

```bash
npm install -D @vitejs/plugin-legacy
```

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
    plugins: [
        react(),
        legacy({
            targets: ["defaults", "not IE 11"],  // reads .browserslistrc if omitted
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        }),
    ],
});
```

**What `@vitejs/plugin-legacy` generates at build time:**

```html
<!-- index.html after build — two bundles, browser picks the right one -->
<script type="module" src="/assets/index-abc123.js"></script>         <!-- modern -->
<script nomodule src="/assets/index-legacy-def456.js"></script>       <!-- legacy (Babel-compiled) -->
```

Modern browsers execute the `type="module"` script and ignore `nomodule`. Legacy browsers (no ES module support) ignore `type="module"` and execute the `nomodule` script. Zero runtime overhead for modern users.

---

### Step 4 — CSS: autoprefixer via PostCSS

autoprefixer reads `.browserslistrc` and automatically adds vendor prefixes to your CSS.

```bash
npm install -D autoprefixer postcss
```

```js
// postcss.config.js
export default {
    plugins: {
        autoprefixer: {},  // reads .browserslistrc automatically
    },
};
```

**Input CSS:**
```css
.card {
    display: flex;
    user-select: none;
    backdrop-filter: blur(4px);
}
```

**autoprefixer output (for targets including older Safari):**
```css
.card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
}
```

> Vite and CRA both include PostCSS support built-in. Just add `postcss.config.js` — no extra Vite config needed.

---

### Step 5 — Feature Detection (Runtime Guards)

For browser APIs that can't be polyfilled, check at runtime before using them.

```tsx
// Pattern: check before use
function MapComponent() {
    // Geolocation — not available in all contexts (e.g., HTTP, some browsers)
    if (!("geolocation" in navigator)) {
        return <p>Location not supported in this browser.</p>;
    }
    // ...
}

// Intersection Observer — polyfill or degrade gracefully
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(callback);
    observer.observe(element);
} else {
    // fallback: load all images immediately
}

// CSS feature detection in JS (matches @supports in CSS)
const supportsGrid = CSS.supports("display", "grid");

// Web APIs: check before using
const canShare = "share" in navigator;          // Web Share API
const canVibrate = "vibrate" in navigator;      // Vibration API
const canBluetooth = "bluetooth" in navigator;  // Web Bluetooth
```

```css
/* CSS @supports — native feature detection in CSS */
.container {
    display: flex; /* fallback */
}

@supports (display: grid) {
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}
```

---

### Step 6 — Checking Browser Support Before Using a Feature

**Decision workflow before using any new API:**

1. Check **MDN** (developer.mozilla.org) — "Browser compatibility" table at the bottom
2. Check **Can I Use** (caniuse.com) — filterable by usage %
3. If support is < your `.browserslistrc` targets → need polyfill or feature detection
4. If no polyfill exists → provide a graceful fallback UI

**Quick reference — common APIs and their support status:**

| API | Chrome | Firefox | Safari | Need polyfill? |
|---|---|---|---|---|
| `fetch` | ✅ 42+ | ✅ 39+ | ✅ 10.1+ | No (or `whatwg-fetch` for old targets) |
| `IntersectionObserver` | ✅ 51+ | ✅ 55+ | ✅ 12.1+ | `intersection-observer` polyfill for Safari <12 |
| `ResizeObserver` | ✅ 64+ | ✅ 69+ | ✅ 13.1+ | `resize-observer-polyfill` for older Safari |
| `CSS Grid` | ✅ 57+ | ✅ 52+ | ✅ 10.1+ | `@supports` fallback |
| `CSS container queries` | ✅ 105+ | ✅ 110+ | ✅ 16+ | `@supports` fallback |
| `Web Crypto` | ✅ 37+ | ✅ 34+ | ✅ 11+ | No — use HTTPS (required anyway) |
| `CSS backdrop-filter` | ✅ 76+ | ✅ 103+ | ✅ 9+ (-webkit-) | autoprefixer handles the prefix |

---

### Complete Setup Checklist

```bash
# 1. Create .browserslistrc
echo "defaults\nnot IE 11" > .browserslistrc

# 2. Verify what browsers it resolves to
npx browserslist

# 3. Add autoprefixer
npm install -D autoprefixer postcss
echo "export default { plugins: { autoprefixer: {} } };" > postcss.config.js

# 4. (Vite) Add legacy plugin for older browser support
npm install -D @vitejs/plugin-legacy
# Add legacy() to vite.config.ts plugins array

# 5. (Webpack/CRA) Add core-js
npm install core-js@3
# Configure useBuiltIns: "usage" in babel.config.json
```

---

## Module 15 — Interview Q&A

**Q: How do environment variables work in Vite? What is the `VITE_` prefix rule?**
> Vite exposes env vars to the browser bundle only if they are prefixed with `VITE_`. Non-prefixed vars (like `DATABASE_URL`) are available in `vite.config.ts` but NOT in browser code — this prevents accidentally leaking server-side secrets. Access them via `import.meta.env.VITE_*` (not `process.env`).

**Q: What is the `.env` file priority order in Vite?**
> Highest to lowest: `.env.[mode].local` > `.env.local` > `.env.[mode]` > `.env`. Files ending in `.local` are never committed to git (add to `.gitignore`). The `--mode` flag switches which `[mode]` file is loaded: `vite --mode staging` loads `.env.staging`.

**Q: Why should you centralise `import.meta.env` access in a `config.ts` file?**
> Scattering `import.meta.env.VITE_*` calls throughout the codebase makes refactoring hard (rename requires many changes), bypasses type-safety, and prevents fail-fast validation. A single `config.ts` validates all vars at startup (throwing a clear error if one is missing), types them, and exports a typed `config` object. The rest of the app imports `config`, never `import.meta.env`.

**Q: What does `try_files $uri $uri/ /index.html` in Nginx do for a React SPA?**
> Without it: refreshing `/dashboard/settings` makes Nginx look for a file at that path — it doesn't exist — returns 404. With `try_files`: Nginx first checks for a real file (`$uri`), then a directory (`$uri/`), then falls back to `index.html` — letting React Router handle the URL client-side.

**Q: What is the caching strategy for a React SPA in Nginx?**
> Two rules: (1) **`index.html`**: never cache (`no-store, no-cache, must-revalidate`) — it references hashed asset filenames, so users must always get the latest. (2) **Hashed assets** (JS, CSS, images): cache forever (`Cache-Control: public, immutable, max-age=31536000`) — the hash changes on every deploy, so old cache is never stale.

---

## Module 15 Summary

| Concept                   | Key Takeaway                                                                 |
| ------------------------- | ---------------------------------------------------------------------------- |
| **Feature-based folders** | Co-locate related files; scale to large teams                                |
| **Vite**                  | Instant dev server, fast HMR, simple config                                  |
| **`@` alias**             | Clean imports: `@/components/Button` instead of `../../../components/Button` |
| **`.env` hierarchy**      | `.env.local` > `.env.[mode].local` > `.env.[mode]` > `.env` |
| **`VITE_` prefix**        | Required for browser-exposed vars; never store secrets in `.env` files |
| **`config.ts` pattern**   | Single file reads all env vars — validate + type them once, import everywhere |
| **Feature flags**         | `VITE_FEATURE_X=true/false` per env — ship dark code, roll out gradually |
| **CI/CD injection**       | Secrets go in CI/CD secrets, written to `.env` at build time — never in git |
| **Nginx `try_files`**     | The one critical rule — always serve `index.html` for unknown paths |
| **Cache strategy**        | `index.html` = never cache. Hashed assets = cache forever (1y + immutable) |
| **Nginx as proxy**        | Route `/api/*` to backend — eliminates CORS, single origin for browser |
| **`.browserslistrc`** | Single source of truth for target browsers — read by Babel, autoprefixer, ESLint |
| **`@babel/preset-env`** | Transforms modern JS syntax + injects `core-js` polyfills for target browsers |
| **`@vitejs/plugin-legacy`** | Generates `type="module"` + `nomodule` dual bundles — modern perf, legacy support |
| **autoprefixer** | PostCSS plugin — adds `-webkit-`, `-moz-` prefixes based on `.browserslistrc` |
| **Feature detection** | `'IntersectionObserver' in window` — runtime guard before using unsupported APIs |
| **`@supports`** | CSS-native feature detection — apply grid/container-query styles only if supported |

---

[↑ Back to TOC](#table-of-contents)

# Module 16: SSR, SSG, Hydration & Auth Security

> **Topics**: CSR vs SSR vs SSG, Next.js basics, Hydration, JWT, Token storage, XSS

---

## 16.1 — CSR vs SSR vs SSG

These three rendering strategies answer the question: **where and when is the HTML for your page generated?** Understanding this is crucial because it affects page load speed, SEO, and how you architect your data fetching.

```mermaid
timeline
    title When does each strategy render the HTML?
    section SSG - Static Site Generation
        Deploy time : All pages pre-built as HTML files
                    : Developer runs build
                    : HTML ready before any user visits
    section SSR - Server-Side Rendering
        Request time : User requests a page
                     : Server fetches data
                     : Server renders HTML
                     : Browser receives ready HTML
    section CSR - Client-Side Rendering
        Browser time : User requests a page
                     : Server sends empty HTML + JS
                     : Browser downloads JS
                     : React runs and renders UI
```

|                             | CSR (Client-Side Rendering)    | SSR (Server-Side Rendering)   | SSG (Static Site Generation)     |
| --------------------------- | ------------------------------ | ----------------------------- | -------------------------------- |
| **Where rendering happens** | Browser (JavaScript)           | Server (on each request)      | Build time (once)                |
| **Initial page load**       | Slow (JS must download first)  | Fast (HTML arrives ready)     | Fastest (pre-built HTML)         |
| **SEO**                     | Poor (bots see empty HTML)     | Excellent                     | Excellent                        |
| **Data freshness**          | Always fresh (client fetches)  | Always fresh (server fetches) | Stale until rebuild              |
| **Use case**                | Dashboards, authenticated apps | News sites, product pages     | Blogs, docs, marketing           |
| **React tool**              | Create React App / Vite        | Next.js (App Router)          | Next.js (`generateStaticParams`) |

```mermaid
graph TD
    subgraph CSR
        A1[Browser requests page] --> B1[Server sends empty HTML + JS bundle]
        B1 --> C1[Browser runs JS] --> D1[React renders UI]
    end

    subgraph SSR
        A2[Browser requests page] --> B2[Server fetches data + renders HTML]
        B2 --> C2[Browser shows ready HTML instantly]
        C2 --> D2[React hydrates interactive features]
    end

    subgraph SSG
        A3[Build time: pre-render all pages to HTML files]
        B3[Browser requests page] --> C3[CDN serves pre-built HTML instantly]
        C3 --> D3[React hydrates]
    end
```

---

## 16.2 — Hydration

### What is Hydration?

When Next.js does SSR or SSG, the server sends **ready-made HTML**. The browser shows it instantly (fast!). Then React "wakes up" — it attaches event listeners and makes the static HTML **interactive**. This process is called **hydration**.

Think of it in two phases:

```mermaid
sequenceDiagram
    participant Server
    participant Browser
    participant React
    participant User

    Server->>Browser: Sends pre-rendered HTML (static, not interactive)
    Browser->>User: Displays HTML instantly (user sees content)
    Note over Browser,User: Page looks complete but buttons don't work yet
    Browser->>React: Downloads and runs React JS bundle
    React->>Browser: Walks the existing DOM nodes
    React->>Browser: Attaches event listeners, initializes state
    Note over Browser,User: Page is now fully interactive (Hydration complete)
    User->>Browser: Clicks a button ✔ Works!
```

> **Simple analogy**: The server sends a printed photograph (HTML). Hydration is React breathing life into it — adding click handlers, state, and interactivity.

### Hydration Mismatch — A Common Bug

```jsx
// ============================================================
// ❌ BAD CODE: Server and client render different HTML — hydration mismatch
// ============================================================
function Clock() {
    // Server renders with server's time. Client renders with client's time.
    // They're different! React throws a hydration error.
    return <div>{new Date().toLocaleTimeString()}</div>; // ← MISMATCH
}

// ============================================================
// ✅ FIX: Render a consistent value on first render, update after hydration
// ============================================================
function Clock() {
    const [time, setTime] = useState(""); // Empty on both server and client

    useEffect(() => {
        // This only runs on the client, AFTER hydration — no mismatch
        setTime(new Date().toLocaleTimeString());
        const id = setInterval(
            () => setTime(new Date().toLocaleTimeString()),
            1000,
        );
        return () => clearInterval(id);
    }, []);

    return <div>{time || "..."}</div>;
}
```

---

## 16.3 — Authentication & JWT Security

### JWT (JSON Web Token) — What It Is

When you log in, the server verifies your credentials and creates a **JWT** — a signed string that says "this user is Alice with ID 123." Your browser stores this token and sends it with every future request. The server reads the token, verifies its signature, and knows who you are — without touching a database.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    participant DB

    User->>Browser: Login with email + password
    Browser->>Server: POST /auth/login { email, password }
    Server->>DB: Verify credentials
    DB-->>Server: credentials valid
    Server->>Server: Create JWT: header.payload.signature
    Server-->>Browser: JWT token
    Browser->>Browser: Store token (cookie or memory)

    Note over User,DB: Later requests…
    Browser->>Server: GET /api/profile + JWT
    Server->>Server: Verify JWT signature (no DB needed)
    Server-->>Browser: Profile data
```

```
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjMifQ.SIGNATURE
      (header)              (payload)            (signature)
```

### Token Storage: The Security Dilemma

| Storage               | XSS Risk | CSRF Risk                | Accessible to JS     | Recommendation            |
| --------------------- | -------- | ------------------------ | -------------------- | ------------------------- |
| `localStorage`        | ❌ HIGH  | ✅ None                  | Yes                  | **Avoid** for auth tokens |
| `sessionStorage`      | ❌ HIGH  | ✅ None                  | Yes                  | **Avoid** for auth tokens |
| **`httpOnly` Cookie** | ✅ None  | ⚠️ Needs CSRF protection | No                   | **Recommended**           |
| Memory (React state)  | ✅ None  | ✅ None                  | Yes (during session) | Good, but lost on refresh |

> **Why `localStorage` is dangerous for auth tokens**: Any JavaScript on your page can read `localStorage`. If an attacker injects malicious JavaScript (XSS), they steal the token instantly. `httpOnly` cookies cannot be read by any JavaScript — only sent automatically by the browser.

```jsx
// ============================================================
// ❌ BAD CODE: Storing JWT in localStorage (XSS vulnerable)
// ============================================================
async function login(credentials) {
    const { token } = await authApi.login(credentials);
    localStorage.setItem("token", token); // ← Any JS can steal this!
}

function useAuthHeader() {
    return { Authorization: `Bearer ${localStorage.getItem("token")}` };
}
```

```jsx
// ============================================================
// ✅ BEST PRACTICE 1: httpOnly cookies (set by server)
// The server sets: Set-Cookie: token=...; HttpOnly; Secure; SameSite=Strict
// Browser automatically sends the cookie — your JS never touches the token
// ============================================================
async function login(credentials) {
    await authApi.login(credentials); // Server sets httpOnly cookie automatically
    // No token handling in JS needed!
}

// Requests automatically include the cookie
fetch("/api/profile", { credentials: "include" }); // credentials: 'include' sends cookies
```

```jsx
// ============================================================
// ✅ BEST PRACTICE 2: In-memory token (for SPAs without httpOnly cookie support)
// ============================================================
// Store token in a module-level variable — never in localStorage
let accessToken = null;

export function setToken(token) {
    accessToken = token;
}
export function getToken() {
    return accessToken;
}
export function clearToken() {
    accessToken = null;
}

// Combine with a refresh token in httpOnly cookie for persistence across refreshes
```

---

## 16.4 — XSS Prevention in React

React automatically **escapes** all values rendered in JSX, making most XSS attacks impossible.

```jsx
const userInput = '<script>alert("XSS")</script>';

// React escapes this — the browser shows the literal text, not a script
// Safe: React converts < to &lt; etc.
return <div>{userInput}</div>;
```

**The only dangerous React API: `dangerouslySetInnerHTML`**

```jsx
// ============================================================
// ❌ DANGEROUS: Raw HTML injection — XSS risk!
// ============================================================
function RiskyComponent({ htmlContent }) {
    // If htmlContent comes from a user or untrusted source, this is an XSS hole
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

// ============================================================
// ✅ SAFE: Sanitize before using dangerouslySetInnerHTML
// ============================================================
import DOMPurify from "dompurify"; // npm install dompurify

function SafeHtmlRenderer({ htmlContent }) {
    const sanitized = DOMPurify.sanitize(htmlContent); // Remove malicious tags/attrs
    return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}
```

---

## Module 16 — Interview Q&A

**Q: What is the difference between CSR, SSR, and SSG?**

| | CSR | SSR | SSG |
|---|---|---|---|
| Rendered where | Browser | Server, per request | Server, at build time |
| First HTML | Empty `<div id="root">` | Full HTML | Full HTML |
| SEO | ❌ Poor | ✅ Good | ✅ Excellent |
| Data freshness | Always fresh | Always fresh | Stale until redeploy |
| Best for | Auth dashboards, SPAs | Public pages, e-commerce | Blogs, docs, marketing |

**Q: What is hydration? What is a hydration mismatch?**
> Hydration is React attaching event listeners and state to server-rendered HTML without re-creating DOM nodes. React renders the component tree client-side and matches it against the existing HTML — if they match, it just "wires up" interactivity. A **hydration mismatch** occurs when the server-rendered HTML differs from what React would render client-side (e.g., using `Math.random()`, `Date.now()`, or reading `window` during render). React must discard and re-render the mismatched subtree.

**Q: Why is JWT in an `httpOnly` cookie more secure than `localStorage`?**
> `localStorage` is readable by any JavaScript on the page — an XSS attack can steal the token. An `httpOnly` cookie is set by the server and is NOT accessible to JavaScript at all — only the browser sends it automatically with each request. Pair with `SameSite=Strict`/`Lax` to prevent CSRF. For most production apps: `httpOnly` + `Secure` + `SameSite=Lax` is the recommended auth token storage.

**Q: What is `dangerouslySetInnerHTML` and when is it safe to use?**
> It's React's explicit way to inject raw HTML into the DOM (equivalent to `element.innerHTML = ...`). It's safe ONLY when the HTML is sanitized first with a library like DOMPurify. Never pass user-provided content directly — this is the primary XSS vector in React apps.

---

## Module 16 Summary

| Concept                       | Key Takeaway                                             |
| ----------------------------- | -------------------------------------------------------- |
| **CSR**                       | Best for private, auth-gated dashboards                  |
| **SSR**                       | Best for public pages that need SEO and fresh data       |
| **SSG**                       | Best for content that doesn't change often (blogs, docs) |
| **Hydration**                 | React attaches interactivity to server-rendered HTML     |
| **JWT in httpOnly cookies**   | Most secure storage — JS can't read it, XSS-proof        |
| **`dangerouslySetInnerHTML`** | Only use with DOMPurify sanitization                     |

---

[↑ Back to TOC](#table-of-contents)

# Module 17: Real-World Concepts

> **Topics**: Pagination, Infinite scrolling, Debouncing/Throttling, TanStack Query, Optimistic UI

---

## 17.1 — Pagination

Pagination is the practice of splitting a large list of data into smaller **pages** (chunks), loading only what the user needs right now. Instead of fetching 10,000 products at once and overwhelming the browser, you fetch 20 at a time.

**Why store the current page in the URL instead of in React state?**

- **Shareable**: `yoursite.com/products?page=5` — paste this link and someone else lands on exactly page 5
- **Bookmarkable**: the browser tab remembers which page you were on after a refresh
- **Browser back button works**: pressing back goes to page 4, not page 1
- **URL is the single source of truth**: no risk of state getting out of sync with what the user sees

Here's how the data flows when a user clicks "Next":

```mermaid
flowchart LR
    A[User clicks Next] --> B["setSearchParams({ page: n+1 })"]
    B --> C[URL becomes ?page=2]
    C --> D[useSearchParams reads page=2]
    D --> E[useFetch called with page=2&limit=20]
    E --> F[API returns next 20 items]
    F --> G[ProductGrid re-renders with new items]

    style A fill:#61dafb,color:#000
    style G fill:#28a745,color:#fff
```

```jsx
// ============================================================
// ✅ URL-driven pagination (shareable, bookmarkable)
// ============================================================
function ProductsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = 20;

    const { data, isLoading } = useFetch(
        `/api/products?page=${page}&limit=${limit}`,
    );

    return (
        <div>
            <ProductGrid products={data?.items} />

            <div className="pagination">
                <button
                    onClick={() => setSearchParams({ page: page - 1 })}
                    disabled={page <= 1 || isLoading}
                >
                    ← Previous
                </button>

                <span>
                    Page {page} of {data?.totalPages}
                </span>

                <button
                    onClick={() => setSearchParams({ page: page + 1 })}
                    disabled={page >= data?.totalPages || isLoading}
                >
                    Next →
                </button>
            </div>
        </div>
    );
}
```

---

## 17.2 — Infinite Scrolling

Infinite scrolling is an alternative to pagination buttons. More content loads automatically as the user scrolls down — like Twitter, Instagram, or a news feed.

The brain of this feature is the browser's **IntersectionObserver API**. It watches a specific element (called a **sentinel** — an invisible `<div>` placed at the very bottom of your list) and fires a callback the moment that element becomes visible on screen.

You never need to listen to scroll events, calculate positions, or do any math. The browser does all of that. You just react to the observer's callback: "sentinel is visible → load more."

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Observer as IntersectionObserver
    participant React
    participant API

    User->>Browser: Scrolls down the page
    Browser->>Observer: Checks visibility of sentinel div
    Observer->>React: Sentinel is 100% visible — fires callback!
    React->>React: setPage(prev => prev + 1)
    React->>API: fetch('/api/feed?page=2')
    API-->>React: Returns next batch of items
    React->>React: setItems(prev => [...prev, ...newItems])
    React->>User: New items appear seamlessly at the bottom
    Note over User,React: Process repeats as user keeps scrolling
```

**Key terms:**

- **Sentinel element**: The invisible `<div ref={loaderRef}>` sitting at the end of your list. It acts as a trigger point — once visible, it signals "the user has scrolled to the bottom."
- **`threshold: 1.0`**: Fires when 100% of the sentinel is visible. Use `0` for "fire as soon as one pixel is visible."
- **`observer.disconnect()`**: Cleanup in `useEffect`'s return function — prevents memory leaks from lingering observers.

```jsx
// ============================================================
// ✅ Infinite scroll using Intersection Observer
// Intersection Observer fires when an element enters/leaves the viewport
// ============================================================
function InfiniteFeed() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const loaderRef = useRef(null); // Attach to the sentinel element

    // Load data whenever page changes
    useEffect(() => {
        async function loadMore() {
            setIsLoading(true);
            const res = await fetch(`/api/feed?page=${page}`);
            const data = await res.json();
            setItems((prev) => [...prev, ...data.items]);
            setHasMore(data.hasNextPage);
            setIsLoading(false);
        }
        loadMore();
    }, [page]);

    // Watch the loader element — when it becomes visible, load more
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    setPage((prev) => prev + 1); // Load next page
                }
            },
            { threshold: 1.0 }, // Fire when 100% visible
        );

        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect(); // Cleanup
    }, [hasMore, isLoading]);

    return (
        <div>
            {items.map((item) => (
                <FeedCard key={item.id} item={item} />
            ))}
            {/* This invisible sentinel triggers loading when scrolled into view */}
            <div ref={loaderRef}>
                {isLoading && <Spinner />}
                {!hasMore && <p>You've reached the end!</p>}
            </div>
        </div>
    );
}
```

---

## 17.3 — Debouncing vs Throttling

Both debounce and throttle solve the same root problem: a function is being triggered too frequently (like on every keystroke or every scroll pixel), and calling an API or doing an expensive calculation that often would be wasteful and slow.

They both slow down how often a function is called, but in very different ways:

> **Simple analogy**:
>
> - **Debounce** — like an elevator door: every time someone new approaches, it resets the "close" timer. The door only closes after nobody approaches for 5 seconds. For search: wait until typing stops, then call the API once.
> - **Throttle** — like a security camera: it takes a snapshot every 10 seconds, no matter what's happening in front of it. Consistent, predictable rate. For scroll events: fire at most once every 200ms.

```mermaid
graph TD
    subgraph "User types 'react' quickly (5 keystrokes)"
        K["r → e → a → c → t (within 200ms)"]
    end

    subgraph "Debounce 300ms — fire only after user STOPS"
        D1["Timer starts on 'r'"] --> D2["'e' resets timer"]
        D2 --> D3["'a' resets timer"]
        D3 --> D4["'c' resets timer"]
        D4 --> D5["'t' resets timer"]
        D5 -->|"300ms of silence"| D6["API called ONCE with 'react'"]
        style D6 fill:#28a745,color:#fff
    end

    subgraph "Throttle 200ms — fire at steady intervals"
        T1["Scroll starts → fires immediately"] -->|"200ms"| T2["Fires again"]
        T2 -->|"200ms"| T3["Fires again"]
        T3 --> T4["Events in between are ignored"]
        style T1 fill:#61dafb,color:#000
    end
```

> **When to use which**: Use **debounce** for things driven by user input where you only care about the final state (search box, form validation). Use **throttle** for continuous stream events where missing some events is fine but stopping is not (scroll position, window resize, mouse move).

```jsx
// useDebounce is in Module 7.8 — reusing it here:
function SearchInput() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 300); // API call fires 300ms after typing stops

    const { data } = useFetch(`/api/search?q=${debouncedQuery}`);

    return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}

// Throttle implementation
function useThrottle(value, interval = 200) {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastUpdated = useRef(Date.now());

    useEffect(() => {
        const now = Date.now();
        if (now - lastUpdated.current >= interval) {
            setThrottledValue(value);
            lastUpdated.current = now;
        } else {
            const timerId = setTimeout(
                () => {
                    setThrottledValue(value);
                    lastUpdated.current = Date.now();
                },
                interval - (now - lastUpdated.current),
            );
            return () => clearTimeout(timerId);
        }
    }, [value, interval]);

    return throttledValue;
}
```

---

## 17.4 — TanStack Query (React Query)

### The Why

Every app that fetches data needs: loading state, error state, caching, refetching on focus, pagination, and more. Writing this with raw `useEffect` in every component is exhausting. **TanStack Query** handles all of it.

> **Think of it as a smart cache** for your server data. It knows when data is fresh, when to refetch, and how to synchronize across multiple components.

### How the Cache Lifecycle Works

TanStack Query stores each piece of server data in a **cache**, uniquely identified by a key you provide (`queryKey`). The data moves through these states automatically:

```mermaid
graph LR
    IDLE["Idle<br/>No data yet"] -->|"Component mounts"| FETCH["Fetching<br/>HTTP request in flight"]
    FETCH -->|"Success"| FRESH["Fresh<br/>Data is up to date"]
    FETCH -->|"Failure"| ERR["Error<br/>Request failed"]
    FRESH -->|"staleTime expires"| STALE["Stale<br/>Data exists but may be old"]
    STALE -->|"Window refocused / component re-mounts"| BG["Background Refetch<br/>Showing old data, fetching new"]
    BG -->|"Success"| FRESH
    ERR -->|"Retry (up to retry count)"| FETCH

    style FRESH fill:#28a745,color:#fff
    style FETCH fill:#61dafb,color:#000
    style STALE fill:#f0ad4e,color:#000
    style ERR fill:#dc3545,color:#fff
    style BG fill:#6f42c1,color:#fff
```

**Key concept — `staleTime`**: This is how long TanStack Query trusts the cached data. If `staleTime` is 5 minutes, then for 5 minutes after a successful fetch, any component that needs this data gets it from cache instantly — no network call. After 5 minutes the data is "stale" and will be refetched in the background when the component re-mounts or the window regains focus.

### Why This Beats Raw useEffect

With useEffect, if two components on the page both need `userProfile`, they each make their own API call. With TanStack Query, if they use the same `queryKey`, they share **one** cache entry and **one** HTTP request:

```mermaid
sequenceDiagram
    participant C1 as UserProfile component
    participant C2 as UserSidebar component
    participant Cache as TanStack Cache
    participant API

    C1->>Cache: useQuery(["user", 1])
    Cache->>API: GET /api/users/1 (FIRST request)
    API-->>Cache: Returns { name: "Alice" }
    Cache-->>C1: data loaded

    C2->>Cache: useQuery(["user", 1])
    Cache-->>C2: Returns cached data instantly — NO new request!

    Note over C1,API: Without TanStack Query: 2 identical API requests
    Note over C1,API: With TanStack Query: 1 request shared by all consumers
```

```jsx
// ============================================================
// ✅ TanStack Query — replaces manual useEffect data fetching
// ============================================================
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

// Setup — wrap your app
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // Data is "fresh" for 5 minutes — no refetch
            retry: 2, // Retry failed requests twice
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MyApp />
        </QueryClientProvider>
    );
}

// ============================================================
// Fetching data with useQuery
// ============================================================
function UserProfile({ userId }) {
    const {
        data: user,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["user", userId], // Unique cache key — like an address for this data
        queryFn: () => fetch(`/api/users/${userId}`).then((r) => r.json()),
        // Benefits you get for FREE:
        // ✅ Caching: same userId → no duplicate requests
        // ✅ Background refetch when tab regains focus
        // ✅ Shared: multiple components with same key use one request
    });

    if (isLoading) return <Spinner />;
    if (isError) return <p>Error: {error.message}</p>;
    return <div>{user.name}</div>;
}

// ============================================================
// Mutations (create, update, delete) with useMutation
// ============================================================
function FollowButton({ userId }) {
    const queryClient = useQueryClient();

    const followMutation = useMutation({
        mutationFn: (id) =>
            fetch(`/api/users/${id}/follow`, { method: "POST" }),
        onSuccess: () => {
            // Invalidate the user cache so it refetches fresh data
            queryClient.invalidateQueries({ queryKey: ["user", userId] });
        },
    });

    return (
        <button
            onClick={() => followMutation.mutate(userId)}
            disabled={followMutation.isPending}
        >
            {followMutation.isPending ? "Following..." : "Follow"}
        </button>
    );
}
```

---

## 17.5 — Optimistic UI Updates

### The Why

When a user likes a post, they shouldn't have to wait for the server to confirm before seeing the heart turn red. **Optimistic UI** updates the UI immediately, then rolls back if the server fails.

The word "optimistic" means we're **assuming the request will succeed**. In the real world, most requests do succeed — so showing the result instantly feels snappy and responsive. The rare failure triggers a rollback the user barely notices.

### The Three-Phase Pattern

Every optimistic update follows exactly this flow:

```mermaid
sequenceDiagram
    participant User
    participant UI
    participant Cache as TanStack Cache
    participant API

    User->>UI: Clicks Like ❤️
    UI->>Cache: onMutate: save snapshot of current data
    Cache->>Cache: Immediately update likes count + 1
    Cache->>UI: Re-renders with new count (instant!)
    UI->>API: POST /api/posts/1/like (happening in background)

    alt Request Succeeds
        API-->>Cache: onSettled: invalidateQueries
        Cache->>API: Background refetch to sync true server state
        API-->>Cache: Confirmed count stored
    else Request Fails
        API-->>Cache: onError: restore the saved snapshot
        Cache->>UI: Rolls back to previous likes count
        UI->>User: Shows error notification
    end
```

**The three callback hooks you always use together:**

1. **`onMutate`**: Runs BEFORE the API call. Save a snapshot of the current data, then immediately update the cache to the "assumed success" state.
2. **`onError`**: Runs IF the API call fails. Restore the snapshot to undo the optimistic change.
3. **`onSettled`**: Runs always (success or failure). Invalidate the query to get the definitive server state, syncing any edge cases.

```jsx
// ============================================================
// ✅ Optimistic update with TanStack Query
// ============================================================
function LikeButton({ postId, initialLikes }) {
    const queryClient = useQueryClient();

    const likeMutation = useMutation({
        mutationFn: () =>
            fetch(`/api/posts/${postId}/like`, { method: "POST" }),

        // 1. Before the request, immediately update the cache
        onMutate: async () => {
            // Cancel any outgoing refetches (they'll overwrite optimistic update)
            await queryClient.cancelQueries({ queryKey: ["post", postId] });

            // Snapshot the previous data so we can roll back on error
            const previousPost = queryClient.getQueryData(["post", postId]);

            // Optimistically update — user sees this instantly
            queryClient.setQueryData(["post", postId], (old) => ({
                ...old,
                likes: old.likes + 1,
                isLiked: true,
            }));

            return { previousPost }; // Pass snapshot to onError
        },

        // 2. If the request fails, roll back to the snapshot
        onError: (err, variables, context) => {
            queryClient.setQueryData(["post", postId], context.previousPost);
        },

        // 3. Always refetch after success or error to sync with server
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["post", postId] });
        },
    });

    return (
        <button onClick={() => likeMutation.mutate()}>
            ❤️{" "}
            {queryClient.getQueryData(["post", postId])?.likes ?? initialLikes}
        </button>
    );
}
```

---

## Module 17 — Interview Q&A

**Q: What is the difference between debouncing and throttling?**

| | Debounce | Throttle |
|---|---|---|
| Fires when | After N ms of *silence* (user stops) | At most once per N ms |
| Use for | Search input, form autosave, resize-end | Scroll handler, mouse move, resize-ongoing |
| Example | Fire API call 400ms after user stops typing | Update position every 200ms while dragging |

**Q: What is TanStack Query? Why use it instead of `useEffect`+`useState` for data fetching?**
> TanStack Query manages server state: caching, deduplication, background refetching, stale-while-revalidate, pagination, and optimistic updates — all automatically. With `useEffect`+`useState` you manually handle every case. With TanStack Query: `const { data, isLoading, error } = useQuery({ queryKey: ['user', id], queryFn: fetchUser })` — that's it. It also deduplicates — 10 components using the same query key share one network request.

**Q: What is optimistic UI? What can go wrong?**
> Optimistic UI updates the UI immediately (assuming the server will succeed), then reconciles with the server response. Example: clicking "Like" instantly increments the count — if the API call fails, roll back to the previous value. Risk: if the rollback is not implemented, users see a false state. React 19's `useOptimistic` hook handles the pattern natively.

**Q: What is infinite scroll? How is it better than a "Load More" button?**
> Infinite scroll uses `IntersectionObserver` to detect when a sentinel element (invisible div at the bottom of the list) enters the viewport, then automatically loads the next page. Better UX than a button for content feeds. Better performance than the `scroll` event (fires on every pixel — expensive) because `IntersectionObserver` only fires when the threshold is crossed.

---

## Module 17 Summary

| Concept             | Key Takeaway                                                          |
| ------------------- | --------------------------------------------------------------------- |
| **Pagination**      | Keep current page in URL (`?page=2`) — shareable and bookmarkable     |
| **Infinite scroll** | Use `IntersectionObserver` to detect when sentinel element is visible |
| **Debounce**        | Delay execution until input stops (search fields)                     |
| **Throttle**        | Limit execution rate regardless of input (scroll/resize)              |
| **TanStack Query**  | Automatic caching, deduplication, background refetch for server data  |
| **Optimistic UI**   | Update UI first, roll back on error — feels instant to users          |

---

[↑ Back to TOC](#table-of-contents)

# Module 18: Production, Scaling & Glossary

> **Topics**: Error handling strategies, logging, monitoring, performance tracking

---

## 18.1 — Production Error Handling Strategy

In a real production app, errors come from three different places. Each needs its own handling mechanism:

1. **Render errors** — A component crashes while rendering (accessing `.name` on `undefined`, a missing prop, etc.). These can ONLY be caught by React Error Boundaries.
2. **Async errors** — A `fetch()` call fails, a Promise rejects, or an API returns a non-200 status. `try/catch` in `useEffect` or event handlers handles these.
3. **Silent failures** — The API returns an unexpected shape, a value is `null` when you expected an object. These don't throw errors — they corrupt the UI silently.

```mermaid
graph TD
    APP["Your React App"]
    APP --> RE["Render Error<br/>(component throws during render)"]
    APP --> AE["Async Error<br/>(fetch fails, Promise rejects)"]
    APP --> SE["Silent Error<br/>(unexpected data shape)"]

    RE -->|caught by| EB["Error Boundary<br/>(class component wrapper)"]
    AE -->|caught by| TC["try/catch in<br/>useEffect / event handler"]
    SE -->|caught by| VAL["Optional chaining + guards<br/>(data?.user?.name ?? 'N/A')"]

    EB --> LOG["logError() → Sentry / Datadog"]
    TC --> LOG
    VAL --> LOG

    EB --> UI1["Fallback UI<br/>'Something went wrong. Refresh?'"]
    TC --> UI2["Error state in component<br/>'Could not load data'"]
    VAL --> UI3["Safe fallback value<br/>(empty state or placeholder)"]

    style RE fill:#dc3545,color:#fff
    style AE fill:#f0ad4e,color:#000
    style SE fill:#6f42c1,color:#fff
    style LOG fill:#28a745,color:#fff
```

> **The key mindset**: Errors in production are **inevitable**. Your job is not to prevent all errors — it's to **catch them gracefully**, **log them** so your team knows what's failing, and **show the user a friendly fallback** rather than a blank broken screen.

```jsx
// ============================================================
// ✅ Layered error handling — the full production pattern
// ============================================================

// Layer 1: Global error boundary catches render errors
// Layer 2: Async errors caught in try/catch within useEffect or event handlers
// Layer 3: API errors normalized and surfaced to users

// Centralized error logging service
function logError(error, context = {}) {
    // In production, send to Sentry, Datadog, etc.
    if (import.meta.env.PROD) {
        Sentry.captureException(error, { extra: context });
    } else {
        console.error("[DEV ERROR]", error, context);
    }
}

// API client with centralized error handling
async function apiCall(url, options = {}) {
    try {
        const res = await fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
        });

        if (res.status === 401) {
            // Unauthorized — redirect to login
            clearToken();
            window.location.href = "/login";
            return;
        }

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.message || `HTTP ${res.status}`);
        }

        return res.json();
    } catch (error) {
        logError(error, { url, options });
        throw error; // Re-throw so the calling component can handle UI
    }
}
```

---

## 18.2 — Performance Tracking

Performance in React comes in two layers:

1. **Component render performance** — How fast does React re-render your components? Measured with the **React Profiler API**.
2. **Real-world user experience** — How does your app feel to actual users on real devices? Measured with **Core Web Vitals**.

### Core Web Vitals — What Google (and Users) Measure

Google uses three metrics to score your site's user experience. These affect SEO rankings and directly correlate with user satisfaction:

```mermaid
graph TD
    CWV["Core Web Vitals"]

    CWV --> LCP["LCP — Largest Contentful Paint<br/>When does the main content appear?<br/>Target: under 2.5s"]
    CWV --> FID["FID — First Input Delay<br/>How quickly does the page respond to clicks?<br/>Target: under 100ms"]
    CWV --> CLS["CLS — Cumulative Layout Shift<br/>Does content jump around?<br/>Target: under 0.1"]

    LCP -->|common causes| L1["Slow server, large unoptimized images,<br/>render-blocking JS in head"]
    FID -->|common causes| F1["Long JavaScript tasks blocking the main thread"]
    CLS -->|common causes| C1["Images without width/height,<br/>late-loading ads/banners"]

    L1 -->|fix with| L2["SSR, image lazy loading,<br/>code splitting, CDN"]
    F1 -->|fix with| F2["Code splitting, defer non-critical scripts,<br/>use Web Workers"]
    C1 -->|fix with| C2["Always set width & height on img tags,<br/>reserve space for dynamic content"]

    style LCP fill:#28a745,color:#fff
    style FID fill:#61dafb,color:#000
    style CLS fill:#f0ad4e,color:#000
```

**Plain-English translations:**

- **LCP**: How long until the user sees the main content (hero image, article text)? Users hate staring at a spinner.
- **FID**: The user clicked a button — how long until the page actually responded? A frozen page kills trust.
- **CLS**: As the page loads, does content shift/jump? If a button moves as you're about to click it, that's bad CLS — extremely frustrating on mobile.

### React Profiler API — Find Slow Components

```jsx
import { Profiler } from "react";

function onRenderCallback(
    id, // Component name
    phase, // "mount" or "update"
    actualDuration, // Time spent rendering (ms)
    baseDuration, // Estimated render time without memoization
    startTime,
    commitTime,
) {
    // Log slow renders to your monitoring service
    if (actualDuration > 16) {
        // 16ms = 60fps budget
        logPerformanceWarning({ id, phase, actualDuration });
    }
}

function App() {
    return (
        <Profiler id="App" onRender={onRenderCallback}>
            <Dashboard />
        </Profiler>
    );
}

// Core Web Vitals monitoring
import { getCLS, getFID, getLCP } from "web-vitals";

getCLS((metric) => logToAnalytics("CLS", metric)); // Cumulative Layout Shift
getFID((metric) => logToAnalytics("FID", metric)); // First Input Delay
getLCP((metric) => logToAnalytics("LCP", metric)); // Largest Contentful Paint
```

---

## 18.3 — Interview-Focused: Key Comparisons

These comparisons come up constantly in React interviews. Knowing the distinction clearly and concisely is what separates senior from junior candidates.

### How to Pick the Right Tool

```mermaid
graph TD
    Q1{"Do you need state shared<br/>across components?"}
    Q1 -->|No| LOCAL["useState / useReducer<br/>Local component state"]
    Q1 -->|Yes| Q2{"How frequently does<br/>it update?"}
    Q2 -->|"Rarely (theme, auth, locale)"| CTX["Context API<br/>Simple, no extra library"]
    Q2 -->|"Frequently (cart, UI, filters)"| Q3{"Is the app complex?<br/>Multiple features?"}
    Q3 -->|No| ZUSTAND["Zustand<br/>Simpler API, less boilerplate"]
    Q3 -->|Yes| REDUX["Redux Toolkit<br/>Devtools, time-travel, middleware"]

    style LOCAL fill:#28a745,color:#fff
    style CTX fill:#61dafb,color:#000
    style ZUSTAND fill:#f0ad4e,color:#000
    style REDUX fill:#6f42c1,color:#fff
```

### Virtual DOM vs Real DOM

|                   | Real DOM                            | Virtual DOM                     |
| ----------------- | ----------------------------------- | ------------------------------- |
| Location          | Browser memory, rendered            | JavaScript memory, not rendered |
| Update cost       | Expensive (triggers reflow/repaint) | Cheap (just object comparison)  |
| How React uses it | Final target                        | Intermediate description        |
| Update strategy   | Direct mutation                     | Diff → batch → commit           |

### `useMemo` vs `useCallback`

|         | `useMemo`               | `useCallback`                              |
| ------- | ----------------------- | ------------------------------------------ |
| Returns | A **value**             | A **function**                             |
| Use for | Expensive computed data | Stable function references                 |
| Example | Filtered/sorted arrays  | Event handlers passed to memoized children |

### Redux vs Context API

|                  | Context API              | Redux Toolkit             |
| ---------------- | ------------------------ | ------------------------- |
| Boilerplate      | Low                      | Medium                    |
| DevTools         | None                     | Excellent (time-travel)   |
| Frequent updates | Re-renders all consumers | Only subscribed selectors |
| Async            | DIY                      | `createAsyncThunk`        |
| Best for         | Theme, auth, config      | Complex app-wide state    |

## 18.4 — TypeScript with React: Generic Components and Types

TypeScript makes React components safer and self-documenting. This section covers the most important patterns you'll use daily.

### Typing Props — The Foundation

```tsx
// ---- BASIC TYPED PROPS ----
interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "danger"; // Optional union type
    disabled?: boolean;
    children?: React.ReactNode; // Accepts any valid JSX content
}

function Button({
    label,
    onClick,
    variant = "primary",
    disabled = false,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-${variant}`}
        >
            {label}
        </button>
    );
}
```

### `React.ReactNode` vs `React.FC` vs `React.PropsWithChildren`

```tsx
// ---- React.ReactNode — what can be rendered ----
// Use this for any prop that accepts JSX children
type ContentProp = {
    header: React.ReactNode; // Can be string, number, JSX, null, array of JSX...
    body: React.ReactNode;
};

// ---- React.FC is DISCOURAGED (legacy) ----
// Avoid React.FC — it implicitly adds children which is confusing
const OldWay: React.FC<{ name: string }> = ({ name }) => <p>{name}</p>;

// Preferred: explicit function declaration with typed props
function NewWay({ name }: { name: string }) {
    return <p>{name}</p>;
}

// ---- React.PropsWithChildren — when you need { children } added ----
// Adds `children?: React.ReactNode` to your props type
type CardProps = React.PropsWithChildren<{
    title: string;
    padding?: number;
}>;

function Card({ title, padding = 16, children }: CardProps) {
    return (
        <div style={{ padding }}>
            <h2>{title}</h2>
            {children}
        </div>
    );
}
```

### Generic Components — The Power Pattern

Generic components work with any data type while remaining fully type-safe. This is essential for reusable components like lists, tables, dropdowns, and autocomplete:

```tsx
// ---- GENERIC LIST COMPONENT ----
interface ListProps<T> {
    items: T[];
    getKey: (item: T) => string | number;
    renderItem: (item: T) => React.ReactNode;
    emptyMessage?: string;
}

function List<T>({ items, getKey, renderItem, emptyMessage = "No items" }: ListProps<T>) {
    if (items.length === 0) return <p>{emptyMessage}</p>;
    return (
        <ul>
            {items.map((item) => (
                <li key={getKey(item)}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}

// Usage — TypeScript infers T from items:
interface User { id: number; name: string; role: string; }
interface Product { sku: string; title: string; price: number; }

// T is inferred as User
<List<User>
    items={users}
    getKey={(u) => u.id}
    renderItem={(u) => <span>{u.name} — {u.role}</span>}
/>

// T is inferred as Product
<List<Product>
    items={products}
    getKey={(p) => p.sku}
    renderItem={(p) => <span>{p.title}: ${p.price}</span>}
/>
```

### Typing `useState`, `useRef`, and `useReducer`

```tsx
// ---- useState ----
const [count, setCount] = useState(0); // Inferred: number
const [user, setUser] = useState<User | null>(null); // Explicit generic needed
const [items, setItems] = useState<string[]>([]); // Array of strings

// ---- useRef ----
const inputRef = useRef<HTMLInputElement>(null); // DOM element ref
const counterRef = useRef<number>(0); // Mutable value ref

// Access:
inputRef.current?.focus(); // Optional chaining because it starts null
counterRef.current++; // Direct access, no null check needed after init

// ---- useReducer ----
type CounterState = { count: number; step: number };
type CounterAction =
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "setStep"; payload: number }
    | { type: "reset" };

function counterReducer(
    state: CounterState,
    action: CounterAction,
): CounterState {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + state.step };
        case "decrement":
            return { ...state, count: state.count - state.step };
        case "setStep":
            return { ...state, step: action.payload };
        case "reset":
            return { count: 0, step: 1 };
        default:
            return state; // TypeScript ensures this is exhaustive
    }
}

const [state, dispatch] = useReducer(counterReducer, { count: 0, step: 1 });
dispatch({ type: "increment" }); // ✅ OK
dispatch({ type: "setStep", payload: 5 }); // ✅ OK — payload required
dispatch({ type: "unknown" }); // ❌ TypeScript error!
```

### Typing Event Handlers

```tsx
// ---- React's event types ----
// Pattern: React.{EventType}Event<{HTMLElement}>

function FormExample() {
    // Input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, e.target.checked);
    };

    // Form submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
    };

    // Button click
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.clientX, e.clientY);
    };

    // Keyboard
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") submitForm();
    };

    // Select change
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
    };

    // Textarea change
    const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value);
    };

    // Drag
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const files = e.dataTransfer.files;
    };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleInputChange} onKeyDown={handleKeyDown} />
            <button onClick={handleClick}>Submit</button>
        </form>
    );
}
```

### `React.ComponentProps` — Extending HTML Elements

```tsx
// ---- Extend built-in HTML props ----
// Inherit all <input> props and add your own
interface InputProps extends React.ComponentProps<"input"> {
    label: string;
    error?: string;
}

function Input({ label, error, ...rest }: InputProps) {
    // ...rest contains all standard HTML input attributes (type, value, onChange, etc.)
    return (
        <div>
            <label>{label}</label>
            <input {...rest} className={error ? "border-red-500" : ""} />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}

// Usage: automatically gets all input props
<Input
    label="Email"
    type="email"
    value={email}
    onChange={setEmail}
    error="Invalid"
/>;

// ---- Extend a React component's props ----
import { Button } from "@/components/ui/button";

interface LoadingButtonProps extends React.ComponentProps<typeof Button> {
    isLoading: boolean;
}

function LoadingButton({
    isLoading,
    children,
    disabled,
    ...rest
}: LoadingButtonProps) {
    return (
        <Button disabled={isLoading || disabled} {...rest}>
            {isLoading ? <Spinner /> : children}
        </Button>
    );
}
```

### Typing Context

```tsx
// ---- Type-safe Context ----
interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
}

// Create context with a typed default value
// Using null assertion (!) says "I guarantee this will be provided"
const AuthContext = createContext<AuthContextType | null>(null);

// Custom hook that ensures context exists
function useAuth(): AuthContextType {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
    return ctx;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        const user = await api.post<User>("/auth/login", { email, password });
        setUser(user.data);
        setIsLoading(false);
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}
```

## 18.5 — `flushSync`: Force Synchronous Rendering

By default, React batches all state updates and applies them together at the end. Sometimes you need React to synchronously apply a state update and repaint the DOM **right now** — before the next line of code runs.

```jsx
import { flushSync } from "react-dom";

// ============================================================
// USE CASE: Scroll to a newly added item immediately after rendering
// ============================================================
function MessageThread({ messages }) {
    const bottomRef = useRef(null);
    const [items, setItems] = useState(messages);

    function addMessage(newMessage) {
        // If we just called setItems(...) + scrollIntoView(), the scroll
        // would happen BEFORE React re-renders — the new item isn't in the DOM yet!

        // flushSync forces React to: update state → re-render → update DOM
        // ALL synchronously, before continuing to the next line.
        flushSync(() => {
            setItems((prev) => [...prev, newMessage]);
        });

        // NOW the new item is in the DOM — scroll works correctly
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            {items.map((msg) => (
                <MessageBubble key={msg.id} {...msg} />
            ))}
            <div ref={bottomRef} />
        </div>
    );
}

// ============================================================
// USE CASE: Third-party library integration
// ============================================================
// Some libraries (D3, Canvas, etc.) need the DOM to be updated before they run.
function onDataReceived(data) {
    flushSync(() => setChartData(data)); // DOM updated synchronously
    d3Chart.update(); // Now D3 can measure the new layout
}
```

> **Warning**: `flushSync` opts out of React's batching and concurrency optimizations. Only use it when you specifically need the DOM updated synchronously before the next operation. It's an escape hatch, not a routine tool.

## 18.6 — Lighthouse & Core Web Vitals: Measuring Real Performance

**Lighthouse** is a Google tool (built into Chrome DevTools) that audits your web app for Performance, Accessibility, SEO, and Best Practices. It scores each from 0–100.

The Performance score is based on **Core Web Vitals** — a set of user-centric metrics that measure loading, interactivity, and layout stability:

```mermaid
graph LR
    subgraph Core Web Vitals
        LCP["LCP — Largest Contentful Paint<br/>< 2.5s = Good<br/>2.5–4s = Needs Work<br/>> 4s = Poor<br/>Measures: loading speed (largest image/heading)"]
        CLS["CLS — Cumulative Layout Shift<br/>< 0.1 = Good<br/>> 0.25 = Poor<br/>Measures: layout stability (content jumping around)"]
        INP["INP — Interaction to Next Paint<br/>< 200ms = Good<br/>> 500ms = Poor<br/>Measures: interactivity responsiveness"]
    end
    LCP --> FIX1["Fix: Preload images, lazy load below-fold, fast server"]
    CLS --> FIX2["Fix: Reserve space for images/ads, avoid inserting above content"]
    INP --> FIX3["Fix: Break up long tasks, use useTransition, web workers"]
```

### Common React-Specific Performance Fixes

| Metric   | React Cause                   | Fix                                             |
| -------- | ----------------------------- | ----------------------------------------------- |
| High LCP | Large bundle blocks rendering | `React.lazy` + code splitting, tree shaking     |
| High LCP | SSR missing                   | Use Next.js SSR/SSG for content pages           |
| High CLS | Images without dimensions     | Always set `width` and `height` on `<img>`      |
| High CLS | Skeleton skipping             | Keep skeleton the same height as loaded content |
| High INP | Expensive re-renders          | `React.memo`, `useMemo`, `useTransition`        |
| High INP | Large event handlers          | Debounce, move work off main thread             |

### How to Run a Lighthouse Audit

```
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select: Performance, Accessibility, Best Practices, SEO
4. Set Device: Mobile (stricter, better baseline)
5. Click "Analyze page load"
6. After results: click each metric for specific fix recommendations
```

### Measuring in Code with `web-vitals`

```jsx
// Install: npm install web-vitals
import { onCLS, onINP, onLCP, onFCP, onTTFB } from "web-vitals";

// Measure and log Core Web Vitals
function reportWebVitals(metric) {
    // metric: { name, value, delta, id, entries }
    console.log(metric.name, metric.value); // "LCP", 1450

    // Send to analytics:
    fetch("/api/vitals", {
        method: "POST",
        body: JSON.stringify({
            name: metric.name,
            value: Math.round(metric.value),
            page: window.location.pathname,
        }),
    });
}

onLCP(reportWebVitals); // Largest Contentful Paint
onCLS(reportWebVitals); // Cumulative Layout Shift
onINP(reportWebVitals); // Interaction to Next Paint (replaces FID)
onFCP(reportWebVitals); // First Contentful Paint
onTTFB(reportWebVitals); // Time to First Byte (server response)

// In Next.js: export from pages/_app.js
export function reportWebVitals(metric) {
    console.log(metric);
}
```

---

> Plain-English explanations of every technical term used in this guide.

| Term                             | Plain-English Explanation                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------ |
| **Babel/SWC**                    | Tools that translate modern JavaScript (including JSX) into code browsers can understand   |
| **Batching**                     | React groups multiple state updates together and does one re-render instead of many        |
| **Commit phase**                 | The step where React actually updates the real DOM (after deciding what changed)           |
| **Controlled component**         | A form input whose value is driven by React state                                          |
| **CSR**                          | Client-Side Rendering — JavaScript runs in the browser and builds the UI there             |
| **CSS-in-JS**                    | Writing CSS styles inside JavaScript files (e.g., styled-components)                       |
| **Debounce**                     | Wait until something stops happening for N milliseconds before reacting                    |
| **Declarative**                  | Describe _what_ you want, not _how_ to get it. React is declarative; jQuery was imperative |
| **Derived state**                | A value computed from existing state/props — not stored separately                         |
| **Dispatch**                     | Sending an action to the Redux store (or `useReducer`)                                     |
| **Event delegation**             | One listener at the top of the DOM tree handles events for all children                    |
| **Fiber**                        | React's internal unit of work — a JavaScript object representing one component             |
| **Functional updater**           | `setState(prev => ...)` — uses the latest state, not a stale closure                       |
| **HOC (Higher-Order Component)** | A function that takes and returns an enhanced component                                    |
| **Hydration**                    | React attaches interactivity to HTML that was rendered on the server                       |
| **Idempotent**                   | Doing something multiple times has the same result as doing it once                        |
| **Immutable**                    | Cannot be changed — React requires you to replace objects, not mutate them                 |
| **Imperative**                   | Describing _how_ to do something step by step (opposite of declarative)                    |
| **Intersection Observer**        | Browser API that fires when an element scrolls into/out of view                            |
| **JWT (JSON Web Token)**         | A signed, self-contained token proving a user's identity                                   |
| **Lazy loading**                 | Only downloading code or data when it's actually needed                                    |
| **Linked list**                  | A chain of objects where each points to the next — React uses this for hooks               |
| **Memoization**                  | Caching the result of an expensive calculation to reuse it if inputs didn't change         |
| **Mutation**                     | Directly modifying an existing object or array (React asks you not to do this)             |
| **Optimistic UI**                | Updating the UI immediately assuming success, rolling back if the server fails             |
| **Portal**                       | Rendering a React component into a different DOM element than its parent                   |
| **Pure function**                | A function that always returns the same output for the same input, with no side effects    |
| **Race condition**               | Two async operations compete — whichever finishes last "wins", producing wrong results     |
| **Reconciliation**               | React's process of comparing the old and new Virtual DOM to find what changed              |
| **Reducer**                      | A function `(state, action) => newState` — pure, predictable state transitions             |
| **Render phase**                 | When React calls your component functions and builds the new Virtual DOM                   |
| **Selector**                     | A function that reads a specific piece of state from the Redux store                       |
| **Side effect**                  | Anything that reaches outside of React's pure rendering — API calls, DOM access, timers    |
| **Slice (RTK)**                  | A piece of Redux state + its actions + its reducer, all in one place                       |
| **SPA**                          | Single Page Application — one HTML page; JavaScript swaps views without full reloads       |
| **SSG**                          | Static Site Generation — pages are built at deploy time, not on each request               |
| **SSR**                          | Server-Side Rendering — the server builds the HTML for every request                       |
| **Stale closure**                | A function that "remembers" an old value of a variable from a previous render              |
| **Synthetic Event**              | React's cross-browser wrapper around native browser events                                 |
| **Throttle**                     | Limit how often a function fires — at most once per N milliseconds                         |
| **Tree shaking**                 | Build tools remove unused code from the final bundle automatically                         |
| **Uncontrolled component**       | A form input whose value is managed by the DOM, not React state                            |
| **Virtual DOM**                  | A tree of plain JavaScript objects that describes what the UI should look like             |
| **XSS (Cross-Site Scripting)**   | An attack where malicious JavaScript is injected into and executed on a page               |

---

## Module 18 — Interview Q&A

**Q: How do you handle errors in production React apps?**
> Three layers: (1) **Error Boundaries** — catch synchronous render errors, show fallback UI. (2) **`try/catch` in `useEffect` and event handlers** — catch async errors. (3) **Error monitoring service** (Sentry, Datadog) — report errors with stack traces and user context. Log to the service in `componentDidCatch`. Also set up a global `window.onerror` / `unhandledrejection` handler for anything that slips through.

**Q: What is `React.StrictMode` and why does it double-invoke effects in development?**
> `StrictMode` intentionally mounts → unmounts → remounts every component in development to verify that: (1) effects are properly cleaned up (if your component breaks after a remount, your cleanup is wrong), (2) renders are pure (if side effects appear during the double-render, your render function isn't pure). It does nothing in production.

**Q: What Core Web Vitals metrics matter for React apps?**

| Metric | Stands for | Target | React impact |
|---|---|---|---|
| LCP | Largest Contentful Paint | < 2.5s | SSR/SSG for above-fold content |
| CLS | Cumulative Layout Shift | < 0.1 | Avoid dynamic content insertion that shifts layout |
| INP | Interaction to Next Paint | < 200ms | `useTransition` for expensive state updates |

**Q: What is the difference between `useMemo`, `useCallback`, and `React.memo`? (Comparison question)**
> `React.memo` wraps a **component** — skips re-render if props didn't change. `useCallback` memoizes a **function reference** — stable reference across renders. `useMemo` memoizes a **computed value** — cached result of a calculation. They work together: `React.memo` is only effective if the props it receives are stable references — which requires `useCallback`/`useMemo` in the parent.

---

[↑ Back to TOC](#table-of-contents)

# Module 19: Essential React Ecosystem Libraries

> **Topics**: UI Libraries, HTTP clients, State, Schema validation, Tables, Animation, Charts, Real-time, Drag & Drop, Dates

Every React project uses a set of battle-tested third-party libraries. This module gives you a quick, practical introduction to the most widely used ones — what they do, why you'd pick them, and how they look in real code.

```mermaid
graph TD
    REACT["Your React App"]

    REACT --> UI["UI / Styling<br/>MUI · Chakra · shadcn/ui<br/>Radix UI · Ant Design"]
    REACT --> STATE["State Management<br/>Redux Toolkit · Zustand<br/>Jotai · Recoil"]
    REACT --> DATA["Data Fetching<br/>TanStack Query · SWR · Axios"]
    REACT --> FORM["Forms & Validation<br/>React Hook Form · Formik<br/>Zod · Yup"]
    REACT --> ROUTE["Routing<br/>React Router · TanStack Router"]
    REACT --> ANIM["Animation<br/>Framer Motion · React Spring"]
    REACT --> CHART["Charts & Tables<br/>Recharts · TanStack Table"]
    REACT --> RT["Real-time<br/>Socket.io"]
    REACT --> DND["Drag & Drop<br/>React DnD · dnd-kit"]
    REACT --> UTIL["Utilities<br/>Day.js · Lodash · clsx"]

    style REACT fill:#61dafb,color:#000
    style UI fill:#6f42c1,color:#fff
    style STATE fill:#dc3545,color:#fff
    style DATA fill:#28a745,color:#fff
    style FORM fill:#f0ad4e,color:#000
```

---

## 19.1 — MUI (Material UI): The Most Popular React UI Framework

**What it is**: A complete React component library implementing Google's Material Design. Gives you 50+ pre-built, accessible components — buttons, dialogs, tables, forms, navigation — with consistent theming.

**Why use it**: Fastest way to build a professional-looking UI without designing from scratch. WCAG-compliant out of the box. Strong TypeScript support and theming system.

```mermaid
graph LR
    subgraph MUI Architecture
        THEME["ThemeProvider<br/>(colors, fonts, spacing)"] --> COMP["MUI Components<br/>Button · TextField · Dialog<br/>DataGrid · AppBar · Drawer"]
        COMP --> SX["sx prop or styled()<br/>One-off overrides"]
        COMP --> THEME2["theme.palette.primary.main<br/>Design tokens from ThemeProvider"]
    end
```

```jsx
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Button,
    TextField,
    Card,
    CardContent,
    Stack,
    Typography,
} from "@mui/material";

// 1. Create a custom theme — override any design token
const theme = createTheme({
    palette: {
        primary: { main: "#6366f1" }, // Indigo
        mode: "dark", // Dark mode globally
    },
    typography: {
        fontFamily: "Inter, sans-serif",
    },
});

// 2. Wrap your app in ThemeProvider
function App() {
    return (
        <ThemeProvider theme={theme}>
            <LoginForm />
        </ThemeProvider>
    );
}

// 3. Use components — they auto-consume the theme
function LoginForm() {
    const [email, setEmail] = useState("");

    return (
        <Card sx={{ maxWidth: 400, mx: "auto", mt: 8 }}>
            {/* sx prop = inline styling using theme tokens */}
            <CardContent>
                <Typography variant="h5" mb={2}>
                    Sign In
                </Typography>
                <Stack spacing={2}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                    />
                    <TextField label="Password" type="password" fullWidth />
                    <Button variant="contained" fullWidth size="large">
                        Login
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}
```

### Key MUI Props Reference

Almost every MUI component shares this common set of top-level props. Memorizing these means you rarely need to visit the docs for basic usage.

| Prop        | Used By                                           | Values                                                                           | What it controls                                    |
| ----------- | ------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------- |
| `variant`   | Button, TextField, Badge, Chip, Typography, Alert | `"contained"` `"outlined"` `"text"`                                              | Visual style — filled vs bordered vs ghost          |
| `color`     | Button, TextField, Checkbox, Switch, Chip         | `"primary"` `"secondary"` `"error"` `"warning"` `"info"` `"success"` `"inherit"` | Maps to your theme palette token                    |
| `size`      | Button, TextField, IconButton, Chip, Avatar       | `"small"` `"medium"` `"large"`                                                   | Controls padding and font size                      |
| `fullWidth` | Button, TextField, Select                         | `true` / `false`                                                                 | Stretches to 100% container width                   |
| `disabled`  | All interactive components                        | `true` / `false`                                                                 | Grays out and blocks all interaction                |
| `sx`        | Every MUI component                               | CSS object with theme tokens                                                     | Inline style with theme awareness                   |
| `component` | Box, Typography, Button, Card                     | Any HTML tag or React component                                                  | Changes what HTML element is rendered (polymorphic) |

### The `sx` Prop — Complete Guide

The `sx` prop is MUI's most powerful feature. It accepts regular CSS plus theme shortcuts and responsive breakpoint objects — all in one place.

```jsx
// ---- 1. SPACING SHORTHANDS  (1 unit = theme.spacing(1) = 8px by default) ----
<Box sx={{
    p: 2,       // padding: 16px (all four sides)
    pt: 1,      // padding-top: 8px
    pb: 3,      // padding-bottom: 24px
    px: 2,      // padding-left + padding-right: 16px
    py: 1,      // padding-top + padding-bottom: 8px
    m: "auto",  // margin: auto (center horizontally)
    mb: 4,      // margin-bottom: 32px
    gap: 2,     // gap between flex/grid children: 16px
}} />

// ---- 2. COLOR SHORTHANDS — uses theme palette tokens ----
<Box sx={{
    color: "text.primary",           // theme.palette.text.primary
    color: "text.secondary",         // theme.palette.text.secondary (lighter)
    bgcolor: "background.paper",     // theme.palette.background.paper
    bgcolor: "primary.main",         // theme.palette.primary.main
    borderColor: "divider",          // theme.palette.divider
    // Raw values also work:
    bgcolor: "#f1f5f9",
}} />

// ---- 3. RESPONSIVE VALUES — mobile-first breakpoints ----
// Default breakpoints: xs≥0  sm≥600px  md≥900px  lg≥1200px  xl≥1536px
<Box sx={{
    fontSize:       { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
    flexDirection:  { xs: "column",   md: "row" },
    display:        { xs: "none",     md: "flex" },   // Hidden on mobile
    width:          { xs: "100%",     sm: "50%",  md: "33%" },
    p:              { xs: 2,          md: 4 },
}} />

// ---- 4. PSEUDO-SELECTORS — target states and child elements ----
<Button sx={{
    // State pseudo-classes
    "&:hover":         { bgcolor: "primary.dark", transform: "translateY(-1px)" },
    "&:active":        { transform: "translateY(0)" },
    "&:focus-visible": { outline: "3px solid", outlineColor: "primary.main" },

    // MUI state classes (applied by the library itself)
    "&.Mui-disabled":  { opacity: 0.5 },
    "&.Mui-error":     { color: "error.main" },
    "&.Mui-selected":  { bgcolor: "action.selected" },

    // Target internal MUI sub-components using their classes
    "& .MuiButton-startIcon": { mr: 0.5 },
    "& .MuiInputBase-root":   { borderRadius: 2 },
}} />
```

### TextField Props — Every Attribute Explained

`TextField` is a composite component wrapping Label + Input + HelperText. Each part is independently configurable:

```jsx
<TextField
    label="Email address" // Floating label that shrinks on focus
    placeholder="user@example.com" // Placeholder text when input is empty
    type="email" // HTML input type: "text" | "email" | "password" | "number" | "tel"
    value={email} // Controlled: current value
    onChange={(e) => setEmail(e.target.value)} // Change handler
    defaultValue="test@email.com" // Uncontrolled: initial value
    error={!!errors.email} // true → red border + red label
    helperText={errors.email?.message} // Text shown below the input (use for errors or hints)
    variant="outlined" // "outlined" | "filled" | "standard"
    size="small" // "small" | "medium"
    fullWidth // 100% container width
    required // Adds asterisk (*) to label
    disabled={isSubmitting} // Locks field during form submission
    autoFocus // Auto-focuses this field on mount
    autoComplete="email" // Browser autocomplete hint
    multiline // Renders a <textarea> instead of <input>
    rows={4} // Fixed number of rows (multiline only)
    maxRows={8} // Max rows before scrolling (use with minRows)
    // InputProps: props for the MUI InputBase wrapper
    InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>, // Icon/text before input
        endAdornment: (
            <InputAdornment position="end">
                <IconButton>
                    <Visibility />
                </IconButton>
            </InputAdornment>
        ),
        readOnly: true, // Makes input uneditable but still focusable
    }}
    // inputProps: props for the raw <input> HTML element
    inputProps={{
        maxLength: 255,
        min: 0, // For type="number"
        max: 100,
        step: 1,
        pattern: "[0-9]*",
        "aria-label": "Search",
    }}
    // FormHelperTextProps: style the helper text
    FormHelperTextProps={{ sx: { color: "text.secondary" } }}
/>
```

### Button Props — Every Option Explained

```jsx
<Button
    variant="contained" // "contained" (filled) | "outlined" (border) | "text" (ghost)
    color="primary" // "primary" | "secondary" | "error" | "warning" | "success"
    size="medium" // "small" | "medium" | "large"
    fullWidth // 100% width
    disabled={isLoading} // Disabled state
    startIcon={<CloudUpload />} // Icon displayed BEFORE the button text
    endIcon={<ArrowForward />} // Icon displayed AFTER the button text
    onClick={handleClick}
    type="submit" // "button" | "submit" | "reset"
    href="/dashboard" // Renders as <a href="/dashboard"> when set
    component={RouterLink} // Use React Router's Link for SPA navigation
    disableElevation // Removes box-shadow on contained variant
    disableRipple // Removes the click ripple effect
    sx={{ textTransform: "none" }} // By default MUI uppercases button text — this fixes it
>
    Save Changes
</Button>;

{
    /* LoadingButton from @mui/lab — shows spinner during async ops */
}
import { LoadingButton } from "@mui/lab";
<LoadingButton
    loading={isSubmitting}
    loadingPosition="start" // Spinner position: "start" | "end" | "center"
    startIcon={<SaveIcon />}
    variant="contained"
>
    Save
</LoadingButton>;
```

### Grid System — Every Prop Explained

MUI Grid implements a 12-column responsive layout using flexbox:

```jsx
import Grid from "@mui/material/Grid";

<Grid
    container // Makes this the flex row PARENT — required on the wrapper
    spacing={3} // Gap between items: theme.spacing(3) = 24px
    rowSpacing={2} // Gap between rows only
    columnSpacing={3} // Gap between columns only
    direction="row" // "row" (default) | "column" | "row-reverse" | "column-reverse"
    justifyContent="space-between" // "flex-start" | "center" | "flex-end" | "space-between" | "space-around"
    alignItems="stretch" // "flex-start" | "center" | "flex-end" | "stretch" | "baseline"
    wrap="wrap" // "wrap" | "nowrap" | "wrap-reverse"
>
    {/* Each child is a Grid item */}
    <Grid
        item
        xs={12} // Occupy all 12 columns on extra-small (mobile) → full width
        sm={6} // 6 of 12 columns on small+ → 50% width
        md={4} // 4 of 12 columns on medium+ → 33% width
        lg={3} // 3 of 12 columns on large+ → 25% width
    >
        <Card>Content A</Card>
    </Grid>
    <Grid item xs={12} md={8}>
        <Card>Content B (takes 2/3 on desktop)</Card>
    </Grid>
</Grid>;
```

### Typography Variants

```jsx
// Semantic heading levels (h1–h6) — vary font size automatically
<Typography variant="h1">Largest Heading</Typography>   // renders <h1>
<Typography variant="h2">Large Heading</Typography>
<Typography variant="h3">Medium Heading</Typography>
<Typography variant="h4">Small Heading</Typography>
<Typography variant="h5">Smaller Heading</Typography>
<Typography variant="h6">Smallest Heading</Typography>  // renders <h6>

// Body and UI text
<Typography variant="subtitle1">Subtitle (bold-ish body)</Typography>
<Typography variant="subtitle2">Small subtitle</Typography>
<Typography variant="body1">Regular paragraph text</Typography>   // renders <p>
<Typography variant="body2">Smaller body text</Typography>
<Typography variant="caption">Tiny label text</Typography>
<Typography variant="overline">OVERLINE CATEGORY</Typography>     // uppercase + letter-spacing
<Typography variant="button">BUTTON TEXT STYLE</Typography>       // uppercase + tracking

// Key Typography props
<Typography
    variant="h4"
    component="h1"       // Visual h4 style but semantic h1 — great for SEO
    color="text.secondary"  // Lighter gray
    align="center"       // "left" | "center" | "right" | "justify"
    noWrap               // Single line, overflow hidden with ellipsis
    gutterBottom         // Adds margin-bottom (like a natural paragraph)
    fontWeight={700}     // Override font weight inline
>
    Dashboard
</Typography>
```

### Stack Component — Simplest Layout

```jsx
import { Stack } from "@mui/material";

// Stack = flexbox in one direction with automatic spacing
<Stack
    direction="row" // "row" (horizontal) | "column" (vertical, default)
    spacing={2} // Gap between children: theme.spacing(2) = 16px
    alignItems="center" // Cross-axis: center vertically when direction="row"
    justifyContent="flex-end" // Main-axis: push children to end
    flexWrap="wrap" // Wrap if children overflow
    useFlexGap // Use gap instead of margin (better for wrapping)
    divider={<Divider flexItem orientation="vertical" />} // Auto-dividers between items
>
    <Avatar src={user.avatar} />
    <Typography>{user.name}</Typography>
    <Button>Edit</Button>
</Stack>;
```

### createTheme — Full Configuration Reference

```jsx
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    // ---- PALETTE ----
    palette: {
        mode: "light", // "light" | "dark" — affects all default colors
        primary: {
            main: "#6366f1", // Your brand color — REQUIRED
            light: "#818cf8", // Auto-calculated if omitted
            dark: "#4f46e5",
            contrastText: "#fff", // Text shown ON primary-colored backgrounds
        },
        secondary: { main: "#ec4899" },
        error: { main: "#ef4444" },
        warning: { main: "#f59e0b" },
        info: { main: "#3b82f6" },
        success: { main: "#10b981" },
        background: {
            default: "#f8fafc", // Page body background
            paper: "#ffffff", // Card, dialog, menu backgrounds
        },
        text: {
            primary: "#0f172a",
            secondary: "#64748b",
            disabled: "#94a3b8",
        },
        divider: "#e2e8f0", // Color of <Divider> components
    },

    // ---- TYPOGRAPHY ----
    typography: {
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        fontSize: 14, // Base font size in px
        h1: { fontSize: "3rem", fontWeight: 800 },
        h2: { fontSize: "2.25rem", fontWeight: 700 },
        h4: { fontSize: "1.5rem", fontWeight: 600 },
        body1: { fontSize: "1rem", lineHeight: 1.6 },
        button: { textTransform: "none" }, // Stop MUI from uppercasing all buttons globally
    },

    // ---- SHAPE ----
    shape: { borderRadius: 8 }, // Default border-radius applied to all components

    // ---- SPACING ----
    spacing: 8, // 1 spacing unit = 8px. theme.spacing(2) = 16px

    // ---- GLOBAL COMPONENT OVERRIDES ----
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true, // No shadow on contained buttons
                variant: "contained", // Make "contained" the default variant
            },
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: theme.shape.borderRadius,
                    padding: "8px 20px",
                }),
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: "outlined",
                size: "small",
            },
        },
        MuiCard: {
            defaultProps: { elevation: 0 },
            styleOverrides: {
                root: { border: "1px solid #e2e8f0" },
            },
        },
    },
});
```

> **MUI vs Tailwind**: MUI gives you complete pre-built components with a design system. Tailwind gives you utility classes and you build the components yourself. Many teams use Tailwind + shadcn/ui as a lighter alternative.

---

## 19.2 — shadcn/ui + Radix UI: The Modern Component Approach

**What it is**: shadcn/ui is NOT a library you install as a dependency. It's a **collection of copy-paste components** built on top of **Radix UI** primitives.

**Radix UI** provides fully accessible, unstyled headless components (Dialog, Dropdown, Tooltip, etc.) — the behavior and accessibility logic without any visual styling. **shadcn/ui** adds Tailwind-based styling on top.

**Why use it**: You own the code — components live in your `src/components/ui/` folder and you can modify them freely. No fighting a library's opinionated styles.

```mermaid
graph TD
    RADIX["Radix UI Primitives<br/>(accessible behavior only)<br/>Dialog · DropdownMenu · Tooltip<br/>Select · Popover · Tabs"]
    RADIX -->|"shadcn/ui adds Tailwind styling"| SHADCN["shadcn/ui components<br/>(in YOUR codebase, fully editable)"]
    SHADCN --> USAGE["Your components use them<br/>as a starting point"]
    style RADIX fill:#6f42c1,color:#fff
    style SHADCN fill:#28a745,color:#fff
```

```bash
# Install a component — copies the code into your project
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
```

```jsx
// src/components/ui/button.tsx — generated by shadcn, you own it
// You can read and modify this code directly

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

function DeleteConfirm({ onConfirm }) {
    return (
        <Dialog>
            {/* Radix handles: focus trap, keyboard nav, ARIA, body scroll lock */}
            <DialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                </DialogHeader>
                <p>This action cannot be undone.</p>
                <div className="flex gap-2 justify-end mt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button variant="destructive" onClick={onConfirm}>
                        Delete
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
```

### The `asChild` Prop — Radix's Most Important Pattern

By default, Radix renders its own HTML element (a `<button>`, a `<div>`, etc.). The `asChild` prop tells Radix: **"Don't render your own element — merge all the behavior and accessibility props onto MY child component instead."**

This is what makes Radix truly headless and composable:

```jsx
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";  // Your own styled button

// WITHOUT asChild — two nested elements: Radix's <button> wrapping your <Button>
<DialogTrigger>
    <Button>Open</Button>   // ❌ Results in <button><button>Open</button></button>
</DialogTrigger>

// WITH asChild — Radix merges onto your Button — one clean element
<DialogTrigger asChild>
    <Button>Open</Button>   // ✅ Results in <button aria-haspopup="dialog">Open</button>
</DialogTrigger>

// asChild also works with React Router's <Link>:
<NavigationMenuLink asChild>
    <Link to="/about">About</Link>   // Gets all the nav link ARIA attributes applied
</NavigationMenuLink>
```

### Radix UI Data Attributes — For Styling

Radix automatically adds `data-*` attributes to reflect component state. Instead of managing open/closed CSS classes yourself, you target these data attributes in your CSS. **shadcn/ui uses these extensively for Tailwind animations.**

| Component           | Data Attribute     | Values                                          | Meaning                               |
| ------------------- | ------------------ | ----------------------------------------------- | ------------------------------------- |
| All                 | `data-state`       | `"open"` / `"closed"`                           | Whether the component is open/visible |
| Checkbox            | `data-state`       | `"checked"` / `"unchecked"` / `"indeterminate"` | Checked state                         |
| DropdownMenu > Item | `data-highlighted` | present / absent                                | Focused/hovered item                  |
| DropdownMenu > Item | `data-disabled`    | present / absent                                | Disabled item                         |
| Select              | `data-placeholder` | present / absent                                | No value selected yet                 |
| Tabs > Trigger      | `data-state`       | `"active"` / `"inactive"`                       | Which tab is selected                 |
| RadioGroup > Item   | `data-state`       | `"checked"` / `"unchecked"`                     | Radio selection                       |

```css
/* Animate dialog open/close using data-state — CSS approach */
[data-state="open"] {
    animation: slideIn 150ms ease;
}
[data-state="closed"] {
    animation: slideOut 150ms ease;
}

/* Tailwind approach (what shadcn/ui uses) */
/* data-[state=open]:animate-in  data-[state=closed]:animate-out */
```

```jsx
// Tailwind conditional classes based on Radix data attributes:
<DialogContent className="
    data-[state=open]:animate-in
    data-[state=open]:fade-in-0
    data-[state=open]:zoom-in-95
    data-[state=closed]:animate-out
    data-[state=closed]:fade-out-0
    data-[state=closed]:zoom-out-95
">
```

### Key Radix Primitive Props

Every Radix component has a Root that holds state. Here are the most important props across primitives:

```jsx
// ---- CONTROLLED vs UNCONTROLLED ----
// Uncontrolled (Radix manages state internally):
<Dialog defaultOpen={false}>...</Dialog>

// Controlled (you manage state via React):
<Dialog open={isOpen} onOpenChange={setIsOpen}>...</Dialog>

// ---- DIALOG / SHEET / ALERT DIALOG ----
<Dialog
    open={isOpen}            // boolean — controlled open state
    onOpenChange={setIsOpen} // called with new boolean when state should change
    modal={true}             // true (default) = blocks background, traps focus
>
    <DialogPortal>           // Renders content at document.body level (avoids z-index issues)
        <DialogOverlay />    // The dark backdrop
        <DialogContent>      // The dialog box itself
            <DialogTitle />  // Required for accessibility (can be visually hidden)
            <DialogDescription />  // Describes the dialog for screen readers
            <DialogClose />  // Closes the dialog
        </DialogContent>
    </DialogPortal>
</Dialog>

// ---- DROPDOWN MENU ----
<DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button>Options</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
        align="end"          // Align relative to trigger: "start" | "center" | "end"
        side="bottom"        // Which side to open: "top" | "right" | "bottom" | "left"
        sideOffset={4}       // Gap in px between trigger and menu
        alignOffset={0}      // Shift alignment by px
        avoidCollisions      // Auto-reposition if it would overflow viewport
    >
        <DropdownMenuItem onSelect={() => console.log("clicked")}>  // Called on click
            Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Archived (unavailable)</DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>

// ---- SELECT ----
<Select value={selected} onValueChange={setSelected}>
    <SelectTrigger>
        <SelectValue placeholder="Select a role" />
    </SelectTrigger>
    <SelectContent
        position="popper"  // "popper" (near trigger) | "item-aligned" (like native select)
    >
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="editor">Editor</SelectItem>
        <SelectItem value="viewer">Viewer</SelectItem>
    </SelectContent>
</Select>

// ---- TOOLTIP ----
<TooltipProvider delayDuration={300}>   // ms delay before tooltip appears
    <Tooltip>
        <TooltipTrigger asChild>
            <IconButton aria-label="Settings"><Settings /></IconButton>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={4}>
            Settings
        </TooltipContent>
    </Tooltip>
</TooltipProvider>
```

### How Accessibility Is Built In

Radix handles the following automatically so you don't have to:

- **`role` attributes** — `role="dialog"`, `role="menu"`, `role="menuitem"`, `role="listbox"`
- **`aria-*` attributes** — `aria-expanded`, `aria-haspopup`, `aria-selected`, `aria-disabled`, `aria-labelledby`, `aria-describedby`
- **Focus trap** — keyboard focus stays inside Dialogs (Tab/Shift+Tab cycle through focusable elements)
- **Focus restoration** — focus returns to the trigger element when the dialog closes
- **Keyboard navigation** — Arrow keys navigate menus, Enter/Space activate items, Escape closes everything
- **Body scroll lock** — background page doesn't scroll while a modal is open
- **Portal rendering** — content renders at `document.body` level to avoid z-index and clip issues

> **shadcn/ui Philosophy**: You copy the component source into your project and own it completely. No version conflicts, no style overrides fighting the library. When a component doesn't fit your needs, edit it directly.

---

## 19.3 — Axios: The HTTP Client

**What it is**: A Promise-based HTTP client that wraps the browser's `fetch` API with better defaults: automatic JSON parsing, request/response interceptors, timeout support, and cleaner error handling.

**Why use it over raw `fetch`**: `fetch` doesn't reject on 4xx/5xx errors — you must manually check `res.ok`. Axios throws automatically. Interceptors let you add auth headers and handle 401s in one place.

```mermaid
sequenceDiagram
    participant Component
    participant Axios
    participant Interceptor
    participant API

    Component->>Axios: axios.get('/api/user')
    Axios->>Interceptor: Request interceptor runs
    Interceptor->>Interceptor: Adds Authorization header automatically
    Interceptor->>API: GET /api/user + Bearer token
    API-->>Interceptor: Response interceptor runs
    Interceptor-->>Interceptor: If 401: redirect to /login
    Interceptor-->>Axios: If 200: extract data
    Axios-->>Component: Returns { data, status, headers }
```

```jsx
import axios from "axios";

// ============================================================
// ✅ Create a configured Axios instance — use this everywhere
// ============================================================
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // e.g., https://api.myapp.com
    timeout: 10000, // 10 second timeout
    headers: { "Content-Type": "application/json" },
});

// Request interceptor — add auth token to every request automatically
api.interceptors.request.use((config) => {
    const token = getToken(); // From your auth module
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Response interceptor — handle auth errors globally
api.interceptors.response.use(
    (response) => response, // 2xx: pass through
    (error) => {
        if (error.response?.status === 401) {
            clearToken();
            window.location.href = "/login"; // Session expired
        }
        return Promise.reject(error); // Re-throw for component-level handling
    },
);

// Usage in a component or custom hook
async function fetchUser(userId) {
    const { data } = await api.get(`/users/${userId}`); // data is already parsed JSON
    return data;
}

async function createPost(postData) {
    const { data } = await api.post("/posts", postData);
    return data;
}
```

> **Axios vs fetch**: For simple apps, `fetch` with a custom hook is fine. For large apps with auth, retries, and many API calls, Axios interceptors save significant boilerplate.

### axios.create() Config Object — All Options

When you call `axios.create(config)`, every property of that config becomes the default for ALL requests made through that instance. Individual requests can override these defaults.

```jsx
const api = axios.create({
    // ---- BASE ----
    baseURL: "https://api.myapp.com/v1", // Prepended to every relative URL
    timeout: 10000, // Request timeout in ms. 0 = no timeout.

    // ---- HEADERS ----
    headers: {
        "Content-Type": "application/json", // Default to JSON
        Accept: "application/json",
        "X-App-Version": "2.1.0", // Custom header sent on all requests
    },

    // ---- AUTH ----
    withCredentials: true, // Send cookies and HTTP auth headers cross-origin (needed for sessions)
    auth: { username: "admin", password: "secret" }, // HTTP Basic auth (overrides Authorization header)

    // ---- RESPONSE ----
    responseType: "json", // "arraybuffer" | "blob" | "document" | "json" | "text" | "stream"
    // Use "blob" for file downloads, "arraybuffer" for binary data

    // ---- PARAMS ----
    params: { api_key: "abc123" }, // Query params appended to EVERY request URL
    paramsSerializer: (params) => new URLSearchParams(params).toString(),

    // ---- PROXY ----
    proxy: { host: "127.0.0.1", port: 9000 }, // Route through a proxy server

    // ---- TRANSFORMS ----
    // Mutate request/response data before handlers run
    transformRequest: [
        function (data, headers) {
            return JSON.stringify(data); // Custom serialization
        },
    ],
    transformResponse: [
        function (data) {
            return typeof data === "string" ? JSON.parse(data) : data;
        },
    ],
});
```

### Axios Response Object — What You Get Back

Every successful Axios call resolves with a response object containing these properties:

```jsx
const response = await api.get("/users/1");

// response object structure:
{
    data:       { id: 1, name: "Alice", email: "alice@example.com" },  // Parsed response body (JSON by default)
    status:     200,             // HTTP status code
    statusText: "OK",            // HTTP status message
    headers: {                   // Response headers from the server
        "content-type": "application/json",
        "x-rate-limit-remaining": "99",
    },
    config: { ... },             // The Axios config object used for this request
    request: XMLHttpRequest,     // The underlying XMLHttpRequest object
}

// Common usage — only need data:
const { data: user } = await api.get("/users/1");
console.log(user.name);  // "Alice"
```

### Axios Error Object — Handling Failures

Axios rejects the promise for any non-2xx response. The caught error has this structure:

```jsx
try {
    const { data } = await api.post("/users", newUser);
} catch (error) {
    // ---- SERVER ERRORS (4xx, 5xx) ----
    if (error.response) {
        // The server responded with a non-2xx status
        console.log(error.response.status); // 404, 422, 500, etc.
        console.log(error.response.data); // Server's error body: { message: "Not found" }
        console.log(error.response.headers); // Response headers

        // Granular handling:
        if (error.response.status === 404) toast.error("Not found");
        if (error.response.status === 422)
            setErrors(error.response.data.errors);
        if (error.response.status === 429)
            toast.error("Too many requests — slow down!");
    }
    // ---- NETWORK ERRORS (no response) ----
    else if (error.request) {
        // Request was made but no response received (timeout, network down, CORS)
        console.log("Network error:", error.message);
        toast.error("No internet connection");
    }
    // ---- CONFIG ERRORS ----
    else {
        // Error setting up the request (bad config, malformed URL)
        console.log("Setup error:", error.message);
    }
}
```

### Cancelling Requests with AbortController

When a component unmounts mid-request, you should cancel the pending request to avoid setting state on an unmounted component:

```jsx
function useUserData(userId) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const controller = new AbortController(); // Browser-native API

        api.get(`/users/${userId}`, {
            signal: controller.signal, // Axios watches this signal
        })
            .then(({ data }) => setUser(data))
            .catch((error) => {
                if (axios.isCancel(error)) return; // Ignore cancel errors
                console.error("Fetch failed:", error);
            });

        return () => controller.abort(); // Cancel on component unmount
    }, [userId]);

    return user;
}
```

### Making Multiple Concurrent Requests

```jsx
// axios.all is just Promise.all with nicer syntax
import axios from "axios";

async function fetchDashboardData() {
    const [usersRes, postsRes, statsRes] = await Promise.all([
        api.get("/users"),
        api.get("/posts"),
        api.get("/stats"),
    ]);

    return {
        users: usersRes.data,
        posts: postsRes.data,
        stats: statsRes.data,
    };
}

// With axios.spread (axios helper to destructure parallel results):
const [users, posts] = await axios.all([api.get("/users"), api.get("/posts")]);
```

---

## 19.4 — SWR: Stale-While-Revalidate Data Fetching

**What it is**: A React hooks library for data fetching by Vercel. Simpler than TanStack Query. The name "SWR" comes from the HTTP caching strategy: serve stale data immediately, then revalidate in the background.

**Why use it**: Minimal setup, great for read-heavy apps, built-in cache, deduplication, and focus revalidation.

```jsx
import useSWR from "swr";

// SWR needs a "fetcher" function — you define it once
const fetcher = (url) => fetch(url).then((res) => res.json());

function UserProfile({ userId }) {
    // SWR: key (cache identity) + fetcher
    const {
        data: user,
        error,
        isLoading,
    } = useSWR(`/api/users/${userId}`, fetcher);

    // Features you get for FREE:
    // ✅ Deduplication: two components with same key → one request
    // ✅ Revalidation on window focus
    // ✅ Automatic retry on error
    // ✅ Real-time updates when data changes elsewhere

    if (isLoading) return <Spinner />;
    if (error) return <p>Failed to load</p>;
    return <div>{user.name}</div>;
}
```

**SWR vs TanStack Query**: TanStack Query is more powerful (mutations, pagination, infinite query, devtools). SWR is simpler and lighter. Pick SWR for read-heavy apps; TanStack Query for full CRUD apps.

### useSWR Options — Complete Reference

`useSWR(key, fetcher, options)` — the third argument controls caching and revalidation behavior:

```jsx
const { data, error, isLoading, isValidating, mutate } = useSWR(
    "/api/user", // Key: uniquely identifies this data in the cache
    fetcher, // Function that returns a Promise
    {
        // ---- REVALIDATION ----
        revalidateOnFocus: true, // Re-fetch when browser tab regains focus (default: true)
        revalidateOnReconnect: true, // Re-fetch when network comes back online (default: true)
        revalidateIfStale: true, // Always re-fetch on mount if data is stale (default: true)
        revalidateOnMount: true, // Re-fetch once when component mounts (default: true)
        refreshInterval: 0, // Poll every N milliseconds. 0 = no polling (default: 0)
        refreshWhenHidden: false, // Continue polling when browser tab is hidden (default: false)
        refreshWhenOffline: false, // Continue polling when offline (default: false)

        // ---- ERROR HANDLING ----
        shouldRetryOnError: true, // Retry after error (default: true)
        errorRetryCount: 3, // Max retry attempts (default: unlimited)
        errorRetryInterval: 5000, // Wait ms between retries (default: 5000ms)
        onError: (error) => console.error("SWR error:", error), // Called on every error
        onSuccess: (data) => console.log("Got data:", data), // Called on every success

        // ---- DEDUPLICATION ----
        dedupingInterval: 2000, // During this window, identical keys share one request (default: 2000ms)

        // ---- FALLBACK ----
        fallbackData: [], // Data used while loading (like a default / skeleton)
        keepPreviousData: true, // Show previous data while new key's data loads (great for pagination)

        // ---- TIMING ----
        loadingTimeout: 3000, // ms before firing onLoadingSlow callback
        onLoadingSlow: (key) =>
            toast("Loading is taking longer than expected…"),

        // ---- SSR / NEXT.JS ----
        fallback: {
            // Pre-hydrated data (set via SWRConfig on server)
            "/api/user": { id: 1, name: "Alice" },
        },

        // ---- SUSPENSE MODE ----
        suspense: false, // Integrate with React Suspense (default: false)
    },
);

// Return values:
// data        — the fetched value (undefined while loading for first time)
// error       — error object if fetch failed
// isLoading   — true only on the FIRST load when there is no cached data
// isValidating — true any time a request is in-flight (initial + revalidation)
// mutate      — function to manually update or revalidate this cached data
```

### mutate() — Manual Cache Updates

`mutate` lets you manually update the cached data without a network request, or force a revalidation. This is the SWR pattern for handling mutations (POST/PUT/DELETE):

```jsx
// ---- OPTIMISTIC UPDATE PATTERN ----
async function handleLike(postId) {
    // 1. Optimistically update the cache immediately
    mutate(
        (currentData) => ({
            ...currentData,
            likes: currentData.likes + 1,
            isLiked: true,
        }),
        false, // false = don't revalidate from server yet
    );

    // 2. Send the actual API call
    try {
        await api.post(`/posts/${postId}/like`);
        mutate(); // 3. Revalidate to sync with server truth
    } catch {
        mutate(); // 4. On error, revalidate to rollback the optimistic update
    }
}

// ---- GLOBAL MUTATION (mutate from outside the hook) ----
import { mutate } from "swr";

async function logout() {
    await api.post("/auth/logout");
    // Clear this key from the SWR cache:
    mutate("/api/user", undefined, false); // key, nextData, shouldRevalidate
}
```

### SWRConfig — Global Configuration

Wrap your app with `SWRConfig` to set defaults for all `useSWR` calls, including a shared global fetcher:

```jsx
import { SWRConfig } from "swr";

const globalFetcher = (url) => api.get(url).then((res) => res.data); // Using your axios instance

function App() {
    return (
        <SWRConfig
            value={{
                fetcher: globalFetcher, // Now you can omit the fetcher from every useSWR()
                revalidateOnFocus: false, // Override default: don't re-fetch on tab focus
                errorRetryCount: 2,
                onError: (error) => {
                    if (error.response?.status === 401) {
                        window.location.href = "/login";
                    }
                },
            }}
        >
            <Router />
        </SWRConfig>
    );
}

// Now in any component — no fetcher needed:
function UserProfile() {
    const { data } = useSWR("/api/user"); // Uses globalFetcher automatically
    return <div>{data?.name}</div>;
}
```

### useSWRMutation — For POST/PUT/DELETE

`useSWRMutation` is the SWR hook for write operations (mutations). It doesn't auto-fetch — it waits for you to call `trigger()`:

```jsx
import useSWRMutation from "swr/mutation";

async function createUser(url, { arg }) {
    // arg = whatever you pass to trigger()
    return api.post(url, arg).then((res) => res.data);
}

function CreateUserForm() {
    const {
        trigger, // Call this to run the mutation
        isMutating, // true while the mutation is in progress
        data, // Result of the last successful mutation
        error, // Error from the last failed mutation
        reset, // Reset data/error to initial state
    } = useSWRMutation("/api/users", createUser);

    async function handleSubmit(formData) {
        try {
            const newUser = await trigger(formData); // Pass payload as argument
            toast.success(`Created ${newUser.name}`);
        } catch {
            toast.error("Failed to create user");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            ...
            <Button type="submit" disabled={isMutating}>
                {isMutating ? "Creating..." : "Create User"}
            </Button>
        </form>
    );
}
```

---

## 19.5 — Zod: Runtime Schema Validation

**What it is**: A TypeScript-first schema declaration and validation library. You define the shape of your data with Zod, then validate user input, API responses, or environment variables against it at runtime.

**Why use it**: Catches bad data at the boundary (form submission, API response) before it corrupts your app's state. Pairs perfectly with React Hook Form.

```mermaid
flowchart LR
    INPUT["User input / API response"] --> ZOD["Zod schema<br/>.parse() or .safeParse()"]
    ZOD -->|"Valid data"| APP["TypeScript type<br/>fully inferred"]
    ZOD -->|"Invalid data"| ERR["Detailed error messages<br/>{ field: 'email', message: 'Invalid email' }"]
    style APP fill:#28a745,color:#fff
    style ERR fill:#dc3545,color:#fff
```

```jsx
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// 1. Define your schema — this is your source of truth
const registerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Enter a valid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Must contain an uppercase letter")
        .regex(/[0-9]/, "Must contain a number"),
    age: z.number().min(18, "Must be 18 or older").optional(),
});

// TypeScript type is automatically inferred — no duplicate type definitions!
type RegisterFormData = z.infer<typeof registerSchema>;

// 2. Connect to React Hook Form via zodResolver
function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema), // Validation runs on submit
    });

    const onSubmit = (data: RegisterFormData) => {
        // data is fully typed and validated — safe to send to API
        api.post("/auth/register", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} placeholder="Email" />
            {errors.email && <span>{errors.email.message}</span>}

            <input {...register("password")} type="password" />
            {errors.password && <span>{errors.password.message}</span>}

            <button type="submit">Register</button>
        </form>
    );
}
```

### Zod Type Builders — Complete Reference

Every Zod schema starts with one of these type builders. Chain validation methods after them.

```jsx
import { z } from "zod";

// ---- PRIMITIVE TYPES ----
z.string(); // Validates a string
z.number(); // Validates a number
z.boolean(); // Validates true/false
z.date(); // Validates a Date object
z.bigint(); // Validates BigInt
z.symbol(); // Validates Symbol
z.undefined(); // Must be undefined
z.null(); // Must be null
z.any(); // Accepts anything (disables type checking — use sparingly)
z.unknown(); // Like any but TypeScript treats it as unknown (safer)
z.never(); // Never valid — used in exhaustive checks
z.void(); // For functions returning void

// ---- STRING VALIDATORS ----
z.string()
    .min(2, "Must be at least 2 characters")
    .max(100, "Cannot exceed 100 characters")
    .length(10, "Must be exactly 10 characters")
    .email("Invalid email format")
    .url("Invalid URL format")
    .uuid("Must be a valid UUID")
    .cuid() // CUID format (another unique ID format)
    .startsWith("https://")
    .endsWith(".com")
    .includes("@")
    .regex(/^[a-zA-Z]+$/, "Letters only")
    .trim() // Strips whitespace before validation
    .toLowerCase() // Coerces to lowercase
    .toUpperCase();

// ---- NUMBER VALIDATORS ----
z.number()
    .min(0, "Must be non-negative")
    .max(100, "Cannot exceed 100")
    .int("Must be a whole number") // Rejects decimals
    .positive("Must be positive") // > 0
    .negative("Must be negative") // < 0
    .nonnegative("Must be >= 0") // >= 0
    .nonpositive() // <= 0
    .multipleOf(5) // Must be divisible by 5
    .finite() // Rejects Infinity and -Infinity
    .safe(); // Must be within Number.MIN_SAFE_INTEGER to MAX_SAFE_INTEGER

// ---- OBJECT ----
z.object({
    name: z.string(),
    age: z.number().optional(),
    address: z.object({
        // Nested objects
        street: z.string(),
        city: z.string(),
    }),
})
    .strict() // Reject unknown keys (default: strip them)
    .passthrough() // Allow unknown keys through (default: strip)
    .strip() // Silently remove unknown keys (DEFAULT behavior)
    .pick({ name: true }) // Keep only these fields
    .omit({ age: true }) // Drop these fields
    .extend({ phone: z.string() }) // Add extra fields
    .merge(anotherSchema) // Merge two object schemas
    .partial() // Make all fields optional
    .required(); // Make all fields required (reverse of partial)

// ---- ARRAY ----
z.array(z.string()) // Array of strings
    .min(1, "At least one item required")
    .max(10, "Max 10 items")
    .length(3, "Must have exactly 3")
    .nonempty("Cannot be empty");

z.tuple([z.string(), z.number()]); // Fixed-length tuple: [string, number]

// ---- UNION / DISCRIMINATED UNION ----
z.union([z.string(), z.number()]); // Either a string OR a number
z.string().or(z.number()); // Same thing, chainable
z.discriminatedUnion("type", [
    // Faster union that checks a discriminant field first
    z.object({ type: z.literal("admin"), adminLevel: z.number() }),
    z.object({ type: z.literal("user"), email: z.string().email() }),
]);

// ---- ENUM & LITERALS ----
z.enum(["admin", "editor", "viewer"]); // Must be one of these exact strings
z.literal("active"); // Must be exactly "active"
z.literal(42); // Must be exactly 42

// ---- OPTIONAL, NULLABLE, DEFAULT ----
z.string().optional(); // Value can be string OR undefined
z.string().nullable(); // Value can be string OR null
z.string().nullish(); // string | null | undefined
z.string().default("hello"); // Uses "hello" when value is undefined
```

### .refine() and .superRefine() — Custom Validators

Use `.refine()` when Zod's built-in validators aren't enough:

```jsx
// ---- .refine() — add one custom validation rule ----
const passwordSchema = z
    .string()
    .min(8)
    .refine((val) => /[A-Z]/.test(val), {
        message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /[0-9]/.test(val), {
        message: "Password must contain at least one number",
    });

// ---- Cross-field validation: passwords must match ----
const signupSchema = z
    .object({
        password: z.string().min(8),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"], // Which field gets the error
    });

// ---- .transform() — coerce or reshape valid data ----
const ageSchema = z
    .string()
    .transform((val) => parseInt(val, 10)) // Converts "25" → 25
    .pipe(z.number().min(18)); // Then validates the number

// Input: "25" (string) → Output: 25 (number) — fully type-safe
```

### .parse() vs .safeParse()

```jsx
// .parse() — throws ZodError if invalid (use when you control the input)
try {
    const user = userSchema.parse(rawData); // Returns typed, validated data
} catch (error) {
    console.log(error.errors); // Array of ZodIssue objects
}

// .safeParse() — never throws, returns a result object (use at API boundaries)
const result = userSchema.safeParse(rawData);
if (result.success) {
    const user = result.data; // Typed validated data
} else {
    const issues = result.error.issues;
    // Each issue: { code, message, path: ["field", "nested"] }
    const fieldErrors = Object.fromEntries(
        issues.map((i) => [i.path.join("."), i.message]),
    );
}

// .parseAsync() / .safeParseAsync() — for schemas using async .refine()
const result = await userSchema.safeParseAsync(rawData);
```

> **Zod + TypeScript tip**: `z.infer<typeof mySchema>` gives you a TypeScript type that exactly matches your Zod schema. This means ONE source of truth for both runtime validation and static type checking.

---

## 19.6 — Jotai: Atomic State Management

**What it is**: A minimalist state management library based on the **atom** model (popularized by Recoil). Each piece of state is an "atom" — a small, independent unit. Components subscribe only to the atoms they need.

**Why use it**: Zero boilerplate compared to Redux. More fine-grained than Context (only consumers of a specific atom re-render when it changes). Perfect for medium-complexity global state.

```mermaid
graph TD
    ATOM1["atom: userAtom<br/>{ name, email }"] --> C1["UserHeader<br/>subscribes"]
    ATOM1 --> C2["ProfilePage<br/>subscribes"]
    ATOM2["atom: themeAtom<br/>'dark' or 'light'"] --> C3["NavBar<br/>subscribes"]
    ATOM2 --> C4["Settings<br/>subscribes"]
    C1 -->|"changes userAtom"| ATOM1
    ATOM1 -->|"only C1, C2 re-render"| C2
    ATOM2 -->|"only C3, C4 re-render"| C4
    style ATOM1 fill:#6f42c1,color:#fff
    style ATOM2 fill:#6f42c1,color:#fff
```

```jsx
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";

// 1. Define atoms — outside components, at module level
const userAtom = atom(null); // Initial value: null
const themeAtom = atom("light"); // Initial value: 'light'

// 2. Derived atom — computed from other atoms (like useMemo for atoms)
const isDarkAtom = atom((get) => get(themeAtom) === "dark");

// 3. Use in any component — no Provider needed for simple cases!
function UserHeader() {
    const user = useAtomValue(userAtom); // Read-only (no setter)
    return <h1>Hello, {user?.name}</h1>;
}

function ThemeToggle() {
    const [theme, setTheme] = useAtom(themeAtom); // Read + write
    return (
        <button
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        >
            {theme}
        </button>
    );
}

function LoginButton() {
    const setUser = useSetAtom(userAtom); // Write-only (no re-render on read)
    const login = async () => {
        const user = await api.post("/auth/login", credentials);
        setUser(user);
    };
    return <button onClick={login}>Login</button>;
}
```

### Atom Variants — Advanced Patterns

Jotai provides powerful atom variants for persistence, async data, and computed values:

```jsx
import { atom, useAtom } from "jotai";
import { atomWithStorage, atomWithReset, loadable } from "jotai/utils";

// ---- atomWithStorage — persist to localStorage / sessionStorage ----
// The value automatically reads from and writes to localStorage.
const themeAtom = atomWithStorage("theme", "light");
// key: "theme" — the localStorage key
// "light" — the default value if localStorage has no stored value

function ThemeToggle() {
    const [theme, setTheme] = useAtom(themeAtom);
    // Refreshing the page preserves the user's theme choice!
    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Current theme: {theme}
        </button>
    );
}

// ---- atomWithReset — atom with a reset-to-default capability ----
import { atomWithReset, useResetAtom } from "jotai/utils";

const filtersAtom = atomWithReset({
    search: "",
    category: "all",
    sortBy: "newest",
});

function FilterBar() {
    const [filters, setFilters] = useAtom(filtersAtom);
    const resetFilters = useResetAtom(filtersAtom); // One call resets everything

    return (
        <div>
            <input
                value={filters.search}
                onChange={(e) =>
                    setFilters((f) => ({ ...f, search: e.target.value }))
                }
            />
            <button onClick={resetFilters}>Clear all filters</button>
        </div>
    );
}

// ---- Async atoms — fetching data ----
// An async read atom suspends (shows Suspense fallback) while loading.
const userAtomAsync = atom(async () => {
    const response = await fetch("/api/user");
    return response.json();
});

// ---- loadable() — handle loading/error in component without Suspense ----
const loadableUserAtom = loadable(userAtomAsync);

function UserHeader() {
    const userState = useAtomValue(loadableUserAtom);
    // userState.state: "loading" | "hasData" | "hasError"

    if (userState.state === "loading") return <Skeleton />;
    if (userState.state === "hasError") return <p>Error loading user</p>;
    return <h1>Hello, {userState.data.name}</h1>;
}

// ---- Write-only atoms — atoms with custom action logic ----
const countAtom = atom(0);
const incrementAtom = atom(
    null, // No read value (this is a write-only atom)
    (get, set, amount = 1) => {
        // set function replaces the setter
        set(countAtom, get(countAtom) + amount);
    },
);

function Counter() {
    const count = useAtomValue(countAtom);
    const increment = useSetAtom(incrementAtom);
    return <button onClick={() => increment(5)}>+5 (count: {count})</button>;
}
```

### Provider — Scoping Atoms

By default atoms are global. Use `Provider` to create isolated atom instances — useful for widgets that appear multiple times on the same page:

```jsx
import { Provider } from "jotai";

const cartAtom = atom([]);

// Each Provider creates its own separate universe of atom state
function App() {
    return (
        <div>
            <Provider>
                <ShoppingCart storeId="store-a" /> {/* Has its own cartAtom */}
            </Provider>
            <Provider>
                <ShoppingCart storeId="store-b" />{" "}
                {/* Completely separate cartAtom */}
            </Provider>
        </div>
    );
}
```

> **Jotai vs Zustand**: Both are lightweight. Zustand uses a single store with methods (similar to Redux). Jotai uses atoms — more granular, only components that read a specific atom re-render when it changes. Jotai is better for fine-grained independent state slices. Zustand is better for complex state with many actions acting on related data.

---

## 19.7 — Framer Motion: Production-Grade Animations

**What it is**: The most popular React animation library. Declarative, spring-physics-based animations with minimal code.

**Why use it**: CSS animations can't easily animate elements entering/leaving the DOM, animate between layout positions, or sync multiple elements. Framer Motion handles all of this with a simple API.

```mermaid
graph LR
    subgraph Framer Motion Capabilities
        A1["mount/unmount animations<br/>AnimatePresence"] --> A2["Layout animations<br/>layout prop"]
        A2 --> A3["Gesture animations<br/>whileHover, whileTap, drag"]
        A3 --> A4["Orchestration<br/>stagger, delayChildren"]
        A4 --> A5["Shared element transitions<br/>layoutId"]
    end
```

```jsx
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// 1. Basic animation — fade + slide in on mount
// ============================================================
function Card({ title }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Starting state
            animate={{ opacity: 1, y: 0 }} // End state
            exit={{ opacity: 0, y: -20 }} // When removed
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="card"
        >
            {title}
        </motion.div>
    );
}

// ============================================================
// 2. AnimatePresence — animate elements leaving the DOM
// ============================================================
function NotificationList({ notifications }) {
    return (
        <AnimatePresence>
            {notifications.map((n) => (
                <motion.div
                    key={n.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }} // Only works inside AnimatePresence
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    {n.message}
                </motion.div>
            ))}
        </AnimatePresence>
    );
}

// ============================================================
// 3. Gesture animations
// ============================================================
function LikeButton() {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on click
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            ❤️ Like
        </motion.button>
    );
}

// ============================================================
// 4. Layout animation — smoothly animate when position changes
// ============================================================
function TabBar({ tabs, activeTab, setActiveTab }) {
    return (
        <div className="flex gap-4">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative px-4 py-2"
                >
                    {tab}
                    {activeTab === tab && (
                        // layoutId: Framer smoothly animates the underline between tabs
                        <motion.div
                            layoutId="underline"
                            className="h-0.5 bg-blue-500 absolute bottom-0 left-0 right-0"
                        />
                    )}
                </button>
            ))}
        </div>
    );
}
```

### motion.\* Props — Complete Reference

Every HTML and SVG element has a `motion.*` counterpart (`motion.div`, `motion.button`, `motion.svg`, `motion.path`, etc.). These components accept all normal HTML props PLUS these animation props:

```jsx
<motion.div
    // ---- ANIMATION STATES ----
    initial={{ opacity: 0, scale: 0.8, x: -50 }} // Start state (before animation begins)
    animate={{ opacity: 1, scale: 1, x: 0 }} // Target state (animated FROM initial TO here)
    exit={{ opacity: 0, scale: 0.8, x: 50 }} // State to animate to when removed from DOM
    // exit only works when wrapped in <AnimatePresence>

    // ---- TRANSITION ----
    transition={{
        // Type of animation:
        type: "spring", // "spring" (physics-based) | "tween" (CSS-like) | "inertia"
        stiffness: 300, // [spring] How stiff (higher = snappier). Default: 100
        damping: 20, // [spring] How quickly it stops (higher = less bouncy). Default: 10
        mass: 1, // [spring] Weight of object. Higher = slower
        // For type: "tween":
        duration: 0.3, // Animation duration in seconds
        ease: "easeOut", // "linear" | "easeIn" | "easeOut" | "easeInOut" | [0.25, 0.1, 0.25, 1]
        // Timing:
        delay: 0.1, // Wait N seconds before starting animation
        delayChildren: 0.2, // Delay children animations (use with variants)
        staggerChildren: 0.05, // Stagger each child N seconds apart (use with variants)
        repeat: Infinity, // Repeat N times (-1 = infinite, Infinity = forever)
        repeatType: "reverse", // "loop" | "reverse" | "mirror"
        repeatDelay: 1, // Wait N seconds between repeats
        // Per-property overrides (animate different properties with different transitions):
        opacity: { duration: 0.2 },
        x: { type: "spring", stiffness: 400 },
    }}
    // ---- GESTURES ----
    whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }} // While mouse is over
    whileTap={{ scale: 0.95 }} // While being clicked/pressed
    whileFocus={{ scale: 1.02 }} // While keyboard-focused
    whileDrag={{ opacity: 0.8 }} // While being dragged (requires drag prop)
    // ---- DRAG ----
    drag // Allow free-form dragging (both axes)
    drag="x" // Constrain to horizontal axis only
    drag="y" // Constrain to vertical axis only
    dragConstraints={{ top: 0, right: 300, bottom: 300, left: 0 }} // Pixel boundaries
    dragConstraints={constraintRef} // Pass a ref to a container element
    dragElastic={0.2} // Elasticity when dragging past constraints (0 = rigid)
    dragMomentum={true} // Throw momentum after release
    onDragEnd={(event, info) => {
        console.log(info.point.x, info.point.y); // Final position
        console.log(info.velocity.x, info.velocity.y); // Velocity at release
    }}
    // ---- LAYOUT ----
    layout // Automatically animate any CSS layout changes (flex, grid position)
    layoutId="hero-image" // Matches this element across route changes for shared transitions
    // ---- VARIANTS — coordinate multiple element animations ----
    variants={containerVariants} // Named animation states (defined externally)
    initial="hidden" // Which variant state to start in
    animate="visible" // Which variant state to animate to
    exit="exit" // Which variant state to animate out to
/>
```

### Variants — Coordinating Multiple Elements

Variants let you define all animation states as named objects and coordinate parent + children animations:

```jsx
// Define variants outside the component (plain objects, no re-creation)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Each child animates 100ms after the previous
            delayChildren: 0.3, // Wait 300ms before starting children animations
        },
    },
    exit: {
        opacity: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    exit: { y: -20, opacity: 0 },
};

function AnimatedList({ items }) {
    return (
        // Parent: controls when children start animating via transition.staggerChildren
        <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {items.map((item) => (
                // Children: automatically inherit the parent's initial/animate/exit states
                // No need to specify initial/animate here — they propagate from parent
                <motion.li key={item.id} variants={itemVariants}>
                    {item.name}
                </motion.li>
            ))}
        </motion.ul>
    );
}
```

### AnimatePresence — Animating Unmount

React removes elements from the DOM instantly. `AnimatePresence` intercepts this and lets the `exit` animation play first:

```jsx
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Modal({ isOpen, onClose, children }) {
    return (
        // mode: how multiple children animate
        // "sync" (default) — new content appears and old exits at the same time
        // "wait" — old content exits BEFORE new content appears (prevents overlap)
        // "popLayout" — exiting element is removed from layout flow immediately
        <AnimatePresence mode="wait">
            {isOpen && (
                // key is required when rendering a single conditional child
                <motion.div
                    key="modal"
                    className="fixed inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} // This plays because of AnimatePresence
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white rounded-xl p-8"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                        }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
```

---

## 19.8 — Recharts: Composable Charts

**What it is**: A chart library built entirely with React components and SVG. Every part of a chart (axes, lines, bars, tooltips, legends) is a React component you compose together.

**Why use it**: Fits naturally into React's component model. You can render custom tooltips, click handlers, and conditional styles like any other React component.

```jsx
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", revenue: 4000, users: 240 },
    { month: "Feb", revenue: 3000, users: 139 },
    { month: "Mar", revenue: 6000, users: 380 },
    { month: "Apr", revenue: 8000, users: 430 },
];

// ✅ Composable chart — each visual element is a component
function RevenueChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                    formatter={(value) => [
                        `$${value.toLocaleString()}`,
                        "Revenue",
                    ]}
                />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#6366f1"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
```

### Recharts Component Props — All Chart Elements Explained

```jsx
// ---- ResponsiveContainer ----
// Required wrapper — makes chart fill its parent's width instead of using fixed pixels.
<ResponsiveContainer
    width="100%"        // "100%" (recommended) or a pixel value
    height={300}        // Pixel height (required when using width="100%")
    aspect={16 / 9}     // Aspect ratio — use instead of height to maintain ratio on resize
    minWidth={300}      // Don't get smaller than this
    debounce={50}       // ms to debounce resize events (improves performance)
/>

// ---- XAxis & YAxis ----
<XAxis
    dataKey="month"          // Which property from your data objects to display as labels
    type="category"          // "category" (strings) | "number" (numeric scale)
    domain={["auto", "auto"]} // [min, max] for type="number". "auto" = use data range
    tickCount={5}            // Number of tick marks to show
    tick={{ fill: "#64748b", fontSize: 12 }}  // Style the tick labels
    tickLine={false}         // Hide the small lines at each tick
    axisLine={false}         // Hide the axis line itself
    hide={false}             // Hide the entire axis
    label={{ value: "Month", position: "insideBottom", offset: -5 }}  // Axis label
    tickFormatter={(value) => value.slice(0, 3)}  // Format the displayed labels
    angle={-45}              // Rotate tick labels
    interval={0}             // Show every tick (0) or skip some (1, 2...)
/>

<YAxis
    domain={[0, "auto"]}     // Always start from 0
    tickFormatter={(v) => `$${v.toLocaleString()}`}  // Format as currency
    width={80}               // Width of the axis column (to fit long labels)
    unit=" USD"              // Append a unit to each tick label
    yAxisId="left"           // Multiple Y-axes: give each an ID
    orientation="left"       // "left" (default) | "right"
/>

// ---- Line (for LineChart) ----
<Line
    type="monotone"          // Curve type: "linear" | "monotone" | "step" | "stepBefore" | "stepAfter" | "natural"
    dataKey="revenue"        // Which property from data objects to draw
    stroke="#6366f1"         // Line color
    strokeWidth={2}          // Line thickness in pixels
    strokeDasharray="5 5"    // Dashed line pattern (5px dash, 5px gap)
    dot={{ r: 4, fill: "#fff", stroke: "#6366f1", strokeWidth: 2 }}  // Data point circle
    activeDot={{ r: 6, onClick: (e, p) => console.log(p) }}          // Hover dot
    hide={false}             // Toggle line visibility
    connectNulls={false}     // Skip gaps where data is null vs connect across them
    name="Revenue"           // Display name used in Legend and Tooltip
    yAxisId="left"           // Which Y-axis to plot against (for dual-axis charts)
    animationDuration={1500} // Animation duration in ms
/>

// ---- Bar (for BarChart) ----
<Bar
    dataKey="users"
    fill="#6366f1"           // Bar fill color
    stroke="#4f46e5"         // Bar border color
    strokeWidth={0}          // Bar border width
    radius={[4, 4, 0, 0]}   // Border radius: [top-left, top-right, bottom-right, bottom-left]
    maxBarSize={60}          // Maximum bar width in pixels
    barSize={20}             // Fixed bar width in pixels
    stackId="a"              // Stack multiple Bars with the same stackId
    onClick={(data, index) => console.log("Clicked bar:", data)}
    // Per-bar coloring using Cell component:
    // <Bar ...><Cell key={i} fill={data.isPositive ? "green" : "red"} /></Bar>
/>

// ---- Tooltip ----
<Tooltip
    // Custom tooltip component — receives { active, payload, label } props
    content={({ active, payload, label }) => {
        if (!active || !payload?.length) return null;
        return (
            <div className="bg-white border border-gray-200 rounded p-3 shadow-lg">
                <p className="font-medium">{label}</p>
                {payload.map((entry) => (
                    <p key={entry.name} style={{ color: entry.color }}>
                        {entry.name}: {entry.value.toLocaleString()}
                    </p>
                ))}
            </div>
        );
    }}
    formatter={(value, name) => [`$${value}`, name]}  // Simple value formatter (without custom content)
    labelFormatter={(label) => `Month: ${label}`}      // Format the label (X-axis value)
    cursor={{ stroke: "#e2e8f0", strokeWidth: 1 }}     // Crosshair style
    wrapperStyle={{ zIndex: 50 }}                       // Style the tooltip wrapper div
/>

// ---- CartesianGrid ----
<CartesianGrid
    strokeDasharray="3 3"  // Grid line dash pattern
    stroke="#f0f0f0"       // Grid line color
    vertical={false}       // Only horizontal lines (cleaner look)
    horizontal={true}
/>

// ---- Legend ----
<Legend
    verticalAlign="bottom"   // "top" | "middle" | "bottom"
    align="center"           // "left" | "center" | "right"
    layout="horizontal"      // "horizontal" | "vertical"
    formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)}  // Format legend label
    onClick={(data) => console.log("Legend click:", data)}  // Toggle series on click
/>
```

### All Recharts Chart Types

```jsx
// LineChart — trends over time
import { LineChart } from "recharts";

// AreaChart — like LineChart but with filled area under the line
import { AreaChart, Area } from "recharts";
<Area
    type="monotone"
    dataKey="revenue"
    stroke="#6366f1"
    fill="#6366f1"
    fillOpacity={0.1}
/>;

// BarChart — comparisons between categories
import { BarChart, Bar } from "recharts";

// ComposedChart — mix Lines, Bars, and Areas in one chart
import { ComposedChart } from "recharts";
<ComposedChart data={data}>
    <Bar dataKey="users" fill="#6366f1" />
    <Line dataKey="revenue" stroke="#ec4899" />
</ComposedChart>;

// PieChart — proportions
import { PieChart, Pie, Cell } from "recharts";
<PieChart>
    <Pie
        data={pieData}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
    >
        {pieData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
    </Pie>
    <Tooltip />
</PieChart>;

// RadarChart — multi-dimension comparison (spider chart)
import { RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts";

// ScatterChart — correlation between two variables
import { ScatterChart, Scatter, ZAxis } from "recharts";
```

---

## 19.9 — TanStack Table (React Table): Headless Data Tables

**What it is**: A headless table library — it manages the table logic (sorting, filtering, pagination, row selection) but renders NO HTML. You supply the JSX.

**Why use it**: UI libraries' tables are rigid. TanStack Table gives you full control over every `<tr>`, `<td>`, and class name while handling all the complex state logic.

```jsx
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
} from "@tanstack/react-table";

const columns = [
    { accessorKey: "name", header: "Name", cell: (info) => info.getValue() },
    { accessorKey: "email", header: "Email" },
    {
        accessorKey: "status",
        header: "Status",
        cell: (info) => <Badge status={info.getValue()} />, // Custom cell renderer
    },
];

function UsersTable({ data }) {
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data,
        columns,
        state: { sorting, globalFilter },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div>
            <input
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder="Search all columns..."
            />
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
                                    )}
                                    {{ asc: " ↑", desc: " ↓" }[
                                        header.column.getIsSorted()
                                    ] ?? ""}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination */}
            <div>
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    ←
                </button>
                <span>
                    Page {table.getState().pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()}
                </span>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    →
                </button>
            </div>
        </div>
    );
}
```

### Column Definition — Every Option Explained

The `columns` array is the heart of TanStack Table. Each object defines how one column behaves and renders:

```jsx
const columns = [
    // ---- ACCESSOR COLUMN (most common — maps to a data property) ----
    {
        accessorKey: "name", // Reads data[row].name automatically
        // OR use accessorFn for computed values:
        accessorFn: (row) => `${row.firstName} ${row.lastName}`, // Computed column

        id: "fullName", // REQUIRED when using accessorFn (no accessorKey)
        header: "Full Name", // String header, OR a render function:
        header: (
            { column }, // Function header — for sortable column with indicator
        ) => (
            <button onClick={column.getToggleSortingHandler()}>
                Name{" "}
                {column.getIsSorted() === "asc"
                    ? "↑"
                    : column.getIsSorted() === "desc"
                      ? "↓"
                      : "⇅"}
            </button>
        ),

        cell: (info) => info.getValue(), // Render the cell value (default)
        cell: (
            { row, getValue }, // Custom cell renderer — full power of JSX
        ) => (
            <div className="flex items-center gap-2">
                <Avatar src={row.original.avatar} />
                <span className="font-medium">{getValue()}</span>
            </div>
        ),
        // row.original = the raw data object for this row
        // row.index = 0-based position in the data array
        // getValue() = result of accessorKey or accessorFn

        // ---- SORTING ----
        enableSorting: true, // Allow this column to be sorted (default: true)
        sortingFn: "alphanumeric", // "auto" | "alphanumeric" | "datetime" | "text" | custom function
        invertSorting: false, // Flip asc/desc order
        sortDescFirst: false, // Start descending on first click

        // ---- FILTERING ----
        enableColumnFilter: true, // Allow this column to be filtered
        enableGlobalFilter: true, // Include in global search filter
        filterFn: "includesString", // "includes" | "includesString" | "equalsString" | "between" | "betweenInclusive" | custom

        // ---- SIZING ----
        size: 200, // Default width in pixels
        minSize: 50, // Minimum resizable width
        maxSize: 500, // Maximum resizable width
        enableResizing: true, // Allow user to resize this column

        // ---- VISIBILITY ----
        enableHiding: true, // Allow this column to be hidden via column visibility
    },

    // ---- DISPLAY COLUMN (no data accessor — for actions, checkboxes, etc.) ----
    {
        id: "actions",
        header: () => null, // No header
        cell: (
            { row }, // row.original has the full data item
        ) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => onEdit(row.original)}>
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onDelete(row.original.id)}>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },

    // ---- ROW SELECTION COLUMN ----
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                indeterminate={table.getIsSomePageRowsSelected()}
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                disabled={!row.getCanSelect()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
];
```

### useReactTable API — Key Methods

```jsx
const table = useReactTable({ data, columns, ...models });

// ---- STATE GETTERS ----
table.getState(); // Full table state object { sorting, filtering, pagination, etc. }
table.getState().pagination; // { pageIndex: 0, pageSize: 10 }
table.getState().sorting; // [{ id: "name", desc: false }]
table.getState().rowSelection; // { "0": true, "2": true } — row index → selected

// ---- ROWS ----
table.getRowModel().rows; // All currently visible rows (after filtering + pagination)
table.getCoreRowModel().rows; // All rows (before pagination filtering)
table.getPrePaginationRowModel().rows; // All filtered rows before pagination (for count)
table.getSelectedRowModel().rows; // Only selected rows

// ---- HEADERS ----
table.getHeaderGroups(); // Array of header groups (usually just one)
table.getFlatHeaders(); // All header objects flattened

// ---- PAGINATION ----
table.nextPage(); // Go to next page
table.previousPage(); // Go to previous page
table.setPageIndex(3); // Jump to a specific page
table.setPageSize(25); // Change rows per page
table.getPageCount(); // Total number of pages
table.getCanNextPage(); // boolean — is there a next page?
table.getCanPreviousPage(); // boolean — is there a previous page?

// ---- VISIBILITY ----
table.setColumnVisibility({ email: false }); // Hide the "email" column
table.getVisibleFlatColumns(); // All currently visible columns

// ---- SELECTION ----
table.toggleAllRowsSelected(); // Select/deselect all rows
table.getIsAllRowsSelected(); // boolean
table.getIsSomeRowsSelected(); // boolean
table.resetRowSelection(); // Clear all selection
```

---

## 19.10 — Socket.io: Real-Time Communication

**What it is**: A library for real-time, bidirectional communication between browser and server. Built on WebSockets with fallbacks (polling) for older environments.

**Why use it**: Chat apps, live notifications, collaborative editing, live dashboards — any feature where the server needs to push data to the client without polling.

```mermaid
sequenceDiagram
    participant ClientA as Client A (Browser)
    participant Server as Socket.io Server
    participant ClientB as Client B (Browser)

    ClientA->>Server: connect()
    ClientB->>Server: connect()
    Note over Server: Server tracks connected clients

    ClientA->>Server: emit('send-message', { text: 'Hello!' })
    Server->>ClientB: emit('new-message', { text: 'Hello!', from: 'Alice' })
    Note over ClientB: Receives instantly — no polling!

    Server->>ClientA: emit('new-message', { text: 'Hello!', from: 'Alice' })
    Note over Server: Server can also broadcast to EVERYONE
```

```jsx
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

function ChatRoom({ roomId }) {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const socketRef = useRef(null);

    useEffect(() => {
        // 1. Connect when component mounts
        socketRef.current = io(import.meta.env.VITE_SOCKET_URL, {
            query: { roomId },
        });

        const socket = socketRef.current;

        // 2. Listen for events from the server
        socket.on("new-message", (message) => {
            setMessages((prev) => [...prev, message]);
        });

        socket.on("user-joined", (user) => {
            setMessages((prev) => [
                ...prev,
                { text: `${user.name} joined the room`, type: "system" },
            ]);
        });

        // 3. Cleanup — disconnect when component unmounts
        return () => socket.disconnect();
    }, [roomId]);

    function sendMessage() {
        if (!inputText.trim()) return;
        // 4. Emit events to the server
        socketRef.current.emit("send-message", {
            text: inputText,
            roomId,
        });
        setInputText("");
    }

    return (
        <div>
            <div className="messages">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={msg.type === "system" ? "text-gray-400" : ""}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="flex gap-2">
                <input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}
```

### Socket.io-Client Options — Complete Reference

```jsx
import { io } from "socket.io-client";

const socket = io("https://api.myapp.com", {
    // ---- CONNECTION ----
    path: "/socket.io", // Server endpoint path (must match server config)
    transports: ["websocket", "polling"], // ["websocket"] = WebSocket only (faster, no HTTP upgrade)
    upgrade: true, // Try to upgrade from polling to WebSocket after connecting
    forceNew: false, // Force a new connection even if one is cached

    // ---- AUTH ----
    auth: { token: getToken() }, // Sent to server's io.use() middleware for authentication
    // On server: io.use((socket, next) => { socket.handshake.auth.token })
    query: { roomId: "chat-1" }, // URL query params: ws://server/?roomId=chat-1

    // ---- RECONNECTION ----
    reconnection: true, // Auto-reconnect on disconnect (default: true)
    reconnectionAttempts: 5, // Max reconnection attempts before giving up (default: Infinity)
    reconnectionDelay: 1000, // ms wait before first retry (default: 1000)
    reconnectionDelayMax: 5000, // Max ms between retries, grows exponentially (default: 5000)
    randomizationFactor: 0.5, // Add jitter to delay to prevent thundering herd

    // ---- TIMEOUTS ----
    timeout: 20000, // Connection timeout in ms (default: 20000)

    // ---- NAMESPACE ----
    // To connect to a specific namespace (must match server):
    // const chatSocket = io("https://api.myapp.com/chat");
    // const adminSocket = io("https://api.myapp.com/admin");
});
```

### Socket Events — Built-in & Custom

```jsx
// ---- BUILT-IN LIFECYCLE EVENTS ----
socket.on("connect", () => {
    console.log("Connected! Socket ID:", socket.id);
});

socket.on("disconnect", (reason) => {
    // reason: "io server disconnect" | "io client disconnect" | "transport close" | "transport error" | "ping timeout"
    console.log("Disconnected:", reason);
    if (reason === "io server disconnect") {
        // Server explicitly disconnected this client — reconnect manually
        socket.connect();
    }
    // Other reasons will auto-reconnect if reconnection is enabled
});

socket.on("connect_error", (error) => {
    // Authentication failure, server unreachable, etc.
    console.error("Connection failed:", error.message);
    if (error.message === "Authentication failed") {
        redirectToLogin();
    }
});

socket.on("reconnect", (attemptNumber) => {
    console.log(`Reconnected after ${attemptNumber} attempts`);
});

socket.on("reconnect_attempt", (attemptNumber) => {
    console.log(`Reconnection attempt ${attemptNumber}...`);
});

socket.on("reconnect_failed", () => {
    console.error("All reconnection attempts failed");
    showOfflineBanner();
});

// ---- EMITTING EVENTS WITH ACKNOWLEDGMENTS ----
// Acknowledgment = callback the server calls to confirm it received the message
socket.emit("send-message", { text: "Hello" }, (ack) => {
    // Server sends: callback({ status: "ok", messageId: "abc" })
    if (ack.status === "ok") {
        console.log("Message delivered, ID:", ack.messageId);
    }
});

// ---- VOLATILE EVENTS — Fire and forget (dropped if disconnected) ----
socket.volatile.emit("cursor-position", { x: 150, y: 200 });

// ---- ONCE — Listen to exactly one occurrence ----
socket.once("server-ready", (data) => {
    console.log("Server is ready:", data);
    // Listener removed automatically after first call
});

// ---- REMOVING LISTENERS ----
const handler = (data) => console.log(data);
socket.on("message", handler);
socket.off("message", handler); // Remove specific listener
socket.off("message"); // Remove ALL listeners for "message"
socket.removeAllListeners(); // Remove all listeners for all events
```

### Rooms and Namespaces — Conceptual Overview

```jsx
// ---- NAMESPACES — separate communication channels (/chat, /admin) ----
// Client: connect to a specific namespace with a URL path
const chatSocket = io("https://api.myapp.com/chat"); // Only receives /chat events
const adminSocket = io("https://api.myapp.com/admin"); // Only receives /admin events

// Server (Node.js):
// const chatNs = io.of("/chat");
// chatNs.on("connection", (socket) => { ... });

// ---- ROOMS — server-side grouping within a namespace ----
// Rooms are a SERVER concept — clients join/leave rooms via emit events.
// Example: "join-room" event that your server handles:

socket.emit("join-room", { roomId: "project-123" });
// Server: socket.join("project-123");
// Server: io.to("project-123").emit("user-joined", { userId });
// All members of "project-123" receive this.
```

---

## 19.11 — dnd-kit: Drag and Drop

**What it is**: A modern, lightweight drag-and-drop toolkit for React. Accessible, touch-friendly, and highly customizable. The modern successor to React DnD.

**Why use it**: Sortable lists, kanban boards, file upload zones, reorderable columns. Browser native drag events are notoriously difficult to handle correctly — dnd-kit abstracts all of it.

```jsx
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Individual sortable item
function SortableItem({ id, label }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    return (
        <div
            ref={setNodeRef}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
                opacity: isDragging ? 0.5 : 1,
            }}
            {...attributes}
            {...listeners} // Makes the element draggable
            className="p-3 bg-white border rounded cursor-grab"
        >
            ⠿ {label}
        </div>
    );
}

// Parent container
function SortableList() {
    const [items, setItems] = useState([
        { id: "1", label: "Task 1" },
        { id: "2", label: "Task 2" },
        { id: "3", label: "Task 3" },
    ]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    function handleDragEnd(event) {
        const { active, over } = event;
        if (active.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((i) => i.id === active.id);
                const newIndex = items.findIndex((i) => i.id === over.id);
                return arrayMove(items, oldIndex, newIndex); // Reorder array
            });
        }
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={items.map((i) => i.id)}
                strategy={verticalListSortingStrategy}
            >
                <div className="flex flex-col gap-2">
                    {items.map((item) => (
                        <SortableItem
                            key={item.id}
                            id={item.id}
                            label={item.label}
                        />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}
```

### dnd-kit Core Concepts — Deep Dive

#### DndContext Props

`DndContext` is the root wrapper. It manages drag state and fires lifecycle events:

```jsx
<DndContext
    sensors={sensors}                     // Which input methods trigger drag (pointer, keyboard, touch)
    collisionDetection={closestCenter}    // How to detect when dragged item "overlaps" a droppable

    // ---- LIFECYCLE EVENTS ----
    onDragStart={({ active }) => {
        // active.id = id of the item being dragged
        // Use this to show a drag overlay or change cursor
        setActiveId(active.id);
    }}
    onDragOver={({ active, over }) => {
        // Fires continuously while dragging over other elements
        // over?.id = the droppable/sortable currently under the pointer
        // Use this for multi-container drag (kanban): moving item to another list
    }}
    onDragEnd={({ active, over }) => {
        setActiveId(null);
        if (!over || active.id === over.id) return;
        // Reorder or move item here
    }}
    onDragCancel={() => {
        // User pressed Escape or drag was cancelled (e.g. touched outside)
        setActiveId(null);
    }}
>
```

#### Sensors — What Starts a Drag

Sensors define how users initiate drag. Use multiple sensors to support mouse, touch, and keyboard:

```jsx
import {
    PointerSensor,
    KeyboardSensor,
    TouchSensor,
    MouseSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";

const sensors = useSensors(
    // PointerSensor — handles both mouse and touch via Pointer Events API
    useSensor(PointerSensor, {
        activationConstraint: {
            distance: 8, // Must move 8px before drag starts (prevents accidental drags on click)
            // OR:
            delay: 250, // Must hold for 250ms before drag starts (good for touch)
            tolerance: 5, // Allow 5px of movement during delay window
        },
    }),

    // KeyboardSensor — enable drag via arrow keys (for accessibility)
    useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates, // dnd-kit helper for sortable lists
    }),

    // TouchSensor — touch events with better mobile defaults than PointerSensor
    useSensor(TouchSensor, {
        activationConstraint: { delay: 250, tolerance: 5 },
    }),
);
```

#### Collision Detection Strategies

Collision detection determines when a dragged item "lands" on a droppable target:

```jsx
import {
    closestCenter, // Finds the droppable whose CENTER is closest to dragged item's center
    // Best for: sortable lists (items shift around the dragged item)
    closestCorners, // Finds droppable whose CORNERS are closest
    // Best for: kanban boards with non-overlapping columns
    rectIntersection, // Finds droppable that has the most OVERLAP AREA with dragged item
    // Best for: grid layouts, file browsers
    pointerWithin, // Finds droppable the POINTER is currently inside
    // Most intuitive but can fail for large dragged items
} from "@dnd-kit/core";

// For kanban: combine strategies — use pointerWithin first, fall back to closestCenter
import {
    pointerWithin,
    rectIntersection,
    getFirstCollision,
} from "@dnd-kit/core";

const customCollision = (args) => {
    const pointerCollisions = pointerWithin(args);
    if (pointerCollisions.length > 0) return pointerCollisions;
    return rectIntersection(args);
};
```

#### useSortable Return Values — Explained

```jsx
const {
    attributes,    // Spread onto the element: aria-roledescription, aria-describedby, etc.
    listeners,     // Spread onto drag handle: onPointerDown, onKeyDown, etc.
    setNodeRef,    // Ref callback — attach to the DOM element so dnd-kit can measure it
    transform,     // { x, y, scaleX, scaleY } — the current position offset while dragging
    transition,    // CSS transition string (e.g. "transform 200ms ease") or undefined
    isDragging,    // true while this item is being actively dragged
    isOver,        // true when another item is being dragged OVER this item
    active,        // The currently dragging item (or null)
    over,          // The droppable/sortable currently hovered (or null)
} = useSortable({ id: item.id });

// Common usage pattern:
<div
    ref={setNodeRef}                                  // Required: lets dnd-kit track position/size
    style={{
        transform: CSS.Transform.toString(transform), // Move element while dragging
        transition,                                   // Smooth animation when others shift
        opacity: isDragging ? 0.4 : 1,               // Dim the original while dragging
    }}
    {...attributes}  // Accessibility attributes
    {...listeners}   // Makes the element a drag handle (move to a child for separate handle)
>
```

#### DragOverlay — Showing a Custom Drag Preview

Instead of moving the original element, use `DragOverlay` to render a "ghost" that follows the cursor — prevents layout shifts and allows custom styling:

```jsx
import { DragOverlay } from "@dnd-kit/core";
import { createPortal } from "react-dom";

function SortableList() {
    const [activeId, setActiveId] = useState(null);
    const activeItem = items.find((i) => i.id === activeId);

    return (
        <DndContext
            onDragStart={({ active }) => setActiveId(active.id)}
            onDragEnd={(event) => {
                setActiveId(null);
                handleDragEnd(event);
            }}
        >
            <SortableContext
                items={items.map((i) => i.id)}
                strategy={verticalListSortingStrategy}
            >
                {items.map((item) => (
                    <SortableItem key={item.id} {...item} />
                ))}
            </SortableContext>

            {/* Portal renders outside the list to avoid clipping/z-index issues */}
            {createPortal(
                <DragOverlay>
                    {activeItem ? (
                        <div className="opacity-90 shadow-xl scale-105">
                            {/* Renders the SAME visual as the item but floats above everything */}
                            <SortableItem {...activeItem} isDragOverlay />
                        </div>
                    ) : null}
                </DragOverlay>,
                document.body,
            )}
        </DndContext>
    );
}
```

---

## 19.12 — Day.js: Lightweight Date Handling

**What it is**: A 2KB alternative to Moment.js for parsing, formatting, and manipulating dates. Moment.js is 70KB and was deprecated in 2020. Day.js has the same API, a fraction of the size.

```jsx
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";

dayjs.extend(relativeTime);
dayjs.extend(utc);

// Parsing
const date = dayjs("2024-06-15");
const fromApi = dayjs(post.createdAt); // ISO string from server

// Formatting
dayjs().format("MMMM D, YYYY"); // "March 28, 2026"
dayjs().format("HH:mm"); // "14:30"
dayjs(post.createdAt).format("MMM D"); // "Jan 5"

// Relative time (requires relativeTime plugin)
dayjs("2024-01-01").fromNow(); // "2 years ago"
dayjs().add(2, "day").fromNow(); // "in 2 days"

// Manipulation
dayjs().add(7, "day"); // 7 days from now
dayjs().subtract(1, "month"); // Last month
dayjs().startOf("week"); // Start of this week

// Comparison
dayjs("2026-01-01").isBefore(dayjs()); // true
dayjs().diff(dayjs("2020-01-01"), "year"); // 6 (years difference)

// In a component
function PostCard({ post }) {
    return (
        <div>
            <h2>{post.title}</h2>
            <time
                dateTime={post.createdAt}
                title={dayjs(post.createdAt).format("MMMM D, YYYY")}
            >
                {dayjs(post.createdAt).fromNow()} {/* "3 hours ago" */}
            </time>
        </div>
    );
}
```

### Day.js Format Tokens — Reference Table

The `format()` method uses format strings made up of tokens. Each token is replaced with the corresponding date part:

| Token  | Output example  | Meaning                            |
| ------ | --------------- | ---------------------------------- |
| `YYYY` | `2026`          | 4-digit year                       |
| `YY`   | `26`            | 2-digit year                       |
| `MMMM` | `March`         | Full month name                    |
| `MMM`  | `Mar`           | 3-letter month abbreviation        |
| `MM`   | `03`            | 2-digit month (01–12)              |
| `M`    | `3`             | Month without leading zero (1–12)  |
| `DD`   | `28`            | 2-digit day (01–31)                |
| `D`    | `28`            | Day without leading zero (1–31)    |
| `dddd` | `Saturday`      | Full weekday name                  |
| `ddd`  | `Sat`           | 3-letter weekday abbreviation      |
| `d`    | `6`             | Day of week (0=Sunday, 6=Saturday) |
| `HH`   | `14`            | 24-hour hour (00–23)               |
| `H`    | `14`            | 24-hour without leading zero       |
| `hh`   | `02`            | 12-hour hour (01–12)               |
| `h`    | `2`             | 12-hour without leading zero       |
| `mm`   | `30`            | Minutes (00–59)                    |
| `ss`   | `45`            | Seconds (00–59)                    |
| `A`    | `PM`            | AM or PM (uppercase)               |
| `a`    | `pm`            | am or pm (lowercase)               |
| `x`    | `1711584000000` | Unix timestamp in milliseconds     |
| `X`    | `1711584000`    | Unix timestamp in seconds          |
| `Z`    | `+05:30`        | UTC offset                         |

```jsx
// Common format patterns:
dayjs().format("YYYY-MM-DD"); // "2026-03-28" — ISO date (for inputs)
dayjs().format("MMM D, YYYY"); // "Mar 28, 2026" — short readable date
dayjs().format("MMMM D, YYYY"); // "March 28, 2026" — full readable date
dayjs().format("D MMM YYYY"); // "28 Mar 2026" — European style
dayjs().format("MM/DD/YYYY"); // "03/28/2026" — US style
dayjs().format("HH:mm"); // "14:30" — 24-hour time
dayjs().format("h:mm A"); // "2:30 PM" — 12-hour time
dayjs().format("MMMM D, YYYY h:mm A"); // "March 28, 2026 2:30 PM"
dayjs().format("ddd, MMM D"); // "Sat, Mar 28"
```

### Day.js Methods — Complete Reference

```jsx
import dayjs from "dayjs";

// ---- CREATION ----
dayjs(); // Current date and time
dayjs("2026-03-28"); // From ISO string
dayjs("2026-03-28T14:30:00Z"); // From ISO datetime with timezone
dayjs(1711584000000); // From Unix timestamp (milliseconds)
dayjs(new Date()); // From JavaScript Date object
dayjs.unix(1711584000); // From Unix timestamp (seconds)

// ---- GETTERS — extract specific parts ----
dayjs().year(); // 2026 (full 4-digit year)
dayjs().month(); // 2 (0-indexed! January = 0, March = 2)
dayjs().date(); // 28 (day of month, 1-31)
dayjs().day(); // 6 (day of week: 0=Sunday, 6=Saturday)
dayjs().hour(); // 14 (0-23)
dayjs().minute(); // 30 (0-59)
dayjs().second(); // 45 (0-59)
dayjs().millisecond(); // 500 (0-999)

// ---- MANIPULATION — returns a NEW Day.js object (immutable!) ----
dayjs().add(7, "day"); // 7 days from now
dayjs().add(1, "month"); // Same day next month
dayjs().add(2, "year"); // 2 years from now
dayjs().add(3, "hour"); // 3 hours from now
dayjs().subtract(30, "minute"); // 30 minutes ago
dayjs().subtract(1, "week"); // Last week

// Units: "millisecond" | "second" | "minute" | "hour"
//        "day" | "week" | "month" | "quarter" | "year"

// ---- START / END OF UNIT ----
dayjs().startOf("day"); // Today at 00:00:00.000
dayjs().endOf("day"); // Today at 23:59:59.999
dayjs().startOf("week"); // Sunday (or Monday with locale) of this week
dayjs().startOf("month"); // First day of current month
dayjs().startOf("year"); // January 1 of current year
dayjs().endOf("month"); // Last day of current month

// ---- COMPARISON ----
dayjs("2026-01-01").isBefore(dayjs()); // true (Jan 1 is before now)
dayjs("2026-12-31").isAfter(dayjs()); // true (Dec 31 is after now)
dayjs("2026-03-28").isSame(dayjs(), "day"); // true if today is March 28
dayjs("2026-03-28").isSame(dayjs(), "month"); // true if current month is March
// Units for isSame: "year" | "month" | "week" | "day" | "hour" | "minute" | "second"

// ---- DIFFERENCE ----
dayjs("2020-01-01").diff(dayjs(), "year"); // -6 (2020 is 6 years before 2026)
dayjs().diff("2020-01-01", "month"); // ~75 (months since Jan 2020)
dayjs("2026-12-31").diff(dayjs(), "day"); // ~278 (days until year end)
// Second argument: unit. Third argument: true = include decimals
dayjs("2026-03-28").diff("2026-03-01", "day", true); // 27 (exact, with decimal)

// ---- DISPLAY ----
dayjs().toISOString(); // "2026-03-28T14:30:00.000Z" — for APIs
dayjs().toJSON(); // Same as toISOString()
dayjs().toString(); // "Sat, 28 Mar 2026 14:30:00 GMT"
dayjs().toDate(); // JavaScript Date object (for third-party libs)
dayjs().valueOf(); // 1711584600000 — Unix timestamp ms (for comparisons)
dayjs().unix(); // 1711584600 — Unix timestamp seconds
dayjs().isValid(); // true — always check this when parsing user/API input!
```

### Day.js Plugins — Extending Functionality

Day.js is minimal by default. Additional features come from official plugins:

```jsx
import dayjs from "dayjs";

// ---- relativeTime — "2 hours ago", "in 3 days" ----
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs("2024-01-01").fromNow(); // "2 years ago"
dayjs("2024-01-01").from("2024-06-01"); // "5 months ago" (from a specific date)
dayjs("2026-12-31").toNow(); // "in 9 months"

// ---- utc — work in UTC time ----
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
dayjs.utc(); // Current time in UTC
dayjs.utc("2026-03-28T14:30Z").local(); // Convert UTC to local time
dayjs("2026-03-28").utc().format(); // Convert local to UTC

// ---- timezone — work with specific timezones ----
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc); // timezone requires utc
dayjs.extend(timezone);
dayjs().tz("America/New_York"); // Current time in NY
dayjs().tz("Asia/Kolkata"); // Current time in India (IST)
dayjs.tz("2026-03-28 14:30", "America/Los_Angeles"); // Parse in specific tz

// ---- duration — fixed time spans (not anchored to a date) ----
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
const dur = dayjs.duration(2, "hours");
dur.asMinutes(); // 120
dur.humanize(); // "2 hours"

// ---- isBetween — check if a date falls between two others ----
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);
dayjs("2026-03-15").isBetween("2026-01-01", "2026-12-31"); // true
dayjs("2026-03-15").isBetween("2026-01-01", "2026-12-31", "month", "[]"); // inclusive

// ---- weekday — locale-aware weekday numbers ----
import weekday from "dayjs/plugin/weekday";
dayjs.extend(weekday);
dayjs().weekday(0); // First day of this week (locale-aware)
dayjs().weekday(6); // Last day of this week

// ---- customParseFormat — parse non-standard date strings ----
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
dayjs("28/03/2026", "DD/MM/YYYY"); // European date format
dayjs("March 28 2026", "MMMM D YYYY"); // Written out format
dayjs("03-28-2026 2:30pm", "MM-DD-YYYY h:mma"); // With time
```

---

## Module 19 — Interview Q&A

**Q: When would you use TanStack Query vs SWR vs raw `useEffect`?**

| Scenario | Use |
|---|---|
| Simple read-only data, minimal config | SWR |
| Full CRUD with mutations, optimistic updates, DevTools | TanStack Query |
| One-off fetch, no caching needed | `useEffect` + `useState` |
| Server state with background sync across tabs | TanStack Query |

**Q: When would you use Zustand vs Jotai vs Redux Toolkit?**
> Zustand: module-level store, simple `get`/`set` API, selector subscriptions, best general-purpose choice for global state without Redux ceremony. Jotai: atomic state (like Recoil) — fine-grained atoms that update only consumers of that exact atom, good for large apps with many independent state pieces. Redux Toolkit: when you need DevTools, time-travel debugging, complex middleware (saga/thunk), or team conventions.

**Q: Why use Axios over the native `fetch` API?**
> Axios: automatic JSON serialization/deserialization, request/response interceptors (attach auth token, handle 401 refresh globally), cancellation via `CancelToken`/`AbortController`, automatic error throwing for non-2xx status codes (fetch only throws on network errors), request timeout support. For simple apps, `fetch` is fine. For large apps with auth, Axios interceptors save significant boilerplate.

**Q: What is Zod used for?**
> Zod is a TypeScript-first schema validation library. Use it to: validate API response shapes (catch backend changes at runtime), validate form data (with React Hook Form's `zodResolver`), validate environment variables at startup, and parse config objects. A Zod schema both validates AND infers TypeScript types — one source of truth.

---

## Module 19 Summary

| Library            | Category      | Star Rating | Best For                                      |
| ------------------ | ------------- | ----------- | --------------------------------------------- |
| **MUI**            | UI Components | ⭐⭐⭐⭐⭐  | Enterprise apps, design system out-of-the-box |
| **shadcn/ui**      | UI Components | ⭐⭐⭐⭐⭐  | Full control, Tailwind-first, modern projects |
| **Radix UI**       | Headless UI   | ⭐⭐⭐⭐⭐  | Accessible primitives, bring your own styles  |
| **Axios**          | HTTP Client   | ⭐⭐⭐⭐⭐  | Large apps needing interceptors + auth        |
| **SWR**            | Data Fetching | ⭐⭐⭐⭐    | Simple read-heavy apps                        |
| **TanStack Query** | Data Fetching | ⭐⭐⭐⭐⭐  | Full CRUD, mutations, devtools                |
| **Zod**            | Validation    | ⭐⭐⭐⭐⭐  | TypeScript schema + form + API validation     |
| **Jotai**          | State         | ⭐⭐⭐⭐    | Atomic state, simpler than Redux              |
| **Framer Motion**  | Animation     | ⭐⭐⭐⭐⭐  | Production animations, gestures, layout       |
| **Recharts**       | Charts        | ⭐⭐⭐⭐    | Composable SVG charts in React                |
| **TanStack Table** | Tables        | ⭐⭐⭐⭐⭐  | Headless, sortable, filterable data grids     |
| **Socket.io**      | Real-time     | ⭐⭐⭐⭐⭐  | Chat, live updates, collaborative features    |
| **dnd-kit**        | Drag & Drop   | ⭐⭐⭐⭐⭐  | Sortable lists, kanban boards                 |
| **Day.js**         | Dates         | ⭐⭐⭐⭐⭐  | Lightweight Moment.js replacement             |

---

[↑ Back to TOC](#table-of-contents)

# Module 20: Building From Scratch — Custom Router & UI Patterns

> **Source**: `elements/` project — a real implementation of routing, tables, dropdowns, modals, and custom hooks built **without** any routing or UI library.

---

## 20.1 — Manual Routing (No React Router)

> **The Core Question**: What exactly does React Router do, and how would we replicate it from scratch?

React Router is convenient but it is just a wrapper around three browser primitives:

1. `window.location.pathname` — the current URL path
2. `window.history.pushState()` — change the URL without a page reload
3. The `popstate` event — fires when the user clicks browser Back / Forward

Understanding these primitives lets you build your own router — and deeply understand how React Router itself works.

### The Three-Piece Architecture

```
NavigationContext   →   tracks currentPath, exposes navigate()
     ↓
useNavigation       →   custom hook — consumes context cleanly
     ↓
Route + Link        →   components that use the hook
```

---

### Step 1 — NavigationContext: The Single Source of Truth

```jsx
// context/Navigation.js
import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    // 1. Read the real URL on first render
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // 2. Listen for browser Back / Forward button — these fire "popstate"
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("popstate", handler);
        return () => window.removeEventListener("popstate", handler); // cleanup!
    }, []);

    // 3. Programmatic navigation — used by the <Link> component
    const navigate = (to) => {
        // pushState(state, title, url) — changes URL bar without HTTP request
        window.history.pushState({}, "", to);
        setCurrentPath(to);
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;
```

**Why `pushState` doesn't fire `popstate`**: `pushState` is a programmatic call — the browser only fires `popstate` for user-triggered navigation (Back/Forward buttons). So after calling `pushState` we manually call `setCurrentPath(to)` ourselves.

```mermaid
sequenceDiagram
    participant User
    participant Link
    participant pushState
    participant NavigationContext
    participant Route

    User->>Link: Click /accordion
    Link->>pushState: window.history.pushState({}, "", "/accordion")
    pushState-->>Link: URL bar updated (no reload)
    Link->>NavigationContext: setCurrentPath("/accordion")
    NavigationContext-->>Route: currentPath = "/accordion"
    Route->>Route: path === currentPath → render children
```

---

### Step 2 — `useNavigation` Custom Hook

Instead of calling `useContext(NavigationContext)` everywhere, we wrap it in a custom hook:

```jsx
// hooks/useNavigation.js
import { useContext } from "react";
import NavigationContext from "../context/Navigation.js";

function useNavigation() {
    return useContext(NavigationContext);
}

export default useNavigation;
```

**Why this pattern?**

- Hides the context import detail from consumers
- If the implementation ever changes (e.g., swap context for Zustand), only this file changes
- Makes testing easier — you can mock `useNavigation` in one place

---

### Step 3 — `<Route>` Component

```jsx
// components/Routes.js
import useNavigation from "../hooks/useNavigation";

function Route({ path, children }) {
    const { currentPath } = useNavigation();

    // If URL matches → render children. Otherwise → render nothing.
    if (path === currentPath) {
        return children;
    }
    return null;
}

export default Route;
```

This is the entire routing logic. A `<Route>` is just a conditional render. React Router's `<Route>` does the same thing at its core — with many more features layered on top.

---

### Step 4 — `<Link>` Component

```jsx
// components/Link.jsx
import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    // Merge base classes + active class when path matches
    const classes = classNames(
        "text-blue-500",
        className,
        currentPath === to && activeClassName, // active styling
    );

    const handler = (event) => {
        // Allow Cmd+Click / Ctrl+Click to open in new tab (native browser behavior)
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault(); // prevent full page reload
        navigate(to); // client-side navigation
    };

    return (
        <a onClick={handler} href={to} className={classes}>
            {children}
        </a>
    );
}

export default Link;
```

**Key details:**

- `event.preventDefault()` — stops the browser from sending an HTTP GET request
- `metaKey / ctrlKey` guard — lets Cmd+Click open a new tab (important for UX)
- `href={to}` is still set — so right-click → "Open in new tab" works, and SEO crawlers still find links

---

### Step 5 — Wiring It All Together

```jsx
// index.js — wrap the entire app in NavigationProvider
import { NavigationProvider } from "./context/Navigation";
import App from "./App";

root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>,
);

// App.js — use Route to conditionally render pages
import Route from "./components/Routes";
import SideBar from "./components/SideBar";

export default function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <SideBar />
            <div className="col-span-5">
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/dropdown">
                    <DropdownPage />
                </Route>
                <Route path="/buttonpage">
                    <ButtonPage />
                </Route>
                <Route path="/modal">
                    <ModalPage />
                </Route>
                <Route path="/table">
                    <TablePage />
                </Route>
                <Route path="/counter">
                    <CounterPage initialCount={1} />
                </Route>
            </div>
        </div>
    );
}

// SideBar.jsx — uses <Link> with activeClassName
function SideBar() {
    const links = [
        { label: "Accordion", path: "/accordion" },
        { label: "DropDown", path: "/dropdown" },
        { label: "Buttons", path: "/buttonpage" },
        { label: "Modal", path: "/modal" },
        { label: "Table", path: "/table" },
        { label: "Counter", path: "/counter" },
    ];

    return (
        <div className="sticky top-0 flex flex-col items-start">
            {links.map((link) => (
                <Link
                    to={link.path}
                    key={link.label}
                    className="mb-3"
                    activeClassName="font-bold border-l-4 border-blue-500 pl-2"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
```

---

### Custom Router vs React Router — Comparison

| Feature                | Custom Router (elements/)                | React Router v6                     |
| ---------------------- | ---------------------------------------- | ----------------------------------- |
| URL sync               | `window.location.pathname` + `pushState` | Same internally                     |
| Back/Forward           | `popstate` listener                      | Same internally                     |
| Route matching         | Exact string match only                  | Pattern matching, wildcards, params |
| Active link            | Manual `currentPath === to`              | `NavLink` with `isActive`           |
| Nested routes          | Not supported                            | `<Outlet>` pattern                  |
| Dynamic params (`:id`) | Not supported                            | `useParams()`                       |
| Protected routes       | Not supported                            | Wrapper component pattern           |
| Bundle size            | 0 KB (no dependency)                     | ~50 KB                              |

> **When to build custom**: Single-page apps with simple flat navigation, learning exercises, or environments where you can't add dependencies. For any production app with nested routes or auth, use React Router.

---

## 20.2 — Config-Driven Table + SortableTable Pattern

The `elements/` project implements a reusable, config-driven table with sort support — entirely without an external table library.

### The Column Config Pattern

Instead of hardcoding `<td>` jsx, each column is described as a config object:

```js
// Each column config object has:
const config = [
    {
        label: "Name", // Column header text
        render: (row) => row.name, // How to render a cell
        sortValue: (row) => row.name, // Value used for sorting (optional)
    },
    {
        label: "Score",
        render: (row) => <b>{row.score}</b>, // render() can return JSX
        sortValue: (row) => row.score,
    },
    {
        label: "Actions",
        render: (row) => <button>Edit {row.id}</button>,
        // No sortValue → this column is not sortable
    },
];
```

**Benefits**: Add/remove/reorder columns by editing config. No JSX changes in the Table component itself.

---

### `Table` Component

```jsx
// components/Table.jsx
import { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
    // Render header row — if a column defines header(), call it (used by SortableTable)
    const renderHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        return <th key={column.label}>{column.label}</th>;
    });

    // Render data rows
    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => (
            <td key={column.label} className="p-3">
                {column.render(rowData)}
            </td>
        ));
        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">{renderHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
};

export default Table;
```

**Key design decisions:**

- `keyFn` prop — caller provides the key function (e.g., `(row) => row.id`). Table doesn't assume the shape of data.
- `column.header()` — escape hatch for SortableTable to inject clickable headers with sort icons. Regular Table just renders `column.label`.
- `Fragment` used in header rendering — when `column.header()` returns a `<th>`, wrapping in `<Fragment key>` avoids an extra DOM node.

---

### `useSort` Custom Hook

```jsx
// hooks/useSort.jsx
import { useState } from "react";

const useSort = (config, data) => {
    const [sortOrder, setSortOrder] = useState(null); // "asc" | "desc" | null
    const [sortBy, setSortBy] = useState(null); // column label

    // Toggle cycle: null → asc → desc → null
    const setSortColumn = (label) => {
        if (sortBy && label !== sortBy) {
            // Clicked a different column → reset to asc
            setSortOrder("asc");
            setSortBy(label);
            return;
        }
        if (sortOrder === null) {
            setSortOrder("asc");
            setSortBy(label);
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label);
        } else {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    // Compute sorted data during render (no extra useEffect needed)
    let sortedData = data;
    if (sortBy && sortOrder) {
        const { sortValue } = config.find((col) => col.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valA = sortValue(a);
            const valB = sortValue(b);
            const direction = sortOrder === "asc" ? 1 : -1;

            if (typeof valA === "string") {
                return valA.localeCompare(valB) * direction;
            }
            return (valA - valB) * direction;
        });
    }

    return { sortBy, sortOrder, sortedData, setSortColumn };
};

export default useSort;
```

**Why sort in the hook body (not `useEffect`)?**  
Sorting is a pure derivation of `data + sortBy + sortOrder`. It has no side effects. Computing it during render is correct and efficient — React re-runs the function when state changes, so `sortedData` is always fresh. No need for `useEffect`.

**Why `[...data].sort()` and not `data.sort()`?**  
`Array.prototype.sort()` mutates in place. Mutating state (or props) breaks React's reference equality check. Always spread to a new array first.

---

### `SortableTable` — Composition Pattern

`SortableTable` wraps `Table` and injects sort functionality via the `header()` override in config:

```jsx
// components/SortableTable.jsx
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import useSort from "../hooks/useSort";
import Table from "./Table";

const SortableTable = (props) => {
    const { config, data } = props;
    const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
        config,
        data,
    );

    // Override each sortable column's header with a clickable version
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) return column; // non-sortable columns untouched

        return {
            ...column,
            header: () => (
                <th
                    className="cursor-pointer hover:bg-gray-100 rounded"
                    onClick={() => setSortColumn(column.label)}
                >
                    <div className="flex items-center">
                        {getSortIcon(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        };
    });

    return <Table {...props} config={updatedConfig} data={sortedData} />;
};

// Icon helper — show both arrows when not sorted, single arrow when sorted
function getSortIcon(label, sortBy, sortOrder) {
    if (label !== sortBy || sortOrder === null) {
        return (
            <div>
                <FaCaretUp />
                <FaCaretDown />
            </div>
        );
    }
    if (sortOrder === "asc")
        return (
            <div>
                <FaCaretUp />
            </div>
        );
    if (sortOrder === "desc")
        return (
            <div>
                <FaCaretDown />
            </div>
        );
}

export default SortableTable;
```

**The Composition Insight**: `SortableTable` doesn't rewrite `Table`. It passes through all props unchanged (`{...props}`) and overrides only `config` and `data`. This is the **Wrapper / Decorator** component pattern — extend behavior without modifying the base component.

---

## 20.3 — Button with `classnames` + `tailwind-merge`

The `Button` component in `elements/` shows the production pattern for combining variant props with Tailwind:

```jsx
// components/Button.jsx
import className from "classnames";
import { twMerge } from "tailwind-merge";

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest // ...rest captures onClick, type, disabled, etc.
}) => {
    const classes = twMerge(
        className(rest.className, "flex items-center px-3 py-1.5 border", {
            // Solid variants
            "border-blue-500 bg-blue-500 text-white": primary,
            "border-gray-900 bg-gray-900 text-white": secondary,
            "border-green-500 bg-green-500 text-white": success,
            "border-yellow-400 bg-yellow-400 text-white": warning,
            "border-red-500  bg-red-500  text-white": danger,
            // Modifiers
            "rounded-full": rounded,
            "bg-white": outline,
            "text-blue-500": outline && primary,
            "text-gray-900": outline && secondary,
            "text-green-500": outline && success,
            "text-yellow-400": outline && warning,
            "text-red-500": outline && danger,
        }),
    );

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
};
```

**PropTypes for mutual exclusivity** — validates that only one variant is passed:

```jsx
Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);
        if (count > 1) {
            throw new Error("Only 1 variation is expected!");
        }
    },
};
```

**Usage:**

```jsx
<Button primary>Save</Button>
<Button danger outline rounded onClick={handleDelete}>Delete</Button>
<Button secondary disabled>Loading...</Button>
```

---

## 20.4 — Dropdown with Click-Outside Detection (`useRef`)

The Dropdown component shows the canonical pattern for detecting clicks outside a component:
recon
```jsx
// components/DropDown.jsx
import { useState, useEffect, useRef } from "react";

function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef(); // ref attached to the dropdown's root div

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) return;
            // If the click target is NOT inside our div → close
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        // true = capture phase — fires before any inner onClick handlers
        document.addEventListener("click", handler, true);
        return () => document.removeEventListener("click", handler);
    }, []);

    const handleOptionSelect = (option) => {
        setIsOpen(false);
        onChange(option);
    };

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel onClick={() => setIsOpen((o) => !o)}>
                {value?.label || "Select a color"}
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">
                    {options.map((option) => (
                        <div
                            key={option.id}
                            className="hover:bg-sky-100 rounded cursor-pointer p-3"
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </Panel>
            )}
        </div>
    );
}
```

**Why `capture: true` on the event listener?**  
The event propagation order is: capture phase (window → target) → bubble phase (target → window). By listening in the capture phase, the document handler fires _before_ the dropdown's own click handlers. This ensures the outside-click detection works even if an inner element calls `event.stopPropagation()`.

**Why `useRef` instead of `useState` for the DOM node?**  
`useRef` does not cause re-renders when `.current` changes. We only need the DOM node for the `contains()` check — we never want to trigger a render from it.

---

## 20.5 — Modal with `ReactDOM.createPortal`

```jsx
// components/Modal.jsx
import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, actionBar }) => {
    useEffect(() => {
        // Prevent background scroll while modal is open
        document.body.classList.add("overflow-hidden");
        return () => document.body.classList.remove("overflow-hidden");
    }, []);

    return ReactDOM.createPortal(
        <div>
            {/* Semi-transparent overlay — clicking it closes the modal */}
            <div
                className="fixed inset-0 bg-gray-100 opacity-80"
                onClick={onClose}
            />
            {/* Modal panel — centered via inset-60 */}
            <div className="fixed inset-60 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">{actionBar}</div>
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container"), // render OUTSIDE the React tree
    );
};
```

**Why `createPortal`?**  
The modal needs `position: fixed` relative to the viewport. If it's deeply nested inside a parent with `transform`, `filter`, or `will-change` CSS, `position: fixed` becomes relative to that parent instead of the viewport. By portaling to `.modal-container` (a `<div>` directly inside `<body>`), the modal always escapes CSS stacking context issues.

**Setup in `index.html`:**

```html
<body>
    <div id="root"></div>
    <div class="modal-container"></div>
    <!-- portal target -->
</body>
```

**The `overflow-hidden` cleanup**: The `useEffect` cleanup removes the class when the modal unmounts. Without cleanup, scrolling would stay locked after the modal closes.

---

## 20.6 — `useCounter` Custom Hook

```jsx
// hooks/useCounter.jsx
import { useState, useEffect } from "react";

const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count); // side effect — log whenever count changes
    }, [count]);

    const handleClick = (incrementBy) => {
        setCount(count + incrementBy);
    };

    return { handleClick, count };
};

export default useCounter;
```

**Usage:**

```jsx
// pages/CounterPage.jsx
const CounterPage = ({ initialCount }) => {
    const { count, handleClick } = useCounter(initialCount);

    return (
        <div>
            <h1>count is {count}</h1>
            <Button onClick={() => handleClick(1)}>Increment</Button>
        </div>
    );
};
```

**Why extract to a hook?**

- The `CounterPage` component becomes purely presentational — no logic
- `useCounter` can be reused by any component that needs a counter with logging
- Logic can be tested independently without rendering any component

---

## 20.7 — Accordion with Functional `setState`

```jsx
// components/Accordion.jsx
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
    const [expandedItem, setExpandedItem] = useState(null); // index or null

    const handleClick = (nextIndex) => {
        setExpandedItem((currentExpandedIndex) => {
            // Toggle: clicking the open item closes it
            if (currentExpandedIndex === nextIndex) return null;
            return nextIndex;
        });
    };

    return (
        <div className="border-x border-t rounded">
            {items.map((item, index) => {
                const isExpanded = index === expandedItem;
                return (
                    <div key={item.id}>
                        <div
                            className="flex justify-between p-3 bg-gray-50 border-b cursor-pointer items-center"
                            onClick={() => handleClick(index)}
                        >
                            {item.label}
                            <span className="text-2xl">
                                {isExpanded ? (
                                    <GoChevronDown />
                                ) : (
                                    <GoChevronLeft />
                                )}
                            </span>
                        </div>
                        {isExpanded && (
                            <div className="border-b p-5">{item.content}</div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
```

**The functional updater in `setExpandedItem`**: Uses `(currentExpandedIndex) => ...` form — not because it needs stale-closure safety here (only one state value), but because it makes the toggle logic self-contained and readable: "given the current value, decide the next value."

---

## Module 20 — Interview Q&A

**Q: How does React Router work under the hood? Can you build a basic router without it?**
> Yes. Three browser primitives: (1) `window.location.pathname` — current URL. (2) `history.pushState(null, '', '/path')` — change URL without page reload. (3) `window.addEventListener('popstate', handler)` — fires when back/forward buttons are pressed. A minimal router: store `currentPath` in state, listen for `popstate` to update it, a `<Route>` component renders children only if `path === currentPath`, a `<Link>` calls `pushState` + updates state.

**Q: What is the config-driven Table pattern? How does it work?**
> Define a `columns` array where each entry has `{ label, render, sortValue }`. A generic `Table` component iterates `columns` to render headers and rows — it doesn't know what data it contains. `render` is a function `(row) => ReactNode` for custom cell formatting. `sortValue` is a function `(row) => string|number` for type-safe sorting. One `Table` component handles any data shape.

**Q: How would you detect a click outside a dropdown/modal and close it?**
```jsx
function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (e) => {
            if (!ref.current || ref.current.contains(e.target)) return;
            handler(e);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}
```
> Attach a `mousedown` listener to `document`. If the click target is NOT inside the ref'd element (`!ref.current.contains(event.target)`), call the handler. Use `mousedown` (not `click`) so the handler fires before the element's own click handler.

**Q: Why use `ReactDOM.createPortal` for modals instead of a regular positioned div?**
> A regular positioned modal inside a component with `overflow: hidden` or a lower `z-index` stacking context will be visually clipped or hidden behind other elements — no matter how high you set `z-index`. Portals render into a separate DOM node (e.g., `<div class="modal-root">` directly under `<body>`) that is outside any stacking context, guaranteeing the modal appears above everything. React event bubbling still works through the component tree.

---

## Module 20 Summary

| Pattern                     | Key Mechanism                                                   | When to Use                                      |
| --------------------------- | --------------------------------------------------------------- | ------------------------------------------------ |
| **Custom Router**           | `pushState` + `popstate` + Context                              | Learning, tiny apps, no-library constraint       |
| **`<Route>`**               | Simple conditional render (`path === currentPath`)              | Always — even React Router does this at its core |
| **`<Link>`**                | `preventDefault` + `navigate()` + `metaKey` guard               | All client-side nav links                        |
| **Config-Driven Table**     | Column config `{ label, render, sortValue }` drives all output  | Reusable data tables across the app              |
| **`useSort` hook**          | Sort state + derived `sortedData` computed in hook body         | Extract sort logic from any component            |
| **SortableTable**           | Wraps Table, overrides `header()` in config — decorator pattern | Add sort to Table without modifying Table        |
| **Click-Outside Detection** | `useRef` + `document.addEventListener` capture phase            | Dropdowns, popovers, context menus               |
| **Modal Portal**            | `ReactDOM.createPortal` to `.modal-container` beside `<body>`   | Modals, toasts — escape CSS stacking context     |
| **Custom Hook**             | Extract `useState` + `useEffect` + handlers into reusable hook  | Any logic shared by 2+ components                |

---

[↑ Back to TOC](#table-of-contents)

# Module 21: MNC React Interview Questions

> **Companies covered**: Google, Meta (Facebook), Amazon, Microsoft, Flipkart, Swiggy, Zomato, Razorpay, Phonepe, Paytm, Uber, LinkedIn, Adobe, Atlassian, Walmart Labs
> **Format**: Each question includes what the interviewer is really testing, followed by a complete answer with code where applicable.

---

## 21.1 — Conceptual / Theory Questions

---

### Q1: What is the difference between `key` and `ref`? (Google, Meta)

**What they're testing**: Understanding of React internals — reconciliation vs imperative DOM access.

|                   | `key`                                                   | `ref`                                                   |
| ----------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| Purpose           | Helps reconciliation identify list items across renders | Gives direct access to a DOM node or component instance |
| Where used        | On elements inside `.map()` lists                       | On any element or component                             |
| Affects render?   | Yes — wrong keys cause unnecessary unmount/remount      | No — changing a ref never triggers a re-render          |
| Accessible in JS? | No — `props.key` is `undefined` in children             | Yes — `ref.current` holds the node                      |
| React sees it?    | Internally only                                         | You access it directly                                  |

```jsx
// key — tell React which item is which across renders
items.map((item) => <Card key={item.id} data={item} />);

// ref — get DOM node for focus, measurements, animations
const inputRef = useRef(null);
<input ref={inputRef} />;
inputRef.current.focus(); // imperative DOM call
```

> **Critical gotcha**: Never use array index as `key` for reorderable/deletable lists. React uses the key to match the previous fiber to the new one — wrong keys force unnecessary unmount/remount, destroying DOM state (scroll position, input value, animations).

---

### Q2: Explain React Fiber. Why was it introduced? (Meta, Microsoft)

**What they're testing**: Deep understanding of React internals beyond the surface API.

**Pre-Fiber (React ≤ 15) — The Stack Reconciler problem**:  
React's old reconciler was synchronous and recursive. Once it started reconciling a tree, it couldn't pause — it had to process the entire tree to completion. This meant a large tree update could block the main thread for 100ms+, causing dropped frames and unresponsive UIs.

**Fiber — Incremental Rendering**:  
Fiber is React's internal reconciliation engine rewritten from scratch (shipped in React 16). Key concepts:

```
A Fiber = a unit of work — a JS object representing one component
          in the component tree, with pointers to:
          - child (first child fiber)
          - sibling (next sibling fiber)
          - return (parent fiber)
          - memoizedState (hooks linked list)
          - pendingProps / memoizedProps
          - flags (what work needs doing: Update, Placement, Deletion)
```

**What Fiber enables**:

1. **Interruptible rendering** — React can pause reconciliation mid-tree and yield to the browser for higher-priority work
2. **Priority lanes** — user interactions (clicks, typing) are high priority; data fetching updates are low priority
3. **Concurrent Mode** — `useTransition`, `useDeferredValue`, `Suspense` all depend on Fiber's ability to work on multiple render trees simultaneously
4. **Error boundaries** — Fiber maintains a `alternate` work-in-progress tree, so errors don't corrupt the committed tree

> **One-line answer**: "Fiber replaced the synchronous recursive stack reconciler with an interruptible, linked-list-based unit of work, enabling React to pause, abort, and prioritize renders — which is the foundation of Concurrent Mode."

---

### Q3: What happens when you call `setState` inside `useEffect`? (Amazon, Flipkart)

**What they're testing**: Understanding of the render cycle and when to avoid re-render loops.

```jsx
useEffect(() => {
    setState(newValue); // ← triggers a re-render AFTER the current render finishes
}, [dependency]);
```

**The sequence**:

1. Component renders
2. React commits to DOM
3. `useEffect` runs (after paint)
4. `setState` inside triggers another render cycle
5. Repeat from step 1 (but only if `dependency` changed)

**The infinite loop trap**:

```jsx
// ❌ INFINITE LOOP — state update triggers re-render → useEffect runs → state update → ...
useEffect(() => {
    setCount(count + 1); // dependency array includes count
}, [count]);

// ✅ SAFE — runs only once (empty dependency array)
useEffect(() => {
    fetchData().then(setData);
}, []);

// ✅ SAFE — functional updater with empty deps
useEffect(() => {
    setCount((prev) => prev + 1); // still only runs once
}, []);
```

**Rule of thumb**: If you find yourself calling `setState` in `useEffect`, ask whether you can derive the value during render instead (no `useEffect` needed), or whether the dependency array is correct.

---

### Q4: What is `useLayoutEffect` and when do you use it over `useEffect`? (Google, Adobe)

**What they're testing**: Knowledge of the render/paint pipeline.

```
Render → Commit to DOM → [useLayoutEffect runs] → Browser paints → [useEffect runs]
```

|               | `useEffect`                           | `useLayoutEffect`                            |
| ------------- | ------------------------------------- | -------------------------------------------- |
| Timing        | After browser paint (async)           | After DOM commit, **before** paint (sync)    |
| Blocks paint? | No                                    | Yes                                          |
| Use for       | Data fetching, subscriptions, logging | Reading DOM measurements, preventing flicker |
| SSR safe?     | Yes                                   | No (`window` not available)                  |

```jsx
// ❌ useEffect causes flicker — component renders at wrong position,
//    then jumps after paint
useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    setPosition(rect.left); // paint happens, THEN position corrects → visible flash
}, []);

// ✅ useLayoutEffect runs before paint — position corrects before user sees anything
useLayoutEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    setPosition(rect.left); // correct before first paint
}, []);
```

> **Rule**: Use `useLayoutEffect` only when you need to read/mutate the DOM to prevent a visual flash. For everything else, `useEffect`.

---

### Q5: What is `React.StrictMode` and what does it do in development? (Microsoft, Atlassian)

**What they're testing**: Understanding of React's development-time safety nets.

`<StrictMode>` does **nothing** in production. In development it:

1. **Double-invokes render functions** — calls your component function twice to catch impure renders (side effects in render body)
2. **Double-invokes `useEffect` setup+cleanup** — mounts → unmounts → mounts again to verify cleanup is correct
3. **Warns about deprecated APIs** — `findDOMNode`, legacy string refs, `componentWillMount`, etc.
4. **Detects unexpected side effects** — if your render function has side effects (mutations, network calls), the double-invoke exposes them

```jsx
function App() {
    return (
        <React.StrictMode>
            <MyComponent /> {/* rendered twice in dev, once in prod */}
        </React.StrictMode>
    );
}
```

> **Gotcha**: If you see `useEffect` cleanup/setup running twice on mount in dev — that's StrictMode intentionally. Ensure your cleanup properly reverses what setup does.

---

### Q6: How does Context avoid prop drilling? What are its performance implications? (Flipkart, Swiggy)

**What they're testing**: Knowing Context vs Redux trade-offs and the re-render pitfall.

```jsx
// Without Context — prop drilling 3 levels deep
<App user={user}>
    <Layout user={user}>
        <Sidebar user={user}>
            <UserAvatar user={user} /> {/* only this needs user */}
        </Sidebar>
    </Layout>
</App>;

// With Context — jump directly to the consumer
const UserContext = createContext(null);

function App() {
    return (
        <UserContext.Provider value={user}>
            <Layout /> {/* doesn't need user prop */}
        </UserContext.Provider>
    );
}

function UserAvatar() {
    const user = useContext(UserContext); // consumes directly
}
```

**The re-render problem**:  
Every component that calls `useContext(MyContext)` re-renders whenever the context **value reference changes** — even if the specific field it uses didn't change.

```jsx
// ❌ BAD — new object on every render → ALL consumers re-render
<UserContext.Provider value={{ user, theme }}>

// ✅ Better — memoize the value
const value = useMemo(() => ({ user, theme }), [user, theme]);
<UserContext.Provider value={value}>

// ✅ Best for large apps — split contexts by update frequency
<UserContext.Provider value={user}>       {/* rarely changes */}
  <ThemeContext.Provider value={theme}>   {/* user-toggle changes */}
    <CartContext.Provider value={cart}>   {/* frequent changes */}
```

---

### Q7: Explain the difference between Controlled and Uncontrolled components. (Amazon, Razorpay)

**Controlled**: React state is the single source of truth. Every keystroke updates state → React re-renders → input shows state value.

```jsx
const [value, setValue] = useState("");
<input value={value} onChange={(e) => setValue(e.target.value)} />;
// React owns the value. DOM always mirrors state.
```

**Uncontrolled**: DOM holds the value. React reads it only when needed (on submit).

```jsx
const inputRef = useRef();
<input ref={inputRef} defaultValue="Alice" />;
// On submit:
const value = inputRef.current.value;
```

|                          | Controlled              | Uncontrolled                       |
| ------------------------ | ----------------------- | ---------------------------------- |
| Source of truth          | React state             | DOM                                |
| Validation timing        | On every change         | On submit only                     |
| Instant feedback         | ✅                      | ❌                                 |
| Re-renders per keystroke | Yes                     | No                                 |
| File inputs              | ❌ (read-only)          | ✅ Always uncontrolled             |
| Library support          | React Hook Form, Formik | React Hook Form (register pattern) |

---

### Q8: What is reconciliation and how does the diffing algorithm work? (Meta, Google)

**What they're testing**: Deep React internals — O(n) vs O(n³) tree diffing.

Naive tree diffing between two arbitrary trees is $O(n^3)$ — too slow for real-time UI. React achieves $O(n)$ with two heuristics:

**Heuristic 1 — Different types → tear down and rebuild**:

```jsx
// Before:
<div><Counter /></div>

// After:
<span><Counter /></span>
// → React sees div→span (different type) → unmounts entire subtree → mounts fresh
```

**Heuristic 2 — `key` prop identifies stable children**:

```jsx
// Before: [<li key="a">, <li key="b">]
// After:  [<li key="b">, <li key="a">]
// → React matches by key → just reorders DOM nodes, no remount
```

**The diffing process**:

1. Compare root element types — if different, rebuild
2. Same type — update only changed props/attributes
3. Recurse into children — use keys to match

```
Virtual DOM (prev)          Virtual DOM (next)
      <ul>                        <ul>
     /    \         diff         /    \
 <li>A</li> <li>B</li>     <li>A</li> <li>C</li>
                                           ↑
                              New node — only this gets inserted to real DOM
```

---

## 21.2 — Coding / Machine Coding Questions

---

### Q9: Build a Search with Debounce (Swiggy, Zomato, Uber)

**Problem**: Build a search input that only fires an API call 500ms after the user stops typing.

```jsx
import { useState, useEffect, useRef } from "react";

function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        // Cleanup: cancel the previous timer if value changes before delay
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}

function SearchBox() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        if (!debouncedQuery.trim()) {
            setResults([]);
            return;
        }

        const controller = new AbortController(); // cancel stale requests
        setLoading(true);

        fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}`, {
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then(setResults)
            .catch((err) => {
                if (err.name !== "AbortError") console.error(err);
            })
            .finally(() => setLoading(false));

        return () => controller.abort(); // cancel if query changes again
    }, [debouncedQuery]);

    return (
        <div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            {loading && <p>Loading...</p>}
            <ul>
                {results.map((r) => (
                    <li key={r.id}>{r.name}</li>
                ))}
            </ul>
        </div>
    );
}
```

**Interviewer focus points**:

- `AbortController` — cancels previous in-flight request when query changes (prevents race conditions / stale results)
- Custom `useDebounce` hook — reusable, testable, single responsibility
- `encodeURIComponent` — guards against XSS/injection in URL params

---

### Q10: Build an Infinite Scroll Feed (Flipkart, LinkedIn)

**Problem**: Load more items as the user scrolls to the bottom.

```jsx
import { useState, useEffect, useRef, useCallback } from "react";

function useFeed() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const res = await fetch(`/api/feed?page=${page}&limit=10`);
            const data = await res.json();
            setItems((prev) => [...prev, ...data.items]);
            setHasMore(data.hasMore);
            setPage((p) => p + 1);
        } finally {
            setLoading(false);
        }
    }, [page, loading, hasMore]);

    return { items, loading, hasMore, loadMore };
}

function Feed() {
    const { items, loading, hasMore, loadMore } = useFeed();
    const sentinelRef = useRef(null); // invisible div at bottom of list

    useEffect(() => {
        // IntersectionObserver fires when sentinel enters the viewport
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) loadMore();
            },
            { threshold: 0.1 },
        );

        if (sentinelRef.current) observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, [loadMore]);

    return (
        <div>
            {items.map((item) => (
                <Card key={item.id} data={item} />
            ))}
            {loading && <Spinner />}
            {/* Sentinel — observed by IntersectionObserver */}
            {hasMore && <div ref={sentinelRef} style={{ height: 1 }} />}
            {!hasMore && <p>No more items</p>}
        </div>
    );
}
```

**Why `IntersectionObserver` over `scroll` listener?**  
`scroll` fires on every pixel movement — very expensive. `IntersectionObserver` fires only when the target enters/leaves the viewport — no throttling needed.

---

### Q11: Build a `useFetch` Custom Hook with Caching (Google, Amazon)

**Problem**: Build a data-fetching hook that caches results and avoids duplicate requests.

```jsx
import { useState, useEffect, useRef } from "react";

// Module-level cache — shared across all hook instances
const cache = new Map();

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const abortRef = useRef(null);

    useEffect(() => {
        if (!url) return;

        // Cache hit — return immediately, no network request
        if (cache.has(url)) {
            setData(cache.get(url));
            setLoading(false);
            return;
        }

        // Cancel any previous in-flight request for this hook instance
        if (abortRef.current) abortRef.current.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        setLoading(true);
        setError(null);

        fetch(url, { signal: controller.signal })
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((json) => {
                cache.set(url, json); // populate cache
                setData(json);
            })
            .catch((err) => {
                if (err.name !== "AbortError") setError(err.message);
            })
            .finally(() => setLoading(false));

        return () => controller.abort(); // cleanup on unmount or url change
    }, [url]);

    return { data, loading, error };
}

// Usage:
function UserProfile({ userId }) {
    const { data, loading, error } = useFetch(`/api/users/${userId}`);
    if (loading) return <Spinner />;
    if (error) return <Error message={error} />;
    return <div>{data?.name}</div>;
}
```

---

### Q12: Build a Star Rating Component (Razorpay, Adobe, Walmart)

**Problem**: Build a reusable 5-star rating component with hover preview state.

```jsx
import { useState } from "react";

function StarRating({ value = 0, onChange, maxStars = 5, readOnly = false }) {
    const [hovered, setHovered] = useState(null);

    // Show hovered value during interaction, committed value otherwise
    const displayValue = hovered ?? value;

    return (
        <div
            className="flex gap-1"
            // Reset hover when mouse leaves the whole component
            onMouseLeave={() => setHovered(null)}
        >
            {Array.from({ length: maxStars }, (_, i) => {
                const starValue = i + 1;
                const filled = starValue <= displayValue;

                return (
                    <span
                        key={starValue}
                        className={`text-2xl cursor-pointer select-none transition-colors ${
                            filled ? "text-yellow-400" : "text-gray-300"
                        } ${readOnly ? "cursor-default" : "cursor-pointer"}`}
                        onMouseEnter={() => !readOnly && setHovered(starValue)}
                        onClick={() => !readOnly && onChange?.(starValue)}
                        // Accessibility
                        role="button"
                        aria-label={`Rate ${starValue} out of ${maxStars}`}
                        tabIndex={readOnly ? -1 : 0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ")
                                onChange?.(starValue);
                        }}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
}

// Usage:
function ReviewForm() {
    const [rating, setRating] = useState(0);
    return (
        <div>
            <StarRating value={rating} onChange={setRating} />
            <p>Your rating: {rating} / 5</p>
        </div>
    );
}
```

**What interviewers check**:

- `hovered ?? value` — shows hover preview without updating committed state
- `onMouseLeave` on the container (not each star) — single handler for the whole widget
- `readOnly` guard — prop-driven behavior, no conditional hooks
- Keyboard + ARIA — `role="button"`, `tabIndex`, `onKeyDown` for accessibility

---

### Q13: Build a `useLocalStorage` Hook (Microsoft, Atlassian)

**Problem**: Persist state to localStorage, sync across tabs.

```jsx
import { useState, useEffect, useCallback } from "react";

function useLocalStorage(key, initialValue) {
    // Initialize from localStorage, fall back to initialValue
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const setValue = useCallback(
        (value) => {
            try {
                // Support functional updater: setValue(prev => prev + 1)
                const valueToStore =
                    value instanceof Function ? value(storedValue) : value;
                setStoredValue(valueToStore);
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (e) {
                console.error("useLocalStorage write failed:", e);
            }
        },
        [key, storedValue],
    );

    // Sync across browser tabs via the "storage" event
    useEffect(() => {
        const handler = (e) => {
            if (e.key === key && e.newValue !== null) {
                try {
                    setStoredValue(JSON.parse(e.newValue));
                } catch {}
            }
        };
        window.addEventListener("storage", handler);
        return () => window.removeEventListener("storage", handler);
    }, [key]);

    return [storedValue, setValue];
}

// Usage — drop-in replacement for useState:
const [theme, setTheme] = useLocalStorage("theme", "light");
```

**Bonus follow-up**: How to handle non-serializable values? — Store a serialization key and use a custom serializer/deserializer pair.

---

### Q14: Implement a `<ErrorBoundary>` Component (Meta, Amazon)

**Problem**: Catch render errors in a subtree and show a fallback UI.

```jsx
import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    // Fired during render when a descendant throws
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    // Fired after commit — good place to log to an error service
    componentDidCatch(error, info) {
        console.error("Error caught by boundary:", error);
        console.error("Component stack:", info.componentStack);
        // logErrorToService(error, info); // e.g., Sentry, Datadog
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback ?? (
                    <div className="p-4 bg-red-50 border border-red-200 rounded">
                        <h2 className="text-red-700 font-bold">
                            Something went wrong
                        </h2>
                        <p className="text-red-500 text-sm">
                            {this.state.error?.message}
                        </p>
                        <button
                            onClick={() =>
                                this.setState({ hasError: false, error: null })
                            }
                        >
                            Try again
                        </button>
                    </div>
                )
            );
        }
        return this.props.children;
    }
}

// Usage:
<ErrorBoundary fallback={<p>This section crashed.</p>}>
    <UserDashboard />
</ErrorBoundary>;
```

**Critical interview point**: Error Boundaries **must** be class components — there is no function component equivalent because `getDerivedStateFromError` and `componentDidCatch` have no hook equivalents. The `react-error-boundary` library gives a hook-friendly wrapper.

**What errors are NOT caught**: Errors in event handlers (use try/catch), async code, SSR rendering, errors inside the boundary itself.

---

### Q15: What is the output? `useState` stale closure trap (Flipkart, Swiggy, Paytm)

**The question** — what does this log?

```jsx
function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setTimeout(() => {
            console.log(count); // ← what does this print?
            setCount(count + 1);
        }, 3000);
    };

    return <button onClick={handleClick}>Click me: {count}</button>;
}

// User clicks 3 times rapidly within 3 seconds. What happens?
```

**Answer**: All three `setTimeout` callbacks have a **stale closure** over `count = 0`. After 3 seconds all three fire — all log `0`, all call `setCount(0 + 1)` — final count is `1`, not `3`.

**Fix — use the functional updater**:

```jsx
setTimeout(() => {
    setCount((prev) => prev + 1); // always uses latest state from React's queue
}, 3000);
// Now: final count = 3 ✅
```

**Fix — use useRef to always access latest value**:

```jsx
const countRef = useRef(count);
useEffect(() => {
    countRef.current = count;
}, [count]);

setTimeout(() => {
    console.log(countRef.current); // always fresh
    setCount(countRef.current + 1);
}, 3000);
```

---

### Q16: Build a Throttled Window Resize Hook (Google, Uber)

**Problem**: Track window size but throttle updates to at most once per 200ms.

```jsx
import { useState, useEffect, useRef } from "react";

function useWindowSize(throttleMs = 200) {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const lastCalledRef = useRef(0);

    useEffect(() => {
        const handler = () => {
            const now = Date.now();
            if (now - lastCalledRef.current >= throttleMs) {
                lastCalledRef.current = now;
                setSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
        };

        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, [throttleMs]);

    return size;
}

// Usage:
const { width, height } = useWindowSize(200);
```

**Debounce vs Throttle** (always asked as follow-up):

|             | Debounce                     | Throttle                           |
| ----------- | ---------------------------- | ---------------------------------- |
| Fires when? | After N ms of **silence**    | At most once per N ms              |
| Use for     | Search input, form autosave  | Scroll handler, resize, mouse move |
| Example     | Wait until user stops typing | Update layout every 200ms max      |

---

### Q17: Build a `<Tabs>` Component with Compound Components Pattern (Adobe, Atlassian)

**Problem**: Build a flexible Tabs API using the Compound Components pattern.

```jsx
import { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

function Tabs({ children, defaultTab }) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="tabs">{children}</div>
        </TabsContext.Provider>
    );
}

function TabList({ children }) {
    return <div className="flex border-b">{children}</div>;
}

function Tab({ id, children }) {
    const { activeTab, setActiveTab } = useContext(TabsContext);
    const isActive = activeTab === id;
    return (
        <button
            className={`px-4 py-2 font-medium ${
                isActive
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
            }`}
            onClick={() => setActiveTab(id)}
            role="tab"
            aria-selected={isActive}
        >
            {children}
        </button>
    );
}

function TabPanel({ id, children }) {
    const { activeTab } = useContext(TabsContext);
    if (activeTab !== id) return null;
    return (
        <div role="tabpanel" className="p-4">
            {children}
        </div>
    );
}

// Attach sub-components to parent namespace
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

// Usage — expressive, flexible API with no props drilling:
<Tabs defaultTab="profile">
    <Tabs.List>
        <Tabs.Tab id="profile">Profile</Tabs.Tab>
        <Tabs.Tab id="settings">Settings</Tabs.Tab>
        <Tabs.Tab id="billing">Billing</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel id="profile">
        <ProfilePage />
    </Tabs.Panel>
    <Tabs.Panel id="settings">
        <SettingsPage />
    </Tabs.Panel>
    <Tabs.Panel id="billing">
        <BillingPage />
    </Tabs.Panel>
</Tabs>;
```

---

### Q18: What is `useMemo` vs `useCallback` — and when should you NOT use them? (Meta, Google)

**What they're testing**: Whether you know the cost of memoization — it's not free.

```jsx
// useMemo — memoizes a COMPUTED VALUE
const sortedList = useMemo(
    () => [...data].sort((a, b) => a.name.localeCompare(b.name)),
    [data], // only re-sort when data changes
);

// useCallback — memoizes a FUNCTION REFERENCE
const handleDelete = useCallback(
    (id) => setItems((prev) => prev.filter((item) => item.id !== id)),
    [], // stable reference — doesn't change on re-renders
);
```

**When NOT to use them** (critical for senior roles):

```jsx
// ❌ Wasteful — simple computation, no perf benefit
const doubled = useMemo(() => count * 2, [count]);
// Just write: const doubled = count * 2;

// ❌ Wasteful — function not passed to memoized child
const handleClick = useCallback(() => setOpen(true), []);
// Only matters if: (a) passed to React.memo child, or (b) used as useEffect dep

// ✅ Correct use — expensive computation
const expensiveResult = useMemo(() => {
    return largeDataset.reduce(/* complex aggregation */);
}, [largeDataset]);

// ✅ Correct use — stable ref for memoized child + useEffect dep
const fetchUser = useCallback(() => fetch(`/api/users/${id}`), [id]);
```

**The cost of `useMemo`**: React stores the previous value + dependencies array. On every render it still runs the comparison. For trivial computations this overhead **exceeds** the savings.

> **Rule**: Memoize when the computation is expensive (measurable with React DevTools Profiler), or when referential stability is required (passed as a prop to `React.memo` children, or used as a `useEffect` dependency).

---

### Q19: What are React Server Components? How are they different from SSR? (Meta, Google, Microsoft)

**What they're testing**: Cutting-edge React knowledge.

|                      | SSR (Server-Side Rendering)                      | React Server Components (RSC)            |
| -------------------- | ------------------------------------------------ | ---------------------------------------- |
| When rendered        | On each request, on server                       | On server, at build time or request time |
| Hydration            | Full JS bundle sent to client, hydration happens | Zero JS sent for server components       |
| Client interactivity | Full React on client after hydration             | Only Client Components are interactive   |
| Data fetching        | `getServerSideProps` / loaders                   | Direct `async/await` in component body   |
| Bundle size impact   | Full bundle still shipped                        | Server components don't add to JS bundle |

```jsx
// Server Component — runs ONLY on the server
// Can: async/await, access DB directly, read filesystem
// Cannot: useState, useEffect, event handlers, browser APIs
async function ProductPage({ id }) {
    const product = await db.products.findById(id); // direct DB call — no fetch!
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            {/* Client Component — handles interactivity */}
            <AddToCartButton productId={id} />
        </div>
    );
}

// Client Component — add "use client" directive at top of file
("use client");
function AddToCartButton({ productId }) {
    const [added, setAdded] = useState(false); // useState is allowed here
    return (
        <button onClick={() => setAdded(true)}>
            {added ? "Added!" : "Add to Cart"}
        </button>
    );
}
```

> **One-line answer**: "SSR sends HTML + a full React bundle for hydration. RSC sends HTML for server components with zero JS — only Client Components ship JavaScript. RSC reduces bundle size and lets server components directly access databases."

---

## 21.3 — System Design / Architecture Questions (Senior Roles)

---

### Q20: How would you optimize a React app that has performance issues? (Amazon, Flipkart, Google)

**A structured answer**:

**Step 1 — Measure first, optimize second**:

```
React DevTools Profiler → find components with high render time / render count
Chrome DevTools Performance tab → find long tasks (>50ms)
Lighthouse → LCP, CLS, INP scores
```

**Step 2 — Fix unnecessary re-renders**:

```jsx
// Wrap expensive components in React.memo
const ExpensiveCard = React.memo(({ data }) => <Card data={data} />);

// Stable callbacks with useCallback
const handleClick = useCallback(() => {
    /* ... */
}, [dep]);

// Memoize expensive computations
const result = useMemo(() => computeExpensive(data), [data]);
```

**Step 3 — Code splitting and lazy loading**:

```jsx
const HeavyChart = React.lazy(() => import("./HeavyChart"));

function Dashboard() {
    return (
        <Suspense fallback={<Spinner />}>
            <HeavyChart />
        </Suspense>
    );
}
```

**Step 4 — Virtualize long lists**:

```jsx
// Don't render 10,000 rows — only render what's visible
import { FixedSizeList } from "react-window";

<FixedSizeList height={600} itemCount={10000} itemSize={50}>
    {({ index, style }) => <Row style={style} data={items[index]} />}
</FixedSizeList>;
```

**Step 5 — Optimize Context**:

```jsx
// Split contexts by update frequency
// Memoize context values
// Use selectors (Zustand / Redux) instead of raw context for high-frequency data
```

**Step 6 — Image & asset optimization**:

```jsx
<img loading="lazy" src={url} width={800} height={600} decoding="async" />
// Use next/image in Next.js, or native lazy loading
```

---

### Q21: How would you implement authentication in a React SPA? (Amazon, Razorpay, Paytm)

**Complete architecture**:

```jsx
// 1. AuthContext — global auth state
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check token on app load
    useEffect(() => {
        const token = localStorage.getItem("token"); // or httpOnly cookie
        if (token) {
            validateToken(token)
                .then(setUser)
                .catch(() => localStorage.removeItem("token"))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (credentials) => {
        const { user, token } = await apiLogin(credentials);
        localStorage.setItem("token", token);
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    if (loading) return <SplashScreen />;

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// 2. Protected Route — wrapper component
function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);
    if (!user) return <Navigate to="/login" replace />;
    return children;
}

// 3. Axios interceptor — attach token to every request
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// 4. Route setup
<Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route
        path="/dashboard"
        element={
            <ProtectedRoute>
                <DashboardPage />
            </ProtectedRoute>
        }
    />
</Routes>;
```

**Security note for interviewers**: For high-security apps, prefer `httpOnly` cookies over `localStorage`. `localStorage` is accessible to JS (XSS risk). `httpOnly` cookies are not readable by JS. Use `SameSite=Strict` or `SameSite=Lax` + `Secure` flag.

---

## 21.4 — Quick-Fire Questions (Common Across All MNCs)

| Question                                                     | One-Line Answer                                                                                    |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| What triggers a re-render?                                   | State change, parent re-render, context value change, forced via `forceUpdate` (class)             |
| What is reconciliation?                                      | Process of diffing prev and next virtual DOM trees to find minimal DOM changes                     |
| Can you call hooks inside loops?                             | No — Rules of Hooks: top-level only, unconditionally                                               |
| What does `React.memo` do?                                   | Shallow-compares props; skips re-render if props didn't change                                     |
| Difference between `null` and `undefined` in JSX?            | Both render nothing, but `null` is explicit "render nothing"; `undefined` is implicit              |
| What is `Suspense`?                                          | Let components wait for something (async data, lazy import) and show fallback meanwhile            |
| What is `useId()`?                                           | Generates stable unique IDs safe for SSR (avoids hydration mismatch)                               |
| What is `flushSync`?                                         | Forces React to flush state updates synchronously — needed before reading DOM measurements         |
| Difference between `useEffect` and `useLayoutEffect` in SSR? | `useLayoutEffect` causes a warning in SSR because it runs after DOM commit (no DOM on server)      |
| What is tree shaking?                                        | Bundler removes unused exported code from the final bundle                                         |
| What is hydration?                                           | React attaches event listeners to server-rendered HTML without re-creating DOM nodes               |
| Why shouldn't you use index as key?                          | Reordering shifts indices → React remounts wrong components → input state bugs                     |
| What is `React.Fragment`?                                    | Groups JSX children without adding an extra DOM node                                               |
| What is `forwardRef`?                                        | Lets a parent component pass a `ref` down to a child DOM element through the component             |
| What is `useImperativeHandle`?                               | Customizes what `ref.current` exposes — restrict parent to a limited imperative API                |
| Difference between `useRef` and `createRef`?                 | `useRef` persists across renders; `createRef` creates a new ref object on every render             |
| What is prop types?                                          | Runtime type checking for component props in development (replaced by TypeScript in modern apps)   |
| What is the `children` prop?                                 | The JSX content placed between a component's opening and closing tags                              |
| When to use Redux over Context?                              | High-frequency updates, devtools needed, async flows, or when app has many interconnected features |
| What is an HOC?                                              | A function that takes a component and returns a new component with added behavior                  |

---

## Module 21 Summary

| Category           | Key Topics                                                                              |
| ------------------ | --------------------------------------------------------------------------------------- |
| **Internals**      | Fiber, Reconciliation, diffing O(n), StrictMode double-invoke                           |
| **Hooks**          | Stale closure in setTimeout, useLayoutEffect vs useEffect, useRef array pattern         |
| **State**          | Functional updater for sequential updates, Context re-render pitfalls                   |
| **Machine Coding** | OTP Input, Search+Debounce, Infinite Scroll, Star Rating, Tabs with Compound Components |
| **Custom Hooks**   | useFetch+cache, useDebounce, useLocalStorage, useWindowSize+throttle                    |
| **Architecture**   | Auth flow, Performance optimization checklist, RSC vs SSR                               |
| **Quick-fire**     | 20 common one-liner answers across all MNC levels                                       |

---

[↑ Back to TOC](#table-of-contents)

# Module 22: Tooling & Code Quality

> **Topics**: ESLint, Prettier, Husky, lint-staged, Conventional Commits, editor config, CI quality gates

A React codebase without consistent tooling is a liability. This module covers the standard toolchain every production team uses — catching bugs before they hit CI, enforcing style automatically, and making git history readable.

---

## 22.1 — ESLint: Static Analysis for React

**What it does**: Catches bugs, enforces best practices, and flags React-specific issues (stale deps, hook rule violations) before you run the app.

### Installation

```bash
npm install -D eslint @eslint/js eslint-plugin-react eslint-plugin-react-hooks \
  eslint-plugin-react-refresh @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### `eslint.config.js` (flat config — ESLint 9+)

```js
// eslint.config.js
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
    js.configs.recommended,

    // TypeScript files
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: { project: "./tsconfig.json" },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            react: reactPlugin,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        settings: { react: { version: "detect" } },
        rules: {
            // ---- React Rules ----
            "react/react-in-jsx-scope": "off",          // Not needed with new JSX transform
            "react/prop-types": "off",                  // TypeScript handles this
            "react/display-name": "warn",
            "react/no-array-index-key": "warn",         // Discourage index-as-key
            "react/self-closing-comp": "warn",          // <Component /> not <Component></Component>

            // ---- Hooks Rules (CRITICAL) ----
            "react-hooks/rules-of-hooks": "error",      // Enforces Rules of Hooks
            "react-hooks/exhaustive-deps": "warn",      // Missing useEffect dependencies

            // ---- React Refresh (HMR) ----
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

            // ---- TypeScript Rules ----
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/consistent-type-imports": "warn", // import type { X }

            // ---- General ----
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "prefer-const": "error",
            "no-var": "error",
        },
    },

    // Test files — relax some rules
    {
        files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "no-console": "off",
        },
    },

    // Ignore patterns
    {
        ignores: ["dist/", "node_modules/", "coverage/", "*.config.js"],
    },
];
```

### The Most Important React ESLint Rules

| Rule | Severity | What it catches |
|---|---|---|
| `react-hooks/rules-of-hooks` | **error** | Hooks called conditionally, in loops, or outside components |
| `react-hooks/exhaustive-deps` | **warn** | Missing dependencies in `useEffect`, `useMemo`, `useCallback` arrays |
| `react/no-array-index-key` | warn | `key={index}` on dynamic lists — causes reconciliation bugs |
| `@typescript-eslint/no-unused-vars` | error | Dead variables — common source of bugs |
| `prefer-const` | error | `let` used where `const` would work |
| `no-console` | warn | `console.log` left in production code |

### ESLint Scripts

```json
// package.json
{
  "scripts": {
    "lint":        "eslint src --ext .ts,.tsx",
    "lint:fix":    "eslint src --ext .ts,.tsx --fix",
    "lint:ci":     "eslint src --ext .ts,.tsx --max-warnings 0"
  }
}
```

> `--max-warnings 0` in CI: any warning is treated as an error — prevents warning accumulation ("warning debt").

---

## 22.2 — Prettier: Automatic Code Formatting

**What it does**: Formats code automatically — no more debates about tabs vs spaces, quote style, trailing commas. The formatter always wins.

```bash
npm install -D prettier eslint-config-prettier
# eslint-config-prettier disables all ESLint rules that would conflict with Prettier
```

### `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": false,
  "jsxSingleQuote": false,
  "trailingComma": "all",
  "tabWidth": 4,
  "printWidth": 100,
  "bracketSameLine": false,
  "arrowParens": "always"
}
```

### `.prettierignore`

```
dist/
node_modules/
coverage/
*.min.js
public/
```

### Integrate with ESLint

```js
// eslint.config.js — add at the END (must come last to override)
import prettierConfig from "eslint-config-prettier";

export default [
    // ... all your rules ...
    prettierConfig,   // disables ESLint formatting rules that Prettier handles
];
```

### Prettier Scripts

```json
{
  "scripts": {
    "format":      "prettier --write src",
    "format:check":"prettier --check src"   // Used in CI — fails if files aren't formatted
  }
}
```

---

## 22.3 — Husky + lint-staged: Git Hooks

**Problem**: Developers forget to run `npm run lint` before committing. Husky runs ESLint + Prettier automatically on every commit — only on the files being committed.

```bash
npm install -D husky lint-staged
npx husky init    # creates .husky/ folder and adds "prepare" script
```

### `.husky/pre-commit`

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

### `lint-staged` config in `package.json`

```json
{
  "lint-staged": {
    "src/**/*.{ts,tsx}": [
      "eslint --fix --max-warnings 0",
      "prettier --write"
    ],
    "src/**/*.{css,json,md}": [
      "prettier --write"
    ]
  }
}
```

**How it works**:
1. You run `git commit`
2. Husky intercepts and runs `lint-staged`
3. `lint-staged` runs ESLint + Prettier **only on staged files** (fast!)
4. If ESLint reports errors → commit is **blocked**
5. If all pass → commit proceeds

```
git commit -m "feat: add login form"
✔ Preparing lint-staged...
✔ Running tasks for staged files...
  ✔ src/components/LoginForm.tsx — eslint --fix, prettier --write
✔ Applying modifications...
✔ Cleaning up...
[main abc1234] feat: add login form
```

---

## 22.4 — Conventional Commits

**What it is**: A standard format for commit messages that makes git history readable and enables automated changelog generation + semantic versioning.

### Format

```
<type>(<scope>): <short summary>

[optional body]

[optional footer]
```

### Types

| Type | When to use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `refactor` | Code change that isn't a fix or feature |
| `perf` | Performance improvement |
| `test` | Adding or fixing tests |
| `docs` | Documentation only |
| `style` | Formatting, whitespace (no logic change) |
| `chore` | Build process, dependency updates, tooling |
| `ci` | CI/CD config changes |
| `revert` | Reverts a previous commit |
| `BREAKING CHANGE` | In footer — triggers major version bump |

### Examples

```bash
feat(auth): add JWT refresh token rotation
fix(cart): prevent duplicate item addition on double-click
refactor(hooks): extract useAsync from ProductPage and CheckoutPage
perf(feed): virtualize list with react-window — reduces render from 500ms to 12ms
test(useCounter): add bounds enforcement tests
chore(deps): upgrade react to 19.1.0
docs(readme): add environment setup instructions
ci: add staging deploy workflow

# Breaking change
feat(api)!: rename useUser to useAuthUser

BREAKING CHANGE: useUser hook renamed. Update all import sites.
```

### Enforce with `commitlint`

```bash
npm install -D @commitlint/cli @commitlint/config-conventional
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

```bash
# .husky/commit-msg
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
npx --no -- commitlint --edit "$1"
```

Now every commit message is validated:
```bash
git commit -m "updated stuff"
# ✘ subject may not be empty [subject-empty]
# ✘ type may not be empty [type-empty]
# ✖ found 2 problems, 0 warnings

git commit -m "fix(auth): prevent token expiry race condition"
# ✔ commit message valid
```

---

## 22.5 — TypeScript `tsconfig.json` for React

A correctly configured `tsconfig.json` catches more bugs at compile time.

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",          // New JSX transform — no need to import React
    "strict": true,              // Enables all strict checks below:
                                 //   noImplicitAny, strictNullChecks, strictFunctionTypes,
                                 //   strictBindCallApply, noImplicitThis, alwaysStrict
    "noUnusedLocals": true,      // Error on unused variables
    "noUnusedParameters": true,  // Error on unused function params
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": true, // {a?: string} ≠ {a: string | undefined}
    "noUncheckedIndexedAccess": true,   // arr[0] is T | undefined (not just T)
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]           // Path alias — import from "@/components/Button"
    },
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

**Key strict options explained**:

```ts
// strictNullChecks — null/undefined must be handled explicitly
const user: User | null = getUser();
user.name;         // ❌ Error: Object is possibly null
user?.name;        // ✅

// noUncheckedIndexedAccess — array access returns T | undefined
const items = ["a", "b"];
const first = items[0];     // first: string | undefined (not just string)
if (first) console.log(first.toUpperCase()); // must check

// exactOptionalPropertyTypes
interface Config { timeout?: number; }
const c: Config = { timeout: undefined }; // ❌ Error — use {} instead
```

---

## 22.6 — `.editorconfig`: Consistent Editor Settings

Works across VSCode, IntelliJ, Vim, etc. before any formatter runs.

```ini
# .editorconfig
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.{json,yml,yaml}]
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

---

## 22.7 — VSCode Workspace Settings

```json
// .vscode/settings.json — commit this to the repo
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "typescript.tsdk": "node_modules/typescript/lib",
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```

```json
// .vscode/extensions.json — recommend to team
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "streetsidesoftware.code-spell-checker"
  ]
}
```

---

## 22.8 — CI Quality Gate

All the local checks must also run in CI to catch anything that slips past git hooks (direct pushes, etc.).

```yaml
# .github/workflows/quality.yml
name: Quality Gate

on:
  push:
    branches: ["**"]
  pull_request:
    branches: [main, staging]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: TypeScript type check
        run: npx tsc --noEmit

      - name: ESLint (zero warnings)
        run: npm run lint:ci      # eslint --max-warnings 0

      - name: Prettier format check
        run: npm run format:check # prettier --check src

      - name: Run tests
        run: npm run test -- --run --coverage

      - name: Build check
        run: npm run build
```

**The quality pipeline catches**:
1. TypeScript type errors
2. ESLint rule violations (including missing deps, hook rules)
3. Unformatted code
4. Failing tests
5. Build errors

> PRs that fail any of these are blocked from merging.

---

## Module 22 — Interview Q&A

**Q: What is the `react-hooks/exhaustive-deps` ESLint rule and why is it important?**
> It warns when a value used inside `useEffect`, `useMemo`, or `useCallback` is missing from the dependency array. Missing deps cause stale closure bugs — the effect uses an old value from a previous render. The rule is a safety net that catches the most common `useEffect` bug automatically.

**Q: What is the difference between Prettier and ESLint?**
> ESLint is a linter — it analyzes code for bugs, anti-patterns, and style issues. Many ESLint rules are opinionated style rules. Prettier is a code **formatter** — it reprints your code with consistent style, ignoring your input formatting entirely. They serve different purposes: use ESLint for code quality rules + `eslint-config-prettier` to disable the style rules, let Prettier handle all formatting.

**Q: What are Husky and lint-staged? Why use both?**
> Husky installs git hooks (pre-commit, commit-msg, pre-push) via npm scripts so they work for every team member without manual setup. lint-staged runs linters only on *staged* files (not the whole codebase), making pre-commit checks fast even in large repos. Together: every commit is automatically linted and formatted before it hits the repo.

**Q: What are Conventional Commits? How do they help a team?**
> Conventional Commits is a spec for commit message format (`type(scope): summary`). Benefits: (1) Git history is self-documenting. (2) Automated changelog generation (`CHANGELOG.md` from `feat`/`fix` commits). (3) Semantic versioning automation (fix = patch, feat = minor, BREAKING CHANGE = major). (4) Easier code review — type immediately tells the reviewer what kind of change to expect.

**Q: What does `"strict": true` enable in `tsconfig.json`?**
> It enables a group of checks: `noImplicitAny` (no implicit `any` type), `strictNullChecks` (null/undefined must be handled explicitly), `strictFunctionTypes` (correct function signature variance), `noImplicitThis`, and more. The most important for React: `strictNullChecks` — it forces you to handle `null`/`undefined` returned from APIs, `useRef(null)`, and optional props, eliminating a whole class of runtime errors.

---

## Module 22 Summary

| Tool | Purpose | Key File |
|---|---|---|
| **ESLint** | Static analysis — bugs, anti-patterns, hook rules | `eslint.config.js` |
| **`react-hooks` plugin** | Enforces Rules of Hooks + exhaustive deps | Part of ESLint config |
| **Prettier** | Auto-formatting — consistent code style | `.prettierrc` |
| **`eslint-config-prettier`** | Disable ESLint rules that conflict with Prettier | Last in ESLint config |
| **Husky** | Git hooks that run automatically for every developer | `.husky/pre-commit` |
| **lint-staged** | Run linters only on staged files — keeps pre-commit fast | `package.json` |
| **commitlint** | Validate commit message format | `commitlint.config.js` |
| **Conventional Commits** | Readable git history + automated changelogs | Commit message format |
| **`tsconfig.json` strict** | Maximum TypeScript type safety | `tsconfig.json` |
| **`.editorconfig`** | Consistent whitespace across all editors | `.editorconfig` |
| **CI quality gate** | Ensures linting/tests/build pass on every PR | `.github/workflows/` |

---

[↑ Back to TOC](#table-of-contents)

# Module 23: Next.js & Full-Stack React

> **Topics**: App Router, Server Components, Server Actions, file-based routing, data fetching, ISR, middleware, API routes, deployment

> Next.js is the most widely used React framework. It adds server-side rendering, file-based routing, API routes, image optimization, and a full deployment pipeline on top of React. Understanding Next.js is essential for production full-stack React work.

---

## 23.1 — Next.js vs Plain React (Vite)

| Feature | Plain React (Vite) | Next.js |
|---|---|---|
| Routing | React Router (manual) | File-based (automatic) |
| SSR/SSG | Manual (complex) | Built-in, per-route |
| API endpoints | Separate Express/Node server | API Routes (same repo) |
| Image optimization | Manual | `next/image` (automatic) |
| Font optimization | Manual | `next/font` (automatic, zero CLS) |
| SEO meta tags | React Helmet / manual | `export const metadata` |
| Code splitting | Manual `React.lazy` | Automatic per page |
| Server Components | Not supported | Built-in (App Router) |
| Deployment | Any static host | Vercel (zero-config) or any Node host |

---

## 23.2 — Project Structure (App Router)

```
my-next-app/
├── app/                        ← All routes live here
│   ├── layout.tsx              ← Root layout (wraps every page)
│   ├── page.tsx                ← / (home page)
│   ├── globals.css
│   ├── about/
│   │   └── page.tsx            ← /about
│   ├── blog/
│   │   ├── page.tsx            ← /blog
│   │   └── [slug]/
│   │       └── page.tsx        ← /blog/my-post (dynamic route)
│   ├── dashboard/
│   │   ├── layout.tsx          ← Nested layout for /dashboard/*
│   │   ├── page.tsx            ← /dashboard
│   │   └── settings/
│   │       └── page.tsx        ← /dashboard/settings
│   └── api/
│       └── users/
│           └── route.ts        ← /api/users (API route)
├── components/                 ← Shared components
├── lib/                        ← Utilities, DB clients
├── public/                     ← Static assets
└── next.config.ts
```

---

## 23.3 — File-Based Routing: Special Files

| File | Purpose |
|---|---|
| `page.tsx` | UI for a route — makes the route publicly accessible |
| `layout.tsx` | Shared UI that wraps child routes (persists across navigation) |
| `loading.tsx` | Automatic Suspense fallback for the route segment |
| `error.tsx` | Automatic Error Boundary for the route segment |
| `not-found.tsx` | Rendered when `notFound()` is called |
| `route.ts` | API endpoint (GET, POST, etc.) — no UI |
| `middleware.ts` | Runs on the Edge before every request |
| `template.tsx` | Like layout but re-mounts on every navigation |

### Dynamic Routes

```
app/
├── blog/[slug]/page.tsx        → /blog/hello-world  (params.slug = "hello-world")
├── shop/[...slug]/page.tsx     → /shop/a/b/c        (params.slug = ["a", "b", "c"])
├── user/[[...slug]]/page.tsx   → /user OR /user/a/b  (optional catch-all)
```

---

## 23.4 — Layouts & Nested Routing

```tsx
// app/layout.tsx — ROOT layout. Wraps EVERY page.
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: { template: "%s | MyApp", default: "MyApp" },
    description: "MyApp description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
```

```tsx
// app/dashboard/layout.tsx — Nested layout for /dashboard/*
// This renders INSIDE the root layout — the sidebar persists across dashboard pages
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">{children}</div>
        </div>
    );
}
```

```tsx
// app/dashboard/page.tsx — /dashboard
export default function DashboardPage() {
    return <h1>Dashboard</h1>;
}

// app/dashboard/settings/page.tsx — /dashboard/settings
// Sidebar is still rendered (from parent layout) — React does NOT remount it
export default function SettingsPage() {
    return <h1>Settings</h1>;
}
```

---

## 23.5 — Server vs Client Components in Next.js

**Default**: Every component in `app/` is a **Server Component** — runs only on the server, zero JS sent to client.

```tsx
// app/products/page.tsx — SERVER COMPONENT (default)
// Can: async/await, direct DB access, read env vars
// Cannot: useState, useEffect, onClick, browser APIs

async function ProductsPage() {
    // Direct database query — NO fetch needed, NO API layer
    const products = await db.products.findMany({ take: 20 });
    return (
        <div>
            <h1>Products</h1>
            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}
```

```tsx
// components/AddToCartButton.tsx — CLIENT COMPONENT
"use client"; // ← This directive marks it as a Client Component

import { useState } from "react";

export function AddToCartButton({ productId }: { productId: string }) {
    const [added, setAdded] = useState(false);
    return (
        <button onClick={() => setAdded(true)}>
            {added ? "✅ Added!" : "Add to Cart"}
        </button>
    );
}
```

**The boundary rule**: Server Components can import and render Client Components. Client Components **cannot** import Server Components (but can receive them as `children`).

```tsx
// ✅ Server Component passes a Client Component as children
// app/page.tsx (Server)
import { Modal } from "@/components/Modal"; // Client Component

export default function Page() {
    return (
        <Modal>
            <ServerContent /> {/* Server Component as child of Client — allowed */}
        </Modal>
    );
}
```

---

## 23.6 — Data Fetching Patterns

### Server Component (async/await directly)

```tsx
// app/users/[id]/page.tsx
interface Props { params: { id: string }; }

async function UserPage({ params }: Props) {
    // Fetch runs on server — no loading state needed
    const user = await fetch(`https://api.example.com/users/${params.id}`, {
        next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
    }).then(r => r.json());

    return <UserProfile user={user} />;
}
```

### Parallel Data Fetching (avoid waterfall)

```tsx
async function DashboardPage() {
    // ✅ Both fetches run in PARALLEL — not sequential
    const [user, stats] = await Promise.all([
        fetchUser(),
        fetchStats(),
    ]);

    return (
        <>
            <UserCard user={user} />
            <StatsPanel stats={stats} />
        </>
    );
}
```

### `loading.tsx` — Automatic Suspense

```tsx
// app/products/loading.tsx
// Next.js automatically wraps page.tsx in Suspense using this as the fallback
export default function Loading() {
    return <ProductSkeleton />;
}
```

### `error.tsx` — Automatic Error Boundary

```tsx
// app/products/error.tsx
"use client"; // Error components must be Client Components

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={reset}>Try again</button>
        </div>
    );
}
```

---

## 23.7 — Server Actions: Forms Without APIs

Server Actions are async functions that run **on the server** when invoked from a form or button. No API route needed.

```tsx
// app/contact/page.tsx
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

// Server Action — runs on the server when the form submits
async function submitContact(formData: FormData) {
    "use server"; // marks this function as a Server Action

    const name    = formData.get("name")    as string;
    const email   = formData.get("email")   as string;
    const message = formData.get("message") as string;

    // Direct DB write — no API endpoint needed
    await db.contacts.create({ data: { name, email, message } });

    redirect("/contact/thanks");
}

export default function ContactPage() {
    return (
        <form action={submitContact}>  {/* pass Server Action directly */}
            <input name="name"    placeholder="Name"    required />
            <input name="email"   type="email"          required />
            <textarea name="message"                    required />
            <button type="submit">Send</button>
        </form>
    );
}
```

### Server Action with `useActionState` (React 19 + Next.js 15)

```tsx
"use client";
import { useActionState } from "react";
import { submitContact } from "./actions"; // Server Action in separate file

export function ContactForm() {
    const [state, action, isPending] = useActionState(submitContact, null);

    return (
        <form action={action}>
            {state?.error && <p className="text-red-500">{state.error}</p>}
            {state?.success && <p className="text-green-500">Message sent!</p>}
            <input name="name" placeholder="Name" required />
            <button type="submit" disabled={isPending}>
                {isPending ? "Sending..." : "Send"}
            </button>
        </form>
    );
}
```

---

## 23.8 — API Routes (`route.ts`)

For building REST endpoints in the same Next.js project.

```ts
// app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/users
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page") ?? 1);

    const users = await db.users.findMany({
        skip: (page - 1) * 10,
        take: 10,
    });
    return NextResponse.json({ users, page });
}

// POST /api/users
export async function POST(request: NextRequest) {
    const body = await request.json();
    const user = await db.users.create({ data: body });
    return NextResponse.json(user, { status: 201 });
}
```

```ts
// app/api/users/[id]/route.ts — dynamic route
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const user = await db.users.findUnique({ where: { id: params.id } });
    if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(user);
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    await db.users.delete({ where: { id: params.id } });
    return new NextResponse(null, { status: 204 });
}
```

---

## 23.9 — Rendering Strategies per Route

Next.js lets you control the rendering strategy per route with `export const`:

```tsx
// Static (SSG) — built once at deploy time, served from CDN
export const dynamic = "force-static"; // default for routes with no dynamic data

// Dynamic (SSR) — rendered on every request
export const dynamic = "force-dynamic";

// ISR — static with periodic revalidation
export async function generateStaticParams() { /* ... */ }
// AND in fetch:
fetch(url, { next: { revalidate: 3600 } }) // revalidate every 1 hour

// On-demand revalidation — programmatic cache invalidation
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST() {
    await updateProduct();
    revalidatePath("/products");       // Invalidate a specific path
    revalidateTag("products");         // Invalidate all fetches tagged "products"
    return NextResponse.json({ ok: true });
}
```

### Data Fetching Tags

```tsx
// Tag fetches for group invalidation
const data = await fetch("/api/products", {
    next: {
        tags: ["products"],      // Can be invalidated by revalidateTag("products")
        revalidate: 300,         // Also revalidate after 5 minutes
    }
});
```

---

## 23.10 — Middleware

Middleware runs on the **Edge** before every request — perfect for auth guards, redirects, A/B testing, and locale detection.

```ts
// middleware.ts — at the project root
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // ---- Auth guard ----
    const token = request.cookies.get("auth-token");
    const isProtected = pathname.startsWith("/dashboard");

    if (isProtected && !token) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("from", pathname); // preserve intended destination
        return NextResponse.redirect(loginUrl);
    }

    // ---- Locale redirect ----
    const locale = request.headers.get("accept-language")?.split(",")[0].split("-")[0];
    if (pathname === "/" && locale === "fr") {
        return NextResponse.redirect(new URL("/fr", request.url));
    }

    return NextResponse.next();
}

// Configure which routes middleware runs on
export const config = {
    matcher: [
        "/dashboard/:path*",
        "/api/:path*",
        "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
};
```

---

## 23.11 — `next/image` and `next/font`

### `next/image` — Automatic Image Optimization

```tsx
import Image from "next/image";

// ✅ next/image handles:
// - WebP/AVIF conversion
// - Responsive sizes
// - Lazy loading by default
// - Prevents Cumulative Layout Shift (CLS) via width/height
<Image
    src="/hero.jpg"
    alt="Hero"
    width={1200}
    height={600}
    priority          // LCP image — disable lazy loading
    placeholder="blur"
    blurDataURL="..."
/>

// Remote images — configure in next.config.ts
// images: { remotePatterns: [{ hostname: "cdn.myapp.com" }] }
```

### `next/font` — Zero-CLS Font Loading

```tsx
// app/layout.tsx
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",  // CSS variable
    display: "swap",
});

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

// next/font:
// 1. Downloads font at build time (no runtime fetch)
// 2. Self-hosts — no Google tracking
// 3. Adds font-display: swap automatically
// 4. Zero layout shift — font metrics matched at build time
```

---

## 23.12 — SEO with Metadata API

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from "next";

interface Props { params: { slug: string }; }

// Static metadata
export const metadata: Metadata = {
    title: "My Blog Post",
    description: "Post description",
};

// Dynamic metadata (runs on server, has access to params + data)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await fetchPost(params.slug);
    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [{ url: post.coverImage, width: 1200, height: 630 }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
        },
    };
}
```

---

## 23.13 — Authentication in Next.js (Auth.js / NextAuth)

```bash
npm install next-auth@beta
```

```ts
// auth.ts — configure Auth.js
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub,
        Credentials({
            async authorize(credentials) {
                const user = await validateUser(credentials);
                return user ?? null;
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.sub!;
            return session;
        },
    },
});
```

```ts
// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth";
export const { GET, POST } = handlers;
```

```tsx
// middleware.ts — protect routes at the edge
import { auth } from "@/auth";
export default auth((req) => {
    if (!req.auth && req.nextUrl.pathname.startsWith("/dashboard")) {
        return Response.redirect(new URL("/login", req.url));
    }
});
```

```tsx
// Server Component — read session without API call
import { auth } from "@/auth";

async function DashboardPage() {
    const session = await auth();
    if (!session) redirect("/login");
    return <h1>Welcome, {session.user?.name}</h1>;
}
```

---

## 23.14 — `next.config.ts`

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // React Strict Mode
    reactStrictMode: true,

    // Images from external domains
    images: {
        remotePatterns: [
            { hostname: "cdn.myapp.com" },
            { hostname: "*.amazonaws.com" },
        ],
    },

    // Environment variables (exposed to browser)
    env: {
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL!,
    },

    // Redirects
    async redirects() {
        return [
            { source: "/old-blog/:slug", destination: "/blog/:slug", permanent: true },
        ];
    },

    // Rewrites (proxy without redirect)
    async rewrites() {
        return [
            { source: "/api/v1/:path*", destination: "https://api.myapp.com/:path*" },
        ];
    },

    // Headers
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    { key: "X-Content-Type-Options", value: "nosniff" },
                ],
            },
        ];
    },

    // Experimental
    experimental: {
        serverActions: { bodySizeLimit: "2mb" },
    },
};

export default nextConfig;
```

---

## 23.15 — Deployment

### Vercel (Zero-Config)

```bash
npm install -g vercel
vercel  # Deploy to preview
vercel --prod  # Deploy to production
```

Vercel automatically:
- Detects Next.js
- Builds and deploys
- Provisions Edge Network CDN
- Manages ISR cache
- Supports preview URLs per branch
- Injects environment variables from dashboard

### Self-hosted (Docker)

```dockerfile
# Dockerfile for Next.js
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

```json
// next.config.ts — required for standalone output
{ "output": "standalone" }
```

---

## Module 23 — Interview Q&A

**Q: What is the App Router? How is it different from the Pages Router?**

| | Pages Router | App Router |
|---|---|---|
| Directory | `pages/` | `app/` |
| React version | React 17+ | React 18+ (required for RSC) |
| Server Components | ❌ All client | ✅ Default |
| Data fetching | `getServerSideProps`, `getStaticProps` | `async/await` in component body |
| Layouts | `_app.tsx` (whole app) | Nested `layout.tsx` per segment |
| Loading UI | Manual | Automatic via `loading.tsx` + Suspense |
| Error handling | `_error.tsx` | Automatic via `error.tsx` |
| Server Actions | ❌ | ✅ `"use server"` functions |

**Q: What is ISR (Incremental Static Regeneration)?**
> ISR generates static pages at build time but allows them to be revalidated in the background after a set time interval. The first user after the revalidation period gets the stale page (and triggers a regeneration in the background); subsequent users get the fresh page. Best for: e-commerce product pages, blog posts, dashboards with data that changes every few minutes but doesn't need real-time freshness. Use `fetch(url, { next: { revalidate: 60 } })` in the App Router.

**Q: What are Server Actions? Why are they better than API routes for forms?**
> Server Actions are async functions marked with `"use server"` that execute on the server when called from a form `action` or client event handler. Advantages over API routes: (1) No boilerplate — no `fetch`, no request/response handling, no endpoint URL to manage. (2) Progressive enhancement — forms work even with JavaScript disabled (native HTML form submit). (3) Type-safe — the function signature is the contract. (4) Co-location — the action can live in the same file as the form component.

**Q: When would you use a Server Component vs a Client Component in Next.js?**

| Use Server Component when | Use Client Component when |
|---|---|
| Fetching data from DB/API | Using `useState`, `useEffect`, or other hooks |
| Reading environment variables | Handling user interactions (onClick, onChange) |
| Accessing the filesystem | Using browser APIs (localStorage, geolocation) |
| Reducing JS bundle size | Using third-party libraries that use hooks |
| SEO-critical content | Real-time updates (WebSocket, polling) |

**Q: What does `"use client"` do? Is the component rendered only in the browser?**
> `"use client"` marks a component as a Client Component — it uses React features that require the browser (hooks, events). However, Next.js still renders it **on the server as HTML** (for the initial page load / SSR) AND sends the JavaScript to the browser for hydration. "Client" means "has client-side JS" — not "only runs in browser."

**Q: What is the difference between `revalidatePath` and `revalidateTag`?**
> `revalidatePath("/products")` purges the Next.js cache for a specific URL. `revalidateTag("products")` purges all fetches that were tagged with `{ next: { tags: ["products"] } }` — regardless of which URL they came from. Use `revalidateTag` for data-centric cache invalidation (e.g., after updating a product, invalidate all pages that show product data).

---

## Module 23 Summary

| Concept | Key Takeaway |
|---|---|
| **App Router** | File-based routing in `app/` — `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` |
| **Server Components** | Default in App Router — no JS sent to client, direct DB access, can't use hooks |
| **Client Components** | `"use client"` — interactive, use hooks, still SSR-rendered for initial HTML |
| **Nested Layouts** | `layout.tsx` wraps child segments — persists across navigation without remount |
| **Server Actions** | `"use server"` functions — form handling without API routes, type-safe, progressive |
| **API Routes** | `route.ts` — REST endpoints in the same project (`GET`, `POST`, `DELETE` exports) |
| **ISR** | `{ next: { revalidate: N } }` — static pages that refresh in the background |
| **On-demand revalidation** | `revalidatePath()` / `revalidateTag()` — programmatic cache invalidation |
| **Middleware** | Runs at the Edge before every request — auth guards, redirects, locale detection |
| **`next/image`** | Auto WebP/AVIF, lazy loading, CLS prevention — use for all images |
| **`next/font`** | Self-hosted fonts, zero CLS, no Google tracking |
| **Metadata API** | `export const metadata` or `generateMetadata()` — typed SEO, OG tags |
| **Auth.js** | Auth provider integration (GitHub, Google, Credentials) with session on server |
| **Vercel** | Zero-config deployment — detects Next.js, handles ISR, CDN, preview URLs |

---

_Master Class Notes — React JS | Modules 1–23 + Extended Sections_
_Topics: JSX · Props · Pure Components · useState · Fiber · Reconciliation · useEffect · useMemo · useCallback · React.memo · Compound Components · Render Props · HOCs · React.Children · cloneElement · Server Components · Suspense · React.lazy · Dynamic Import · Code Splitting · Transitions · useReducer · useContext · useRef · useImperativeHandle · useLayoutEffect · useDeferredValue · useId · useDebugValue · useSyncExternalStore · Custom Hooks · React 19 · use() · useActionState · useOptimistic · Server Actions · Event Handling · Controlled/Uncontrolled Forms · React Hook Form · Presentational/Container Components · Lifting State Up · Composition · SPA · React Router · Protected Routes · Redux Toolkit · Zustand · Error Boundaries · Portals · CSS Modules · Tailwind CSS · clsx · cn() · tailwind-merge · Styled-components · Theming · Jest · Vitest · React Testing Library · MSW · Vite · Feature Architecture · TypeScript · Generics · React.FC · ComponentProps · SSR · SSG · ISR · Hydration · JWT Security · XSS · TanStack Query · Pagination · Infinite Scroll · Debounce · Throttle · Optimistic UI · Production Error Handling · Core Web Vitals · LCP · CLS · INP · flushSync · MUI · Framer Motion · Axios · SWR · Zod · React Table · shadcn/ui · Radix UI · Recharts · Socket.io · dnd-kit · Jotai · Day.js · Manual Routing · pushState · popstate · Config-Driven Table · Modal Portal · OTP Input · Star Rating · Compound Components Tabs · useDebounce · useLocalStorage · useWindowSize · useFetch · ErrorBoundary · Stale Closure · Auth Flow · Performance Optimization · MNC Interview Questions · Glossary · ESLint · Prettier · Husky · lint-staged · Conventional Commits · commitlint · tsconfig strict · editorconfig · CI Quality Gate · Next.js App Router · File-based Routing · Nested Layouts · Server Components · Client Components · Server Actions · API Routes · ISR · On-demand Revalidation · Middleware · next/image · next/font · Metadata API · Auth.js · Vercel Deployment_
