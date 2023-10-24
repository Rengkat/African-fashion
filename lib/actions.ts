"use server";
import { revalidatePath } from "next/cache";

const projectId = "";
const dataset = "production";
const token = "";

export async function addUser(e: FormData) {
  const firstName = e.get("firstName");
  const surname = e.get("surname");
  const email = e.get("email");
  const phone = e.get("phone");
  const password = e.get("password");

  if (!firstName || !surname || !email) {
    throw new Error("Invalid");
  }
  // const existingUser = await getExistingUser(email);
  // console.log(existingUser);
  const user = {
    _type: "user",
    _id: "", // Replace with a unique ID for the user
    firstName,
    surname,
    email,
    phone,
    password,
    address: "",
    walletAmount: 0,
    subscribedToNewsletter: false,
  };

  await fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      mutations: [
        {
          createOrReplace: user,
        },
      ],
    }),
  });

  revalidatePath("/register");
}
