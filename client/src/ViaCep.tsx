import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Endereco from ''


export const ViaCep = () => {
    const cepRef = useRef(null);
    const errRef = useRef(null);

    const [cep, setCep] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    let endereco: Endereco;

    useEffect(() => {
        //@ts-ignore
        cepRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [cep]);


    //@ts-ignore
    const onChangeCep = (e) => {
        setCep(e.target.value);
    };


    //@ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios({
                url: 'http://localhost:3000/viacep',
                method: 'post',
                data: {
                    //@ts-ignore
                    cep: cep
                }
            });

            //@ts-ignore
            endereco = response?.data;

            //@ts-ignore
            console.log(JSON.stringify(endereco));
            // console.log(response);
            // console.log(JSON.stringify(response?.data));
            setCep('');
            setSuccess(true);

        } catch (err) {
            console.log(err);
            //@ts-ignore
            if (!err.response) {
                setErrMsg('Servidor não responde');
                //@ts-ignore
            } else if (err.response?.status === 400) {
                //@ts-ignore
                setErrMsg(err.response.data.message);
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


    return (
        <>
            {success ? (
                <section>
                    <p>
                        <a href="/">Home</a>
                    </p>
                    <br />
                    {/* <p>Logradouro&nbsp; {endereco?.logradouro}</p> */}
                    {/* <form action="">
                        <label >Logradouro&nbsp; {endereco?.logradouro} </label>
                        <input type="text" id="logradouro" name="logradouro" value={endereco?.logradouro} readOnly={true} /><br /><br />
                        <label >Complemento&nbsp;</label>
                        <input type="text" id="complemento" name="complemento" value={endereco?.complemento} readOnly={true} /><br /><br />
                        <label >Bairro&nbsp;</label>
                        <input type="text" id="bairro" name="bairro" value={endereco?.bairro} readOnly={true} /><br /><br />
                        <label >Cidade&nbsp;</label>
                        <input type="text" id="cidade" name="cidade" value={endereco?.cidade} readOnly={true} /><br /><br />
                        <label >UF&nbsp;</label>
                        <input type="text" id="uf" name="uf" value={endereco?.uf} readOnly={true} /><br /><br />
                        <label >IBGE&nbsp;</label>
                        <input type="text" id="ibge" name="ibge" value={endereco?.codigoIBGE} readOnly={true} /><br /><br />
                        <label >DDD&nbsp;</label>
                        <input type="text" id="ddd" name="ddd" value={endereco?.ddd} readOnly={true} /><br /><br />
                    </form> */}
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscrean"} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1>Buscar Endereço</h1>
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="cep">CEP:&nbsp;</label>
                        <input
                            type="text"
                            id="cep"
                            ref={cepRef}
                            autoComplete='off'
                            onChange={onChangeCep}
                            value={cep}
                            required
                        />
                        <br />
                        <button>Consultar</button>
                    </form>
                </section >
            )}
        </>
    );

}