import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cls } from '@/utils/helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { memo } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

interface LoginForm {
  email: string;
  password: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { control, formState, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginForm> = (data: any) => {
    console.log(data);
  };
  console.log(formState);
  return (
    <div className={cls([styles.LoginForm, className])}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field, formState: { errors } }) => (
            <Input
              className={styles.input}
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
              className={styles.input}
              color={'secondary'}
              error={errors.password?.message}
              placeholder={'Введите пароль'}
              type={'password'}
              {...field}
            />
          )}
        />
        <Button className={styles.signIn_button} type={'submit'}>
          Войти
        </Button>
        <hr className={styles.bottom_form_separator} />
      </form>
    </div>
  );
});
