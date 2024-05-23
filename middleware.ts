import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/']);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  }
  //   if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
