function myFunction() {
    var x = document.getElementById("NavbarId");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}




var typed = new Typed(".multywords", {
    strings: ["Website Design", "Mobile App Design", "Video Creation", "Blog Posting"],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop: true
})

var typed = new Typed(".bannerword", {
    strings: ["Click Here"],
    typeSpeed: 200,
    backSpeed: 200,
    backdelay: 1000,
    loop: true
})


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top <= offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};




let togbtn = document.getElementById('toggle-btn');
let icon = document.getElementById('toggle-icon');
let text = document.getElementById('toggle-text');

togbtn.onclick = function () {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains("light-mode")) {
        icon.src = "imgs/moon.png";
        text.innerHTML = "Dark";
    }
    else {
        icon.src = "imgs/sun.png";
        text.innerHTML = "Light";
    }
}


function sendMail() {
    var params = {
        from_name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        message: document.getElementById('subject').value,
    }

    emailjs.send("service_0q62sf7", "template_n8iaiwl", params).then(function (res) {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('number').value = "";
        document.getElementById('subject').value = "";
        alert("Success! " + res.status);
    })
}







// const flipbtn = document.getElementById('flipbtn-1');
// const unflipbtn = document.getElementById('unflipbtn-1');
// const servicebox = document.getElementById('service-box1');
// const moreDet = document.getElementById('more_det');

// flipbtn.addEventListener("click", ()=> {
//     servicebox.style.transform = 'rotateY(180deg)';
//     servicebox.style.transform = 'scale(1.04)';
//     moreDet.style.display = 'block';
//     unflipbtn.style.display = 'inline-block';
//     flipbtn.style.display = 'none';
// })

// unflipbtn.addEventListener("click", ()=> {
//     servicebox.style.transform = 'rotateY(0deg)';
//     servicebox.style.transform = 'scale(1)';
//     moreDet.style.display = 'none';
//     unflipbtn.style.display = 'none';
//     flipbtn.style.display = 'inline-block';
// })






