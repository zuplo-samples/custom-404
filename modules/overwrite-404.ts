export default async function policy(response: Response) {
  if (response.status === 404) {
    return new Response('My Custom 404', { status: 404 })
  }

  return response;
}