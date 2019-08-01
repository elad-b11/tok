const layers = [
    {
        _id: "aaa",
        name:"שכבה יפה",
        description: "Bla bla bla",
        creationTime: new Date().toDateString(),
        logo: require("../assets/tree.png")
    },
    {
        _id: "bbb",
        name:"וואו",
        description: "Bla bla bla",
        creationTime: new Date().toDateString(),
        logo: require("../assets/tree.png")
    },
    {
        _id: "ccc",
        name:"איזה יופי",
        description: "Bla bla bla",
        creationTime: new Date().toDateString(),
        logo: require("../assets/tree.png")
    },
    {
        _id: "ddd",
        name:"Layer",
        description: "Bla bla bla",
        creationTime: new Date().toDateString(),
        logo: require("../assets/tree.png")
    },
    {
        _id: "eee",
        name:"שכבה מקורית",
        description: "Bla bla bla",
        creationTime: new Date().toDateString(),
        logo: require("../assets/tree.png")
    }
];

const fields = {
    [Date.now().toString()]: {
        displayName: "זה שדה טקסט",
        description: "woaw",
        inputType: {
            type: "string"
        },
        isRequired: true,
        defaultValue: null,
        readOnly: false,
        isNotEditable: false
    },        
    [Date.now().toString()]: {
        displayName: "זה שדה מספר",
        description: "woaw",
        inputType: {
            type: "number"
        },
        isRequired: true,
        defaultValue: null,
        readOnly: false,
        isNotEditable: false
    }        
}

const getFullLayer = (id) => {
    let layer = Object.assign({}, layers.find((layer) => layer._id === id));
    layer.fields = JSON.parse(JSON.stringify(fields));

    return layer;
}

const sleep = (ms = 2000) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve();},ms);
    });
};

export default {
    getLayersTree: async () => {
        await sleep();

        return layers;
    },
    getLayerById: async (id) => {
        await sleep();

        return getFullLayer(id)
    }
}