import Head from "next/head";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function DashboardLayout ({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full max-w-full">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}