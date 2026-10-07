let page = document.getElementById("page_content");

class Image{
  constructor(id, src, border = black){
    this.id = id;
    this.src = src;
    this.border = border;
  }
}

var cat = new Image("kit, "cat.jpg", "#F5A4D8");
function pic(){
  page.tectContent = cat.id + " " + cat.src;
}
