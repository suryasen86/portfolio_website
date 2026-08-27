import { Space_Grotesk } from 'next/font/google';

import Theme from '../styles/theme';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${spaceGrotesk.variable} ${spaceGrotesk.className}`}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </div>
  );
}
