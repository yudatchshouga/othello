import { CELL_SIZE } from './constant';

type PieceProps = {
  color: string;
};
export const Piece = (props: PieceProps) => {
  const { color } = props;
  return (
    <div
      style={{
        width: `${CELL_SIZE - 10}px`,
        height: `${CELL_SIZE - 10}px`,
        backgroundColor: color,
        borderRadius: '50%',
      }}
    ></div>
  );
};
