import { storage } from "@/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addFiles } from "@/API/fireStore";

export const fileUpload = (
  file: any,
  setProgress: Function,
//   parentId: string,
//   userEmail: string,
//   ownerEmail: string
) => {
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);
      console.log(progress)
    },
    (error) => {
      alert(error);
      console.log(error)
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        // addFiles(downloadURL
        //     // , file.name, parentId, userEmail, ownerEmail
        //     );
        console.log(downloadURL)
        addFiles(downloadURL)
      });
    }
  );
};
