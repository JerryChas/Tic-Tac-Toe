type SquareProps = {
  value: any;
  onClick: () => void;
};

const Square = ({ value, onClick }: SquareProps) => {
  return (
    <div className='square' onClick={onClick}>
      {value}
    </div>
  );
};

export default Square;
