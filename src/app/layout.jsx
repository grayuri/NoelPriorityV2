import Navbar from "@/components/Navbar/Navbar";
import PageTransition from "./PageTransition"
import './globals.scss';

export const metadata = {
  title: "Noel Priority",
  description: "This is Noel, a practical and handsome app wich are used in the Amazon Warehouse REC1 to deal with priorities and dwell times."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}