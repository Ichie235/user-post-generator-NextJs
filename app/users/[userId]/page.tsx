import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";
import getAllUsers from "@/lib/getAllUsers";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";

import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  if (!user.name) {
    return {
      title: "User not found",
    };
  }
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  const user = await userData;
  if(!user.name) return notFound()
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

// The codde helps to generate SSG(Static site generation) instead of static site rendering
export async function generateStaticParams() {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;

  return users.map((user) => {
    {
      userId: user.id.toString();
    }
  });
}
