import "./App.css"
import Board from "./components/Board";
import React, {useState} from "react";

function App() {
    const [history, setHistory] = useState([{squares: Array(9).fill(null)}])
    const [isX, setIsX] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const calculateWinner = (squares) => {
        const LINES = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < LINES.length; i++) {
            const [a, b, c] = LINES[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    let current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    let status;

    if (winner) {
        status = 'Winner : ' + winner;
    } else {
        status = `Next player ${isX ? 'X' : `O`}`;
    }

    const handleClick = (i) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const newCurrent = newHistory[newHistory.length - 1];
        const newSquares = newCurrent.squares.slice();
        if (calculateWinner(newSquares) || newSquares[i]) {
            return;
        }
        newSquares[i] = isX ? 'X' : 'O';
        setHistory([...newHistory, {squares: newSquares}]);

        setIsX(prev => !prev);

        setStepNumber(newHistory.length);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setIsX(step % 2 === 0);
    };

    const moves = history.map((step, move) => {
        let text = move ?
            `Go to ${move}` :
            `Go to Start`;
        return (
            <li key={move}>
                <button className="move-button" onClick={() => jumpTo(move)}>{text}</button>
            </li>
        );
    });


    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div className="status">{status}</div>
                <ol style={{listStyle: 'none'}}>{moves}</ol>
            </div>
        </div>
    );
}

export default App;
