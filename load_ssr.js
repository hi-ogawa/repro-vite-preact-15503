let vite;

const SSR_FILE_PATH = `${__dirname}/web_ssr/ssr.mjs`;
export default async function loadSsrModules() {
    if (process.env.NODE_ENV === 'development') {
        console.log('Used SSR hot reloading in development')
        const ssrModule = await vite.ssrLoadModule('./ssr.js');
        return ssrModule.default;
    }
    console.log('Used SSR bundle for prod');
    return (await import(SSR_FILE_PATH)).default;
}
export function setVite(viteInstance) {
    vite = viteInstance;
}
