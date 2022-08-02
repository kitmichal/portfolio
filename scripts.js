

function darkMode() {
    if(document.getElementById("dark_mode").innerHTML === 'Dark Mode'){

    document.body.style.backgroundColor = "black";
    document.getElementById("dark_mode").innerHTML = "Light Mode"
    document.body.style.color = "white";
    
    
  }

  else if(document.getElementById("dark_mode").innerHTML === 'Light Mode'){

    document.body.style.backgroundColor = "blanchedalmond";
    document.getElementById("dark_mode").innerHTML = "Dark Mode"
    document.body.style.color = "black";
    
  }
}

function contact() {
  
  document.getElementById('aboutMe').style.display = 'none';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('contactBox').style.display = 'flex';
  //document.getElementById('footer').style.bottom = '-100px';
}

function main() {
  document.getElementById('aboutMe').style.display = 'flex';
  document.getElementById('projects').style.display = 'block';
  document.getElementById('contactBox').style.display = 'none';
}