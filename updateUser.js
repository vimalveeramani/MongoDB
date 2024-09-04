db.updateUser("admin", {
  roles: [
    { role: "backup", db: "admin" }
  ]
});
