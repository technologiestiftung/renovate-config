module.exports = {
	extends: "@technologiestiftung/semantic-release-config",
	branches: ["master", { name: "next", prerelease: true }],
	npmPublish: true,
	dryRun: false,
};
