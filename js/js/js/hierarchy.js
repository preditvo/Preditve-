if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "index.html";
}

d3.csv("data/hierarchy.csv").then((data) => {
  const chart = new d3.OrgChart()
    .container(".chart-container")
    .data(data)
    .nodeWidth((d) => 250)
    .nodeHeight((d) => 120)
    .childrenMargin((d) => 40)
    .compactMarginBetween((d) => 15)
    .compactMarginPair((d) => 80)
    .nodeContent((d, i, arr, state) => `
      <div style="padding-top:20px;background-color:#fff;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,0.1);">
        <div style="font-weight:bold;font-size:16px;color:#2c3e50;">${d.data.name}</div>
        <div style="font-size:14px;color:#7f8c8d;">${d.data.title}</div>
      </div>
    `)
    .render();
});
