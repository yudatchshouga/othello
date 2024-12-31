import { CELL_SIZE } from './constant';
import { Piece } from './Piece';

type CellProps = {
  state: 'black' | 'white' | 'none';
  onClick: () => void;
  disabled: boolean;
};

export const Cell = (props: CellProps) => {
  const { state, onClick, disabled } = props;
  return (
    <button
      style={{
        width: `${CELL_SIZE}px`,
        height: `${CELL_SIZE}px`,
        backgroundColor: disabled ? '#008001' : '#00ff00',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {state === 'black' && <Piece color={'black'} />}
      {state === 'white' && <Piece color={'white'} />}
    </button>
  );
};
