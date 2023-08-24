import { zodResolver } from '@hookform/resolvers/zod';
import { FormBox, FormContainer } from '../../MainSendInfo/EmailForm/styles';
import { useForm } from 'react-hook-form';
import {
  resetPWDSchema,
  tResePWD,
} from '../../../../components/Form/RegisterForm/validator';
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CarContext } from '../../../../providers/CarContext';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import { ShowConfirPassEye, ShowPassEye } from './styles';

export const ResetPassWord = () => {
  const { token } = useParams();

  const { resetPassword } = useContext(CarContext);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tResePWD>({
    resolver: zodResolver(resetPWDSchema),
  });

  const onFormSubmit = (data: tResePWD) => {
    if (token) resetPassword(data, token);
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
            type={showPassword ? 'text' : 'password'}
            placeholder='******'
            {...register('password')}
          />
          {errors && <p> {errors.password?.message} </p>}
          <ShowPassEye
            title='Mostrar senha'
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </ShowPassEye>
        </div>
        <br />
        <div className='input-wraper'>
          <label className='textBody2500' htmlFor='password'>
            Confirmar Senha
          </label>
          <input
            id='ConfirmPassword'
            type={showPassword ? 'text' : 'password'}
            placeholder='******'
            {...register('confirmPassword')}
          />
          {errors && <p> {errors.confirmPassword?.message} </p>}
          <ShowConfirPassEye
            title='Mostrar senha'
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </ShowConfirPassEye>
        </div>
        <br />
        <button>Enviar</button>
      </FormBox>
    </FormContainer>
  );
};
