import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => props => sheets.collect(<App {...props} />),
            });

        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [
                <React.Fragment key="styles">
                    {initialProps.styles}
                    {sheets.getStyleElement()}
                </React.Fragment>,
            ],
        };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;