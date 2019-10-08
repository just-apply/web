import Login from './containers/login/index'

const classes = {
    global: <style jsx global>
                {`
                html {
                    overflow: hidden;
                }
                `}
            </style>,
};

const Index = () => (
    <>
        <Login />
        {classes.global}
    </>
)

export default Index;