import { routes } from '@/app/providers/router';
import { LoginForm, SignUpForm } from '@/components/AuthForm';
import { LogoIcon } from '@/components/ui/Icons';
import { Text } from '@/components/ui/Text';
import { cls } from '@/utils/helpers';
import { NavLink } from 'react-router-dom';

import styles from './AuthPage.module.scss';

interface AuthPageProps {
  className?: string;
  isSignIn: boolean;
}

const AuthPage = ({ className, isSignIn }: AuthPageProps) => {
  return (
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
        <NavLink
          className={styles.link_signUp}
          to={isSignIn ? routes.getRouteSignUp() : routes.getRouteSignIn()}
        >
          {isSignIn ? 'Зарегистрировать аккаунт' : 'Создать аккаунт'}
        </NavLink>
      </section>
    </div>
  );
};

export default AuthPage;
