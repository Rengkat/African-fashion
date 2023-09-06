"use server";
import { revalidatePath } from "next/cache";
import { getExistingUser } from "./data";

const projectId = "c72jrony";
const dataset = "production";
const apiVersion = "2021-10-21";
const useCdn = false;
const token =
  "skTuALx0QzthYyyyOIbo7l8FhOFNPtMklWNpOiUR6gvipgpMb6J0RVkpglDriIPL4WYTvulPOUEKOooAXn5GuMLV1pVxWws41RVthqoQM3f2pdXWS6XeKzC0fqWi3yI70xfO7LqXr5ZfBsGxmX8XddNG3VmRkNie4oq3jbCJlkzyzVwci0gs";

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
    _id: "23456hltyhf56yhbsdrt", // Replace with a unique ID for the user
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
