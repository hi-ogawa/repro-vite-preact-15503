import express from 'express';
import { createServer as createViteServer } from 'vite';
import  {setVite} from './load_ssr';
import loadSsrModules from "./load_ssr";

function asyncHandler(fn) {
    return function(req, res, next) {
        Promise.resolve(fn(req, res, next))
            .catch(next);
    };
}

const launch = async () => {
    const expressApp = express();
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom',
    });
    expressApp.use(vite.middlewares);
    setVite(vite);
    expressApp.use(asyncHandler(async (req, res) => {
        const ssr = await loadSsrModules();
        const componentHtml = await ssr.renderMain({}, {});
        console.log(componentHtml);
        res.send(componentHtml);
    }));
    expressApp.use((error, req, res, next) => {
        console.error('An error occurred:', error);
        const statusCode = error.statusCode || 500;
        const message = statusCode === 500 ? 'Internal Server Error' : error.message;

        res.status(statusCode).json({
            error: message
        });
    });
    const PORT = 5002;
    expressApp.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

};

launch().then(() => {});
