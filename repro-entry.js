import { h } from 'preact';
import renderToString from 'preact-render-to-string';
import { Context as ResponsiveContext, useMediaQuery } from 'react-responsive';

function Page() {
  const query = useMediaQuery({ minWidth: 1000 });
  return h("div", {}, String(query));
}

function main() {
  const root = h(ResponsiveContext.Provider, { value: { width: 1500 } }, h(Page, {}));
  const result = renderToString(root);
  console.log({ result })
  return result;
}

main()
