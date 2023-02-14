function Login() {
  return (
    <>
    <div className='Login'>
        <fieldset>
        <label>
            <input type="text" name="usuario"></input>
        </label>
        <label>
            <input type="password" name='contrasinal'></input>
        </label>
        <label>
            <input type="submit" value="Entrar"></input>
        </label>
        </fieldset>
    </div>
    </>
  );
}

export default Login;
