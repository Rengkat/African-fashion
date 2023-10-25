import { OrderType } from "@/types";
import appwriteConfig, {
  databaseId,
  userCollectionId,
  cartCollectionId,
  wishlistCollectionId,
  stylistCollectionId,
  userChatCollectionId,
  chatsCollectionId,
  activeChatId,
  checkoutBucketId,
  orderCollectionId,
} from "./config";
import { Client, Account, ID, Databases, Query, Storage } from "appwrite";

// create client with endpoint and project id
export const appwriteClient = new Client()
  .setEndpoint(appwriteConfig.appwriteUrl)
  .setProject(appwriteConfig.projectId);
// now create an account with the client
export const account = new Account(appwriteClient);
export const db = new Databases(appwriteClient);
export const storage = new Storage(appwriteClient);

type CreateAccount = {
  email: string;
  name?: any;
  password: string;
  phone?: string;
  firstName: string;
  surname: string;
  company?: string;
};
type CreateCollection = {
  email: string;
  name?: any;
  phone?: string;
  firstName: string;
  surname: string;
  company?: string;
};
type LoginAccount = {
  email: string;
  name?: string;
  password: string;
  phone?: string;
};
interface userDatabase {
  firstName: string;
  surname: string;
  email: string;
  subscribedToNewsLetter: boolean;
  walletAmount: number;
  phone: string;
  profileImage: string;
  deliveryAddress: string;
  company?: string;
}
interface Cart {
  userId: string;
  imageURL: string;
  productName: string;
  minPrice: number;
  maxPrice: number;
  stylist: string;
  productId: string;
  quantity: number;
}
interface Wishlist {
  userId: string;
  imageURL: string;
  productName: string;
  minPrice: number;
  maxPrice: number;
  stylist: string;
  productId: string;
  uniqueId: string;
}
interface updateCart {
  userId?: string;
  quantity: number;
  uniqueId: string;
  // quantity: number;
}
interface RemovePro {
  productId: string;
}
interface UpdateUser {
  firstName: string;
  surname: string;
  state: string;
  city: string;
  phone: string;
  deliveryAddress: string;
  userId: string;
}
interface Chats {
  userName: string;
  combinedId: string;
  message: string;
  userId: string;
}

export class AppWriteService {
  // create a new account in side appwrite
  async createUserAccount({ email, password, phone, firstName, surname, company }: CreateAccount) {
    try {
      const userAccount = await account.create(ID.unique(), email, password, firstName);
      // if there is company, create stylist else create normal user
      if (company) {
        this.createStylistCollection({ email, phone, firstName, surname, company });
        if (userAccount) {
          return userAccount;
        } else {
          return { message: "Account already exist" };
        }
      } else {
        // create user document in the collection
        this.createUserCollection({ email, phone, firstName, surname });
        // if account exist, then call the login function else return the user
        if (userAccount) {
          return userAccount;
        } else {
          return { message: "Account already exist" };
        }
      }
    } catch (error) {
      throw error;
    }
  }
  //   login
  async loginUser({ email, password }: LoginAccount) {
    try {
      return await account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  // iLogin
  async isLogin() {
    try {
      // get the current user by calling the function
      const data = await this.getCurrentUser();
      return Boolean(data); //if there is current user, return true else false
    } catch (error) {}
    return false;
  }
  // get current user
  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      throw error;
    }
  }
  // logout
  async logOut() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  }
  // create user collection
  async createUserCollection({ email, phone, firstName, surname }: CreateCollection) {
    const userDocument = {
      firstName,
      surname,
      email,
      subscribedToNewsLetter: false,
      walletAmount: 0,
      phone,
      deliveryAddress: "",
      city: "",
      state: "",
    };

    await db.createDocument(databaseId, userCollectionId, ID.unique(), userDocument);
  }
  // create stylist collection
  async createStylistCollection({ email, phone, firstName, surname, company }: CreateCollection) {
    const userDocument = {
      firstName,
      surname,
      company,
      phone,
      website: "",
      companyDescription: " ",
      companyAddress: "",
      state: "",
      branches: "",
      facebook: "",
      twitter: "",
      instagram: "",
      pintrest: "",
      services: "",
      email,
    };

    await db.createDocument(databaseId, stylistCollectionId, ID.unique(), userDocument);
  }
  // Update user -> edit
  async updateUserCollection({
    phone,
    firstName,
    surname,
    state,
    city,
    deliveryAddress,
    userId,
  }: UpdateUser) {
    const userDocument = {
      firstName,
      surname,
      state,
      phone,
      city,
      deliveryAddress,
    };
    await db.updateDocument(databaseId, userCollectionId, userId, userDocument);
  }
  // update newsletter subscription
  async updateSubscription({
    userId,
    subscribedToNewsLetter,
  }: {
    userId: string;
    subscribedToNewsLetter: boolean;
  }) {
    const userDocument = {
      subscribedToNewsLetter,
    };
    await db.updateDocument(databaseId, userCollectionId, userId, userDocument);
  }
  // get current user collection
  async getCurrentUserCollection(userEmail: string) {
    try {
      const query = [Query.equal("email", userEmail)];
      const user = await db.listDocuments(databaseId, userCollectionId, query);
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  // get current stylist collection
  async getCurrentStylistCollection(userEmail: string) {
    try {
      const query = [Query.equal("email", userEmail)];
      const user = await db.listDocuments(databaseId, stylistCollectionId, query);
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  // get all stylist collection
  async getStylistCollection(id: string) {
    try {
      const query = [Query.equal("$id", id)];
      const user = await db.listDocuments(databaseId, userCollectionId, query);
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  // update stylist
  async updateStylist({
    website,
    companyDescription,
    companyAddress,
    state,
    city,
    branches,
    facebook,
    twitter,
    instagram,
    pintrest,
    services,
    stylistId,
  }: {
    website: string;
    companyDescription: string;
    companyAddress: string;
    state: string;
    city: string;
    branches: string;
    facebook: string;
    twitter: string;
    instagram: string;
    pintrest: string;
    services: string;
    stylistId: string;
  }) {
    try {
      const userDocument = {
        website,
        companyDescription,
        companyAddress,
        state,
        branches,
        facebook,
        twitter,
        instagram,
        pintrest,
      };
      // console.log(userDocument);
      await db.updateDocument(databaseId, stylistCollectionId, stylistId, userDocument);
    } catch (error) {}
  }

  async addToCart({
    userId,
    productName,
    maxPrice,
    minPrice,
    imageURL,
    stylist,
    productId,
    quantity,
  }: Cart) {
    try {
      const cartProps = {
        userId,
        productName,
        maxPrice,
        minPrice,
        imageURL,
        stylist,
        productId,
        quantity,
      };
      await db.createDocument(databaseId, cartCollectionId, ID.unique(), cartProps);
    } catch (error) {}
  }

  // create wishlist
  async createWishlist({
    userId,
    productName,
    maxPrice,
    minPrice,
    imageURL,
    stylist,
    productId,
    uniqueId,
  }: Wishlist) {
    const newWishlist = { userId, productName, maxPrice, minPrice, imageURL, stylist, productId };
    try {
      await db.createDocument(
        databaseId,
        wishlistCollectionId,
        uniqueId ?? ID.unique(),
        newWishlist
      );
    } catch (error) {}
  }

  // remove product from cart
  async removeProduct(uniqueId: string) {
    try {
      await db.deleteDocument(databaseId, cartCollectionId, uniqueId);
    } catch (error) {}
  }
  // get specific cart product
  async getCartProducts(userId: string) {
    try {
      const query = [Query.equal("userId", userId)];
      const cart = await db.listDocuments(databaseId, cartCollectionId, query);
      return cart.documents;
    } catch (error) {}
  }
  // check if the product is cart
  async isProductInCart({ productId, userId }: { productId: string; userId: string }) {
    try {
      const query = [Query.equal("userId", userId), Query.equal("productId", productId)];
      const product = await db.listDocuments(databaseId, cartCollectionId, query);

      return product.documents[0];
    } catch (error) {
      console.error("Error checking product in cart:", error);
      return false;
    }
  }
  // get wishlist base on user id
  async getWishlist(userId: string) {
    try {
      const query = [Query.equal("userId", userId)];
      const data = await db.listDocuments(databaseId, wishlistCollectionId, query);
      return data;
    } catch (error) {}
  }

  async removeWishlist($id: string) {
    try {
      await db.deleteDocument(databaseId, wishlistCollectionId, $id);
    } catch (error) {}
  }
  // get all stylist
  async getStylists() {
    try {
      const data = await db.listDocuments(databaseId, stylistCollectionId);
      return data;
    } catch (error) {}
  }
  // get single stylist
  async getSingleStylist(id: string) {
    try {
      const stylist = await db.getDocument(databaseId, stylistCollectionId, id);
      return stylist;
    } catch (error) {
      console.error("Error checking product in cart:", error);
      return false;
    }
  }
  // messages
  async createUserChats({
    senderId,
    senderName,
    receiverId,
    receiverName,
  }: {
    senderId: string;
    senderName: string;
    receiverId: string;
    receiverName: string;
  }) {
    await db.createDocument(databaseId, userChatCollectionId, ID.unique(), {
      userName: receiverName,
      userId: receiverId,
      currentUserId: senderId,
    });
    await db.createDocument(databaseId, userChatCollectionId, ID.unique(), {
      userName: senderName,
      userId: senderId,
      currentUserId: receiverId,
    });

    try {
    } catch (error) {}
  }
  async createChats({ combinedId, message, userId, userName }: Chats) {
    const user = {
      userName,
      combinedId,
      message,
      userId,
    };
    try {
      await db.createDocument(databaseId, chatsCollectionId, ID.unique(), user);
    } catch (error) {}
  }
  async getUserChats(currentUserId: string) {
    try {
      const senderIdQuery = [Query.equal("currentUserId", currentUserId)];
      const response = await db.listDocuments(databaseId, userChatCollectionId, senderIdQuery);
      return response?.documents;
    } catch (error) {}
  }

  async getSingleUserChats(userId: string) {
    const query = [Query.equal("userId", userId)];
    try {
      const response = await db.listDocuments(databaseId, userChatCollectionId, query);
      return Boolean(response.documents[0]);
    } catch (error) {}
  }
  async getChats(combinedId: string) {
    try {
      const query = [Query.equal("combinedId", combinedId)];
      const chats = await db.listDocuments(databaseId, chatsCollectionId, query);

      return chats.documents;
    } catch (error) {}
  }
  // ACTIVE CHART
  async createActiveChat({
    combinedId,
    userName,
    userId,
    currentUserId,
  }: {
    combinedId: string;
    userName: string;
    userId: string;
    currentUserId: string;
  }) {
    try {
      await db.createDocument(databaseId, activeChatId, ID.unique(), {
        combinedId,
        userName,
        userId,
        currentUserId,
      });
    } catch (error) {}
  }
  async updateActiveChat({
    combinedId,
    userName,
    userId,
    id,
  }: {
    combinedId: string;
    userName: string;
    userId: string;
    id: string;
  }) {
    await db.updateDocument(databaseId, activeChatId, id, { combinedId, userName, userId });
  }
  async getActiveChat(combinedId: string) {
    try {
      const query = [Query.equal("combinedId", combinedId)];
      const data = await db.listDocuments(databaseId, activeChatId, query);

      return data.documents[0];
    } catch (error) {}
  }

  async createImg({ imgFile }: { imgFile: any }) {
    try {
      const img = await storage.createFile(checkoutBucketId, ID.unique(), imgFile);

      return img;
    } catch (error) {}
  }
  async getOrders({ userId }: { userId: string }) {
    const query = [Query.equal("userId", userId)];
    try {
      const orders = await db.listDocuments(databaseId, orderCollectionId, query);
      return orders.documents;
    } catch (error) {}
  }
  // create order, that is checkout
  async createOrders({
    sampleImageId,
    calf,
    biceps,
    hipToAnkle,
    insideLegOrInseam,
    hipToKnee,
    frontBodice,
    wrist,
    arm,
    tight,
    shoulder,
    neck,
    upperHip,
    upperBust,
    hips,
    waist,
    bustOrChest,
    userId,
    productName,
    maxPrice,
    minPrice,
    imageURL,
    stylist,
    productId,
    quantity,
    deliveryDate,
    balance,
    amounPaid,
    price,
    status,
  }: OrderType) {
    try {
      const orderData = {
        sampleImageId,
        calf,
        biceps,
        hipToAnkle,
        insideLegOrInseam,
        hipToKnee,
        frontBodice,
        wrist,
        arm,
        tight,
        shoulder,
        neck,
        upperHip,
        upperBust,
        hips,
        waist,
        bustOrChest,
        userId,
        productName,
        maxPrice,
        minPrice,
        imageURL,
        stylist,
        productId,
        quantity,
        deliveryDate,
        balance,
        amounPaid,
        price,
        status,
      };

      await db.createDocument(databaseId, orderCollectionId, ID.unique(), orderData);
    } catch (error) {}
  }
}
const appwriteServices = new AppWriteService();
export default appwriteServices;
