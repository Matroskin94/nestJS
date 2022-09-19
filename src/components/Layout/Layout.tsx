import { Footer } from "@components/Footer/Footer";
import { Navbar } from "@components/NavBar/Navbar";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
