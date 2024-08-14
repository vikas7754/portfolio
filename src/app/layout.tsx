import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Script from "next/script";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="top-center"
          closeOnClick
          hideProgressBar={false}
          newestOnTop={true}
          draggable={true}
          theme="light"
          pauseOnHover={true}
          autoClose={3000}
        />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script id="google-analytics">
              {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
         
                  gtag('config', '${GA_ID}');
                `}
            </Script>
            <Script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5332831846915728`}
              crossOrigin="anonymous"
            />
          </>
        )}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
