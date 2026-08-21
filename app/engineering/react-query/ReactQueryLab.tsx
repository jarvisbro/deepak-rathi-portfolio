"use client";

import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
  email: string;
};

async function fetchUsers(): Promise<User[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

export default function ReactQueryLab() {
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ["engineering-users"],
    queryFn: fetchUsers,
    staleTime: 60 * 1000,
  });

  const handleInvalidate = async () => {
    await queryClient.invalidateQueries({
      queryKey: ["engineering-users"],
    });
  };

  const handleClearCache = () => {
    queryClient.removeQueries({
      queryKey: ["engineering-users"],
    });
  };

  const handleRefetch = async () => {
    await queryClient.refetchQueries({
      queryKey: ["engineering-users"],
    });
  };

  const queryState = queryClient.getQueryState([
    "engineering-users",
  ]);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">

      {/* Header */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-slate-500">
            Query
          </p>

          <h2 className="mt-1 text-xl font-semibold">
            engineering-users
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleRefetch}
            className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-300"
          >
            Refetch
          </button>

          <button
            onClick={handleInvalidate}
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700"
          >
            Invalidate Cache
          </button>

          <button
            onClick={handleClearCache}
            className="rounded-lg border border-red-900/50 px-4 py-2 text-sm text-red-400 hover:bg-red-950/30"
          >
            Clear Cache
          </button>
        </div>
      </div>

      {/* Query state */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <StatusCard
          label="Status"
          value={
            isError
              ? "Error"
              : isLoading
              ? "Loading"
              : "Success"
          }
        />

        <StatusCard
          label="Fetching"
          value={isFetching ? "Yes" : "No"}
        />

        <StatusCard
          label="Cached"
          value={queryState?.data ? "Yes" : "No"}
        />

        <StatusCard
          label="Users"
          value={data?.length?.toString() ?? "0"}
        />

      </div>

      {/* Explanation */}
      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 p-6">

        <p className="text-sm font-medium text-slate-200">
          What is happening?
        </p>

        <p className="mt-3 leading-7 text-slate-400">
          TanStack Query stores the server response in its cache.
          Refetching requests fresh data, while invalidation marks
          the query as stale and allows React Query to refresh it.
        </p>

        {dataUpdatedAt > 0 && (
          <p className="mt-4 text-xs text-slate-600">
            Last updated:{" "}
            {new Date(dataUpdatedAt).toLocaleTimeString()}
          </p>
        )}

      </div>

      {/* Error */}
      {isError && (
        <div className="mt-6 rounded-xl border border-red-900/50 bg-red-950/20 p-5 text-red-400">
          {(error as Error).message}
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="mt-6 rounded-xl border border-slate-800 p-8 text-center text-slate-400">
          Loading users...
        </div>
      )}

      {/* Users */}
      {data && (
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-800">

          <div className="grid grid-cols-2 border-b border-slate-800 bg-slate-950 px-5 py-4 text-xs uppercase tracking-wider text-slate-500">
            <span>Name</span>
            <span>Email</span>
          </div>

          {data.map((user) => (
            <div
              key={user.id}
              className="grid grid-cols-2 border-b border-slate-800 px-5 py-4 last:border-0"
            >
              <span className="text-sm text-slate-300">
                {user.name}
              </span>

              <span className="text-sm text-slate-500">
                {user.email}
              </span>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

function StatusCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
      <p className="text-xs uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold text-slate-200">
        {value}
      </p>
    </div>
  );
}