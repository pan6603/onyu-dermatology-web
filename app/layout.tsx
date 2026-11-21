
import type { Metadata } from "next";
import StyledComponentsRegistry from
  "@/lib/styled-components-registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "온유피부과",
  description: "온유피부과 공식 홈페이지",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
