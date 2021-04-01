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

const today=new Date();
const infoUser=fetch(`https://api.github.com/users/${getName(url)}`);
const log=console.log;

const getDate=new Promise((resolve, reject)=>{
  setTimeout(()=>today?resolve(today):reject('День не определен'), 3000);
});

const getInfoUser=new Promise((resolve, reject)=>{
  setTimeout(()=>infoUser?resolve(infoUser):reject('Информация не найдена'), 3000);
});

getInfoUser.then(
	res=>{
		body.append(today);
		Promise.all([getDate,getInfoUser])
	  .then(([today, infoUser])=>infoUser)
		.then(res=>res.json())
		.then(json=>{
		    const photo = json.avatar_url;
		    const nameUser=json.name;
		    const infoUser=json.bio;
		    const webSaitUser=json.html_url;
		    log(photo,nameUser, infoUser, webSaitUser);

		    const userName=document.querySelector('.userName');
		    userName.className='active';
		    userName.innerHTML=`Пользователь: `+(json.name);
		    if (json.name) {
		       } else {
		       json.name.innerHTML = 'Данные отсутствуют';
		        }
		    log(userName);
		    userName.href=json.html_url;

		    document.querySelector('.infoProfile').innerHTML=`Информация о пользователе: `+(json.bio);
		    if (json.bio) {
		       } else {
		       json.bio.innerHTML = 'Данные отсутствуют';
		      }

		    const img = new Image();
		    img.src = photo;
		    document.body.append(img);
		    if (json.avatar_url) {
		       } else {
		       json.avatar_url.innerHTML = 'Данные отсутствуют';
		      }
		})
	})


  const plouderJs=document.querySelector('.loadingio-spinner-spinner-rzcxf7v29le');

  setTimeout(()=>{
  plouderJs.style.display='none';
}, 3000);

//document.write(today))
  // var body = document.body;
  // let url = window.location.href;
  // let getName = (url) =>  {
  // 	let g = url.split('=');
  // 	let name1 = g[1];
  // 	if (name1 == undefined) {
  // 			name1 = '6thSence'
  // 	}
  // 	return name1;
  // }
  //
  //
  // fetch(`https://api.github.com/users/${getName(url)}`)
  //   .then(res=>res.json())
  //   .then(json=>{
  //     console.log(json);
  //     const {name, avatar_url, bio, html_url}=json;
  //     const photo = avatar_url;
  //     const nameUser=name;
  //     const infoUser=bio;
  //     const webSaitUser=html_url;
  //     console.log(photo,nameUser, infoUser, webSaitUser);
  //
  //     const userName=document.querySelector('.userName');
  //     userName.className='active';
  //     userName.innerHTML=`Пользователь: `+(name);
  //     if (name) {
  //        } else {
  //        name.innerHTML = 'Данные отсутствуют';
  //         }
  //     console.log(userName);
  //     userName.href=html_url;
  //
  //     document.querySelector('.infoProfile').innerHTML=`Информация о пользователе: `+(bio);
  //     if (bio) {
  //        } else {
  //        bio.innerHTML = 'Данные отсутствуют';
  //       }
  //
  //     const img = new Image();
  //     img.src = photo;
  //     document.body.append(img);
  //     if (avatar_url != null) {
  //        } else {
  //        avatar_url.innerHTML = 'Данные отсутствуют';
  //       }
  //   })
