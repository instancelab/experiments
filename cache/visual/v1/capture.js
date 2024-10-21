//Item 'DB'
//In an key:value store instead of a real DB for now
const ItemRegistry = {
	"PP-PROTO-PLMB-1": {
		"display_name": "Plumbo",
		"item_description": "Everyone has a Plumbo in their home",
		"source": "Watching Plumbo: How They Do It Special in 2015",
		"item_icon": "PLMB-1.png",
	},
	"PP-PROTO-SCBK-1": {
		"display_name": "Shrude Buck",
		"item_description": "Exchangeable for Stan's Nickels at the local beet farm",
		"source": "Finding a hidden Shrude Buck in the 'Workplace' flash game in 2016",
		"item_icon": "SCBK-1.png",
	},
	"PP-PROTO-PKST-1": {
		"display_name": "Pink Stapler",
		"item_description": "Belongs to Mildred. DO NOT STEAL",
		"source": "Watching to the end of the credits of the movie 'Workspace' in 2017",
		"item_icon": "PKST-1.png",
	},
	"PP-PROTO-PTPX-1": {
		"display_name": "Platinum Pickaxe",
		"item_description": "Pickaxe made from the most durable material in the Blockiverse",
		"source": "Unlocking the Platinum Pickaxe achievement in 'Blockiverse' in 2012",
		"item_icon": "PTPX-1.png",
	},
	"PP-PROTO-CMCB-1": {
		"display_name": "Friend Cube",
		"item_description": "The Friend Cube is a lie",
		"source": "Completing level 4-5 without using the Friend Cube in 'Teleport Hole' in 2009",
		"item_icon": "CMCB-1.png",
	},
	"PP-PROTO-ASNP-14": {
		"display_name": "AmberStone National Park 2014",
		"item_description": "2014 Edition of the AmberStone National Park Visitor Stamp",
		"source": "Visiting AmberStone National Park in 2014",
		"item_icon": "ASNP-14.png",
	},
	"PP-PROTO-RVNB-24": {
		"display_name": "Revival Nut Butter 2024",
		"item_description": "Great tasting nut butter that goes perfectly with the Jam",
		"source": "Participating in the Revival Jam 2024",
		"item_icon": "RVNB-24.png",
	},
	"PP-PROTO-RXVP-24": {
		"display_name": "VisualCache Prototype",
		"item_description": "First ever protype of the VisualCache",
		"source": "Trying out the VisualCache Prototype in 2024",
		"item_icon": "RXVP-24.png",
	},
	"PP-PROTO-DCSM-1": {
		"display_name": "DeCo's Smile",
		"item_description": "Reminder to smell more lemondates and make more roses, even when it's hard",
		"source": "Reading through the end of the VisualCache description on itch.io in 2024",
		"item_icon": "PLMB-2.png",
	},
	"PP-PROTO-MNLL-1": {
		"display_name": "Monet Lily",
		"item_description": "There's no debate that Lily is smiling in the painting :)",
		"source": "Visiting the Lube Museum to see the Monet Lily in person",
		"item_icon": "MNLL-1.png",
	},
	"PP-PROTO-LKPS-1": {
		"display_name": "Lucky Purple Socks",
		"item_description": "The same sock that the Governor is always wearing... Nobody knows why it was found at the local Orphanage",
		"source": "Completing the Governor's character sidequest in 'Moonlit Field' in 2012",
		"item_icon": "LKPS-1.png",
	},
	"PP-PROTO-GNEP-1": {
		"display_name": "Giant Eggplant",
		"item_description": "Our founding fathers, in their infinite wisdom, erected this statue at our capital to symbolize the importance of disseminating freedom and democracy",
		"source": "Finding a hidden code near the Giant Eggplant Monument",
		"item_icon": "GNEP-1.png",
	},
	"PP-PROTO-RKRL-1": {
		"display_name": "Rick Rolls",
		"item_description": "Never gonna give this joke up, never gonna let this habit down",
		"source": "Finding the solution to a popular online treasure hunt published by fuzzbead.com",
		"item_icon": "RKPRL-1.png",
	},
};

//Key "DB"
//In an key:value store instead of a real DB for now
const CodeRegistry = {
	"temporary_raven_paddling_tabloid_trickily": "PP-PROTO-RVNB-24",
	"temporary_elixir_ambiguity_patriot_overcrowd_helium": "PP-PROTO-RXVP-1",
	"temporary_vocalize_voicing_chamber_craziness_trance": "PP-PROTO-DCSM-1",
	"temporary_moonlight_nightfall_luminous_lily": "PP-PROTO-MNLL-1",
	"temporary_cresting_eastward_enable_unthread": "PP-PROTO-PKST-1",
	"temporary_bunkhouse_nappy_latch_earthly": "PP-PROTO-LKPS-1",
	"temporary_duo_escalator_quicksand_obstruct": "PP-PROTO-GNEP-1",
	"temporary_neuron_whacking_yield_deviator": "PP-PROTO-RKRL-1",
};

// Load Inventory from localStorage if it exists
//Instantiate otherwise
let Inventory = JSON.parse(localStorage.getItem('inventory')) || [
	"PP-PROTO-PLMB-1",
	"PP-PROTO-SCBK-1",
	"PP-PROTO-PTPX-1",
	"PP-PROTO-CMCB-1",
	"PP-PROTO-ASNP-14",
];
console.log(Inventory);

function displayInventory() {
	const inventoryDiv = document.getElementById('inventory');
	inventoryDiv.innerHTML = '';
	Inventory.forEach(itemCode => {
		const item = ItemRegistry[itemCode];
		const itemElement = document.createElement('div');
		itemElement.innerHTML = `
			<h2>${item.display_name}</h2>
			<p>${item.item_description}</p>
			<p><strong>Obtained by:</strong> ${item.source}</p>
			<img src="${item.item_icon}" alt="${item.display_name}" />
		`;
		inventoryDiv.appendChild(itemElement);
	});
}

// Reset/Initialize Inventory for debugging purposes
Window.resetInventory = function() {
	Inventory = [
		"PP-PROTO-PLMB-1",
		"PP-PROTO-SCBK-1",
		"PP-PROTO-PTPX-1",
		"PP-PROTO-CMCB-1",
		"PP-PROTO-ASNP-14",
	];
	localStorage.setItem('inventory', JSON.stringify(Inventory));
	location.reload();
}

// Function to get code from query params and add applicable item to the inventory
function addItemFromQueryParams() {
	const urlParams = new URLSearchParams(window.location.search);
	const code = urlParams.get('code');
	if (code && CodeRegistry[code]) {
		const itemId = CodeRegistry[code];
		if (!Inventory.includes(itemId)) {
			Inventory.push(itemId);
			localStorage.setItem('inventory', JSON.stringify(Inventory));
			console.log(`Item ${itemId} added to inventory.`);
			alert(`Yay! ${ItemRegistry[itemId].display_name} has been added to your inventory!`);
			displayInventory();
		} else {
			console.log(`Item ${itemId} is already in the inventory.`);
		}
	} else {
		console.log('Invalid or missing code in query params.');
	}
}

// Function to take manually entered code from the form and add applicable item
function addItemFromForm() {
	let codeInput = document.getElementById('code-type').value;
	console.log(codeInput);
	codeInput = codeInput.split(' ').join('_');
	console.log(codeInput);
	if (codeInput && CodeRegistry[codeInput]) {
		const itemId = CodeRegistry[codeInput];
		if (!Inventory.includes(itemId)) {
			Inventory.push(itemId);
			localStorage.setItem('inventory', JSON.stringify(Inventory));
			alert(`Yay! ${ItemRegistry[itemId].display_name} has been added to your inventory!`);
			console.log(`Item ${itemId} added to inventory.`);
			displayInventory();
		} else {
			console.log(`Item ${itemId} is already in the inventory.`);
		}
	} else {
		console.log('Invalid or missing code.');
	}
}

// Attach the function as an onclick listener to button#code-submit
document.getElementById('code-submit').onclick = addItemFromForm;

// Display the inventory on page load
displayInventory();

// Call the function to add item from query params if present
addItemFromQueryParams();