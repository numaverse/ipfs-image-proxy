A very simple node.js server for resizing IPFS images. Meant to be hosted on the same machine as an IPFS daemon.

It's expected that you're running an IPFS daemon on the same server, to reduce bandwidth.

Usage with docker:

~~~
docker run --name ipfs-images -p 127.0.0.1:3000:3000 -d --net host numachain/ipfs-images
~~~

You can then fetch images at: localhost:3000/image/{ipfs_hash}?size={pixels}

There is also a live-running example at https://ipfs.numaverse.com/, where you can fetch images like so:

https://ipfs.numaverse.com/image/QmQn2CMA8m3aHutjXbrh74aj58aS6bwjs59NP2bsWcKM9Q?size=400

