import { describe, expect, it } from "vitest";

type Role = "Admin" | "Manager" | "Viewer";

type Permission =
  | "dashboard"
  | "users"
  | "billing"
  | "reports"
  | "settings";

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

describe("RBAC permissions", () => {
  it("Admin should have access to all permissions", () => {
    expect(rolePermissions.Admin).toHaveLength(5);

    expect(
      rolePermissions.Admin
    ).toContain("settings");

    expect(
      rolePermissions.Admin
    ).toContain("billing");
  });

  it("Manager should not have billing access", () => {
    expect(
      rolePermissions.Manager
    ).not.toContain("billing");
  });

  it("Viewer should only have dashboard and reports", () => {
    expect(rolePermissions.Viewer).toEqual([
      "dashboard",
      "reports",
    ]);
  });
});