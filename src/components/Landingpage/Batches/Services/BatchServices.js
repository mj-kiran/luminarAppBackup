
import axios from "axios";



export const getBatchlist = async () => {
  try {
    const response = await axios.get("/sample.json");
    // console.log(data.batches ,"data");
    return response.data.batches;
  } catch (error) {
    return console.error();
  }
};

export const createBatch = async (formData) => {
  try {
    const response = await axios.post("/sample.json", formData);
    console.log("Data submitted:", response.data);
    return response.data;
  } catch (error) {
    console.error("An error occurred while creating the batch:", error);
    throw error;
  }
};
