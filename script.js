particlesJS.load('particles-js', 'particles.json', function () {
  console.log('callback - particles.js config loaded');
});



let scrollPos = 0;
const nav = document.getElementById('navbar');
let windowHeight = window.innerHeight;
let navHeight = nav.innerHeight;



function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < windowHeight + 100) {
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

function debounce(func, wait = 0, immediate = true) {
  let timeout;
  return function () {
    let context = this, args = arguments;
    let later = function () {
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





document.addEventListener('DOMContentLoaded', () => {
  const projectBody = document.getElementById('project-body');
  const filterButtonsContainer = document.getElementById('filter-buttons');
  const categories = ["All", "Fullstack/Web Dev", "Computer Vision", "Computer Graphics", "Data Science/ML"];

  categories.forEach(category => {
    const button = document.createElement('button');
    button.textContent = category;
    button.className = category === "All" ? 'btn bttn btn-light mx-1 mb-3' : 'btn bttn btn-light mx-1 mb-3';
    // button.className = 'bttn mx-1 mb-3';
    button.dataset.filter = category;
    filterButtonsContainer.appendChild(button);

    if (category == "All") {
      button.classList.add('btn-active');
    }

    button.addEventListener('click', () => {
      document.querySelectorAll('.btn-active').forEach(btn => btn.classList.remove('btn-active'));
      button.classList.add('btn-active');
      filterProjects(category);
    });
  });




  const badgeColors = {
    "Python": "#6EA4BF",
    "Scala": "#C78283",
    "PyTorch": "#465775",
    "Databricks": "#F3D9DC",
    "AWS": "#B49286",
    "Keras": "#93A8AC",
    "Sklearn": "#38405F",
    "Word2Vec": "#59546C",
    "Vue.js": "#21601c",
    "Firebase": "#F2545B",
    "C++": "#083A42"
};

const projects = [
    {
        imgSrc: "images/deepfm2.png",
        title: "The Trade Desk - Data Science Internship",
        text: "Enhanced deep learning click-through rate (CTR) prediction models by integrating user data features, optimizing low-latency advertisement bidding algorithms to analyze 13 million advertising impressions every second.",
        badges: ["Python", "Scala", "PyTorch", "Databricks", "AWS"],
        buttonText: "Project",
        buttonDisabled: true,
        buttonLink: "#",
        columnClass: "col-lg-4",
        categories: ["Data Science/ML"]
    },
    {
        imgSrc: "images/walmart.png",
        title: "Walmart - Computer Vision Internship",
        text: "Automating Walmart's Supply Chain by using Object Detection (YOLOv8) and Object Tracking (DeepSORT) to count and keep track of objects on warehouse pallets.",
        badges: ["Python"],
        buttonText: "Project Not Publicly Accessible",
        buttonDisabled: true,
        buttonLink: "#",
        columnClass: "col-lg-4",
        categories: ["Computer Vision"]
    },
    {
        imgSrc: "images/nerf_6400.gif",
        title: "Building Neural Radiance Field (NeRFs)",
        text: "Implemented a deep learning model for reconstructing a 3D representation of a scene from 2D images using PyTorch!",
        badges: ["Python", "PyTorch"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj5/sidnath/submission/",
        columnClass: "col-lg-4",
        categories: ["Data Science/ML"]
    },
    {
        imgSrc: "images/berkeley_starry_night.jpg",
        title: "Neural Algorithm of Artistic Style",
        text: "Reimplemented the \"A Neural Algorithm of Artistic Style\" paper, utilizing Convolutional Neural Networks (VGG-19 architecture) for style transfer.",
        badges: ["Python", "PyTorch"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj6/sidnath/submission/",
        columnClass: "col-lg-4",
        categories: ["Data Science/ML"]
    },
    {
        imgSrc: "images/ezgif.com-gif-to-mp4-converted.gif",
        title: "Woflow - Computer Vision Internship",
        text: "Designed algorithms to fix image distortions and digitize restaurant menus, enhancing menu accessibility and enabling clients to make data-driven decisions for optimizing menus and uncovering customer preferences.",
        badges: ["Python", "PyTorch"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://github.com/vraman23/SAAS-Woflow/",
        columnClass: "col-lg-4",
        categories: ["Computer Vision"]
    },
    {
        imgSrc: "images/w2v2.png",
        title: "Aisle - Data Science (ML/NLP) Internship",
        text: "Trained a Word2Vec model on over 260,000 food abbreviation products names and used the generated embeddings to prepare a Neural Network for product classification which achieved 96% accuracy.",
        badges: ["Python", "Keras", "Sklearn", "Word2Vec"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://github.com/akansal2/saas-aisle-fa22",
        columnClass: "col-lg-4",
        categories: ["Data Science/ML"]
    },
    {
        imgSrc: "images/face-in-toast.jpg",
        title: "Image Quilting & Texture Transfer",
        text: "Explored texture synthesis and transfer methods inspired by the \"Image Quilting for Texture Synthesis and Transfer\" paper.",
        badges: ["Python"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj6/sidnath/submission/",
        columnClass: "col-lg-4",
        categories: ["Data Science/ML"]
    },
    {
        imgSrc: "images/sid_george_gif.mp4",
        title: "Face Morphing",
        text: "Used Delaunay triangulation and affine transformations to morph faces!",
        badges: ["Python"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj3/sidnath/submission/",
        columnClass: "col-lg-4",
        categories: ["Computer Vision", "Data Science/ML"]
    },
    {
        imgSrc: "images/top_add_node.png",
        title: "embedUR - SWE Internship",
        text: "Optimized network topology algorithms and simulated topology behavior while predicting memory usage for different topology configurations.",
        badges: ["Python"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://github.com/SidNath21/embedur2022",
        columnClass: "col-lg-4",
        categories: ["Fullstack/Web Dev"]
    },
    {
        imgSrc: "images/binary.png",
        title: "embedUR - ML Internship",
        text: "Deployed machine learning models that predict whether a WiFi customer will need support; used Neural Networks, Decision Trees, Logistic Regression, and Boosting Models.",
        badges: ["Python", "Sklearn"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://github.com/SidNath21/saas-embedur",
        columnClass: "col-lg-4",
        categories: ["Data Science/ML"]
    },
    {
        imgSrc: "images/capitalone.png",
        title: "Capital One - SWE Internship",
        text: "An automation testing tool that helps create and run test scenarios for Amazon Kinesis data streaming applications.",
        badges: ["Vue.js", "AWS"],
        buttonText: "Project Not Publicly Accessible",
        buttonDisabled: true,
        buttonLink: "#",
        columnClass: "col-lg-6",
        categories: ["Fullstack/Web Dev"]
    },
    {
        imgSrc: "images/saucer.png",
        title: "Saucer",
        text: "A digital solution to food waste that recommends users suitable recipes based on the items they already have.",
        badges: ["Vue.js", "Firebase"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://github.com/TanayB11/defhacks-2020",
        columnClass: "col-lg-6",
        categories: ["Fullstack/Web Dev"]
    },
    {
        imgSrc: "images/church.jpg",
        title: "Colorizing the Prokudin-Gorskii Photo Collection",
        text: "Developed an image pyramid alignment algorithm along with an automatic cropping technique to generate colored photos of the Russian Empire!",
        badges: ["Python"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj1/sidnath/submission/",
        columnClass: "col-lg-4",
        categories: ["Data Science/ML", "Computer Vision"]
    },
    {
        imgSrc: "images/final_oraple.jpg",
        title: "Image Filtering and Frequency Analysis",
        text: "Applied image processing techniques using filters, frequency analysis, and Laplacian/Gaussian Stacks for enhancing images, creating \"hybrid\" images, and performing multiresolution blending.",
        badges: ["Python"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj2/sidnath/submission/",
        columnClass: "col-lg-4",
        categories: ["Data Science/ML", "Computer Vision"]
    },
    {
        imgSrc: "images/view1_view2_blended.jpg",
        title: "Image Warping and Mosaicing",
        text: "Applied Harris Corner Detection, Adaptive Non-Maximal Suppression, and RANSAC to automatically stitch and create image mosaics.",
        badges: ["Python"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://inst.eecs.berkeley.edu/~cs180/fa23/upload/files/proj4B/sidnath/submission/",
        columnClass: "col-lg-4",
        categories: ["Computer Vision"]
    },
    {
        imgSrc: "images/cs184_proj4.png",
        title: "Cloth Simulator",
        text: "Implemented a real-time cloth simulation by modeling a system of point masses and springs. Implemented numerical integration techniques (Verlet integration), collisions with other objects, and vertex & fragment shading programs.",
        badges: ["C++"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://cal-cs184-student.github.io/hw-webpages-sp24-SidNath21/hw4/index.html",
        columnClass: "col-lg-4",
        categories: ["Computer Graphics"]
    },
    {
        imgSrc: "images/cs184_proj3.png",
        title: "Path Tracing Renderer",
        text: "Implemented a physically-based renderer by generating rays and handling intersections with scene geometry, constructing a Bounding Volume Hierarchy (BVH) to accelerate rendering, and simulating both direct and indirect lighting for realistic image synthesis.",
        badges: ["C++"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://cal-cs184-student.github.io/hw-webpages-sp24-SidNath21/hw3/index.html",
        columnClass: "col-lg-4",
        categories: ["Computer Graphics"]
    },
    {
        imgSrc: "images/cs184_proj2.png",
        title: "Mesh Edit",
        text: "Explored geometric modeling by implementing Bézier curves and surfaces using de Casteljau's algorithm, manipulating triangle meshes with the half-edge data structure, and performing loop subdivision for mesh refinement. Created Bézier curves and surfaces, managed mesh operations like edge flips and splits, and applied loop subdivision to upsample meshes.",
        badges: ["C++"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://cal-cs184-student.github.io/hw-webpages-sp24-SidNath21/hw2/index.html",
        columnClass: "col-lg-4",
        categories: ["Computer Graphics"]
    },
    {
        imgSrc: "images/cs184_proj1.png",
        title: "Rasterizer",
        text: "Implemented a rasterizer that can draw basic shapes like triangles and apply various transformations, antialiasing techniques, and texture mapping. Explored texture mapping using different sampling methods, super sampling, and hierarchical transformations to manipulate objects in a scene.",
        badges: ["C++"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://cal-cs184-student.github.io/hw-webpages-sp24-SidNath21/hw1/index.html",
        columnClass: "col-lg-4",
        categories: ["Computer Graphics"]
    },
    {
        imgSrc: "images/2dgs2.png",
        title: "2D Gaussian Splatting",
        text: "Explored Novel View Synthesis by comparing Neural Radiance Fields (NeRF) and 2D Gaussian Splatting (2DGS). Implemented 2DGS with features like Harris Corner detection for keypoint initialization and adaptive control of Gaussians, while the 2D NeRF model used a Multi-layer Perceptron to fit images.",
        badges: ["C++"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://cs184.mehvix.com/final/",
        columnClass: "col-lg-4",
        categories: ["Data Science/ML", "Computer Vision", "Computer Graphics"]
    }
];

  // Display all projects initially
  displayProjects(projects);

  function displayProjects(projects) {
    const projectBody = document.getElementById('project-body');
    projectBody.innerHTML = ''; // Clear existing projects
    projects.forEach(project => {
        const colDiv = document.createElement('div');
        colDiv.className = `${project.columnClass} col-md-6 col-sm-12 mb-4 d-flex align-items-stretch`;

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        const img = document.createElement('img');
        img.src = project.imgSrc;
        img.className = 'card-img-top';
        img.alt = '...';

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body d-flex flex-column';

        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = project.title;

        const p = document.createElement('p');
        p.className = 'card-text';
        p.textContent = project.text;

        cardBodyDiv.appendChild(h5);
        cardBodyDiv.appendChild(p);

        const cardFooterDiv = document.createElement('div');
        cardFooterDiv.className = 'card-body d-flex align-items-end justify-content-around';

        const a = document.createElement('a');
        a.style.color = 'inherit';
        a.style.textDecoration = 'inherit';
        a.style.display = 'inline-block';
        a.style.width = '100%';
        if (!project.buttonDisabled) {
          a.href = project.buttonLink;
        }
        a.target = '_blank';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'w-100 mx-1 btn btn-outline-dark';
        button.textContent = project.buttonText;
        if (project.buttonDisabled) {
          button.disabled = true;
          button.style.pointerEvents = "none";
          button.setAttribute('aria-disabled', true);
        }

        a.appendChild(button);
        cardFooterDiv.appendChild(a);

        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer text-body-secondary';

        project.badges.forEach(badge => {
            const span = document.createElement('span');
            span.className = 'badge';
            span.style.backgroundColor = badgeColors[badge];
            span.textContent = badge;
            span.style.marginRight = '5px'; // Adding right margin for spacing
            span.style.marginBottom = '5px'; // Adding bottom margin for vertical spacing if badges wrap
            cardFooter.appendChild(span);
        });

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);
        cardDiv.appendChild(cardFooterDiv);
        cardDiv.appendChild(cardFooter);
        colDiv.appendChild(cardDiv);
        projectBody.appendChild(colDiv);
    });
}


  function filterProjects(filter) {
    if (filter === "All") {
        displayProjects(projects);
        return;
    }
    else {

      const filteredProjects = projects.filter(project =>
          project.categories.includes(filter)
      );
      displayProjects(filteredProjects);
    }

}

});
