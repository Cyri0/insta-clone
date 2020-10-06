let post_number = document.getElementById("post_num");
let image_holder = document.getElementById("image-holder");

function getData(){
    $.getJSON("data.json",function(json){
        let data = json.data;
        post_number.innerHTML = data.length;

        for (let i = 0; i < data.length; i++) {
        
            let id = "pics" + i;

            image_holder.innerHTML +=
            '<div class="col-sm-6 col-md-4">'+
            '<div class="picture" id="'+id+'">'+
            data[i].hashtags+
            '<br><b>'+data[i].likes +' &#10084;</b>'+
            '</div>'+
            '</div>';

            document.getElementById(id).style.backgroundImage = "url('pics/"+data[i].image+"')";
        }
    })
}

getData();