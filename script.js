particlesJS.load('particles-js', 'particles.json', function () {
  console.log('callback - particles.js config loaded');
});



let scrollPos = 0;
const nav = document.getElementById('navbar');
const NAVBAR_THRESHOLD = 100; // Pixels after viewport height to show navbar
let windowHeight = window.innerHeight;

function updateNavbarVisibility() {
  const shouldShowNavbar = window.scrollY > (windowHeight + NAVBAR_THRESHOLD);
  nav.classList.toggle('visible', shouldShowNavbar);
}

// Efficient debounce implementation
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction() {
    const later = () => {
      clearTimeout(timeout);
      func();
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

window.addEventListener('scroll', debounce(updateNavbarVisibility));
window.addEventListener('resize', () => {
  windowHeight = window.innerHeight;
  updateNavbarVisibility();
});

// Initial check
updateNavbarVisibility();

document.addEventListener('DOMContentLoaded', () => {
  const projectBody = document.getElementById('project-body');
  const filterButtonsContainer = document.getElementById('filter-buttons');
  const categories = ["All", "Fullstack/Web Dev", "Computer Vision", "Computer Graphics", "Data Science/ML", "Robotics"];

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
    "C++": "#083A42",
    "ROS": "rgb(36, 37, 93)"
};

const projects = [
    {
        imgSrc: "images/deepfm2.png",
        title: "The Trade Desk - Data Science Internship",
        text: "Enhanced deep learning click-through rate (CTR) prediction models by integrating user data features, optimizing low-latency advertisement bidding algorithms to analyze 13 million advertising impressions every second.",
        badges: ["Python", "Scala", "PyTorch", "Databricks", "AWS"],
        buttonText: "Project Not Publicly Accessible",
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
        buttonLink: "https://sidnath21.github.io/cs180-websites/project5/",
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
        buttonLink: "https://sidnath21.github.io/cs180-websites/final_project/",
        columnClass: "col-lg-4",
        categories: ["Data Science/ML"]
    },
    {
        imgSrc: "images/eecs106b_proj1.png",
        title: "Visual Servoing",
        text: "In EECS 106B Project 1, we implemented visual servoing on the Sawyer robotic arm using a closed-loop controller. This project was a good introduction to full-stack robotics as we implemented perception, planning, and control algorithms.",
        badges: ["Python", "ROS"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://drive.google.com/file/d/1_xl4lE7YZP0TngLjnpd-jFNQs9YLG1L9/view?usp=sharing",
        columnClass: "col-lg-4",
        categories: ["Robotics"]
    },
    {
        imgSrc: "images/eecs106b_proj2.png",
        title: "Nonholonomic Control -- Path Planning",
        text: "In EECS 106B Project 2, we explored path planning for a front-wheel steering car, a second-order nonholonomic system. We implemented three path planning algorithms: an optimization-based planner, a rapidly-exploring random tree (RRT) algorithm, and a sinusoidal steering method.",
        badges: ["Python", "ROS"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://drive.google.com/file/d/1jGOedQ2y4cQc9q9WBSWymlwH3TbIL86N/view?usp=sharing",
        columnClass: "col-lg-4",
        categories: ["Robotics"]
    },
    {
        imgSrc: "images/eecs106b_proj3.png",
        title: "State Estimation",
        text: "In this project, we implemented three state estimation techniques: Dead Reckoning, Kalman Filter (KF), and Extended Kalman Filter (EKF). First, we used Dead Reckoning and KF to estimate the state of the Turtlebot robot. Next, we used Dead Reckoning and EKF to estimate the state of a more complicated planar quadrotor robot.",
        badges: ["Python", "ROS"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://drive.google.com/file/d/1cbNYFy-Hqx8V9D9DmrmKfmmguTV2uepe/view?usp=sharing",
        columnClass: "col-lg-4",
        categories: ["Robotics"]
    },
    {
        imgSrc: "images/eecs106b_proj4.png",
        title: "Multifingered Grasping using Dexterous Hands in MuJoCo",
        text: "In this project, we developed a grasping pipeline for an Allegro multifingered hand mounted on a Sawyer robotic arm within the MuJoCo simulator. Our approach combines a Levenberg-Marquardt based inverse kinematics (IK) solver for calculating joint angles and a gradient-based grasp synthesis algorithm for achieving force closure.",
        badges: ["Python"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://drive.google.com/file/d/1ybESjrOR6fK_F-mGCyeLHoR4SFmJ8Jys/view?usp=sharing",
        columnClass: "col-lg-4",
        categories: ["Robotics"]
    },

     {
        imgSrc: "images/eecs106b_proj5.png",
        title: "Drone Flight with Vision-Language Models",
        text: "In this project, we follow the Agilicious framework (an open-source and open-hardware framework for agile drone flight) and implement a Vision Language Model control-based policy in simulation.",
        badges: ["Python", "ROS"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://drive.google.com/file/d/1bTRbHWvK34CK515wtVo9Uxc4frYkHaIS/view?usp=sharing",
        columnClass: "col-lg-4",
        categories: ["Robotics"]
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
        buttonLink: "https://sidnath21.github.io/cs180-websites/final_project/",
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
        buttonLink: "https://sidnath21.github.io/cs180-websites/project3/",
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
        buttonLink: "https://sidnath21.github.io/cs180-websites/project1/",
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
        buttonLink: "https://sidnath21.github.io/cs180-websites/project2/",
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
        buttonLink: "https://sidnath21.github.io/cs180-websites/project4/",
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
        imgSrc: "images/fox_2dgs.mp4",
        title: "2D Gaussian Splatting",
        text: "Explored Novel View Synthesis by comparing Neural Radiance Fields (NeRF) and 2D Gaussian Splatting (2DGS). Implemented 2DGS with features like Harris Corner detection for keypoint initialization and adaptive control of Gaussians, while the 2D NeRF model used a Multi-layer Perceptron to fit images.",
        badges: ["C++"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://cs184.mehvix.com/final/",
        columnClass: "col-lg-6",
        categories: ["Data Science/ML", "Computer Vision", "Computer Graphics"]
    },
    {
        imgSrc: "images/musicgen.png",
        title: "Riff - Audio Generation Tools for Music Producers",
        text: "Evaluated audio generation models, including Meta's MusicGen, and performed prompt tuning to improve audio generation capabilities for Riff, a Copilot for music producers. Implemented a semi-supervised MIDI labeling pipeline to develop a MIDI-based genre classification model with Random Forests.",
        badges: ["Python", "PyTorch"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://drive.google.com/file/d/1iHeEYQ3hONTTghN33rqgzATmMlqj1k2X/view?usp=sharing",
        columnClass: "col-lg-4",
        categories: ["Data Science/ML"]
    },
    {
        imgSrc: "images/diffusion_process_cc_epoch_20.mp4",
        title: "Denoising Diffusion Probabilistic Models",
        text: "Built and trained diffusion models for image generation, including UNet-based denoising and iterative reverse sampling to synthesize high-quality images from noise.",
        badges: ["Python", "PyTorch"],
        buttonText: "Project",
        buttonDisabled: false,
        buttonLink: "https://sidnath21.github.io/cs180-websites/diffusion_project/",
        columnClass: "col-lg-4",
        categories: ["Data Science/ML", "Computer Vision"]
    }
];

  // Display all projects initially
  displayProjects(projects);

  function displayProjects(projects) {
    const projectBody = document.getElementById('project-body');
    projectBody.innerHTML = ''; // Clear existing projects
    
    projects.forEach((project) => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 mb-3';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card project-row-card'; // Start without visible class

        const rowContent = document.createElement('div');
        rowContent.className = 'project-row-content';

        const mediaWrapper = document.createElement('div');
        mediaWrapper.className = 'project-row-media';

        // Handle both images and videos
        if (project.imgSrc.endsWith('.mp4')) {
            const video = document.createElement('video');
            video.src = project.imgSrc;
            video.className = 'project-media';
            video.alt = project.title;
            video.loop = true;
            video.muted = true;
            video.autoplay = true;
            video.playsInline = true;
            mediaWrapper.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = project.imgSrc;
            img.className = 'project-media';
            img.alt = project.title;
            img.loading = 'lazy'; // Lazy loading for performance
            mediaWrapper.appendChild(img);
        }

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'project-row-main';

        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = project.title;

        const p = document.createElement('p');
        p.className = 'card-text project-row-text';
        p.textContent = project.text;

        cardBodyDiv.appendChild(h5);
        cardBodyDiv.appendChild(p);

        const cardFooter = document.createElement('div');
        cardFooter.className = 'project-row-footer';

        const badgeContainer = document.createElement('div');
        badgeContainer.className = 'project-row-badges';

        project.badges.forEach(badge => {
            const span = document.createElement('span');
            span.className = 'badge rounded-pill px-3 py-2';
            span.style.backgroundColor = badgeColors[badge];
            span.style.color = '#fff';
            span.textContent = badge;
            span.style.marginRight = '5px';
            span.style.marginBottom = '5px';
            badgeContainer.appendChild(span);
        });

        const a = document.createElement('a');
        a.style.color = 'inherit';
        a.style.textDecoration = 'inherit';
        a.target = '_blank';
        if (!project.buttonDisabled) {
            a.href = project.buttonLink;
        }

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-outline-dark project-row-btn';
        button.textContent = project.buttonText;
        if (project.buttonDisabled) {
            button.disabled = true;
            button.style.pointerEvents = 'none';
            button.style.opacity = '0.6';
            button.setAttribute('aria-disabled', true);
        }

        a.appendChild(button);
        cardFooter.appendChild(badgeContainer);
        cardFooter.appendChild(a);
        cardBodyDiv.appendChild(cardFooter);
        rowContent.appendChild(mediaWrapper);
        rowContent.appendChild(cardBodyDiv);
        cardDiv.appendChild(rowContent);
        colDiv.appendChild(cardDiv);
        projectBody.appendChild(colDiv);
    });

    // Set up intersection observer with stagger effect
    const cards = document.querySelectorAll('.project-row-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }, index * 50); // Stagger the animation
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    cards.forEach(card => {
        // Reset card state
        card.classList.remove('visible');
        observer.observe(card);
    });
}


  function filterProjects(filter) {
    const projectBody = document.getElementById('project-body');
    
    // Add filtering class for opacity transition
    projectBody.classList.add('filtering');
    
    setTimeout(() => {
        let filteredProjects;
        if (filter === "All") {
            filteredProjects = projects;
        } else {
            filteredProjects = projects.filter(project =>
                project.categories.includes(filter)
            );
        }
        
        displayProjects(filteredProjects);
        
        // Remove filtering class after a short delay
        setTimeout(() => {
            projectBody.classList.remove('filtering');
        }, 50);
    }, 300);
}

  // Blog/Notes section functionality
  const blogPosts = [
      // Add your blog posts here
      // Example structure:
      // {
      //     title: "Understanding Neural Radiance Fields",
      //     date: "2024-01-15",
      //     excerpt: "A deep dive into how NeRFs work and their applications in 3D scene reconstruction...",
      //     tags: ["Machine Learning", "Computer Vision", "NeRFs"],
      //     category: "ML",
      //     link: "#",
      //     readTime: "5 min read"
      // },
  ];

  function displayBlogPosts(posts = blogPosts) {
      const blogContainer = document.getElementById('blog-posts');
      if (!blogContainer) return;
      
      blogContainer.innerHTML = '';
      
      if (posts.length === 0) {
          blogContainer.innerHTML = `
              <div class="col-12 text-center py-5">
                  <p class="lead">Coming soon! Check back later for blog posts and notes.</p>
              </div>
          `;
          return;
      }
      
      posts.forEach((post, index) => {
          const colDiv = document.createElement('div');
          colDiv.className = 'col-lg-4 col-md-6 col-sm-12 mb-4';
          
          const cardDiv = document.createElement('div');
          cardDiv.className = 'blog-post-card card h-100';
          
          const date = new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
          });
          
          cardDiv.innerHTML = `
              <div class="card-body d-flex flex-column">
                  <div class="blog-post-date mb-2">${date}</div>
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text flex-grow-1">${post.excerpt}</p>
                  <div class="blog-post-tags mb-3">
                      ${post.tags.map(tag => `<span class="badge bg-secondary">${tag}</span>`).join('')}
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">${post.readTime}</small>
                      <a href="${post.link}" class="btn btn-sm btn-outline-primary">Read More →</a>
                  </div>
              </div>
          `;
          
          colDiv.appendChild(cardDiv);
          blogContainer.appendChild(colDiv);
          
          // Add intersection observer for animation
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      setTimeout(() => {
                          entry.target.classList.add('visible');
                          observer.unobserve(entry.target);
                      }, index * 100);
                  }
              });
          }, { threshold: 0.1, rootMargin: '50px' });
          
          observer.observe(cardDiv);
      });
  }

  // Function to show blog section
  function showBlogSection() {
      const blogSection = document.getElementById('blog');
      if (!blogSection) return;
      
      // Show the blog section
      blogSection.style.display = 'block';
      
      // Add visible class after a short delay for smooth transition
      setTimeout(() => {
          blogSection.classList.add('visible');
          
          // Scroll to blog section smoothly
          blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Initialize blog posts if not already loaded
          if (document.getElementById('blog-posts').innerHTML === '') {
              displayBlogPosts();
          }
      }, 50);
  }

  // Initialize blog section (but keep it hidden)
  if (document.getElementById('blog-posts')) {
      // Blog posts will be loaded when section is shown
  }

});
