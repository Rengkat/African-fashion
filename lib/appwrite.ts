import appwriteConfig, {
  databaseId,
  userCollectionId,
  cartCollectionId,
  wishlistCollectionId,
  stylistCollectionId,
} from "./config";
import { Client, Account, ID, Databases, Query } from "appwrite";

// create client with endpoint and project id
const appwriteClient = new Client()
  .setEndpoint(appwriteConfig.appwriteUrl)
  .setProject(appwriteConfig.projectId);
// now create an account with the client
export const account = new Account(appwriteClient);
export const db = new Databases(appwriteClient);
const uniqueId = ID.unique();

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
}
interface updateCart {
  userId?: string;
  quantity: number;
  productId: string;
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
  async isLogin() {
    try {
      // get the current user by calling the function
      const data = await this.getCurrentUser();
      return Boolean(data); //if there is current user, return true else false
    } catch (error) {}
    return false;
  }
  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      throw error;
    }
  }
  async logOut() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  }
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
      const user = [Query.equal("userId", userId)];
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
      await db.createDocument(databaseId, cartCollectionId, productId, cartProps);
    } catch (error) {}
  }

  async createOrders() {}
  async createWishlist({
    userId,
    productName,
    maxPrice,
    minPrice,
    imageURL,
    stylist,
    productId,
  }: Wishlist) {
    const newWishlist = { userId, productName, maxPrice, minPrice, imageURL, stylist, productId };
    try {
      await db.createDocument(databaseId, wishlistCollectionId, productId, newWishlist);
    } catch (error) {}
  }
  // increase qty
  async updateProductQty({ productId, quantity }: updateCart) {
    const updateQty = {
      quantity,
    };
    await db.updateDocument(databaseId, cartCollectionId, productId, updateQty);
  }

  async removeProduct({ productId }: RemovePro) {
    try {
      await db.deleteDocument(databaseId, cartCollectionId, productId);
    } catch (error) {}
  }
  async getCartProducts(userId: string) {
    try {
      const query = [Query.equal("userId", userId)];
      const cart = await db.listDocuments(databaseId, cartCollectionId, query);
      return cart;
    } catch (error) {}
  }
  async isProductInCart(productId: string) {
    try {
      const product = await db.getDocument(databaseId, cartCollectionId, productId);
      return product;
    } catch (error) {
      console.error("Error checking product in cart:", error);
      return false;
    }
  }

  async getWishlist(userId: string) {
    try {
      const query = [Query.equal("userId", userId)];
      const data = await db.listDocuments(databaseId, wishlistCollectionId, query);
      return data;
    } catch (error) {}
  }
  async getOrders() {}
  async removeWishlist(productId: string) {
    try {
      await db.deleteDocument(databaseId, wishlistCollectionId, productId);
    } catch (error) {}
  }
  async getStylists() {
    try {
      const data = await db.listDocuments(databaseId, stylistCollectionId);
      return data;
    } catch (error) {}
  }
  async getSingleStylist(id: string) {
    try {
      const stylist = await db.getDocument(databaseId, stylistCollectionId, id);
      return stylist;
    } catch (error) {
      console.error("Error checking product in cart:", error);
      return false;
    }
  }
}
const appwriteServices = new AppWriteService();
export default appwriteServices;
