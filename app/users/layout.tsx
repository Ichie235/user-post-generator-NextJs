import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "Users page",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
