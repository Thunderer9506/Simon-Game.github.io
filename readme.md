# Simon-Game

A simple browser-based version of the classic Simon memory game — remember the sequence of blinking tiles to stay in the game!

## Live Demo

You can try it out live here: **[Insert your hosted demo link, e.g., GitHub Pages or CodeSandbox]**

Alternatively, clone this repo and open `index.html` in your browser to play locally.

## Features

- Four colored tiles that blink in a sequence
- Randomized sequences increasing in length
- Immediate feedback when a wrong tile is pressed (e.g., “Game Over!” or sound)
- Score tracking (optional — depends on implementation)

## Getting Started

### Prerequisites

A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Thunderer9506/Simon-Game.git
   ```

2. Navigate into the project directory:
   ```bash
   cd Simon-Game
   ```

3. Just run the index.html file or use `golive` extenstion

## How to Play

1. Click the **Start** button to begin.
2. Watch the blinking sequence of colored tiles.
3. After the sequence plays, reproduce it by clicking the tiles in the correct order.
4. If you succeed, the sequence grows longer and becomes more challenging.
5. Mess up, and it’s **Game Over** — your score is how many rounds you completed.

## Project Structure

- `index.html`: Main HTML file
- `styles.css`: Styling and layout
- `game.js`: Game logic including sequence generation and input handling
- `sounds/`: Directory containing audio files (if any)

## Customization Ideas (Optional)

- Add difficulty levels (e.g., Easy, Medium, Hard)
- Add sound effects or theme music
- Implement high-score saving using `localStorage`
- Add visual flair (animations, timer)

## Credits & License

Created by **Thunderer9506**.

Feel free to modify, improve, or adapt this project.
