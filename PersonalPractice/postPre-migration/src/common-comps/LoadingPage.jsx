import { Spinner } from "react-bootstrap"

export const LoadingPage = () => {
    return (
        <>
            <div className="alert alert-info text-center">
                <Spinner animation="border" role="status" size='sm' >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                Loading...
            </div>
        </>
    )
}
