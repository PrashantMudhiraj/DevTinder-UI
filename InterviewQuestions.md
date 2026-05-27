# React.js Interview Prep: Questions, Answers, and In-Depth Discussion

**Executive Summary:** This report compiles the *most frequently asked React.js interview questions*, organized by experience level: **Beginner, Intermediate, Advanced,** and **Internals/Performance/Architecture**. Each question is followed by a succinct interview-style answer, then a deeper explanation covering design rationale, internal mechanics, common pitfalls, and related concepts. Where helpful, we include runnable code examples in JSX/JavaScript with key lines annotated, tables comparing related APIs, and Mermaid diagrams (lifecycles, reconciliation flow, etc.) to visualize concepts. Citations are drawn from React’s official documentation (react.dev and legacy docs), React team blogs (e.g. Dan Abramov’s overreacted.io), React RFCs, and expert sources (Kent C. Dodds, etc.). This report is intended as a comprehensive, interview-ready resource for React knowledge, covering basics through advanced topics (including React 18/19 features, concurrent rendering, server components, etc.) with analytical rigor.

## Beginner-Level React Interview Questions

### What is React?

**Answer (concise):** React is a **JavaScript library** (not a full framework) for building user interfaces, especially single-page apps. It uses a *component-based* architecture where UI is broken into reusable, stateful pieces. React employs a **Virtual DOM** to efficiently update only what’s changed, and it follows a **declarative** programming model (describe *what* the UI should be, not *how* to manipulate the DOM)【35†L1-L4】.

**Explanation:** React was developed by Facebook and is widely used for dynamic, interactive UIs. A React app is built from **components**, which are JavaScript functions (or classes) that return JSX (a syntax similar to HTML). Components manage their own state and can accept external data via *props*. Because React re-renders components when state/props change, it abstracts away manual DOM updates. This is achieved by keeping a Virtual DOM (an in-memory representation of the UI) and performing *reconciliation* to diff and patch only the changed parts of the real DOM【35†L1-L4】【22†L135-L143】. Key advantages include:
- **Reusability:** Components can be reused and composed.
- **Performance:** Virtual DOM diffing minimizes costly real-DOM operations【22†L135-L143】.
- **Declarative Code:** Describe UI in JSX/JavaScript instead of imperative DOM manipulation.
- **Strong Ecosystem:** Rich community and ecosystem (React Router, Redux, Next.js, etc.).
React itself is unopinionated about architecture beyond components (e.g. you choose your state management library)【35†L1-L4】.

**Example:** A minimal React component (functional style) looks like:
```jsx
function HelloWorld({ name }) {
  return <h1>Hello, {name}!</h1>;  // JSX syntax produces a React element
}

// Usage:
// ReactDOM.render(<HelloWorld name="Alice" />, rootElement);
```
This component *re-renders* when `name` prop changes, but we don’t manually manipulate the DOM – React handles it.

**Common Pitfalls:** Forgetting that React is *just* a UI library (you still need routing, state management, etc. separately). Confusing React with other frameworks (Angular/Vue). Overusing component state or not breaking UI into components leads to monolithic code. Also, over-relying on the Virtual DOM for performance (some very frequent updates still need optimization).

**Follow-up Questions:** How does React’s Virtual DOM work under the hood (diffing algorithm)? What problems does declarative UI solve? Compare React with a framework like Angular in terms of data flow and architecture.

### What is JSX and how does it work?

**Answer (concise):** JSX (JavaScript XML) is a **syntax extension** for JavaScript that looks like HTML/XML. It allows writing UI templates directly in JS code: e.g. `<div>Hello</div>`. Under the hood, a build tool (Babel or the React Compiler) transforms JSX into `React.createElement` calls (or similar), which produce React element objects. JSX isn’t required but is widely used because it’s concise and expressive【37†L97-L100】.

**Explanation:** JSX *mixes markup with JavaScript*, enabling you to write `<div>` and inline expressions like `{user.name}` inside a JS file【37†L97-L100】. Although JSX resembles HTML, it’s not a string – it’s syntactic sugar. For example:
```jsx
// JSX:
<div className="card">Hello!</div>

// Transpiles to something like:
React.createElement('div', { className: 'card' }, 'Hello!');
```
This `createElement` call constructs a React element describing `<div class="card">Hello!</div>`. At build time, JSX is compiled to these function calls【37†L97-L100】. Advantages of JSX include readability (markup in JS) and easy embedding of dynamic values (with `{}` braces). A downside is that browsers don’t understand JSX natively; it must be compiled. However, this compilation is standard in React projects. (Note: React and JSX are separate – you could use React without JSX, but JSX is idiomatic in React apps【37†L97-L100】.)

**Example:** 
```jsx
// JSX component
function Welcome({ user }) {
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Your email is: {user.email}</p>
    </div>
  );
}

// Without JSX (equivalent):
function Welcome({ user }) {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, `Welcome, ${user.name}!`),
    React.createElement('p', null, `Your email is: ${user.email}`)
  );
}
```
This shows how JSX is just syntactic sugar over `React.createElement`.

**Common Pitfalls:** Remember JSX returns only *one root element* (wrap siblings in a `<div>` or `<>` fragment). The `class` attribute is `className` in JSX. Infamous errors: forgetting to import React (in older versions) or misplacing parentheses in multiline JSX. Also, don’t confuse JSX with HTML – e.g. inline event handlers in JSX use camelCase (`onClick`) and values in `{}`.

**Follow-up Questions:** How would you set up a project to use JSX (e.g. Babel/Webpack config)? What happens if you omit the second argument in `React.createElement`? (Hint: props object or null.) How does JSX relate to TypeScript’s TSX? 

### Explain the Virtual DOM. Why does React use it?

**Answer (concise):** The **Virtual DOM** is an in-memory representation of the UI’s DOM tree. React maintains a virtual DOM (usually as plain JavaScript objects) and, on updates, **diffs** (reconciles) it with the previous virtual DOM to compute minimal real DOM changes. This makes updates **efficient**, because React avoids costly direct DOM manipulation when many elements change. Instead, only the changed parts are updated【22†L135-L143】.

**Explanation:** Directly updating the browser DOM is relatively slow (especially in large trees). React’s Virtual DOM diff algorithm (an O(n) heuristic) speeds this up: when component state/props change, React re-renders components to a new virtual DOM. It then compares this new tree with the old one, finds the differences, and applies those changes to the real DOM【22†L135-L143】【15†L39-L47】. The algorithm assumes: (1) Elements of different types always produce different trees; (2) Keys hint stable identity. For example, if a `<div>` becomes a `<span>`, React recreates that subtree (with unmount/mount)【15†L55-L63】. If only attributes change, React updates just those attributes【15†L89-L98】. Keys in lists help React match items across renders to avoid re-creating nodes unnecessarily【15†L173-L178】.

**Benefits:** This improves performance because fewer DOM operations are needed. Virtual DOM also makes UI updates **declarative**: you just specify the new UI state, not DOM steps. However, there is some overhead of diffing and memory to hold two trees. In most cases the trade-off is positive: as [GreatFrontEnd] notes, Virtual DOM “improves performance by reducing costly direct DOM manipulations”【22†L135-L143】. Only in extremely frequent updates or huge trees might manual optimizations beat React’s diff (downside: extra memory and diff CPU cost)【22†L149-L153】.

**Diagram (Reconciliation Flow):** Below is a high-level flowchart of React’s diff (reconciliation) process when updating the DOM. It shows how React compares element types and children, and where keys are used:

```mermaid
flowchart TD
    A[Old Virtual DOM] --> B{Root element type same?}
    B -->|No| C[Destroy old tree, mount new tree from scratch]
    B -->|Yes| D{Is element a DOM node or a Component?}
    D -->|DOM| E[Update changed attributes on same DOM node]
    D -->|Component| F[Update component props, call render()]
    F --> G[Generate new child tree]
    E & G --> H[Recurse on children]
    H --> I{Lists/Arrays?}
    I -->|Yes (keys)| J[Match children by key, update/insert/remove minimal nodes]
    I -->|No| K[Match children by index (fallback, can re-render more)]
    J & K --> L[Patch real DOM]
    C --> L
```
*(This flow abstracts React’s reconciliation logic: if element types differ, React tears down and rebuilds; if same type, it updates and recurses. Keys optimize matching in lists.)*

**Example:** Consider updating a list of items. Without keys, inserting an item at start may re-render all items. With unique keys, React knows to insert the new item and leave others intact. For example:
```jsx
// Without keys: bad for dynamic lists
<ul>
  {items.map((item, idx) => <li key={idx}>{item}</li>)}
</ul>

// With stable keys: better
<ul>
  {items.map(item => <li key={item.id}>{item.text}</li>)}
</ul>
```
Using indices (`key={idx}`) can cause React to misidentify items when order changes【23†L204-L209】. The `key` prop tells React which virtual DOM element corresponds to which real DOM node, avoiding unnecessary re-renders【23†L189-L193】【23†L204-L209】.

**Common Pitfalls:** Not providing keys (or using non-unique ones) in lists. Assuming Virtual DOM means React always fast; in some rare cases (massive lists, animations) manual DOM handling or virtualization might be needed. Also, keep in mind React’s diff is *heuristic* (O(n)), not a perfect tree-diff (which would be O(n³) and infeasible)【15†L35-L43】.

**Follow-up Questions:** How does React’s diff algorithm achieve O(n) complexity? (Discuss the two assumptions.) What happens internally when element type changes? (It unmounts old and remounts new【15†L55-L63】.) How do keys affect performance and bugs? What is React Fiber and how does it relate to rendering scheduling?  

### What are props and state in React? How do they differ?

**Answer (concise):** **Props** (short for properties) are inputs to a component passed from a parent; they are **read-only** (immutable) inside the child. **State** is internal to a component; it can change over time (via `setState` or the `useState` hook). Props configure a component (like function arguments), while state holds dynamic data that affects rendering. Changes in either trigger re-renders, but props come from above, state is owned within.

**Explanation:** In React’s data flow, parent components pass **props** downward to children. For example `<Greeting name="Alice" />` passes the prop `name`. The child uses `props.name`, but should never mutate it. Props make components reusable and configurable. In contrast, **state** is data local to the component (or managed by hooks) that the component itself can update (for example, a `count` in a counter component). State is usually managed via `this.setState` in class components or the `useState` hook in functions. When state changes, React re-renders the component (and its subtree) to reflect the new state. 

Props vs state differences: 
- Props are passed in (immutable), while state is managed inside (mutable through setters). 
- Parent-to-child vs internal.
- Multiple components may share state by lifting it up or using context, but each component’s `state` is private (unless explicitly passed or exposed).

**Example:** A simple counter component:
```jsx
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(c => c + 1)}>Click me</button>
    </div>
  );
}
// Usage: <Counter initialCount={0} />
```
Here, `initialCount` is a prop (immutable inside), and `count` is state (updated on each click). Notice we use the updater form `setCount(c => c + 1)` to avoid stale closure problems.

**Common Pitfalls:** Trying to modify props directly (like `props.value = something`) – props are read-only. Expecting state updates to happen immediately (they’re async and batched). Not including all needed dependencies in state update functions. Using component state when a global store/context makes more sense can lead to convoluted prop drilling.

**Follow-up Questions:** When should you lift state up to a common ancestor? Compare using props vs React Context for passing data. How does React decide when to re-render on prop/state change? (Answer: shallow comparison for PureComponent/memo, always for state setters.)

### What is the difference between controlled and uncontrolled components (in forms)?

**Answer (concise):** In **controlled** components, form element values (like `<input>`) are bound to React state: the component holds the source of truth and updates via events. In **uncontrolled** components, the DOM maintains its own state and you query the value via refs when needed. Controlled components allow React to control form data (via `value` and `onChange`), making validation and testing easier. Uncontrolled components are simpler for basic cases but offer less control.

**Explanation:** In a controlled input, you do:
```jsx
const [text, setText] = useState('');
<input value={text} onChange={e => setText(e.target.value)} />;
```
Here, `text` in state is the single source of truth. Every keystroke updates state, and the input displays it. This ensures React always knows the input’s value and can enforce rules (e.g. uppercase, validation). In contrast, an uncontrolled input:
```jsx
const ref = useRef();
<input type="text" defaultValue="Hi" ref={ref} />;
```
Here, React does not update state on each keystroke; the DOM input manages itself. You get its value later via `ref.current.value`. 

Controlled components are generally recommended in React, especially for complex forms, because they align UI with state and make components predictable. Uncontrolled components can be fine for simple or legacy code, but using them means side-stepping React’s data flow and often needing refs or the DOM API.

**Example (controlled vs uncontrolled):** From [GreatFrontEnd]【23†L275-L283】:
```jsx
// Controlled:
function ControlledInput() {
  const [value, setValue] = React.useState('');
  return (
    <input 
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}

// Uncontrolled:
function UncontrolledInput() {
  const inputRef = React.useRef();
  return <input type="text" ref={inputRef} />;
}
// Later, you might read inputRef.current.value
```

**Common Pitfalls:** Forgetting to add `onChange` when you use `value` leads to a read-only field. Setting `defaultValue` vs `value` improperly. Uncontrolled inputs often need extra validation later. Mixing controlled/uncontrolled for the same field can cause warnings. Also, updating state directly from props can cause stale controlled values.

**Follow-up Questions:** How do you manage form state in large forms? (Mention libraries like Formik or React Hook Form.) How does validation fit into controlled components? What happens if you set `value` but no `onChange`?

### What are React Fragments and when would you use them?

**Answer (concise):** **Fragments** (`<></>` or `<React.Fragment>`) let you group multiple JSX elements without adding extra nodes to the DOM. They are useful when a component must return several siblings but you don’t want an extra wrapper `<div>`. Fragments render their children directly. You can also pass a `key` to a Fragment (using `<Fragment key=...>` form) when mapping arrays.

**Explanation:** In JSX, a component must return a single root element. Often you would wrap siblings in a `<div>` or other container. Fragments allow grouping without a container, avoiding extra layout or CSS issues. For example:
```jsx
function Columns() {
  return (
    <>
      <ColumnA />
      <ColumnB />
    </>
  );
}
```
This renders just `ColumnA` and `ColumnB` as siblings in the DOM (no wrapper `<div>`). You can also use `<React.Fragment key={id}>…</React.Fragment>` if you need to give a key when rendering lists of fragments【26†L411-L420】. 

Fragments support taking refs in very new versions of React, but traditionally they are just invisible wrappers. They improve markup cleanliness and are essentially free compared to extra DOM nodes. The official docs explain that fragments are for grouping elements without extra nodes【23†L168-L173】.

**Common Pitfalls:** Forgetting that the shorthand `<>...</>` doesn’t accept attributes (only the long form `<Fragment>` can take a `key`). Also, forgetting that fragments do add up in virtual DOM hierarchy (though not in real DOM). In very old React versions, `<></>` wasn’t available and `<Fragment>` was needed. Now both work.

**Follow-up Questions:** How do you pass a ref to a fragment? (Current React provides a way with `Fragment` refs in unstable releases [26†L539-L548], but normally you can’t attach refs to `<>`.) What if you have multiple elements in a list – how do keys on fragments work? (You must use `<Fragment key={...}>`.)

### What is the `key` prop and why is it important in lists?

**Answer (concise):** The **`key` prop** is a special string attribute you add to React elements in a list (array) to give them a stable identity. Keys help React **identify which items have changed, been added, or removed**. When the list re-renders, matching by key allows React to reuse DOM nodes for unchanged items and only apply minimal updates. Without unique keys, React may unnecessarily re-render or mis-order items, causing performance issues or bugs【23†L189-L193】【23†L204-L209】.

**Explanation:** Imagine rendering a list of components in a `.map()`. If you don’t provide keys (or use non-unique ones like the array index), React will fall back to using index which may confuse it when items move. For example, inserting or deleting an item at the start of a list will cause React to think *every* subsequent item changed (if keys are indices). In contrast, if each `<li>` has `key={item.id}`, React will match items by `id` and only insert/remove what changed【23†L204-L209】. The [GreatFrontEnd] article notes: “Without unique keys, React might re-render elements unnecessarily, causing performance problems and potential bugs.”【23†L191-L194】. And specifically, *using array indices as keys* is warned against: it can lead to incorrect data displays when items reorder or delete【23†L204-L209】.

**Example:** 
```jsx
// Bad: using index (unstable if items reorder)
{items.map((item, idx) => (
  <ListItem key={idx} value={item} />
))}

// Good: using stable unique key (like an ID)
{items.map(item => (
  <ListItem key={item.id} value={item} />
))}
```
If an item is removed in the middle, the second approach preserves identity.

**Common Pitfalls:** Never use `Math.random()` or Date.now() as keys – keys must be consistent between renders. Using index as key is okay only if the list is static or not reordered. Forgetting keys entirely causes React warnings, and it will use array index by default (likely not what you want). Keys should be stable, predictable, and unique *among siblings* (it’s fine if two different lists use the same key values separately).

**Follow-up Questions:** What rules does React use to compare keys? (It uses strict equality on previous vs new keys.) How do keyed Fragments work? (You must use `<Fragment key={...}>` in loops [26†L473-L482].) Can non-unique keys ever cause data mixing or bug (e.g. in forms)? What happens if two children have the   );
}

// Without JSX (equivalent):
function Welcome({ user }) {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, `Welcome, ${user.name}!`),
    React.createElement('p', null, `Your email is: ${user.email}`)
  );
}
```
This shows how JSX is just syntactic sugar over `React.createElement`.

**Common Pitfalls:** Remember JSX returns only *one root element* (wrap siblings in a `<div>` or `<>` fragment). The `class` attribute is `className` in JSX. Infamous errors: forgetting to import React (in older versions) or misplacing parentheses in multiline JSX. Also, don’t confuse JSX with HTML – e.g. inline event handlers in JSX use camelCase (`onClick`) and values in `{}`.

**Follow-up Questions:** How would you set up a project to use JSX (e.g. Babel/Webpack config)? What happens if you omit the second argument in `React.createElement`? (Hint: props object or null.) How does JSX relate to TypeScript’s TSX? 

### Explain the Virtual DOM. Why does React use it?

**Answer (concise):** The **Virtual DOM** is an in-memory representation of the UI’s DOM tree. React maintains a virtual DOM (usually as plain JavaScript objects) and, on updates, **diffs** (reconciles) it with the previous virtual DOM to compute minimal real DOM changes. This makes updates **efficient**, because React avoids costly direct DOM manipulation when many elements change. Instead, only the changed parts are updated【22†L135-L143】.

**Explanation:** Directly updating the browser DOM is relatively slow (especially in large trees). React’s Virtual DOM diff algorithm (an O(n) heuristic) speeds this up: when component state/props change, React re-renders components to a new virtual DOM. It then compares this new tree with the old one, finds the differences, and applies those changes to the real DOM【22†L135-L143】【15†L39-L47】. The algorithm assumes: (1) Elements of different types always produce different trees; (2) Keys hint stable identity. For example, if a `<div>` becomes a `<span>`, React recreates that subtree (with unmount/mount)【15†L55-L63】. If only attributes change, React updates just those attributes【15†L89-L98】. Keys in lists help React match items across renders to avoid re-creating nodes unnecessarily【15†L173-L178】.

**Benefits:** This improves performance because fewer DOM operations are needed. Virtual DOM also makes UI updates **declarative**: you just specify the new UI state, not DOM steps. However, there is some overhead of diffing and memory to hold two trees. In most cases the trade-off is positive: as [GreatFrontEnd] notes, Virtual DOM “improves performance by reducing costly direct DOM manipulations”【22†L135-L143】. Only in extremely frequent updates or huge trees might manual optimizations beat React’s diff (downside: extra memory and diff CPU cost)【22†L149-L153】.

**Diagram (Reconciliation Flow):** Below is a high-level flowchart of React’s diff (reconciliation) process when updating the DOM. It shows how React compares element types and children, and where keys are used:

```mermaid
flowchart TD
    A[Old Virtual DOM] --> B{Root element type same?}
    B -->|No| C[Destroy old tree, mount new tree from scratch]
    B -->|Yes| D{Is element a DOM node or a Component?}
    D -->|DOM| E[Update changed attributes on same DOM node]
    D -->|Component| F[Update component props, call render()]
    F --> G[Generate new child tree]
    E & G --> H[Recurse on children]
    H --> I{Lists/Arrays?}
    I -->|Yes (keys)| J[Match children by key, update/insert/remove minimal nodes]
    I -->|No| K[Match children by index (fallback, can re-render more)]
    J & K --> L[Patch real DOM]
    C --> L
```
*(This flow abstracts React’s reconciliation logic: if element types differ, React tears down and rebuilds; if same type, it updates and recurses. Keys optimize matching in lists.)*

**Example:** Consider updating a list of items. Without keys, inserting an item at start may re-render all items. With unique keys, React knows to insert the new item and leave others intact. For example:
```jsx
// Without keys: bad for dynamic lists
<ul>
  {items.map((item, idx) => <li key={idx}>{item}</li>)}
</ul>

// With stable keys: better
<ul>
  {items.map(item => <li key={item.id}>{item.text}</li>)}
</ul>
```
Using indices (`key={idx}`) can cause React to misidentify items when order changes【23†L204-L209】. The `key` prop tells React which virtual DOM element corresponds to which real DOM node, avoiding unnecessary re-renders【23†L189-L193】【23†L204-L209】.

**Common Pitfalls:** Not providing keys (or using non-unique ones) in lists. Assuming Virtual DOM means React always fast; in some rare cases (massive lists, animations) manual DOM handling or virtualization might be needed. Also, keep in mind React’s diff is *heuristic* (O(n)), not a perfect tree-diff (which would be O(n³) and infeasible)【15†L35-L43】.

**Follow-up Questions:** How does React’s diff algorithm achieve O(n) complexity? (Discuss the two assumptions.) What happens internally when element type changes? (It unmounts old and remounts new【15†L55-L63】.) How do keys affect performance and bugs? What is React Fiber and how does it relate to rendering scheduling?  

### What are props and state in React? How do they differ?

**Answer (concise):** **Props** (short for properties) are inputs to a component passed from a parent; they are **read-only** (immutable) inside the child. **State** is internal to a component; it can change over time (via `setState` or the `useState` hook). Props configure a component (like function arguments), while state holds dynamic data that affects rendering. Changes in either trigger re-renders, but props come from above, state is owned within.

**Explanation:** In React’s data flow, parent components pass **props** downward to children. For example `<Greeting name="Alice" />` passes the prop `name`. The child uses `props.name`, but should never mutate it. Props make components reusable and configurable. In contrast, **state** is data local to the component (or managed by hooks) that the component itself can update (for example, a `count` in a counter component). State is usually managed via `this.setState` in class components or the `useState` hook in functions. When state changes, React re-renders the component (and its subtree) to reflect the new state. 

Props vs state differences: 
- Props are passed in (immutable), while state is managed inside (mutable through setters). 
- Parent-to-child vs internal.
- Multiple components may share state by lifting it up or using context, but each component’s `state` is private (unless explicitly passed or exposed).

**Example:** A simple counter component:
```jsx
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(c => c + 1)}>Click me</button>
    </div>
  );
}
// Usage: <Counter initialCount={0} />
```
Here, `initialCount` is a prop (immutable inside), and `count` is state (updated on each click). Notice we use the updater form `setCount(c => c + 1)` to avoid stale closure problems.

**Common Pitfalls:** Trying to modify props directly (like `props.value = something`) – props are read-only. Expecting state updates to happen immediately (they’re async and batched). Not including all needed dependencies in state update functions. Using component state when a global store/context makes more sense can lead to convoluted prop drilling.

**Follow-up Questions:** When should you lift state up to a common ancestor? Compare using props vs React Context for passing data. How does React decide when to re-render on prop/state change? (Answer: shallow comparison for PureComponent/memo, always for state setters.)

### What is the difference between controlled and uncontrolled components (in forms)?

**Answer (concise):** In **controlled** components, form element values (like `<input>`) are bound to React state: the component holds the source of truth and updates via events. In **uncontrolled** components, the DOM maintains its own state and you query the value via refs when needed. Controlled components allow React to control form data (via `value` and `onChange`), making validation and testing easier. Uncontrolled components are simpler for basic cases but offer less control.

**Explanation:** In a controlled input, you do:
```jsx
const [text, setText] = useState('');
<input value={text} onChange={e => setText(e.target.value)} />;
```
Here, `text` in state is the single source of truth. Every keystroke updates state, and the input displays it. This ensures React always knows the input’s value and can enforce rules (e.g. uppercase, validation). In contrast, an uncontrolled input:
```jsx
const ref = useRef();
<input type="text" defaultValue="Hi" ref={ref} />;
```
Here, React does not update state on each keystroke; the DOM input manages itself. You get its value later via `ref.current.value`. 

Controlled components are generally recommended in React, especially for complex forms, because they align UI with state and make components predictable. Uncontrolled components can be fine for simple or legacy code, but using them means side-stepping React’s data flow and often needing refs or the DOM API.

**Example (controlled vs uncontrolled):** From [GreatFrontEnd]【23†L275-L283】:
```jsx
// Controlled:
function ControlledInput() {
  const [value, setValue] = React.useState('');
  return (
    <input 
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}

// Uncontrolled:
function UncontrolledInput() {
  const inputRef = React.useRef();
  return <input type="text" ref={inputRef} />;
}
// Later, you might read inputRef.current.value
```

**Common Pitfalls:** Forgetting to add `onChange` when you use `value` leads to a read-only field. Setting `defaultValue` vs `value` improperly. Uncontrolled inputs often need extra validation later. Mixing controlled/uncontrolled for the same field can cause warnings. Also, updating state directly from props can cause stale controlled values.

**Follow-up Questions:** How do you manage form state in large forms? (Mention libraries like Formik or React Hook Form.) How does validation fit into controlled components? What happens if you set `value` but no `onChange`?

### What are React Fragments and when would you use them?

**Answer (concise):** **Fragments** (`<></>` or `<React.Fragment>`) let you group multiple JSX elements without adding extra nodes to the DOM. They are useful when a component must return several siblings but you don’t want an extra wrapper `<div>`. Fragments render their children directly. You can also pass a `key` to a Fragment (using `<Fragment key=...>` form) when mapping arrays.

**Explanation:** In JSX, a component must return a single root element. Often you would wrap siblings in a `<div>` or other container. Fragments allow grouping without a container, avoiding extra layout or CSS issues. For example:
```jsx
function Columns() {
  return (
    <>
      <ColumnA />
      <ColumnB />
    </>
  );
}
```
This renders just `ColumnA` and `ColumnB` as siblings in the DOM (no wrapper `<div>`). You can also use `<React.Fragment key={id}>…</React.Fragment>` if you need to give a key when rendering lists of fragments【26†L411-L420】. 

Fragments support taking refs in very new versions of React, but traditionally they are just invisible wrappers. They improve markup cleanliness and are essentially free compared to extra DOM nodes. The official docs explain that fragments are for grouping elements without extra nodes【23†L168-L173】.

**Common Pitfalls:** Forgetting that the shorthand `<>...</>` doesn’t accept attributes (only the long form `<Fragment>` can take a `key`). Also, forgetting that fragments do add up in virtual DOM hierarchy (though not in real DOM). In very old React versions, `<></>` wasn’t available and `<Fragment>` was needed. Now both work.

**Follow-up Questions:** How do you pass a ref to a fragment? (Current React provides a way with `Fragment` refs in unstable releases [26†L539-L548], but normally you can’t attach refs to `<>`.) What if you have multiple elements in a list – how do keys on fragments work? (You must use `<Fragment key={...}>`.)

### What is the `key` prop and why is it important in lists?

**Answer (concise):** The **`key` prop** is a special string attribute you add to React elements in a list (array) to give them a stable identity. Keys help React **identify which items have changed, been added, or removed**. When the list re-renders, matching by key allows React to reuse DOM nodes for unchanged items and only apply minimal updates. Without unique keys, React may unnecessarily re-render or mis-order items, causing performance issues or bugs【23†L189-L193】【23†L204-L209】.

**Explanation:** Imagine rendering a list of components in a `.map()`. If you don’t provide keys (or use non-unique ones like the array index), React will fall back to using index which may confuse it when items move. For example, inserting or deleting an item at the start of a list will cause React to think *every* subsequent item changed (if keys are indices). In contrast, if each `<li>` has `key={item.id}`, React will match items by `id` and only insert/remove what changed【23†L204-L209】. The [GreatFrontEnd] article notes: “Without unique keys, React might re-render elements unnecessarily, causing performance problems and potential bugs.”【23†L191-L194】. And specifically, *using array indices as keys* is warned against: it can lead to incorrect data displays when items reorder or delete【23†L204-L209】.

**Example:** 
```jsx
// Bad: using index (unstable if items reorder)
{items.map((item, idx) => (
  <ListItem key={idx} value={item} />
))}

// Good: using stable unique key (like an ID)
{items.map(item => (
  <ListItem key={item.id} value={item} />
))}
```
If an item is removed in the middle, the second approach preserves identity.

**Common Pitfalls:** Never use `Math.random()` or Date.now() as keys – keys must be consistent between renders. Using index as key is okay only if the list is static or not reordered. Forgetting keys entirely causes React warnings, and it will use array index by default (likely not what you want). Keys should be stable, predictable, and unique *among siblings* (it’s fine if two different lists use the same key values separately).

**Follow-up Questions:** What rules does React use to compare keys? (It uses strict equality on previous vs new keys.) How do keyed Fragments work? (You must use `<Fragment key={...}>` in loops [26†L473-L482].) Can non-unique keys ever cause data mixing or bug (e.g. in forms)? What happens if two children have the     </div>
  );
}

// Without JSX (equivalent):
function Welcome({ user }) {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, `Welcome, ${user.name}!`),
    React.createElement('p', null, `Your email is: ${user.email}`)
  );
}
```
This shows how JSX is just syntactic sugar over `React.createElement`.

**Common Pitfalls:** Remember JSX returns only *one root element* (wrap siblings in a `<div>` or `<>` fragment). The `class` attribute is `className` in JSX. Infamous errors: forgetting to import React (in older versions) or misplacing parentheses in multiline JSX. Also, don’t confuse JSX with HTML – e.g. inline event handlers in JSX use camelCase (`onClick`) and values in `{}`.

**Follow-up Questions:** How would you set up a project to use JSX (e.g. Babel/Webpack config)? What happens if you omit the second argument in `React.createElement`? (Hint: props object or null.) How does JSX relate to TypeScript’s TSX? 

### Explain the Virtual DOM. Why does React use it?

**Answer (concise):** The **Virtual DOM** is an in-memory representation of the UI’s DOM tree. React maintains a virtual DOM (usually as plain JavaScript objects) and, on updates, **diffs** (reconciles) it with the previous virtual DOM to compute minimal real DOM changes. This makes updates **efficient**, because React avoids costly direct DOM manipulation when many elements change. Instead, only the changed parts are updated【22†L135-L143】.

**Explanation:** Directly updating the browser DOM is relatively slow (especially in large trees). React’s Virtual DOM diff algorithm (an O(n) heuristic) speeds this up: when component state/props change, React re-renders components to a new virtual DOM. It then compares this new tree with the old one, finds the differences, and applies those changes to the real DOM【22†L135-L143】【15†L39-L47】. The algorithm assumes: (1) Elements of different types always produce different trees; (2) Keys hint stable identity. For example, if a `<div>` becomes a `<span>`, React recreates that subtree (with unmount/mount)【15†L55-L63】. If only attributes change, React updates just those attributes【15†L89-L98】. Keys in lists help React match items across renders to avoid re-creating nodes unnecessarily【15†L173-L178】.

**Benefits:** This improves performance because fewer DOM operations are needed. Virtual DOM also makes UI updates **declarative**: you just specify the new UI state, not DOM steps. However, there is some overhead of diffing and memory to hold two trees. In most cases the trade-off is positive: as [GreatFrontEnd] notes, Virtual DOM “improves performance by reducing costly direct DOM manipulations”【22†L135-L143】. Only in extremely frequent updates or huge trees might manual optimizations beat React’s diff (downside: extra memory and diff CPU cost)【22†L149-L153】.

**Diagram (Reconciliation Flow):** Below is a high-level flowchart of React’s diff (reconciliation) process when updating the DOM. It shows how React compares element types and children, and where keys are used:

```mermaid
flowchart TD
    A[Old Virtual DOM] --> B{Root element type same?}
    B -->|No| C[Destroy old tree, mount new tree from scratch]
    B -->|Yes| D{Is element a DOM node or a Component?}
    D -->|DOM| E[Update changed attributes on same DOM node]
    D -->|Component| F[Update component props, call render()]
    F --> G[Generate new child tree]
    E & G --> H[Recurse on children]
    H --> I{Lists/Arrays?}
    I -->|Yes (keys)| J[Match children by key, update/insert/remove minimal nodes]
    I -->|No| K[Match children by index (fallback, can re-render more)]
    J & K --> L[Patch real DOM]
    C --> L
```
*(This flow abstracts React’s reconciliation logic: if element types differ, React tears down and rebuilds; if same type, it updates and recurses. Keys optimize matching in lists.)*

**Example:** Consider updating a list of items. Without keys, inserting an item at start may re-render all items. With unique keys, React knows to insert the new item and leave others intact. For example:
```jsx
// Without keys: bad for dynamic lists
<ul>
  {items.map((item, idx) => <li key={idx}>{item}</li>)}
</ul>

// With stable keys: better
<ul>
  {items.map(item => <li key={item.id}>{item.text}</li>)}
</ul>
```
Using indices (`key={idx}`) can cause React to misidentify items when order changes【23†L204-L209】. The `key` prop tells React which virtual DOM element corresponds to which real DOM node, avoiding unnecessary re-renders【23†L189-L193】【23†L204-L209】.

**Common Pitfalls:** Not providing keys (or using non-unique ones) in lists. Assuming Virtual DOM means React always fast; in some rare cases (massive lists, animations) manual DOM handling or virtualization might be needed. Also, keep in mind React’s diff is *heuristic* (O(n)), not a perfect tree-diff (which would be O(n³) and infeasible)【15†L35-L43】.

**Follow-up Questions:** How does React’s diff algorithm achieve O(n) complexity? (Discuss the two assumptions.) What happens internally when element type changes? (It unmounts old and remounts new【15†L55-L63】.) How do keys affect performance and bugs? What is React Fiber and how does it relate to rendering scheduling?  

### What are props and state in React? How do they differ?

**Answer (concise):** **Props** (short for properties) are inputs to a component passed from a parent; they are **read-only** (immutable) inside the child. **State** is internal to a component; it can change over time (via `setState` or the `useState` hook). Props configure a component (like function arguments), while state holds dynamic data that affects rendering. Changes in either trigger re-renders, but props come from above, state is owned within.

**Explanation:** In React’s data flow, parent components pass **props** downward to children. For example `<Greeting name="Alice" />` passes the prop `name`. The child uses `props.name`, but should never mutate it. Props make components reusable and configurable. In contrast, **state** is data local to the component (or managed by hooks) that the component itself can update (for example, a `count` in a counter component). State is usually managed via `this.setState` in class components or the `useState` hook in functions. When state changes, React re-renders the component (and its subtree) to reflect the new state. 

Props vs state differences: 
- Props are passed in (immutable), while state is managed inside (mutable through setters). 
- Parent-to-child vs internal.
- Multiple components may share state by lifting it up or using context, but each component’s `state` is private (unless explicitly passed or exposed).

**Example:** A simple counter component:
```jsx
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(c => c + 1)}>Click me</button>
    </div>
  );
}
// Usage: <Counter initialCount={0} />
```
Here, `initialCount` is a prop (immutable inside), and `count` is state (updated on each click). Notice we use the updater form `setCount(c => c + 1)` to avoid stale closure problems.

**Common Pitfalls:** Trying to modify props directly (like `props.value = something`) – props are read-only. Expecting state updates to happen immediately (they’re async and batched). Not including all needed dependencies in state update functions. Using component state when a global store/context makes more sense can lead to convoluted prop drilling.

**Follow-up Questions:** When should you lift state up to a common ancestor? Compare using props vs React Context for passing data. How does React decide when to re-render on prop/state change? (Answer: shallow comparison for PureComponent/memo, always for state setters.)

### What is the difference between controlled and uncontrolled components (in forms)?

**Answer (concise):** In **controlled** components, form element values (like `<input>`) are bound to React state: the component holds the source of truth and updates via events. In **uncontrolled** components, the DOM maintains its own state and you query the value via refs when needed. Controlled components allow React to control form data (via `value` and `onChange`), making validation and testing easier. Uncontrolled components are simpler for basic cases but offer less control.

**Explanation:** In a controlled input, you do:
```jsx
const [text, setText] = useState('');
<input value={text} onChange={e => setText(e.target.value)} />;
```
Here, `text` in state is the single source of truth. Every keystroke updates state, and the input displays it. This ensures React always knows the input’s value and can enforce rules (e.g. uppercase, validation). In contrast, an uncontrolled input:
```jsx
const ref = useRef();
<input type="text" defaultValue="Hi" ref={ref} />;
```
Here, React does not update state on each keystroke; the DOM input manages itself. You get its value later via `ref.current.value`. 

Controlled components are generally recommended in React, especially for complex forms, because they align UI with state and make components predictable. Uncontrolled components can be fine for simple or legacy code, but using them means side-stepping React’s data flow and often needing refs or the DOM API.

**Example (controlled vs uncontrolled):** From [GreatFrontEnd]【23†L275-L283】:
```jsx
// Controlled:
function ControlledInput() {
  const [value, setValue] = React.useState('');
  return (
    <input 
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}

// Uncontrolled:
function UncontrolledInput() {
  const inputRef = React.useRef();
  return <input type="text" ref={inputRef} />;
}
// Later, you might read inputRef.current.value
```

**Common Pitfalls:** Forgetting to add `onChange` when you use `value` leads to a read-only field. Setting `defaultValue` vs `value` improperly. Uncontrolled inputs often need extra validation later. Mixing controlled/uncontrolled for the same field can cause warnings. Also, updating state directly from props can cause stale controlled values.

**Follow-up Questions:** How do you manage form state in large forms? (Mention libraries like Formik or React Hook Form.) How does validation fit into controlled components? What happens if you set `value` but no `onChange`?

### What are React Fragments and when would you use them?

**Answer (concise):** **Fragments** (`<></>` or `<React.Fragment>`) let you group multiple JSX elements without adding extra nodes to the DOM. They are useful when a component must return several siblings but you don’t want an extra wrapper `<div>`. Fragments render their children directly. You can also pass a `key` to a Fragment (using `<Fragment key=...>` form) when mapping arrays.

**Explanation:** In JSX, a component must return a single root element. Often you would wrap siblings in a `<div>` or other container. Fragments allow grouping without a container, avoiding extra layout or CSS issues. For example:
```jsx
function Columns() {
  return (
    <>
      <ColumnA />
      <ColumnB />
    </>
  );
}
```
This renders just `ColumnA` and `ColumnB` as siblings in the DOM (no wrapper `<div>`). You can also use `<React.Fragment key={id}>…</React.Fragment>` if you need to give a key when rendering lists of fragments【26†L411-L420】. 

Fragments support taking refs in very new versions of React, but traditionally they are just invisible wrappers. They improve markup cleanliness and are essentially free compared to extra DOM nodes. The official docs explain that fragments are for grouping elements without extra nodes【23†L168-L173】.

**Common Pitfalls:** Forgetting that the shorthand `<>...</>` doesn’t accept attributes (only the long form `<Fragment>` can take a `key`). Also, forgetting that fragments do add up in virtual DOM hierarchy (though not in real DOM). In very old React versions, `<></>` wasn’t available and `<Fragment>` was needed. Now both work.

**Follow-up Questions:** How do you pass a ref to a fragment? (Current React provides a way with `Fragment` refs in unstable releases [26†L539-L548], but normally you can’t attach refs to `<>`.) What if you have multiple elements in a list – how do keys on fragments work? (You must use `<Fragment key={...}>`.)

### What is the `key` prop and why is it important in lists?

**Answer (concise):** The **`key` prop** is a special string attribute you add to React elements in a list (array) to give them a stable identity. Keys help React **identify which items have changed, been added, or removed**. When the list re-renders, matching by key allows React to reuse DOM nodes for unchanged items and only apply minimal updates. Without unique keys, React may unnecessarily re-render or mis-order items, causing performance issues or bugs【23†L189-L193】【23†L204-L209】.

**Explanation:** Imagine rendering a list of components in a `.map()`. If you don’t provide keys (or use non-unique ones like the array index), React will fall back to using index which may confuse it when items move. For example, inserting or deleting an item at the start of a list will cause React to think *every* subsequent item changed (if keys are indices). In contrast, if each `<li>` has `key={item.id}`, React will match items by `id` and only insert/remove what changed【23†L204-L209】. The [GreatFrontEnd] article notes: “Without unique keys, React might re-render elements unnecessarily, causing performance problems and potential bugs.”【23†L191-L194】. And specifically, *using array indices as keys* is warned against: it can lead to incorrect data displays when items reorder or delete【23†L204-L209】.

**Example:** 
```jsx
// Bad: using index (unstable if items reorder)
{items.map((item, idx) => (
  <ListItem key={idx} value={item} />
))}

// Good: using stable unique key (like an ID)
{items.map(item => (
  <ListItem key={item.id} value={item} />
))}
```
If an item is removed in the middle, the second approach preserves identity.

**Common Pitfalls:** Never use `Math.random()` or Date.now() as keys – keys must be consistent between renders. Using index as key is okay only if the list is static or not reordered. Forgetting keys entirely causes React warnings, and it will use array index by default (likely not what you want). Keys should be stable, predictable, and unique *among siblings* (it’s fine if two different lists use the same key values separately).

**Follow-up Questions:** What rules does React use to compare keys? (It uses strict equality on previous vs new keys.) How do keyed Fragments work? (You must use `<Fragment key={...}>` in loops [26†L473-L482].) Can non-unique keys ever cause data mixing or bug (e.g. in forms)? What happens if two children have the 
