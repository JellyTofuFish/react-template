# React + Vite + TypeScript Template

A modern, production-ready React template built with Vite, TypeScript, and comprehensive tooling for code quality and testing.

## Features

- ⚡ **Vite** - Lightning-fast build tool with HMR (Hot Module Replacement)
- 🎨 **React 19** - Latest React with concurrent features
- 📘 **TypeScript** - Strict type checking for safer code
- 🎯 **ESLint** - Comprehensive linting with TypeScript and React-specific rules
- ✨ **Prettier** - Code formatting consistency
- 🧪 **Jest** - Unit testing framework with React Testing Library
- 🎭 **Playwright** - End-to-end testing
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - High-quality React components
- 🔄 **Redux Toolkit** - State management
- 📝 **React Hook Form** - Efficient form handling
- ✔️ **Zod** - TypeScript-first schema validation
- 📱 **Responsive UI** - Mobile-first design patterns
- 🔗 **Path Aliases** - Cleaner import statements

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone or create the project
npm install

# Start development server
npm run dev

# Open http://localhost:3030 in your browser
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server on port 3030 |
| `npm run build` | Build for production with type checking |
| `npm run preview` | Preview production build on port 3031 |
| `npm run lint` | Run ESLint checks |
| `npm run format` | Check code formatting with Prettier |
| `npm run format:update` | Fix formatting issues automatically |
| `npm run unit` | Run Jest unit tests |
| `npm run unit:update` | Update test snapshots |
| `npm run e2e` | Run Playwright end-to-end tests |
| `npm run e2e:debug` | Debug Playwright tests |
| `npm run test` | Run all checks: lint, format, unit, and e2e |

## 📁 Project Structure

```
src/
├── main.css               # Global styles
├── vite-env.d.ts          # Vite type definitions
├── app/
│   ├── store.ts           # Redux store setup
│   ├── hooks.ts           # Custom Redux hooks
│   ├── main.tsx           # Entry point
│   └── App.tsx            # Root component
├── components/
│   ├── site-header.tsx    # Header component
│   ├── search-form.tsx    # Search form component
│   └── ui/                # shadcn/ui components
│       └── ...            # More UI components
├── features/
│   └── dashboard          # Main page feature
├── hooks/
│   └── use-mobile.ts      # Custom React hooks
└── lib/
    └── utils.ts           # Utility functions

test/
├── unit/                  # Jest unit tests
│   └── *.spec.tsx
└── e2e/                   # Playwright tests (optional)
```

## 🔧 Configuration

### TypeScript Configuration

- **Strict Mode**: Enabled for maximum type safety
- **Path Aliases**:
  - `@/*` → `./src/*`
  - `@test/*` → `./test/*`
  - `@asset/*` → `./asset/*`

### ESLint

The project uses the latest ESLint flat config with:
- TypeScript support with type-aware lint rules
- React-specific rules (react-x, react-dom, react-hooks)
- Prettier integration for code formatting
- JSON and Markdown linting

To enable stricter type checking, uncomment the type-checked configurations in [eslint.config.js](eslint.config.js).

### Prettier

Automatic code formatting with sensible defaults. Run `npm run format:update` to fix all formatting issues.

### Jest Testing

- Environment: jsdom (for DOM testing)
- Transform: ts-jest for TypeScript support
- Setup: [jest.setup.config.ts](jest.setup.config.ts)
- Test files: `test/unit/**/*.spec.{ts,tsx}`

### Playwright E2E Testing

- Configuration: [playwright.config.ts](playwright.config.ts)
- Supports multiple browsers
- Screenshots and videos on failure

## 🎨 Styling

### Tailwind CSS

- Utility-first CSS framework
- Integrated via `@tailwindcss/vite`
- CSS variables for theming (stone color base)
- Located in [src/main.css](src/main.css)

### shadcn/ui Components

Pre-configured components library built on Radix UI and Tailwind CSS:

```bash
# Add a new component (interactive UI)
npx shadcn-ui@latest add [component-name]
```

Popular components already included:
- Avatar, Button, Input, Label
- Form, Dropdown Menu, Tooltip
- Collapsible, Separator, Sheet
- Breadcrumb, Skeleton

## 📝 State Management

### Redux Toolkit

Configured for modern Redux development:
- Slice pattern for reducers
- Automatic action creators
- Built-in immer middleware

Example store structure:

```typescript
// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

// Configure store and hooks
export const store = configureStore({
  reducer: {
    // Add slices here
  }
})
```

## 📋 Forms and Validation

### React Hook Form + Zod

Efficient form handling with schema validation:

```typescript
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
})

export function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: schema.parse({}),
  })
  
  return <form onSubmit={handleSubmit(onSubmit)}>...</form>
}
```

## 🧪 Testing

### Unit Tests

```bash
# Run all unit tests
npm run unit

# Run tests in watch mode
npm run unit -- --watch

# Generate coverage report
npm run unit -- --coverage
```

### E2E Tests

```bash
# Run all tests
npm run e2e

# Run specific test file
npm run e2e test/e2e/example.spec.ts

# Debug mode with UI
npm run e2e:debug
```

## 🚀 Production Build

```bash
# Build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

The build process:
1. TypeScript compilation with strict checks
2. Vite optimization and bundling
3. Output in `dist/` directory
4. Ready for deployment

## 🔍 Code Quality

All checks must pass before production deployment:

```bash
# Run complete quality check
npm run test

# This includes:
npm run lint        # ESLint
npm run format      # Prettier
npm run unit        # Jest
npm run e2e         # Playwright
```

### Development Best Practices

1. **Type Safety**: Leverage TypeScript's strict mode
2. **Components**: Use functional components with hooks
3. **Styling**: Use Tailwind classes with `cn()` utility
4. **Forms**: Use React Hook Form with Zod validation
5. **State**: Use Redux for global state, React hooks for local state
6. **Testing**: Write unit tests for utilities, e2e tests for flows
7. **Performance**: Use React.memo and useMemo strategically

## 📚 Dependencies

### Core
- `react@19.1.0` - UI library
- `react-dom@19.1.0` - DOM rendering
- `typescript@5.8.3` - Type system

### Styling
- `tailwindcss@4.1.11` - CSS framework
- `@tailwindcss/vite@4.1.11` - Vite integration
- `tailwind-merge@3.3.1` - Tailwind class merging
- `class-variance-authority@0.7.1` - Component variants

### State & Forms
- `@reduxjs/toolkit@2.11.2` - State management
- `react-redux@9.2.0` - Redux bindings
- `react-hook-form@7.61.1` - Form handling
- `@hookform/resolvers@5.2.0` - Form validation resolvers
- `zod@4.0.10` - Schema validation

### UI Components
- `@radix-ui/react-*` - Headless UI components
- `lucide-react@0.532.0` - Icon library

### Utilities
- `clsx@2.1.1` - Conditional classnames
- `dotenv@17.2.3` - Environment variables

### Development Tools
- `vite@7.0.4` - Build tool
- `@vitejs/plugin-react@4.6.0` - React plugin
- `eslint@9.31.0` - Linting
- `prettier@3.8.1` - Code formatting
- `jest@30.0.5` - Testing
- `@playwright/test@1.54.2` - E2E testing

## 🤝 Contributing

Contributions are welcome! Please ensure:

1. All tests pass: `npm run test`
2. Code is properly formatted: `npm run format:update`
3. ESLint rules pass: `npm run lint`
4. TypeScript compiles without errors

## 📄 License

MIT

## 🔗 Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Jest](https://jestjs.io)
- [Playwright](https://playwright.dev)
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
