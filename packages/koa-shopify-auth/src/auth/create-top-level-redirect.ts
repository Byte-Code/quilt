import querystring from 'querystring';
import {Context} from 'koa';

export default function createTopLevelRedirect(path: string) {
  return function topLevelRedirect(ctx: Context) {
    const {query} = ctx;
    const {shop} = query;

    const params = {shop};
    const queryString = querystring.stringify(params);

    ctx.redirect(`${path}?${queryString}`);
  };
}
