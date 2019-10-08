import Grid from '@material-ui/core/Grid'

const GridCustom = ({children, ...props}) => (
    <Grid {...props}>
        {children}
    </Grid>
)

export { GridCustom as Grid };