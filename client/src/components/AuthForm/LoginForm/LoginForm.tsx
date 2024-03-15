import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cls } from '@/utils/helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { memo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (e: any, data: any) => {
    console.log(e);
    console.log(data);
  };

  return (
    <div className={cls([styles.LoginForm, className])}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ formState: { errors } }) => (
            <Input
              className={styles.input}
              color={'secondary'}
              error={errors.email?.message}
              name={'email'}
              placeholder={'Введите адрес электронной почты'}
              type={'email'}
            />
          )}
          rules={{
            required: true,
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({ formState: { errors } }) => (
            <Input
              className={styles.input}
              color={'secondary'}
              error={errors.password?.message}
              placeholder={'Введите пароль'}
              type={'password'}
            />
          )}
          rules={{
            required: true,
          }}
        />
        <Button className={styles.signIn_button}>Войти</Button>
        <hr className={styles.bottom_form_separator} />
      </form>
    </div>
  );
});
