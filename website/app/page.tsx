import { db, desc } from "@database";
import { statuses } from "@database/schema";

export default async function Home() {
  const statusItems = await db.select().from(statuses).orderBy(desc(statuses.createdAt));

  return (
    <div className="flex min-h-screen items-start pt-16 justify-center font-mono bg-black">
      <main className="flex flex-col gap-4 w-full max-w-2xl p-6">
        <h1 className="text-4xl font-bold mb-4">Kan's Status Queue</h1>
        <div className="flex flex-col gap-4 border border-gray-500 p-4">
          {statusItems.length === 0 ? (
            <div className="flex flex-col">
              <p className="text-center text-gray-500">No status items!</p>
              <p className="text-center text-gray-600">Send '!status &lt;status&gt;' to add a status to the queue.</p>
            </div>
          ) : (
            statusItems.map((statusItem) => (
              <div key={statusItem.id} className="flex flex-col gap-2">
                <p>{statusItem.status}</p>
                <p>{statusItem.requester.username}</p>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
