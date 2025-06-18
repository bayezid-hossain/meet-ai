"use client";

import ErrorState from "@/components/error-state";
import LoadingState from "@/components/loading-state";
import ResponsiveDialog from "@/components/responsive-dialog";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import {
  useQueries,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions()
  );

  return (
    <div>
      {/* <ResponsiveDialog
        title="Responsive test"
        description="Responsive description"
        open
        onOpenChange={() => {}}
      >
        <Button>Some action</Button>
      </ResponsiveDialog> */}
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export const AgentsViewLoading = () => {
  return (
    <LoadingState
      title="Loading Agents"
      description="This may take a few seconds"
    />
  );
};
export const AgentsViewLoadingError = () => {
  return (
    <ErrorState
      title="Error Loading Agents"
      description="Something went wrong"
    />
  );
};
