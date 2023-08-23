import { zodResolver } from '@hookform/resolvers/zod';
import { FormBox, FormContainer } from '../../MainSendInfo/EmailForm/styles';
import { useForm } from 'react-hook-form';
import {
  resetPWDSchema,
  tResePWD,
} from '../../../../components/Form/RegisterForm/validator';
import { useParams } from 'react-router-dom';

interface iResetpwd {
  token: string;
}

export const ResetPassWord = () => {
  const params = useParams();
  
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tResePWD>({
    resolver: zodResolver(resetPWDSchema),
  });

  const onFormSubmit = (data: tResePWD) => {
    console.log(data);
    console.log(params);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
      <FormBox>
        <h2 className='textHeading7500'>Recuperar Senha</h2>
        <div className='input-wraper'>
          <label className='textBody2500' htmlFor='password'>
            Senha
          </label>
          <input
            id='password'
            type='password'
            placeholder='******'
            {...register('password')}
          />
          {errors && <p> {errors.password?.message} </p>}
        </div>
        <br />
        <div className='input-wraper'>
          <label className='textBody2500' htmlFor='password'>
            Confirmar Senha
          </label>
          <input
            id='ConfirmPassword'
            type='password'
            placeholder='******'
            {...register('confirmPassword')}
          />
          {errors && <p> {errors.confirmPassword?.message} </p>}
        </div>
        <br />
        <button>Enviar</button>
      </FormBox>
    </FormContainer>
  );
};
