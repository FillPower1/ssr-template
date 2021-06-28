const React = require('react');
const { renderToString, renderToStaticMarkup } = require('react-dom/server')
const { StaticRouter } = require('react-router-dom')
const fs = require('fs')

const jsFiles = []

fs.readdirSync('dist').forEach((file) => {
    if (file.split('.').pop() === 'js') {
        jsFiles.push(file);
    }
})

const renderObject = (data) => serialize(data).replace(/</g, '\\\u003c');

const getHtml = (reactHtml, store, helmet) => {
    const html = renderToStaticMarkup(
        <html lang="en">
            <head>
                {/* {helmet.title.toComponent()}
                {helmet.meta.toComponent()}
                {helmet.link.toComponent()}
                {helmet.script.toComponent()} */}

                <link rel="icon" type="image/png" href="/favicons/favicon.png" />
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: reactHtml }} />
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__PRELOADED_STATE__ = ${renderObject(store.getState())}`
                    }}
                /> */}
                {jsFiles.map((script, index) => <script src={script} key={index} />)}
            </body>
        </html>
    );

    return `<!doctype html>${html}`;
};

module.exports = (req, res) => {
    const location = req.url;
    const context = {};

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    const jsx = (
        // <Provider store={store}>
        <StaticRouter context={context} location={location}>
            <App />
        </StaticRouter>
        // </Provider>
    );

    const reactHtml = renderToString(jsx);
    // const helmet = Helmet.renderStatic();

    res.status(context.statusCode || 200).send(getHtml(reactHtml, store));
};
