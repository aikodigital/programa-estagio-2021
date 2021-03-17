import Api from "./api";

const auth = () => {
  return Api().post(
    "/Login/Autenticar?token=2ceaac44440040366698dbd20afa388f939ccf4565b626ce0f0b3fbbcbc0c5c9"
  );
};

export { auth };
