import { Figtree, Poppins } from "next/font/google";
import "./sass/index.scss";
import SearchParamWrapper from "./SearchParamWrapper";
import QueryProvider from "@/app/ui/QueryProvider";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-secondary",
});

export const metadata = {
  metadataBase: new URL('https://www.ndhealthcare.net'),
  title: {
    absolute: "",
    default: "ND Healthcare",
    template: "%s | ND Healthcare",
  },
  description: "ND Healthcare is a leading provider of compassionate, high-quality homecare and medical services, empowering individuals to live independently and with dignity in the comfort of their own homes.",
  openGraph: {
    title: "ND Healthcare",
    description: "ND Healthcare is a leading provider of compassionate, high-quality homecare and medical services, empowering individuals to live independently and with dignity in the comfort of their own homes.",
    images: ["/openGraphImage.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${figtree.variable} ${poppins.variable}`}>
        <QueryProvider>
          <SearchParamWrapper>{children}</SearchParamWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
