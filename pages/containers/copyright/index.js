import { Typography } from '../../components/typography'
import { Link } from '../../components/link'

const CopyRight = () => (
    <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
        {'Copyright © '} 
        <Link href="https://github.com/eduardogerentklein" color="primary"
        variant="body2" target="_blank" rel="noreferrer">
            Eduardo Klein
        </Link>, {new Date().getFullYear()}.
    </Typography>
)

export default CopyRight;