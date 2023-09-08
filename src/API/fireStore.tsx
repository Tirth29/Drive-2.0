import { database } from "@/firebaseConfig";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";

const files = collection(database, "files");

export const addFiles = (
  imageLink: string
//   imageName: string,
//   parentId: string,
//   userEmail: string,
//   ownerEmail: string
) => {
  try {
    addDoc(files, {
      imageLink: imageLink
    //   imageName: imageName,
    //   isFolder: false,
    //   parentId: parentId,
    //   userEmail: userEmail,
    //   sharedTo: ownerEmail ? [ownerEmail] : [],
    });
  } catch (err) {
    console.log(err);
  }
};