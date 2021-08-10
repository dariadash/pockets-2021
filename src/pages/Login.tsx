import React from 'react';
import { login } from '@/actions';
import { PATHS } from '@/constants';
import { Input } from '@/ui/Input';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

export const Login = () => {
    const { user } = useSelector((state) => state.user);
    const formMessages = useSelector((state) => state.auth.authForm);
    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const loginAction = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    if (user) {
        history.push(PATHS.profile);
    }

    return (
        <div className="page__area">
            <div className="form__container">
                <form onSubmit={loginAction}>
                    <h1>Pockets</h1>
                    <h2>Welcome to Pockets!👋</h2>
                    <p>Please sing-in to your account and start the adventure</p>
                    {formMessages?.message && <p>{formMessages.message}</p>}
                    <label>Email</label>
                    <Input value={email} placeholder="johndoe@gmail.com" setValue={setEmail} />
                    {formMessages?.fields?.email && <p>{formMessages.fields.email}</p>}
                    <div className="form__container--password">
                        <label>Password</label>{' '}
                        <Link className="form__link--pass" to={PATHS.register}>
                            Forgot Password?
                        </Link>
                    </div>
                    <Input type="password" value={password} plaseholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉" setValue={setPassword} />
                    {formMessages?.fields?.password && <p>{formMessages.fields.password}</p>}
                    <button className="button--auth" type={'submit'}>
                        Login
                    </button>
                    <div className="form__link">
                        <p>New on our platform?</p>{' '}
                        <Link className="form__link--bottom" to={PATHS.register}>
                            Create an account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
