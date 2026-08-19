export interface Player {
  name: string;
  symbol: string; // "X" or "O"
}

export interface ChatMessage {
  sender: string;
  text: string;
  timestamp: string; // C# DateTime arrives as an ISO string over JSON
}

export interface Game {
  roomCode: string;
  board: string;              // 9 characters, one per cell
  currentTurn: string;
  status: string;
  winner: string | null;      // null while the game is still running
  winningLine: string | null;
  players: Player[];
  messages: ChatMessage[];
}
