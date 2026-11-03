/* One article UI; only its data changes when navigating. */
document.addEventListener("DOMContentLoaded", () => {
  const article = document.getElementById("blogArticle");
  const sections = [...document.querySelectorAll("#main-content > section")];
  const articles = window.blogArticles;
  const meta = document.querySelector('meta[name="description"]');
  const original = { title: document.title, description: meta.content };
  let listScroll = 0;
  const decode = value => {
    const element = document.createElement("textarea");
    element.innerHTML = value;
    return element.value;
  };
  function render(focus = false) {
    const slug = new URL(location.href).searchParams.get("article");
    const data = Object.hasOwn(articles, slug) ? articles[slug] : null;
    sections.forEach(section => { section.hidden = Boolean(data); });
    article.hidden = !data;
    document.title = data ? decode(data.title) : original.title;
    meta.content = data ? decode(data.description) : original.description;
    if (data) {
      const heading = decode(data.heading);
      document.getElementById("article-title").textContent = heading;
      document.getElementById("article-crumb").textContent = heading;
      document.getElementById("article-category").textContent = decode(data.category);
      document.getElementById("article-year").textContent = String(data.date).slice(-4);
      document.getElementById("article-date").textContent = data.date;
      const cover = document.getElementById("article-cover");
      cover.src = data.image;
      cover.alt = heading;
      const body = document.getElementById("article-body");
      body.innerHTML = data.body;
      const words = body.textContent.trim().split(/\s+/).filter(Boolean).length;
      document.getElementById("article-read").textContent = Math.max(1, Math.round(words / 200)) + " min read";
      const toc = document.getElementById("article-toc");
      const list = toc.querySelector("ol");
      list.replaceChildren();
      [...body.querySelectorAll("h2")].forEach((section, index) => {
        const text = section.textContent.trim();
        const step = text.match(/^\d+\.\s+(.*)$/);
        const label = step ? step[1] : text;
        section.id = "section-" + (index + 1);
        const item = document.createElement("li");
        const jump = document.createElement("a");
        jump.href = "#" + section.id;
        jump.textContent = label;
        item.append(jump);
        list.append(item);
      });
      toc.hidden = list.children.length < 2;
      const related = document.getElementById("article-related");
      related.replaceChildren();
      const title = document.createElement("h2");
      title.textContent = "More from Rebuilt Techz";
      related.append(title);
      data.related.forEach(id => {
        if (!Object.hasOwn(articles, id)) return;
        const item = articles[id];
        const link = document.createElement("a");
        link.href = "blog.html?article=" + id;
        const image = document.createElement("img");
        image.src = item.image;
        image.alt = "";
        image.decoding = "async";
        const copy = document.createElement("span");
        copy.className = "blog-article-related-copy";
        const metaLine = document.createElement("small");
        metaLine.textContent = decode(item.category) + " · " + item.date;
        const name = document.createElement("strong");
        name.textContent = decode(item.heading);
        copy.append(metaLine, name);
        const arrow = document.createElement("span");
        arrow.className = "blog-article-related-arrow";
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "\u2192";
        link.append(image, copy, arrow);
        related.append(link);
      });
    }
    if (focus) {
      const heading = document.getElementById(data ? "article-title" : "latestBlogsTitle");
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
      window.scrollTo({ top: data ? 0 : listScroll, behavior: "instant" });
    }
  }
  document.getElementById("main-content").addEventListener("click", event => {
    const link = event.target.closest("a[href]");
    if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || link.target || link.hasAttribute("download")) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname || url.hash) return;
    if (article.hidden) listScroll = window.scrollY;
    event.preventDefault();
    history.pushState(null, "", url);
    render(true);
  });
  window.addEventListener("popstate", () => render(true));
  render();
});
