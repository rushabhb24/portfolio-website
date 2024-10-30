var typed = new Typed('.text', {
    strings: ["Full Stack Web Developer","Software Developer", "Bug Hunter"],
    typeSpeed: 50,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });

var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-content");             
    function opentab(tabname)
    {
        for(tablink of tablinks)
        {
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents)
        {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }

// --------Contact us Form---------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzi41Wvaa14pzzk2U9ZHYtP-gRiXgZjvFL8TdfBG4dUZLF4bBXBY2KHpryWll8ofLaY/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg =document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerText = "Message sent successfully"
        setTimeout(function () {
            msg.innerHTML = ""
        },5000)
        form.reset() 
      })
      .catch(error => console.error('Error!', error.message))
  })

