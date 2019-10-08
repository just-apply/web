import Skeleton from '@material-ui/lab/Skeleton'

const SkeletonCustom = ({children, ...props}) => (
    <Skeleton {...props}>
        {children}
    </Skeleton>
)

export { SkeletonCustom as Skeleton };