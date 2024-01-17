import { h } from 'preact';
import renderToString from 'preact-render-to-string';
import { Context as ResponsiveContext } from 'react-responsive';

// Thin wrapper to get renderToString out of babel-land into normal node land
export function createRenderer(component) {
    return async function (props, opts) {
        const componentHtml = renderToString(
            h(ResponsiveContext.Provider, { value: { width: 1500 } }, h(component, props))
        );
        return componentHtml;
    };
}
