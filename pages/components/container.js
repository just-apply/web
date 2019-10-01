import Container from '@material-ui/core/Container'

const ContainerCustom = ({children, ...props}) => (
    <Container {...props}>
        {children}
    </Container>
)

export { ContainerCustom as Container }