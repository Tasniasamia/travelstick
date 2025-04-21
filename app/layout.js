import "./global.scss";



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={false}>
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
