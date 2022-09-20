const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

// const fakeStoreURL = `https://fakestoreapi.com/products`;
router.get("/products", async (req, res) => {
  try {
    // const urlWithQuery = fakeStoreURL;
    const storeData = await axios.get(`https://fakestoreapi.com/products`);
    const stData = res.json(storeData.data);
    // console.log(stData);
  } catch (err) {
    res.json({ msg: err });
  }
});

// router.get("/c", async (req, res) => {
//   try {
//     const urlWithQuery = newsURL + req.query.q;
//     const newres = await axios.get(urlWithQuery);
//     res.json(newres.data);
//   } catch (err) {
//     res.json({ msg: err });
//   }
// });
module.exports = router;
