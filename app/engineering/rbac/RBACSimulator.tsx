"use client";

import { useMemo, useState } from "react";

type Role = "Admin" | "Manager" | "Viewer";

type Permission =
  | "dashboard"
  | "users"
  | "billing"
  | "reports"
  | "settings";

const permissions: {
  id: Permission;
  label: string;
  description: string;
}[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    description: "View application dashboard",
  },
  {
    id: "users",
    label: "Users",
    description: "Manage application users",
  },
  {
    id: "billing",
    label: "Billing",
    description: "View and manage billing",
  },
  {
    id: "reports",
    label: "Reports",
    description: "Access business reports",
  },
  {
    id: "settings",
    label: "Settings",
    description: "Manage application settings",
  },
];

const rolePermissions: Record<Role, Permission[]> = {
  Admin: [
    "dashboard",
    "users",
    "billing",
    "reports",
    "settings",
  ],

  Manager: [
    "dashboard",
    "users",
    "reports",
  ],

  Viewer: [
    "dashboard",
    "reports",
  ],
};

export default function RBACSimulator() {
  const [role, setRole] = useState<Role>("Admin");

  const allowedPermissions = useMemo(
    () => rolePermissions[role],
    [role]
  );

  const hasPermission = (permission: Permission) =>
    allowedPermissions.includes(permission);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">

      {/* Role selector */}
      <div>
        <p className="text-sm text-slate-500">
          Current role
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {(["Admin", "Manager", "Viewer"] as Role[]).map(
            (item) => (
              <button
                key={item}
                onClick={() => setRole(item)}
                className={`rounded-lg px-5 py-2.5 text-sm font-medium transition ${
                  role === item
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      {/* Current role */}
      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 p-6">
        <p className="text-xs uppercase tracking-wider text-slate-500">
          Active role
        </p>

        <div className="mt-2 flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

          <p className="text-xl font-semibold">
            {role}
          </p>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {allowedPermissions.length} of{" "}
          {permissions.length} permissions enabled
        </p>
      </div>

      {/* Permission matrix */}
      <div className="mt-8 overflow-hidden rounded-xl border border-slate-800">

        <div className="grid grid-cols-[1fr_120px] border-b border-slate-800 bg-slate-950 px-5 py-4">
          <span className="text-xs uppercase tracking-wider text-slate-500">
            Permission
          </span>

          <span className="text-center text-xs uppercase tracking-wider text-slate-500">
            Access
          </span>
        </div>

        {permissions.map((permission) => {
          const allowed = hasPermission(permission.id);

          return (
            <div
              key={permission.id}
              className="grid grid-cols-[1fr_120px] items-center border-b border-slate-800 px-5 py-5 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-slate-200">
                  {permission.label}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {permission.description}
                </p>
              </div>

              <div className="flex justify-center">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    allowed
                      ? "bg-emerald-400/10 text-emerald-400"
                      : "bg-red-400/10 text-red-400"
                  }`}
                >
                  {allowed ? "Allowed" : "Denied"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explanation */}
      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 p-6">
        <p className="text-sm font-medium text-slate-200">
          Implementation
        </p>

        <p className="mt-3 leading-7 text-slate-400">
          The UI derives available features from a centralized
          role-to-permission mapping. Changing the active role
          immediately recalculates the accessible features without
          duplicating authorization logic throughout the interface.
        </p>
      </div>
    </div>
  );
}