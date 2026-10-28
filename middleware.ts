import { NextResponse, type NextRequest } from "next/server";

// Mode « site en construction » : l'accueil affiche la page /construction et
// toutes les autres pages publiques renvoient vers l'accueil.
// Passer à false pour rouvrir le site complet.
const MAINTENANCE = true;

// Pages qui restent accessibles pendant les travaux : mentions légales
// (obligatoires) et l'onboarding des clients déjà signés.
const OPEN_PATHS = ["/mentions-legales", "/privacy", "/cgv", "/onboarding"];

export function middleware(req: NextRequest) {
  if (!MAINTENANCE) return NextResponse.next();

  const { pathname } = req.nextUrl;
  if (OPEN_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return NextResponse.next();
  }
  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/construction", req.url));
  }
  return NextResponse.redirect(new URL("/", req.url), 307);
}

export const config = {
  // Laisse passer l'API, les fichiers Next et les fichiers statiques
  // (images, favicon, robots.txt, sitemap.xml…).
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
