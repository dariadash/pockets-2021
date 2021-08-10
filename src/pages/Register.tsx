import { register } from '@/actions';
import { setRegisterStatus } from '@/actions/register';
import { PATHS } from '@/constants';
import { Input } from '@/ui/Input';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

export const Register = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const formMessages = useSelector((store) => store.register.authForm);
    const regStatus = useSelector((store) => store.register.status);

    const registerAction = (e) => {
        e.preventDefault();
        dispatch(register(username, email, password));
    };

    React.useEffect(() => {
        return () => {
            dispatch(setRegisterStatus(false));
        };
    }, []);

    React.useEffect(() => {
        if (regStatus) {
            history.push(PATHS.auth);
        }
    }, [history, regStatus]);

    return (
        <div className="page__area">
            <div className="form__container">
                <form onSubmit={registerAction}>
                    <h1>Pockets</h1>
                    <h2>Adwenture starts here</h2>
                    <p>Make your app management easy and fun!</p>
                    {formMessages?.message && <p>{formMessages.message}</p>}
                    <label>Username</label>
                    <Input autoFocus={true} placeholder="johndoe@gmail.com" value={username} setValue={setUsername} />
                    {formMessages?.fields?.username && <p>{formMessages.fields.username}</p>}
                    <label>Email</label>
                    <Input value={email} placeholder="johndoe@gmail.com" setValue={setEmail} />
                    {formMessages?.fields?.email && <p>{formMessages.fields.email}</p>}
                    <label>Password</label>
                    <Input type="password" value={password} placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉" setValue={setPassword} />
                    {formMessages?.fields?.password && <p>{formMessages.fields.password}</p>}
                    <div className={'form__container--checkbox'}>
                        <input className="checkbox" type="checkbox" /> <p className="p_special"> Я со всем согласен отпустите</p>
                    </div>
                    <button className="button--reg" type={'submit'}>
                        Sign up
                    </button>
                    <div className={'form__link'}>
                        <p>Already have an account?</p>{' '}
                        <Link className="form__link--bottom" to={PATHS.auth}>
                            Sign in instead
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
