import { db } from "@/firebase";
import { collection, getDocs, query } from "firebase/firestore";

const getMaxPageNumber = async (collectionName: string) => {
  const pageSize = 9;
  const totalDocuments: any["item"][] = [];

  const querySnapshot = await getDocs(query(collection(db, collectionName)));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    totalDocuments.push(data);
  });

  return Math.ceil(totalDocuments.length / pageSize);
};

export default getMaxPageNumber;
