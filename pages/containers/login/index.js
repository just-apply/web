import { Button } from '../../components/button'
import { Container } from '../../components/container'
import Css from '../../containers/login/style'

const Login = () => (
    <>
        <Css />
        <Container className="container">
            <Button variant="contained" color="secondary">
                Hello, welcome to my first react application!
            </Button>
        </Container>
    </>
)

export default Login;