import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mugisha Pacifique | Full-Stack Developer & AI Enthusiast',
  description: 'Portfolio of Mugisha Pacifique - Full-Stack Web Developer specializing in Next.js, React, AI, and innovative web solutions. Based in Rwanda.',
  keywords: 'Full-Stack Developer, Web Developer, AI Developer, Next.js, React, Node.js, Python, Rwanda, Mugisha Pacifique',
  authors: [{ name: 'Mugisha Pacifique' }],
  openGraph: {
    title: 'Mugisha Pacifique | Full-Stack Developer',
    description: 'Passionate Full-Stack Developer building innovative solutions with Next.js, React, and AI',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedMode = localStorage.getItem('darkMode') === 'true';
                if (savedMode) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}