  const url='https://api.github.com/users/6thSence';
  fetch(url)
    .then(res=>res.json())
    .then(json=>{
      console.log(json);
      const {name, avatar_url, bio, html_url}=json;
      const photo = avatar_url;
      const nameUser=name;
      const infoUser=bio;
      const webSaitUser=html_url;
      console.log(photo,nameUser, infoUser, webSaitUser);
      const img = new Image();
      img.src = photo;
      document.body.append(img);
      let userName=document.querySelector('.userName').innerHTML=`Пользователь: `+JSON.stringify(name);
      userName.addEventListener('click', () => userName.src=webSaitUser);
      document.querySelector('.infoProfile').innerHTML=`Информация о пользователе: `+(bio);
      document.querySelector('.infoweb').innerHTML=JSON.stringify(html_url);
        })
