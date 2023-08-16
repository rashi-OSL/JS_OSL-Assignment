//display current url

    const currentUrl =document.getElementById('url');
    currentUrl.innerText = window.location.href;


//function to open new window
function openNewWindow() {
    const newWindow = window.open('', '_blank', 'width=500,height=400');
  }

