import { zodResolver } from '@hookform/resolvers/zod';
import { FormBox, FormContainer } from './styles';
import { useForm } from 'react-hook-form';
import {
  sendEmailResetPWDSchema,
  tResetPWDEmail,
} from '../../../../components/Form/RegisterForm/validator';

export const RecoverEmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tResetPWDEmail>({
    resolver: zodResolver(sendEmailResetPWDSchema),
  });

  const onFormSubmit = (data: tResetPWDEmail) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
      <FormBox>
        <h2 className='textHeading7500'>Recuperar Senha</h2>
        <div className='input-wraper'>
          <label className='textBody2500' htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Ex:nome@email.com'
            {...register('email')}
          />
          {errors && <p>{errors.email?.message}</p>}
        </div>
        <button>Enviar</button>
      </FormBox>
    </FormContainer>
  );
};
