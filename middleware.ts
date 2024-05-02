import { authMiddleware } from "@clerk/nextjs/server";
export default authMiddleware({
    // "/" will be accessible to all users
    publicRoutes: [
        "/",
        "events/:id",
        "api/webhooks/clerk",
        "/api/webhook/stripe",
        '/api/uploadthing',
    ],
    ignoredRoutes: [
        '/api/webhooks/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
    ],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};