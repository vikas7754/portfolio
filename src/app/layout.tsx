import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Script from "next/script";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
import ReduxProvider from "@/redux/ReduxProvider";
import { store } from "@/redux/store";

export const metadata: Metadata = {
  title: "Vikas | Full Stack Developer",
  description:
    "Hi, My name is Vikas. I am a full stack developer. Visit freecodez.com to learn web development for free. Check out my portfolio on vikask.in to see my work.",
  openGraph: {
    title: "Vikas | Full Stack Developer",
    description:
      "Hi, My name is Vikas. I am a full stack developer. Visit freecodez.com to learn web development for free. Check out my portfolio on vikask.in to see my work.",
    siteName: "Vikas | Full Stack Developer",
    images: [
      {
        url: "https://res.cloudinary.com/freecodez/image/upload/v1725292194/images/czqh61n5lebaftqpgeg9.webp",
        width: 600,
        height: 200,
        alt: "Vikas | Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
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
    </ReduxProvider>
  );
}
