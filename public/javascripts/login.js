function anime(){
    
  var tl = gsap.timeline();
  
  tl.from(".page1 .nav",{
      y:-50,
     
      })
      tl.from(".page1 .nav a",{
          y:-50,
          stagger:.1
          })
          
          tl.from(".intro h1",{
              y:-50,
             opacity:0
              })
              tl.from(".intro h5",{
                  x:-50,
                 opacity:0
                  })
                  tl.from(".part1",{
                      x:-50,
                     opacity:0
                      })
                      
  }
  anime();
  
  
  
  function loginanime(){
  
      var textcontainer = document.querySelector(".text-container-1")
      var icon = document.querySelector(".top i")
       var tl = gsap.timeline();
      icon.addEventListener("mouseenter",function(){
       
        tl.to(".text-container-1",{
        height:"6%"
        })
      })
      
      icon.addEventListener("mouseleave",function(){
       
         tl.to(".text-container-1",{
         height:"28%",
         borderRadius:0
         })
       })
      
       var textcontainer1 = document.querySelector(".text-container-2")
       var icon = document.querySelector(".text-container-2 .top i")
        var tl = gsap.timeline();
       icon.addEventListener("mouseenter",function(){
        
         tl.to(".text-container-2",{
         height:"27%"
         })
       })
      
       icon.addEventListener("mouseleave",function(){
        
          tl.to(".text-container-2",{
          height:"7%"
          })
        })
       
         
        tl.from(".left h1",{
         x:-25,
         scrub:true,
         opacity:0,
       
        })
       
        
  
  
        tl.from(".left h3",{
         y:25,
         opacity:0,
         scrub:true,
        })
        
        tl.from(".text-container-1",{
         x:25,
         opacity:0,
         scrub:true,
        })
        
        tl.from(".text-container-2",{
         x:-25,
         opacity:0,
         scrub:true,
        })
      
        tl.from(".form-container",{
         x:25,
         opacity:0,
         scrub:true,
        })
        
        
  }
   loginanime()