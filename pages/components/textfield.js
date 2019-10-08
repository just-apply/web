import TextField from '@material-ui/core/TextField'

const TextFieldCustom = ({children, ...props}) => (
    <TextField {...props}>
        {children}
    </TextField>
)

export { TextFieldCustom as TextField };