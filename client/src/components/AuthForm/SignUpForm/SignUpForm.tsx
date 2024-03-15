import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cls } from '@/utils/helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { memo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './SignUpForm.module.scss';

interface SignUpFormProps {
  className?: string;
}

const SignUpFormSchema = yup.object().shape({
  confirmPassword: yup.string().min(8).required(),
  email: yup.string().email().required(),
  fullName: yup.string().min(1).required(),
  password: yup.string().min(8).required(),
});

export const SignUpForm = memo(({ className }: SignUpFormProps) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(SignUpFormSchema),
  });

  const onSubmit = () => {};

  return (
    <div className={cls([styles.SignUpForm, className])}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="fullName"
          render={({ formState: { errors } }) => (
            <Input
              className={styles.input}
              color={'secondary'}
              error={errors.fullName?.message}
              name={'email'}
              placeholder={'Введите имя'}
              type={'text'}
            />
          )}
          rules={{
            required: true,
          }}
        />
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
        <Controller
          control={control}
          name="confirmPassword"
          render={({ formState: { errors } }) => (
            <Input
              className={styles.input}
              color={'secondary'}
              error={errors.password?.message}
              placeholder={'Повторите пароль'}
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
