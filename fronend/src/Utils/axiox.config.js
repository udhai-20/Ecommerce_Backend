export const base_Url_Users = "http://localhost:4000/user";
export const base_Url_Prod = "http://localhost:4000/product";
export const base_Url_Prod_category = "http://localhost:4000/prod-category";
export const base_Url_Blog = "http://localhost:4000/blog";
export const base_Url_Blog_category = "http://localhost:4000/blog-category";
export const base_Url_Brand = "http://localhost:4000/brand";
export const base_Url_Coupon = "http://localhost:4000/coupon";

const getTokenfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
console.log("getTokenfromLocalStorage:", getTokenfromLocalStorage?.token);
export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenfromLocalStorage !== null ? getTokenfromLocalStorage.token : ""
    } `,
    Accept: "application/json",
  },
};
