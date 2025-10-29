export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const reqUrl = new URL(request.url);
  const incomingPath = reqUrl.searchParams.get('path') || reqUrl.pathname;
  
  // 👇 Tumhara main domain
  const targetDomain = 'https://sprayfoamgeniusmarketing.com';
  const targetUrl = new URL(incomingPath, targetDomain).toString();

  return new Response(`reflect: ${targetUrl}`, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Google-Reflection': 'true',
    },
  });
}
