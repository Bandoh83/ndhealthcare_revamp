import { Figtree, Poppins } from 'next/font/google';
import './sass/index.scss';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-secondary',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'ProHealth - Medical and Healthcare NextJS Template',
    template: '%s | ProHealth - Medical and Healthcare NextJS Template',
  },
  description: 'ProHealth - Medical and Healthcare NextJS Template',
  openGraph: {
    title: 'ProHealth - Medical and Healthcare NextJS Template',
    description: 'ProHealth - Medical and Healthcare NextJS Template',
    images: ['/openGraphImage.jpeg'],
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
        {children}
      </body>
    </html>
  );
}
