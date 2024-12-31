'use client';
import { useEffect, useState } from 'react';
import { Cell } from './Cell';
import { CELL_SIZE, SPACE_SIZE } from './constant';
import { getFlippable, getPuttable, put } from './function';

export default function Page() {
  const initialBoard: string[] = [
    'NNNNNNNN',
    'NNNNNNNN',
    'NNNNNNNN',
    'NNNBWNNN',
    'NNNWBNNN',
    'NNNNNNNN',
    'NNNNNNNN',
    'NNNNNNNN',
  ];

  const [player, setPlayer] = useState<'B' | 'W'>('B');
  const [board, setBoard] = useState<string[]>(initialBoard);
  const [puttable, setPuttable] = useState<string[]>([]);
  const [status, setStatus] = useState<'playing' | 'pass' | 'end'>('playing');

  useEffect(() => {
    console.log(initialBoard[0][0]);
  }, []);

  useEffect(() => {
    console.log('status', status);
  }, [status]);

  useEffect(() => {
    const puttable = getPuttable(board, player);
    setPuttable(puttable);

    if (puttable.length === 0) {
      if (status === 'pass') {
        // 前のプレイヤーも置けない場合、ゲーム終了
        setStatus('end');
        return;
      } else {
        // パス
        setStatus('pass');
        setTimeout(() => {
          setPlayer(player === 'B' ? 'W' : 'B');
        }, 1000);
      }
    } else {
      setStatus('playing');
    }
  }, [player]);

  const getLabel = () => {
    if (status === 'end') {
      return 'ゲーム終了';
    }
    if (status === 'pass') {
      return 'パス';
    }
    const playerName = player === 'B' ? '黒' : '白';
    return `${playerName}の番`;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <div>{getLabel()}</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(8, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(8, ${CELL_SIZE}px)`,
            gap: `${SPACE_SIZE}px`,
          }}
        >
          {board.map((row, i) =>
            row.split('').map((cell, j) => (
              <Cell
                key={`${i}-${j}`}
                state={cell === 'N' ? 'none' : cell === 'B' ? 'black' : 'white'}
                onClick={() => {
                  const flippable: string[] = getFlippable(
                    board,
                    player,
                    `${i}-${j}`
                  );
                  if (flippable.length === 0) {
                    return;
                  }
                  const newBoard = put(board, player, `${i}-${j}`);
                  setBoard(newBoard);
                  setPlayer(player === 'B' ? 'W' : 'B');
                }}
                disabled={!puttable.includes(`${i}-${j}`)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
