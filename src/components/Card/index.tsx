import Porshe from '../../assets/Porshe.svg';
import { ContainerCard } from './styles';

export const Card = () => {
  return (
    <ContainerCard>
      <figure>
        <img src={Porshe} />
      </figure>
      <div>
        <div className='fist'>
          <h2> Ferrari </h2>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis et
            ipsum repellat enim odit sit perspiciatis amet corporis alias
            consequatur. Dicta inventore aperiam quas consectetur atque
            deserunt, obcaecati doloribus dolores!
          </div>
        </div>
        <div className='second'>
          <div className='ballon-name'>
            <span>SL</span>
          </div>
          <span>Silva Luiz</span>
        </div>
        <div className='thirsd'>
          <div className='detail'>
            <span>Km</span>
            <span>Ano</span>
          </div>
          <div className='wrap-price'>
            {' '}
            <span className='price'>R$ 00,00</span>{' '}
          </div>
        </div>
      </div>
    </ContainerCard>
  );
};
