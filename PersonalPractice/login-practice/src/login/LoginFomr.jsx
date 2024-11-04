
const initialState = [
    {
        id: new Date().getTime(),
        type: 'text',
        done: false,
    },
    {
        id: new Date().getTime(),
        type: 'text',
        done: false,
    }
]

export const LoginFomr = () => {
    return (
        <>
            <div className="card d-flex"  >
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="usuario"
                    />
                    <input
                        type="password"
                        placeholder="contraseña"
                        className="form-control" />

                    <input
                        type="checkbox"
                        name=""
                        id=""
                        className="form-check"
                        f
                    />
                </form>
            </div>

        </>
    )
}
