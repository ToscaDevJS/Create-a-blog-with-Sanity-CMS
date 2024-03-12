"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CommentsProvider } from "../notas/context/commentsContext";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <CommentsProvider>
        <section>{children}</section>
      </CommentsProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
