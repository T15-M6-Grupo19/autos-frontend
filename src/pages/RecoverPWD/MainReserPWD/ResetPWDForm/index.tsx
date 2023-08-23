import { FormBox, FormContainer } from '../../MainSendInfo/EmailForm/styles';

export const ResetPassWord = () => {
  return (
    <FormContainer>
      <FormBox>
        <h2 className='textHeading7500'>Recuperar Senha</h2>
        <div className='input-wraper'>
          <label className='textBody2500' htmlFor='password'>
            Senha
          </label>
          <input id='email' type='password' placeholder='******' />
        </div>
        <br />
        <div className='input-wraper'>
          <label className='textBody2500' htmlFor='password'>
            Confirmar Senha
          </label>
          <input id='email' type='password' placeholder='******' />
        </div>
        <br />
        <button>Enviar</button>
      </FormBox>
    </FormContainer>
  );
};
