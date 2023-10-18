import axios from "axios";

// export const getCourses = async () => {
//   try {
//     const response = await axios.get(`http://3.82.58.104:8000/api/student/courses/`);
//     console.log(response.data.data, "data");
//       return response.data.data
      
//   } catch (error) {
//      console.error("Error fetching courses:", error);
//      throw error;
//   }
// };

export const createCourse = async (formData) => {
  try {
    const response = await axios.post(`http://3.82.58.104:8000/api/student/courses/`,formData );
    console.log("Data submitted:", response.data);
    return response.data;
  } catch (error) {
    console.error("An error occurred while creating the batch:", error);
    throw error;
  }
};