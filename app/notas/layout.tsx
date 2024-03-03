import { CommentsProvider } from "./context/commentsContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CommentsProvider>
      <section>{children}</section>
    </CommentsProvider>
  );
}
