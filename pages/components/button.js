import Button from '@material-ui/core/Button'

const ButtonCustom = ({children, ...props}) => (
    <Button {...props}>
        {children}
    </Button>
)

export { ButtonCustom as Button };