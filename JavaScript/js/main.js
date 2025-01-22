const attributes = [
	{
		path: "./assets/water/",
		content: "水系",
		pokemon: ["傑尼龜", "卡咪龜", "水箭龜"]
	},
	{
		path: "./assets/fire/",
		content: "火系",
		pokemon: ["小火龍", "火恐龍", "噴火龍"]
	},
	{
		path: "./assets/grass/",
		content: "草系",
		pokemon: ["妙蛙種子", "妙蛙草", "妙蛙花"]
	}
]

var attribute = attributes[2]
var tool_open = false

var body = document.getElementsByTagName("body")[0]
var picture_container = document.getElementById("picture-container")
var item_container = document.getElementById("item-container")
var tool = document.getElementsByTagName("span")[0]

const changePicture = (index) => {
	for (var i = picture_container.childElementCount - 1; i >= 0; i--) {
		picture_container.removeChild(picture_container.children[i]);
	}

	var picture = document.createElement("img")
	picture.src = attribute.path + index + ".png"
	picture.alt = "A Pokemon picture!"
	picture_container.appendChild(picture)

	var name = document.createElement("div")
	name.classList.add("text")
	name.classList.add("lxgw-wenkai-tc-regular")
	name.innerHTML = attribute.pokemon[index]
	picture_container.appendChild(name)
}

const changeAttribute = (index) => {
	attribute = attributes[index]

	changePicture(0)

	for (var i = item_container.childElementCount - 1; i >= 0; i--) {
		item_container.removeChild(item_container.children[i]);
	}

	attribute.pokemon.forEach((pokemon_name, i) => {
		var item = document.createElement("div")
		item.classList.add("text")
		item.classList.add("lxgw-wenkai-tc-regular")
		item.classList.add("item")
		item.innerHTML = pokemon_name
		item.addEventListener("click", () => changePicture(i))
		item_container.appendChild(item)
	})
}

const clickTool = () => {
	if (tool_open) {
		tool_open = false
		closeTool()
	} else {
		tool_open = true
		openTool()
	}
	console.log(tool_open)
}

const openTool = () => {
	var cover = document.createElement("div")
	cover.classList.add("cover")
	cover.addEventListener("click", () => {
		tool_open = false
		closeTool()
		console.log(tool_open)
	})
	body.appendChild(cover)

	var attribute_container = document.createElement("div")
	attribute_container.setAttribute("id", "attribute-container")
	attributes.forEach((attr, i) => {
		var attribute_item = document.createElement("div")
		attribute_item.classList.add("text")
		attribute_item.classList.add("lxgw-wenkai-tc-regular")
		attribute_item.classList.add("attribute")
		attribute_item.innerHTML = attr.content
		attribute_item.addEventListener("click", () => {
			changeAttribute(i)
			tool_open = false
			closeTool()
		})
		attribute_container.appendChild(attribute_item)
	})
	body.appendChild(attribute_container)

	var icon = document.getElementsByClassName("icon")[0]
	icon.style = "background: rgba(255, 150, 150, 1);"
}

const closeTool = () => {
	var cover = document.getElementsByClassName("cover")[0]
	body.removeChild(cover)

	var attribute_container = document.getElementById("attribute-container")
	body.removeChild(attribute_container)

	var icon = document.getElementsByClassName("icon")[0]
	icon.style = "background: rgba(255, 150, 150, 0);"
}

tool.addEventListener("click", clickTool)

changeAttribute(2)