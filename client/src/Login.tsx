import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from './context/AuthProvider';
import axios from 'axios';

export default function Login() {
    //@ts-ignore
    const { setAuth } = useContext(AuthContext);

    const userRef = useRef(null);
    const errRef = useRef(null);

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState(''); ``
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        //@ts-ignore
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);
    useEffect(() => {

    });
    //@ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login',
                { username: user, password: pwd });
            console.log(response);
            console.log(JSON.stringify(response?.data));
            const salt = response?.data?.salt;
            setAuth({ user, pwd, salt });
            setUser('');
            setPwd('');
            setSuccess(true);

        } catch (err) {
            //@ts-ignore
            if (!err.response) {
                setErrMsg('Servidor não responde');
                //@ts-ignore
            } else if (err.response?.status === 400) {
                //@ts-ignore
                setErrMsg(err.response.message);
                //@ts-ignore
            } else if (err.response?.status === 401) {
                //@ts-ignore
                setErrMsg(err.response.data.message);

            } else {
                //@ts-ignore
                setErrMsg(err.response.message);
            }
            //@ts-ignore
            errRef.current.focus();
        }
    };
    //@ts-ignore
    const onChangeUser = (e) => {
        setUser(e.target.value);
    };
    //@ts-ignore
    const onChangePass = (e) => {
        setPwd(e.target.value);
    };

    return (
        <>
            {success ? (
                <section>
                    <p>
                        <a href="/">Home</a>
                    </p>
                    <br />
                    <br />
                    <ol>
                        <li><a href="/viaCep">ViaCep</a></li>
                    </ol>
                    <br />
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscrean"} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1>Tora Transportes</h1>
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="usuario">Usuário:&nbsp;</label>
                        <input
                            type="text"
                            id="usuario"
                            ref={userRef}
                            autoComplete='off'
                            onChange={onChangeUser}
                            value={user}
                            required
                        />
                        <br />
                        <label htmlFor="password">Senha:&nbsp;</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(onChangePass)}
                            value={pwd}
                            required
                        />
                        <br />
                        <button>Login</button>
                    </form>
                </section >
            )}
        </>
    );
};