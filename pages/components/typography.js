import Typography from '@material-ui/core/Typography'

const TypographyCustom = ({children, ...props}) => (
    <Typography {...props}>
        {children}
    </Typography>
)

export { TypographyCustom as Typography };