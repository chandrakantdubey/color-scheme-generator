async function fetchColorScheme(hex, mode) {
  const url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.colors);
  const colorComponents = document.querySelectorAll(".color-component");
  colorComponents.forEach((comp, index) => {
    console.log(comp.querySelector(":first-child"));
    comp.querySelector(
      ":first-child"
    ).style.backgroundColor = `${data.colors[index].hex.value}`;
    comp.querySelectorAll(
      ":nth-child(2)"
    )[0].textContent = `${data.colors[index].hex.value}`;
  });
}

// event listener to fettch the colors from the api
document.querySelector(".get-color-scheme").addEventListener("click", () => {
  const mode = document.querySelector("select").value.toLowerCase();
  const hex = document.querySelector("#seed-color").value.split("#")[1];
  console.log(hex.split("#")[1]);
  fetchColorScheme(hex, mode);
});
