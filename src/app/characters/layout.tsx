import { Metadata } from "next";
import { Container } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Characters",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Container fluid="md">
      <section className="grid tabletMax:grid-cols-[16rem_1fr] h-full gap-12">
        {children}
      </section>
    </Container>
  );
};

export default RootLayout;
