AFRAME.registerComponent("info-banner",{
    schema:{
        itemId:{default:"",type:"string"}
    },
    update:function(){
        this.createBanner()
        console.log(itemId)
    },
    createBanner:function(){
        comicsInfo={
              "alpha-flight": {
                url:"assets/alphaFlight.png",
                title: "Alpha Flight",
                released_year: "1983",
                description:
                  "Alpha Flight is a team of superhuman Canadian operatives that originated in the private sector with an engineer named James MacDonald Hudson who had developed an exoskeleton to assist in geological exploration. When Hudson learned that the U.S. military had appropriated his invention, he destroyed the plans and made off with the helmet necessary to control the apparatus.",
              },
              darling: {
                url:"assets/darling.jpg",
                title: "Darling",
                released_year: "2018",
                description:
                  "The premise of Darling in the Franxx has humanity under siege from violent creatures called klaxosaurs. To protect the remnants of mankind against this threat, humanoid parasites are bred specifically to pilot mecha robotscalled Franxx",
              },
              excalibur: {
                url:"assets/excaliber.jpg",
                title: "Excalibur",
                released_year: "1987",
                description:
                  "Excalibur is a fictional superhero group appearing in American comic books published by Marvel Comics. They are depicted as an offshoot of the X-Men, usually based in the United Kingdom. Conceived by writer Chris Claremont and artist/co-writer Alan Davis, they first appeared in Excalibur Special Edition #1 (1987), also known as Excalibur: The Sword is Drawn",
              },
              unknown: {
                url:"assets/unknown.jpg",
                title: "Unknown",
                released_year: "1978",
                description:
                  "Murray Langston (born 1945, Dartmouth, Nova Scotia, Canada) is a Canadian comedian and writer. His television work includes The Sonny and Cher Comedy Hour, Make Me Laugh, and The Gong Show.Langston is best known, oddly enough, as The Unknown Comic – a comedian who appears onstage wearing a paper bag over his head.",
              },
        }

        const {itemId}=this.data
        const fadeBackground=document.querySelector("#fadeBackground")
        const entity = document.createElement("a-entity");
        entity.setAttribute("visible", true);
        entity.setAttribute("id", `${itemId}-banner`);

        entity.setAttribute("geometry", {
            primitive: "plane",
            width: 1,
            height: 1.5,
        });
        entity.setAttribute("material", { color: "#fff" });
        entity.setAttribute("position", { x: 0, y: -0.01, z: -1 });

        const item = comicsInfo[itemId];

        const image = this.createImageEl(item);
        const title = this.createTitleEl(item);
        const description = this.createDescriptionEl(item);

        entity.appendChild(image);
        entity.appendChild(title);
        entity.appendChild(description);

        fadeBackground.appendChild(entity);
    },
    createImageEl: function (item) {
        const entity = document.createElement("a-entity");
        entity.setAttribute("visible", true);
        entity.setAttribute("geometry", {
          primitive: "plane",
          width: 0.90,
          height: 0.8,
        });
        entity.setAttribute("material", { src: item.url });
        entity.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
        return entity;
    },
    createTitleEl: function (item) {
        const entity = document.createElement("a-entity");
        entity.setAttribute("visible", true);
        entity.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          
          width: 1.2,
          height: 2,
          color: "#000",
          value: `${item.title} (${item.released_year})`,
        });
        entity.setAttribute("position", { x: -0.4, y: -0.22, z: 0.05 });
        return entity;
    },
    createDescriptionEl: function (item) {
        const entity = document.createElement("a-entity");
        entity.setAttribute("visible", true);
        entity.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          width: 0.75,
          height: 2,
          color: "#000",   
          value: item.description,
        });
        entity.setAttribute("position", { x: -0.4, y: -0.44, z: 0.05 });
        return entity;
    },
})