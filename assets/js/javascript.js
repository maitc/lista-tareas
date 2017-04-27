var lista = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }];	

lista.forEach(function(cv){
	document.write("<li>" + cv.title + "</li>");
})

function aniadir(){
	var input = document.getElementById("inputAñadir");
	var mostrarList = document.getElementsByClassName("list");
	mostrarList[0].innerHTML += "<li>" + input.value + "</li>";
	input.value = " ";

	function NuevaTarea(userId, id, title, completed){
	this.userId = userId;
	this.id = id;
	this.title = title;
	this.completed = completed;
	this.numeroUser = function(){
		var nu = this.userId;
		return nu;
	};
	this.nuevaTa = function(){
		var nueTarea = this.title;
		lista.push(this);
	}
}

var construc = new NuevaTarea();
construc.nuevaTa();

javascript: document.body.contentEditable = 'true'; document.designMode = 'on'; void 0;
};






