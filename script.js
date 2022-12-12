        let app = document.getElementById("id");
        let judul = document.getElementsByClassName("tes");
        let namaclass =  document.getElementsByClassName("card-2-1");
        let  nameclass = document.getElementsByClassName("card-2");
        let card = document.getElementsByClassName("card");
    

        setInterval(function(){
            judul[0].style.color="#2192FF";

        setTimeout(function(){
                judul[0].style.color="#4649FF";
            },400)
        },800)

        setInterval(function(){
            namaclass[0].style.border="10px solid white";
            nameclass[0].style.border="10px solid #2192FF";
            namaclass[1].style.border="10px solid white";
            nameclass[1].style.border="10px solid #2192FF";
            namaclass[2].style.border="10px solid white";
            nameclass[2].style.border="10px solid #2192FF";


        
        setTimeout(function(){
            namaclass[0].style.border="10px solid #2192FF";
            nameclass[0].style.border="10px solid white";
            namaclass[1].style.border="10px solid #2192FF";
            nameclass[1].style.border="10px solid white";
            namaclass[2].style.border="10px solid #2192FF";
            nameclass[2].style.border="10px solid white";

        },600);
        },2000);

        setInterval(function(){
            card[0].style.backgroundColor="grey";
        setTimeout(function(){
            card[0].style.backgroundColor="#2192FF";
        },800)
        },2000)

        setInterval(function(){
            card[1].style.backgroundColor="grey";
        setTimeout(function(){
            card[1].style.backgroundColor="#2192FF";
        },1000)
        },2000)

        setInterval(function(){
            card[2].style.backgroundColor="grey";
        setTimeout(function(){
            card[2].style.backgroundColor="#2192FF";
        },1200)
        },2000)

        setInterval(function(){
            card[3].style.backgroundColor="grey";
        setTimeout(function(){
            card[3].style.backgroundColor="#2192FF";
        },1400)
        },2000)


