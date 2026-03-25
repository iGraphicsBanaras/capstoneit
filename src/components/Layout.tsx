import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen relative">
    <Header />
    <main className="relative z-10">{children}</main>
    <Footer />
    <FloatingButtons />
  </div>
);

export default Layout;
