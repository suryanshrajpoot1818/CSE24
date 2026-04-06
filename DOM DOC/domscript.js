let x = document.getElementById("demo");
let y = document.getElementsByClassName("main");
let y = document.getElementsByTagName();
// document.querySelectorAll()- returns all elements where it identifies the id class
// document.querySelector()- returns first element where it executes
let x = document.getElementById.getAttribute("attribute name")
let x = document.getElementById.setAttribute("attribute name, class name")

CREATE AN Element
let e = document.createElement("h3");
let par = document.getElementsByTagName("body");
par[0].append(y);-----adds at pos - 3

REMOVE 
y.remove();

// <<<<<<<<<<<<<<<<MOUSE EVENTS>>>>>>>>>>>>>>>>>>>
<button onclick = "onClick"> continue </button>
<button onMouseOver="onMouseOver"> onMouseOver</button> 
<button onMouseDown="onMouseDown"> onMouseDown</button>
<button onMouseUp="onMouseUp"> onMouseUp</button>
<button onMouseMove="onMouseMove"> onMouseMove</button>
<button onMouseOut="onMouseOut"> onMouseOut</button>

// KEYBOARD EVENTS
<button onkeydown = "onKeyDown"> continue </button>
<button onKeyUp = "onKeyUp"> continue </button>

// FORM EVENTS
<button.onfocus = "onFocus">onFocus</button>
<button.onSubmit = "onSubmit">onSubmit </button>
<button.onBlur = "onBlur">onBlur </button>
<button.onChange = "onChange">onChange </button>
//  WINDOW EVENTS
 <window.onload = "onLoad">onLoad </button>
<window.onunload = "onUnload" >onUnload </button>
<window.consize = "consize">consize</button>
