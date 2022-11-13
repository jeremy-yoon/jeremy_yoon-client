const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

var ADDRESS = "http://api.jeremy-yoon.com";

if (development) {
  // ADDRESS = "http://localhost:8000";
  // ADDRESS = "http://3.35.90.26:8000";
  ADDRESS = "http://api.jeremy-yoon.com";
}

const ROOT_URL = ADDRESS;

export { ROOT_URL };
