

function darkMode() {
  const a = document.querySelectorAll("a");

    if(document.getElementById("dark_mode").innerHTML === 'Dark Mode'){

    document.body.style.backgroundColor = "black";
    document.getElementById("dark_mode").innerHTML = "Light Mode";
    document.body.style.color = "white";
    
    
    for (let i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = "black";
    a[i].style.color = 'white';
}
    
  }

  else if(document.getElementById("dark_mode").innerHTML === 'Light Mode'){

    document.body.style.backgroundColor = "blanchedalmond";
    document.getElementById("dark_mode").innerHTML = "Dark Mode";
    document.body.style.color = "black";
    
    for (let i = 0; i < a.length; i++) {
      a[i].style.backgroundColor = "blanchedalmond";
      a[i].style.color = 'black'; 
    }
  }
}

function contact() {
  
  document.getElementById('aboutMe').style.display = 'none';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('contactBox').style.display = 'flex';
  
}

function main() {
  document.getElementById('aboutMe').style.display = 'flex';
  document.getElementById('projects').style.display = 'block';
  document.getElementById('contactBox').style.display = 'none';
}

