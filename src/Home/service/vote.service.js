import axios from "axios";

export default async function vote({ selected }) {
  try {
    const response = await axios.post(
      "http://10.10.0.237:9000/vote",
      {
        voteName: selected,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error voting:", error);
    throw error;
  }
}
