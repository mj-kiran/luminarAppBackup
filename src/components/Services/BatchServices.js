
import axios from "axios";
import { AccessToken } from "./AccessToken/AccessToken";

export const getBatchlist = async () => {
  try {
    const response = await axios.get(
      "http://54.172.42.22/api/v1/batches/list/",
      {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(data.batches ,"data");
    return response.data.batches;
  } catch (error) {
    return console.error();
  }
};

export const createBatch = async (formData) => {
  try {
    const response = await axios.post(
      `http://54.172.42.22/api/v1/batches/create/${formData.course}/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Data submitted:", response.data);
    return response.data;
  } catch (error) {
    console.error("An error occurred while creating the batch:", error);
    throw error;
  }
};
