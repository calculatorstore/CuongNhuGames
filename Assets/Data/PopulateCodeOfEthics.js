function renderList() {
  codeOfEthicsData.forEach(
    function(tenet){
      var listItem = document.createElement("li");
      listItem.innerText = tenet.Text;
      document.getElementById("COEList").appendChild(listItem);
    }
  );
}
renderList();