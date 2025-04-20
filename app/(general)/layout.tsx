import { NavBar } from "@/app/components";

const GeneralLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        {children}
      </main>
    </>
  );
};

export default GeneralLayout;
