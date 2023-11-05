import { ThemeProvider } from "@/contexts/theme";
import "@/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "react-toastify/dist/ReactToastify.min.css";
import "@/styles/swiper.scss";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

export const metadata = {
  title: "Portfolio - Vikas",
  description:
    "Hi, My name is Vikas. I am a full stack developer. Visit freecodez.com to learn web development for free. Check out my portfolio on vikask.in to see my work.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className="">
          <ToastContainer
            position="top-right"
            closeOnClick
            hideProgressBar={false}
            newestOnTop={true}
            draggable={true}
            theme="dark"
            pauseOnHover={true}
            autoClose={3000}
          />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-NH66M4M9C9`}
          />
          <Script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-NH66M4M9C9');
            `}
          </Script>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
