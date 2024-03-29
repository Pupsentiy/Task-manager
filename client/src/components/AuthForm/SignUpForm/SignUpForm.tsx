import { routes } from '@/app/providers/router';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  getSignUpError,
  getSignUpSuccess,
  getSingUpIsLoading,
} from '@/store/signUp/getSignUpSelectors.ts';
import { SignUpProps, signUp } from '@/store/signUp/signUp.ts';
import { singUpActions } from '@/store/signUp/signUpSlice.ts';
import { getUserData } from '@/store/user/getUserSelectors.ts';
import { useAppDispatch } from '@/utils/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { memo, useCallback, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const SignUpFormSchema = yup.object().shape({
  confirmPassword: yup.string().min(8).required(),
  email: yup.string().email().required(),
  fullName: yup.string().min(1).required(),
  password: yup.string().min(8).required(),
});

const SignUpForm = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useSelector(getSignUpError);
  const isLoading = useSelector(getSingUpIsLoading);
  const success = useSelector(getSignUpSuccess);
  const userData = useSelector(getUserData);
  const { control, handleSubmit, setError, watch } = useForm({
    defaultValues: {
      confirmPassword: '',
      email: '',
      fullName: '',
      password: '',
    },
    resolver: yupResolver(SignUpFormSchema),
  });
  const watchPassword = watch('password');

  useEffect(() => {
    if (error) setError('email', { message: error, type: '401' });
    if (success) {
      navigate(routes.getRouteSignIn());
      dispatch(singUpActions.resetSuccess());
    }
    if (userData) navigate(routes.getRouteBoards());
  }, [dispatch, error, navigate, setError, success, userData]);

  const onSubmit: SubmitHandler<SignUpProps> = useCallback(
    data => {
      dispatch(signUp(data));
    },
    [dispatch],
  );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="fullName"
          render={({ field, formState: { errors } }) => (
            <Input
              color={'secondary'}
              error={errors.fullName?.message}
              placeholder={'Введите имя'}
              type={'text'}
              {...field}
            />
          )}
        />
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
        {watchPassword && (
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field, formState: { errors } }) => (
              <Input
                color={'secondary'}
                error={errors.password?.message}
                placeholder={'Повторите пароль'}
                type={'password'}
                {...field}
              />
            )}
          />
        )}
        <Button color={'sign'} disabled={isLoading} type={'submit'}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
});

export default SignUpForm;
