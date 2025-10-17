import { Button, CenteredLayout, Footer, Header } from "@shared/components";
import { loadServerEnv } from "@shared/libs";
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import "@shared/styles/globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

export function loader() {
  const ENV = loadServerEnv();

  return { ENV };
}

export function Layout({ children }: LayoutProps) {
  const { ENV } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Meta />
        <Links />
      </head>
      <body>
        <CenteredLayout>
          <Header />
          <div className="mt-5 tablet:mt-10 min-h-screen pb-28 tablet:pb-56">
            {children}
          </div>
          <Footer />
        </CenteredLayout>
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__ENV__ = ${JSON.stringify(ENV)}`,
          }}
        />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto flex flex-col items-center p-4 pt-16 text-center">
      <h1 className="text-4xl">{message}.</h1>
      <p className="mt-6 text-foreground/60">{details}</p>
      {stack && (
        <pre className="mt-16 w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}

      <div className="mt-16 flex items-center justify-center">
        <Button asChild>
          <Link to={"/"}>Back to home</Link>
        </Button>
      </div>
    </main>
  );
}

export default function App() {
  return <Outlet />;
}
