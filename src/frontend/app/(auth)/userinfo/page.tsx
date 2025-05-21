import Image from "next/image";
import { auth0 } from "@/lib/auth0";

export default async function UserInfoPage() {
  const { user } = (await auth0.getSession()) ?? {};
  return (
    user &&
    user.picture &&
    user.name && (
      <div>
        <Image src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.nickname}</p>
      </div>
    )
  );
}
