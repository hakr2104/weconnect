
$(()=>{  
    let title1=$('#title')
    let body1=$('#body')
    let submit=$('#submit')
    let title
    let body 
    submit.click(
      ()=>{ 
       $.post('/routes/posts/',
         { title:title1.val(),
          body:body1.val()},
         ()=>{
            // $.redirect('./')
            console.log(title+"h"+title1.val()+" ")
        }
         )})
     function dopamine(){
       console.log("Logarithmic aptitude on the go")
          ()=>{
            getMatchedCSSRules.length.toExponential.toString=req.body.click
            getComputedStyle.length.submit=true;
            
          }
      }
     
     function assignvalues(){
      title=title1.val()
       body=body1.val()
     }
})
