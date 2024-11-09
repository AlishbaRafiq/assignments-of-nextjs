
import '../globals.css';
import Navbar from './components/navbar';

export const metadata = {
  title: 'Private Pages',
  description: 'Private area for authenticated users',
};

export default function PrivateLayout({
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
