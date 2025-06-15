// Show current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Toggle navigation menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('active');
});

// Poems Array
const poems = [
  {
    title: "Bloomy Delight",
    content: [
      "I am the bloomy delight in the darkness.",
      "With bold glares leaving you restless..."
    ],
    body: "I am the bloomy delight in the darkness\nWith bold glares leaving you restless\nThe sweet scent O so timeless\nO what beauty lies therein\nAs you forever stand in your prisoned glare\nTrapped in a vivid yet unspeakable nightmare\nOnly to be freed by my mortal span\nForever to be tranced as my number one fan\nPetals so broad and compact\nNever to hurt but attract\nWith essence so deep only to end as it’s my time to sleep.",
    date:"June 01, 2025",
    categories: ["Nature", "Love"]
  },
  {
    title: "Rainbow",
    content: [
      "As it breaks through the cloud, silencing all the crowd.",
      "Filling the dark with transient colors..."
    ],
    body: "As it breaks through the cloud\nSilencing all the crowd\nFilling the dark with transient colours\nClearing our eyes to see our brothers\nLit with a fresh and happy glow\nO what power lies in a rainbow\nWith awe and delight,\nMaking our mornings feel right\nBut quickly, retreating into thick grey\nWithout our sorrows, which forever stay.",
    date:"June 02, 2025",
    categories: ["Nature", "Sad"]
  },
  {
    title: "Venus",
    content: [
      "Venus, if not for distance would you play with us?",
      "Come closer and feel my chill..."
    ],
    body: "Venus, if not for distance would you play with us?\nCome closer and feel my chill\nOf my everlasting pleasure, I’m sure you will\nYour hellish vibe no one but you can describe\nYour fat and angry flare\nCauses me to freeze in despair\nBut my capricious nature brings me back to our fictitious moment\nWhich I shall cherish as an honourable bestowment.\nImaginary, they call this\nBeautiful and voluptuous, you are my bliss\nWith your dense aura, I heat\nAnd look around for my feet\nFor only if I had, I would jump into your orbit\nAnd forever I will be your conduit.",
    date:"June 03, 2025",
    categories: ["Space", "Love", "Romance"]
  },
  {
    title: "Football(Soccer)",
    content: [
      "Love and unity, it would provide.",
      "Whether we play or support we do with pride..."
    ],
    body: "Love and unity, it would provide\nWhether we play or support we do with pride\nFuelling the hearts of many with skills so heavy\nEnough to drop your jaws, and get you all wavy\nIn victory or defeat we always stand on our feet\nReady for the next challenge, ready to compete\nYou say it’s just a game, we say it’s something more\nAll the passion and colour, you just can’t ignore\nAs we contort our feet drawing pictures on the field\nAll we see is beauty and art, keep your eyes peeled.",
    date:"June 04, 2025",
    categories: ["Sports", "Inspiration"]
  },
  {
    title: "Fall",
    content: [
      "I fell after her august display...",
      "Drawn by her colorful smile, I gazed.."
    ],
    body: "I fell after her august display\nI sat there never wanting to go away\nDrawn by her colorful smile, I gazed\nWarmed by her orange presence, I embraced\nEncased in our pumpkin sweet moment\nWhich felt like a never ending bestowment\nInterrupted by a sudden cool\nI looked around trying to find the fool\nSeeing rows of melancholic stares\nI stood frozen hoping this nightmare disappears\nBut quickly carried back by her warm touch\nFar away from their eerie watch",
    date:"June 05, 2025",
    categories: ["Romance", "Fall", "Love", "Nature"]
  },
  {
    title: "The One",
    content: [
      "The one, the one and only one.",
      "The one behind the gates of my imagination...",
    ],
    body: "The one, the one and only one\nThe one behind the gates of my imagination\nThe one locked away, never to be found\nDeep deep in my mind’s underground\nHoping to be freed by hers truly\nBlocked away by distance so cruelly\nOnly to be comforted by our thoughts undisturbed\nLoving in my everlasting escape unblurred\nWith qualities of her attraction so unbearable\nEnough to make our lives never miserable\nWith humour so thoughtful and witty\nHer body so glowy, she pretty\nBrains so heavenly, it’s out of this world\nElegance so bright, I am always called\nA smile of an angel, it carries me\nNot knowing how long it might last, it saddens me\nBut wherever the wind blows, we have to ride it\nHowever it might go I will remember it.",
    date:"June 06, 2025",
    categories: ["Love", "Romance"]
  }
];

function createPoemCard(poem) {
  const card = document.createElement("div");
  card.className = "poem-card";

  // Generate a snippet from the first 1–2 lines of the content
  const snippet = poem.content.slice(0, 2).join(" ");

  card.innerHTML = `
    <h3><a href="poem.html?title=${encodeURIComponent(poem.title)}">${poem.title}</a></h3>
    <p>${snippet}</p>
  `;
  return card;
}

// Helper function to capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Populate the poem gallery
document.addEventListener("DOMContentLoaded", () => {
  const gallerySection = document.querySelector(".poetry-gallery");
  const filterButtonsContainer = document.getElementById("filterButtons");
  const searchBox = document.getElementById("searchBox");

  // ====== Capitalize helper ======
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // ====== Card creation ======
  function createPoemCard(poem) {
    const card = document.createElement("div");
    card.className = "poem-card";
    card.setAttribute("data-categories", poem.categories.join(","));

    const snippet = poem.content.slice(0, 2).join(" ");

    card.innerHTML = `
      <h3><a href="poem.html?title=${encodeURIComponent(poem.title)}">${poem.title}</a></h3>
      <p>${snippet}</p>
    `;
    return card;
  }

  if (gallerySection && filterButtonsContainer) {
    // ====== Categories ======
    const categoriesSet = new Set();
    poems.forEach(poem => poem.categories.forEach(cat => categoriesSet.add(cat)));
    const categories = Array.from(categoriesSet).sort();

    // ====== Filter Buttons ======
    const allButton = document.createElement("button");
    allButton.className = "filter-btn active";
    allButton.textContent = "All";
    allButton.setAttribute("data-category", "all");
    filterButtonsContainer.appendChild(allButton);

    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.textContent = capitalize(cat);
      btn.setAttribute("data-category", cat);
      filterButtonsContainer.appendChild(btn);
    });

    // ====== Grid & Cards ======
    const poemsGrid = document.createElement("div");
    poemsGrid.className = "poems-grid";
    gallerySection.appendChild(poemsGrid);

    poems.forEach(poem => {
      const card = createPoemCard(poem);
      poemsGrid.appendChild(card);
    });

    // ====== Filter Logic ======
    filterButtonsContainer.addEventListener("click", (e) => {
      if (!e.target.matches(".filter-btn")) return;

      const selected = e.target.getAttribute("data-category");
      document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");

      document.querySelectorAll(".poem-card").forEach(card => {
        const categories = card.getAttribute("data-categories").split(",");
        const show = selected === "all" || categories.includes(selected);
        card.style.display = show ? "" : "none";
      });
    });

    // ====== Search Logic ======
    if (searchBox) {
      searchBox.addEventListener("input", () => {
        const q = searchBox.value.trim().toLowerCase();
        document.querySelectorAll(".poem-card").forEach(card => {
          const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
          const snippet = card.querySelector("p")?.textContent.toLowerCase() || "";
          const match = title.includes(q) || snippet.includes(q);
          card.style.display = match ? "" : "none";
        });
      });
    }

  // Auto-search if query param exists
  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get("search");
  if (searchQuery && searchBox) {
    searchBox.value = searchQuery;
    const q = searchQuery.toLowerCase();
    document.querySelectorAll(".poem-card").forEach(card => {
      const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
      const snippet = card.querySelector("p")?.textContent.toLowerCase() || "";
      const match = title.includes(q) || snippet.includes(q);
      card.style.display = match ? "" : "none";
    });
  }

  // Auto-select category if category param exists
  const categoryParam = searchParams.get("category");
  if (categoryParam) {
    const categoryButtons = document.querySelectorAll(".filter-btn");
    const formattedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1).toLowerCase();

    categoryButtons.forEach(btn => {
      if (btn.getAttribute("data-category") === formattedCategory) {
        btn.click();
      }
    });
  }
}

  // Load poem
  const isPoemPage = window.location.pathname.includes("poem.html");
  if (isPoemPage) {
    const titleParam = new URLSearchParams(window.location.search).get("title");
    const decodedTitle = decodeURIComponent(titleParam || "");
    const poem = poems.find(p => p.title === decodedTitle);
    if (poem) {
      document.getElementById("poem-title").textContent = poem.title;
      document.getElementById("poem-category").textContent = poem.categories.join(", ");
      document.getElementById("poem-body").textContent = poem.body;
    } else {
      document.getElementById("poem-title").textContent = "Poem Not Found";
      document.getElementById("poem-body").textContent = "We couldn't find the poem you're looking for.";
    }  
  }
});

if (window.location.pathname.includes("poem.html")) {
  const titleParam = new URLSearchParams(window.location.search).get("title");
  const decodedTitle = decodeURIComponent(titleParam || "");
  const currentPoemIndex = poems.findIndex(p => p.title === decodedTitle);

  // Display the poem
  const poem = poems[currentPoemIndex];
  if (poem) {
    document.getElementById("poem-title").textContent = poem.title;
    document.getElementById("poem-body").textContent = poem.body;
    document.getElementById("poem-category").textContent = `${poem.category} • by RAYNOI`;
  }

  // Next/Previous Navigation
  document.getElementById("nextBtn")?.addEventListener("click", () => {
    const nextIndex = (currentPoemIndex + 1) % poems.length;
    window.location.href = `poem.html?title=${encodeURIComponent(poems[nextIndex].title)}`;
  });

  document.getElementById("prevBtn")?.addEventListener("click", () => {
    const prevIndex = (currentPoemIndex - 1 + poems.length) % poems.length;
    window.location.href = `poem.html?title=${encodeURIComponent(poems[prevIndex].title)}`;
  });

  // Generate share links
  const shareURL = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(`Check out this poem by RAYNOI: "${decodedTitle}"`);

  document.getElementById("shareX").href = `https://x.com/intent/tweet?text=${shareText}%20${shareURL}`;
  document.getElementById("shareWhatsApp").href = `https://wa.me/?text=${shareText}%20${shareURL}`;
  document.getElementById("shareInstagram").href = "https://www.instagram.com/raynoi_";
}

// Featured Poem
const featured = poems[0];
document.getElementById("featuredTitle").textContent = featured.title;
document.getElementById("featuredContent").innerHTML = featured.content.join("<br>");
document.getElementById("featuredDate").textContent = featured.date;
document.getElementById("readMoreBtn").addEventListener("click", () => {
  window.location.href = `poem.html?title=${encodeURIComponent(featured.title)}`;
});

// Recent Poems
const recentPoemsDiv = document.getElementById("recentPoems");
if (recentPoemsDiv) {
  poems.slice(1, 5).forEach(poem => {
    const p = document.createElement("p");
    p.innerHTML = `<a href="poem.html?title=${encodeURIComponent(poem.title)}">${poem.title}</a>`;
    recentPoemsDiv.appendChild(p);
  });
}

// Daily Inspiration
const inspirations = [
  "Your silence still speaks in poetry.",
  "The ache you carry is not wasted.",
  "Let your scars become stanzas.",
  "Even cracked vessels pour beauty."
];
const inspirationEl = document.getElementById("inspiration");
if (inspirationEl) {
  inspirationEl.textContent = inspirations[Math.floor(Math.random() * inspirations.length)];
}

// Categories on Home Page
const categoryList = document.getElementById("categoryList");
if (categoryList) {
  const allCategories = [...new Set(poems.flatMap(poem => poem.categories))];
  allCategories.forEach(cat => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="gallery.html?category=${encodeURIComponent(cat)}">${cat}</a>`;
    categoryList.appendChild(li);
  });
}

// Gallery Preview
const previewPoemsGrid = document.getElementById("previewPoemsGrid");
if (previewPoemsGrid) {
poems.slice(0, 3).forEach(poem => {
  const card = createPoemCard(poem);
  previewPoemsGrid.appendChild(card);
});
}

// Newsletter Subscription
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", event => {
    event.preventDefault();
    const email = document.getElementById("emailInput").value.trim();
    if (email) {
      alert(`Thanks for subscribing, ${email}!`);
      newsletterForm.reset();
    }
  });
}

const searchForm = document.getElementById("searchForm");
if (searchForm) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
      window.location.href = `gallery.html?search=${encodeURIComponent(query)}`;
    }
  });
}
