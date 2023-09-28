import fs from "fs";

const sideBarMenu = async (req, res) => {
	fs.readFile("data/sidebar-list-menu.json", "utf8", (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error reading JSON file");
			return;
		}
		// Send the JSON data as a response
		res.json(JSON.parse(data));
	});
};

export default sideBarMenu;
