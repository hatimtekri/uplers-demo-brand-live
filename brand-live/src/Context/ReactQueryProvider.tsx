
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const MINUTE = 1000 * 60;

function ReactQueryProvider({ children }: any) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        staleTime: 0,
        retry: 0,
        gcTime: 60 * 24 * MINUTE,
      },
    },
  });
  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  });
  return (
    <PersistQueryClientProvider
      persistOptions={{ persister }}
      client={queryClient}
    >
      {children}
    </PersistQueryClientProvider>
  );
}

export default ReactQueryProvider;
