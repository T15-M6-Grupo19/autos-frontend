import { useContext } from 'react';
import { PaginationStyle } from './style';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { CarContext } from '../../providers/CarContext';

const Pagination = () => {
  const { getNextAmount, getPrevAmount, prevAmount, nextAmount, count, page } =
    useContext(CarContext);

  return (
    <PaginationStyle>
      {prevAmount && (
        <div onClick={() => getPrevAmount()}>
          <p className='textBody2500'>
            {' '}
            <AiOutlineLeft className='Icon' /> Anterior
          </p>
        </div>
      )}
      <div>
        <p className='textBody2500'>{page} de {count}</p>
      </div>

      {nextAmount && (
        <div onClick={() => getNextAmount()}>
          <p className='textBody2500'>
            {' '}
            Seguinte <AiOutlineRight className='Icon' />{' '}
          </p>
        </div>
      )}
    </PaginationStyle>
  );
};

export default Pagination;
