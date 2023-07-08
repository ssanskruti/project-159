AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
    },
    update:function(){
        const fadeBackground=document.querySelector("#fadeBackground")
        c=fadeBackground.children
        
        if(c.length>0){
            var i
            for(i=0;i<=c.length;i++){
                fadeBackground.removeChild(c[i])
            }
        }
        else{
            this.handleMouseClickEvent()
        }
    },
    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            const id=this.el.getAttribute("id")
            const comicsId=["alpha-flight","darling","excalibur","unknown"]
            if(comicsId.includes(id)){
                const comicsContainer=document.querySelector("#comics-container")
                comicsContainer.setAttribute("cursor-listener",{selectedItemId:id})
                this.el.setAttribute("material",{color:"blue"})
            }
        })
    },
    handleMouseLeaveEvent:function(){
        this.el.addEventListener("mouseleave",()=>{
            if(this.data.selectedItemId){
                const el=document.querySelector(`#${this.data.selectedItemId}`)
                const id=el.getAttribute("id")
                if(id==this.data.selectedItemId){
                    el.setAttribute("material",{color:"white"})
                }
            }
        })
    },
    handleMouseClickEvent:function(){
        this.el.addEventListener("click",()=>{
            const {selectedItemId}=this.data
            const fadeBackground=document.querySelector("#fadeBackground")
            const title=document.querySelector("#app-title")
            const cursor=document.querySelector("#camera-cursor")

            if(selectedItemId){
                fadeBackground.setAttribute("visible",true)
                fadeBackground.setAttribute("info-banner",{itemId:selectedItemId})

                title.setAttribute("visible",false)
                cursor.setAttribute("position",{x:0,y:0,z:-1})
                cursor.setAttribute("geometry",{
                    radiusInner:0.03,
                    radiusOuter:0.04,
                })
            }
            else{
                fadeBackground.setAttribute("visible",false)
                title.setAttribute("visible",true)
                cursor.setAttribute("visible",true)
                cursor.setAttribute("position",{x:0,y:0,z:-3})
                cursor.setAttribute("geometry",{
                    radiusInner:0.08,
                    radiusOuter:0.12,
                })
            }

        })
    },
})