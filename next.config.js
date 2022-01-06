const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: false,
	images: {
		domains: [
			"ec2-3-129-62-219.us-east-2.compute.amazonaws.com",
		],
	}
}
