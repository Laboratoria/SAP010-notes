function FormLogin() {
    return (
        <form className="formulario">
            <h2>LOGIN</h2>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="senha" />
            <button>LOGIN</button>
            <p>ou</p>
            <button>GOOGLE</button>
            <p>
                Ainda não tem uma conta? <a href="https">Cadastre-se</a>
            </p>
        </form>
    );
}


export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Lab Notes</h1>
                <p>Tome suas notas de uma forma simples e objetiva</p>
            </header>
            <FormLogin />
        </div>
    );
}
