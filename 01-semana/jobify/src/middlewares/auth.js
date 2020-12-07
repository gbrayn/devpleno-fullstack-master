export default function auth(req, res, next) {
  if (req.hostname === "localhost") {
    return next();
  } else {
    res.send("Not allowed");
  }
}
