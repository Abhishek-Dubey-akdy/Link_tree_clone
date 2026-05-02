import { auth } from "./auth";

export default auth((req) => {
    // I am just checking if the person is loggedIn or not in order to access the dashboard
    const isLoggedIn = !!req.auth;

    const onDashboard = req.nextUrl.pathname.startsWith("/dashboard");

    
    if (onDashboard && !isLoggedIn)
    {
        const loginUrl = new URL("/", req.nextUrl);
        loginUrl.searchParams.set("message", "Login Required");
        
        return Response.redirect(loginUrl);
    }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

