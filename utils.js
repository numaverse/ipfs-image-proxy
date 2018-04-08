const sharp = require('sharp');
const request = require('request-promise-native');

module.exports = {
  resize: function (file, query) {
    const { height, width, size } = query;
    let img = sharp(file)
    if (size) {
      const s = parseInt(size);
      img = img.resize(s,s);
    } else if (height || width) {
      img = img.resize(parseInt(width), parseInt(height));
    }
    return img.toBuffer();
  },
  ipfs: function (hash) {
    let url = process.env.IPFS_URL || "http://localhost:8080";
    url += `/ipfs/${hash}/`;
    return request({
      uri: url,
      encoding: null
    });
  }
}