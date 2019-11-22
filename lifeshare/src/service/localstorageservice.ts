export const setToken = (token: string) => {
  localStorage.setItem("access", token);
};

export const getAccessToken = () => sessionStorage.getItem("access");
