import Paper from '@material-ui/core/Paper'

const PaperCustom = ({children, ...props}) => (
    <Paper {...props}>
        {children}
    </Paper>
)

export { PaperCustom as Paper };