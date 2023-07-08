AFRAME.registerComponent("comics", {
    schema:{
      state:{type:"string",default:"places-list"},
      selectedCard:{type:"string",default:"#card1"}
    },
    init: function () {
      this.comicsContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
        const thumbNailsRef=[
            {
                id:"alpha-flight",
                title:"Alpha Flight",
                url:"assets/alphaFlight.png"
            },
            {
                id:"darling",
                title:"Darling",
                url:"assets/darling.jpg"
            },
            {
                id:"excalibur",
                title:"Excalibur",
                url:"assets/excaliber.jpg"
            },
            {
                id:"unknown",
                title:"Unknown",
                url:"assets/unknown.jpg"
            }
        ]
      let X= -60;
      for(var i of thumbNailsRef){
        const posX=X+25
        const posY=10
        const posZ=-40
        const position={x:posX,y:posY,z:posZ}
        X=posX
  
        const border=this.createBorder(position,i.id)
        
        const image=this.createImage(i)
        border.appendChild(image)
  
        const title=this.createTitle(position,i)
        border.appendChild(title)
  
        this.comicsContainer.appendChild(border)
        
      } 
  
      
    },
    createBorder:function(pos,id){
      const entity=document.createElement("a-entity")
      entity.setAttribute("id",id)
      entity.setAttribute("visible",true)
      entity.setAttribute("position",pos)
      entity.setAttribute("geometry",{primitive:"plane",width:22,height:27})
      entity.setAttribute("material",{color:"white"})
      entity.setAttribute("cursor-listener", {});
      return entity
    },
    createImage:function(i){
      const entity=document.createElement("a-entity")
      entity.setAttribute("visible",true)
      entity.setAttribute("geometry",{primitive:"plane",width:20,height:25})
      entity.setAttribute("material",{src:i.url})
      entity.setAttribute("position",{x:0,y:0,z:0.1})
      return entity
    },
    createTitle:function(pos,i){
      const entity=document.createElement("a-entity")
      entity.setAttribute("visible",true)
      const elPos=pos
      elPos.y=-20
      entity.setAttribute("position",elPos)
      entity.setAttribute("text",{font:"exo2bold",align:"center",width:70,color:"black",value:i.title})
      return entity
    },
  });
  