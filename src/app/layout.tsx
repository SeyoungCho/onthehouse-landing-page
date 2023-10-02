import type { Metadata } from "next";
import Pretendard from "@/app/styles/local.font";
export const metadata: Metadata = {
  title: "onthehouse - 세상에 없던 광고",
  description: "광고에 생생함을 불어넣다, 온더하우스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={Pretendard.className}>{children}</body>
    </html>
  );
}
