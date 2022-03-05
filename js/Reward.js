AFRAME.registerComponent("get-coin",{
    init:function(){
        for(var i=1;i<=10;i++){
            var id = `coin${i}`;
            var posX=(Math.random()*100+-50)
            var posY=(Math.random()*5+5)
            var posZ=(Math.random()*60+-40)
            var position={x:posX,y:posY,z:posZ}
            this.createCoins(id,position)
        }
    },
    createCoins:function(id,position){
        var terrainEl=document.querySelector('#treasureCoins')
        var coinEl=document.createElement("a-entity")
        coinEl.setAttribute("id",id)
        coinEl.setAttribute("position",position)
        coinEl.setAttribute('material','color','#ff9100')
        coinEl.setAttribute("geometry",{primitive:"circle",radius:8})
        coinEl.setAttribute("animation",{
            property:'rotation',
            to:'0 360 0',
            loop:'true',
            dur:1000,
        })
        coinEl.setAttribute("static-body",{
            shape:'sphere',
            sphereRadius:5
          })
        terrainEl.appendChild(coinEl)
    }
})