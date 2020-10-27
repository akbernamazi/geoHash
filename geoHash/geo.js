var geohash = require("ngeohash");

exports.getGeoHash = (req, res) => {
  return res.status(200).json({
    geohashcode: geohash.encode(req.query.latitude, req.query.longitude),
  });
};
