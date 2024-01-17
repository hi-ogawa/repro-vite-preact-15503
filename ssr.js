import { createRenderer } from './lib/ssr';
import Page from "./lib/frontend/main";

const exp = {};
exp.renderMain = createRenderer(Page);

export default exp;
