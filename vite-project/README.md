# Interactive Counter App

A simple yet interactive counter application built with React and Vite. This project demonstrates React fundamentals including component composition, state management, and event handling.

## Features

- **Counter Display**: Visual display of the current counter value with dynamic color coding:
  - Green for positive values
  - Red for negative values  
  - Gray for zero
- **Counter Controls**: Three action buttons:
  - Increment: Increase counter by the step value
  - Decrement: Decrease counter by the step value
  - Reset: Reset counter back to zero
- **Custom Step**: Adjust the increment/decrement step size with an input field
- **Component-Based Architecture**: Clean separation of concerns using modular React components

## Project Structure

```
vite-project/
├── src/
│   ├── components/
│   │   ├── Button.jsx           # Reusable button component
│   │   ├── CounterControls.jsx  # Control buttons container
│   │   └── CounterDisplay.jsx   # Counter display with color logic
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App styling
│   ├── index.css                # Global styling
│   └── main.jsx                 # Entry point
├── public/                       # Static assets
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server with hot module replacement (HMR):

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build the project for production:

```bash
npm run build
```

Output files will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Tech Stack

- **React 19.2.4**: UI library
- **Vite 8.0.1**: Build tool and dev server
- **JavaScript/JSX**: Programming language
- **CSS**: Styling
- **ESLint**: Code quality tool

## How It Works

The app maintains two pieces of state:
- `count`: The current counter value
- `step`: The increment/decrement step size

Users can modify the counter through button clicks or directly adjust the step value. The `CounterDisplay` component automatically applies color styling based on the counter value.

## Future Enhancements

- Local storage to persist counter state
- Undo/Redo functionality
- Keyboard shortcuts
- Animation effects
- Dark mode toggle
