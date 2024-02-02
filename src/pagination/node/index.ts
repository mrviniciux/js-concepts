import { mock } from "./mock";

const req = { url: new URL('http://localhost:3000/?limit=5&offset=0') };

const { url } = req;

const limitSearch = Number.parseInt(
  url.searchParams.get('limit') || '10',
);
const offset = Number.parseInt(url.searchParams.get('offset') || '') || 0;

const paginated = mock.items.slice(
  offset,
  offset + limitSearch,
);

export { paginated, offset, limitSearch }