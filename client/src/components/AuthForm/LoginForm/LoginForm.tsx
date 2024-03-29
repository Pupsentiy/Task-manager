import { routes } from '@/app/providers/router';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  getLoginByEmailError,
  getLoginByEmailIsLoading,
} from '@/store/authByEmail/getLoginByEmailSelectors.ts';
import { loginByEmail } from '@/store/authByEmail/loginByEmail.ts';
import { getUserData } from '@/store/user/getUserSelectors.ts';
import { useAppDispatch } from '@/utils/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { memo, useCallback, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const LoginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useSelector(getLoginByEmailError);
  const isLoading = useSelector(getLoginByEmailIsLoading);
  const userData = useSelector(getUserData);
  const { control, handleSubmit, setError } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(LoginFormSchema),
  });

  useEffect(() => {
    if (error) setError('email', { message: error, type: '404' });
    if (userData) navigate(routes.getRouteBoards());
  }, [dispatch, error, navigate, setError, userData]);

  const onSubmit: SubmitHandler<LoginForm> = useCallback(
    (data: LoginForm) => {
      dispatch(loginByEmail(data));
    },
    [dispatch],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        render={({ field, formState: { errors } }) => (
          <Input
            color={'secondary'}
            error={errors.email?.message}
            placeholder={'Введите адрес электронной почты'}
            type={'email'}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, formState: { errors } }) => (
          <Input
            color={'secondary'}
            error={errors.password?.message}
            placeholder={'Введите пароль'}
            type={'password'}
            {...field}
          />
        )}
      />
      <Button color={'sign'} disabled={isLoading} type={'submit'}>
        Войти
      </Button>
    </form>
  );
});

export default LoginForm;
