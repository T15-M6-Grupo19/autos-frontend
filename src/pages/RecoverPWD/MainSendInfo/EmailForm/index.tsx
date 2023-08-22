import { FormBox, FormContainer } from './styles';

export const RecoverEmailForm = () => {
  return (
    <FormContainer>
      <FormBox>
        <h2 className='textHeading7500'>Recuperar Senha</h2>
        <div className='input-wraper'>
          <label className='textBody2500' htmlFor='email'>
            Email
          </label>
          <input id='email' type='email' placeholder='Ex:nome@email.com' />
        </div>
        <button>Enviar</button>
      </FormBox>
    </FormContainer>
  );
};