 Todo List (React + Vite)

Simple todo list app built with React and Vite. Tasks are managed in React state and persisted to localStorage.

## Features
- Add tasks
- Toggle complete/incomplete
- Delete tasks
- Persisted in browser localStorage

## Quick start

1. Install dependencies
```bash
cd /Users/anishgurung/Desktop/todo-list
npm install
```

2. Run development server (Vite)
```bash
npm run dev
```

3. Build for production
```bash
npm run build
```

4. Preview production build
```bash
npm run preview
```

## Project structure (src)

- src/
  - App.jsx — main app component: manages tasks, localStorage sync and renders the UI.
  - App.css — main styling for the app.
  - index.css — global CSS resets / base styles.
  - main.jsx — React entry file (mounts App).
  - assets/ — static assets (images, icons).
  - components/
    - TodoInput.jsx — input field + add button component.
    - TodoList.jsx — renders list of tasks and handles empty state.
    - TodoItem.jsx — single task item (toggle, delete UI).

## Data persistence
Tasks are stored in localStorage (key: `tasks`). Removing localStorage will clear saved tasks.

## Where to extend
- Add editing of tasks in TodoItem.jsx.
- Add filters (all/active/completed) in App.jsx and TodoList.jsx.
- Replace localStorage with backend sync.
