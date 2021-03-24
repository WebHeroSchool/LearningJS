  var body = document.body;
  let url = window.location.href;
  let getName = (url) =>  {
  	let g = url.split('=');
  	let name1 = g[1];
  	if (name1 == undefined) {
  			name1 = '6thSence'
  	}
  	return name1;
  }

  fetch(`https://api.github.com/users/${getName(url)}`)
    .then(res=>res.json())
    .then(json=>{
      console.log(json);
      const {name, avatar_url, bio, html_url}=json;
      const photo = avatar_url;
      const nameUser=name;
      const infoUser=bio;
      const webSaitUser=html_url;
      console.log(photo,nameUser, infoUser, webSaitUser);


      let userName=document.querySelector('.userName').innerHTML=`Пользователь: `+(name);
      if (name != null) {
         } else {
         name.innerHTML = 'Данные отсутствуют';
      }
      name.addEventListener("click", () => window.location = html_url);
      document.querySelector('.infoProfile').innerHTML=`Информация о пользователе: `+(bio);
      if (bio != null) {
         } else {
         bio.innerHTML = 'Данные отсутствуют';
      }
      document.querySelector('.infoweb').innerHTML=JSON.stringify(html_url);
      const img = new Image();
      img.src = photo;
      document.body.append(img);
      if (avatar_url != null) {
         } else {
         avatar_url.innerHTML = 'Данные отсутствуют';
      }
        })
