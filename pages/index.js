import { useState, useEffect } from 'react';

const Index = () => {

    const [ datos, setDatos ] = useState()

    useEffect( () => {

        const runApi = async () => {

            const req = await fetch('https://fastapi-prueba-1.herokuapp.com/posts');
            const res = await req.json();
            setDatos(res);

        }

        runApi();

    }, [])

    console.log(datos);

    return (
        <>
            <div className="header">
                <div className="container">
                    <h1>Revisa la consola!</h1>
                </div>
            </div>
        </>
    );
}

export default Index;