import { routes } from '@/app/providers/router';
import { LoginForm, SignUpForm } from '@/components/AuthForm';
import { LogoIcon } from '@/components/ui/Icons';
import { Text } from '@/components/ui/Text';
import { cls } from '@/utils/helpers';
import { NavLink } from 'react-router-dom';

import styles from './AuthPage.module.scss';

export interface AuthPageProps {
  className?: string;
  isSignIn: boolean;
}

const AuthPage = ({ className, isSignIn }: AuthPageProps) => (
  <div className={cls([styles.AuthPage, className])}>
    <section className={styles.wrapper}>
      <div className={styles.wrapper_logo}>
        <LogoIcon />
        <Text align={'center'} bold className={styles.logo} size={'l'} title={'TreO'} />
      </div>
      <Text
        align={'center'}
        bold
        className={styles.title}
        size={'s'}
        title={isSignIn ? 'Войдите, чтобы продолжить' : 'Зарегистрируйтесь, чтобы продолжить'}
      />
      {isSignIn ? <LoginForm /> : <SignUpForm />}
      <hr className={styles.bottom_form_separator} />
      {
        <div className={styles.wrapper_bottom_text}>
          {!isSignIn && <Text size={'xs'} text={'Already have an account?'} />}
          <NavLink
            className={styles.link_signUp}
            to={isSignIn ? routes.getRouteSignUp() : routes.getRouteSignIn()}
          >
            {isSignIn ? 'Создать аккаунт' : 'Войти'}
          </NavLink>
        </div>
      }
    </section>
  </div>
);

export default AuthPage;
