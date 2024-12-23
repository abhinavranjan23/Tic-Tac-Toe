# Tic Tac Toe Game

## Description

This is a fully responsive Tic Tac Toe game built with JavaScript, React, and Tailwind CSS. The game provides a simple, interactive interface where two players can take turns to play. It includes animations for player moves, congratulatory messages for the winner, and an automatic game reset after the game ends. Additionally, it features a "Reset" button to restart the game at any point.

## Features

- Fully responsive design for desktop and mobile screens.
- Interactive grid with animations for player moves.
- Displays a congratulatory message when a player wins.
- Automatic game reset after a brief countdown.
- Manual reset functionality with a "Reset" button.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsiveness.
- **Parcel**: For bundling and optimizing the application.
- **Firebase Hosting**: For deploying the game online.

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Tic-Tac-Toe
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Build and Deploy

1. Build the project for production:
   ```bash
   npm run build
   ```
2. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## Usage

- Open the game in your browser.
- Two players take turns clicking on the grid.
- The first player to align three of their marks (vertically, horizontally, or diagonally) wins.
- A message will appear announcing the winner and the game will reset automatically after a countdown.
- Click the "Reset" button at any time to restart the game manually.

## Demo

[Play the game here](https://tic-tac-toe-c230f.web.app)

## Folder Structure

```
Tic-Tac-Toe/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Board.js
│   │   ├── Block.js
│   ├── utils/
│   │   ├── winPattern.js
│   │   ├── useGameFunc.js
│   ├── App.js
│   ├── index.js
├── package.json
└── tailwind.config.js
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Enjoy the game and happy coding!
