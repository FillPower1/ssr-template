import path from 'path';

import { Response, Request } from 'express';
import { ChunkExtractor } from '@loadable/server';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouterContext } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createStore } from '@client/store';
import { makeInitialState } from '@client/store/make-initial-state';
import App from '@client/app';

const SUCCESS_CODE = 200;

const renderObject = data => serialize(data).replace(/</g, '\\\u003c');

function getHtml(
    jsx: JSX.Element,
    sheet: ServerStyleSheet,
    chunkExtractor: ChunkExtractor,
    store: Store
) {
    const reactHtml = renderToString(jsx);
    const styledTags = sheet.getStyleElement();
    const scriptTags = chunkExtractor.getScriptElements();

    const html = renderToStaticMarkup(
        <html lang="ru">
            <head>{styledTags}</head>
            <body>
                <div
                    id="root"
                    dangerouslySetInnerHTML={{ __html: reactHtml }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__APP_STATE__ = ${renderObject(
                            store.getState()
                        )}`
                    }}
                />
                {scriptTags}
            </body>
        </html>
    );

    return `<!doctype html>${html}`;
}

export default (req: Request, res: Response) => {
    const location = req.url;
    const context: StaticRouterContext = {};

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    const { store } = createStore(makeInitialState(location), location);
    const statsFile = path.resolve('./dist/static/loadable-stats.json');
    const chunkExtractor = new ChunkExtractor({ statsFile });
    const sheet = new ServerStyleSheet();
    try {
        const jsx = chunkExtractor.collectChunks(
            <Provider store={store}>
                <StaticRouter context={context} location={location}>
                    <StyleSheetManager sheet={sheet.instance}>
                        <App />
                    </StyleSheetManager>
                </StaticRouter>
            </Provider>
        );

        res.status(context.statusCode || SUCCESS_CODE).send(
            getHtml(jsx, sheet, chunkExtractor, store)
        );
    } catch (error) {
        console.error(error);
    } finally {
        sheet.seal();
    }
};
