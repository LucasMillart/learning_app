import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function MyJourneyPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Learning Journey</h1>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Welcome back, {user?.firstName || "Learner"}!</h2>
        <p className="text-gray-600 mb-4">User ID: {userId}</p>
        <p className="text-gray-600">Email: {user?.emailAddresses[0]?.emailAddress}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
        <p className="text-gray-600">This is where your learning journey and progress will be displayed.</p>
      </div>
    </div>
  );
}
