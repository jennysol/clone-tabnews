import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  const defaultMigrationOptions = {
      databaseUrl: process.env.DATABASE_URL,
      dryRun: true,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
  }

  if (request.method === "GET") {
    const migrations = await migrationRunner(defaultMigrationOptions);
    return response.status(200).json(migrations);
  }

  if (request.method === "POST") {
    const migrations = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun: false,
    });
    return response.status(200).json(migrations);
  }

  if (migrations.length > 0) {
    return response.status(201).end();
  }

  return response.status(200).end();
}
