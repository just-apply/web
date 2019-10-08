import Link from '@material-ui/core/Link'

const LinkCustom = ({children, ...props}) => (
    <Link {...props}>
        {children}
    </Link>
)

export { LinkCustom as Link };