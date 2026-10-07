//Link to uploaded sample: https://erru227.github.io/17_2/
let new_rule_index = -1;
let css = document.styleSheets[0];


function add_rule(){
  css.insertRule("h1 {text-shadow 2px 2px 5ps #2F23FA}");
  for (let i = 0; i < css.cssRules.length; i++){
    if (css.cssRules[i].selectorText == "h1"){
      new_rule_index = i;
    }
  }
}
function change_rule(){
  if(new_rule_index != -1){
    css.cssRules[new_rule_index].style.setProperty("text-shadow", "2px 2px 5px red");
  }
}
function delete_rule(){
  css.deletRule(new_rule_index);
  new_rule_index = -1;
}
