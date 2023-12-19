let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb",

    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
]

let mainDiv = document.getElementById("mainDiv");
mainDiv.innerHTML = `
<h1>MOBILE INFORMATION</h1>
<label for="key">Select Option</label>
<select name="" id="key">
    <option value="default">Default</option>
    <option value="brand">Brand</option>
    <option value="model">Model</option>
    <option value="price">Price</option>
    <option value="camera">Camera</option>
    <option value="ram">Ram</option>
    <option value="rom">Rom</option>
</select>

<label for="value">& </label>
<input type="text" id="value" placeholder="Search">

<button onclick="search()">Search</button>
<button onclick="deleted()">Delete</button>`


let search = (() => {
    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;

    value = value.split(" ").join('');
    // console.log(value)

    value = value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();

    value =
        value == "Samsunga30" ? "SamsungA30" :
            value == "Samsunga10" ? "SamsungA10" :
                value == "Samsunga20" ? "SamsungA20" :
                    value == "Vivoy20" ? "VivoY20" :
                        value == "Vivoy15" ? "VivoY15" :
                            value == "Vivoy11" ? "VivoY11" :
                                value == "Iphonex" ? "IphoneX" : value;


    // console.log(`${key}: ${value}`);

    let result = arr.filter((obj) => {
        const { brand, camera, model, price, ram, rom } = obj;

        if (key == "brand" && brand == value) {
            // console.log(obj);
            return obj
        }
        else if (key == "camera" && camera == value) {
            // console.log(obj);
            return obj
        }
        else if (key == "model" && model == value) {
            // console.log(obj);
            return obj
        }
        else if (key == "price" && price == value) {
            // console.log(obj);
            return obj
        }
        else if (key == "ram" && ram == value) {
            // console.log(obj);
            return obj
        }
        else if (key == "rom" && rom == value) {
            // console.log(obj);
            return obj
        }
    })
    console.log(result);

    if (key == "default") {
        alert("Please Select the Option");
    }
    else if (result.length === 0) {
        // console.log()
        key = key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase();
        let mainDiv3 = document.getElementById("mainDiv3");
        mainDiv3.setAttribute("class", "div2");
        mainDiv3.innerHTML = `<h2>${key}: ${value} Not Found!</h2>`
        mainDiv2.innerHTML = "";
        mainDiv2.setAttribute("class", "div");
    }

    result.forEach((select_obj) => {
        mainDiv3.innerHTML = "";
        mainDiv3.setAttribute("class", "div");
        const { brand, camera, model, price, ram, rom } = select_obj;
        let mainDiv2 = document.getElementById("mainDiv2");
        mainDiv2.setAttribute("class", "div2");
        mainDiv2.innerHTML += `
        <h4 style="margin-top: 10px;">Brand: ${brand} </h4>
        <h4>Model: ${model} </h4>
        <h4>Price: ${price} </h4>
        <h4>Camera: ${camera} </h4>
        <h4>Ram: ${ram} </h4>
        <h4 style="border-bottom: 10px double black; width: 100%; padding-bottom: 10px;">
        Rom: ${rom}</h4> `
    })
    value = document.getElementById("value").value = "";
})

let deleted = (() => {
    mainDiv2.setAttribute("class", "div");
    mainDiv2.innerHTML = "";
    mainDiv3.setAttribute("class", "div");
    mainDiv3.innerHTML = "";
})


