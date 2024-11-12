import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const upload = async (file) => {
  //   const date = new Date();
  //   const storageRef = ref(storage, `images/${date + file.name}`);

  //   const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    const downloadURL =
      "https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg";
    resolve(downloadURL);
  });

  //   return new Promise((resolve, reject) => {
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         // switch (snapshot.state) {
  //         //   case "paused":
  //         //     console.log("Upload is paused");
  //         //     break;
  //         //   case "running":
  //         //     console.log("Upload is running");
  //         //     break;
  //         // }
  //       },
  //       (error) => {
  //         reject("Something went wrong!!" + error.code);
  //       },
  //       () => {
  //         // Handle successful uploads on complete
  //         // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           resolve(downloadURL);
  //           console.log("File available at", downloadURL);
  //         });
  //       }
  //     );
  //   });
};

export default upload;
