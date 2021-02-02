let id: number = parseInt(window.localStorage.getItem("_idTagMax") || "0") || 0;

function createId() {
  id++;
  window.localStorage.setItem("_idTagMax", JSON.stringify(id));
  return id;
}

export default createId;