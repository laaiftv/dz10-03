const images = [
"https://source.unsplash.com/oaEpgHCgTT8",
"https://source.unsplash.com/9v_xYRu_laY",
"https://source.unsplash.com/qrPqGP-SG8w",
"https://source.unsplash.com/zshyCr6HGw0",
"https://source.unsplash.com/-g7axSVst6Y",
"https://source.unsplash.com/fTKkJL5Xjw8",
"https://source.unsplash.com/sPXGnvwOjdU"];


const carousel = document.querySelector('.carousel');
const carouselItems = document.createDocumentFragment();

images.forEach((item, index) => {
  // Set up elements (tags)
  const listItem = document.createElement('li');
  const figure = document.createElement("figure");
  const link = document.createElement("a");
  const image = document.createElement("img");

  // Set up element attributes
  listItem.classList.add('carousel-item');
  link.href = images[index];
  link.target = '_blank';
  image.src = `${images[index]}/600x600`;
  image.loading = 'lazy';
  image.alt = ""; // Note: for production, we'd want to set actual per-image alt text

  // Put the list items together in the <ul>
  figure.appendChild(image);
  link.appendChild(figure);
  listItem.appendChild(link);
  carouselItems.appendChild(listItem);
});

carousel.appendChild(carouselItems);


// Light and dark mode
const getTheme = () => {
  return localStorage.getItem('theme') || 'dark';
};

const colorScheme = document.querySelector('meta[name="color-scheme"]');

const applyTheme = theme => {
  document.body.className = theme;
  colorScheme.content = theme;
  localStorage.setItem('theme', theme);
};

const themeToggleButton = document.querySelector('.theme-toggle');

let theme = getTheme();
applyTheme(theme);

themeToggleButton.addEventListener('click', () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  theme = newTheme;
});