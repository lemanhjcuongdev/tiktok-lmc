import * as request from "~/utils/request";

export const search = async (q, type = "less") => {
  try {
    const res = await request.get("users/search", {
      params: {
        q,
        type,
      },
    });
    // .then((res) => res.json())
    // setSearchResult(res.data);
    // setLoading(false);
    return res.data;
  } catch (error) {
    console.log(error);
  }

  // setLoading(false);
};
