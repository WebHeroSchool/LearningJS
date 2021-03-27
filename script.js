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

      const userName=document.querySelector('.userName');
      userName.className='active';
      userName.innerHTML=`Пользователь: `+(name);
      if (name) {
         } else {
         name.innerHTML = 'Данные отсутствуют';
          }
      console.log(userName);
      userName.href=html_url;

      document.querySelector('.infoProfile').innerHTML=`Информация о пользователе: `+(bio);
      if (bio) {
         } else {
         bio.innerHTML = 'Данные отсутствуют';
        }

      const img = new Image();
      img.src = photo;
      document.body.append(img);
      if (avatar_url != null) {
         } else {
         avatar_url.innerHTML = 'Данные отсутствуют';
        }
    })
