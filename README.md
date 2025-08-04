# Web Accessibility Todo List

A modern, accessible todo list application built with TypeScript and Vite, demonstrating best practices in web accessibility (WCAG 2.1 compliance).

## 🎯 Overview

This project showcases how to build an inclusive web application that works for everyone, including users with disabilities. The todo list features comprehensive accessibility implementations that ensure keyboard navigation, screen reader compatibility, and proper semantic HTML structure.

## ♿ Accessibility Features

### Keyboard Navigation

- Full keyboard accessibility with logical tab order
- Focus management with proper focus indicators
- Keyboard shortcuts for all interactive elements

### Screen Reader Support

- Semantic HTML structure with proper heading hierarchy
- ARIA labels and descriptions for interactive elements
- Descriptive text for icons and buttons
- Proper form labeling and associations

### Visual Accessibility

- High contrast color scheme
- Clear focus indicators
- Scalable typography
- Custom scrollbar styling for better visibility

### Interactive Elements

- Proper button and input semantics
- Dialog modal with backdrop for confirmation dialogs
- Form validation with accessible error messaging
- Task counter with live updates

## 🛠️ Technical Stack

- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Vanilla CSS** - Custom styling with accessibility considerations
- **HTML5** - Semantic markup with ARIA attributes

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- bun package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/BartoszButrymSoftwareMill/web-accessibility-todo-list.git
cd web-accessibility-todo-list
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
bun run build
```

Start the production server:

```bash
bun run preview
```

Open your browser and navigate to `http://localhost:4173`

## 📋 Features

- ✅ Add new tasks with form validation
- ✅ Mark tasks as complete/incomplete
- ✅ Delete individual tasks
- ✅ Clear all tasks at once
- ✅ Real-time task counter
- ✅ Responsive design
- ✅ Full keyboard navigation
- ✅ Screen reader optimized

## 🎨 Design Principles

The application follows inclusive design principles:

- **Perceivable**: Information is presented in ways users can perceive
- **Operable**: Interface components are operable by all users
- **Understandable**: Information and operation are understandable
- **Robust**: Content is robust enough to be interpreted by assistive technologies

## 🔧 Development

The codebase is structured for maintainability and accessibility:

- `src/main.ts` - Core application logic with accessibility considerations
- `src/utils.ts` - Utility functions including accessible SVG components
- `src/style.css` - Styling with focus on accessibility and usability
- `index.html` - Semantic HTML structure with proper ARIA attributes

## 📚 Learning Resources

This project serves as a practical example of implementing web accessibility. For more information on web accessibility standards, visit:

- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
