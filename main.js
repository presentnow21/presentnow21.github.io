const contentBox = document.querySelector('.content-box');

contentBox.addEventListener('click',(e)=>{
    if(e.target.id){
        contentBox.innerHTML = ''
        if(e.target.id === 'item-1'){
            profileRender();
        }else if(e.target.id === 'item-2'){
            hobbyRender();
        }else if(e.target.id === 'item-3'){
            likeRender();
        }else if(e.target.id === 'item-4'){
            contactRender();
        }
        else if(e.target.id === 'close-btn'){
            closeBtn();
        }
    }
});

function profileRender(){
    let template = `
                <div class="close-btn" id="close-btn">x</div>
                <div class="w-50 profile-img">
                    <img src="image/profile.jpg" alt="profile-image">
                </div>
                <div class="w-50 profile-text">
                    <h2>An soo jung</h2>
                    <h2>Front-end Developer</h2>
                    <h2><i class="fa-solid fa-location-dot"></i>Seoul</h2>
                </div>`
            contentBox.innerHTML = template;
}

function closeBtn(){
    let template = `
        <div class="item w-50">
            <i class="fa-solid fa-user" id="item-1"></i>
        </div>
        <div class="item w-50">
            <i class="fa-solid fa-kitchen-set" id="item-2"></i>
        </div>
        <div class="item w-50">
            <i class="fa-solid fa-heart" id="item-3"></i>
        </div>
        <div class="item w-50">
            <i class="fa-solid fa-envelope" id="item-4"></i>
        </div>`
    contentBox.innerHTML = template;
}

function hobbyRender(){
    let template = `
        <div class="close-btn" id="close-btn">x</div>
        <div class="w-100">
            <h1>Hobby</h1>
            <div class="flex-center">
                <div>
                    <i class="fa-solid fa-person-biking"></i>
                    <div>Biking</div>
                </div>
                <div>
                    <i class="fa-solid fa-fire-burner"></i>
                    <div>Cooking</div>
                </div>
                <div>
                    <i class="fa-solid fa-headphones-simple"></i>
                    <div>Listening to music</div>
                </div>
            </div>
        </div>`
        contentBox.innerHTML = template;
}

function likeRender(){
    let template = `
        <div class="close-btn" id="close-btn">x</div>
        <div class="w-100">
            <h1>Favorite things</h1>
            <div class="flex-center">
                <div>
                    <i class="fa-solid fa-cat"></i>
                    <div>Cat</div>
                </div>
                <div>
                    <i class="fa-solid fa-mug-saucer"></i>
                    <div>Tea</div>
                </div>
                <div>
                    <i class="fa-solid fa-utensils"></i>
                    <div>Delicious things</div>
                </div>
            </div>
        </div>`
        contentBox.innerHTML = template;
}

function contactRender(){
    let template = `
        <div class="close-btn" id="close-btn">x</div>
        <div class="w-100 padding">
            <i class="fa-solid fa-envelope"></i>
            <h2>presentnow21@gmail.com</h2>
        </div>`
    contentBox.innerHTML = template;   
}