import Avatar from '@material-ui/core/Avatar'

const AvatarCustom = ({children, ...props}) => (
    <Avatar {...props}>
        {children}
    </Avatar>
)

export { AvatarCustom as Avatar };