import errorImg from './error.gif'

const ErrorMassage = () => {
    return (
        <img style={{ display: 'block', width: "300px", height: "300px",objectFit: 'contain', margin: "0 auto"}} src={errorImg} alt="error"/>
    )
}
export default ErrorMassage;