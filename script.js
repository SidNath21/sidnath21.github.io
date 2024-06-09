particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

let scrollPos = 0;
const nav = document.getElementById('navbar');
let windowHeight = window.innerHeight;
let navHeight = nav.innerHeight;



function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < windowHeight) {
      // Scrolling UP
      nav.style.visibility = "hidden"
      // nav.classList.toggle("active");
    } else {
      // Scrolling DOWN
        nav.style.visibility = "visible"
        // nav.classList.toggle("active");
    }
    scrollPos = windowY;
  }

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  window.addEventListener('scroll', debounce(checkPosition));




//   document.addEventListener('DOMContentLoaded', function () {
//     const experiences = [
//         {
//             imgSrc: 'images/walmart.png',
//             title: 'Walmart - Computer Vision Internship',
//             description: "Automating Walmart's Supply Chain by using Object Detection (YOLOv8) and Object Tracking (DeepSORT) to count and keep track of objects on warehouse pallets.",
//             projectLink: 'https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj6/sidnath/submission/',
//             badges: ['Python', 'YOLOv8', 'DeepSORT', 'Roboflow']
//         },
//         {
//             imgSrc: 'images/nerf_6400.gif',
//             title: 'Building Neural Radiance Field (NeRFs)',
//             description: "Implemented a deep learning model for reconstructing a 3D representation of a scene from 2D images using PyTorch!",
//             projectLink: 'https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj5/sidnath/submission/',
//             badges: ['Python', 'PyTorch']
//         },
//         {
//             imgSrc: 'images/berkeley_starry_night.jpg',
//             title: 'Neural Algorithm of Artistic Style',
//             description: "Reimplemented the 'A Neural Algorithm of Artistic Style' paper, utilizing Convolutional Neural Networks (VGG-19 architecture) for style transfer.",
//             projectLink: 'https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj6/sidnath/submission/',
//             badges: ['Python', 'PyTorch']
//         },
//         {
//             imgSrc: 'images/ezgif.com-gif-to-mp4-converted.gif',
//             title: 'Woflow - Computer Vision Internship',
//             description: "Designed algorithms to fix image distortions and digitize restaurant menus, enhancing menu accessibility and enabling clients to make data-driven decisions for optimizing menus and uncovering customer preferences.",
//             projectLink: 'https://github.com/vraman23/SAAS-Woflow/',
//             badges: ['Python', 'PyTorch']
//         },
//         {
//             imgSrc: 'images/w2v2.png',
//             title: 'Aisle - Data Science (ML/NLP) Internship',
//             description: "Trained a Word2Vec model on over 260,000 food abbreviation products names and used the generated embeddings to prepare a Neural Network for product classification which achieved 96% accuracy.",
//             projectLink: 'https://github.com/akansal2/saas-aisle-fa22',
//             badges: ['Python', 'Keras', 'Sklearn', 'Word2Vec']
//         },
//         {
//             imgSrc: 'images/face-in-toast.jpg',
//             title: 'Image Quilting & Texture Transfer',
//             description: "Explored texture synthesis and transfer methods inspired by the 'Image Quilting for Texture Synthesis and Transfer' paper.",
//             projectLink: 'https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj6/sidnath/submission/',
//             badges: ['Python']
//         },
//         {
//             imgSrc: 'images/midway_face.jpg',
//             title: 'Face Morphing',
//             description: "Used Delaunay triangulation and affine transformations to morph faces!",
//             projectLink: 'https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj3/sidnath/submission/',
//             badges: ['Python']
//         }
//     ];

//     const projectBody = document.getElementById('project-body');

//     experiences.forEach(exp => {
//         const col = document.createElement('div');
//         col.className = 'col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch';

//         const card = document.createElement('div');
//         card.className = 'card';

//         const img = document.createElement('img');
//         img.src = exp.imgSrc;
//         img.className = 'card-img-top';
//         img.alt = exp.title;

//         const cardBody = document.createElement('div');
//         cardBody.className = 'card-body d-flex flex-column';

//         const cardTitle = document.createElement('h5');
//         cardTitle.className = 'card-title';
//         cardTitle.textContent = exp.title;

//         const cardText = document.createElement('p');
//         cardText.className = 'card-text';
//         cardText.textContent = exp.description;

//         cardBody.appendChild(cardTitle);
//         cardBody.appendChild(cardText);

//         const cardBodyBottom = document.createElement('div');
//         cardBodyBottom.className = 'card-body d-flex align-items-end justify-content-around';

//         const projectLink = document.createElement('a');
//         projectLink.href = exp.projectLink;
//         projectLink.style = 'color: inherit; text-decoration: inherit; display: inline-block; width: 100%;';
//         projectLink.target = '_blank';

//         const projectButton = document.createElement('button');
//         projectButton.type = 'button';
//         projectButton.className = 'w-100 mx-1 btn btn-outline-dark';
//         projectButton.textContent = 'Project';

//         projectLink.appendChild(projectButton);
//         cardBodyBottom.appendChild(projectLink);

//         const cardFooter = document.createElement('div');
//         cardFooter.className = 'card-footer text-body-secondary';

//         exp.badges.forEach(badge => {
//             const badgeSpan = document.createElement('span');
//             badgeSpan.className = 'badge';
//             badgeSpan.style.backgroundColor = badgeColors(badge);
//             badgeSpan.textContent = badge;
//             cardFooter.appendChild(badgeSpan);
//         });

//         card.appendChild(img);
//         card.appendChild(cardBody);
//         card.appendChild(cardBodyBottom);
//         card.appendChild(cardFooter);
//         col.appendChild(card);
//         projectBody.appendChild(col);
//     });

//     function badgeColors(badge) {
//         switch (badge) {
//             case 'Python':
//                 return '#083A42';
//             case 'YOLOv8':
//                 return 'hsl(144, 95%, 45%)';
//             case 'DeepSORT':
//                 return '#06c4e2';
//             case 'Roboflow':
//                 return '#8a06e2';
//             case 'PyTorch':
//                 return '#DC3546';
//             case 'Keras':
//                 return '#e45000';
//             case 'Sklearn':
//                 return '#4800e4';
//             case 'Word2Vec':
//                 return '#e40000';
//             default:
//                 return '#000000';
//         }
//     }
// });