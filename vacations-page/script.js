const stars = document.querySelectorAll('.fa-star')
const btns = document.querySelectorAll('.btn-info')
const descs = document.querySelectorAll('.desc')

stars.forEach(star => {
    star.addEventListener('click', function () {
        if (star.classList.contains('fa-regular')) {
            star.classList.replace('fa-regular', 'fa-solid')
        } else {
            star.classList.replace('fa-solid', 'fa-regular')
        }
    })
})

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        descs.forEach(desc => {
            if (btn.id == desc.id) {
                if (desc.classList.contains('active')){
                    desc.classList.remove('active')
                    console.log("removeu")
                }else{
                    desc.classList.add('active')
                    console.log("adicionou")
                }
            }
        })
    })
})