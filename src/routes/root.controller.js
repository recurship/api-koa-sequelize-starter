/**
 * Root GET Handler: Just return the API name.
 */
export async function root(ctx) {
  ctx.body = 'API is available';
}
