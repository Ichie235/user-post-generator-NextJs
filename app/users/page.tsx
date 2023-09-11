import Link from "next/link";
import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";

export const metadata: Metadata={
  title: 'Users',
  description:'List of users',
}

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;
  

  const content = (
    <section>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}
