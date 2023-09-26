document.addEventListener('DOMContentLoaded', function () {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const userInfo = document.getElementById('user-info');
        const user = data.results[0]; // Suponiendo que la respuesta contiene un usuario aleatorio
  
        // Accede al elemento de imagen y configura la fuente (src) con la URL de la imagen
        const userImage = document.getElementById('user-image');
        userImage.src = user.picture.large;
  
        // Accede al elemento de nombre y configura el texto con el nombre del usuario
        const userName = document.getElementById('user-name');
        userName.textContent = `Nombre: ${user.name.first} ${user.name.last}`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  