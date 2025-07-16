import Image from "next/image";
import { auth0 } from "@/lib/auth0";

export default async function UserInfoPage() {
  const { user } = (await auth0.getSession()) ?? {};
  console.log(user);
  try {
    console.log((await auth0.getAccessToken()).token);
  } catch (err) {
    console.error(err);
  }
  return (
    user &&
    user.picture &&
    user.name && (
      <div>
        <Image src={user.picture} alt={user.name} width={100} height={100} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.nickname}</p>
      </div>
    )
  );
}
