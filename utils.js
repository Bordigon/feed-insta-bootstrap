import {info} from "./info.js"

const counter = 9;

const exampleModal = document.getElementById('uploadPhotoModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title').innerHTML()
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `${modalTitle}`
    modalBodyInput.value = recipient
  })
}

const gripOneTemplate = ()=>{
	var display = [];
	const photo = info.photos;
	for(var t = 0; t<counter; t++){
	const onePhoto = photo[t];
	const likes = Math.trunc(Math.random()*1000);
	display = display + `
		<div class="card my-3">
			<div class="card-header bg-white d-flex justify-content-between mx-0 px-0 ">
				<h5 class="card-tittle m-2">${onePhoto.title}</h5>
				<small class="text-muted mx-2">${onePhoto.date}</small>
			</div>
			<img class="photo" src=${onePhoto.image_url}>
			<div class="card-body">
				<strong>${likes} Likes</strong>
				<p class="card-text">${onePhoto.description}</p>
			</div>
		</div>
	`
	}
	console.log(display);
	return display
}

const gripAllTemplate = () =>{
	var result = `<div class="container-fluid">`
	const photo = info.photos;
	for(var t = 0; t<counter; t++){
		result = result + `<div class="row mx-1 my-4">`;
		for(var k = 0; k<counter && k<3; k++){
			const onePhoto=photo[t];
			result = result + `
				<div class="col-sm-4">
					<img class="img-fluid h-100 w-100 photoAll"  src=${onePhoto['image_url']}>
				</div>
			`;
			t++;
		}
		t--;
		result += `</div>`
	}
	result = result + `</div>`
	return result;

}

const root = document.getElementById('root')
root.innerHTML = gripAllTemplate();
const gripAll = document.getElementById('gripAll')
const gripOne = document.getElementById('gripOne')
	gripAll.addEventListener("click", ()=>{

	root.innerHTML = `${gripAllTemplate()}`
	});

	gripOne.addEventListener("click", ()=>{
	root.innerHTML = `<div class="d-flex justify-content-center" ><div class="col-sm-4"> ${gripOneTemplate()}</div></div>`
	});




