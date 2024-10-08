Shery.imageEffect("#back",{style: 5 , config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0487540612265915},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.28,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.31,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.79,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":19.08,"range":[0,100]}}, gooey: true})


let all_elems = document.querySelectorAll(".elem")
all_elems.forEach(function(elem){
    let all_h1 = elem.querySelectorAll("h1");
let index=0;
let len = all_h1.length;
let animating = false;
document.querySelector("#main").addEventListener("click",()=>{
    if(animating===false){
        animating=true;
        gsap.to(all_h1[index],{
            top:'-=100%',
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: function(){
                gsap.set(this._targets[0] ,{ top:'100%'})
                animating = false;
            }
        })
       index = (index+1)%len;
        gsap.to(all_h1[index],{
            top:'-=100%',
            ease: Expo.easeInOut,
            duration: 1,
        })
       
    }
})
})
