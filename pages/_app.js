import React from 'react'
import App from 'next/app'

class MyApp extends App {
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}

export default MyApp