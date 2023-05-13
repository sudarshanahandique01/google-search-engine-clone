function clicked() {
  let ans = document.getElementById("searchh").value;
  console.log(ans);
  url = "https://www.google.com/search?q=" + ans;
  window.open(url, "_blank");
  document.querySelector("input").value = "";
}
