# Memory Card Game 🎮

A fun and interactive memory card game built with React where players test their memory by clicking on Pokémon cards without repeating the same card twice.

## 🎯 Game Features

- Dynamic card shuffling after each click
- Real-time score tracking
- Best score persistence
- Game over modal with score summary
- Responsive grid layout
- Pokémon cards fetched from PokéAPI

## 🛠️ Built With

- [React](https://react.dev/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [PokéAPI](https://pokeapi.co/) - RESTful Pokémon API
- CSS3 - Styling and animations

## [Live Version](https://memory-card-game-2ft.pages.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```
git clone git@github.com:parikhitm/Memory-Card-Game.git
```
2. Navigate to project directory
```
cd memory-card-game
```
3. Install dependencies
```
npm install
```
4. Start development server
```
npm run dev
```
5. Open http://localhost:5173 in your browser

## 🎮 How to Play
1. Click on any card to begin
2. Each click shuffles the cards randomly
3. Try to click all cards exactly once
4. If you click the same card twice, game over!
5. Try to beat your best score

## 🔧 Scripts
 - ```npm run dev``` - Start development server
 - ```npm run build``` - Build for production
 - ```npm run preview``` - Preview production build
 - ```npm run lint``` - Run ESLint

## 📁 Project Structure
```
memory-card-game/
├── src/
│   ├── App.jsx        # Main game component
│   ├── App.css        # Game styles
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── public/
├── index.html
└── package.json
```

## ✨ Features
 - Responsive design works on both desktop and mobile
 - Smooth card animations
 - User-friendly game over modal
 - Score tracking system
 - Modern yellow and red color scheme
 - Double-bordered score displays
