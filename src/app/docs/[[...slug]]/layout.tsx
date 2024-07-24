
import Footer  from "@/components/footer";
import { Leftbar } from "@/components/leftbar";
import { Navbar } from "@/components/navbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="flex items-start gap-14 ">
        <Leftbar />
        <div className="flex-[4]">{children}</div>{" "}
      </div>
      
    </div>
  );
}
