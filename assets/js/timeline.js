//document.getElementsByClassName("timeline-year")[0].classList.add("text-center")

function addTimelineImg(year, 
    month,
    text,
    img_src
) {
    return `<h3 class = "timeline-year">$year</h3>
    <h5 class = "timeline-month">$month</h5>
    <div class="row">
        <div class="col-md timeline-col-1">
        </div>
        <div class="col-md-5 timeline-col-2 timeline-text">
          $text
        </div>
        <div class="col-md-5 timeline-col-3 timeline-img-container">
            <img src=$img_src class="mx-auto d-block img-fluid rounded">
        </div>
        <div class="col-md timeline-col-4">
        </div>
    </div>`
  }






var timeline_container = document.getElementById("timeline-container")

var timeline_years = document.getElementsByClassName("timeline-year")
for (let i = 0; i < timeline_years.length; i++) {
    timeline_years[i].classList.add("text-center")
    timeline_years[i].classList.add("font-weight-bold")
}

var timeline_months = document.getElementsByClassName("timeline-month")
for (let i = 0; i < timeline_months.length; i++) {
    timeline_months[i].classList.add("text-center")
}


var timeline_text = document.getElementsByClassName("timeline-text")
for (let i = 0; i < timeline_text.length; i++) {
    timeline_text[i].classList.add("img-text")
    timeline_text[i].classList.add("text-center")
    timeline_text[i].classList.add("justify-content-center")
    timeline_text[i].classList.add("align-self-center")
}


var timeline_img = document.getElementsByClassName("timeline-img")
for (let i = 0; i < timeline_img.length; i++) {
    timeline_img[i].classList.add("mx-auto")
    timeline_img[i].classList.add("d-block")
    timeline_img[i].classList.add("img-fluid")
    timeline_img[i].classList.add("rounded")
}

function isEven(n) {
    return (n % 2 == 0);
}

var timeline_img_containers = document.getElementsByClassName("timeline-img-container")
for (let i = 0; i < timeline_img_containers.length; i++) {

    isEven(i) ?
        timeline_img_containers[i].classList.add("img-container-left") :
        timeline_img_containers[i].classList.add("img-container-right")
}


var timeline_col_1 = document.getElementsByClassName("timeline-col-1")
for (let i = 0; i < timeline_col_1.length; i++) {
    if(isEven(i)){
        timeline_col_1[i].classList.add("order-md-1")
    }
       
}

var timeline_col_2 = document.getElementsByClassName("timeline-col-2")
for (let i = 0; i < timeline_col_2.length; i++) {
    if(isEven(i)){
        timeline_col_2[i].classList.add("order-md-3")
    }
       
}
var timeline_col_3 = document.getElementsByClassName("timeline-col-3")
for (let i = 0; i < timeline_col_3.length; i++) {
    if(isEven(i)){
        timeline_col_3[i].classList.add("order-md-2")
    }
       
}

var timeline_col_4 = document.getElementsByClassName("timeline-col-4")
for (let i = 0; i < timeline_col_4.length; i++) {
    if(isEven(i)){
        timeline_col_4[i].classList.add("order-md-4")
    }
       
}