
import Navbar from './components/navbar';
import '../globals.css'; 

export const metadata = {
  title: 'My Country App',
  description: 'Public-facing pages of the app',
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar/>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
