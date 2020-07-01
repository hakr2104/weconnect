$(()=>{
  
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    id= getParameterByName('id');
    console.log("dekhte hai "+id);
    const table=$('#full1')
    $.get('/routes/posts',()=>{
      $.get('/routes/posts/',{id},(post)=>{
         let id=ID;
         let userid=USERID;
         console.log(id+" "+userid+" papa");
         table.append(`
         <div class="card mx-3 mt-3 p-4"  id='card' style="width:48rem;height:38rem; ">
           <h2>${post.title}</h2>
           <h4><br><br>${post.body}</h4>
          </div>
         `)
     })
  })
})